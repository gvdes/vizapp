<template>
	<q-page>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Ubicador"/>
				<q-card-section>
					<ProductAutocomplete :checkState="false" @input="selectedProd" />
				</q-card-section>
				<q-separator/>
				<q-toolbar v-if="product" class="row justify-between">
					<q-btn flat icon="close" class="col" @click="product=undefined"/>
					<q-btn flat icon="more_vert" class="col"/>
					<q-btn flat icon="add" class="col" @click="wndAddLoc.state=!wndAddLoc.state"/>
				</q-toolbar>
			</q-card>				
		</q-header>
		
		<div v-if="product" class="q-px-sm q-pt-sm">
			<q-card flat class="bg-darkl1">
				<q-toolbar>
					<span class="q-ml-sm text-light-blue-13 text-bold"> {{ product.code }}</span>
				</q-toolbar>
				<q-separator/>
				<q-card-section horizontal>
					<q-card-section>
						<q-img src="../../../assets/_defprod.png" style="height: 50px; width: 50px"/>
					</q-card-section>
					<q-card-section class="col">
						<div>{{ product.description }} </div>
						<div>CC: {{ product.name }}</div>
						<div>STOCK: {{ product.stock }} </div>
					</q-card-section>
				</q-card-section>
			</q-card>

			<q-card flat class="q-mt-md bg-darkl1">
				<q-toolbar class="text-overline">Ubicaciones</q-toolbar>
				<q-list bordered>
					<q-item v-for="(loc,idx) in product.locations" :key="idx">
						<q-item-section>{{ loc.path }}</q-item-section>

						<template v-if="loc.state==1">
							<q-item-section avatar actions align="right">
								<q-btn flat dark @click="loc.state=2" icon="delete_outline" color="amber-13"/>
							</q-item-section>
						</template>

						<template v-if="loc.state==2">
							<q-item-section avatar actions align="right">
								<div class="row">
									<q-btn @click="remove(loc.id,idx)" flat label="eliminar" size="sm" color="red-13"/>
									<q-btn @click="loc.state=1" flat label="conservar" size="sm" color="light-blue-13"/>
								</div>
							</q-item-section>
						</template>
					</q-item>
				</q-list>
			</q-card>
		</div>

		<q-dialog v-model="wndAddLoc.state" position="bottom">
			<q-card class="bg-darkl0">
				<q-card-section>
					<WarehousesBrowser :fetchproducts="false" @selectedLoc="selectedLoc"/>
				</q-card-section>

				<template v-if="valid_loc">
					<q-card-section v-if="is_duplicate" class="text-center text-amber-13">
						<q-icon name="error_outline" size="sm"/> Ubicacion duplicadas
					</q-card-section>

					<q-card-actions v-else align="center">
						<q-btn dark flat color="green-13" @click="set" :disabled="settingloc" :loading="settingloc" no-caps label="Guardar" />
					</q-card-actions>
				</template>
			</q-card>
		</q-dialog>
	</q-page>
</template>

<script>
import vizapi from '../../../API/warehouses'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
import WarehousesBrowser from '../../../components/Global/WarehousesBrowser.vue'
import ProductAutocomplete from '../../../components/Global/ProductAutocomplete.vue'

export default {
	name: 'IndexLocator',
	components:{
		ToolbarAccount:ToolbarAccount,
		WarehousesBrowser:WarehousesBrowser,
		ProductAutocomplete:ProductAutocomplete
	},
	data(){
		return {
			iptsearch:{
				value:'',
				processing:false,
				type:"text",
				icon:'fas fa-hashtag'
			},
			product:undefined,
			wndAddLoc:{ state:false },
			settingloc:false,
			autocom:{model:null,options:undefined},
			locsave:null,
			pathtosave:null
		}
	},
	methods:{
		selectedLoc(loc){
			this.locsave = loc;
			//filtrar elementos que si tienen contenido
			let usedspaths = this.locsave.path.filter(item=>{ return item ? item.value:null; });
			// obtener ubicacion que se considerara a guardar
			this.pathtosave = usedspaths.length ? usedspaths[usedspaths.length-1].value:null;

		},//se ejecuta al seleccionar una ubicacion
		selectedProd(product){// se ejecuta al seleccionar un producto del autocompletado, para obtener las ubicaciones
			this.product=undefined;
			this.iptsearch.processing=true;
			console.log(product);
			let data = { params:{ "id":product.id } }

			vizapi.product(data).then(success=>{
				success.data.locations.map(loc=>{loc.state=1; return loc;});
				this.product = success.data;
				this.iptsearch.processing=false;
			}).catch(fail=>{ console.log(fail); });
		},
		remove(id,pos){
			let data = { "_product":this.product.id, "_section":[id] };
			console.log(data,pos);
			vizapi.toggle(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				this.product.locations.splice(pos,1);
			}).catch(fail=>{ console.log(fail); });
		},
		set(){
			// console.log(this.locsave);
			this.settingloc=true;
			
			let data = { "_product":this.product.id, "_section":this.pathtosave.id }

			vizapi.toggle(data).then(success=>{
				console.log(success.data);
				this.product.locations.unshift(this.pathtosave);
				this.settingloc=false;
				this.$q.notify({ position:'center', color:'positive', icon:"fas fa-check", timeout:800 });
			}).catch(fail=>{
				this.settingloc=false;
				console.log("%cError has been resulted!!","font-size:2em;color:red;"); console.log(fail);
			});
		},

	},
	computed:{
		valid_loc(){
			// define si se puede guardar una ubicacion en base a que hay al menos una ubicacion seleccionada ademas del almacen
			if (this.locsave) {
				return this.locsave.path.filter(item=>{//filtrar elementos que si tienen contenido
					return item ? item.value:null;
				}).length ? true:false;	
			}
			return false;
		},
		current_paths(){//devuelve las ubicaciones que ya estan guardadas
			return this.product ? this.product.locations.map(loc=>{ return loc.id; }) : [];
		},
		is_duplicate(){//define si se puede guardar relacionar una ubicacion a este producto mientras no exista aun
			return (this.current_paths.length&&this.pathtosave) ?
				this.current_paths.includes(this.pathtosave.id) : false;
		},
	}
}
</script>