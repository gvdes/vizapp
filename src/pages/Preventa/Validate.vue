<template>
	<q-page class="ds">
		<div class="ds">
			
		</div>
		<div class="ds">{{onsuply}}</div>
		<div class="ds">{{forvalidate}}</div>
		<div class="ds">{{onvalidate}}</div>
	</q-page>
</template>

<script>
export default {
	// name: 'PageName',
	data(){
		return{
			socket:this.$sktPreventa
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | Validacion");
		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'validate' });
		// this.socket.on('order_changestate', data => this.skt_add_update_order(data));//
	},
	beforeDestroy(){
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'validate' });
	},
	computed:{
		orders(){ return this.$store.getters['Preventa/OrdersWarehouse'];},
		onsuply(){ return this.orders.filter( ord => ord.status.id==5 ); },
		forvalidate(){ return this.orders.filter( ord => ord.status.id==6 ); },
		onvalidate(){ return this.orders.filter( ord => ord.status.id==7 ); },
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
	}
}
</script>
