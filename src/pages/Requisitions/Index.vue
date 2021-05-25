<template>
	<q-page padding>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Resurtido" :sockstate="appconnected"/>
			</q-card>
		</q-header>

		<div>
			<q-table dark :data="ordersday"
				table-header-class="text-green-13"
				card-class="bg-darkl1 text-grey-6"
				row-key="id" :columns="tableOrders.columns"
				:pagination="initpagination"
			>
				<template v-slot:body="props">
					<q-tr :props="props" @click="open(props.row.id)" >
						<q-td key="id" :props="props">
							{{ props.row.id }}
						</q-td>

						<q-td key="state" :props="props">
							<div>{{labelstate(props.row)}}</div>
							<div>{{timestate(props.row)}}</div>
						</q-td>

						<q-td key="size" :props="props">
							{{ ordersize(props.row.products) }}
						</q-td>
					</q-tr>
				</template>	
			</q-table>
		</div>

		<q-dialog v-model="wndSetOrder.state" position="bottom">
			<q-card class="bg-darkl0 text-grey-6 exo">
				<q-toolbar class="text-white">Nuevo Pedido</q-toolbar>
				<q-card-section>
					<div class="row q-gutter-md items-center">
						<q-select class="col" dark color="green-13" label="Tipo" v-model="neworder.type" :options="comboreqstypes" :disable="comboreqstypes.length==1"/>
						<q-select class="col" dark color="green-13" label="Destino" v-model="neworder.dest" :options="combowkps"/>
					</div>
					<div class="row items-center q-gutter-md" v-if="neworder.type.value==3||neworder.type.value==4">
						<q-select class="col" dark color="green-13" label="Origen" v-model="neworder.origin" :options="combowkpsorigin"/>
						<q-input class="col" dark type="text" color="green-13" label="Folio" v-model="neworder.folio"/>
					</div>
					<q-input dark color="green-13" label="notas" v-model="neworder.notes" />
				</q-card-section>
				<q-card-actions align="right">
					<q-btn rounded flat color="green-13" class="bg-darkl1 shadow-1" icon="done" @click="tryCreate" :loading="wndSetOrder.creating" :disable="wndSetOrder.creating"/>
				</q-card-actions>
			</q-card>
		</q-dialog>

		<q-page-sticky position="bottom-right" :offset="[10, 5]">
			<q-btn rounded flat class="bg-darkl1 shadow-1" color="green-13" icon="add" @click="wndSetOrder.state=true"/>
        </q-page-sticky>
	</q-page>
</template>

<script>
// import io from 'socket.io-client'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import dbreqs from '../../API/requisitions'
import dbwkps from '../../API/workpoint'
import { date } from 'quasar'
import { QSpinnerGrid } from 'quasar'

export default {
	// name: 'PageName',
	components:{
		ToolbarAccount:ToolbarAccount,
	},
	data(){
		return {
			// $sktRestock:undefined,
			initpagination:{
                sortBy: 'id',
                descending: false,
                page: 1,
                rowsPerPage: 20
            },
			"status":[],
			"index":undefined,
			"tableOrders":{
				"columns":[
					{ name:'id', align:'left', label:'ID', },
					{ name:'state', align:'left', label:'Estado' },
					{ name:'size', align:'center', label:'Contenido' },
				],
				"data":undefined
			},
			"wndSetOrder":{ "state":false, "creating":false },
			"neworder":{
				"notes":"",
				"type":{"label":"Manual","value":1},
				"dest":{"label":"CEDISSAP","value":1},
				"origin":{"label":"---","value":null},
				"folio:":undefined
			},
			sounds:{
                moved:new Audio('sounds/moved.mp3')
			},
			workpoints:undefined
		}
	},
	async beforeMount(){
		console.log(this.auths);
		this.index = await this.loadIndex();
		this.tableOrders.data = this.index.requisitions;
		this.workpoints = await this.loadWorkpoints();
		// console.log(this.workpoints);
	},
	async mounted(){
		// this.$sktRestock = await io(`${this.$$sktRestock}/resurtidos`);
		await this.$sktRestock.connect();
		console.log("uniendose a ROOM");
		this.$sktRestock.emit('joinat', { from:this.workin, user:this.profile, isdashboard:false } );

		// //notifica que un usuario se unio, excepto cuando es el mismo
		// this.$sktCounters.on('joineddashreq',(gdata)=>{
		// 	console.log(gdata);

		// 	if(gdata.fromdashboard){
		// 		console.log(`%c${gdata.user.me.nick} a activado el dashboard DASHBOARDSREQS en ${gdata.from.alias}`,"color:#3ae374;font-size:1.5em;");
		// 	}
		// });

		// this.$sktCounters.on('order_changestate',(data)=>{
		// 	console.log("Se ha cambiado el status a un pedido... ");
        //     console.log(data);
		// 	let idx = this.ordersday.findIndex(item=>{return item.id==data.order.id});
			
		// 	if(idx){
		// 		console.log("... y aqui esta"); 
		// 		this.ordersday[idx].log=data.order.log;
		// 		this.ordersday[idx].status=data.order.status;
		// 		this.sounds.moved.play();
		// 	}else{ console.log("... pero no esta aqui");  }
        // });
	},
	beforeDestroy(){
		this.$sktCounters.off();
		console.log("desconectado del socket");
	},
	methods:{
		loadIndex(){ return dbreqs.index(); },
		loadWorkpoints(){ return dbwkps.index(); },
		open(id){
			console.log("editar "+id);
			this.$router.push('/pedidos/'+id);
		},
		tryCreate(){
			console.log("Creando pedido!!");
			let data = new Object();
			data._workpoint_to=this.neworder.dest.value;
			data._type=this.neworder.type.value;
			data.notes=this.neworder.notes;
			let cancreate = false;

			console.log(data);
			console.log(this.neworder.type.value);

			switch (this.neworder.type.value) {
				case 2:
					this.$q.loading.show({ spinner: QSpinnerGrid, spinnerColor: 'green-13', message:"Tu pedido se esta generando, por favor espera mientras consultamos existencias" });
					cancreate=true;
				break;

				case 3: case 4:
					data.folio=this.neworder.folio;
					data.store=this.neworder.origin.value;

					if(data.folio&&data.store){
						cancreate=true;
						this.$q.loading.show({ spinner: QSpinnerGrid, spinnerColor: 'green-13', message:`Buscando folio <b class="text-green-13">${data.folio}</b> en <b class="text-green-13">${data.folio}</b>, porfavor espera`, html: true });
					}else{
						cancreate=false;
						this.$q.notify({ icon:'fas fa-exclamation-circle', color:'red', message:`Sucursal y folio son obligatorios` });
					}
				break
			
				default: cancreate=true; this.wndSetOrder.creating=true; break;
			}

			if(cancreate){
				dbreqs.create(data).then(success=>{
					let resp = success.data;
					console.log(resp);
					this.$q.loading.hide();
					this.wndSetOrder.creating=false;
					this.wndSetOrder.state=false;

					this.tableOrders.data.unshift(resp.order);

					this.$q.notify({ message:`Pedido ${resp.order.id} creado!`, color:"positive", position:'center', timeout:1500 });

					this.$sktRestock.emit('creating',{ user:this.profile, from:this.workin, order:resp.order, to:this.neworder.dest } );
					this.$router.push('/pedidos/'+resp.order.id);
					// this.$sktRestock.emit('creatingorder',{profile:this.profile,order:resp.order});
				}).catch(fail=>{
					console.log(fail);
					this.$q.notify({ message:`Rayos!!, esto no ha funcionado!`, icon:"bug", color:"negative" });
				});
			}
		},
	},
	computed:{
		profile:{ get(){ return this.$store.getters['Account/profile']} },
		workin(){ return this.$store.getters['Account/workin'];},
		auths:{ get(){ return this.$store.getters['Account/moduleauths']} },
		socketroom(){ return `${this.workin.workpoint.alias}`},
		appconnected(){ return this.$sktRestock ? this.$sktRestock.connected : false; },
		combowkps(){
			if(this.index){
				return this.index.workpoints.map(item=>{
					return {"label":item.alias,"value":item.id};
				});
			}else{ return [];}
		},
		combowkpsorigin(){
			if(this.workpoints){
				return this.workpoints.filter(item=>{ 
					// return item.type.id>1&&item.alias!="VIZ";
					return item.alias!="VIZ";
				}).map(item=>{
					return {"label":item.alias,"value":item.id};
				});
			}else{ return [];}
		},
		comboreqstypes(){
			if(this.index){
				let options = this.index.types.map(item=>{
					return {"label":item.name,"value":item.id};
				});
				return options;
			}else{ return [];}
		},
		ordersday(){ if(this.tableOrders.data){ return this.tableOrders.data }else{return []} },
		labelstate(){ return row => {
				let idx = row.log.findIndex(item=>item.id==row.status.id);
				return row.log[idx].name;
			} 
		},
		timestate(){ return row => {
				let idx = row.log.findIndex(item=>item.id==row.status.id);
				let time = row.log[idx].created_at;
				return this.humantime(time);
			}
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
		ordersize(){ return products =>{
				let sizeprod = products.length;
				if(sizeprod){
					let labelpzs = products.reduce((ammount,item)=>{ return item.ordered.amount+ammount; },0);
					return `M:${sizeprod}, P:${labelpzs}`;
				}
				return '--';
			}
		},
	}
}
</script>
