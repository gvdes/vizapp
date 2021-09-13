<template>
	<q-page>
		<div class="row">
			<div class="col-md-6 col-xs-12 q-pa-sm">
				<q-table flat dark
					:data="orders"
					:columns="tableorders.columns"
					:filter="tableorders.filtrator"
					:pagination="tableorders.pagination"
					card-class="bg-darkl1"
				>
					<template v-slot:top-left>Pedidos</template>

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
						<q-tr>
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
				<q-table flat dark
					:data="agents_orders"
					:columns="tableagents.columns"
					:filter="tableagents.filtrator"
					:pagination="tableagents.pagination"
					card-class="bg-darkl1"
				>
					<template v-slot:top-left>Agentes</template>

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
										<div class="text--1 text-grey-5">{{props.row.names}} {{props.row.surname_pat}}</div>
									</div>
								</div>
							</q-td>
							<q-td key="ordersize" align="center">{{props.row.ordersize}}</q-td>
						</q-tr>
					</template>
				</q-table>
			</div>
		</div>
	</q-page>
</template>

<script>

export default {
	data(){
		return{
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
			socket:this.$sktPreventa
		}
	},
	mounted(){
		let profile = JSON.parse(localStorage.getItem('profile'));
		
		switch (profile.me._rol) {
			case 4: this.$router.push('/preventa/pedidos/'); break;
			case 6: case 7: this.$router.push('/preventa/bodega/'); break;
			case 1: case 2: case 3:
				this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:'admin' });
				this.$store.commit('Preventa/setHeaderTitle',"Preventa");
			break;
		}

		this.socket.on('order_created', data => this.skt_order_created(data));
		this.socket.on('order_changestate', data => this.skt_order_changestate(data));
		this.socket.on('newjoin', data => this.newjoin(data) );//rooms a los que se unio este socket
		this.socket.on('joinedat', data => this.joinedat(data) );//rooms a los que se unio este socket
	},
	destroyed(){
		this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:'admin' });
		console.log(`%cEl index fue destruido!!`,"background:#c23616;color:#f5f6fa;border-radius:10px;padding:6px;");
	},
	methods:{
		skt_order_created(data){
			let order = data.order;
			let by = data.user.me;

			console.log(`%c${by.nick} inicio la orden ${order.id}`,"background:#303952;color:#e66767;border-radius:10px;padding:8px;");
			console.log(data);
			this.$store.commit('Preventa/newOrder', order);
		},
		skt_order_changestate(data){
			console.log(data);
			let order = data.order;
			let newstate = data.newstate;

			console.log(`%cLa orden ${data.order.id} cambio su status a ${data.newstate.name}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;");
			this.$store.commit('Preventa/updateState', { order, newstate });
		},
		newjoin(data){
			console.log(`%c${data.profile.me.nick} se unio a ${data.room}`,"background:#3ae374;color:#3d3d3d;border-radius:10px;padding:6px;");
			console.log(data);
			this.$store.commit('Preventa/setStatusSktUser',{id:data.profile.me.id,state:true});
		},
		joinedat(data){
			// console.log(data);
			console.log(`%cTe uniste a ${data.room}`,"background:#3d3d3d;color:#3ae374;border-radius:10px;padding:6px;");
		},
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

	.st-1{ color:#18dcff!important; }// levantando pedido LP
	.st-2{ color:#b71540!important; }// asignando caja AC
	.st-3{ color:#cd6133!important; }// En Recepcion ER
	.st-4{ color:#fff200!important; }// Por surtir PS
	.st-5{ color:#20bf6b!important; }// Surtiendo SR
	.st-6{ color:#fdcb6e!important; }// Por validar PV
	.st-7{ color:#20bf6b!important; }// Validando Mercancia VM
	.st-8{ color:#0fb9b1!important; }// En Caja EC
	.st-9{ color:#20bf6b!important; }// Cobrando CO
	.st-10{ color:#cc8e35!important; }// Finalizado FZ
	.st-100{ color:#a5b1c2!important; }// Cancelado CN
</style>