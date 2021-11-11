<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container class="exo bg-darkl0 text-white ">
			<q-header class="bg-none" v-if="layout.header.state">
				<q-card class="bg-darkl1">
					<HeaderApp :title="layout.header.title"/>
					<div class="bg-darkl1 q-pa-sm row" v-if="layout.viewsection">
						<div class="col-md col-xs-12">
							<RangeDates @inputRanges="loadView"/>
						</div>
					</div>
				</q-card>
			</q-header>

			<router-view />

			<q-footer reveal class="bg-darktransl0" v-if="layout.footer.state">
				<ToolbarModule :with_home="inc_home"/>
			</q-footer>
		</q-page-container>
	</q-layout>
</template>

<script>
import ToolbarModule from '../components/Global/ToolbarModule.vue'
import RangeDates from '../components/Global/RangeDates.vue'
import HeaderApp from '../components/Global/HeaderApp.vue'

import PreventaDB from '../API/preventa.js'
import AccountsDB from '../API/account.js'

export default {
	name: 'Preventa',
	components:{ ToolbarModule, RangeDates, HeaderApp },
	data(){
		return {
			psocket:this.$sktPreventa
		}
	},
	created (){
		/**
		 * Desconecto el socket actual, para generar una nueva conexion
		 */
		this.psocket.disconnect();
		this.psocket.connect();

		/**
		 * Registro los "listeners" del socket
		 */
		this.psocket.on('socketid', data => this.sktId(data) );// retorna el ID de la conexion del socket
		this.psocket.on('joinedat', data => this.sktJoinedAt(data) );// Notifica de union a un room
		this.psocket.on('newjoin', data => this.sktNewJoin(data) );// notifica cuando otro se une al mismo room
		this.psocket.on('order_add', data => this.sktOrderAdd(data) );// notifica cuando un pedido es creado
		this.psocket.on('order_update', data => this.sktOrderUpdate(data) );// notifica cuando un pedido debe ser actualizado
		this.psocket.on('order_aou', data => this.sktAOU(data) ); // notifica cuando pedido debe ser creado o actualizado
		this.psocket.on('module_update', data => this.sktModuleUpdate(data) );// notifica cuando un modulo fue actualizado
		this.psocket.on('cash_update', data => this.sktCashUpdate(data) );// notifica cuando una caja cambio su estado (on/off)

		let room = null;// room inicial (ninguno)

		/**
		 * Definicion del o los rooms a los que este usuario se unira
		 */
		switch (this.profile.me._rol) {
			case 1: case 2: case 3: room='admins'; break;
			case 4: room='sales'; break;
			case 6: case 7: room='supply'; break;
			case 9: room='checkout'; break;
		}

		/**
		 * Se realiza la union a los rooms
		 * obligatorioamente, todos se unen a cfg, canal de emision de configuraciones de la preventa
		 */
		this.psocket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:room });
		this.psocket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'cfg' });		
	},
	methods:{
		async loadView(ranges){
			this.$q.loading.show({ message:"Cargando vista..." });
			let vista = { "date_from":ranges.dbranges.from, "date_to":ranges.dbranges.to };
			let index = await PreventaDB.index(vista);
			let agents = await AccountsDB.get({ '_rol':[4] });

			this.$store.commit('Preventa/startState',{ index, agents });
			this.$q.loading.hide();
		},
		sktId(data){ console.log(`%cidSktPreventa: ${data}`,"background:#273c75;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.3em;"); },
		sktJoinedAt(data){ console.log(`%cUnion a ${data.room} OK!!`,"background:#3d3d3d;color:#3ae374;border-radius:10px;padding:10px;"); },
		sktNewJoin(data){ console.log(`%c${data.profile.me.nick} se unio a ${data.room}`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:10px;"); console.log(data); },
		sktOrderAdd(data){
			console.log(data);

			let order = data.order;
			let by = data.user.me;

			console.log(`%c${by.nick} inicio la orden ${order.id}`,"background:#303952;color:#e66767;border-radius:10px;padding:8px;");
			console.log(data);
			this.$store.commit('Preventa/newOrder', order);
		},
		sktOrderUpdate(data){
			let order = data.order;
			let newstate = data.newstate;

			console.log(`%cLa orden ${data.order.id} cambio su status a ${data.newstate.name}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
			this.$store.commit('Preventa/updateState', { order, newstate });
		},
		sktModuleUpdate({by,_msgstate,state}){
			this.$store.commit('Preventa/setState',state);
			console.log(`%c--❯ ${by} ${_msgstate} el modulo ${state.name}`,"background:#fbc531;color:#2f3640;border-radius:10px;padding:10px;font-size:1.3em;");
			this.appsounds.alert1.play();
			this.$q.notify({
				message:`${by} <b>${_msgstate}</b> el modulo <b>${state.name}</b>`,
				type:'warning',
				closeBtn:'Ok',
				timeout:10000,
				position:'center',
				html:true
			});
		},
		sktAOU(data){
			console.log(data);
			console.log(`%cAveriguando existencia de pedido ${data.order.id} para crear o actualizar!!`);
			this.$store.commit('Preventa/orderAOU',data);
		},
		sktCashUpdate({by,cash,newstate}){
			let _msgstate = newstate.id==1 ? 'encendio':'apago';
			this.$store.commit('Preventa/setCashState',{cash,newstate});

			this.$q.notify({
				message:`<b>${by}</b> ${_msgstate} la <b>${cash.name}</b>`,
				type:'warning',
				closeBtn:'Ok',
				timeout:10000,
				position:'center',
				html:true
			});
		}
	},
	destroyed(){
		console.log("%cDesconectando de preventa...","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;");
		this.psocket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'admins' });
		this.psocket.off("admins");
		this.psocket.off("orders");
		this.psocket.disconnect();
	},
	computed:{
		workin(){ return this.$store.getters['Account/workin']; },
		profile(){ return this.$store.getters['Account/profile']; },
		layout(){ return this.$store.state.Preventa.layout },
		inc_home(){ return this.profile.me._rol <=3 },
		appsounds(){ return this.$store.getters['Multimediapp/sounds']; }
	}
}
</script>
<style lang="scss">

	.custom-toggle{border: 2px solid #027be3}

	.ord_anx{ border-bottom: 3px dashed #fff200 ; }

	table thead{
		color:#ced6e0;
		text-transform: uppercase;
		font-family: 'QuickRegular';
	}
	table tbody tr:nth-child(odd){ background-color:rgba(#000,.07); padding:10px 0px 10px 0px;}

</style>
