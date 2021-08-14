<template>
	<q-page padding class="row items-center justify-center">
		<input type="text" ref="ipt_search" v-model="iptsearch.model" @keypress="iptsearch.pressing = true" @keypress.enter="search" @focus="listenipt(true)" @blur="listenipt(false)" id="ipt_search"/>
		<!--  -->
		<div class="">
			<div v-if="iptsearch.focus" class="text-green-13 text-center">
				<h6>Hola, por favor escanea tu pedido aqui</h6>
				
			</div>

			<div v-else>No estoy escuchando nada</div>
			
			<div>{{iptsearch.pressing}}</div>
		</div>

	</q-page>
</template>

<script>

import OrdersList from '../../components/Preventa/OrdersList.vue'

export default {
	components:{ OrdersList },
	data() {
		return {
			socket:this.$sktPreventa,
			iptsearch:{
				model:'',
				focus:false,
				pressing:false
			}
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | CheckIn");
		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'checkin' });

		this.socket.on('order_changestate', data => this.skt_add_update_order(data));//

		this.$store.commit('Preventa/setHeaderState', false);
	},
	mounted(){
		this.$refs.ipt_search.focus();
	},
	methods:{
		listenipt(val){
			this.iptsearch.focus = val;
		},
		search(){
			alert(`${this.iptsearch.model}`);
			this.iptsearch.pressing = false;
		},
		skt_add_update_order(data){
			// console.log(data);
			let ordercatch = data.order;
			// console.log(ordercatch);

			let idx = this.orders.findIndex( order => { order.id == ordercatch.id });

			if(idx>=0){
				console.log(`%cActualizar la orden ${ordercatch.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
				this.appsounds.created.play();
			}else{
				console.log(`%cAgregar la orden ${ordercatch.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
				this.appsounds.created.play();
				this.$store.commit('Preventa/newOrder', ordercatch);
			}
		},
		orderclicked(order){
			console.log(order);
		}
	},
	beforeDestroy(){
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'checkin' });
	},
	destroyed(){
		this.$store.commit('Preventa/setHeaderState', true);
	},
	computed:{
		orders(){ return this.$store.getters['Preventa/OrdersCheckIn'];},
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
		appsounds(){ return this.$store.getters['Multimediapp/sounds']; }
	}
}
</script>

<style lang="scss" scoped>

	#ipt_search{
		position: absolute!important;
		z-index: -1000!important;
	}
</style>