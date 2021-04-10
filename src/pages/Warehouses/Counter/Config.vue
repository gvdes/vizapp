<template>
    <q-page padding>
        <q-header class="bg-darkl1" elevated>
            <div class="q-py-sm text-uppercase row items-center">
                <q-btn flat icon="fas fa-chevron-left" color="white" @click="$router.push('/almacen/contador')"/>
                <span class="text-light-blue-13"> Configuracion de Inventario {{this.$route.params.id}}</span>
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
                        v-model="expands.respos"
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

                <!-- PRODUCTOS -->
                <q-card class="col bg-darkl1 exo">
                    <q-expansion-item
                        expand-separator
                        icon="fas fa-boxes"
                        label="Productos"
                        :caption="listProducts.length.toString()"
                        header-class="text-grey-5"
                        v-model="expands.products"
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
                                            [ {{props.row.locations.length}} ]
                                            <span v-for="(loc,idx) in props.row.locations" :key="idx">{{loc.path}}</span>
                                        </q-td>
                                    </q-tr>
                                </template>
                            </q-table>
                        </q-card-section>
                    </q-expansion-item>
                </q-card>
            </div>
        </template>

        <q-page-sticky position="bottom-left" :offset="[10,10]">

            <template v-if="trydiscard">
                <q-btn rounded no-caps color="primary" icon="close" @click="trydiscard=false" label="No Eliminar"/>
                <q-btn rounded no-caps color="negative" @click="nextStep(4)" label="¡Confirmar Eliminacion de Inventario!"/>
            </template>
            <q-btn v-else rounded no-caps color="orange-14" icon="delete" @click="trydiscard=true" label="Eliminar"/>
        </q-page-sticky>   

        <q-page-sticky position="bottom-right" :offset="[10,10]" v-if="canStart&&!trydiscard">
            <q-btn rounded no-caps
                color="primary" icon="fas fa-play-circle" @click="start" label="Iniciar"
            />
        </q-page-sticky>   
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
                {label:'Categoria',value:1},
                {label:'Ubicacion',value:2},
                // {label:'Codigo',value:3},
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
            expands:{
                respos:true,
                products:true
            },
            settings:new Object()
        }
    },
    async beforeMount() { 
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
                    });
                    return acc;
                });
			}).catch(fail=>{
				console.log(fail);
			});
        },
        toggleReponsable(accid){
            let data = {
                "_responsable": accid,
                "_inventory": this.$route.params.id
            }

            invsdb.toggleReponsable(data).then(success=>{
                console.log(success.data);
                console.log(this.group);
            }).catch(fail=>{
                console.log(fail);
            });
        },
        selectedCat(cat){
            console.log("Categoria Seleccionada");
            this.settings.category=cat.category;
            this.listProducts = cat.products.length ? cat.products : [];
            console.log(this.settings);
        },
        selectedLoc(loc){
            console.log("Ubicacion seleccionada");
            this.settings.warehouse=loc.warehouse;
            this.settings.section=loc.section?loc.section.model.value:null;
            this.listProducts = loc.products.length ? loc.products:[];
        },
        async modeAddChanged(){
            this.settings = new Object();
            this.listProducts = []; 
            this.settings.addmode = this.modeAdd.value;
        },
        start(){
            console.log("Iniciando ");
            let products = this.listProducts.map(prod=>{ return prod.id; });
            let data = { "_products": products, "_inventory": this.data.inventory.id, "settings":this.settings }

            this.$q.loading.show({message: 'Aplicando configuracion, porfavor espera...'});

            invsdb.addProducts(data).then(success=>{
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
                        icon:"done",
                        color:"positive",
                        message:"El inventario ya puede realizarse!!",
                        timeout:1200
                    });
                    
                    this.$q.loading.show();
                    setTimeout(()=>{
                        this.$router.push('/almacen/contador/'+inv.order.id);
                        this.$q.loading.hide();
                    },1500);
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
        auths(){ return this.$store.getters['Account/moduleauths']; },
        profile(){ return this.$store.getters['Account/profile'];},
        canStart(){ return (this.listProducts.length&&this.group.length); },
        wrapperClass(){ return this.$q.platform.is.mobile ? 'column':'row items-start'; },
    }
}
</script>