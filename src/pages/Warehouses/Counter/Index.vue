<template>
	<q-page padding>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Contador"/>
			</q-card>
		</q-header>
		<router-view />

		<div>
			<template v-if="inventories.length">
				<div class="row q-pl-sm">
					<q-card class="col-xs-12 col-md-3 q-mb-sm q-mr-sm bg-darkl1" v-for="inv in inventories" :key="inv.id">
						<q-card-section class="row justify-between items-start">
							<div>
								<div class="text-h5 text-green-13">{{inv.id}}</div>
								<div>[ {{inv.type.name}} ]</div>
							</div>
							<div class="text--1 text-right">
								{{inv.created_at}}<br>
								{{inv.created_by.names}} [ {{inv.created_by.nick}} ]
							</div>
						</q-card-section>
						<q-separator/>
						<q-card-section>
							<div class="row items-center">
								<div class="col">Responsables [{{inv.responsables.length}}]:</div>
								<!-- <q-btn @click="config(inv)" rounded flat color="light-blue-13" icon="settings"/> -->
								<q-btn @click="$router.push(`contador/config/${inv.id}`)" rounded flat color="light-blue-13" icon="settings"/>
							</div>
						</q-card-section>
					</q-card>
				</div>
			</template>
			<template v-else>
				<div>
					No hay Conteos Activos
				</div>
			</template>
		</div>

		<q-dialog v-model="wndCreate.state" position="bottom">
			<q-card class="bg-darkl0 text-grey-5 exo">
				<q-form>
					<q-card-section>
						Nuevo Inventario
					</q-card-section>
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
						<q-btn  color="green-13" dark flat
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
import vizapi from '../../../API/warehouses'
import invsdb from '../../../API/inventories'
import accountsdb from '../../../API/account'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
export default {
	name: 'PageIndex',
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
			warehouses:null,
			counterType:{ label:"Categoria", value:1 },
			workIn:{ label:"seleccione", value:null, disabled:true },
			sections:[],
			sectModels:[],
			tableproducts:{
				loading:false, 
				data:null,
				columns:[
					{ name:'locations', align:'left', label:'Ubicacion', field:'locations' },
					{ name:'code', align:'left', label:'Codigo', field:'code', sortable:true },
					{ name:'counter', align:'center', label:'Conteo', field:'counter', sortable:true },
				]
			}
		}
	},
	async beforeMount(){
		this.index = await invsdb.index(); 
		console.log(this.index);
	},
	methods:{
		create(){
			console.log("Creando Nuevo Conteo");
			if (this.wndCreate.form.type) {
				this.wndCreate.creating = true;
				let data = {
					"_type": this.wndCreate.form.type.id,
					"notes": this.wndCreate.form.notes
				}

				console.log(data);
				
				invsdb.create(data).then(success=>{
					let resp = success.data;
					console.log(resp);
					this.wndCreate.creating = false;
					this.index.inventory.push(resp);
				}).catch(fail=>{
					console.log(fail);
				});
			}

		},
		setWarehouse(){
			this.tableproducts.loading=true;
			console.log(this.workIn);
			this.sections = [];// vaciamos las secciones
			let data = { params:{"_celler":this.workIn.value,"products":true,"paginate":50} }; // dato a enviar en peticion

			vizapi.loadSections(data).then(success=>{
				let resp = success.data.sections.map(item=>{ return {label:item.alias,value:item.id}; });
				console.log(resp);
				this.sections.push(resp);
				this.sectModels.push({label:"Seleccione",value:null});
				this.tableproducts.data = success.data.products.data.map(item=>{
					return { code:item.code, locations:item.locations, counter:0 }
				});
				this.tableproducts.loading=false;
			}).catch(fail=>{ console.log(fail); });
		},
		loadSections(section,idx){
			this.tableproducts.loading=true;
			console.log(this.sections);
			console.log(this.sectModels);

			this.sections.splice(idx+1);//elimina secciones
			this.sectModels.splice(idx+1);//elimina los modelos

			let data = { params:{"_section":section.value,"products":true,"paginate":50} }; // dato a enviar en peticion

			vizapi.loadSections(data).then(success=>{
				let children = success.data.sections.sections;

				if(children.length>0){
					let resp = children.map(item=>{ return {label:item.alias,value:item.id}; });
					console.log(resp);
					this.sections.push(resp);
					this.sectModels.push({label:"Seleccione",value:null});
					this.tableproducts.data = success.data.products.data.map(item=>{
						return { code:item.code, locations:item.locations, counter:0 }
					});
					this.tableproducts.loading=false;
				}else{ console.log("Sin mas subsecciones por cargar!!"); }
			}).catch(fail=>{ console.log(fail); });
		},
	},
	computed:{
		// cansearch(){ return this.iptsearch.value.length>2 ? false : true; },
		// warehousesOptions(){ return this.warehouses.map(item=>{ return {label:item.name,value:item.id}; }); },
		// fullpath(){ 
		// 	let path = '';
		// 	this.sectModels.forEach((item,idx,arr)=>{ if(item.value){ path += idx==0?`${item.label}`:`-${item.label}`; } });
		// 	return path;
		// },
		states(){ return this.index ? this.index.status : []; },
		types(){ return this.index ? this.index.type : []; },
		inventories(){ return this.index ? this.index.inventory : []; },
		labelStep(){
			return state =>{
				let label = '';
				switch(state){
					case 1: label='Iniciar'; break;
					case 2: label='Finalizar'; break;
				}
				return label;
			}
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
