<template>
	<q-page>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Inventarios"/>
			</q-card>
		</q-header>

		<template v-if="inventories.length">
			<div class="row q-pt-sm q-pl-sm">
				<div class="col-xs-12 col-md-3" v-for="inv in inventories" :key="inv.id">
					<q-card class="bg-darkl1 q-mb-sm q-mr-sm">
						<q-card-section>
							<div class="row justify-between items-center">
								<div class="text-h5 text-green-13">{{inv.id}}</div>
								<q-icon :color="inv.type.id==1?'purple-14':'pink-6'" :name="inv.type.id==1?'visibility':'visibility_off'" size="sm"/>
							</div>
							<div class="text--1 q-pt-md">
								<span class="text-grey-2">{{inv.created_at}}</span><br>
								{{inv.created_by.names}} [ {{inv.created_by.nick}} ]<br>
								Responsables [{{inv.responsables.length}}]
							</div>
						</q-card-section>
						<q-separator/>
						<q-card-actions align="right">
							<template v-if="inv.status.id==1">
								<q-btn v-if="imAdmin(inv.created_by)" @click="$router.push(`contador/config/${inv.id}`)" rounded flat color="light-blue-13" icon="settings"/>
								<q-spinner-dots v-else color="amber-13" size="md"/>
							</template>

							<template v-if="inv.status.id==2">
								<q-btn v-if="imAdmin(inv.created_by)" @click="$router.push(`contador/config/${inv.id}`)" rounded flat color="light-blue-13" icon="settings"/>
								<q-btn @click="$router.push(`contador/${inv.id}`)" rounded flat color="green-13" icon="launch"/>
							</template>

							<template v-if="inv.status.id==3">
								<!-- <q-btn v-if="imAdmin(inv.created_by)" @click="$router.push(`contador/config/${inv.id}`)" rounded flat color="light-blue-13" icon="settings"/> -->
								<q-btn @click="$router.push(`contador/${inv.id}`)" rounded flat color="light-blue-13" icon="launch"/>
							</template>
						</q-card-actions>
					</q-card>
				</div>
			</div>
		</template>
		<div class="q-pb-xl"></div>

		<q-dialog v-model="wndCreate.state" position="bottom">
			<q-card class="bg-darkl0 text-grey-5 exo">
				<q-form>
					<q-card-section>Nuevo Inventario</q-card-section>
					<q-separator/>
					<q-card-section>
						<q-select dark flat color="green-13"
							option-value="id"
        					option-label="name"
							:options="types"
							v-model="wndCreate.form.type"
							:rules="[ val => val || 'Seleccione tipo de Inventario' ]"
							label="Tipo:"
						/>
						<q-input v-model="wndCreate.form.notes" dark flat color="green-13" label="Notas:"/>
					</q-card-section>
					<q-card-actions align="right">
						<q-btn color="green-13" dark flat
							label="Crear" type="submit" 
							@click="create"
							:disabled="wndCreate.loading"
							:loading="wndCreate.loading"
						/>
					</q-card-actions>
				</q-form>
			</q-card>
		</q-dialog>

		<q-page-sticky position="bottom-right" :offset="[10,10]">
			<q-btn flat rounded icon="add" class="text-green-13 bg-darkl1 shadow-1" @click="wndCreate.state=true"/>
		</q-page-sticky>
	</q-page>
</template>

<script>
import invsdb from '../../../API/inventories'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
export default {
	components:{
		ToolbarAccount:ToolbarAccount,
	},
	data(){
		return {
			index:null,
			wndCreate:{
				state:false,
				form:{type:null,notes:null},
				creating:false
			},
			counterType:{ label:"Categoria", value:1 },
			// sktcounter:null
		}
	},
	async beforeMount(){
		this.$q.loading.show();
		this.index = await invsdb.index();
		console.log(this.index);
		this.$q.loading.hide();

		console.log("MONTANDO SOCKET");
		await this.$sktCounters.connect() ;
		this.$sktCounters.emit('index',this.profile);

		this.$sktCounters.on('connected',data=>{ console.log(data); });
	},
	methods:{
		create(){
			console.log("Creando Nuevo Conteo");
			if (this.wndCreate.form.type) {
				this.wndCreate.creating = true;

				let data = {
					"_type": this.wndCreate.form.type.id,
					"notes": this.wndCreate.form.notes,
					"token":this.$vizapi.defaults.headers.common['Authorization'],
				}
				
				invsdb.create(data).then(success=>{
					let resp = success.data.inventory;
					resp.products=[];
					this.wndCreate.creating = false;
					this.index.inventory.unshift(resp);
					this.wndCreate.creating = false;
					this.wndCreate.state = false;

					this.$q.notify({
						icon:"done",
						color:"positive",
						position:'center',
						message:`Inventario ${resp.id} creado...`
					});

					this.$router.push('/almacen/contador/config/'+resp.id);
				}).catch(fail=>{ console.log(fail); });
			}
		},
		drop(inv){
			console.log("Eliminar Inventario?");
			console.log(inv);
		},
	},
	computed:{
		states(){ return this.index ? this.index.status : []; },
		types(){ return this.index ? this.index.type : []; },
		inventories(){ return this.index ? this.index.inventory.filter(inv=>{return inv.status.id!=4}) : []; },
		labelStep(){
			return state =>{
				let label = '';
				switch(state){
					case 1: label='Iniciar'; break;
					case 2: label='Finalizar'; break;
				}
				return label;
			}
		},
		profile(){ return this.$store.getters['Account/profile'];},
        imAdmin(){
			return creation => { return creation.id==this.profile.me.id ? true:false; }
		}
	}
}
</script>

<style lang="scss">

	.titlebtn{
		text-transform: uppercase;
		font-size: .8em!important;
	}

	._thsticky{
		max-height: 450px;
		.q-table__top,.q-table__bottom,thead tr:first-child th{ background: #2D3035; }
		thead tr th{ position: sticky; z-index:1; }
		thead tr:first-child th{top: 0;}

		tbody tr{ border:4px solid red; }
	}

</style>
