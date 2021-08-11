<template>
	<q-page>

		<OrdersList :orders="orders" @clicked="orderclicked"/>

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
			socket:this.$sktPreventa
		}
	},
	async mounted(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | Pedidos");

		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:this.sktroom });

		this.socket.on('order_created', data => this.skt_order_created(data));
		this.socket.on('order_changestate', data => this.skt_order_changestate(data));
	},
	beforeDestroy(){
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:this.sktroom });
	},
	methods: {
		skt_order_created(data){
			let order = data.order;
			let by = data.user.me;

			console.log(`%c${by.nick} esta creando la orden ${order.id}`,"background:#303952;color:#e66767;border-radius:10px;padding:8px;");
			console.log(data);
			this.$store.commit('Preventa/newOrder', order);
		},
		skt_order_changestate(data){
			console.log(data);
			let order = data.order;
			let newstate = data.newstate;

			console.log(`%cLa orden ${data.order.id} cambio su status a ${data.newstate.name}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
			this.$store.commit('Preventa/updateState', { order, newstate });
		},
		orderclicked(order){ this.$router.push(`/preventa/pedidos/${order.id}`); },
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
				this.socket.emit('order_created',{ user:this.profile, order:resp });
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
		orders(){ return this.$store.state.Preventa.orders;},
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
		sktroom(){ return this.profile.me._rol<=3 ? 'admin':'orders'; }
	},
}
</script>
