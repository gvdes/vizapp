<template>
	<q-page>
		<div class="row q-pt-sm q-pb-xl">
		<!-- <div>{{ myorders.length }} {{ orders.length }}</div> -->
			<div class="col-md-6 col-xs-12 q-pa-sm">
				<q-table flat dark
					:data="orders"
					:columns="tableorders.columns"
					:filter="tableorders.filtrator"
					:pagination="tableorders.pagination"
					card-class="bg-darkl1"
				>
					<template v-slot:top>
						<div class="full-width row items-center">
							<div class="col">
								<q-btn-toggle unelevated rounded
									class="custom-toggle"
									v-model="tableorders.view"
									toggle-color="primary"
									no-caps size="sm"
									:options="[
										{label: '', value: true, icon:'fas fa-user'},
										{label: '', value: false, icon:'fas fa-users'},
									]"
								/>
							</div>

							<div class="col">
								<q-input borderless dark filled dense fill-input color="green-13" debounce="0" v-model="tableorders.filtrator" placeholder="Buscar...">
									<template v-slot:prepend><q-icon name="search" /></template>
								</q-input>
							</div>
						</div>
					</template>

					<template v-slot:no-data>
						<div class="full-width row flex-center q-gutter-sm q-pa-md">
							<q-icon size="2em" name="sentiment_dissatisfied" />
							<span>Nada por aqui.</span>
						</div>
					</template>

					<template v-slot:body="props">
						<q-tr @click="orderclicked(props.row)">
							<q-td key="id">
								<div>{{props.row.id}}</div>
								<div class="text--1 text-grey-5">{{filltkt(props.row.num_ticket)}}</div>
							</q-td>
							<q-td key="client">{{props.row.name}}</q-td>
							<q-td key="cstate" align="center" :class="`st-${props.row.status.id}`">
								<div class="text--2">{{props.row.status.name}}</div>
							</q-td>
						</q-tr>
					</template>
				</q-table>
			</div>

		</div>

		<!-- <OrdersList :orders="orders" @clicked="orderclicked"/> -->

		<q-dialog v-model="windCreate.state" position="bottom" :persistent="windCreate.blocked">
			<q-card class="bg-darkl0 exo text-white">
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
			<q-btn color="teal" rounded icon="add" @click="windCreate.state=true"/>
        </q-page-sticky>
	</q-page>
</template>

<script>
// import apexcharts from 'vue-apexcharts'
import { date } from 'quasar'
import preventa from '../../API/preventa.js'
import OrdersList from '../../components/Preventa/OrdersList.vue'

export default {
	name: 'PreventaSales',
	components:{ OrdersList },
	data() {
		return {
			psocket:this.$sktPreventa,
			orders_chart:{
				options: {
					chart: { id: 'orders_chart', background:'none' },
					stroke: { colors:['#2D3035'] },
					theme: { palette: 'palette8', mode: 'dark' },
					labels: [ 'En captura','Por surtir', 'Surtiendo', 'Cobrados', 'Completados' ],
					colors: [ "#ced6e0","#fa8231","#1e90ff","#4cd137","#eb3b5a" ],
				}
			},
			windCreate:{
				state:false,
				ipt:{ dis:true, load:false, client:'' },
				blocked:false
			},
			isclient:false,
			tableorders:{
				view:true,
				filtrator:'',
				columns:[
					{ name:'id', field:'id', sortable:true, label:'Folio', align:'center' },
					{ name:'client', field:'name', sortable:true, label:'Cliente', align:'center' },
					// { name:'tktday', field:'num_ticket', sortable:true, label:'Folio', align:'center' },
					{ name:'cstate', field:(row)=>row.status.id, sortable:true, label:'Estado', align:'center' },
					// { name:'createdby', field:(row)=>row.created_by.nick, sortable:true, label:'Agente', align:'center' },
				],
				pagination:{
					sortBy:'id',
					descending:true,
					rowsPerPage: 10
				}
			},
		}
	},
	created(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | Pedidos");
	},
	methods: {
		orderclicked(order){

			let im = this.profile.me.id;
			let myrol = this.profile.me._rol;
			let imowner = im == order.created_by.id;
			let cstate = order.status.id;

			if(imowner){
				this.$router.push(`/preventa/pedidos/${order.id}`);
			}else{
				switch (cstate) {
					case 1:
						this.$q.notify({
							message:`<b>${order.created_by.nick}</b> aun esta capturando este pedido.`,
							type:'warning', closeBtn:'Ok', timeout:3000,
							position:'center', html:true
						});
					break;

					default: this.$router.push(`/preventa/pedidos/${order.id}`); break;
				}
			}
		},
		tryCreate(){
			this.windCreate.ipt.load=true;
			this.windCreate.blocked=true;
			let data = this.isclient ? { "id":this.windCreate.ipt.client } : { "name":this.windCreate.ipt.client };

			preventa.create(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				this.windCreate.ipt.load=false;
				this.windCreate.blocked=false;

				this.$store.commit('Preventa/newOrder', resp);
				this.psocket.emit('order_add',{ user:this.profile, order:resp });
				this.$router.push(`/preventa/pedidos/${resp.id}`);
			}).catch(fail=>{ 
				console.log(fail);
				this.windCreate.ipt.load=false;
				this.windCreate.blocked=false;

				this.$q.notify({ icon:'bug', message:fail, color:'negative' });
			});
		},
	},
	computed: {
		filltkt(){
			return id => { 
				let rounds = 4;
				let len = id.toString().length;
				let fill = '';

				for (rounds; len < rounds; rounds--) { fill+='0'; }
				return `${fill}${id}`;
			}
		},
		allorders(){ return this.$store.state.Preventa.orders; },
		myorders(){ return this.allorders.filter(ord => ord.created_by.id == this.profile.me.id); },
		orders() { return this.tableorders.view ? this.myorders:this.allorders; },
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
		cancreate(){
			let strlen = this.isclient ? 1 : 3 ;
			return this.windCreate.ipt.client.length>=strlen?true:false;
		},
		cardOrderDesign(){
			return status => {
				switch (status.id) {
					case 1: return "border-left:5px; border-color:green;!important"; //levantando
					case 5: return "border-left:5px; border-color:blue; !important"; //levantando
					default: return "border-left:5px; border-color:grey; !important";;//todas las demas
				}
			}
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


<style lang="scss" scoped>
	.st-1{ color:#18dcff!important; }// levantando pedido LP
	.st-2{ color:#b71540!important; }// asignando caja AC
	.st-3{ color:#cd6133!important; }// En Recepcion ER
	.st-4{ color:#fff200!important; }// Por surtir PS
	.st-5{ color:#20bf6b!important; }// Surtiendo SR
	.st-6{ color:#fdcb6e!important; }// Por validar PV
	.st-7{ color:#20bf6b!important; }// Validando Mercancia VM
	.st-8{ color:#0fb9b1!important; }// En Caja EC
	.st-9{ color:#20bf6b!important; }// Cobrando CO
	.st-10{ color:#cc8e35!important; }// Finalizado FZ
	.st-100{ color:#a5b1c2!important; }// Cancelado CN

	.custom-toggle{border: 2px solid #027be3}
</style>