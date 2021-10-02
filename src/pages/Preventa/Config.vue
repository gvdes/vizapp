<template>
	<q-page padding>
		<div class="q-mt-md">
			<q-card class="bg-darkl1">
				<q-card-section class="bg-darkl2 text-white text-uppercase text--2">modulos</q-card-section>

				<q-list class="text-grey-3" separator>
					<q-item v-ripple clickable v-for="state in process" :key="state.id" @click="setModState(state)">
						<q-item-section>
							<q-item-label>{{state.name}}</q-item-label>
							<q-item-label caption class="text-grey-5">{{state.state ? state.descs.on : state.descs.off}}</q-item-label>
						</q-item-section>

						<q-item-section avatar>
							<q-icon :name="state.state ? 'toggle_on':'toggle_off'" :color="state.state ? 'green-13':'grey-8' " size="lg"/>
						</q-item-section>
					</q-item>
				</q-list>
			</q-card>
		</div>

		<div class="q-mt-md">
			<q-card class="bg-darkl1">
				<q-card-section class="bg-darkl2 text-white text-uppercase text--2">Cajas</q-card-section>
				<q-list class="text-grey-3" separator>
					<q-item v-ripple clickable v-for="cash in cashdesks" :key="cash.id" @click="setCashState(cash)">
						<q-item-section>
							<q-item-label>{{cash.name}}</q-item-label>
						</q-item-section>

						<q-item-section avatar>
							<q-icon :name="cash.status.id ==1 ? 'toggle_on':'toggle_off'" :color="cash.status.id==1 ? 'green-13':'grey-8'" size="lg"/>
						</q-item-section>
					</q-item>
				</q-list>
			</q-card>
		</div>
	</q-page>
</template>

<script>
import PreventaDB from '../../API/preventa.js'
export default {
	data(){
		return {
			psocket:this.$sktPreventa
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setViewSection',false);
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | Configuracion");
	},
	methods:{
		async setModState(state){
			// console.log(`Modificando el paso ${state.name} (${state.id})`);

			let data = { "_status": state.id };
			let resp = await PreventaDB.setModState(data);

			if(resp.success){
				this.$store.commit('Preventa/setState',state);

				this.psocket.emit('module_update',{profile:this.profile,workpoint:this.workin.workpoint,state});

				this.$q.notify({
					color:'positive', icon:'done',
					message:'Estado actualizado.'
				});
			}else{
				this.$q.notify({
					color:'negative', icon:'error_outline',
					message:'No se logro actualizar el estado.'
				});
			}
		},
		async setCashState(cash){
			let data = { "_cash": cash.id };
			let resp = await PreventaDB.setCashState(data);
			let newstate = resp.status;

			if(resp.error){
				this.$q.notify({
					color:'negative', icon:'error_outline',
					message:'No se logro actualizar el estado.'
				});
			}else{
				this.$store.commit('Preventa/setCashState',{cash,newstate});

				this.psocket.emit('cash_update',{ profile:this.profile, workpoint:this.workin.workpoint, cash, newstate });

				this.$q.notify({
					color:'positive', icon:'done',
					message:`${cash.name}: ${resp.status.name}`
				});
			}

		}
	},
	beforeDestroy(){
		this.$store.commit('Preventa/setViewSection',true);
	},
	computed:{
		process(){ return this.$store.getters['Preventa/process'].filter(state => state.allow ); },
		cashdesks(){ return this.$store.getters['Preventa/cashdesks']; },
		workin(){ return this.$store.getters['Account/workin']; },
		profile(){ return this.$store.getters['Account/profile']; }
	}
}
</script>
