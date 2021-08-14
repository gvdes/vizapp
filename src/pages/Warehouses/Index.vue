<template>
	<q-page padding>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Almacenes"/>
			</q-card>
		</q-header>

		<div v-if="warehouses">
			<q-card v-ripple class="bg-darkl1 q-mb-md" v-for="wrh in warehouses" :key="wrh.id" @click="open(wrh)">
				<q-card-section>
					<div class="row items-center justify-center">
						<div class="col">{{wrh.name}}</div>
					</div>
				</q-card-section>
			</q-card>
		</div>

		<q-page-sticky position="bottom-right" :offset="[10,5]">
            <q-btn
            	icon="add" rounded no-caps
				class="bg-darkl1 text-green-13"
            />
        </q-page-sticky>

		<q-footer reveal class="bg-darktransl0"><ToolbarModule/></q-footer>
	</q-page>
</template>

<script>
import warehousesdb from '../../API/warehouses'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import ToolbarModule from '../../components/Global/ToolbarModule.vue'
export default {
	name: 'PageIndex',
	components:{
		ToolbarAccount:ToolbarAccount,
		ToolbarModule:ToolbarModule
	},
	async beforeMount(){
		this.warehouses = await warehousesdb.loadWarehouses();
	},
	data(){
		return {
			warehouses:null,
		}
	},
	methods:{
		open(wrh){
			console.log("Abriendo almacen","");
			console.log(wrh);
			// let route = { name:`warehouse`,params:{idwrh:wrh.id,name:wrh.name,sections:wrh.sections} }
			let route = { path:`almacen/${wrh.id}`,query:{name:wrh.name} }
			this.$router.push(route);
		}
	}
}
</script>

