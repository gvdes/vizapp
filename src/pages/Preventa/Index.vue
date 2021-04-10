<template>
	<q-page>
		<q-header class="bg-darkl0 text-grey-5">
			<q-card class="bg-darkl1">
				<toolbar-account title="Preventa" />
				<div class="q-pa-md row justify-between">
					<div class="ds">sdf</div>
					<div class="ds">sdfsdf</div>
				</div>
			</q-card>
		</q-header>

		<div class="row q-ma-md items-start">
			<div class="col q-pa-sm">
				<q-card class="bg-darkl1">
					<q-card-section>
						Resumen
					</q-card-section>
					<q-card-section>
						<!-- <apexchart type="bar" :options="orders_chart.options" :series="series_chart" height="400px;"/> -->
					</q-card-section>
				</q-card>
			</div>

			<div class="col q-pa-sm">
				<q-card class="bg-darkl1">
					<q-card-section horizontal>
						<q-card-section>sdfsf</q-card-section>
						<q-separator/>
						<q-card-section>sdfsdf</q-card-section>
					</q-card-section>
					<q-card-section>
						<q-table :data="orders_db"
							row-key="id" dark :filter="tableorders.filtrator"
							card-class="q-pa-sm bg-none text-grey-6"
							:columns="tableorders.columns" flat
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
					</q-card-section>
				</q-card>
			</div>
		</div>

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
import io from 'socket.io-client'
import apexcharts from 'vue-apexcharts'
import { date } from 'quasar'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import preventa from '../../API/preventa.js'

export default {
	// name: 'PageName',
	components:{
		apexchart:apexcharts,
		ToolbarAccount:ToolbarAccount,
	},
	data() {
		return {
			orders_chart:{
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
				ipt:{ dis:true, load:false, client:'' }
			},
			index:undefined,
			tableorders:{
				columns:[
					{ name:'id', align:'left', label:'Folio', field:'id' },
					{ name:'client', align:'left', label:'Cliente', field:'name', sortable:true },
					{ name:'timed', align:'center', label:'Hora', field:'created_at', sortable:true },
				],
				filtrator:''
			},
			sktprev:undefined
		}
	},
	async beforeMount(){
		this.index = await preventa.index();
		console.log(this.workin);

		console.log(`Conectando a SOCKET`);
		this.sktprev = await io(`${this.$vsocket}/preventa`);
		this.sktprev.emit('index',this.profile);

		console.log(`Uniendo a ROOMs de preventa (${this.socketroom})`);
		this.sktprev.emit('joinat',{ room:this.socketroom,user:this.profile });

		this.sktprev.on('joinprev',data=>{ this.sktjoinprev(data); });//unido al canal principaL de preventa
		this.sktprev.on('joinprevwrh',data=>{ this.sktjoinprevwrh(data); });// unido al room bodega del canal de preventa
	},
	beforeDestroy() { 
		console.log('desconectando del room');
		this.sktprev.emit('leave',{ room:this.socketroom, user:this.profile} );
	},
	methods: {
		tryCreate(){
			this.sktprev.emit('order_creating',{ room:this.socketroom, user:this.profile, order:null });
			this.windCreate.ipt.load=true;
			let data = { "name":this.windCreate.ipt.client }

			preventa.create(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				this.sktprev.emit('order_created',{ room:this.socketroom, user:this.profile, order:resp });
				this.$router.push(`/preventa/${resp.id}`);
			}).catch(fail=>{ console.log(fail); });

			console.log(data);
		},
		open(idorder){ this.$router.push(`/preventa/${idorder}`); },
		sktjoinprev(data){
            // console.log(`Conectado a ${this.socketroom}`);
            console.log(data);

            // if(data.me.id!=this.profile.me.id){
            //     this.$q.notify({
            //         color:'dark',
            //         message:`${data.me.nick} se ha unido a Preventa`,
            //         position:'bottom-left',
            //         textColor: 'green-13',
            //         timeout:1200,
            //         avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
            //     });
            // }
        },
		sktjoinprevwrh(data){
			console.log(data);
            // console.log(data);

            // if(data.me.id!=this.profile.me.id){
            //     this.$q.notify({
            //         color:'dark',
            //         message:`${data.me.nick} se ha unido a Bodega`,
            //         position:'bottom-left',
            //         textColor: 'green-13',
            //         timeout:1200,
            //         avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
            //     });
            // }
		}
	},
	computed: {
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
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
		socketroom(){ return `${this.workin.workpoint.alias}`},
	},
}
</script>
