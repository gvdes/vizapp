<template>
	<q-page>
		<div class="row">
			<div class="col q-pa-md">
				<q-card class="bg-darkl1">
					<q-card-section class="text-h6 text-green-13 text-uppercase">
						Por surtir <span class="text-light-blue-14">[ {{forsuply.length}} ]</span>
					</q-card-section>
				</q-card>
				
				<OrdersList :orders="forsuply" @clicked="orderclicked"/>
			</div>
			<div class="col-8 q-pa-md">
				<q-card class="bg-darkl1">
					<q-card-section class="text-h6 text-green-13 text-uppercase">
						Surtiendo <span class="text-light-blue-14">[ {{onsuply.length}} ]</span>
					</q-card-section>
				</q-card>
				
				<OrdersList :orders="onsuply" @clicked="orderclicked"/>
			</div>
		</div>

		<!-- <OrdersList :orders="orders" @clicked="orderclicked"/> -->

        <q-dialog v-model="wndPrinters.state" position="bottom">
			<PrinterSelect :options="printers" @clicked="reprint"/>
        </q-dialog>
    </q-page>
</template>

<script>
import preventa from '../../API/preventa.js'
import { date } from 'quasar'
import OrdersList from '../../components/Preventa/OrdersList.vue'
import PrinterSelect from '../../components/Preventa/PinterSelect.vue'

export default {
	name: 'PreventaWarehouse',
	components:{ OrdersList, PrinterSelect },
		data() {
		return {
            wndPrinters:{ state:false },
            orderselected:null,
			printerselected:null,
			socket:this.$sktPreventa
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | Surtido");
		this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'warehouse' });
		this.socket.on('order_changestate', data => this.skt_add_update_order(data));//
		this.socket.on('unjoin_crash', data => this.unjoin_skt_crash(data));
	},
    methods:{
		skt_add_update_order(data){
			console.log(data);
			let ordercatch = data.order;
			console.log(ordercatch);

			let idx = this.orders.findIndex( order => { order.id == ordercatch.id });

			if(idx>=0){
				console.log(`%cActualizar la orden ${ordercatch.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
				this.appsounds.created.play();
			}else{
				console.log(`%cAgregar la orden ${ordercatch.id}...`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
				this.appsounds.created.play();
				this.$store.commit('Preventa/newOrder', ordercatch);
			}
		},
		unjoin_skt_crash(data){
			this.$q.notify({
				message:`Error importante, notificar a DESARROLLO!!`,
				timeout:10000,
				color:'negative'
			});
			console.log(`%cError mamalon...`,"background:#c23616;color:#f5f6fa;border-radius:10px;padding:8px;");
			console.log(data);
		},
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
		},
    },
	beforeDestroy(){
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'warehouse' });
	},
    computed:{
		orders(){ return this.$store.getters['Preventa/OrdersWarehouse'];},
		forsuply(){ return this.orders.filter( ord => ord.status.id==4 ); },
		onsuply(){ return this.orders.filter( ord => ord.status.id==5 ); },
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