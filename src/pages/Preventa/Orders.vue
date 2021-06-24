<template>
	<q-page>
		<q-header class="bg-darkl0 text-grey-5">
			<q-card class="bg-darkl1">
				<toolbar-account title="Preventa" />
				<div class="q-pa-md row">
					<!-- <div class="col-md col-xs-12 ds">sdf</div> -->
					<div class="col-md col-xs-12"><RangeDates @inputRanges="loadView"/></div>
				</div>
			</q-card>
		</q-header>

		<div class="row items-start">
			<!-- <div class="col-md col-xs-12">
				<q-card class="bg-darkl1">
					<q-card-section>Resumen</q-card-section>
					<q-card-section>
						<apexchart type="bar" :options="orders_chart.options" :series="series_chart" height="400px;"/>
					</q-card-section>
				</q-card>
			</div> -->
			

			<div class="col-md col-xs-12 q-pa-sm">
				<q-card class="bg-darkl1">
					<q-card-section>
						<q-table :data="orders_db" flat
							row-key="id" dark :filter="tableorders.filtrator"
							card-class="q-pa-sm bg-none text-grey-6"
							:columns="tableorders.columns"
						>
							<template v-slot:top-left v-if="orders_db.length">
								<div class="text-bold">{{orders_db.length}} pedidos</div>
							</template>

							<template v-slot:top-right v-if="orders_db.length">
								<q-input color="green-13" dark dense debounce="0" v-model="tableorders.filtrator" placeholder="Buscar (folio o nombre)">
									<template v-slot:append><q-icon name="search" /></template>
								</q-input>
							</template>

							<template v-slot:body="props">
								<q-tr :props="props" @click="open(props.row.id)">
									<q-td key="id" :props="props">{{props.row.id}}</q-td>
									<q-td key="client" :props="props">{{props.row.name}}</q-td>
									<q-td key="cstate" :props="props">{{props.row.status.name}}</q-td>
									<q-td key="timestart" :props="props">{{humantime(props.row.created_at)}}</q-td>
								</q-tr>
							</template>
						</q-table>
					</q-card-section>
				</q-card>
			</div>
		</div>

		<q-dialog v-model="windCreate.state" position="bottom" :persistent="windCreate.blocked">
			<q-card class="bg-darkl0 exo text-grey-5">
				<q-form>
					<q-toolbar>Nuevo Pedido</q-toolbar>
					<q-card-section>
						<div class="row items-end q-gutter-sm">
							<q-btn icon="fas fa-address-book" flat dense :color="isclient?'green-13':'grey-8'" class="text-black" @click="isclient=!isclient"/>
							<q-input class="col" dark label="Cliente" color="green-13" autofocus v-model="windCreate.ipt.client"/>
							<q-btn flat rounded type="submit" icon="done" color="green-13" v-if="cancreate" @click="tryCreate" :disable="windCreate.ipt.load" :loading="windCreate.ipt.load"/>
						</div>
					</q-card-section>
				</q-form>
			</q-card>
		</q-dialog>	

		<q-page-sticky position="bottom-right" :offset="[10, 3]">
			<q-btn rounded flat class="bg-darkl1 shadow-1" color="green-13" icon="add" @click="windCreate.state=true"/>
        </q-page-sticky>
	</q-page>
</template>

<script>
import apexcharts from 'vue-apexcharts'
import { date } from 'quasar'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import preventa from '../../API/preventa.js'
import RangeDates from '../../components/Global/RangeDates.vue'

export default {
	// name: 'PageName',
	components:{
		apexchart:apexcharts,
		ToolbarAccount:ToolbarAccount,
		RangeDates:RangeDates
	},
	data() {
		return {
			orders_chart:{
				options: {
					chart:{ id: 'orders_chart', background:'none' },
					stroke:{ colors:['#2D3035'] },
					theme:{ palette: 'palette8', mode: 'dark' },
					labels:['En captura','Por surtir', 'Surtiendo', 'Cobrados', 'Completados'],
					colors:["#ced6e0","#fa8231","#1e90ff","#4cd137","#eb3b5a"],
				}
			},
			windCreate:{
				state:false,
				ipt:{ dis:true, load:false, client:'' },
				blocked:false
			},
			index:undefined,
			tableorders:{
				columns:[
					{ name:'id', align:'left', label:'Folio', field:'id', sortable:true },
					{ name:'client', align:'left', label:'Cliente', field:'name', sortable:true },
					{ name:'cstate', align:'center', label:'Estado', field:'created_at', sortable:true },
					{ name:'timestart', align:'center', label:'Hora', field:'created_at', sortable:true },
				],
				filtrator:''
			},
			isclient:false,
			printers:[],
		}
	},
	async beforeMount(){
		localStorage.removeItem("printers");
		// console.log(`Conectando a SOCKET`);
		// await this.$sktPreventa.connect();
		// this.$sktPreventa.emit('index',this.profile);
		// this.$sktPreventa.emit('joinat', { from:this.workin, user:this.profile, isdashboard:false } );
	},
	beforeDestroy() { 
		console.log('desconectando del room');
		this.$sktPreventa.off();
	},
	methods: {
		async loadView(ranges){
			this.$q.loading.show({ message:"Cargando vista..." });
			let vista = { "date_from":ranges.dbranges.from, "date_to":ranges.dbranges.to };
			this.index = await preventa.index(vista);
			let printers = this.index.printers;
			this.printers = printers;
			console.log(this.index);

			if(printers.length){
				// this.$store.commit('Preventa/setPrinters',printers);
				localStorage.setItem("printers",JSON.stringify(printers));
				this.$q.loading.hide();
			}else{
				this.$q.notify({
					message:'Vaya, no hay impresoras disponibles',
					color:'negative',
					icon:'fas fa-exclamation-triangle'
				});
			}
		},
		tryCreate(){
			//this.sktprev.emit('order_creating',{ room:this.socketroom, user:this.profile, order:null });
			this.windCreate.ipt.load=true;
			this.windCreate.blocked=true;
			let data = this.isclient ? { "id":this.windCreate.ipt.client } : { "name":this.windCreate.ipt.client };
			console.log(data);

			preventa.create(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				this.windCreate.ipt.load=false;
				this.windCreate.blocked=false;
				//this.sktprev.emit('order_created',{ room:this.socketroom, user:this.profile, order:resp });
				this.$router.push(`/preventa/pedidos/${resp.id}`);
			}).catch(fail=>{ 
				console.log(fail);
				this.windCreate.ipt.load=false;
				this.windCreate.blocked=false;

				this.$q.notify({ icon:'bug', message:fail, color:'negative' });
			});
		},
		open(order){ this.$router.push(`/preventa/pedidos/${order}`); },
		sktjoinprev(data){
            // console.log(`Conectado a ${this.socketroom}`);
            console.log(data);

            // if(data.me.id!=this.profile.me.id){
            //     this.$q.notify({
            //         color:'dark',
            //         message:`${data.me.nick} se ha unido a Preventa`,
            //         position:'bottom-left',
            //         textColor: 'green-13',
            //         timeout:1200,
            //         avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
            //     });
            // }
        },
		sktjoinprevwrh(data){
			console.log(data);
            // console.log(data);

            // if(data.me.id!=this.profile.me.id){
            //     this.$q.notify({
            //         color:'dark',
            //         message:`${data.me.nick} se ha unido a Bodega`,
            //         position:'bottom-left',
            //         textColor: 'green-13',
            //         timeout:1200,
            //         avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
            //     });
            // }
		}
	},
	computed: {
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
		cancreate(){
			let strlen = this.isclient ? 1 : 3 ;
			return this.windCreate.ipt.client.length>=strlen?true:false;
		},
		orderStates(){
			return this.index ? this.index.status.map( state => { return { id:state.id, name:state.name, orders:state.orders} } ) : [];
		},
		orders_db(){ 
			return this.orderStates.length ? this.orderStates.map(state=>state.orders)[0] : [];
		},
		series_chart(){
			return [
				this.orders_capture.length,
				this.orders_forsupply.length,
				this.orders_onsupply.length,
				this.orders_chargeds.length,
				this.orders_archive.length,
			];
		},
		humantime(){ return time =>{ 
				let now = Date.now(); 
				let timecalc = Date.parse(time);
				let diff = date.getDateDiff(now, timecalc, 'days');

				switch (diff) {
					case 0: return date.formatDate(timecalc, 'hh:mm a'); break;
					case 1: return 'Ayer, '+date.formatDate(timecalc, 'hh:mm a'); break;
					default: return `Hace ${diff} dias, `+date.formatDate(timecalc, 'hh:mm a'); break;
				}
			}
        },
	},
}
</script>
