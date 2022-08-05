<template>
	<q-page>
		<q-banner v-if="soundAuth.state!='running'" inline-actions class="text-white bg-red">
			El permiso del sonido no esta habilitado!
			<template v-slot:avatar>
				<q-icon name="volume_off" color="white" />
			</template>
		</q-banner>
		<!-- <div class="row items-center">
			<q-icon name="fas fa-exclamation" /> <h6> </h6>
		</div> -->
		<div class="row">
			<div class="col-md-6 col-xs-12 q-pa-md">
				<q-table dark
					:data="forsupply"
					:columns="tableforsupply.columns"
					:filter="tableforsupply.filtrator"
					:pagination="tableforsupply.pagination"
					card-class="bg-darkl1"
					separator="none"
				>
					<template v-slot:top-left>
						<div>
							<q-icon name="fas fa-power-off" :color="forsupplystate?'green-13':'grey-7'" size="1.2em"/> Por surtir [ {{forsupply.length}} ]
						</div>
					</template>

					<template v-slot:top-right>
						<q-input borderless dark filled dense fill-input color="green-13" debounce="0" v-model="tableforsupply.filtrator" placeholder="Buscar...">
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
						<q-tr @click="orderclicked(props.row)">
							<q-td key="id">
								<div>{{props.row.id}}</div>
								<div class="text--1 text-grey-5">{{filltkt(props.row.num_ticket)}}</div>
							</q-td>
							<q-td key="client">{{props.row.name}}</q-td>
							<q-td key="cstate" align="center" :class="`st-${props.row.status.id}`">
								<div class="text--1">{{props.row.status.name}}</div>
								<div class="text--2 text-grey-5">{{humantime(props.row.updated_at)}}</div>
							</q-td>
							<q-td key="createdby" align="center">
								<div><q-img src="~/assets/_usdeft.png" width="20px" height="20px" class="imguser2"/></div>
								<div class="text--1">{{props.row.created_by.nick}}</div>
							</q-td>
						</q-tr>
					</template>
				</q-table>
			</div>

			<div class="col-md-6 col-xs-12 q-pa-md">
				<q-table dark
					:data="onsupply"
					:columns="tablesupply.columns"
					:filter="tablesupply.filtrator"
					:pagination="tablesupply.pagination"
					card-class="bg-darkl1"
					separator="none"
				>
					<template v-slot:top-left>Surtiendo [ {{onsupply.length}} ]</template>

					<template v-slot:top-right>
						<q-input borderless dark filled dense fill-input color="green-13" debounce="0" v-model="tablesupply.filtrator" placeholder="Buscar...">
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
						<q-tr @click="orderclicked(props.row)">
							<q-td key="id">
								<div>{{props.row.id}}</div>
								<div class="text--1 text-grey-5">{{filltkt(props.row.num_ticket)}}</div>
							</q-td>
							<q-td key="client">{{props.row.name}}</q-td>
							<q-td key="cstate" align="center" :class="`st-${props.row.status.id}`">
								<div class="text--1">{{props.row.status.name}}</div>
								<div class="text--2 text-grey-5">{{humantime(props.row.updated_at)}}</div>
							</q-td>
							<q-td key="createdby" align="center">
								<div><q-img src="~/assets/_usdeft.png" width="20px" height="20px" class="imguser2"/></div>
								<div class="text--1">{{props.row.created_by.nick}}</div>
							</q-td>
						</q-tr>
					</template>
				</q-table>
			</div>
		</div>

        <q-dialog v-model="wndPrinters.state" position="bottom">
			<!-- <PrinterSelect :options="printers" @clicked="reprint"/> -->
			<q-card flat class="bg-darkl1 text-white exo">
                <q-card-section class="text-overline bg-blue-grey-9 ">Seleccione Impresora</q-card-section>
                <PrinterSelect @input="reprint"/>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import preventa from '../../API/preventa.js'
import { date } from 'quasar'
import OrdersList from '../../components/Preventa/OrdersList.vue'
// import PrinterSelect from '../../components/Preventa/PinterSelect.vue'
import PrinterSelect from '../../components/Global/PrinterSelect.vue'

export default {
	name: 'PreventaWarehouse',
	components:{ OrdersList, PrinterSelect },
		data() {
			return {
				soundAuth: new AudioContext(),
				wndPrinters:{ state:false },
				orderselected:null,
				printerselected:null,
				socket:this.$sktPreventa,
				tableforsupply:{
					filtrator:'',
					columns:[
						{ name:'id', field:'id', sortable:true, label:'Folio', align:'center' },
						{ name:'client', field:'name', sortable:true, label:'Cliente', align:'center' },
						// { name:'tktday', field:'num_ticket', sortable:true, label:'Folio', align:'center' },
						{ name:'cstate', field:(row)=>row.status.id, sortable:true, label:'Estado', align:'center' },
						{ name:'createdby', field:(row)=>row.created_by.nick, sortable:true, label:'Agente', align:'center' },
					],
					pagination:{
						rowsPerPage: 20
					}
				},
				tablesupply:{
					filtrator:'',
					columns:[
						{ name:'id', field:'id', sortable:true, label:'Folio', align:'center' },
						{ name:'client', field:'name', sortable:true, label:'Cliente', align:'center' },
						// { name:'tktday', field:'num_ticket', sortable:true, label:'Folio', align:'center' },
						{ name:'cstate', field:(row)=>row.status.id, sortable:true, label:'Estado', align:'center' },
						{ name:'createdby', field:(row)=>row.created_by.nick, sortable:true, label:'Agente', align:'center' },
					],
					pagination:{
						rowsPerPage: 20
					}
				}
			}
		},
		beforeMount(){ this.$store.commit('Preventa/setHeaderTitle',"Preventa | Surtido"); },
    methods:{
		orderclicked(order){
			this.orderselected = order;
            this.wndPrinters.state=true;
		},
		async reprint(printer){
			console.log(printer);
			this.printerselected = printer;
			this.$q.loading.show({ message:'Reimprimiendo...' });

			let data = {
                "_order": this.orderselected.id,
                "_printer": printer.id
            }

			let printed = await preventa.reprint(data);

			if (printed.err){
				this.$q.notify({ message:printed.err, color:'negative', icon:'fas fa-exclamation-triangle' });
			}else{
				this.$q.loading.hide();
				this.wndPrinters.state=false;
                this.$q.notify({ message:'Impresion correcta.', color:'positive', icon:'done' });
			}
		}
    },
    computed:{
		forsupplystate(){ return this.$store.getters['Preventa/keepProcess'](4) },
		filltkt(){
			return id => { 
				let rounds = 4;
				let len = id.toString().length;
				let fill = '';

				for (rounds; len < rounds; rounds--) { fill+='0'; }
				return `${fill}${id}`;
			}
		},
		orders(){ return this.$store.getters['Preventa/OrdersWarehouse'];},
		forsupply(){ return this.orders.filter( ord => ord.status.id==4 ); },
		onsupply(){ return this.orders.filter( ord => ord.status.id==5 ); },
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
		printers(){ return this.$store.getters['Preventa/printersWarehouse'];},
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
		appsounds(){ return this.$store.getters['Multimediapp/sounds']; }
    }
}
</script>