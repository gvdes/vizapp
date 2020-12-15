<template>
	<q-page padding>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Ventas" />
			</q-card>
		</q-header>

		<global-sale :branches="branches" :range="ranges" 
			@settingRanges="setted"
			@openBranch="openBranch"
			:loadingBalance="loadingBalance"
		/>

			<global-resume :branches="branches" :averageSale="averageSale"/>
		<!-- <template v-if="!usedBranch">
		</template>

		<template v-else>
			<branch-resume :branch="usedBranch"/>
		</template> -->

	</q-page>
</template>

<script>
import cluster from '../../API/cluster'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import GlobalSale from '../../components/Sales/GlobalSale.vue'
import GlobalResume from '../../components/Sales/GlobalResume.vue'
import BranchResume from '../../components/Sales/GlobalResume.vue'
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
			loadingBalance:false,
			usedBranch:undefined
		}
	},
	components:{
		ToolbarAccount:ToolbarAccount,
		GlobalSale:GlobalSale,
		GlobalResume:GlobalResume,
		BranchResume:BranchResume
	},
	methods: {
		setted(data){
			console.log("%cEnviando rango de fechas!!","font-size:2em;color:gold;");
			console.log(data);
			this.ranges_data = data;
			this.indexSales(this.ranges_data);
		},
		openBranch(id){
			console.log(id);
			this.usedBranch = this.branches[id];
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
		},
		averageSale(){
			if(this.index){ return this.index.ticket_promedio; }
			return 0;
		}
	}
}
</script>
