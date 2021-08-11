<template>
	<q-page>
		<OrdersList :orders="orders" @clicked="orderclicked"/>
	</q-page>
</template>

<script>

import OrdersList from '../../components/Preventa/OrdersList.vue'

export default {
	components:{ OrdersList },
	data() {
		return {
			
		}
	},
	methods:{
		orderclicked(order){
			console.log(order);
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | CheckIn");
	},
	computed:{
		orders(){ return this.$store.getters['Preventa/OrdersCheckIn'];},
	}
}
</script>