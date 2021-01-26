<template>
    <q-page padding>
        <q-header class="bg-darkl1">
            <q-toolbar>
                <q-btn flat rounded dense icon="keyboard_backspace" color="white" @click="$router.push('/almacen/contador')"/>
                Configuracion de Inventario {{this.$route.params.id}}
            </q-toolbar>
        </q-header>

        <div class="q-mb-xl q-pb-md">
            <template v-if="data">
                <q-card class="bg-darkl1 exo">
                    <q-card-section>
                        Creacion: {{data.inventory.created_at}}<br>
                        Por: {{data.inventory.created_by.names}} {{data.inventory.created_by.surname_pat}} [ {{data.inventory.created_by.nick}} ]<br>
                        Estado: {{data.inventory.status.name}}
                    </q-card-section>
                </q-card>

                <q-card class="bg-darkl1 exo q-mt-sm">
                    <q-card-section>
                        <div>Responsables [ {{group.length}} ]</div>
                    </q-card-section>
                    <q-separator/>
                    <q-card-section>
                        <q-scroll-area style="height:300px; max-width:100%;">
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
                        </q-scroll-area>
                    </q-card-section>
                </q-card>

                <q-card class="bg-darkl1 exo q-mt-sm">
                    <q-card-section>
                        <div class="row items-start">
                            <div class="col">
                                Productos [ {{listProducts.length}} ]
                            </div>
                            <div class="col" v-if="data.inventory.status.id==1">
                                <q-select dark dense flat color="green-13"
                                    label="Agregar por..."
                                    stack-label :options="optsAddProds"
                                    v-model="modeAdd"
                                    @input="modeAddChanged"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator/>
                    <q-card-section v-if="modeAdd">
                        <!-- Agregando por Categoria -->
                        <div v-if="modeAdd.value==1">

                        </div>

                        <!-- Agregando por Ubicacion -->
                        <div v-if="modeAdd.value==2">
                            <div class="row q-gutter-md">
                                <q-select 
                                    dark color="green-13"
                                    class="col-xs-4 col-sm-2"
                                    label="Almacen"
                                    v-model="warehouses.selected"
                                    @input="setWarehouse"
                                    option-value="id"
                                    option-label="name"
                                    :options="warehouses.options"
                                />

                                <q-select
                                    dark color="amber-13"
                                    class="col-xs col-sm-1"
                                    v-for="(sect,idx) in warehouses.sections" :key="idx" 
                                    v-model="warehouses.sectModels[idx]"
                                    :options="warehouses.sections[idx]"
                                    @input="loadSections(warehouses.sectModels[idx],idx)"
                                />

                                <template v-if="warehouses.loading">
                                    <q-spinner-dots size="md" color="green-13" class="self-center"/>
                                </template>
                            </div>
                        </div>

                        <!-- Agregando por Cofigos -->
                        <div v-if="modeAdd.value==3"><ProductAutocomplete /></div>
                    </q-card-section>

                    <q-card-section>
                        <q-table dark flat
                            card-class="bg-none"
                            :data="listProducts"
                            :columns="tableProducts.columns"
                        >
                            <template v-slot:body="props">
                                <q-tr :props="props">
                                    <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                    <q-td key="code" :props="props">{{ props.row.code }}</q-td>
                                    <q-td key="locations" :props="props">
                                        [ {{props.row.locations.length}} ]
                                        <span v-for="(loc,idx) in props.row.locations" :key="idx">{{loc.path}}</span>
                                    </q-td>
                                </q-tr>
                            </template>
                        </q-table>
                    </q-card-section>
                </q-card>
            </template>
        </div>

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
import apiwarehouses from '../../../API/warehouses'
import accountsdb from '../../../API/account'
import ProductAutocomplete from '../../../components/Global/ProductAutocomplete.vue'
export default {
    components:{
        ProductAutocomplete:ProductAutocomplete
    },
    data() {
        return {
            data:null,
            natAccounts:null,
            trydiscard:false,
            group:[],
            optsAddProds:[
                {label:'Categorias',value:1},
                {label:'Ubicacion',value:2},
                {label:'Codigo',value:3},
            ],
            modeAdd:null,
            listProducts:[],
            warehouses:{
                selected:null,
                options:[],
                sections:[],
                sectModels:[],
                loading:false
            },
            filtrator:{
                "paginate" : null,
                "_category": null,
                "_location": null,
                "check_stock":false,
                "with_stock":false,
                "_status": null
            },
            tableProducts:{
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true },
					{ name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
					{ name:'locations', align:'center', label:'Ubicaciones', field:row=>row.locations.length, sortable:true },
				]
            },
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
        setWarehouse(){
            this.warehouses.loading = true;
			this.warehouses.sections = [];// vaciamos las secciones
            let data = { params:{"_celler":this.warehouses.selected.id,"products":false } };
            console.log("Obteniendo secci0ones del almacen "+this.warehouses.selected.name);
			apiwarehouses.loadSections(data).then(success=>{//obtener secciones del almacen
				let resp = success.data.sections.map(item=>{ return {label:item.alias,value:item.id}; });
				// console.log(resp);
				this.warehouses.sections.push(resp);
				this.warehouses.sectModels.push({label:"Seleccione",value:null});
                
                // this.listProducts = success.data.products.data.map(item=>{ return { code:item.code, locations:item.locations, counter:0 } });
                this.listProducts = success.data.products.data;
                this.warehouses.loading = false;
			}).catch(fail=>{ console.log(fail); });
        },
        loadSections(section,idx){
            this.warehouses.loading = true;
			console.log(this.warehouses.sections);
			console.log(this.warehouses.sectModels);
			this.warehouses.sections.splice(idx+1);//elimina secciones
			this.warehouses.sectModels.splice(idx+1);//elimina los modelos
            let data = { params:{"_section":section.value,"products":false} }; // dato a enviar en peticion
            // console.log(data);
			apiwarehouses.loadSections(data).then(success=>{
                let children = success.data.sections.sections;
				if(children.length>0){
					let resp = children.map(item=>{ return {label:item.alias,value:item.id}; });
					// console.log(resp);
					this.warehouses.sections.push(resp);
					this.warehouses.sectModels.push({label:"Seleccione",value:null});
                }else{ console.log("Sin mas subsecciones por cargar!!"); }

                // this.listProducts = success.data.products.data.map(item=>{ return { code:item.code, locations:item.locations, counter:0 } });
                this.listProducts = success.data.products.data;
                this.warehouses.loading = false;
			}).catch(fail=>{ console.log(fail); });
		},
        async modeAddChanged(){
            switch (this.modeAdd.value) {
                case 1:console.log("Modo Categoria Activado!!");break;

                case 2:
                    console.log("Modo Ubicacion Activado!!");
                    this.warehouses.options = await apiwarehouses.loadWarehouses();
                break;

                case 3:console.log("Modo Codigo Activado!!");break;
            }
        },
        discard(){},
        start(){
            console.log("Iniciando ");
            let products = this.listProducts.map(prod=>{ return prod.id; });
            console.log(products);
            let data = { "_products": products, "_inventory": this.data.inventory.id, "settings":this.settings }
            console.log(data);

            this.$q.loading.show({message: 'Aplicando Configuracion, espera...'});

            invsdb.addProducts(data).then(success=>{
                // this.$q.loading.show({message:`Se agregaron ${success.data.length} productos a la lista, iniciando inventario`});
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
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    computed:{
        settings(){
            let settings = new Object();
            if(this.data){
                settings.type = this.modeAdd;

                switch (settings.type.value) {
                    case 2:
                        settings.warehouse = {id:this.warehouses.selected.id,name:this.warehouses.selected.name};
                        settings.path = this.fullpath;
                    break;

                    default:  break;
                }
            }
            return settings;
        },
        fullpath(){ 
			let path = '';
			this.warehouses.sectModels.forEach((item,idx,arr)=>{ if(item.value){ path += idx==0?`${item.label}`:`-${item.label}`; } });
			return path;
        },
        auths(){ return this.$store.getters['Account/moduleauths']; },
        profile(){ return this.$store.getters['Account/profile'];},
        canStart(){
            return (this.listProducts.length&&this.group.length);
        }
    }
}
</script>