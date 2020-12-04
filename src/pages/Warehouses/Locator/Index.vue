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
					<q-select dark color="green-13" class="col" label="Almacen" v-model="workIn" @input="setWarehouse" :options="warehousesOptions"/>
					<div class="row q-px-md justify-around">
						<q-select 
							dark color="green-13"
							v-for="(sect,idx) in sections" :key="idx" 
							v-model="sectModels[idx]"
							:options="sections[idx]"
							@input="loadSections(sectModels[idx],idx)"
							popup-content-style="max-height:330px;"
						/>
					</div>
				</q-card-section>

				<q-card-actions align="center">
					<q-btn flat :label="loc_exist?'La ubicacion ya existe':'Guardar'" :color="loc_exist?'amber-13':'green-13'" v-if="workIn.value" @click="set" :disabled="settingloc||loc_exist" :loading="settingloc"></q-btn>
				</q-card-actions>
			</q-card>
		</q-dialog>
	</q-page>
</template>

<script>
import dbproduct from '../../../API/Product'
import vizapi from '../../../API/warehouses'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'

export default {
	name: 'IndexLocator',
	components:{
		ToolbarAccount:ToolbarAccount,
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
			workIn:{ label:"seleccione", value:null, disabled:true },
			sections:[],
			sectModels:[],
			removes:[],
			settingloc:false,
			confirmremove:false,
			autocom:{model:null,options:undefined}
		}
	},
	mounted(){ 
		this.loadIndex();
	},
	methods:{
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
			let pos = this.sectModels.length-1;
			let path = this.sectModels[pos];
			this.wndAddLoc.locs.push(path.value);
			let data = { "_product":this.product.id, "_section":this.wndAddLoc.locs }

			vizapi.toggle(data).then(success=>{
				console.log(success.data.success);
				this.product.locations.unshift({ path:this.fullpath, id:success.data.success.attached[0] });
				this.$q.notify({ position:'bottom-right', color:'positive', icon:"fas fa-check", timeout:800 });
				this.settingloc=false;
				this.sectModels[pos]={ label:"Seleccione",value:null,disabled:true }
				this.wndAddLoc.locs = [];
				console.log(this.product.locations);
			}).catch(fail=>{ console.log(fail); });
		},
		loadSections(section,idx){
			this.sections.splice(idx+1);//elimina secciones
			this.sectModels.splice(idx+1);//elimina los modelos

			let data = { params:{"_section":section.value} }; // dato a enviar en peticion

			vizapi.loadSections(data).then(success=>{
				let children = success.data.sections.sections;

				if(children.length>0){
					let resp = children.map(item=>{ return {label:item.alias,value:item.id}; });
					console.log(resp);
					this.sections.push(resp);
					this.sectModels.push({label:"Seleccione",value:null});
				}else{ console.log("Sin mas subsecciones por cargar!!"); }
			}).catch(fail=>{ console.log(fail); });
		},
		setWarehouse(){
			console.log(this.workIn);
			this.sections = [];// vaciamos las secciones
			let data = { params:{"_celler":this.workIn.value} }; // dato a enviar en peticion

			vizapi.loadSections(data).then(success=>{
				let resp = success.data.sections.map(item=>{ return {label:item.alias,value:item.id}; });
				console.log(resp);
				this.sections.push(resp);
				this.sectModels.push({label:"Seleccione",value:null});
			}).catch(fail=>{ console.log(fail); });
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
				// if(resp.id){ 
				// }else{
				// 	this.product = undefined;
				// 	this.$q.notify({
				// 		message:`Sin coincidencias para ${idart}`,
				// 		timeout:1500,
				// 		color:'negative',
				// 		position:'center',
				// 		icon:"fas fa-exclamation-triangle"
				// 	});
				// }
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
		fullpath(){ 
			let path = '';
			this.sectModels.forEach((item,idx)=>{ 
				if(item.value){ path += idx==0?`${item.label}`:`-${item.label}`; }
			});
			return path;
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