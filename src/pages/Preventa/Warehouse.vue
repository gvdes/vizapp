<template>
	<q-page>
        <q-header class="bg-darkl0 text-grey-5">
			<q-card class="bg-darkl1">
				<toolbar-account title="Preventa / Bodega" />
				<div class="q-pa-md row">
					<!-- <div class="col-md col-xs-12 ds">sdf</div> -->
					<div class="col-md col-xs-12"><RangeDates @inputRanges="loadView"/></div>
				</div>
			</q-card>
		</q-header>

        <div class="row items-start">
			<!-- <div class="col-md col-xs-12">
				<q-card class="bg-darkl1">
					<q-card-section>Resumen</q-card-section>
					<q-card-section>
						<apexchart type="bar" :options="orders_chart.options" :series="series_chart" height="400px;"/>
					</q-card-section>
				</q-card>
			</div> -->
			

			<div class="col-md col-xs-12 q-pa-sm">
				<q-card class="bg-darkl1">
					<q-card-section>
						<q-table :data="ordersDb" flat
							row-key="id" dark :filter="tableorders.filtrator"
							card-class="q-pa-sm bg-none"
							:columns="tableorders.columns"
						>
							<template v-slot:top-left v-if="ordersDb.length">
								<div class="text-bold">{{ordersDb.length}} pedidos</div>
							</template>

							<template v-slot:top-right v-if="ordersDb.length">
								<q-input color="green-13" dark dense debounce="0" v-model="tableorders.filtrator" placeholder="Buscar (folio o nombre)">
									<template v-slot:append><q-icon name="search" /></template>
								</q-input>
							</template>

							<template v-slot:body="props">
								<q-tr :props="props" @click="tryReprint(props.row.id)">
									<q-td key="id" :props="props">{{props.row.id}}</q-td>
									<q-td key="client" :props="props">{{props.row.name}}</q-td>
									<q-td key="cstate" :props="props">{{props.row.status.name}}</q-td>
									<q-td key="timestart" :props="props">{{humantime(props.row.created_at)}}</q-td>
									<q-td key="createdby" :props="props">{{props.row.created_by.nick}}</q-td>
								</q-tr>
							</template>
						</q-table>
					</q-card-section>
				</q-card>
			</div>
		</div>

        <q-dialog v-model="wndPrinters.state" position="bottom">
            <q-card class="bg-darkl1 exo ">
                <q-card-section class="text-white">Seleccione Impresora</q-card-section>
                <q-card-section>
                    <div class="row items-center justify-between text-grey-4">
                        <q-btn :class="printer.selected ? 'bg-primary text-white':''" v-for="printer in wndPrinters.devices.opts" flat :key="printer.id" stack no-caps @click="selPrinter(printer.id)">
                            <q-icon name="print" size="xl"></q-icon>
                            <div class="text--2">{{printer.name}}</div>
                        </q-btn>
                    </div>
                </q-card-section>
                <div v-if="wndPrinters.devices.model" class="text-right">
                    <q-btn @click="reprint" class="q-pa-md text-bold full-width" color="green-13" flat label="enviar" :loading="wndPrinters.next.loading" :disable="wndPrinters.next.dis" />
                </div>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import RangeDates from '../../components/Global/RangeDates.vue'
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import preventa from '../../API/preventa.js'
import { date } from 'quasar'

export default {
    components:{
		ToolbarAccount:ToolbarAccount,
		RangeDates:RangeDates
	},
	data() {
		return {
			index:null,
            tableorders:{
				columns:[
					{ name:'id', align:'left', label:'Folio', field:'id', sortable:true },
					{ name:'client', align:'left', label:'Cliente', field:'name', sortable:true },
					{ name:'cstate', align:'center', label:'Estado', field:'created_at', sortable:true },
					{ name:'timestart', align:'center', label:'Hora', field:'created_at', sortable:true },
					{ name:'createdby', align:'center', label:'Agente', field:'created_by', sortable:true },
				],
				filtrator:''
			},
            wndPrinters:{
                state:false,
                devices:{
                    model:null,
                    opts:[]
                },
                next:{loading:false,dis:false}
            },
            orderselected:null
		}
	},
    methods:{
        async loadView(ranges){
			this.index=undefined;
			this.$q.loading.show({ message:"Cargando vista..." });
			let vista = { "date_from":ranges.dbranges.from, "date_to":ranges.dbranges.to };
			this.index = await preventa.index(vista);
			let printers = this.index.printers;
			console.log(this.index);

			if(printers.length){				
                this.wndPrinters.devices.opts = printers ? printers.filter(printer=>printer.id == 2)[0].printers.map(printer => {printer.selected = false; return printer;}) : [];
                this.$q.loading.hide();
			}else{
				this.$q.notify({
					message:'Vaya, no hay impresoras disponibles',
					color:'negative',
					icon:'fas fa-exclamation-triangle'
				});
                this.$q.loading.hide();
			}
		},
        selPrinter(pid){
            // console.log(pid);
            this.wndPrinters.devices.opts.forEach(print => { 
                if (print.id==pid) {
                    console.log("aca esta la chida",print.name);
                    print.selected = true;
                    this.wndPrinters.devices.model=print;
                }else{ print.selected = false; }
            });
        },
        tryReprint(orderid){
            this.orderselected = orderid;
            this.wndPrinters.state=true;
        },
        async reprint(){
            this.wndPrinters.next.loading=true;
            this.wndPrinters.next.dis=true;

            this.$q.loading.show({ message:'Enviando...' });

            let data = {
                "_order": this.orderselected,
                "_printer": this.wndPrinters.devices.model.id
            }

            console.log(data);

            let resp = await preventa.reprint(data);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
            }else{
                this.$q.loading.hide();
                this.$q.notify({ message:'OK!', color:'positive', icon:'done' });
                this.wndPrinters.next.loading=false;
                this.wndPrinters.next.dis=false;
                this.wndPrinters.state=false;
            }
        }
    },
    computed:{
		profile(){ return this.$store.getters['Account/profile'];},
        ordersDb(){ return this.index ? this.index.orders : []; },
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
    }
}
</script>