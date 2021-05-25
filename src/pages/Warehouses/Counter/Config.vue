<template>
    <q-page padding>
        <q-header class="bg-darkl1 q-py-sm" elevated>
            <div class="row items-center">
                <div class="col">
                    <q-btn flat icon="fas fa-chevron-left" color="white" @click="$router.push('/almacen/contador')" />
                </div>
                <div class="text-center col">
                    <span>INVENTARIO {{this.$route.params.id}}</span> <span class="text-grey"> Configuración</span>    
                </div>
                <div class="col text-right q-pr-sm">
                    <template v-if="!ismobile&&data">
                        <q-btn flat no-caps color="pink-13" icon="inventory_2" @click="trydiscard=true" v-if="!trydiscard" />
                        <template v-if="trydiscard">
                            <q-btn no-caps flat rounded color="pink-13" icon="inventory" @click="nextStep(4)" label="Archivar Inventario!!" />
                            <q-btn no-caps unelevated rounded color="primary" icon="close " label="Cancelar" @click="trydiscard=false" />
                        </template>
                        
                        <template v-if="data&&data.inventory.status.id==1&&canStart&&!trydiscard">
                            <transition appear enter-active-class="animated rubberBand slower" leave-active-class="animated zoomOut">
                                <q-btn flat no-caps color="green-13" icon="fas fa-play-circle" @click="start" />
                            </transition>
                        </template>
                        <template v-if="data&&data.inventory.status.id==2&&!trydiscard">
                            <q-btn @click="$router.push(`contador/${inv.id}`)" rounded flat color="green-13" icon="launch"/>
                        </template>
                    </template>
                </div>
            </div>
        </q-header>

        <template v-if="data">
            <q-card class="q-mt-xs bg-darkl1 exo">
                <q-card-section>
                    Creacion: {{data.inventory.created_at}}<br>
                    Administrador: {{data.inventory.created_by.names}} {{data.inventory.created_by.surname_pat}} [ {{data.inventory.created_by.nick}} ]<br>
                </q-card-section>
            </q-card>

            <div :class="`${wrapperClass} q-pt-md q-mb-xl q-gutter-md`">
                <!-- RESPONSABLES -->
                <q-card class="col bg-darkl1 exo">
                    <q-expansion-item
                        expand-separator
                        icon="fas fa-users"
                        label="Responsables"
                        :caption="group.length.toString()"
                        header-class="text-grey-5"
                        v-model="expands.team"
                    >
                        <q-card-section>
                            <q-list>
                                <q-item tag="label" v-ripple v-for="acc in natAccounts" :key="acc.id">
                                    <q-item-section avatar>
                                        <q-checkbox :disable="data.inventory.status.id!=1" dark v-model="group" :val="acc.id" color="green-13" @input="toggleReponsable(acc.id)"/>
                                    </q-item-section>
                                    <!-- <q-item-section avatar>
                                        <q-icon name="fas fa-user" color="white"/>
                                    </q-item-section> -->
                                    <q-item-section>
                                        <q-item-label>
                                            <span class="text-grey-6">{{`${acc.names} ${acc.surname_pat}`}}</span><br>
                                            [ {{acc.nick.toLowerCase()}} ]
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                    </q-expansion-item>
                </q-card>

                <!-- Seleccion de Productos -->
                <q-card class="col bg-darkl1 exo" v-if="data.inventory.status.id==1">
                    <q-expansion-item
                        expand-separator
                        icon="fab fa-searchengin"
                        label="Seleccion de productos"
                        header-class="text-grey-5"
                        v-model="expands.seeker"
                    >
                        <q-card-section>
                            <div class="row items-start">
                                <div class="col" v-if="data.inventory.status.id==1">
                                    <q-select dark dense flat color="green-13"
                                        label="Agregar por..."
                                        stack-label :options="optsAddProds"
                                        v-model="modeAdd" @input="modeAddChanged"
                                    />
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-section v-if="modeAdd">
                            <!-- Agregando por Categoria -->
                            <CategoriesBrowser v-if="modeAdd.value==1" @selectedCat="selectedCat"/>

                            <!-- Agregando por Ubicacion -->
                            <WarehousesBrowser v-if="modeAdd.value==2" @selectedLoc="selectedLoc"/>

                            <!-- Agregando por Cofigos -->
                            <div v-if="modeAdd.value==3"><ProductAutocomplete/></div>
                        </q-card-section>

                        <q-card-section style="max-width:100%;">
                            <q-table dark flat
                                card-class="bg-none"
                                :data="listSeekers"
                                :columns="tableSeekers.columns"
                                :visible-columns="tableSeekers.visibleColumns"
                            >
                                <template v-slot:body="props">
                                    <q-tr :props="props">
                                        <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                        <q-td key="code" :props="props">{{ props.row.code }}</q-td>
                                        <q-td key="description" :props="props" class="text--2">{{ props.row.description }}</q-td>
                                        <q-td key="locations" :props="props">
                                            <span v-if="props.row.locations.length">
                                                <span class="text-light-blue text-bold">[ {{props.row.locations.length}} ]</span>
                                                {{ props.row.locations.map(loc=>loc.path).join(', ') }}
                                            </span>
                                        </q-td>
                                    </q-tr>
                                </template>
                            </q-table>
                        </q-card-section>
                        <div class="row" v-if="listSeekers.length">
                            <q-btn class="col q-pa-sm" flat label="Limpiar" color="amber-13" no-caps />
                            <q-btn class="col q-pa-sm" flat label="Agregar a la Lista" color="green-13" no-caps @click="dragProducts"/>
                        </div>
                    </q-expansion-item>
                </q-card>

                <!-- Productos agregados -->
                <q-card class="col bg-darkl1 exo">
                    <q-expansion-item
                        expand-separator
                        icon="list_alt"
                        label="Productos"
                        header-class="text-grey-5"
                        v-model="expands.products"
                    >
                        <q-card-section>
                            <q-table dark flat
                                card-class="bg-none"
                                :data="listProducts"
                                :columns="tableProducts.columns"
                                :visible-columns="tableProducts.visibleColumns"
                            >
                                <template v-slot:body="props">
                                    <q-tr :props="props">
                                        <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                        <q-td key="code" :props="props">{{ props.row.code }}</q-td>
                                        <q-td key="description" :props="props" class="text--2">{{ props.row.description }}</q-td>
                                        <q-td key="locations" :props="props">
                                            <span v-if="props.row.locations.length">
                                                <span class="text-green-13 text-bold">[ {{props.row.locations.length}} ]</span>
                                                {{ props.row.locations.map(loc=>loc.path).join(', ') }}
                                            </span>
                                        </q-td>
                                    </q-tr>
                                </template>
                            </q-table>
                        </q-card-section>
                        <div class="row" v-if="listProducts.length&&data.inventory.status.id==1">
                            <q-btn class="col q-pa-sm" flat label="Limpiar" color="amber-13" no-caps @click="clearAddeds" />
                        </div>
                    </q-expansion-item>
                </q-card>
            </div>
        </template>

        <q-footer class="bg-darkl1" elevated v-if="ismobile">
            <div class="q-pa-sm row items-center justify-between">

                <q-btn flat no-caps color="pink-13" icon="inventory_2" @click="trydiscard=true" v-if="!trydiscard" />
                <template v-if="trydiscard">
                    <q-btn no-caps unelevated rounded color="primary" icon="close " label="Cancelar" @click="trydiscard=false" />
                    <q-btn no-caps flat rounded color="pink-13" icon="inventory" @click="nextStep(4)" label="Archivar Inventario!!" />
                </template>
                
                <template v-if="data&&data.inventory.status.id==1&&canStart&&!trydiscard">
                    <transition appear enter-active-class="animated rubberBand slower" leave-active-class="animated zoomOut">
                        <q-btn flat no-caps color="green-13" icon="fas fa-play-circle" @click="start" />
                    </transition>
                </template>
                <template v-if="data&&data.inventory.status.id==2&&!trydiscard">
                    <q-btn @click="$router.push(`contador/${inv.id}`)" rounded flat color="green-13" icon="launch"/>
                </template>
            </div>
        </q-footer>
    </q-page>
</template>

<script>
import invsdb from '../../../API/inventories'
import accountsdb from '../../../API/account'

import ProductAutocomplete from '../../../components/Global/ProductAutocomplete.vue'
import CategoriesBrowser from '../../../components/Global/CategoriesBrowser.vue'
import WarehousesBrowser from '../../../components/Global/WarehousesBrowser.vue'

export default {
    components:{
        ProductAutocomplete:ProductAutocomplete,
        CategoriesBrowser:CategoriesBrowser,
        WarehousesBrowser:WarehousesBrowser
    },
    data() {
        return {
            data:null,
            natAccounts:null,
            trydiscard:false,
            group:[],
            optsAddProds:[
                {label:'Categoria', value:1, disable:true},
                {label:'Ubicacion', value:2, disabled:false},
                {label:'Individual', value:3, disable:true},
            ],
            modeAdd:null,
            listProducts:[],
            tableProducts:{
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true },
					{ name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
                    { name:'description', align:'left', label:'Descripcion', field:row=>row.description },
					{ name:'locations', align:'center', label:'Ubicaciones', field:row=>row.locations.length, sortable:true },
				],
                visibleColumns:['code','locations']
            },
            listSeekers:[],
            tableSeekers:{
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true },
					{ name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
                    { name:'description', align:'left', label:'Descripcion', field:row=>row.description },
					{ name:'locations', align:'center', label:'Ubicaciones', field:row=>row.locations.length, sortable:true },
				],
                visibleColumns:['code','locations']
            },
            expands:{
                team:true,
                seeker:true,
                products:true
            },
            settings:new Object(),
        }
    },
    async beforeMount() { 
        localStorage.removeItem('statelocator');
        this.$store.commit('Layout/hideToolbarModule');
        this.data = await invsdb.find(this.$route.params.id);
        console.log(this.data);
        this.listProducts = this.data.inventory.products;
        this.getAccounts();
    },
    methods: {
        getAccounts(){
            accountsdb.get({"_rol":[7]}).then(success=>{
                console.log(success.data);
                this.natAccounts = success.data.map(acc=>{//iterar cuentas obtenidas
                    this.data.inventory.responsables.forEach(respo => {//contra responsables actuales del inventario
                        respo.id == acc.id ? this.group.push(acc.id) : null;
                    }); return acc;
                });
			}).catch(fail=>{ console.log(fail); });
        },
        toggleReponsable(accid){
            let data = {
                "_responsable": accid,
                "_inventory": this.$route.params.id
            }

            invsdb.toggleReponsable(data).then(success=>{
                console.log(success.data);
                console.log(this.group);
            }).catch(fail=>{ console.log(fail); });
        },
        selectedCat(cat){
            console.log("Categoria Seleccionada");
            this.settings.category=cat.category;
            this.listSeekers = cat.products.length ? cat.products : [];
            console.log(this.settings);
        },
        selectedLoc(loc){
            console.log("Ubicacion seleccionada");
            this.settings.warehouse=loc.warehouse;
            this.settings.section=loc.section?loc.section.model.value:null;
            this.listSeekers = loc.products.length ? loc.products:[];
        },
        async modeAddChanged(){
            this.settings = new Object();
            this.listSeekers = []; 
            this.settings.addmode = this.modeAdd.value;
        },
        dragProducts(){
            console.log("Arrastrando porductos!!");
            this.listSeekers.forEach(item=>{
                this.listProducts.findIndex(art => art.id==item.id) < 0 ? this.listProducts.unshift(item) : null;
            });
        },
        clearAddeds(){ this.listProducts = []; },
        start(){
            console.log("Iniciando ");
            let products = this.listProducts.map(prod=>{ return prod.id; });
            let data = { "_products": products, "_inventory": this.data.inventory.id, "settings":this.settings }

            this.$q.loading.show({message: 'Aplicando configuracion, porfavor espera...'});
            
            console.log(data);
            invsdb.addProducts(data).then(success=>{
                // console.log(success);
                this.nextStep();
            }).catch(fail=>{ console.log(fail); });
        },
        nextStep(reqstate=undefined,settings=undefined){
            let currentState = this.data.inventory.status;
            let msgnewState = '';

            console.log("Estatus Actual: "+currentState.id);

            let requestState = reqstate ? reqstate : currentState.id+1;

            switch (requestState) {
                case 2: msgnewState = 'Iniciando Inventario, espera...'; break;
                case 3: msgnewState = 'Cerrando Inventario, esperaa..'; break;
                case 4: msgnewState = 'Eliminando Inventario, espera...'; break;
            }            

            this.$q.loading.show({message:msgnewState});
            let data = {
                "_inventory":this.data.inventory.id,
                "_status":requestState
            }

            console.log('Cambiando status');
            console.log(data);
            // console.log(data);
            invsdb.nextStep(data).then(success=>{
                let resp = success.data;
                console.log(resp);
                this.data.inventory.status = resp.order.status;
                this.notifyChangeState(resp);
                this.$q.loading.hide();
            }).catch(fail=>{ console.log(fail); });
        },
        notifyChangeState(inv){
            let newState = inv.order.status.id;
            switch (newState) {
                case 2:
                    this.$q.notify({
                        icon:"done", color:"positive", timeout:1200,
                        message:"El inventario ya puede realizarse!!"
                    });
                    
                    this.$q.loading.show();
                    // setTimeout(()=>{
                        this.$router.push('/almacen/contador/'+inv.order.id);
                        this.$q.loading.hide();
                    // },1500);
                break;
                case 3: msgnewState = 'Cerrando Inventario, esperaa..'; break;
                case 4:
                    this.$q.notify({
                        icon:"done",
                        color:"positive",
                        message:"El inventario ha sido eliminado!"
                    });
                    
                    this.$router.push('/almacen/contador');
                break;
            } 
        },
    },
    beforeDestroy(){
        this.$store.commit('Layout/showToolbarModule');
        localStorage.removeItem('statelocator');
    },
    computed:{
        fullpath(){ 
			let path = '';
			this.warehouses.sectModels.forEach((item,idx,arr)=>{ if(item.value){ path += idx==0?`${item.label}`:`-${item.label}`; } });
			return path;
        },
        ismobile(){ return this.$q.platform.is.mobile; },
        auths(){ return this.$store.getters['Account/moduleauths']; },
        profile(){ return this.$store.getters['Account/profile'];},
        canStart(){ return (this.listProducts.length&&this.group.length); },
        wrapperClass(){ return this.$q.platform.is.mobile ? 'column':'row items-start'; },
    }
}
</script>