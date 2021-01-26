<template>
    <q-page padding>
        <q-header class="bg-darkl1" elevated>
            <q-toolbar>
                <q-btn flat rounded dense icon="keyboard_backspace" color="white" @click="$router.push('/almacen/contador')"/>
                Inventario {{this.$route.params.id}}
            </q-toolbar>
            <q-separator />
            <q-toolbar>
                <q-linear-progress rounded dark size="15px" :value="progress.value" color="primary" >
                    <div class="absolute-center flex flex-center">
                        <q-badge color="none" text-color="white" :label="progress.label" />
                    </div>
                </q-linear-progress>
            </q-toolbar>
        </q-header>

        <template v-if="index">
            <q-card class="bg-darkl1 text-grey-5 exo">
                <q-card-section>
                   <q-table dark flat
                        card-class="bg-none"
                        :data="tableProducts.rows"
                        :columns="tableProducts.columns"
                        :visible-columns="tableProducts.visibleCols"
                    >
                        <template v-slot:body="props">
                            <q-tr :props="props">
                                <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                <q-td key="code" :props="props">
                                    {{ props.row.code }}
                                    <br>
                                    <span class="text--2 text-grey-6">{{props.row.description}}</span>
                                </q-td>
                                <q-td key="description" :props="props">{{ props.row.description }}</q-td>
                                <q-td key="locations" :props="props">{{props.row._locations}}</q-td>
                                <q-td key="counter" :props="props">{{props.row.counter}}</q-td>
                                <q-td key="state" :props="props">
                                    <template v-if="props.row.state==1" >
                                        <q-icon name="done" color="green-13" size="sm"/>
                                    </template>

                                    <template v-if="props.row.state==2">
                                        <q-spinner-dots color="amber-13" size="sm"/><br/>
                                        <span class="text-amber-12 text--2" v-if="countingrespo">({{countingrespo.me.nick}})</span>
                                    </template>

                                    <template v-if="props.row.state==3">
                                        <q-btn size="sm" flat rounded color="amber-13" icon="fas fa-pencil-alt" @click="counter(props)"/>
                                    </template>
                                </q-td>
                            </q-tr>
                        </template>
                    </q-table>
                </q-card-section>
            </q-card>

            <q-dialog v-model="wndCounter.state" position="bottom" persistent>
                <q-card class="bg-darkl0 text-grey-5 exo" v-if="wndCounter.idxrow!=null">
                    <q-card-section>
                        {{ tableProducts.rows[wndCounter.idxrow].code }}<br/>
                        <span class="text--2">{{ tableProducts.rows[wndCounter.idxrow].description }}</span>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="q-gutter-md">
                        <q-input v-for="(loc,idx) in tableProducts.rows[wndCounter.idxrow].locations"
                            :key="idx"
                            dark color="green-13"
                            :autofocus="idx==0"
                            min="0" type="number"
                            v-model="wndCounter.counters[idx]"
                        >
                            <template v-slot:prepend><span class="text--2">{{loc.path}} :</span></template>
                        </q-input>

                        <div v-if="tableProducts.rows[wndCounter.idxrow].locations.length>1">Total: {{counterToSave}}</div>
                    </q-card-section>

                    <q-card-actions align="around">
                        <q-btn label="Cancelar" flat rounded color="light-blue-13" no-caps @click="counterCancel"></q-btn>
                        <template v-if="wndCounter.counters.length">
                            <q-btn flat no-caps rounded color="green-13" label="Guardar" @click="save"
                                :disable="wndCounter.saving"
                                :loading="wndCounter.saving"
                            />
                        </template>
                    </q-card-actions>
                </q-card>
            </q-dialog>
            <template v-if="imCreator">
                <q-page-sticky position="bottom-right" :offset="[10,10]" v-if="progress.value==1">
                    <q-btn rounded class="bg-darkl1 text-green-13" icon="done" label="Terminar" no-caps @click="terminate"/>
                </q-page-sticky>
            </template>
        </template>
    </q-page>
</template>

<script>
import io from 'socket.io-client'
import invsdb from '../../../API/inventories'
import { QSpinnerTail } from 'quasar'
export default {
    data() {
        return {
            index:null,
            tableProducts:{
                rows:[],
                visibleCols:['code','locations','counter','state'],
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true},
                    { name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
                    // { name:'description', align:'left', label:'Descripcion', field:row=>row.description, sortable:true },
                    { name:'locations', align:'center', label:'Ubicaciones', field:row=>row._locations, sortable:true },
                    { name:'counter', align:'center', label:'Conteo', field:row=>row.counter, sortable:true },
                    { name:'state', align:'center', label:'Estatus', field:row=>row.state, sortable:true },
                ],
            },
            productsRefresh:[],
            socket:null,
            imCreator:false,
            wndCounter:{
                state:false,
                idxrow:null,
                counters:[],
                saving:false,
                stateIfCancel:null
            },
            sktcounter:null,
            countingrespo:null,
            joined:false
        }
    },
    async beforeMount(){
        this.$store.commit('Layout/hideToolbarModule');
        this.$q.loading.show({message:'Validando...',spinner:QSpinnerTail,spinnerColor: 'green-13'});
        this.index = await invsdb.find(this.$route.params.id);
        console.log(this.index);

        if (this.index.success) {
            if (this.stay()) {
                console.log("Acceso Exitoso!!, formateando filas...");

                this.index.inventory.products.forEach(prod=>{
                    prod.state = prod.ordered.details.settings ? 1:3;
                    prod._locations = prod.locations.map(loc=>{return loc.path}).join(', ');
                    prod.counter = prod.ordered.stocks_acc;

                    this.tableProducts.rows.unshift(JSON.parse(JSON.stringify(prod)));
                });
                console.log("... LISTO!!!");
                console.log(`Uniendo al ROOM ${this.socketroom}...`);
                this.sktcounter = await io(`${this.$vsocket}/counters`);
                this.sktcounter.emit('joinat',{ room:this.socketroom,user:this.profile });
                this.sktcounter.on('joined',data=>{ this.sktjoined(data); });
                this.sktcounter.on('counting',data=>{ this.sktcounting(data); });
                this.sktcounter.on('cancelcounting',data=>{ this.sktcancelcounting(data); });
                this.sktcounter.on('countingconfirmed',data=>{ this.sktcountingconfirmed(data); });
            }else{ this.notifyExclution(); }// No pertenece a los usuarios miembros del conteo
        }else{ this.notify404(); }//  El folio no existe

        this.$q.loading.hide();
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    methods: {
        sktcountingconfirmed(data){
            console.log("%cSe ha confirmado un conteo!!!","font-size:2em;color:gold");
            console.log(data);
            let idx = this.tableProducts.rows.findIndex(prod => prod.id == data.product.id);
            this.tableProducts.rows[idx].state=1;
            this.tableProducts.rows[idx].counter=data.settings.stock;
        },
        sktjoined(data){
            console.log("Usuario conectado al conteo");
            console.log(data);

            if(data.me.id!=this.profile.me.id){
                this.$q.notify({
                    color:'dark',
                    message:`${data.me.nick} se ha unido al conteo`,
                    position:'bottom-left',
                    textColor: 'green-13',
                    timeout:1200,
                    avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
                });
            }
        },
        sktcounting(data){
            console.log("Contando elemento...");
            console.log(data);
            let idx = this.tableProducts.rows.findIndex(prod => prod.id == data.product.id);
            this.countingrespo = data.by;
            this.tableProducts.rows[idx].state=2;
        },
        sktcancelcounting(data){
            console.log("Cancelando elemento de forma remota");
            console.log(data);
            let idx = this.tableProducts.rows.findIndex(prod => prod.id == data.product.id);
            this.tableProducts.rows[idx].state=3;
            this.countingrespo=null;
        },
        terminate(reqstate=undefined,settings=undefined){
            this.$q.loading.show({message:'Finalizando Inventario, espera...'});
            console.log(this.index.inventory.id);

            let data = {
                "_inventory":this.index.inventory.id,
                "_status":3
            }
            
            console.log('Ejecutando NextStep...');
            console.log(data);

            // console.log(data);
            invsdb.nextStep(data).then(success=>{
                let resp = success.data;
                console.log(resp);
                this.productsRefresh = resp.order.products;
                // this.data.inventory.status = resp.order.status;
                this.$q.loading.hide();

            }).catch(fail=>{ console.log(fail); });
        },
        save(){
            this.wndCounter.saving=true;//bloquear boton de guardado
            this.tableProducts.rows[this.wndCounter.idxrow].counter=this.counterToSave;
            this.tableProducts.rows[this.wndCounter.idxrow].state=1;

            let product = this.tableProducts.rows[this.wndCounter.idxrow];

            let data = {
                "_product": product.id,
                "_inventory": this.index.inventory.id,
                "stock": this.counterToSave,
                "settings":{locs:product.locations,values:this.wndCounter.counters,modified:true}
            }

            invsdb.rowCount(data).then(success=>{
                let resp = success.data;
                console.log(resp);

                this.$q.notify({
                    color:'positive', icon:'done',
                    position:'center', timeout:1000,
                    message:'Guardado!'
                });

                console.log("%cConfirmando conteo...!!!","font-size:2em;color:gold");
                this.sktcounter.emit('countingconfirmed',{room:this.socketroom,product:product,by:this.profile,settings:data});

                this.counterReset();
                this.wndCounter.state=false;
            }).catch(fail=>{
                console.log(fail);
            });

        },
        counterCancel(){
            console.log("Se ha Cancelado el Contador");

            this.tableProducts.rows[this.wndCounter.idxrow].state = this.wndCounter.stateIfCancel;
            this.sktcounter.emit('cancelcounting',{room:this.socketroom,by:this.profile,product:this.tableProducts.rows[this.wndCounter.idxrow]});
            this.counterReset();
            this.wndCounter.state=false;
        },
        counter(row){
            console.log(row);
            let idrow = row.key;
            let idx = this.tableProducts.rows.findIndex(prod => prod.id == idrow);

            this.wndCounter.stateIfCancel = this.tableProducts.rows[idx].state;
            this.tableProducts.rows[idx].state=2;
            this.wndCounter.idxrow = idx;
            this.wndCounter.state = true;

            let _product = this.tableProducts.rows[idx];
            this.sktcounter.emit('counting',{room:this.socketroom,product:_product,by:this.profile});
        },
        counterReset(){//Se ejecuta siempre que se cierra la ventan del Contador
            this.wndCounter.idxrow=null;
            this.wndCounter.counters=[];
            this.wndCounter.saving=false;
            this.countingrespo=null;
        },
        stay(){//valida si el usuario logueado es miembro de este inventario
            if(this.index.inventory.created_by.id==this.profile.me.id){
                this.imCreator=true;
                return true;
            }else{
                let idx = this.index.inventory.responsables.findIndex(respo => { return respo.id == this.profile.me.id; });
                return idx >= 0 ? true:false;
            }
        },
        notifyExclution(){
            this.$q.notify({
                message:`Raios!!, No eres miembro de este conteo!!`,
                icon:'fas fa-sad-cry', timeout:1000,
                color:'negative', position:'top'
            });
            this.$router.push('/almacen/contador');
        },
        notify404(){
            this.$q.notify({
                message:`Raios!!, el folio ${this.$route.params.id} no existe!!`,
                icon:'fas fa-sad-cry', timeout:1000,
                color:'negative', position:'top'
            });

            this.$router.push('/almacen/contador');
        },
        buildPDF(){
            console.log("%cConstruyen Documento...","font-size:2em;color:orange;");
        }
    },
    computed:{
        profile(){ return this.$store.getters['Account/profile'];},
        rowsDone(){ return this.tableProducts.rows.filter(item=>{ return item.counter!=null; }) },
        progress(){
            let _value = 0;
            let totalRows = this.tableProducts.rows.length;
            let donesRows = this.rowsDone.length;;
            let percent = this.index ? parseFloat(((donesRows*100)/totalRows).toFixed(2)) : 0;

            let _label = `${donesRows} de ${totalRows} : ${percent}%`;
            _value = parseFloat(percent/100).toFixed(2);

            return {label:_label,value:parseFloat(_value)};
        },
        counterToSave(){
            if(this.wndCounter.idxrow!=null){
                return this.wndCounter.counters.reduce((amount,item)=>{
                    return amount+parseInt(item);
                },0);
            }
            return null;
        },
        ismobile(){ return this.$q.platform.is.mobile; },
        socketroom(){ return `COUNTER${this.$route.params.id}`},
    }
}
</script>