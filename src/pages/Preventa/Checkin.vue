<template>
	<q-page>
		<!-- <OrdersList :orders="orders" @clicked="orderclicked"/> -->
	</q-page>
</template>

<script>

import OrdersList from '../../components/Preventa/OrdersList.vue'

export default {
	components:{ OrdersList },
	data() {
		return {
			socket:this.$sktPreventa
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | CheckIn");
		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'checkin' });

		this.socket.on('order_changestate', data => this.skt_add_update_order(data));//
	},
	methods:{
		skt_add_update_order(data){
			console.log(data);
		}
	},
	beforeDestroy(){
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'checkin' });
	},
	computed:{
		orders(){ return this.$store.getters['Preventa/OrdersCheckIn'];},
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
	}
}
</script>