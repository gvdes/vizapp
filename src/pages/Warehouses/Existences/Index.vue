<template>
    <q-page>
        <q-header class="bg-darktransl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Consulta de existencias"/>
                <div v-if="rootcatwork" class="row q-px-md q-pb-sm" >
                    <div class="col">
                        <q-breadcrumbs active-color="grey-3" class="text-green-13">
                            <template v-slot:separator><q-icon size=".8em" name="chevron_right" color="green-13" /></template>
                            <q-breadcrumbs-el :label="rootcatwork.label" />
                            <q-breadcrumbs-el v-for="(bread,idx) in breadcrums" :key="idx" :label="bread" />
                        </q-breadcrumbs>
                    </div>
                </div>
                <div class="q-pa-sm row justify-end items-center" v-if="subcats.length">
                    {{totalproducts.length}} de {{totalproducts.length}} <q-btn v-if="totalproducts.length" rounded size="xs" icon="fas fa-magic" @click="getStock" :loading="stocking" :disable="stocking"/>
                </div>
			</q-card>
		</q-header>

        <q-drawer side="left" v-model="leftdrawer" show-if-above content-class="bg-darkl0">
            <div class="q-pa-sm">
                <q-card class="bg-darkl1 q-pa-sm">
                    <div>Familia</div>
                    <q-select dark color="green-13"
                        dense :options="select_rootcat"
                        v-model="rootcatwork" @input="freshCats"
                        :loading="loadrootcats" :disable="loadrootcats"
                        popup-content-style="max-height:270px;"
                    />

                    <div v-for="(subcat,idxsubcat) in subcats" :key="idxsubcat" class="row">
                        <q-select dark color="green-13" 
                            v-model="subcat.model"
                            label="seleccione" class="col" 
                            :options="subcat.options"
                            @input="appendCats(idxsubcat)"
                            popup-content-style="max-height:270px;"
                        />
                    </div>
                    <div class="text-center q-pt-md" v-if="loadingsubcats">
                        <q-spinner-grid color="green-13"/>
                    </div>
                </q-card>
            </div>

            <div class="text-right">
                <q-scroll-area style="height: 350px; width: 100%;">
                    <div v-for="(filt,idx) in filtersAvs" :key="idx" class="q-pa-sm">
                        <q-select
                            multiple class="shadow-2"
                            dark color="green-13" filled
                            :options="filt.options"
                            :label="filt.label" 
                            v-model="selectedfilters[filt.idxattr].model"
                            popup-content-style="max-height:270px;"
                        />
                    </div>
                </q-scroll-area>
                <div class="q-pa-md">
                    <q-btn rounded flat icon="arrow_forward" 
                        class="bg-darkl1 shadow-1" color="green-13"
                        @click="applyFilters" v-if="catwork"
                        :disabled="filtering" :loading="filtering"
                    />
                </div>
            </div>
        </q-drawer>

        <div>
            <q-table dense
                :data="totalproducts"
                row-key="id"
                selection="multiple"
                :filter="filtrator"
                :pagination="initpagination"
                grid hide-header dark
            >
                <template v-slot:top-right v-if="totalproducts.length">
                    <q-input dark borderless dense debounce="300" v-model="filtrator" placeholder="Buscar">
                        <template v-slot:append><q-icon name="search" /></template>
                    </q-input>
                </template>

                <template v-slot:item="props">
                    <div class="q-pa-xs col-6 grid-style-transition">
                        <q-card class="bg-darkl1">
                            <div class="q-pa-sm text-white">{{props.row.code}}</div>
                            <div class="descript q-px-sm">{{props.row.description}}</div>
                            <div class="q-pa-sm" v-if="props.row.showstocks.show">
                                <div v-if="props.row.showstocks.state==2" class="text-center"> <q-spinner-dots color="green-13"/> </div>
                                <div v-if="props.row.showstocks.state==3">
                                    <div v-for="(stock,idxstk) in props.row.stockStores" :key="idxstk">
                                        {{stock.workpoint}} <span :class="stock.stock>0?'text-green-13':'text-negative'">{{stock.stock}}</span>
                                    </div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </template>

                <template v-slot:bottom="scope">
                    <q-page-sticky position="bottom" :offset="[0,5]">
                        <q-btn-group rounded class="bg-darkl1">
                            <q-btn v-if="scope.pagesNumber > 2" icon="first_page" color="green-13" round dense flat :disable="scope.isFirstPage" @click="scope.firstPage" />
                            <q-btn icon="chevron_left" color="green-13" round dense flat :disable="scope.isFirstPage" @click="scope.prevPage" />
                                <div class="text-center text--2 q-pa-xs">
                                    <div>PPP: {{scope.pagination.rowsPerPage}}</div>
                                    <div>Pagina: {{scope.pagination.page}} de {{scope.pagesNumber}}</div>
                                </div>
                            <q-btn icon="chevron_right" color="green-13" round dense flat :disable="scope.isLastPage" @click="scope.nextPage" />
                            <q-btn v-if="scope.pagesNumber > 2" icon="last_page" color="green-13" round dense flat @click="scope.lastPage"/>
                        </q-btn-group>
                    </q-page-sticky>
                </template>
            </q-table>
        </div>

        <q-page-sticky position="bottom-right" :offset="[10, 5]" @click="leftdrawer=true">
            <q-btn rounded flat icon="filter_alt" class="bg-darkl1 shadow-1" color="green-13"/>
        </q-page-sticky>
    </q-page>
</template>

<script>
import vizapi from '../../../API/warehouses'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
export default {
    components:{
		ToolbarAccount:ToolbarAccount,
    },
    async beforeMount(){
        console.log("traiendo datos..");
        let resp = await vizapi.existencesIndex(null);
        this.rootcats=resp.categories;
        this.loadrootcats=false;
    },
    data(){
        return {
            initpagination:{
                sortBy: 'id',
                descending: false,
                page: 1,
                rowsPerPage: 50
            },
            filtrator:'',
            loadrootcats:true,
            initstock:false,
            rootcats:[],
            rootcatwork:undefined,
            subcats:[],
            catwork:undefined,
            totalproducts:[],
            leftdrawer:true,
            filters:[],
            selectedfilters:[],
            stocking:false,
            filtering:false,
            loadingsubcats:false
        }
    },
    methods:{
        changed(){
            console.log("Ha cambiado");
        },
        freshCats(){
            this.loadingsubcats=true;
            this.subcats = [];
            let data = {"_category":this.rootcatwork.value};
            this.catwork=this.rootcatwork;
            this.pushCats(data);
        },
        appendCats(idx){
            this.loadingsubcats=true;
            this.subcats.splice(idx+1);
            let filter = this.selectedFilters();
            let data = new Object();
            data.products=true;
            data._category=this.subcats[idx].model.value
            if(filter.length){data.filter=filter};
            this.pushCats(data);
            this.catwork=this.subcats[idx].model;
        },
        pushCats(data){
            this.loadingsubcats=true;
            this.products=[];
            this.filters = [];
            vizapi.loadCats(data).then(success=>{
                let resp = success.data;
                return resp;
            }).then(resp=>{
                console.log("Datos obtenidos, construyendo select y filtros");
                console.log(resp); 
                if(resp.categories.children.length){//si tiene hijos, crea los objetos para el select
                    resp.model=undefined;//crea y rfelacion un modelo al select que se crea
                    resp.options = resp.categories.children.map(item=>{
                        return {"label":item.name,"value":item.id}
                    });
                    this.subcats.push(resp);// agrega un select
                }else{ console.log("no hay mas por cargar"); }
                this.loadingsubcats=false;
                this.filters=resp.filter;
                this.totalproducts=resp.products.map(item=>{
                    item.showstocks={show:false,state:1};
                    return item;
                });
            }).catch(fail=>{ console.log(fail); });
        },
        selectedFilters(){
            let filter = [];
            this.selectedfilters.forEach(item=>{
                if(item.model.length){ filter.push({"_attribute":item.idattr,"values":item.model}); }
            });
            return filter;
        },
        getStock(){
            console.log("Stockeando!!!");
            this.stocking=true;
            let _products = this.totalproducts.map(item=>{ 
                console.log();
                item.showstocks.show=true;
                item.showstocks.state=2;
                return item.id;
            });
            let data = {products:_products};
            console.log(_products);
            vizapi.getStocks(data).then(success=>{
                let resp = success.data;
                console.log(resp);
                this.totalproducts.map(item=>{
                    let idx = resp.findIndex(_item => {return item.id==_item.id});
                    item.showstocks.show=true;
                    item.showstocks.state=3;
                    item.stockStores=resp[idx].stockStores;
                    return;
                });

                this.stocking=false;
            }).catch(fail=>{
                this.stocking=false;
                console.log(fail);
            });
        },
        applyFilters(){
            let filter = this.selectedFilters();
            
            if(filter.length){
                this.filtering=true;
                let data = { "_category":this.catwork.value, "products":true, "filter":filter }
                vizapi.getFiltred(data).then(success=>{
                    let resp = success.data;
                    this.totalproducts=resp.products.map(item=>{
                        item.showstocks={show:false,state:1};
                        return item;
                    });

                    this.filtering=false;
                    this.leftdrawer=false;
                }).catch(fail=>{ console.log(fail); });
            }else{ 
                this.$q.notify({
                    message:'Seleccione al menos un filtro',
                    color:'negative'
                });
            }
        }  
    },
    computed:{
        select_rootcat(){
            return this.rootcats.map(item=>{
                return {"label":item.name,"value":item.id};
            });
        },
        filtersAvs(){
            if(this.filters.length){
                console.log(this.filters);
                return this.filters.map((item,idx)=>{
                    this.selectedfilters.push({"filter":item.name,"model":[],"idattr":item.id})
                    let options = item.details.options.map(_item=>{ return _item; });
                    return {"label":item.name,"options":options,"idxattr":idx,"idattr":item.id}
                });
            }
            return false
        },
        breadcrums(){
            return this.subcats.map(item=>{
                return item.model ? item.model.label :'';
            });
        }
    }
}
</script>

<style lang="scss">
    .descript{ font-size:.8em; }
    .descript2{ font-size:.9em; }
</style>