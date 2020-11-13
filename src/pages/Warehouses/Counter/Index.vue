<template>
	<q-page>

		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Contador"/>

				<div class="q-pa-xs column" v-if="warehouses">
					<div class="row">
						<q-select dark color="amber-13" class="col q-px-md" label="Tipo de conteo" v-model="counterType" :options="[{label:'Categoria',value:1},{label:'Seccion',value:2}]"/>
						<q-select dark color="amber-13" class="col q-px-md" label="Almacen" v-model="workIn" @input="setWarehouse" :options="warehousesOptions"/>
					</div>
					<div class="row q-px-md justify-around" v-if="counterType.value==1">
						<q-select
							dark color="amber-13"
							v-for="(sect,idx) in sections" :key="idx" 
							v-model="sectModels[idx]"
							:options="sections[idx]"
							@input="loadSections(sectModels[idx],idx)"
						/>
					</div>

					<div class="row q-px-md justify-around" v-if="counterType.value==2">
						<q-select
							dark color="amber-13"
							v-for="(sect,idx) in sections" :key="idx" 
							v-model="sectModels[idx]"
							:options="sections[idx]"
							@input="loadSections(sectModels[idx],idx)"
						/>
					</div>
				</div>

			</q-card>
		</q-header>

		<div>
			<q-card flat class="bg-darkl1">
				<q-card-section v-if="!tableproducts.data">
					Filtre secciones para ver articulos
				</q-card-section>
				<div v-else>
					<!-- <q-table dark :data="tableproducts.data" :columns="tableproducts.columns"/> -->
					<q-table dark flat
						card-class="bg-none text-grey-6"
						:data="tableproducts.data"
						:columns="tableproducts.columns"
						row-key="opening"
						class="_thsticky"
						table-header-class="text-amber-13"
						:loading="tableproducts.loading"
					>
						<template v-slot:body="props">
							<q-tr :props="props">
								<q-td key="locations" :props="props">
									<div class="column">
										<span v-for="(loc,idx) in props.row.locations" :key="idx">
											{{ loc.path }}
										</span>
									</div>
								</q-td>
								<q-td key="code" :props="props">
									{{ props.row.code }}
								</q-td>
								<q-td key="counter" :props="props">
									{{ props.row.counter }}
									 <q-popup-edit dark v-model="props.row.counter" :title="`Conteo: ${props.row.code}`">
										<q-input dark color="amber" min="0" type="number" v-model="props.row.counter" dense autofocus counter />
									</q-popup-edit>
								</q-td>
							</q-tr>
						</template>
					</q-table>
				</div>
			</q-card>
		</div>
	</q-page>
</template>

<script>
import vizapi from '../../../API/warehouses'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
export default {
	name: 'PageIndex',
	components:{
		ToolbarAccount:ToolbarAccount,
	},
	data(){
		return {
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
	beforeMount(){
		this.loadIndex();
	},
	methods:{
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
		async loadIndex(){ this.warehouses = await vizapi.loadWarehouses(); },
	},
	computed:{
		cansearch(){ return this.iptsearch.value.length>2 ? false : true; },
		warehousesOptions(){ return this.warehouses.map(item=>{ return {label:item.name,value:item.id}; }); },
		fullpath(){ 
			let path = '';
			this.sectModels.forEach((item,idx,arr)=>{ if(item.value){ path += idx==0?`${item.label}`:`-${item.label}`; } });
			return path;
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
