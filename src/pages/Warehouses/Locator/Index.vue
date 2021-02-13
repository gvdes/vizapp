<template>
	<q-page>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Ubicador"/>
				<q-card-section>
					<q-form class="q-py-sm">
						<q-select dark dense filled fill-input color="green-13"
							use-input hide-selected class="text-uppercase" hide-dropdown-icon
							input-debounce="0" option-value="id" option-label="code"
							:value="autocom.model"
							:options="autocom.options" 
							@filter="autocomplete"
							@input="locsOf"
							:type="iptsearch.type" behavior="menu">
							<template v-slot:no-option>
								<q-item><q-item-section class="text-grey">Sin coincidencias</q-item-section></q-item>
							</template>

							<template v-slot:prepend>
								<q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
							</template>

							<template v-slot:option="scope">
								<q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
									<!-- <q-item-section avatar>
										<q-img :src="scope.opt.img" style="width:35px;height:35px;"/>
									</q-item-section> -->
									<q-item-section>
										<q-item-label><span class="text-bold">{{scope.opt.code}}</span> - {{scope.opt.name}}</q-item-label>
										<q-item-label caption class="text--2">{{ scope.opt.description }}</q-item-label>
									</q-item-section>
								</q-item>
							</template>
						</q-select>
					</q-form>
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
						<q-item-section avatar actions align="right">
							<q-btn  @click="remove(loc.id,idx)" flat icon="remove" color="red-13"/>
						</q-item-section>
						<!-- <q-item-section avatar actions align="right">
							<q-btn v-if="!confirmremove" @click="confirmremove=true" flat icon="remove" color="red-13"/>
							<template v-else>
								<q-btn  @click="confirmremove=false" flat label="cancelar" color="amber-13"/>
								<q-btn  @click="remove(loc.id,idx)" flat label="Eliminar" color="red-13"/>
							</template>
						</q-item-section> -->
					</q-item>
				</q-list>
			</q-card>
		</div>

		<q-dialog v-model="wndAddLoc.state" position="bottom">
			<q-card class="bg-darkl0">
				<q-card-section>
					<WarehousesBrowser :fetchproducts="false" @selectedLoc="selectedLoc"/>
				</q-card-section>

				<q-card-actions align="center">
					<q-btn v-if="add_loc" dark flat color="green-13" @click="set" :disabled="settingloc" :loading="settingloc" label="Guardar"/>
				</q-card-actions>
			</q-card>
		</q-dialog>
	</q-page>
</template>

<script>
import dbproduct from '../../../API/Product'
import vizapi from '../../../API/warehouses'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
import WarehousesBrowser from '../../../components/Global/WarehousesBrowser.vue'

export default {
	name: 'IndexLocator',
	components:{
		ToolbarAccount:ToolbarAccount,
		WarehousesBrowser:WarehousesBrowser
	},
	data(){
		return {
			warehouses:[],
			iptsearch:{
				value:'',
				processing:false,
				type:"text",
				icon:'fas fa-hashtag'
			},
			product:undefined,
			create:{ state:false },
			wndAddLoc:{ state:false,locs:[] },
			sections:[],
			removes:[],
			settingloc:false,
			confirmremove:false,
			autocom:{model:null,options:undefined},
			locsave:null
		}
	},
	mounted(){ 
		this.loadIndex();
	},
	methods:{
		selectedLoc(loc){ this.locsave = loc; },
		autocomplete (val, update, abort) {
            let data={params:{ "code": val.trim() }};
            dbproduct.autocomplete(data).then(success=>{
                let resp = success.data;
                update(() => { this.autocom.options=resp; });
            }).catch(fail=>{ console.log(fail); });
        },
		clearWndAddLoc(){ this.sections.splice(idx+1);},//elimina secciones
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
			this.settingloc=true;
			console.log(this.locsave);
			let idloc = this.locsave.section.model.value.id;
			let fullpath = this.locsave.path.filter(item=>{//filtrar elementos que si tienen contenido
					return item ? item.value:null;
				}).map(item=>{
					return item.value.alias;//retornar solo los valores
				}).join('-');
			let data = { "_product":this.product.id, "_section":idloc }

			vizapi.toggle(data).then(success=>{
				console.log(success.data);
				this.product.locations.unshift({ path:fullpath, id:success.data.success.attached[0] });
				this.settingloc=false;
				this.$q.notify({ position:'center', color:'positive', icon:"fas fa-check", timeout:800 });
			}).catch(fail=>{
				this.settingloc=false;
				console.log("%cError has been resulted!!","font-size:2em;color:red;");
				console.log(fail);
			});
		},
		locsOf(opt){
			this.product=undefined;
			this.iptsearch.processing=true;
			console.log(`ubicaciones para ${opt.code}`);
			let idart = opt.id;
			let data = { params:{ "id":idart } }

			vizapi.product(data).then(success=>{
				console.log(success.data);
				this.product = success.data;
				this.iptsearch.processing=false;
			}).catch(fail=>{ console.log(fail); });
		},
		toogleIptSearch(){
			switch (this.iptsearch.type) {
				case "text": 
					this.iptsearch.type="number";
					this.iptsearch.icon="fas fa-font";
				break;
				case "number": 
					this.iptsearch.type ="text";
					this.iptsearch.icon="fas fa-hashtag";
				break;
			}

			this.$refs.iptsearch.focus();
		},
		async loadIndex(){ this.warehouses = await vizapi.loadWarehouses(); }
	},
	computed:{
		cansearch(){ return this.iptsearch.value.length>2 ? false : true; },
		warehousesOptions(){ return this.warehouses.map(item=>{ return {label:item.name,value:item.id}; }); },
		add_loc(){
			if (this.locsave) {
				return this.locsave.path.filter(item=>{//filtrar elementos que si tienen contenido
					return item ? item.value:null;
				}).length ? true:false;	
			}
			return false;
		},
		current_paths(){
			if(this.product){
				return this.product.locations.map(loc=>{
					return loc.path;
				});
			}else{return []}
		},
		loc_exist(){
			return this.current_paths.includes(this.fullpath);
		}
	}
}
</script>