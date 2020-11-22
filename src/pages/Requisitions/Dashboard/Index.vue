<template>
    <q-page :class="ismobile?'':'q-pb-md overflow-hidden'" :style="ismobile?'':'max-width:100%;max-height:70vh;'">
        <q-header class="bg-darktransl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Tablero de Pedidos" :sockstate="appconnected"/>
                <!-- <div class="q-pa-sm row q-gutter-sm justify-end items-center">
                    <q-input type="number" dark dense color="green-13"/>
                    <q-select use-chips v-model="filtdash.view" dark dense multiple :options="combowkps"/>
                </div> -->
			</q-card>
		</q-header>

        <div v-if="ismobile" class="q-px-sm">
            <q-table grid dark
                :data="ordersdb"
                row-key="id"
                :pagination="initpagination"
            >
                <template v-slot:item="props">
                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 text-grey-5">
                        <q-card class="bg-darkl1" v-ripple clickable @click="showLog(props.row.id)">
                            <q-card-section>
                                <div class="row items-center">
                                    <div class="col">
                                        <div class="text-h4 text-white">{{props.row.id}}</div>
                                        <div class="text-h6 text-light-blue">{{props.row.from.alias}}</div>
                                        <div class="text-amber-13">{{props.row.notes}}</div>
                                        <div class="q-pt-md text--2 text-uppercase text-grey-4">{{props.row.status.name}}</div>
                                    </div>
                                    <div class="text-center self-end">
                                        <div><q-avatar size="70px"><img :src="buildlog(props.row,'avatar')"/></q-avatar></div>
                                        <div>{{buildlog(props.row,'resp')}}</div>
                                        <div><span class="text-white text-bold">{{buildlog(props.row,'time')}}</span></div>
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </template>

                <template v-slot:bottom></template>
            </q-table>
        </div>

        <div v-else class="row justify-between">
            <div class="col q-px-sm">
                <q-card class="bg-none">
                    <q-toolbar class="q-mb-sm text-green-13 bg-darkl1 text-uppercase text-thin text-h5">
                        Levantando<q-space/>{{ orderTaking.length }}
                    </q-toolbar>
                </q-card>

                <q-scroll-area style="height: 75vh; max-width: 100%;">
                    <q-card v-for="order in orderTaking" :key="order.id" class="bg-darkl1 q-mb-sm" v-ripple clickable @click="showLog(order.id)">
                        <q-card-section>
                            <div class="row items-center">
                                <div class="col">
                                    <div class="text-h4 text-white">{{order.id}}</div>
                                    <div class="text-h6 text-light-blue">{{order.from.alias}}</div>
                                    <div class="text-amber-13">{{order.notes}}</div>
                                    <!-- <div class="q-pt-md text--2 text-uppercase text-grey-4">{{order.status.name}}</div> -->
                                </div>
                                <div class="text-center self-end">
                                    <div><q-avatar size="70px"><img :src="buildlog(order,'avatar')"/></q-avatar></div>
                                    <div>{{buildlog(order,'resp')}}</div>
                                    <div><span class="text-white text-bold">{{buildlog(order,'time')}}</span></div>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-scroll-area>
            </div>

            <div class="col q-px-sm">
                <q-card class="bg-darkl0">
                    <q-toolbar class="q-mb-sm text-green-13 bg-darkl1 text-uppercase text-thin text-h5">
                        Por surtir<q-space/>{{ orderForSupply.length }}
                    </q-toolbar>
                </q-card>

                <q-scroll-area style="height: 75vh; max-width: 100%;">
                    <q-card v-for="order in orderForSupply" :key="order.id" class="bg-darkl1 q-mb-sm" v-ripple clickable @click="showLog(order.id)">
                        <q-card-section>
                            <div class="row items-center">
                                <div class="col">
                                    <div class="text-h4 text-white">{{order.id}}</div>
                                    <div class="text-h6 text-light-blue">{{order.from.alias}}</div>
                                    <div class="text-amber-13">{{order.notes}}</div>
                                    <!-- <div class="q-pt-md text--2 text-uppercase text-grey-4">{{order.status.name}}</div> -->
                                </div>
                                <div class="text-center self-end">
                                    <div><q-avatar size="70px"><img :src="buildlog(order,'avatar')"/></q-avatar></div>
                                    <div>{{buildlog(order,'resp')}}</div>
                                    <div><span class="text-white text-bold">{{buildlog(order,'time')}}</span></div>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-scroll-area>
            </div>

            <div class="col q-px-sm">
                <q-card class="bg-darkl0">
                    <q-toolbar class="q-mb-sm text-green-13 bg-darkl1 text-uppercase text-thin text-h5">
                        Surtiendo<q-space/>{{ orderSuppling.length }}
                    </q-toolbar>
                </q-card>

                <q-scroll-area style="height: 75vh; max-width: 100%;">
                    <q-card v-for="order in orderSuppling" :key="order.id" class="bg-darkl1 q-mb-sm" v-ripple clickable @click="showLog(order.id)">
                        <q-card-section>
                            <div class="row items-center">
                                <div class="col">
                                    <div class="text-h4 text-white">{{order.id}}</div>
                                    <div class="text-h6 text-light-blue">{{order.from.alias}}</div>
                                    <div class="text-amber-13">{{order.notes}}</div>
                                    <!-- <div class="q-pt-md text--2 text-uppercase text-grey-4">{{order.status.name}}</div> -->
                                </div>
                                <div class="text-center self-end">
                                    <div><q-avatar size="70px"><img :src="buildlog(order,'avatar')"/></q-avatar></div>
                                    <div>{{buildlog(order,'resp')}}</div>
                                    <div><span class="text-white text-bold">{{buildlog(order,'time')}}</span></div>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-scroll-area>
            </div>

            <div class="col q-px-sm">
                <q-card class="bg-darkl0">
                    <q-toolbar class="q-mb-sm text-green-13 bg-darkl1 text-uppercase text-thin text-h5">
                        En camino<q-space/>{{ orderToArrive.length }}
                    </q-toolbar>
                </q-card>

                <q-scroll-area style="height: 75vh; max-width: 100%;">
                    <q-card v-for="order in orderToArrive" :key="order.id" class="bg-darkl1 q-mb-sm" v-ripple clickable @click="showLog(order.id)">
                        <q-card-section>
                            <div class="row items-center">
                                <div class="col">
                                    <div class="text-h4 text-white">{{order.id}}</div>
                                    <div class="text-h6 text-light-blue">{{order.from.alias}}</div>
                                    <div class="text-amber-13">{{order.notes}}</div>
                                    <!-- <div class="q-pt-md text--2 text-uppercase text-grey-4">{{order.status.name}}</div> -->
                                </div>
                                <div class="text-center self-end">
                                    <div><q-avatar size="70px"><img :src="buildlog(order,'avatar')"/></q-avatar></div>
                                    <div>{{buildlog(order,'resp')}}</div>
                                    <div><span class="text-white text-bold">{{buildlog(order,'time')}}</span></div>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-scroll-area>
            </div>

            <div class="col q-px-sm">
                <q-card class="bg-darkl0">
                    <q-toolbar class="q-mb-sm text-green-13 bg-darkl1 text-uppercase text-thin text-h5">
                        Entregados<q-space/>{{ orderOk.length }}
                    </q-toolbar>
                </q-card>

                <q-scroll-area style="height: 75vh; max-width: 100%;">
                    <q-card v-for="order in orderOk" :key="order.id" class="bg-darkl1 q-mb-sm" v-ripple clickable @click="showLog(order.id)">
                        <q-card-section>
                            <div class="row items-center">
                                <div class="col">
                                    <div class="text-h4 text-white">{{order.id}}</div>
                                    <div class="text-h6 text-light-blue">{{order.from.alias}}</div>
                                    <div class="text-amber-13">{{order.notes}}</div>
                                    <!-- <div class="q-pt-md text--2 text-uppercase text-grey-4">{{order.status.name}}</div> -->
                                </div>
                                <div class="text-center self-end">
                                    <div><q-avatar size="70px"><img :src="buildlog(order,'avatar')"/></q-avatar></div>
                                    <div>{{buildlog(order,'resp')}}</div>
                                    <div><span class="text-white text-bold">{{buildlog(order,'time')}}</span></div>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-scroll-area>
            </div>

            <!-- <div class="ds col">{{ orderCheckout.length }}</div>
            <div class="ds col">{{ orderArrived.length }}</div>
            <div class="ds col">{{ orderArchive.length }}</div> -->
        </div>
        
        <q-dialog v-model="wndLog.state">
            <q-card v-if="wndLog.order" class="exo bg-darkl0 text-grey-5" style="width:500px">
                <q-card-section>
                    <div class="row text-white justify-between items-center">
                        <div class="text-h3">{{wndLog.order.from.alias}} {{wndLog.order.id}}</div>
                        <div class="text-h6">
                            <div>{{ordersize(wndLog.order.products)[0]}}m {{ordersize(wndLog.order.products)[1]}}p</div>
                            <q-btn icon="print" flat color="green-13" v-if="wndLog.order.printed" @click="reprint" :loading="print.state" :disable="print.state"/>
                        </div>
                    </div>
                    <q-timeline dark color="green-13">
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
                                    <span class="text-white q-px-sm">{{log.updated_at==log.created_at?'--':humantime(log.updated_at)}}</span>
                                </div>
                                <div class="col row items-center">
                                    <q-icon name="fas fa-stopwatch" color="blue-grey-7"/>
                                    <span class="text-white q-px-sm">{{duration(log)}}</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="q-pt-md" v-if="wndLog.order.status.id==2&&log.id==2">
                                    <q-btn outline color="green-13" label="iniciar surtido" @click="changeState()" :disable="moving" :loading="moving"/>
                                </div>
                                <div class="q-pt-md" v-if="wndLog.order.status.id==3&&log.id==3">
                                    <q-btn outline color="purple-13" label="Iniciar envio" @click="changeState(5)" :disable="moving" :loading="moving"/>
                                </div>
                            </div>
                        </q-timeline-entry>
                    </q-timeline>

                    <div v-if="wndLog.order.status.id==9" class="text-h6 text-light-blue-13 text-center text-">
                        Pedido completado en {{totalduration(wndLog.order.log)}}
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>

    </q-page>
</template>

<script>
import { date } from 'quasar'
import dbreqs from '../../../API/requisitions'
import dbwkps from '../../../API/workpoint'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
import io from 'socket.io-client'

export default {
    components:{
		ToolbarAccount:ToolbarAccount,
    },
    data(){
        return {
            filtdash:{
                searcher:'',
                view:[],
                crude:null,
            },
            vsocket:undefined,
            index:undefined,
            initpagination:{
                sortBy: 'id',
                descending: false,
                rowsPerPage: 0
            },
            sounds:{
                creating:new Audio('sounds/creating.mp3'),
                created:new Audio('sounds/waiting.mp3'),
                moved:new Audio('sounds/moved.mp3'),
                removed:new Audio('sounds/removed.mp3'),
            },
            wndLog:{
                state:false,
                order:undefined
            },
            moving:false,
            print:{state:false}
        }
    },
    async beforeMount(){        
        this.index = await dbreqs.dashboard();
        // this.filtdash.crude = await dbwkps.index();
    },
    async mounted(){
        //instanciar al socket
        this.vsocket = await io(this.$vsocket);

        //solicitar al socket que notifique que este dashboard esta escuchando
		this.vsocket.emit('dashboard_ready',this.profile);
        
        //notifica que un usuario se unio a este dashboard, excepto cuando es el mismo
		this.vsocket.on('joined_at_dashboard',(data)=>{ console.log(data); });

        //notifica que un pedido, ha sido creado
        this.vsocket.on('creatingorder',(data)=>{
            console.log("Se ha creado un pedido...");
            console.log(data);
            this.ordersdb.unshift(data.order);
            this.sounds.creating.play();
        });

        this.vsocket.on('using_order',(data)=>{
            console.log("Se abrio una orden...");
            console.log(data);
        });

        this.vsocket.on('order_changestate',(data)=>{
            console.log("Actualizando status a pedido");
            console.log(data);
            let idx = this.ordersdb.findIndex(item=>{return item.id==data.order.id});
            this.ordersdb[idx].log=data.order.log;
            this.ordersdb[idx].status=data.order.status;
            this.ordersdb[idx].products=data.order.products;

            switch (data.state.id) {
                case 2: this.sounds.created.play(); break;
                case 10: this.sounds.removed.play(); break;
                default: this.sounds.moved.play(); break;
            }
        });
    },
    methods:{
        reprint(){
            console.log("reimprimiendo");
            let data = {"_requisition":this.wndLog.order.id};
            
            this.print.state=true;
            dbreqs.reprint(data).then(success=>{
                console.log(success);
                this.print.state=false;
            }).catch(fail=>{
                console.log(fail);
            });
        },
        showLog(orderid){
            let idx = this.ordersdb.findIndex(item=>{return item.id==orderid});
            this.wndLog.order=this.ordersdb[idx];
            console.log(this.wndLog.order);
            this.wndLog.state=true;
        },
        changeState(_atstate=null){
            this.moving=true;
            let atstate = _atstate?_atstate:(parseInt(this.wndLog.order.status.id)+1);
            let data = { id:this.wndLog.order.id,"_status":atstate }
            let message = "";
            let newstatus = {id:atstate,name:undefined};

            switch (atstate) {
                case 3:
                    console.log("Moviendo a surtiendo...");
                    newstatus.name="Surtiendo";
                    message='Surtido iniciado';
                break;

                case 5:
                    console.log("Moviendo a En camino...");
                    newstatus.name="En camino";
                    message='Envio iniciado';
                break;
            }

            dbreqs.nextstep(data).then(success=>{
                let resp = success.data;
                console.log(resp);

                this.wndLog.state=false;
                this.moving=false;

                let idx = this.ordersdb.findIndex(item=>{return item.id==resp.order.id});
                this.ordersdb[idx].log=resp.order.log;
                this.ordersdb[idx].status=resp.order.status;
                this.$q.notify({
                    message:message,
                    color:"positive", icon:"done", position:'bottom-right'
                });
                this.sounds.moved.play();
                this.vsocket.emit('order_changestate',{state:newstatus,profile:this.profile,order:this.ordersdb[idx]});
            }).catch(fail=>{
                console.log(fail);
            });
        },
    },
    computed: {
        // combowkps(){
        //     if(this.filtdash.crude){
        //         return this.filtdash.crude.map(item=>{
        //             return {'label':item.alias,'value':'all'};
        //         });
        //     }else{
        //         let all = {'label':'todo',value:'all'};
        //         this.filtdash.view = [all];
        //         return [all];
        //     }
        // },
        profile:{ get(){ return this.$store.getters['Account/profile'] } },
		appconnected(){ return this.vsocket ? this.vsocket.connected : false; },
        ordersdb(){
            if(this.index){ return this.index; }else{ return [];}
        },
        orderTaking(){ //levantando pedido
            return this.ordersdb.filter(order=>order.status.id==1);
        },
        orderForSupply(){//Por surtir
            return this.ordersdb.filter(order=>order.status.id==2);
        },
        orderSuppling(){//Surtiendo
            return this.ordersdb.filter(order=>order.status.id==3);
        },
        orderCheckout(){//Surtido, esperando salida
            return this.ordersdb.filter(order=>order.status.id==4);
        },
        orderToArrive(){//En camino
            return this.ordersdb.filter(order=>order.status.id==5);
        },
        orderArrived(){//Pedido recibido // validando/
            return this.ordersdb.filter(order=>(order.status.id==6||order.status.id==7));
        },
        orderOk(){//revisado OK
            return this.ordersdb.filter(order=>order.status.id==9);
        },
        orderArchive(){//Pedido cancelado/expirado
            return this.ordersdb.filter(order=>(order.status.id==10||order.status.id==11));
        },
        noprinteds(){
            return this.orderForSupply.filter(order=>order.printed);
        },
        ismobile(){ return this.$q.platform.is.mobile; },
        buildlog(){ return (order,data) =>{
                let idx = order.log.findIndex(log=>{ return order.status.id==log.id; });
                let resp = undefined;

                switch(data){
                    case 'time':
                        let timecalc = Date.parse(order.log[idx].created_at);
                        resp=date.formatDate(timecalc, 'hh:mm a');
                    break;

                    case 'avatar':
                        return 'https://www.flaticon.es/svg/static/icons/svg/1674/1674229.svg';
                    break;

                    case 'resp':
                        return order.log[idx].details.responsable;
                    break;
                }

                return resp;
            }
        },
        humantime(){ return time =>{ 
				let now = Date.now(); 
				let timecalc = Date.parse(time);
				let diff = date.getDateDiff(now, timecalc, 'days');

				switch (diff) {
					case 0: return 'Hoy, '+date.formatDate(timecalc, 'hh:mm a'); break;
					case 1: return 'Ayer, '+date.formatDate(timecalc, 'hh:mm a'); break;
					default: return `Hace ${diff} dias, `+date.formatDate(timecalc, 'hh:mm a'); break;
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
        ordersize(){
            return products=>{
                let sizeprod = products.length;

                if(sizeprod){
                    let labelpzs = products.reduce((ammount,item)=>{ return parseInt(item.ordered.amount)+ammount; },0);
                    return [sizeprod,labelpzs];
                } return [0,0];
            }
        },
        totalduration(){ return log =>{
                let t_ini = Date.parse(log.filter(_log=>{ return _log.id==1 })[0].created_at);
                let t_end = Date.parse(log.filter(_log=>{ return _log.id==9 })[0].created_at);
                
                let mins = date.getDateDiff(t_end, t_ini, "minutes");

                if(mins<=59){
                    return mins+"m";
                }else {
                    let t = parseFloat(mins/60).toFixed(2).split(".");
                    return `${t[0]}h ${t[1]}m`;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .noprinted{ border: 2px solid #FE982A !important; }
</style>