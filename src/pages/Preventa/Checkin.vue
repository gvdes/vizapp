<template>
	<q-page padding>
		<div class="text-center q-pt-md">
			<input type="number" :class="socket.connected?'son':'soff'" ref="ipt_search" v-model="iptsearch.model" 
				@keypress.enter="search"
				autocomplete="off"
				id="ipt_search"
				:disabled="searching"
			/>
			<div :class="checkinstate ? 'text-green-13 text-italic':'text--1 text-grey-6'" class="q-pt-sm">Servicio {{checkinstate ?'Encendido':'Apagado'}}</div>			

			<div class="q-pt-lg">
				<!-- <div class="q-pa-md">Pedidos por llegar: <span class="text-h6 text-white">{{orders.length}}</span></div> -->
				<div class="row items-center q-gutter-sm">
					<q-card v-for="ord in orders" :key="ord.id" class="bg-darkl1">
						<q-card-section>
							{{ord.name}} (<span class="text-bold text-white">{{ord.id}}</span>)
						</q-card-section>
					</q-card>
				</div>
			</div> 
		</div>
	</q-page>
</template>

<script>

import OrdersList from '../../components/Preventa/OrdersList.vue'
import preventadb from '../../API/preventa.js'


export default {
	components:{ OrdersList },
	data() {
		return {
			iptsearch:{
				model:'',
				focus:false,
			},
			gstate:'listen',
			searching:false,
			target:undefined,
			socket:this.$sktPreventa
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | CheckIn");
	},
	mounted(){ this.$refs.ipt_search.focus(); },
	methods:{
		listenipt(val){ this.iptsearch.focus = val; },
		search(){
			this.searching = true;
			let idx = this.orders.findIndex( ord => this.iptsearch.model == ord.id);

			if(idx==-1){

				this.$q.notify({
					color:'negative',
					message:`<b>${this.iptsearch.model}</b> No encontrado...`,
					timeout:2000,
					position:'center',
					html:true
				});

				this.iptsearch.model = '';
				this.$refs.ipt_search.focus();
				this.searching = false;

			}else{
				this.target = this.orders[idx];
				this.nextStep();
			}
		},
		async nextStep(){
			/**
			 * ¯\_(ツ)_/¯
			 */
			let resp = await preventadb.nextStep({ "_order": this.target.id });

			if(resp.success){
                let order = Object.assign({}, this.target);
                let newstate = resp.status[resp.status.length-1];

				this.iptsearch.model = '';

				this.$store.commit('Preventa/updateState', {order, newstate});

				this.$q.notify({
					color:'positive',
					message:`Pedido <b>${order.id}</b> enviado!!`,
					html:true
				});

				this.$refs.ipt_search.focus();
				this.target = undefined;
				this.searching = false;
			}
		},
		skt_add_update_order(data){
			console.log("%cUna orden ha cambiado el","background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
			let order = data.order;
			let newstate = data.newstate;

			let idx = this.orders.findIndex( ord => ord.id == order.id );

			if(idx>=0){
				console.log(`%cActualizar la orden ${order.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
				this.appsounds.created.play();
				this.$store.commit('Preventa/updateState', {order, newstate});
			}else{
				console.log(`%cAgregar la orden ${order.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
				this.appsounds.created.play();
				this.$store.commit('Preventa/newOrder', order);
			}
		},
		orderclicked(order){
			console.log(order);
		}
	},
	beforeDestroy(){
		// this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'checkin' });
	},
	destroyed(){
		this.$store.commit('Preventa/setHeaderState', true);
	},
	computed:{
		checkinstate(){ return this.$store.getters['Preventa/keepProcess'](3) },
		orders(){ return this.$store.getters['Preventa/OrdersCheckIn'];},
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
		appsounds(){ return this.$store.getters['Multimediapp/sounds']; }
	}
}
</script>

<style lang="scss" scoped>

	.son{ border: 3px solid #2ed573!important; }
	.soff{ border: 3px solid #ff4757!important; }

	#ipt_search{
		background:none;
		border: none;
		text-align: center;
		color:white;
		outline: none;
		border-radius:10px;
		padding: 6px 0;
		font-size: 1.5em;
	}
</style>