<template>
    <q-page padding>
        <q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Reportes"/>
			</q-card>
		</q-header>

		<div class="row q-pl-sm" v-if="stats">
			<div class="col-md-3 col-xs-6 q-pb-sm q-pr-sm" v-for="(report,idx) in reports" :key="idx" @click="genReport(report)">
				<q-card flat class="bg-darkl1">
					<q-card-section :class="report.clases">
						<span>{{ report.value }}</span>
					</q-card-section>
					<div class="text--1 text-right q-pa-xs text-white">{{ report.description }}</div>

				</q-card>
			</div>
		</div>
		<div v-else class="q-py-xl text-center text-green-13">
			Calculando, porfavor espera...
		</div>

    <div class="q-pt-md">
      <ProductSales />
    </div>
    </q-page>
</template>

<script>
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import warehousesdb from '../../API/warehouses'
import ProductSales from 'src/components/ProductsSales.vue';

export default {
  components:{ ToolbarAccount:ToolbarAccount, ProductSales },
    data() {
        return {
            stats:null,
            clases:{
              1:"text-h4 text-left text-light-blue-13",
              2:"text-h4 text-left text-green-13",
              3:"text-h4 text-left text-green-13",
              4:"text-h4 text-left text-orange-14",
              5:"text-h4 text-left text-orange-14",
              6:"text-h4 text-left text-orange-14",
              7:"text-h4 text-left text-pink-14",
              8:"text-h4 text-left text-pink-14",
              9:"text-h4 text-left text-pink-14",
              10:"text-h4 text-left text-pink-14",
              11:"text-h4 text-left text-pink-14",
              12:"text-h4 text-left text-light-blue-13",
              13:"text-h4 text-left text-orange-14",
            },
        }
    },
    async beforeMount(){
		this.stats = await warehousesdb.index();
	},
    methods: {
      genReport(report){
        this.$vizapi.defaults.responseType = 'blob';//convertir el tipo de retorno a strweam para póderlo descargar
        let namereport = `${report.description} - ${this.workin.workpoint.alias}`;
        this.$q.loading.show({message:`Generando reporte (${namereport}), porfavor espera...`});
        let data = {"_type":report._excel}
        console.log(data);
        warehousesdb.report(data).then(success=>{
          console.log(success);
          const url = window.URL.createObjectURL(new Blob([success.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', namereport+".xlsx"); //or any other extension
          document.body.appendChild(link);
          link.click();
          this.$vizapi.defaults.responseType = 'json';//convertir el tipo de retorno a json para todas las peticiones futuras
          this.$q.loading.hide();
        }).catch(fail=>{
          console.log(fail);
          this.$q.notify({
            icon:"fas fa-bug", color:"negative",
            message:"Vaya, algo salio mal "
          });
        });
		  }
    },
	computed:{
		reports(){
			if(this.stats){
				console.log(this.stats);
				return this.stats.map(item=>{
					item.clases = this.clases[item._excel];
					return item;
				});
			}else{ return null; }
		},
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
	}
}
</script>

<style lang="scss">

	.titlebtn{
		text-transform: uppercase;
		font-size: .8em;
	}

</style>
