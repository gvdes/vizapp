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

		<branch-resume v-if="usedBranch.main"
			:rangesData="ranges_data"
			:branch="usedBranch"
			@closeBranch="usedBranch.main=null"
		/>
		<global-resume v-else
			:branches="branches"
			:averageSale="averageSale"
			:paymentMethods="paymentMethods"
			:rangesData="ranges_data"
		/>
	</q-page>
</template>

<script>
import cluster from '../../API/cluster'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import GlobalSale from '../../components/Sales/GlobalSale.vue'
import GlobalResume from '../../components/Sales/GlobalResume.vue'
import BranchResume from '../../components/Sales/BranchResume.vue'
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
			usedBranch:{ state:false,main:null,store:null },
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
		openBranch(idx){
			this.$q.loading.show({ message:'Cargando datos, espera...' });
			this.getBranch(idx);
		},
		async indexSales(data){ 
			this.loadingBalance=true;
			this.index = await cluster.index(data); console.log(this.index);
			this.loadingBalance=false;
		},
		async getBranch(idx){
			this.$q.loading.show({ message:'Cargando datos, espera...' });

            let data = {
                "_workpoint" : this.branches[idx].id,
                "date_from": this.ranges_data.date_from,
                "date_to": this.ranges_data.date_to
			}
			
			this.usedBranch.store = await cluster.openBranch(data);
			this.usedBranch.main = this.branches[idx];
			this.$q.loading.hide();
        }
	},
	computed:{
		branches(){ return this.index ? this.index.sucursales:[]; },
		averageSale(){ return this.index ? this.index.ticket_promedio:0; },
		paymentMethods(){ return this.index ? this.index.metodos_de_pago:[]; }
	}
}
</script>
