<template>
	<q-page padding class="column items-center justify-center">
		<!--  -->

		<div v-if="gstate=='listen' ">
			<div v-if="iptsearch.focus" class="text-green-13 text-center">
				<div class="text-h4 q-mb-md">Escanea tu código aqui.</div>
				<div class="text-h1 text-center"> 
					<q-spinner-bars color="green-13" size="3em" />
				</div>
			</div>
			<div class="text-h1 text-center" v-else><q-icon name="fas fa-bug" color="red" size="2em" @click="$refs.ipt_search.focus()"/></div>
			
			<!-- <div class="q-mt-xl">
				<div class="q-pa-md">Pedidos por llegar: {{orders.length}}</div>
				<div class="row items-center q-gutter-sm">
					<q-card v-for="ord in orders" :key="ord.id" class="bg-darkl1">
						<q-card-section>
							{{ord.name}} ({{ord.id}})
						</q-card-section>
					</q-card>
				</div>
			</div> -->
		</div>

		<div v-if="gstate=='frontfounded'">
			<div class="text-center">
				<div class="text-h1">
					<q-spinner-hourglass color="light-blue-14" size="2em"/>
				</div>
				<div class="text-h4 q-mt-md">Hola <span class="text-light-blue-14 text-bold">{{target.name}}</span> ...</div>
			</div>
		</div>

		<div v-if="gstate=='changesuccess'">
			<div class="text-center">
				<div class="text-h5 q-mb-md"><span class="text-green-13 text-uppercase text-bold">{{target.name}},</span> ya estamos surtiendo tu pedido. Te llamaremos pronto!!</div>
				<div class="text-h1">
					<q-icon name="far fa-grin-wink" color="green-13" size="3em"/>
				</div>
			</div>
		</div>

		<div v-if="gstate=='frontnotfound'">
			<div class="text-center">
				<div class="text-h5 text-amber-13">Vaya!!, no hay coincidencias para tu codigo.</div>
				<div class="text-h1">
					<q-img src="https://stickerly.pstatic.net/sticker_pack/13279e882d3a25af/9CZFJ4/2/3a788547-d7ef-4aa9-a93f-2f23ee9655c0-003.png" width="300px"/>
				</div>
			</div>
		</div>

		<input type="text" ref="ipt_search" v-model="iptsearch.model" 
			@keypress.enter="search"
			@focus="listenipt(true)"
			@blur="listenipt(false)"
			autocomplete="off"
			id="ipt_search"
		/>
	</q-page>
</template>

<script>

import OrdersList from '../../components/Preventa/OrdersList.vue'
import preventadb from '../../API/preventa.js'


export default {
	components:{ OrdersList },
	data() {
		return {
			socket:this.$sktPreventa,
			iptsearch:{
				model:'',
				focus:false,
			},
			gstate:'listen',
			searching:false,
			target:undefined
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | CheckIn");
		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'checkin' });

		this.socket.on('order_changestate', data => this.skt_add_update_order(data));//

		this.$store.commit('Preventa/setHeaderState', false);
	},
	mounted(){ this.$refs.ipt_search.focus(); },
	methods:{
		listenipt(val){ this.iptsearch.focus = val; },
		search(){
			this.gstate = 'searching';
			let idx = this.orders.findIndex( ord => this.iptsearch.model == ord.id);
			
			if(idx==-1){

				this.gstate = 'frontnotfound';
				this.iptsearch.model = '';

				//buscar el status actual de la base de datos

				setTimeout(()=>{
					this.gstate = 'listen';
					this.$refs.ipt_search.focus();
				},3000);

			}else{
				this.target = this.orders[idx];

				this.gstate = 'frontfounded';
				this.nextStep();
			}
		},
		async nextStep(){
			let resp = await preventadb.nextStep({ "_order": this.target.id });

			if(resp.success){
                let order = Object.assign({}, this.target);
                let newstate = resp.status[resp.status.length-1];

                this.socket.emit("order_changestate",{ order, newstate });
				this.iptsearch.model = '';

				this.$store.commit('Preventa/updateState', {order, newstate});

				setTimeout(()=>{
					this.gstate = 'changesuccess';

					setTimeout(()=>{
						this.gstate = 'listen';
						this.$refs.ipt_search.focus();
						this.target = undefined;
					},4000);

				},2500);
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
		background: none;
		border: none;
		text-align: center;
		color:white;
		outline: none;
		z-index: -1000;
	}
</style>