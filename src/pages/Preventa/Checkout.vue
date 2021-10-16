<template>
	<q-page>
		<div class="row q-pt-sm q-pb-xl">
			<div class="col-md-6 col-xs-12 q-pa-sm">
				<q-table flat dark
					:data="orders"
					:columns="tableorders.columns"
					:filter="tableorders.filtrator"
					:pagination="tableorders.pagination"
					card-class="bg-darkl1"
				>
					<template v-slot:top>
						<div class="full-width row items-center">
							<div class="col">
								<q-input autofocus borderless dark filled dense
									fill-input color="green-13" debounce="0"
									v-model="tableorders.filtrator" placeholder="Buscar..."
									@keypress.enter="preCheckout()"
									:disable="tableorders.blocksearch"
								>
									<template v-slot:prepend><q-icon name="search" /></template>
								</q-input>
							</div>
						</div>
					</template>

					<template v-slot:no-data>
						<div class="full-width row flex-center q-gutter-sm q-pa-md">
							<q-icon size="2em" name="sentiment_dissatisfied" />
							<span>Nada por aqui.</span>
						</div>
					</template>

					<template v-slot:body="props">
						<q-tr @click="preCheckout(props.row.id)">
							<q-td key="id">
								<div> <span :class="props.row._order ? 'ord_anx':''">{{props.row.id}}</span></div>
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

		<q-dialog v-model="wndInit.state" class="exo" position="bottom">
			<q-btn-group spread class="exo">
				<q-btn color="primary" label="Iniciar Checkout" 
					icon="fas fa-check"
					@click="initCheckout"
					autofocus stack no-caps 
					class="q-py-md"
				/>
				<q-btn color="negative" label="Archivar Pedido" 
					icon="fas fa-archive"
					autofocus stack no-caps 
				/>
			</q-btn-group>
		</q-dialog>
	</q-page>
</template>

<script>
import { date } from 'quasar'
import PreventaDB from '../../API/preventa.js'

export default {
	// name: 'PageName',
	data(){
		return{
			psocket:this.$sktPreventa,
			tableorders:{
				blocksearch:false,
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
					rowsPerPage: 10
				}
			},
			wndInit:{ state:false },
			ordersend:null
		}
	},
	beforeMount(){
		this.$store.commit('Preventa/setHeaderTitle',"Preventa | CehckOut");
	},
	methods:{
		preCheckout(id = null){

			let order = null; let sfolio = null;

			if(id){
				order = this.orders.find(ord => ord.id == id);
				sfolio = id;
			}else{		
				order = this.orders.find( ord => ord.id == this.tableorders.filtrator );
				sfolio = this.tableorders.filtrator;//folio buscado
			}

			if(order){
				this.ordersend = order;

				switch (this.ordersend.status.id) {
					case 7: this.$router.push(`/preventa/checkout/${order.id}`); break;
					case 5: case 6: this.wndInit.state = true; break;
				}
			}else{
				this.$q.notify({
					message:`Folio <b>${sfolio}</b> no encontrado`,
					color:'negative', position:'center',
					icon:'fas fa-times', html:true
				});

				this.tableorders.filtrator = '';
			}
		},
		async initCheckout(){
			this.wndInit.state = false;
			this.tableorders.blocksearch = true;

            this.$q.loading.show({ message:'Iniciando checkout...' });

            let data = { "_order": this.ordersend.id }

			console.log("Enviar el pedido");
			console.log(data);

            let resp = await PreventaDB.nextStep(data);
            console.log(resp);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
            }else{
				let newstate = resp.status[resp.status.length-1];

                this.psocket.emit("order_update",{ newstate:newstate, order:this.ordersend, update:'state' });
                this.appsounds.ok.play();
                this.$router.push(`/preventa/checkout/${this.ordersend.id}`);
                this.$q.notify({ message:`Checkout iniciado`, color:'positive', icon:'done', position:'top',timeout:1000 });
                this.$q.loading.hide();
            }
		},
	},
	computed:{
		orders(){ return this.$store.getters['Preventa/OrdersCheckout'];},
		onsuply(){ return this.orders.filter( ord => ord.status.id==5 ); },
		oncheckout(){ return this.orders.filter( ord => ord.status.id==7 ); },
		profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
		filltkt(){
			return id => { 
				let rounds = 4;
				let len = id.toString().length;
				let fill = '';

				for (rounds; len < rounds; rounds--) { fill+='0'; }
				return `${fill}${id}`;
			}
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
		appsounds(){ return this.$store.getters['Multimediapp/sounds']; }
	}
}
</script>
