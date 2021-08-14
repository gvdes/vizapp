<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container class="exo bg-darkl0 text-grey-6">
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
	}
}
</script>

<style lang="scss">
	.text--2{ font-size:.8em!important; }
</style>