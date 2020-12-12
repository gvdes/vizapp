<template>
	<q-page padding>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Ventas" />
			</q-card>
		</q-header>

		<global-sale :branches="branches" :range="ranges" @settingRanges="setted" :loadingBalance="loadingBalance"/>
	</q-page>
</template>

<script>
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import GlobalSale from '../../components/Sales/GlobalSale.vue'
import cluster from '../../API/cluster'
export default {
  // name: 'PageName',
	data() {
		return {
			index:undefined,
			ranges:[
				{value:"t",label:"Diaria"},
				{value:"w",label:"Semanal"},
				{value:"m",label:"Mensual"},
				{value:"y",label:"Anual"},
				{value:"p",label:"Personalizada"}
			],
			ranges_data:undefined,
			loadingBalance:false
		}
	},
	components:{
		ToolbarAccount:ToolbarAccount,
		GlobalSale:GlobalSale
	},
	methods: {
		setted(data){
			console.log("%cEnviando rango de fechas!!","font-size:2em;color:gold;");
			console.log(data);
			this.ranges_data = data;
			this.indexSales(this.ranges_data);
		},
		async indexSales(data){ 
			this.loadingBalance=true;
			this.index = await cluster.index(data); console.log(this.index);
			this.loadingBalance=false;
		}
	},
	computed:{
		branches(){
			if(this.index){ return this.index.sucursales; }
			return [];
		}
	}
}
</script>
