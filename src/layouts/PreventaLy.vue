<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container class="exo bg-darkl0 text-grey-5">
			<q-header class="bg-none" v-if="layout.header.state">
				<q-card class="bg-darkl1">
					<HeaderApp :title="layout.header.title"/>
					<div class="bg-darkl1 q-pa-sm row">
						<div class="col-md col-xs-12">
							<RangeDates @inputRanges="loadView"/>
						</div>
					</div>
				</q-card>
			</q-header>

			<router-view />

			<q-footer reveal class="bg-darktransl0" v-if="layout.footer.state">
				<ToolbarModule />
			</q-footer>
		</q-page-container>
	</q-layout>
</template>

<script>
import ToolbarModule from '../components/Global/ToolbarModule.vue'
import RangeDates from '../components/Global/RangeDates.vue'
import HeaderApp from '../components/Global/HeaderApp.vue'

import PreventaDB from '../API/preventa.js'

export default {
	name: 'Preventa',
	components:{ ToolbarModule, RangeDates, HeaderApp },
	data(){
		return {
			socket:this.$sktPreventa
		}
	},
	mounted(){
		if(this.socket.disconnected){ this.$sktPreventa.connect(); }

		// this.socket.emit('joinrooms',{ profile:this.profile, workpoint:this.workin.workpoint });
		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'main' });
		this.socket.on('joinedat', data => this.joinedat(data) );//rooms a los que se unio este socket
		this.socket.on('newjoin', data => this.newjoin(data) );//alguien se conecta al mismo room de este socket

		this.socket.on('unjoined', data => this.room_unjoined(data) );//alguien se conecta al mismo room de este socket
		this.socket.on('socketunjoined', data => this.socketunjoined(data) );//alguien se conecta al mismo room de este socket
		// this.socket.on('order_changestate', data => this.skt_order_change_state(data));//
	},
	methods:{
		async loadView(ranges){
			this.$q.loading.show({ message:"Cargando vista..." });
			let vista = { "date_from":ranges.dbranges.from, "date_to":ranges.dbranges.to };
			this.index = await PreventaDB.index(vista);

			this.$store.commit('Preventa/startState',this.index);
			this.$q.loading.hide();
		},
		room_unjoined(data){
			// console.log(`%cAbandonaste el room ${data.room}`,"background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;");	
			// console.log(data);
		},
		socketunjoined(data){
			// console.log(`%c${data.profile.me.nick} abandono el room ${data.room}`,"background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;");	
			// console.log(data);
		},
		joinedat(data){
			// console.log(data);
			// console.log(`%cTe uniste a ${data.room}`,"background:#3d3d3d;color:#3ae374;border-radius:10px;padding:6px;");
		},
		newjoin(data){
			console.log(data);
			console.log(`%c${data.profile.me.nick} se unio a ${data.room}`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;");
		}
	},
	beforeDestroy(){
		console.log("%cDesconectando de preventa...","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;");
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'main' });
		this.$sktPreventa.off();
	},
	computed:{
		workin(){ return this.$store.getters['Account/workin']; },
		profile(){ return this.$store.getters['Account/profile']; },
		layout(){ return this.$store.state.Preventa.layout }
	}
}
</script>

<style lang="scss">
	.text--2{ font-size:.8em!important; }
</style>