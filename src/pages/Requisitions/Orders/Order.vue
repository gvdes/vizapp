<template>
    <q-page>
        <q-header elevated class="bg-darkl1 text-grey-5">
            <q-toolbar>
                <q-btn @click="$router.go(-1)" color="white" icon="arrow_back" dense flat/> <span class="q-pl-md">Pedido {{ordercatch.id}}</span>
                <q-space />
                <div v-if="order">Destino: {{order.to.alias}}</div>
            </q-toolbar>
            <q-toolbar v-if="order">
                <div>
                    <div>Origen: {{ order.from.alias }}</div>
                    <div class="text--2 text-white">{{humantime(order.created_at)}}</div>
                </div>
                <q-space/>
                <div class="row">
                    <div class="column text-center q-pa-sm">
                        <div class="text-white">{{ordersize[0]}}</div>
                        <div class="text--2">mdls</div>
                    </div>
                    <div class="column text-center q-pa-sm">
                        <div class="text-white">{{ordersize[1]}}</div>
                        <div class="text--2">pzs</div>
                    </div>
                </div>
            </q-toolbar>
        </q-header>

        <div class="row q-pt-sm q-pl-sm">
            <div class="col-xs-12 col-md-3" v-for="(prod,idxprod) in products" :key="idxprod">
                <q-card class="bg-darkl1 q-mb-sm q-mr-sm" @click="selItem(prod)">
                    <div class="row items-center q-pt-md">
                        <div class="q-px-lg">
                            <q-img src="../../../assets/_defprod2.png" style="height: 50px; width: 50px"/>
                        </div>
                        <div class="text-white col">
                            <div class="text-bold">{{prod.code}}</div>
                            <div>{{prod.name}}</div>
                            <div class="text--2 text-grey-5">{{prod.description}}</div>
                        </div>
                    </div>
                    
                    <div class="col q-px-md">
                        <q-markup-table flat dark class="bg-none">
                            <thead>
                                <tr>
                                    <th>Sol. ({{prod.units.name}}s)</th>
                                    <th>pzs / caj</th>
                                    <th>Disp. (piezas)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>{{prod.ordered.amount}}</td>
                                    <td>{{prod.pieces}}</td>
                                    <td>
                                        <span v-if="order.status.id>1" :class="prod.ordered.stock>=1?'text-green-13':'text-pink-13'">
                                            {{prod.ordered.stock}}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                    </div>
                    <q-banner rounded class="bg-orange text-white" v-if="prod.ordered.comments">{{prod.ordered.comments}}</q-banner>
                </q-card>
            </div>
        </div>
  
        <q-dialog v-model="wndSetItem.state" position="bottom" @hide="wndSetItemReset">
            <q-card v-if="wndSetItem.art" class="exo bg-darkl0 text-grey-5">
                <q-card-section>
                    <div class="row text-white items-center justify-between">
                        <span class="text-h6">{{wndSetItem.art.code}}</span>
                        <span class="text-bold">{{wndSetItem.art.name}}</span>
                    </div>
                    <div class="text--1">{{wndSetItem.art.description}}</div>

                    <template v-if="!editableord">
                        <div class="row q-gutter-md">
                            <div>Cantidad: {{wndSetItem.units}}</div>
                        </div>
                    </template>

                </q-card-section>
                <q-form v-if="editableord">
                    <q-card-section class="row justify-around items-center">
                        <!-- <q-select class="col" disable label="unidad" dark color="green-13" :options="seltypeunit" v-model="wndSetItem.unittype"/> -->
                        <q-input dark color="green-13"
                            min="1" type="number" label-slot
                            v-model="wndSetItem.units" autofocus
                        >
                            <template v-slot:label>
                                <div class="row text-amber-13">
                                    <q-icon :name="wndSetItem.art.units==1?'fas fa-box':'fas fa-puzzle-piece'"/>
                                    <div class="q-pl-sm">
                                        {{wndSetItem.art.units.name}}s
                                        <span v-if="wndSetItem.art.units.id==3"> ({{wndSetItem.art.pieces}} pzs / caj)</span>
                                    </div>
                                </div>
                            </template>
                        </q-input>
                        <q-input label="notas" dark color="green-13" type="text" v-model="wndSetItem.notes"/>
                    </q-card-section>
                    <q-card-actions align="around">
                        <template v-if="duplicate">
                            <q-btn v-if="deleteitem=='ask'" @click="deleteitem='confirm'" dark flat color="pink-13" class="bg-none" icon="delete" :disable="wndSetItem.adding"/>
                            <q-btn v-else dark flat color="pink-13" @click="removeProduct" class="bg-none" :label="'eliminar '+wndSetItem.art.code" :disable="erasing.state" :loading="erasing.state"/>
                        </template>
                        <q-btn v-if="deleteitem=='ask'" dark flat color="green-13" 
                            @click="addProduct" type="submit"
                            class="bg-none" icon="done"
                            :loading="wndSetItem.adding"
                            :disable="wndSetItem.adding"
                        />
                        <q-btn v-else dark flat color="amber-13" class="bg-none" label="cancelar" @click="deleteitem='ask'"/>
                    </q-card-actions>
                </q-form>
            </q-card>
        </q-dialog>

        <q-dialog v-model="wndLog.state">
            <q-card v-if="wndLog.order" class="exo bg-darkl0 text-grey-5" style="width:500px">
                <q-card-section>
                    <q-timeline dark color="green-13">
                        <q-timeline-entry heading>
                            {{wndLog.order.from.alias}} {{wndLog.order.id}}
                        </q-timeline-entry>

                        <q-timeline-entry
                            v-for="log in wndLog.order.log" :key="log.id"
                            :subtitle="log.details.responsable"
                            :title="log.name"
                        >
                            <div class="row text-center">
                                <div class="col row items-center">
                                    <q-icon name="fas fa-hourglass-start" color="blue-grey-7"/>
                                    <span class="text-white q-px-sm">{{humantime(log.created_at)}}</span>
                                </div>
                                <div class="col row items-center">
                                    <q-icon name="fas fa-hourglass-end" color="blue-grey-7"/>
                                    <span class="text-white q-px-sm">{{humantime(log.updated_at)}}</span>
                                </div>
                                <div class="col row items-center">
                                    <q-icon name="fas fa-stopwatch" color="blue-grey-7"/>
                                    <span class="text-white q-px-sm">{{duration(log)}}</span>
                                </div>
                            </div>
                        </q-timeline-entry>
                    </q-timeline>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-footer class="bg-darkl1 text-white" elevated v-if="order">
            <div class="q-pa-xs row justify-between items-center">
                <template v-if="order.status.id==1"><!-- El pedido esta en captura -->
                    <template v-if="nextstep.value=='ask'">
                        <template v-if="archive.state">
                            <q-btn flat color="amber-13" label="cancelar" @click="archive.state=false"/>
                            <q-btn flat color="red-13" label="archivar pedido" @click="order_archive"/>
                        </template>
                        <template v-else>
                            <q-btn flat color="red-13" icon="fas fa-archive" @click="archive.state=true"/>
                            <q-select dark dense filled fill-input color="green-13"
                                use-input hide-selected class="text-uppercase" hide-dropdown-icon
                                input-debounce="0" option-value="id" option-label="code"
                                :value="autocom.model"
                                :options="autocom.options" 
                                @filter="autocomplete"
                                @input="selItem"
                                :type="iptsearch.type" behavior="menu" >
                                <template v-slot:no-option>
                                    <q-item><q-item-section class="text-grey">Sin coincidencias</q-item-section></q-item>
                                </template>

                                <template v-slot:prepend>
                                    <q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
                                </template>

                                <template v-slot:option="scope">
                                    <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                        <!-- <q-item-section avatar>
                                            <q-img :src="scope.opt.img" style="width:35px;height:35px;"/>
                                        </q-item-section> -->
                                        <q-item-section>
                                            <q-item-label><span class="text-bold">{{scope.opt.code}}</span> - {{scope.opt.name}}</q-item-label>
                                            <q-item-label caption class="text--2">{{ scope.opt.description }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-btn flat color="green-13" icon="done" @click="nextstep.value='confirm'" :disable="!products.length"/>
                        </template>    
                    </template>
                    <template v-else>
                        <q-btn flat color="amber-13" label="cancelar" @click="nextstep.value='ask'"/>
                        <q-btn flat color="green-13" label="terminar" @click="changeState()" :disable="nextstep.state" :loading="nextstep.state"/>
                    </template>
                </template>

                <template v-else-if="order.status.id==5"><!-- El pedido esta en camino -->
                    <template v-if="!tostock.state">
                        <span class="text-grey-4 q-pl-md">{{order.status.name}}</span>
                        <span>
                            <q-btn flat color="green-13" icon="history" @click="showLog"/>
                            <q-btn flat color="green-13" icon="fas fa-people-carry" @click="tostock.state=true" v-if="owner"/>
                        </span>
                    </template>
                    <template v-else>
                        <span></span>
                        <span>
                            <!-- <q-btn flat color="green-13" label="validar"/> -->
                            <q-btn flat color="green-13" label="Confirmar entrega" @click="changeState(9)"/>
                            <q-btn flat color="amber-13" label="cancelar" @click="tostock.state=false"/>
                        </span>
                    </template>
                </template>

                <template v-else><!-- El pedido puede mostrar el log -->
                    <span class="text-grey-4 q-pl-md">{{order.status.name}}</span>
                    <q-btn flat color="green-13" icon="history" @click="showLog"/>
                </template>

                <q-btn icon="print" flat color="green-13" v-if="order.printed" @click="reprint" :loading="print.state" :disable="print.state"/>
            </div>
        </q-footer>
    </q-page>
</template>

<script>
// import OrderBody from '../../../components/Requisition/OrderBody.vue'
import { date } from 'quasar'
import dbproduct from '../../../API/Product'
import dbreqs from '../../../API/requisitions'
import io from 'socket.io-client'
export default {
    // components:{ OrderBody:OrderBody },
    data(){
        return{
            seltypeunit:[
                {"label":"cajas","value":1},
                {"label":"piezas","value":2},
            ],
            products:[],
            leftdrawer:true,
            order:undefined,
            iptsearch:{
				value:'',
				processing:false,
				type:"text",
				icon:'fas fa-hashtag'
            },
            wndSetItem:{
                state:false,
                adding:false,
                idxlist:undefined,
                art:undefined,
                units:1,
                notes:"",
                unittype:undefined,
            },
            wndLog:{
                state:false,
                order:undefined
            },
            deleteitem:'ask',
            erasing:{state:false},
            nextstep:{value:'ask',state:false},
            sounds:{ moved:new Audio('sounds/moved.mp3') },
            archive:{state:false},
            tostock:{state:false},
            duplicate:false,
            print:{state:false},
            autocom:{model:null,options:undefined}
        }
    },
    async beforeMount(){
        this.$store.commit('Layout/hideToolbarModule');
        this.order = await dbreqs.find(this.ordercatch.id);
        this.products = this.order.products;
    },
    async mounted(){
        console.log(this.owner);
        //solicitar al socket, avisar al canal que este usuario se unio
        this.vsocket = await io(this.$vsocket);
        this.vsocket.emit('using_order',{profile:this.profile,order:this.ordercatch});
        
        this.vsocket.on('order_changestate',(data)=>{
            console.log("Se ha cambiado el status a un pedido... ");
            if(data.order.id==this.ordercatch.id){
                console.log("y si es este");
                console.log(data);
                this.order.log=data.order.log;
                this.order.status=data.order.status;
                this.sounds.moved.play();
            }else{ console.log("... pero no es este"); }
        });
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    methods:{
        autocomplete (val, update, abort) {
            let data={params:{ "code": val.trim() }};
            dbproduct.autocomplete(data).then(success=>{
                let resp = success.data;
                update(() => { this.autocom.options=resp; });
            }).catch(fail=>{ console.log(fail); });
        },
        showLog(){
            this.wndLog.order=this.order;
            this.wndLog.state=true;
        },
        reprint(){
            console.log("reimprimiendo");
            let data = {"_requisition":this.ordercatch.id};
                this.print.state=true;
            dbreqs.reprint(data).then(success=>{
                console.log(success);
                this.print.state=false;
            }).catch(fail=>{
                console.log(fail);
            });
        },
        changeState(_atstate=null){
            let atstate = _atstate?_atstate:(parseInt(this.order.status.id)+1);
            let data = { id:this.ordercatch.id,"_status":atstate }
            let message = "";
            let newstatus = {id:atstate,name:undefined};

            switch (atstate) {
                case 2:
                    console.log("Moviendo a por surtir");
                    newstatus.name="Por surtir";
                    message='Enviando pedido...';
                break;

                case 9:
                    console.log("Moviendo a Terminados");
                    newstatus.name="Recibido";
                    message='Recibiendo y finalizando...';
                break;
            }

            this.$q.loading.show({message:message});
            dbreqs.nextstep(data).then(success=>{
                console.log("%cLa respuesta llego...","font-size:1.5em;color:yellow;");
                let resp = success.data;
                console.log(resp);
                this.order = resp.order;
                this.products = resp.order.products;
                this.$q.loading.hide();
                this.$q.notify({color:"positive", icon:"done", position:'center'});
                this.vsocket.emit('order_changestate',{state:newstatus,profile:this.profile,order:this.order});
            }).catch(fail=>{
                console.log(fail);
            });
        },
        wndSetItemReset(){
            this.wndSetItem.idxlist=undefined;
            this.wndSetItem.art=undefined;
            this.wndSetItem.units=1;
            this.wndSetItem.notes="";
            this.wndSetItem.adding=false;
            this.deleteitem='ask';
        },
        order_archive(){
            let data = { "id" : this.ordercatch.id, "_status": 10 }
            
            this.$q.loading.show({ message: "Archivando pedido, espera..." });
            dbreqs.nextstep(data).then(success=>{
                let resp = success.data;
                let newstatus = {id:10,name:"Cancelado"};
                console.log(resp);
                this.order = resp.order;
                this.$q.loading.hide();
                this.$q.notify({
                    message:"Pedido archivado",
                    color:"positive", icon:"done", position:'center'
                });
                this.vsocket.emit('order_changestate',{state:newstatus,profile:this.profile,order:this.order});
                this.$router.push('/pedidos');
            }).catch(fail=>{console.log(fail);});
        },
        removeProduct(prod){
            this.erasing.state=true;
            let data = {"_product":this.wndSetItem.art.id,"_requisition":this.ordercatch.id};
            
            dbreqs.remove(data).then(success=>{
                let resp = success.data;
                this.products.splice([this.wndSetItem.idxlist],1);
                this.erasing.state=false;
                this.wndSetItem.state=false;
            }).catch(fail=>{
                console.log(fail);
            });
        },
        addProduct(){
            console.log("agregando...");
            this.wndSetItem.adding=true;

            let data = new Object();
            let product = this.wndSetItem.art;
            product.amount=this.wndSetItem.units;
            product.comments=this.wndSetItem.notes;

            data._product=product.id;
            data.amount=product.amount;
            data.comments=product.comments;
            data._requisition=this.ordercatch.id;

            dbreqs.add(data).then(success=>{
                let artidx = this.wndSetItem.idxlist;
                let resp = success.data;
                if(artidx>=0){// el articulo fue editado
                    console.log("Articulo editado");
                    let _product = this.products[artidx];
                    _product.ordered.amount=this.wndSetItem.units;
                    _product.ordered.comments=this.wndSetItem.notes;
                }else{ this.products.unshift(resp); }// el articulo fue agregado

                this.wndSetItem.state=false;
                this.autocom.options=undefined;
                this.autocom.model=null;
            }).catch(fail=>{ console.log(fail); });
        },
        selItem(opt){
            console.log(opt);
            let idx = this.products.findIndex(item=>{ return opt.id==item.id});

            if(idx>=0){// el producto ya esta en la lista
                console.log("Editando producto");
                this.duplicate=true;
                let art = this.products[idx];
                this.wndSetItem.notes=art.ordered.comments;
                this.wndSetItem.units=art.ordered.amount;
                this.wndSetItem.idxlist=idx;
                this.wndSetItem.art=art;
            }else{// agregar nuevo producto
                console.log("Agregando producto...");
                this.duplicate=false;
                this.wndSetItem.art=opt;
            }

            this.wndSetItem.state=true;
        },
        toogleIptSearch(){
			switch (this.iptsearch.type) {
				case "text": 
					this.iptsearch.type="number";
					this.iptsearch.icon="fas fa-font";
				break;
				case "number": 
					this.iptsearch.type="text";
					this.iptsearch.icon="fas fa-hashtag";
				break;
			}

			this.$refs.iptsearch.focus();
		}
    },
    computed:{
        profile:{ get(){ return this.$store.getters['Account/profile'] } },
        editableord(){
            if(this.order){
                return this.order.status.id==1?true:false;
            }
            return false;
        },
        ordercatch(){ return this.$route.params },
        ordersize(){
            if(this.order){
                let sizeprod = this.products.length;
                if(sizeprod){
                    let labelpzs = this.products.reduce((ammount,item)=>{ return parseInt(item.ordered.amount)+ammount; },0);
                    return [sizeprod,labelpzs];
                } return [0,0];
            }else{return [0,0];}
		},
        humantime(){ return time =>{ 
				let now = Date.now(); 
				let timecalc = Date.parse(time);
				let diff = date.getDateDiff(now, timecalc, 'days');

				switch (diff) {
					case 0: return 'Hoy a las '+date.formatDate(timecalc, 'hh:mm a'); break;
					case 1: return 'Ayer a las '+date.formatDate(timecalc, 'hh:mm a'); break;
					default: return `Hace ${diff} dias, a las `+date.formatDate(timecalc, 'hh:mm a'); break;
				}
			}
        },
        duration(){ return log =>{
                let t_ini = Date.parse(log.created_at);
                let t_end = Date.parse(log.updated_at);

                let mins = date.getDateDiff(t_end, t_ini, "minutes");

                if(mins<=59){
                    return mins+"m";
                }else {
                    let t = parseFloat(mins/60).toFixed(2).split(".");
                    return `${t[0]}h ${t[1]}m`;
                }
            }
        },
        owner(){ return this.order?this.order.created_by.id==this.profile.me.id:false; },
        // isduplicate(){ return code => { this.products.findIndex(item=>{return item.code==code}) } }
        isduplicate(){ return code => { 
                return this.products.findIndex(item=>{return item.code==code})>=0;
            } 
        }
    }
}
</script>

<style lang="scss">
    ._optact{
        background: saddlebrown!important;
        color:white;
    }
</style>