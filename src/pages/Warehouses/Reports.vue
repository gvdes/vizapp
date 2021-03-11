<template>
    <q-page padding>
        <q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Reportes"/>
			</q-card>
		</q-header>

        <div class="row q-pl-sm">
			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1">
					<q-card-section class="text-h4 text-left text-light-blue-13">
						<q-spinner-puff color="light-blue-13" v-if="!stats"/>
						<span v-else>{{ stats.products }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">articulos en catalogo</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(1)">
					<q-card-section class="text-h4 text-left text-green-13">
						<q-spinner-puff color="green-13" v-if="!stats"/>
						<span v-else>{{ stats.withStock.stock }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(2)">
					<q-card-section class="text-h4 text-left text-green-13">
						<q-spinner-puff color="green-13" v-if="!stats"/>
						<span v-else>{{ stats.withStock.withLocation }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock y ubicados</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(3)">
					<q-card-section class="text-h4 text-left text-orange-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withStock.withoutLocation }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock sin ubicar</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(4)">
					<q-card-section class="text-h4 text-left text-orange-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withoutStock.stock }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">sin stock</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(5)">
					<q-card-section class="text-h4 text-left text-orange-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withoutStock.withLocation }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">sin stock ubicados</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(6)">
					<q-card-section class="text-h4 text-left text-pink-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withStock.sinMaximos }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock sin minimos y maximos</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(7)">
					<q-card-section class="text-h4 text-left text-pink-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withStock.generalVsExhibicion }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock sin exhibir</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(8)">
					<q-card-section class="text-h4 text-left text-pink-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withoutStock.generalVsCedis }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">Almacen General VS CEDIS</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(9)">
					<q-card-section class="text-h4 text-left text-pink-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withStock.conMaximos }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">con stock sin minimos y maximos</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(10)">
					<q-card-section class="text-h4 text-left text-pink-14">
						<q-spinner-puff color="orange-14" v-if="!stats"/>
						<span v-else>{{ stats.withoutStock.negativos }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">Productos en Negativo</div>
				</q-card>
			</div>

			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm">
				<q-card flat class="bg-darkl1 cursor-pointer" v-ripple @click="report(11)">
					<q-card-section class="text-h4 text-left text-light-blue-13">
						<q-spinner-puff color="green-13" v-if="!stats"/>
						<span v-else>{{ stats.withStock.cedis }}</span>
					</q-card-section>
					<div class="text--2 text-right q-pr-xs text-grey-7">Productos en CEDIS con STOCK</div>
				</q-card>
			</div>
		</div>
    </q-page>
</template>

<script>
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import warehousesdb from '../../API/warehouses'
export default {
    data() {
        return {
            stats:null,
			reportnames:[
				'productos_con_stock.xlsx',
				'productos_con_stock_y_ubicados.xlsx',
				'productos_con_stock_y_sin_ubicar.xlsx',
				'productos_sin_stock.xlsx',
				'productos_sin_stock_y_con_ubicacion.xlsx',
				'productos_con_stock_y_sin_minimos_y_maximos.xlsx',
				'productos_con_stock_sin_exhibir.xlsx',
				'productos_con_stock_general_vs_cedis.xlsx',
				'productos_con_stock_y_con_minimo_y_maximo.xlsx',
				'productos_con_negativos.xlsx',
				'productos_en_cedis_con_stock.xlsx'
			]
        }
    },
    components:{ ToolbarAccount:ToolbarAccount },
    async beforeMount(){
		this.stats = await warehousesdb.index(); console.log(this.stats);
	},
    methods: {
        report(type){
			this.$vizapi.defaults.responseType = 'blob';//convertir el tipo de retorno a strweam para póderlo descargar
			let namereport = this.reportnames[type-1];
			this.$q.loading.show({message:`Generando reporte (${namereport}), porfavor espera...`});
			let data = {"_type":type}
			console.log(data);
			warehousesdb.report(data).then(success=>{
				console.log(success);
				const url = window.URL.createObjectURL(new Blob([success.data]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', namereport); //or any other extension
				document.body.appendChild(link);
				link.click();
				this.$vizapi.defaults.responseType = 'json';//convertir el tipo de retorno a json para todas las peticiones futuras
				this.$q.loading.hide();
			}).catch(fail=>{ console.log(fail); });
		}
    },
}
</script>

<style lang="scss">

	.titlebtn{
		text-transform: uppercase;
		font-size: .8em;
	}

</style>
