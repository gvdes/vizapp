<template>
	<q-page padding>
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Preventa" />
			</q-card>
		</q-header>

		<q-card flat class="bg-darkl0" v-if="orders_capture.length">
			<q-card-section>Pedidos activos [ {{orders_capture.length}} ]</q-card-section>
			<q-scroll-area horizontal style="height: 90px; width: 100%;" :visible="false">
				<div class="row no-wrap q-gutter-md text-grey-5">
					<q-card class="bg-darkl1" style="min-width:170px;"
						v-for="order in orders_capture" :key="order.id"
						@click="open(order.id)"
					>
						<div class="q-pa-sm">
							<div class="text-h6">{{order.id}}</div>
							<div class="text-uppercase text--1">{{order.name}}</div>
							<div class="text-right text--2">{{order.created_at}}</div>
						</div>
					</q-card>
				</div>
			</q-scroll-area>
		</q-card>

		<q-card class="bg-darkl1 q-pb-sm q-my-md">
			<q-card-section>Resumen</q-card-section><q-separator/>
			<apexchart type="donut" :options="chart_1.options" :series="series_chart" />
		</q-card>

		<div class="bg-darkl1">
			<q-card-section>Tus pedidos</q-card-section><q-separator/>
			<q-table :data="orders_db"
				row-key="id" dark :filter="tableorders.filtrator"
				card-class="q-pa-sm bg-none text-grey-6"
				:columns="tableorders.columns"
			>
				<template v-slot:top-right v-if="orders_db.length">
                    <q-input color="green-13" dark dense debounce="0" v-model="tableorders.filtrator" placeholder="Buscar (folio o nombre)">
                        <template v-slot:append><q-icon name="search" /></template>
                    </q-input>
                </template>

				<template v-slot:body="props">
					<q-tr :props="props" @click="open(props.row.id)">
						<q-td key="id" :props="props">
							{{props.row.id}}
						</q-td>

						<q-td key="client" :props="props">
							{{props.row.name}}
						</q-td>

						<q-td key="timed" :props="props">
							{{humantime(props.row.created_at)}}
						</q-td>
					</q-tr>
				</template>
			</q-table>
		</div>

		<!-- <q-card class="bg-darkl1 q-pb-sm q-mt-md">
			<q-card-section>Lista</q-card-section><q-separator/>
			<q-scroll-area style="height:200px; width:100%;">
				<div class="q-pa-md" v-for="order in orders_db" :key="order.id">
					{{order.id}} {{order.name}}
				</div>
			</q-scroll-area>
		</q-card> -->

		<q-dialog v-model="windCreate.state" position="bottom">
			<q-card class="bg-darkl0 exo text-grey-5">
				<q-form>
					<q-toolbar>Nuevo Pedido</q-toolbar>
					<q-card-section>
						<div class="row items-end q-gutter-sm">
							<q-input class="col" dark label="Cliente" color="green-13" autofocus v-model="windCreate.ipt.client"/>
							<q-btn flat rounded type="submit" icon="done" color="green-13" v-if="cancreate" @click="tryCreate" :disable="windCreate.ipt.load" :loading="windCreate.ipt.load"/>
						</div>
					</q-card-section>
				</q-form>
			</q-card>
		</q-dialog>	

		<q-page-sticky position="bottom-right" :offset="[10, 3]">
			<q-btn rounded flat class="bg-darkl1 shadow-1" color="green-13" icon="add" @click="windCreate.state=true"/>
        </q-page-sticky>
	</q-page>
</template>

<script>
import apexcharts from 'vue-apexcharts'
import { date } from 'quasar'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import preventa from '../../API/preventa.js'

export default {
	// name: 'PageName',
	components:{
		apexchart:apexcharts,
		ToolbarAccount:ToolbarAccount
	},
	data() {
		return {
			chart_1:{
				options: {
					chart:{ id: 'orders_chart', background:'none' },
					stroke:{ colors:['#2D3035'] },
					theme:{ palette: 'palette8', mode: 'dark' },
					labels:['En captura','Por surtir', 'Surtiendo', 'Cobrados', 'Completados'],
					colors:["#ced6e0","#fa8231","#1e90ff","#4cd137","#eb3b5a"],
				}
			},
			windCreate:{
				state:false,
				ipt:{dis:true,load:false,client:''}
			},
			index:undefined,
			tableorders:{
				columns:[
					{ name:'id', align:'left', label:'Folio', field:'id' },
					{ name:'client', align:'left', label:'Cliente', field:'name', sortable:true },
					{ name:'timed', align:'center', label:'Hora', field:'created_at', sortable:true },
				],
				filtrator:''
			}
		}
	},
	async beforeMount(){
		// this.orders_db = this.orders_fake;
		this.index = await preventa.index();
	},
	methods: {
		tryCreate(){
			this.windCreate.ipt.load=true;
			let data = { "name":this.windCreate.ipt.client }

			preventa.create(data).then(success=>{
				let resp = success.data;
				this.$router.push(`/preventa/${resp.id}`);
			}).catch(fail=>{
				console.log(fail);
			});

			console.log(data);
		},
		open(idorder){
			this.$router.push(`/preventa/${idorder}`);
		},
	},
	computed: {
		cancreate(){ return this.windCreate.ipt.client.length>3?true:false; },
		orders_db(){ return this.index ? this.index.orders:[]; },
		orders_capture(){ return this.orders_db.filter(item=>{return item.status.id==1}); },
		orders_forsupply(){ return this.orders_db.filter(item=>{return item.status.id==2}); },
		orders_onsupply(){ return this.orders_db.filter(item=>{return item.status.id==3}); },
		orders_chargeds(){ return this.orders_db.filter(item=>{return item.status.id==4}); },
		orders_archive(){ return this.orders_db.filter(item=>{return item.status.id==5}); },
		series_chart(){
			return [
				this.orders_capture.length,
				this.orders_forsupply.length,
				this.orders_onsupply.length,
				this.orders_chargeds.length,
				this.orders_archive.length,
			];
		},
		humantime(){ return time =>{ 
				let now = Date.now(); 
				let timecalc = Date.parse(time);
				let diff = date.getDateDiff(now, timecalc, 'days');

				switch (diff) {
					case 0: return date.formatDate(timecalc, 'hh:mm a'); break;
					case 1: return 'Ayer, '+date.formatDate(timecalc, 'hh:mm a'); break;
					default: return `Hace ${diff} dias, `+date.formatDate(timecalc, 'hh:mm a'); break;
				}
			}
        },
	},
}
</script>
