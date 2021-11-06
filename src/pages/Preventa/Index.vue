<template>
	<q-page>
		<div class="row">
			<div class="col-md-6 col-xs-12 q-pa-sm">
				<q-table dark
					:data="orders"
					:columns="tableorders.columns"
					:filter="tableorders.filtrator"
					:pagination="tableorders.pagination"
					card-class="bg-darkl1"
					separator="none"
				>
					<template v-slot:top-left>
						<span class="text-overline QuickRegular">PEDIDOS</span>
					</template>

					<template v-slot:top-right>
						<q-input borderless dark filled dense fill-input color="green-13" debounce="0" v-model="tableorders.filtrator" placeholder="Buscar...">
							<template v-slot:prepend><q-icon name="search" /></template>
						</q-input>
					</template>

					<template v-slot:no-data>
						<div class="full-width row flex-center q-gutter-sm q-pa-md">
							<q-icon size="2em" name="sentiment_dissatisfied" />
							<span>Nada por aqui.</span>
						</div>
					</template>

					<template v-slot:body="props">
						<q-tr style="border-color:1px solid green;">
							<q-td key="id">
								<div>{{props.row.id}}</div>
								<div class="text--1 text-grey-5">{{filltkt(props.row.num_ticket)}}</div>
							</q-td>
							<q-td key="client">{{props.row.name}}</q-td>
							<q-td key="cstate" align="center" :class="`st-${props.row.status.id}`">
								<div class="text--2">{{props.row.status.name}}</div>
							</q-td>
							<q-td key="createdby" align="center">
								<div><q-img src="~/assets/_usdeft.png" width="20px" height="20px" class="imguser2"/></div>
								<div class="text--1">{{props.row.created_by.nick}}</div>
							</q-td>
						</q-tr>
					</template>
				</q-table>
			</div>

			<div class="col-md-6 col-xs-12 q-pa-sm">
				<q-table dark
					:data="agents_orders"
					:columns="tableagents.columns"
					:filter="tableagents.filtrator"
					:pagination="tableagents.pagination"
					card-class="bg-darkl1"
					separator="none"
				>
					<template v-slot:top-left>
						<span class="text-overline QuickRegular">AGENTES</span>
					</template>

					<template v-slot:top-right>
						<q-input borderless dark filled dense fill-input color="green-13" debounce="0" v-model="tableagents.filtrator" placeholder="Buscar...">
							<template v-slot:prepend><q-icon name="search" /></template>
						</q-input>
					</template>

					<template v-slot:no-data>
						<div class="full-width row flex-center q-gutter-sm q-pa-md">
							<q-icon size="2em" name="sentiment_dissatisfied" />
							<span>Nada por aqui.</span>
						</div>
					</template>

					<template v-slot:body="props">
						<q-tr>
							<q-td key="id">{{props.row.id}}</q-td>
							<q-td key="nick">
								<div class="row items-center">
									<q-img src="~/assets/_usdeft.png" width="40px" height="40px" :class="props.row.rt.cnx?'useron':'useroff'"/>
									<div class="q-pl-md">
										<div>{{props.row.nick}}</div>
										<div class="text--1" :class="props.row.activeInBranch ? 'text-green-13':'text-grey-5'">{{props.row.names}} {{props.row.surname_pat}}</div>
									</div>
								</div>
							</q-td>
							<q-td key="ordersize" align="center">{{props.row.ordersize}}</q-td>
							<!-- <q-td key="chart" align="center">
								<apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
							</q-td> -->
						</q-tr>
					</template>
				</q-table>
			</div>
		</div>
	</q-page>
</template>

<script>
// import apexcharts from 'vue-apexcharts'
export default {

	data(){
		return{
			// socket:this.$sktPreventa,
			windCreate:{
				state:false, blocked:false,
				ipt:{ dis:true, load:false, client:'' }
			},
			tableagents:{
				filtrator:'',
				columns:[
					{ name:'id', field:'id', sortable:true, label:'ID', align:'center' },
					{ name:'nick', field:'nick', sortable:true, label:'Agente', align:'center' },
					// { name:'names', field:(row)=>`${row.names} ${row.surname_pat}`, sortable:true, label:'Nombre', align:'center' },
					{ name:'ordersize', field:'ordersize', sortable:true, label:'Pedidos', align:'center' },
					// { name:'chart', field:'', label:'pedidos', align:'center' }
				],
				pagination:{
					sortBy:'ordersize',
					descending:true,
					rowsPerPage: null
				}
			},
			tableorders:{
				filtrator:'',
				columns:[
					{ name:'id', field:'id', sortable:true, label:'Folio', align:'center' },
					{ name:'client', field:'name', sortable:true, label:'Cliente', align:'center' },
					// { name:'tktday', field:'num_ticket', sortable:true, label:'Folio', align:'center' },
					{ name:'cstate', field:(row)=>row.status.id, sortable:true, label:'Estado', align:'center' },
					{ name:'createdby', field:(row)=>row.created_by.nick, sortable:true, label:'Agente', align:'center' },
				],
				pagination:{
					sortBy:'id',
					descending:true,
					rowsPerPage: 5
				}
			},
		}
	},
	created(){
		switch (this.profile.me._rol) {
			case 1: case 2: case 3: console.log("Te quedaste en el INDEX"); this.$store.commit('Preventa/setHeaderTitle',"Preventa"); break;
			case 4: console.log("Direccionando a PEDIDOS!!"); this.$router.push('/preventa/pedidos/'); break;
			case 6: case 7: console.log("Direccionando a SURTIDO!!"); this.$router.push('/preventa/bodega/'); break;
			case 9: console.log("Direccionando a CHECKOUT!!"); this.$router.push('/preventa/checkout/'); break;
		}
	},
	beforeDestroy(){
		console.log(`%cEl Index será destruido!!`,"background:#40739e;color:#f5f6fa;border-radius:10px;padding:6px;");
	},
	methods:{

	},
	computed:{
		profile(){ return this.$store.getters['Account/profile']; },
		workin(){ return this.$store.getters['Account/workin']; },
		orders(){ return this.$store.state.Preventa.orders; },
		agents_orders(){ return this.$store.getters['Preventa/agents_orders']; },
		filltkt(){
			return id => { 
				let rounds = 4;
				let len = id.toString().length;
				let fill = '';

				for (rounds; len < rounds; rounds--) { fill+='0'; }
				return `${fill}${id}`;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.useroff{
		border-radius: 50%;
		border: 3px solid #718093;
	}

	.useron{
		border-radius: 50%;
		border: 3px solid #20bf6b;
		// box-shadow:-1px -1px 4px #20bf6b, 1px 1px 4px #20bf6b;
	}

	.imguser2{
		border-radius: 50%;
		border: 1px solid #a5b1c2;
	}
</style>