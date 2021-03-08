<template>
    <q-page padding>
        <q-header class="bg-darkl1 text-grey-5" elevated>
            <div class="q-pa-sm row items-center">
                <q-btn dense icon="arrow_back_ios" flat @click="$router.push('/almacen')"/>

                <q-breadcrumbs separator="" class="text-green-13" active-color="grey-4">
                    <q-breadcrumbs-el class="cursor-pointer" :label="`Almacen ${this.$route.query.name}`" @click="navAtSection('home')"/>
                    <q-breadcrumbs-el
                        v-for="section in path" :key="section.id"
                        :label="section.alias"
                        icon="navigate_next" @click="navAtSection('section',section)"
                        class="cursor-pointer"
                    />
                </q-breadcrumbs>
            </div>
            <q-separator/>
			<q-card flat class="bg-none">
                <q-tabs
                    v-model="tab"
                    dark
                    class="text-grey"
                    active-color="green-13"
                >
                    <q-tab name="structure" no-caps icon="account_tree" label="Estructura"/>
                    <q-tab name="content" no-caps icon="category" label="Productos"/>
                    <q-tab name="config" no-caps icon="settings" label="Configuracion"/>
                </q-tabs>
			</q-card>
		</q-header>

        <q-card flat class="q-mb-xl q-pb-xl bg-none">
            <q-tab-panels v-model="tab" animated class="q-mt-sm bg-none no-shadow">
                <q-tab-panel name="structure" class="q-pa-none no-shadow">
                    <div v-if="sections">
                        <template v-if="sections.length">
                            <q-card v-ripple class="bg-darkl1 q-mb-md" v-for="section in sections" :key="section.id" @click="putSections(section)">
                                <q-card-section>
                                    <div class="row items-center justify-center">
                                        <div class="col">{{section.name}} <span class="text-grey-6">[{{section.path}}]</span></div>
                                        <div><q-btn flat round color="light-blue-13" icon="chevron_right"/></div>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </template>
                        <template v-else>
                            <div class="text-center text-grey-7 q-pa-xl">
                                <q-icon name="fas fa-mug-hot" size="80px"/>
                                <div class="q-pa-md">Nada por aqui</div>
                            </div>
                        </template>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="content">
                    <template v-if="loadingprods"></template>
                    <template v-else>
                        <q-table dark
                            :data="tableProducts.items"
                            :columns="tableProducts.columns"
                            row-key="id"
                        >
                            
                        </q-table>
                    </template>
                </q-tab-panel>

                <q-tab-panel name="config">
                    <template v-if="inSection">
                        <div class="column q-gutter-md">
                            <div class="text-h6 text-light-blue-13">{{dataSection.name}} [{{dataSection.path}}]</div>

                            <q-card class="bg-darkl1">
                                <q-card-section>
                                    <q-icon name="edit" size="md"/> Cambiar datos
                                </q-card-section>
                                <q-separator />
                                <q-form>
                                    <q-card-section>
                                        <div class="row q-gutter-md">
                                            <q-input class="col" color="green-13" dark v-model="formEdit.name.new" :value="dataSection.name" label="Nombre"/>
                                            <q-input class="col" color="green-13" dark v-model="formEdit.alias.new" :value="dataSection.alias" label="Alias"/>
                                            <q-btn flat icon="done" rounded color="green-13" v-if="wasModified" no-caps/>
                                        </div>
                                    </q-card-section>
                                </q-form>
                            </q-card>

                            <q-card class="bg-darkl1">
                                <div class="ds">
                                    <q-card-section>
                                        <q-icon name="warning" size="md" color="amber-13"/> Zona de Riesgo!
                                    </q-card-section>
                                    <q-separator />
                                    <q-card-actions align="center">
                                        <q-btn color="red-13" flat class="bg-darkl0" :label="'Eliminar '+dataSection.path" no-caps @click="activeZoneRisk('del')"/>
                                        <q-btn color="red-13" flat class="bg-darkl0" :label="'Vaciar '+dataSection.path" no-caps @click="activeZoneRisk('drop')"/>
                                    </q-card-actions>
                                </div>
                            </q-card>
                        </div>
                    </template>
                    <template v-else>
                        
                    </template>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>

        <q-dialog v-model="wndAddSection.state" position="bottom" :persistent="wndAddSection.persistent" >
            <q-card class="bg-darkl1 exo text-grey-6">
                <q-card-section>Nueva Seccion en {{humanpath}}</q-card-section>
                <q-separator/>
                <q-form @submit="saveSection">
                    <q-card-section>
                        <div class="row items-center q-gutter-sm">
                            <q-input dark color="green-13" v-model="wndAddSection.name" label="Nombre" class="col" autocorrect="off" autocapitalize="none" autofocus/>
                            <q-input dark color="green-13" v-model="wndAddSection.alias" label="Alias" class="col"/>
                            <q-input dark color="green-13" v-model="wndAddSection.elements" label="Elementos" class="col-2" type="number" min="1"/>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        <div class="row justify-around items-center">
                            <q-radio size="xs" dark v-model="wndAddSection.autoinc" color="amber-13" :val="false" label="NO usar secuencia"/>
                            <q-radio size="xs" dark v-model="wndAddSection.autoinc" color="green-13" :val="true" label="Usar secuencia"/>
                        </div>
                    </q-card-section>
                    
                    <q-card-actions v-if="canSaveSection" align="right">
                        <q-btn type="submit" flat rounded color="green-13" :loading="wndAddSection.creating" :disable="wndAddSection.creating" icon="done" :label="wndAddSection.creating?'espera...':'Crear'" no-caps/>
                    </q-card-actions>
                </q-form>

                <q-inner-loading dark :showing="wndAddSection.creating">
                    <q-spinner-gears size="50px" color="white" />
                </q-inner-loading>
            </q-card>
        </q-dialog>

        <q-dialog v-model="wndZoneRisk.state" :persistent="wndZoneRisk.persistent">
            <template v-if="wndZoneRisk.option">
                <q-card v-if="wndZoneRisk.option=='del'" class="bg-dark text-grey exo">
                    <q-card-section>
                        <div class="text-h6 text-amber-13">
                            <q-icon name="warning"/> Estas por eliminar una seccion
                        </div>
                    </q-card-section>
                    <q-card-section>
                        Esta opcion eliminara la seccion <span class="text-amber-13">{{humanpath}}</span> y las ubicaciones de los productos dentro de está (asi como las secciones y ubicaciones que está contenga).<br> ¿Quieres confirmar esta operacion?
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn label="Si, eliminar seccion" color="negative" @click="execRisk" :disable="wndZoneRisk.dis" :loading="wndZoneRisk.load"/>
                    </q-card-actions>
                </q-card>

                <q-card v-if="wndZoneRisk.option=='drop'" class="bg-dark text-grey exo">
                    <q-card-section>
                        <div class="text-h6 text-amber-13">
                            <q-icon name="warning"/> Estas por Vaciar una seccion
                        </div>
                    </q-card-section>
                    <q-card-section>
                        Esta opcion eliminara la ubicacion de los productos que se encuentren en <span class="text-amber-13">{{humanpath}}</span>.<br> ¿Quieres confirmar esta operacion?
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn label="Si, vaciar seccion" color="negative" @click="execRisk" :disable="wndZoneRisk.dis" :loading="wndZoneRisk.load"/>
                    </q-card-actions>
                </q-card>
            </template>
        </q-dialog>

        <q-footer class="bg-darkl1 q-px-md" elevated>
            <q-tab-panels v-model="tab" animated class="bg-none no-shadow">
                <q-tab-panel name="structure" class="bg-none q-pa-sm no-shadow">
                    <div class="row justify-around">
                        <q-btn stack color="green-13" rounded flat icon="chevron_left" label="Atras" no-caps @click="navAtSection()" v-if="path.length"/>
                        <q-btn stack color="green-13" rounded flat icon="add" label="Agregar Seccion" no-caps @click="openAddSection"/>
                        <!-- <q-btn stack color="green-13" rounded flat icon="input" label="Almacenar" no-caps/> -->
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </q-footer>
    </q-page>
</template>

<script>
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
import warehousesdb from '../../API/warehouses'
import productsdb from '../../API/Product'
// import workerproducts from '../../API/WorkerProducts'

export default {
	name: 'PageIndex',
    data() {
        return {
            tab:'structure',
            sections:null,
            path:[],
            wndAddSection:{
                state:false,
                name:null,
                alias:null,
                elements:1,
                autoinc:undefined,
                creating:false,
                persistent:false
            },
            wndZoneRisk:{ state:false, option:null, persistent:false, dis:false, load:false },
            formEdit:{ name:{new:null,current:null}, alias:{new:null,current:null} },
            tableProducts:{
                columns:[
                    { name:'id', align:'left', label:'ID', field:row=>row.id, sortable:true },
					{ name:'code', align:'left', label:'Codigo', field:row=>row.code, sortable:true },
                    { name:'description', align:'left', label:'Descripcion', field:row=>row.description },
					{ name:'locations', align:'center', label:'Ubicaciones', field:row=>row.locations.length, sortable:true },
				],
                items:[]
                // visibleColumns:['code','locations']
            },
            paramsprods:{
                "autocomplete":null,//
                "paginate" : null,
                "_category": null,// categopria que deseamos visualizar
                "_location": null,//id de la seccion a aobtener la lista de productos
                "check_stock":null,//valida los prodcutos que tienen o no existerncia en los almacenes del workpoint
                "with_stock":null,//adjunta el stock total de los almacenes del workpoint
                "_status": null,//status del produtcto
                "with_locations":true,//adjunta todas las ubicacione s de todos los almacenes del workpoint
                "with_prices":null,//adjunta los precios en los productos (default del 1 al 4, a root, todos los precios)
            },
            loadingprods:false,
        }
    },
	components:{
        ToolbarAccount:ToolbarAccount
    },
    async beforeMount(){
        this.$store.commit('Layout/hideToolbarModule');
        console.log(this.path);
        this.putSections();
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    methods:{
        cleanZoneRisk(){
            this.wndZoneRisk.state=false;
            this.wndZoneRisk.option=null;
            this.wndZoneRisk.dis = false;
            this.wndZoneRisk.load = false;
            this.wndZoneRisk.persistent = false;
        },
        activeZoneRisk(option){
            this.wndZoneRisk.state=true;
            this.wndZoneRisk.option=option;
        },
        async execRisk(){
            this.wndZoneRisk.dis = true;
            this.wndZoneRisk.load = true;
            this.wndZoneRisk.persistent = true;

            let section = this.path[this.path.length-1];
            console.log(section);
            let data = { "_section":section.id };
            console.log(data);

            switch (this.wndZoneRisk.option) {
                case 'drop':
                    console.log("%cVaciando Seccion...","color:gold;");
                    let removed = await warehousesdb.sectionRemove(data);
                    this.cleanZoneRisk();
                    console.log(removed.data);
                    if(removed.data.res){
                        this.$q.notify({
                            color:'positive', icon:'done',
                            message:'Las ubicaciones han sido eliminadas!',
                        });
                    }
                break;
                case 'del': 
                    console.log("%cEliminando Seccion...","color:gold;");
                    let deleted = await warehousesdb.sectionDelete(data);
                    console.log(deleted.data);

                    this.cleanZoneRisk();
                    this.navAtSection();
                    this.tab='structure';

                    if(deleted.data.success){
                        this.$q.notify({
                            color:'positive', icon:'done',
                            message:'Seccion eliminada!'
                        });
                    }
                break;
            }
        },
        async putSections(section=null){
            console.log(section);
            this.$q.loading.show();

            let data = section ? 
                { params:{"_section":section.id,"products":false } } :
                { params:{"_celler":this.$route.params.idwrh,"products":false } };

            console.log("%cCargando secciones...","color:orange;font-size:2em;");
            let resp = await warehousesdb.sections(data);
            this.sections = section ? resp.sections : resp;//llenando las secciones, "es almacewn : es seccion"
            section ? this.path.push(section) : this.path=[];//actualizar path "es seccion, se agrega esta al path : es almacen, se vacia el path"
            console.log("%cSecciones Listas!!","color:green;font-size:2em;");
            this.$q.loading.hide();

            if(section){
                console.log("%cCargando productos de la seccion...","color:gold;font-size:2em;");
                this.paramsprods._location = section.id;
                this.tableProducts.items = await productsdb.get(this.paramsprods);
                console.log("%cProductos Listos!!","color:green;font-size:2em;");
            }
        },
        async navAtSection(command,section=null){
            console.log("%c------------ Browsing --------------","color:gold;");

            switch(command){
                case 'home': console.log('Hacia el home'); this.path.length ? this.putSections():null; break;

                case 'section':
                    let idx = this.path.findIndex(item=>item.id==section.id);

                    if((this.path.length-1)!=idx){
                        let _section = this.path[idx];
                        console.log('Hacia '+_section.name);
                        this.path.splice(idx);
                        console.log(`Hacia ${_section.alias} (${_section.id}::${_section.path})`);
                        this.putSections(_section);
                    }
                break;

                default://navegar hacia atras
                    if(this.path.length>1){// hay solo un elemento, ir al home
                        this.path.pop();
                        let _section = this.path[(this.path.length-1)];
                        let idx = this.path.findIndex(item=>item.id==_section.id);
                        console.log('Hacia atras (a '+_section.name+')');
                        this.path.splice(idx);
                        this.putSections(_section);
                    }else{ console.log('Hacia atras (al home)'); this.putSections(); }//solo hay un elemento, ir al home
                break;
            }
        },
        openAddSection(){ this.wndAddSection.state=true; },
        saveSection(){
            this.wndAddSection.creating = true;
            this.wndAddSection.persistent = true;
            console.log("Creando seccion");

            let data = {
                "name": this.wndAddSection.name,
                "alias": this.wndAddSection.alias.toUpperCase(),
                "items": this.wndAddSection.elements,
                "root": null,
                "details": null,
                "_celler": null,
                "autoincrement":this.wndAddSection.autoinc
            }

            if(this.inSection){
                data._celler = null;
                data.root = this.path[(this.path.length-1)].id;
            }else{
                data._celler = this.$route.params.idwrh;
                data.root = null;
            }

            console.log(data);
            warehousesdb.addSections(data).then(success=>{
                let _sections = success.data.celler;
                console.log(_sections);
                _sections.forEach(sect => { this.sections.unshift(sect); });
                this.wndAddSection.creating = false;
                this.wndAddSection.persistent = false;
                this.wndAddSection.state = false;
            }).catch(fail=>{
                this.wndAddSection.creating = false;
                this.wndAddSection.persistent = false;
                console.log(fail);
                alert(fail);
            });
        }
    },
    computed:{
        humanpath(){
            let humanpath = `Almacen ${this.$route.query.name}`;
            if(this.path.length){
                humanpath += `, `;
                humanpath += this.path.map(item=>{ return item.name; }).join(', ');
            }

            return humanpath;
        },
        canSaveSection(){
            let score = 0;
            let goal = 3;
            (this.wndAddSection.name&&this.wndAddSection.name.length>2) ? score++:score--;
            (this.wndAddSection.alias&&(this.wndAddSection.alias.length>=1&&this.wndAddSection.alias.length<=4)) ? score++:score--;
            this.wndAddSection.autoinc!=undefined ? score++:score--;

            return score==goal;
        },
        inSection(){ return this.path.length ? true:false; },
        screen(){ return this.$q.screen; },
        dataSection(){
            if(this.inSection){
                // console.log();
                let idx = this.path.length-1;
                let data = this.path[idx];
                this.formEdit.name.new = data.name;
                this.formEdit.name.current = data.name;

                this.formEdit.alias.new = data.alias;
                this.formEdit.alias.current = data.alias;

                return data;
            }else{ return "Pintar datos del almacen para editarlo"; }
        },
        wasModified(){
            return ((this.formEdit.name.new!=this.formEdit.name.current)||(this.formEdit.alias.new!=this.formEdit.alias.current))
        }
    }
}
</script>