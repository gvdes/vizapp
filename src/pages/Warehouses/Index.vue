<template>
	<q-page>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Almacen"/>
			</q-card>
		</q-header>

		<div class="row q-pl-sm">
			<div class="col-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-light-blue-13">
						<q-spinner-puff color="light-blue-13" v-if="!stats"/>
						<span v-else>{{ stats.products }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">articulos en catalogo</div>
				</q-card>
			</div>

			<div class="col-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-green-13">
						<q-spinner-puff color="green-13" v-if="!stats"/>
						<span v-else>{{ stats.withStock.stock }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock</div>
				</q-card>
			</div>

			<div class="col-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-green-13">
						<q-spinner-puff color="green-13" v-if="!stats"/>
						<span v-else>{{ stats.withStock.withLocation }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock y ubicados</div>
				</q-card>
			</div>

			<div class="col-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-orange-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withStock.withoutLocation }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock sin ubicar</div>
				</q-card>
			</div>

			<div class="col-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-orange-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withoutStock.stock }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">sin stock</div>
				</q-card>
			</div>

			<div class="col-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-orange-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withoutStock.withLocation }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">sin stock ubicados</div>
				</q-card>
			</div>
		</div>

	</q-page>
</template>

<script>
import vizapi from '../../API/warehouses'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
export default {
	name: 'PageIndex',
	components:{
		ToolbarAccount:ToolbarAccount
	},
	mounted(){
		console.log("traiendo estadisticas");
		this.index();
	},
	data(){
		return {
			stats:null
		}
	},
	methods:{
		async index(){
			this.stats = await vizapi.index();
		}
	}
}
</script>

<style lang="scss">

	.titlebtn{
		text-transform: uppercase;
		font-size: .8em;
	}

</style>
