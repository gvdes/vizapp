<template>
	<q-page>
		<q-header class="bg-darktransl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Almacen"/>
			</q-card>
		</q-header>

		<div class="q-px-sm">
			<q-card flat class="bg-darkl1">
				<q-toolbar>
					Almacenes
					<q-space/>
					<q-btn flat rounded dense icon="add">
						<q-menu content-class="bg-darkl0 text-grey-6" v-model="newwarehouse.state">
							<q-card class="bg-none">
								<q-form @submit="create">
									<q-card-section>
										<q-input dark label-stacked color="green-13"
											autofocus filled 
											v-model="newwarehouse.name" 
											label="Nuevo almacen" 
											:rules="[val => newwarehouse.name.length>=3||'Ingrese un nombre']"
										/>
									</q-card-section>
									<q-card-actions align="right">
										<q-btn rounded color="amber-13" v-close-popup flat icon="close" @click="cancelAddSection"/>
										<q-btn rounded color="green-13" flat icon="done" type="submit" v-if="newwarehouse.name.length>=3"/>
									</q-card-actions>
								</q-form>
							</q-card>							
						</q-menu>
					</q-btn>
				</q-toolbar>

				<div class="text-center q-pb-sm" v-if="loading.state">
					<q-spinner-grid color="green" size="2em"/>
				</div>
				<div v-else>
					<div class="bg-darkl1 text-grey-6" v-for="(wrh,idx) in warehouses" :key="idx">
						<tree :tree-data="wrh" />
						<q-separator/>
					</div>
				</div>
			</q-card>
		</div>
		
		<q-dialog v-model="wndAddSections.state" persistent position="bottom">
			<template v-if="wndAddSections.parent">
				<q-card class="bg-darkl0 text-grey-6 exo">
					<q-toolbar>
						Nueva seccion en <span class="q-ml-sm text-green-13 text-bold"> {{ wndAddSections.parent.name }}</span>
					</q-toolbar>

					<q-form @submit="addSection">
						<q-card-section class="row">
							<q-input dark color="amber-13" v-model="newSection.name" label="Nombre" class="col" stack-label autofocus/>
							<q-input dark color="amber-13" v-model="newSection.alias" label="Alias" class="col text-uppercase" stack-label/>
							<q-input dark color="amber-13" v-model="newSection.items" type="number" class="col" label="Elementos"/>
						</q-card-section>
						<q-card-actions align="right">
							<q-btn flat icon="close" color="amber-13" @click="cancelAddSection" :disabled="newSection.adding"/>
							<q-btn flat icon="done" type="submit" color="green-13" :disabled="newSection.adding" :loading="newSection.adding"/>
						</q-card-actions>
					</q-form>
				</q-card>
			</template>
		</q-dialog>

	</q-page>
</template>

<script>

import Tree from "../../components/Warehouse/TreeSections";
import vizapi from '../../API/warehouses'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'

export default {
	name: 'AdminWrhs',
	components:{
		ToolbarAccount:ToolbarAccount,
		Tree:Tree
	},
	beforeMount(){
		this.$store.commit('Warehouse/cleanModule');
		vizapi.warehouses().then(success=>{
			let cellers = success.data.cellers;
			if(cellers.length>0){
				cellers.map(wrh=>{
					let data = { params:{"_celler":wrh.id } }; // dato a enviar en peticion
					vizapi.tree(data).then(success=>{
						this.loading.state=false;
						wrh.children = success.data;
						wrh.celler = wrh.id;
						this.$store.commit('Warehouse/set',wrh);
					}).catch(fail=>{ alert(fail); });
				});
			}else{ this.loading.state=false; }
        });
	},
	data(){
		return {
			loading:{ state:true,type:'icon' },
			newwarehouse:{ state:false, name:"" },
			newSection:{ name:'', alias:'', items:1, adding:false }
		}
	},
	methods:{
		create(){// crea un nuevo almacen
			let data = { "name":this.newwarehouse.name, "_type":1 };

			vizapi.create(data).then(success=>{
				let resp = success.data;
				if(resp.celler){
					let newceller = resp.celler;
					newceller.celler = newceller.id;
					newceller.children=[];
					this.$store.commit('Warehouse/set',newceller);
					this.newwarehouse.state=false;
					this.newwarehouse.name="";
				}else{ alert("Crear un NOTIFY de que no se crea el almacen!!"); }
			}).catch(fail=>{ console.log(fail); });
		},
		addSection(){
			if(this.newSection.name&&this.newSection.alias){
				console.log("agregando seccion");
				this.newSection.adding=true;
				console.log(this.wndAddSections);
				let root = this.wndAddSections.parent.root;
				console.log(root);

				let data = {
					"name":this.newSection.name,
					"alias":this.newSection.alias.toUpperCase(),
					"items":this.newSection.items,
					"root":null, //0
					"details":{},
					"_celler":null //Mandar cuando no es hijo de nadie
				}

				switch (root) {
					case undefined:
						console.log("no tiene padre, solo el almacen");
						data._celler=this.wndAddSections.parent.celler;
					break;
					default:
						console.log("tiene una seccion padre: "+this.wndAddSections.parent.id);
						data.root=this.wndAddSections.parent.id;break;
				}

				console.log(data);

				vizapi.addSection(data).then(success=>{
					let resp = success.data;
					console.log(resp);
					this.$store.commit('Warehouse/addChildren',success.data.celler);
					this.$store.commit('Warehouse/cancelAddSection');

					this.resetFormAddSection();
				}).catch(fail=>{ console.log(fail); });
			}else{
				
			}
		},
		resetFormAddSection(){
			this.newSection.name="";
			this.newSection.alias="";
			this.newSection.items=1;
			this.newSection.adding=false;
		},
		cancelAddSection(){ this.$store.commit('Warehouse/cancelAddSection'); },
	},
	computed: {
		wndAddSections:{ get(){ return this.$store.state.Warehouse.wndAddSections } },
		warehouses:{ get(){ return this.$store.state.Warehouse.warehouses } },
	},
}
</script>
