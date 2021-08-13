<template>
    <div>
        <q-table grid flat dark
			row-key="id"
			:columns="tableorders.columns"
			:visible-columns="visibleColumns"
			:data="orders" 
			:pagination="initpagination"
			:filter="tableorders.filtrator"
		>
			<template v-slot:top-right v-if="orders.length">
				<q-input dark filled fill-input color="green-13" debounce="0" v-model="tableorders.filtrator" placeholder="Buscar (folio o nombre)">
					<template v-slot:prepend><q-icon name="search" /></template>
				</q-input>
			</template>

			<template v-slot:item="props">
				<div class="q-pa-sm col-xs-12 text-grey-4 col-sm-6 col-md-4 col-lg-3">
					<q-card flat :class="`bg-darkl1 cardDesign-${props.row.status.id}`" @click="clicked(props.row)">
						<div class="row justify-between items-center q-px-md q-py-sm ">
							<div class="text-white text-h6">{{filltkt(props.row.num_ticket)}}{{props.row.num_ticket}}</div>
							<div class="text--2">{{props.row.status.name}}</div>
						</div>

						<q-card-section class="text--1">
							<div>ID: {{props.row.id}}</div>
							<div>Cliente: {{props.row.name}}</div>
							<div>Creacion: {{props.row.created_at}}</div>
							<div>Agente: {{props.row.created_by.nick}}</div>
						</q-card-section>
					</q-card>
				</div>
			</template>

			<template v-slot:bottom="scope">
				<q-page-sticky position="bottom-left" :offset="[10, 3]" v-if="orders.length>10">
				
						<!-- <div round class="text--2 text-white bg-teal q-py-xs q-px-md shadow-1" style="border-radius:20px;">
							<div>Pagina: <span class="text-teal-10 text-bold">{{scope.pagination.page}}</span> de <span class="text-teal-10 text-bold">{{scope.pagesNumber}}</span></div>
							<div>Ordenes por pagina: <span class="text-teal-10 text-bold">{{scope.pagination.rowsPerPage}}</span></div>
						</div> -->

						<q-btn-group rounded class="bg-dark text-white">
							<q-btn v-if="scope.pagesNumber > 2" icon="first_page" round dense flat :disable="scope.isFirstPage" @click="scope.firstPage" class="q-px-sm"/>
							<q-btn icon="chevron_left" round dense flat :disable="scope.isFirstPage" @click="scope.prevPage" class="q-px-sm"  />
							<q-btn flat disable no-caps>{{scope.pagination.page}} / {{scope.pagesNumber}}</q-btn>
							<q-btn icon="chevron_right" round dense flat :disable="scope.isLastPage" @click="scope.nextPage" class="q-px-sm" />
							<q-btn v-if="scope.pagesNumber > 2" icon="last_page" round dense flat @click="scope.lastPage" class="q-px-sm" />
						</q-btn-group>
				</q-page-sticky>
			</template>
		</q-table>
    </div>
</template>

<script>

export default{
    name:'PreventaOrdersTable',
    props:{
        orders:{ type:Array, default:[] },
    },
    data(){
        return {
            tableorders:{
				columns:[
					{ name:'id', align:'left', label:'id', field:'id', sortable:true },
					{ name:'tktday', align:'left', label:'Folio', field:'num_ticket', sortable:true },
					{ name:'client', align:'left', label:'Cliente', field:'name', sortable:true },
					{ name:'cstate', align:'center', label:'Estado', field:'created_at', sortable:true },
					{ name:'timestart', align:'center', label:'Hora', field:'created_at', sortable:true },
					{ name:'createdby', align:'center', label:'Agente', field:'created_by', sortable:true },
				],
				filtrator:''
			},
            initpagination:{
                sortBy: 'id',
                descending: false,
                page: 1,
                rowsPerPage: 10
            },
        }
    },
    methods:{
        clicked(order){
            this.$emit('clicked', order);
        }
    },
    computed:{
        profile(){ return this.$store.getters['Account/profile'];},
        visibleColumns(){
			let urol = this.profile.me._rol;

			if(urol==1||urol==2||urol==3){
				return ['id','client', 'cstate', 'timestart', 'createdby' ];
			}else{ return ['id','client', 'cstate', 'timestart' ];}
		},
		filltkt(){
			return id => { 
				let rounds = 5;
				let len = id.toString().length;
				let fill = '';

				for (rounds; len < rounds; rounds--) { fill+='0'; }
				return fill;
			}
		}
    }
}
</script>

<style scoped lang="scss">
	.cardDesign-1{ border-left:10px solid #3ae374 !important; }
	.cardDesign-2{ border-left:10px solid #b71540 !important; }
	.cardDesign-3{ border-left:10px solid #7d5fff !important; }
	.cardDesign-4{ border-left:10px solid #fff200 !important; }
	.cardDesign-5{ border-left:10px solid #227093 !important; }
	.cardDesign-6{ border-left:10px solid #fdcb6e !important; }
	.cardDesign-7{ border-left:10px solid #20bf6b !important; }
	.cardDesign-8{ border-left:10px solid #0fb9b1 !important; }
	.cardDesign-9{ border-left:10px solid #20bf6b !important; }
	.cardDesign-10{ border-left:10px solid #cc8e35 !important; }
</style>
