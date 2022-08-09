<template>
	<q-layout view="hHh lpR fFf">
		<q-page-container class="exo bg-darkl0 text-grey-5">
			<router-view />

			<q-footer reveal class="bg-darktransl0">
				<ToolbarModule/>
			</q-footer>

			<!-- <q-page class=" row items-center justify-center" padding>
				<div class="text-center">
					<q-img src="~/src/assets/jhony.gif" style="width:200px"></q-img>
					<h6>Los almacenes no estan disponibles de forma local.</h6>
					<q-btn icon="fas fa-arrow-left" color="primary" @click="$router.replace('/')"></q-btn>
				</div>
			</q-page> -->
		</q-page-container>
	</q-layout>
</template>

<script>
import ToolbarModule from '../components/Global/ToolbarModule.vue'
export default {
	name: 'Warehouses',
	components:{ 
		ToolbarModule:ToolbarModule
	},
	data(){
		return {
			drawer:true
		}
	},
	computed:{
        ismobile(){ return this.$q.platform.is.mobile; }
	}
}
</script>

<style lang="scss">
	.text--2{ font-size:.8em!important; }
</style>