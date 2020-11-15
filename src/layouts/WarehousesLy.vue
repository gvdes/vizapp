<template>
	<q-layout view="hHh lpR fFf">
		<q-page-container class="exo bg-darkl0 text-grey-5">
			<router-view />

			<q-footer reveal class="bg-darktransl0">
				<ToolbarModule/>
			</q-footer>
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