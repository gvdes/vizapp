<template>
    <q-page padding>
        <q-header class="bg-darkl1" elevated>
            <div class="row items-center justify-between q-py-sm">
                <div class="col">
                    <q-btn flat dense icon="fas fa-chevron-left" color="white" class="q-pl-sm" @click="$router.push('/almacen/contador')"/>
                    Inventario {{this.$route.params.id}}
                </div>
                <div class="col text-right q-pr-md" v-if="index">
                    <q-btn v-if="index.inventory.status.id==2&&imCreator&&progress.value==1" rounded class="text-dark bg-green-13" icon="done" label="Terminar" no-caps @click="terminate" :size="ismobile ? 'sm':'md'"/>
                    <q-btn v-if="index.inventory.status.id==3" rounded class="text-dark bg-green-13" icon="fas fa-file-download" label="Reporte" no-caps @click="buildPDF" :loading="bpdf.state" :size="ismobile ? 'sm':'md'"/>
                </div>
            </div>

            <div class="row items-center q-pb-lg">
                <div class="col q-px-sm">
                    <div class="text--2">Progreso:</div>
                    <q-linear-progress rounded dark size="15px" :value="progress.value" color="primary" >
                        <div class="absolute-center flex flex-center">
                            <q-badge color="none" text-color="white" :label="progress.label" />
                        </div>
                    </q-linear-progress>
                </div>

                <div class="col q-px-sm" v-if="index&&index.inventory.status.id==3">
                    <div class="text--2">Presicion:</div>
                    <q-linear-progress rounded dark size="15px" :value="parseFloat(reliability.value)" :color="reliability.color" >
                        <div class="absolute-center flex flex-center">
                            <q-badge color="none" text-color="white" :label="reliability.label" />
                        </div>
                    </q-linear-progress>
                </div>
            </div>

            <template v-if="index&&index.inventory.status.id==3">
                <div class="row q-pb-sm text-center col row items-center justify-around text-grey-5">
                    <div>
                        <div class="text--2 text-grey-6">Total de unidades</div>
                        <div class="text-h6">{{reliability.fullpzs}}</div>
                    </div>

                    <div>
                        <div class="text--2 text-grey-6">Piezas Contadas</div>
                        <div class="text-h6">{{reliability.fullcount}}</div>
                    </div>

                    <div>
                        <div class="text--2 text-grey-6">Piezas Faltantes</div>
                        <div :class="tpf==0?'text-positive':'text-pink-13'" class="text-h6">{{tpf}}</div>
                    </div>

                    <div>
                        <div class="text--2 text-grey-6">Piezas Sobrantes</div>
                        <div :class="tpf==0?'text-positive':'text-amber-13'" class="text-h6">{{tpe}}</div>
                    </div>
                </div>
            </template>
        </q-header>

        <template v-if="index">
            <q-card class="bg-darkl1 text-grey-5 exo q-mt-lg">
                <q-card-section>
                   <q-table dark flat
                        card-class="bg-none"
                        :data="tableProducts.rows"
                        :columns="tableProducts.columns"
                        :visible-columns="visibleCols"
                    >
                        <template v-slot:body="props">
                            <q-tr :props="props">
                                <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                <q-td key="code" :props="props">
                                    {{ props.row.code }}<br>
                                    <span class="text--2 text-grey-6">{{props.row.description}}</span>
                                </q-td>
                                <q-td key="locations" :props="props">{{props.row._locations}}</q-td>
                                <q-td key="sai" :props="props">{{props.row.sai}}</q-td>
                                <q-td key="counter" :props="props">{{props.row.counter}}</q-td>
                                <q-td key="sat" :props="props">{{props.row.sat}}</q-td>
                                <q-td key="ufs" :props="props"> <span :class="ufsColor(props.row.ufs)">{{Math.abs(props.row.ufs)}}</span></q-td>
                                <q-td key="presition" :props="props">{{props.row.presition}}</q-td>
                                <q-td key="countby" :props="props">{{props.row.by ? props.row.by.nick :'' }}</q-td>
                                <q-td key="state" :props="props">

                                    <template v-if="index&&index.inventory.status.id==3">
                                        <q-icon name="done" color="white" size="sm"/>
                                    </template>
                                    <template v-else>
                                        <template v-if="props.row.state==1">
                                            <q-icon name="done" color="white" size="sm"/>
                                        </template>
                                        <template v-if="props.row.state==4">
                                            <q-btn size="md" flat rounded color="green-13" icon="done" @click="counter(props)"/>
                                        </template>

                                        <template v-if="props.row.state==2">
                                            <q-spinner-dots color="amber-13" size="sm"/><br/>
                                            <span class="text-amber-12 text--2" v-if="countingrespo">({{countingrespo.me.nick}})</span>
                                        </template>

                                        <template v-if="props.row.state==3">
                                            <q-btn size="sm" flat rounded color="amber-13" icon="fas fa-pencil-alt" @click="counter(props)"/>
                                        </template>
                                    </template>
                                </q-td>
                            </q-tr>
                        </template>
                    </q-table>
                </q-card-section>
            </q-card>

            <q-card class="bg-darkl1 text-grey-5 exo q-mt-xl" v-if="tableUnproducts.rows.length">
                <q-card-section class="bg-grey-9 text-amber-13 row items-center justify-between">
                    <q-icon name="warning" size="md"/> Los siguientes productos no pueden ser contados y no afectaran el resultado.
                </q-card-section>

                <q-card-section>
                    <q-table dark flat
                        card-class="bg-none"
                        :data="tableUnproducts.rows"
                        :columns="tableUnproducts.columns"
                    >
                        <template v-slot:body="props">
                            <q-tr :props="props">
                                <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                <q-td key="code" :props="props">
                                    {{ props.row.code }}<br>
                                    <span class="text--2 text-grey-6">{{props.row.description}}</span>
                                </q-td>
                                <q-td key="locations" :props="props">{{props.row._locations}}</q-td>
                                <q-td key="sai" :props="props">{{props.row.sai}}</q-td>
                                <q-td key="counter" :props="props">{{props.row.counter}}</q-td>
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
                        <template v-if="counterToSave!=null&&counterToSave>=0">
                            <q-btn flat no-caps rounded color="green-13" label="Guardar" @click="save"
                                :disable="wndCounter.saving"
                                :loading="wndCounter.saving"
                            />
                        </template>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </template>
    </q-page>
</template>

<script>
import io from 'socket.io-client'
import invsdb from '../../../API/inventories'
import { QSpinnerTail } from 'quasar'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
export default {
    data() {
        return {
            index:null,
            tableProducts:{
                rows:[],
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true},
                    { name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
                    { name:'locations', align:'center', label:'Ubicaciones', field:row=>row._locations, sortable:true },
                    { name:'sai', align:'center', label:'SAI', field:row=>row.state, sortable:true },
                    { name:'counter', align:'center', label:'Conteo', field:row=>row.counter, sortable:true },
                    { name:'sat', align:'center', label:'SAT', field:row=>row.state, sortable:true },
                    { name:'ufs', align:'center', label:'F/S', field:row=>row.ufs, sortable:true },
                    { name:'presition', align:'center', label:'Presicion', field:row=>row.presition, sortable:true },
                    { name:'countby', align:'center', label:'Conto', field:row=>row.by, sortable:true },
                    { name:'state', align:'center', label:'Estatus', field:row=>row.state, sortable:true }
                ],
            },
            tableUnproducts:{
                rows:[],
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true},
                    { name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
                    { name:'locations', align:'center', label:'Ubicaciones', field:row=>row._locations, sortable:true },
                    { name:'sai', align:'center', label:'SAI', field:row=>row.state, sortable:true },
                ],
            },
            socket:null,
            imCreator:false,
            wndCounter:{
                state:false,
                idxrow:null,
                // counters:[],
                counters:[],
                saving:false,
                stateIfCancel:null
            },
            countingrespo:null,
            joined:false,
            bpdf:{ state:false },
            maxChancesCount:2
        }
    },
    async beforeMount(){
        this.$store.commit('Layout/hideToolbarModule');
        this.$q.loading.show({message:'Validando...', spinner:QSpinnerTail, spinnerColor:'green-13'});
        this.index = await invsdb.find(this.$route.params.id);

        if (this.index.success) {
            if (this.stay()) {
                this.index.inventory.products.forEach(prod=>{                    
                    console.log(`=========================\nEvaluando ${prod.code}...`);
                    console.log(`STOCK: ${prod.ordered.stocks}`);

                    if(prod.ordered.stocks>0){
                        let rowcalcs = this.rowCalcs(prod);//obtener los datos de la fila
                        console.log(`COUNT: ${prod.ordered.details.editor.nick}`);

                        prod.state = rowcalcs.state;//definimos el estado de la fila
                        prod._locations = prod.locations.map(loc=>{return loc.path}).join(', ');//generamos la presentacion de las ubicaciones
                        prod.sai = prod.ordered.stocks;//seteamos el stock inicial
                        prod.counter = prod.ordered.stocks_acc;//colocamos las piezas contadfas si ya fue contado
                        prod.sat = prod.ordered.stocks_end;//pone el stock despues del conteo
                        prod.ufs = rowcalcs.ufs;//pone las unidades faltantes o sobrantes
                        prod.presition = rowcalcs.presition;//setea la confiabilid                                                                                    ad
                        prod.by = rowcalcs.by;//setea quien edito la fila

                        this.tableProducts.rows.unshift(JSON.parse(JSON.stringify(prod)));
                    }else{
                        // el producto con SAI en 0 no puede ser contabilizado, ya que la formula se indeterminaria
                        // la aplicacion ajustara a 0 el conteo de forma autmatica 
                        prod.sai = prod.ordered.stocks;
                        prod._locations = prod.locations.map(loc=>{return loc.path}).join(', ');
                        this.tableUnproducts.rows.unshift(JSON.parse(JSON.stringify(prod)));
                    }

                    console.log(`=========================\n\n`)
                });

                await this.$sktCounters.connect() ;
                this.$sktCounters.emit('joinat',{ room:this.socketroom,user:this.profile });
                this.$sktCounters.on('joined',data=>{ this.sktjoined(data); });
                this.$sktCounters.on('counting',data=>{ this.sktcounting(data); });
                this.$sktCounters.on('cancelcounting',data=>{ this.sktcancelcounting(data); });
                this.$sktCounters.on('countingconfirmed',data=>{ this.sktcountingconfirmed(data); });
            }else{ this.notifyExclution(); }// No pertenece a los usuarios miembros del conteo
        }else{ this.notify404(); }//  El folio no existe

        this.$q.loading.hide();
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    methods: {
        sktcountingconfirmed(data){
            // console.log("%cSe ha confirmado un conteo!!!","font-size:2em;color:gold");
            // console.log(data);
            let idx = this.tableProducts.rows.findIndex(prod => prod.id == data.product.id);
            this.tableProducts.rows[idx].state=1;
            this.tableProducts.rows[idx].counter=data.settings.stock;
        },
        sktjoined(data){
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

            let data = { "_inventory":this.index.inventory.id, "_status":3 }
            console.log(data);

            invsdb.nextStep(data).then(success=>{
                let resp = success.data;
                resp.order.products.forEach(prod => {
                    let idx = this.tableProducts.rows.findIndex(el=> el.code==prod.code);
                    this.tableProducts.rows[idx].ordered.stocks_end = prod.ordered.stocks_end;
                    this.tableProducts.rows[idx].sat = prod.ordered.stocks_end;
                });
                this.index.inventory.status = resp.order.status;
                this.index.inventory.log = resp.order.log;
                this.$q.loading.hide();
                this.$q.notify({
                    icon:"done",
                    color:'positive',
                    message:'Inventario finalizado!!'
                });
            }).catch(fail=>{ console.log(fail); });
        },
        save(){
            // this.wndCounter.saving=true;//bloquear boton de guardado
            let product = this.tableProducts.rows[this.wndCounter.idxrow]; //almacena los datos de la fila actual para usarlos en este bloque
            console.log(product.ordered.details);
            let _modifies = product.ordered.details.settings ? product.ordered.details.settings.modifies+1 : 1;// Seteamos el numero de veces que ha sido modificada la fila para guardarlo
            // console.log(`Numero de modificacion: ${_modifies}`);

            let data = {//Datos a guardar en DB
                "_product": product.id, "_inventory": this.index.inventory.id, "stock": this.counterToSave,
                "settings":{ locs:product.locations, values:this.wndCounter.counters, modifies:_modifies }
            }

            this.tableProducts.rows[this.wndCounter.idxrow].ordered.details.settings = data.settings;
            this.tableProducts.rows[this.wndCounter.idxrow].ordered.stocks_acc = this.counterToSave;
            this.tableProducts.rows[this.wndCounter.idxrow].counter = this.counterToSave;

            invsdb.rowCount(data).then(success=>{
                console.log("%cCambios aplicados","font-size:1.5em;color:green;");
                let rowcalcs = this.rowCalcs(this.tableProducts.rows[this.wndCounter.idxrow]);
                console.log(rowcalcs);

                this.tableProducts.rows[this.wndCounter.idxrow].presition = rowcalcs.presition;
                this.tableProducts.rows[this.wndCounter.idxrow].ufs = rowcalcs.ufs;
                this.tableProducts.rows[this.wndCounter.idxrow].state = rowcalcs.state;
                this.tableProducts.rows[this.wndCounter.idxrow].by = this.profile.me;

                console.log("datos modificados");
                console.log(this.tableProducts.rows[this.wndCounter.idxrow]);

                this.$q.notify({ color:'positive', icon:'done', position:'center', timeout:1000, message:'Guardado!' });

                // console.log("%cConfirmando conteo...!!!","font-size:2em;color:gold");
                this.$sktCounters.emit('countingconfirmed',{room:this.socketroom,product:product,by:this.profile,settings:data});

                this.counterReset(); this.wndCounter.state=false;
            }).catch(fail=>{ console.log(fail); });
        },
        rowCalcs(row){
            let rowcalcs = { ufs:null, presition:null, by:null, settings:null, state:3 };
            let counter = row.ordered.stocks_acc; let sai = row.ordered.stocks; let reliab = null;

            if(counter!=null){
                rowcalcs.ufs = sai-counter;// obtenemos las unidades faltantes o sobrantes
                reliab = ((1-(Math.abs(sai-counter)/sai))*100).toFixed(2);//se calcula la confiabilidad
                rowcalcs.presition = reliab ? reliab : 100;//setea la confiabilidad
                rowcalcs.by = row.ordered.details.editor;//setea al editor de la fila
                // console.log(`%cveces contado: ${row.ordered.details.settings.modifies}`,"color:gold");
                rowcalcs.state = row.ordered.details.settings.modifies<this.maxChancesCount ? 4:1;//setea el estatus de la fila
                return rowcalcs;
            }
            // console.log(`%cpor contar...`,"color:#1289A7");
            return rowcalcs;
        },
        counterCancel(){
            // console.log("Se ha Cancelado el Contador");

            this.tableProducts.rows[this.wndCounter.idxrow].state = this.wndCounter.stateIfCancel;
            this.$sktCounters.emit('cancelcounting',{room:this.socketroom,by:this.profile,product:this.tableProducts.rows[this.wndCounter.idxrow]});
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
            console.log(_product);
            this.$sktCounters.emit('counting',{room:this.socketroom,product:_product,by:this.profile});
        },
        counterReset(){//Se ejecuta siempre que se cierra la ventan del Contador
            this.wndCounter.idxrow=null;
            this.wndCounter.counters=[];
            this.wndCounter.saving=false;
            this.countingrespo=null;
        },
        stay(){//valida si el usuario logueado es miembro de este inventario
            //validar si el rol es 2 || 3 validar que pertenezca a la suxursal del contador
            if((this.index.inventory.created_by.id==this.profile.me.id)||(this.profile.me._rol==1)){
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
            this.bpdf.state=true;
            // console.log("%cConstruyendo Documento...","font-size:2em;color:orange;");
            this.$q.loading.show({message:'Generando Reporte...'});
            console.log(this.index);

            let logstart = this.log.filter(log => { return log.id == 1;})[0];
            let logend = this.log.filter(log => { return log.id == 3;})[0];

            let _timestart = this.$moment(logstart.created_at);
            let _timeend = this.$moment(logend.created_at);
            let fulltime = _timeend.diff(_timestart,'m');

            let fullpresition = 0;
            let pdfpage = 1;
            let folio = `21-${this.index.inventory.id}`
            let docname = `${folio}.pdf`;
            let timestart = _timestart.format('MM/DD/YYYY h:mm a');
            let timeend = _timeend.format('MM/DD/YYYY h:mm a');
            let invtype = this.index.inventory.type;
            let invadmin = `${this.index.inventory.created_by.names} ${this.index.inventory.created_by.surname_pat} [${this.index.inventory.created_by.nick}]`;
            let invresps = this.index.inventory.responsables;

            const pdf = new jsPDF({unit:'pt',format:'letter'});
            pdf.addFont('pdf/ParadroidMono-Light.ttf', 'Paradroid', 'normal');
            pdf.setFont('Paradroid');

            let sheetDimensions = {
                w:pdf.internal.pageSize.getWidth(),
                h:pdf.internal.pageSize.getHeight()
            }

            let emw = (sheetDimensions.w-50);//elements max width
            let emh = (sheetDimensions.h-80);//elements max height

            let rows = [...this.tableProducts.rows].map(item=>{

                let description = () =>{// construye la descripcion acortandola en caso de ser necesaria
                    let descr = item.description.length>=35 ? item.description.substring(0,35)+'...' : item.description;
                    return descr.toUpperCase();
                }
                
                return [
                    item.code,
                    description(),
                    item.ordered.stocks,
                    item.ordered.stocks_acc,
                    item.ufs,
                    item.ordered.stocks_end,
                    item._locations,
                    item.presition
                ];//define las columnas de la fila
            });

            var headers = [
                { name:"code",prompt:"Articulo",width:70 },
                { name:"descript",prompt:"Descripcion",width:185 },
                { name:"initstock",prompt:"SAI",width:40 },
                { name:"counter",prompt:"UC",width:40 },
                { name:"fs",prompt:"F/S",width:40 },
                { name:"endstock",prompt:"SAT",width:40 },
                { name:"locations",prompt:"Ubicaciones",width:100 },
                { name:"presition",prompt:"Pres.",width:40 },
            ];

            let footerPage = (totals) => {
                pdf.setFontSize(7);
                pdf.text(`${pdfpage}`,(emw/2+10),(emh+50),{align:'center',baseline:'middle'});
                pdf.text(`Inventario ${folio}, ${this.workin.workpoint.name}`,575,(emh+50),{align:'right',baseline:'middle'});
            }

            let headerTable = (cx,cy) => {
                pdf.setFillColor('#000000');
                pdf.line(cx,cy,575,cy,"F");

                cy+=20;// incremento en el eje Y para pintar las columnas del header
                let ncol = 1;

                pdf.setFontSize(11);
                for (const header of headers) {
                    pdf.setTextColor('#2d3436');
                    pdf.text(`${header.prompt}`,cx,cy);

                    ncol++;
                    if(ncol>1){cx+=header.width;}
                }

                cx=25;// devuelve el eje X al inicio de la pagina
                cy+=13;// set CordinateVertical
                pdf.setFillColor('#000000');
                pdf.line(cx,cy,575,cy,"F");
            }

            /** H E A D E R   P D F*/
                /** I M A G E N  SUP IZQ*/
                    pdf.addImage('pdf/rsi.png', 'PNG', 355, 5, 250, 60);
                    pdf.addImage('pdf/logo_org.png', 'PNG', 35, 22, 170, 50);
                /** I M A G E N  SUP IZQ*/
                pdf.setFontSize(12);
                pdf.setTextColor("#ffffff");
                pdf.text(`Inventario ${folio}`,570,29,{align:'right',baseline:'middle'});
                pdf.setFontSize(10);
                pdf.text(`${this.workin.workpoint.name}`,570,45,{align:'right',baseline:'middle'});
            /** H E A D E R   P D F*/

            /** S U B H E A D E R */
                pdf.setTextColor("#000000");
                let cx=25;// set CordinateHorizontal
                let cy=112;// set CordinateVertical
                pdf.text(`Duracion: `,cx,cy);
                pdf.text(`Inicio: `,cx,(cy+=13));
                pdf.text(`Termino: `,cx,(cy+=13));
                pdf.text(`Tipo: `,cx,(cy+=13));

                cx=80;// set CordinateHorizontal
                cy=112;// set CordinateVertical
                pdf.text(`${fulltime} minutos`,cx,cy);
                pdf.text(`${timestart}`,cx,(cy+=13));
                pdf.text(`${timeend}`,cx,(cy+=13));
                pdf.text(`${invtype.name}`,cx,(cy+=13));

                cx=290;// set CordinateHorizontal
                cy=112;// set CordinateVertical
                pdf.text(`Administrador: `,cx,cy);
                pdf.text(`Responsables: `,cx,(cy+=13));
                pdf.text(`Productos: `,cx,(cy+=13));
                // pdf.text(`ShettDemensions: `,cx,(cy+=13));

                cx=380;// set CordinateHorizontal
                cy=112;// set CordinateVertical
                pdf.text(`${invadmin}`,cx,cy);
                pdf.text(`${invresps.length}`,cx,(cy+=13));
                pdf.text(`${this.index.inventory.products.length}`,cx,(cy+=13));
                // pdf.text(`W: ${sheetDimensions.w} - H: ${sheetDimensions.h} `,cx,(cy+=13));
            /** S U B H E A D E R */

            /** T A B L A   D E   P R O D U C T O S */
                /** H E A D E R  &&  F O O T E R*/
                    headerTable(25,170);
                    footerPage(1);
                /** H E A D E R  &&  F O O T E R*/

                    /** B O D Y */
                        pdf.setFontSize(8);
                        cx=25;// set CordinateHorizontal
                        cy=205;// set CordinateVertical
                        let nrow = 0;

                        for (const row of rows) {// ITERANDO LAS FILAS
                            if(nrow%2==0){ pdf.setFillColor('#ffffff'); }else{ pdf.setFillColor('#ced6e0'); }// define el color de la fila
                            pdf.rect(cx, cy, 550, 20, "F");//dibuja la fila con el color definido
                            
                            for (let idx = 0; idx < row.length; idx++) {//dibuja las solumnas de la fila
                                pdf.text(`${row[idx]}`,cx,(cy+7),{baseline:'hanging'});
                                cx+=headers[idx].width;//recorre la coordenada X a la derecha para justificarla a su cabecera
                            }

                            
                            if(cy>emh){//si el eje Y supera al maximo de alto de la pagina
                                cy = 70;//devuelve el eje Y al inico de la pagina
                                pdf.addPage();//agrega una pagina nueva
                                pdfpage++;
                                headerTable(25,30);//pinta la cxabecera de la fila al inicio de la pagina
                                footerPage(1,1);
                                pdf.setFontSize(8);//el tamaño de la fuenta vuelve a 8
                                pdfpage++;
                            }else{ cy+=20; }//incrementa el eje Y para la siguiente fila

                            nrow++;//incrementa el nuero de fila
                            cx=25;//devuelave el eje X al inicio de la pagina para la siguiente fila
                        }
                    /** B O D Y */

                    /** R E S P O N S A B L E S */
                        pdf.setFontSize(12);
                        cy+=40;
                        cx=25;

                        // if(cy>emh){
                        //     pdf.text(`Responsables`,25,cy,{baseline:'hanging'});
                        // }else{
                        //     /**Agregar una paghina */
                        // }

                        cy+=10
                        pdf.setFontSize(10);
                        for (const respo of invresps) {//iterando responsables
                            pdf.text(`${respo.names} ${respo.surname_pat}`,25,(cy+=30),{baseline:'hanging'});
                        }

                    /** R E S P O N S A B L E S */                    
            /** T A B L A   D E   P R O D U C T O S */
            pdf.save(docname);
            this.$q.loading.hide();
            this.bpdf.state=false;
        }
    },
    computed:{
        workin(){ return this.$store.getters['Account/workin'];},
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
        counterToSave(){ return this.wndCounter.counters.reduce((amount,item)=>{ return amount+parseInt(item); },null); },
        ismobile(){ return this.$q.platform.is.mobile; },
        socketroom(){ return `COUNTER${this.$route.params.id}`},
        log(){ return this.index ? this.index.inventory.log : []; },
        visibleCols(){ 
            // return (this.index&&this.index.inventory.status.id!=3) ?  
            //     ['code','locations','sai','counter','sat','ufs','presition','countby','state']:
            //     ['code','locations','counter','state'];
            return (this.index&&this.index.inventory.status.id!=3) ?  
                ['code','locations','counter','countby','state']:
                ['code','locations','sai','counter','sat','ufs','presition','countby','state'];
        },
        tpf(){ return this.tableProducts.rows.filter(row=> row.ufs>0).reduce((acc,row)=>{ return acc+row.ufs },0); },
        tpe(){ return this.tableProducts.rows.filter(row=> row.ufs<0).reduce((acc,row)=>{ return acc+Math.abs(row.ufs) },0); },
        reliability(){
            let reliability = { label:'0%', value:0, color:null, fullpzs:null, fullcount:null }

            if(this.index){
                reliability.fullpzs = this.tableProducts.rows.reduce((acc,row)=>{ return acc+row.sai; },0);
                reliability.fullcount = this.tableProducts.rows.reduce((acc,row)=>{ return acc+row.counter; },0);

                let reliab = parseFloat( ((1-(Math.abs(reliability.fullpzs-reliability.fullcount)/reliability.fullpzs))*100).toFixed(2) );

                reliability.color = reliab==100 ? 'positive':'orange-14';
                reliability.label = `${reliab}%`;
                reliability.value = parseFloat(reliab/100).toFixed(2);

                return reliability;
            }
            return reliability;
        },
        ufsColor(){
            return ufs =>{
                let color = '';
                if (ufs>0) { color='text-pink-13'; }else if (ufs<0) { color='text-amber-13'; }else{ color='text-positive'; }
                return color;
            }
        }
    }
}
</script>
