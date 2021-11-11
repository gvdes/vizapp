<template>
	<q-page>
		<q-header elevated class="bg-darkl1">
            <div class="row items-start justify-between">
                <q-btn @click="$router.push('/preventa/pedidos')" icon="close" flat/>

                <div class="col">
                    <div class="text--3 bg-dark q-pt-sm text-grey-5 text-center">PREVENTA / {{workin.workpoint.alias}}</div>
                    <div class="row items-center bg-dark divclient _client">
                        <div class="q-pa-xs col text-center">
                            <div class="text--3">Cliente:</div>
                            <div class="text-uppercase text--1">
                                <q-icon v-if="client.type!='STD'" name="fas fa-medal" class="q-mr-sm"/> {{ client.type == 'STD'? client.name : `${client.name} (${client.id})` }}
                            </div>
                        </div>

                        <div class="q-pa-xs col text-center">
                            <div class="text--3">Folio:</div>
                            <div class="text-bold text---1">{{ordercatch.id}}</div>
                            <div class="text--3 text-amber-13" v-if="haveparent">{{haveparent}}</div>
                            <div class="text--3 text-orange-13" v-if="havechildren.length">
                                <span v-for="(ord,idx) in havechildren" :key="idx">{{ord.id}} </span>
                            </div>
                        </div>
                    </div>
                </div>

                <q-btn flat icon="menu" @click="ldrawer.state=true"/>
            </div>

            <div class="row items-center justify-between q-mt-sm">
                <div class="row text-center items-end">
                    <div class="q-px-md">
                        <div class="text--2">Modelos</div>
                        <span class="text-green-13 text-bold">{{dbproducts.length}}</span>
                    </div>

                    <div class="q-px-md">
                        <div class="text--2">Piezas</div>
                        <span class="text-green-13 text-bold">{{totalPzsProds}}</span>
                    </div>
                </div>

                <div class="col text-right q-px-sm">
                    <div class="text--2">Total</div>
                    <div class="text-green-13 text-h6 text-bold">$ {{totalCashProds}}</div>
                </div>
            </div>
        </q-header>

        <q-drawer v-model="ldrawer.state" side="right" content-class="bg-darkl0" @hide="startremove.state=false">
            <div class="q-pa-md">
                <template v-if="currentStep&&currentStep.id==1">
                    <div class="text-overline">Unidad de surtido</div>
                    <q-select borderless dense dark color="green-13" v-model="metdeftsupply" option-value="id" option-label="name" :options="metsupplies" />
                    <q-separator />
                </template>

                <div class="text-overline">Opciones</div>
                <div>
                    <q-btn-group spread class="bg-darkl1">
                        <q-btn dark icon="print" v-if="currentStep&&currentStep.id>1">
                            <q-menu content-class="bg-darkl1"><PrinterSelect @input="reprint" label-title="Reimprimir"/></q-menu>
                        </q-btn>

                        <template v-if="gBasket.length">
                            <q-btn dark icon="fas fa-file-excel" @click="orderExport"/>
                        </template>

                        <template v-if="currentStep&&currentStep.id==1">
                            <q-btn dark icon="fas fa-file-upload" />

                            <q-btn icon="delete" color="negative" @click="startremove.state=true" v-if="!startremove.state"/>
                            <div v-else>
                                <div class="q-ma-sm">Archivar?</div>
                                <span class="col row q-gutter-md">
                                    <q-btn label="Si" class="col" color="negative" @click="archive"/>
                                    <q-btn flat label="No" class="col" color="amber-13" @click="startremove.state=false"/>
                                </span>
                            </div>
                        </template>

                        <template v-if="currentStep&&(currentStep.id==3||currentStep.id==4)">
                            <q-btn icon="fas fa-pencil-alt" color="orange-14"/>
                        </template>

                        <template v-if="currentStep&&currentStep.id==5" class="q-pa-md text-center">
                            <q-btn icon="fas fa-file-medical" color="primary" @click="startanx.state=true" v-if="!startanx.state"/>
                            <div v-else>
                                <div class="q-ma-sm">Crear Anexo?</div>
                                <span class="col row q-gutter-md">
                                    <q-btn no-caps label="Si" class="col" color="primary" @click="createanx"/>
                                    <q-btn flat no-caps label="No" class="col" color="amber-13" @click="startanx.state=false"/>
                                </span>
                            </div>
                        </template>
                    </q-btn-group>
                </div>
            </div>

            <div class="q-pt-md q-pl-md">
                <q-timeline color="green-13" dark>
                    <q-timeline-entry v-for="log in orderlog" :key="log.id" side="right">
                        <template v-slot:subtitle>{{log.name}}</template>
                        <div class="text--2">{{humantime(log.created_at)}}</div>
                        <div>{{log.responsable.nick ? log.responsable.nick:'VizApp'}}</div>
                    </q-timeline-entry>
                </q-timeline>
            </div>
        </q-drawer>

        <div v-if="artduplicate.state" class="q-pa-md q-mt-md">
            <q-banner inline-actions squared rounded class="bg-amber-13 text-dark">
                <template v-slot:avatar>
                    <q-img src="~/assets/baiabaia.png" width="90px" class="dinobebe"/>
                </template>
                
                Esto ya esta en la lista

                <template v-slot:action inline-actions>
                    <q-btn color="dark" class="text-bold text-amber-12" no-caps label="Ok" @click="artduplicate.state=false; artduplicate.state=undefined; $refs.patc.putFocus();"/>
                </template>
            </q-banner>

            <transition appear enter-active-class="animated bounceInUp" leave-active-class="animated zoomOut">
                <div  @click="edit(artduplicate.product)" class="q-py-lg q-px-sm wrapper_prod">
                    <div class="row items-center">
                        <div class="q-pr-sm"><q-img src="~/assets/_defprod_.png" width="50px" /></div>
                        <div class="col q-pr-sm">
                            <div>
                                <span>{{ artduplicate.product.code }}</span> --
                                <span>{{ artduplicate.product.name }}</span>
                            </div>
                            <div class="text--2 text-grey-5">{{ artduplicate.product.description }}</div>
                            <div class="col text--2">{{artduplicate.product.metsupply.name}} {{artduplicate.product.ordered.amount}}{{ artduplicate.product.metsupply.id!=1 ? ` (${artduplicate.product.units} pzs)`:``}}, PU: ${{artduplicate.product.usedprice.price}}</div>
                            <div class="text--2 text-amber-13">{{ artduplicate.product.ordered.comments }}</div>
                        </div>
                        <div class="text-right text-green-13">$ {{artduplicate.product.total}}</div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="q-mb-xl" v-if="!artduplicate.state">
            <q-list dark>
                <q-expansion-item
                    expand-separator
                    default-opened
                    header-class="text-white"
                    expand-icon-class="hidden"
                    v-if="basketPzs.length"
                >
                    <template v-slot:header>
                        <div class="row full-width items-center justify-between q-py-md hei">
                            <div>Piezas: {{basketPzs.length}} productos <q-icon name="fas fa-caret-right" /> {{pzsPzsBasket}} pzs</div>
                            <div class="text-bold">$ {{totalCashPzs}}</div>
                        </div>
                    </template>
                    <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                        <div v-for="prod in basketPzs" :key="prod.id" @click="edit(prod)" class="q-py-md q-px-sm wrapper_prod">
                            <div class="row items-center">
                                <div class="q-pr-sm"><q-img src="~/assets/_defprod_.png" width="50px" /></div>
                                <div class="col q-pr-sm">
                                    <div>
                                        <span>{{ prod.code }}</span> --
                                        <span>{{ prod.name }}</span>
                                    </div>
                                    <div class="text--3 text-uppercase text-italic">{{ prod.family }} (pxc {{prod.ipack}})</div>
                                    <div class="text--2 text-grey-5">{{ prod.description }}</div>
                                    <div class="col text--2">{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.usedprice.price}}</div>
                                    <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                                </div>
                                <div class="text-right">
                                    <div>$ {{prod.total}}</div>
                                    <div class="text--3 text-center text-uppercase">{{prod.productType=='off' ? 'OFERTA':prod.usedprice.name}}</div>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    default-opened
                    header-class="text-white"
                    expand-icon-class="hidden"
                    v-if="basketBxs.length"
                >
                    <template v-slot:header>
                        <div class="row full-width items-center justify-between q-py-md hei">
                            <div>Cajas: {{basketBxs.length}} productos <q-icon name="fas fa-caret-right" /> {{pzsBxsBasket}} pzs</div>
                            <div class="text-bold">$ {{totalCashBxs}}</div>
                        </div>
                    </template>
                    <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                        <div v-for="prod in basketBxs" :key="prod.id" @click="edit(prod)" class="q-py-md q-px-sm wrapper_prod">
                            <div class="row items-center">
                                <div class="q-pr-sm"><q-img src="~/assets/_defprod_.png" width="50px" /></div>
                                <div class="col q-pr-sm">
                                    <div>
                                        <span>{{ prod.code }}</span> --
                                        <span>{{ prod.name }}</span>
                                    </div>
                                    <div class="text--3 text-uppercase text-italic">{{ prod.family }} (pxc {{prod.ipack}})</div>
                                    <div class="text--2 text-grey-5">{{ prod.description }}</div>
                                    <div class="col text--2">{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.usedprice.price}}</div>
                                    <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                                </div>
                                <div class="text-right">
                                    <div>$ {{prod.total}}</div>
                                    <div class="text--3 text-uppercase">{{prod.productType=='off' ? 'OFERTA':prod.usedprice.name}}</div>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    switch-toggle-side
                    default-opened
                    header-class="text-white"
                    expand-icon-class="hidden"
                    v-if="basketDcs.length"
                >
                    <template v-slot:header>
                        <div class="row full-width items-center justify-between q-py-md hei">
                            <div>Docenas: {{basketDcs.length}}</div>
                            <div class="text-bold">$ {{totalCashDcs}}</div>
                        </div>
                    </template>
                    <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                        <div v-for="prod in basketDcs" :key="prod.id" @click="edit(prod)" class="q-py-md q-px-sm wrapper_prod">
                            <div class="row items-center">
                                <div class="q-pr-sm"><q-img src="~/assets/_defprod_.png" width="50px" /></div>
                                <div class="col q-pr-sm">
                                    <div>
                                        <span>{{ prod.code }}</span> --
                                        <span>{{ prod.name }}</span>
                                    </div>
                                    <div class="text--2 text-grey-5">{{ prod.description }}</div>
                                    <div class="col text--2">{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.usedprice.price}}</div>
                                    <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                                </div>
                                <div class="text-right">$ {{prod.total}}</div>
                            </div>
                        </div>
                    </transition-group>
                </q-expansion-item>
            </q-list>
        </div>

        <!-- VENTANA DE PRODUCTOS PARA AGREGAR -->
        <q-dialog v-model="wndAdder.state" position="bottom">
            <q-card class="text-white bg-darkl1 exo">
                <q-card-section class="bg-darkl2 text-white text-overline">AGREGAR PRODUCTO</q-card-section>
                <template class="ds" v-if="wndAdder.product">
                    <ProductAOE
                        ref="paoe_adder"
                        showprices
                        :product="wndAdder.product"
                        :client="index.client"
                        @confirm="productAdd"
                        @cancel="cancelAOE"
                        :deftunitsupply="metdeftsupply.id"
                    />
                </template>
            </q-card>
        </q-dialog>

        <!-- VENTANA DE PRODUCTOS PARA EDITAR -->
        <q-dialog v-model="wndEditor.state" position="bottom" @hide="cleanEditor" class="exo">
            <template v-if="wndEditor.product">
                <q-card class="bg-darkl1 text-white exo">
                    <q-card-section class="bg-darkl2 text-white text-overline">EDITAR PRODUCTO</q-card-section>
                    <q-separator/>
                    <ProductAOE
                        ref="paoe_editor" 
                        showprices
                        :product="wndEditor.product" 
                        :client="index.client" 
                        @confirm="productEdit"
                        @cancel="cancelAOE"
                        @remove="remove" 
                    />
                </q-card>
            </template>
        </q-dialog>

        <!-- VENTANA PARA SELECCIONAR IMPRESORA -->
        <q-dialog v-model="wndPrinters.state" position="bottom">
            <q-card flat class="bg-darkl1 text-white exo">
                <q-card-section class="text-overline bg-blue-grey-9 ">Seleccione Impresora</q-card-section>
                <PrinterSelect @input="nextStep"/>
            </q-card>
        </q-dialog>

        <!-- VENTANA PARA EXPORTAR EXCEL -->
        <q-dialog v-model="wndExport.state" position="bottom">
            <q-card class="exo bg-darkl0 text-white">
                <q-card-section class="bg-darkl2 text-white text-overline">EXPORTAR PEDIDO</q-card-section>
            </q-card>
        </q-dialog>

        <q-footer class="bg-darkl1 text-white">            
            <div class="q-pa-xs row items-center" v-if="currentStep&&(currentStep.id==1)">
                <div class="col text-center">
                    <ProductAutocomplete with_image with_prices with_stock @input="setProduct" @similarcodes="similarCodes" ref="patc"/>
                </div>
                <div class="text-right">
                    <q-btn v-if="gBasket.length" icon="fas fa-arrow-right" color="green-13" flat @click="initPrinters('print')" />
                </div>
            </div>

            <q-card v-if="wndAdder.similars.length" class="bg-darkl1 q-pa-sm">
                <div>Varios productos coinciden con tu lectura</div>
                <div class="row wrapper_similars q-pa-md">
                    <div class="col-6 q-pa-xs" v-for="art in wndAdder.similars" :key="art.id">
                        <q-card class="q-pa-sm bg-darkl2" @click="setProduct(art)">
                            <div>{{art.code}} -- {{art.name}}</div>
                            <div class="text--3">{{art.description}}</div>
                            <div class="text--3" :class="art.status.id == 1 ? 'text-green-13':'text-amber-13'">{{art.status.name}}</div>
                        </q-card>
                    </div>
                </div>
                <q-card-actions>
                    <q-btn flat class="full-width" @click="wndAdder.similars = []; $refs.patc.putFocus()" icon="close"/>
                </q-card-actions>
            </q-card>
        </q-footer>
	</q-page>
</template>

<script>
import { date } from 'quasar'
import preventadb from '../../API/preventa.js'
import ProductAutocomplete from '../../components/Global/ProductAutocomplete.vue'
import ProductAOE from '../../components/Global/ProductAOE.vue'
import ExcelJS from 'exceljs'
import saveAs from 'file-saver'
import PrinterSelect from '../../components/Global/PrinterSelect.vue'

export default {
    // name: 'PageName',
    components:{ ProductAutocomplete, PrinterSelect, ProductAOE },
    data(){
        return {
            psocket:this.$sktPreventa,
            art_filtrator:'',
            index:undefined,
            moreopts:false,
            artduplicate:{
                state:false,
                product:undefined
            },
            wndAdder:{
                state:false,
                product:undefined,
                similars:[]
            },
            wndEditor:{
                state:false,
                product:undefined
            },
            wndPrinters:{
                state:false,
                printer:null,
                job:'print'
            },
            ldrawer:{ state:false },
            startremove:{ state:false },
            startanx:{ state:false },
            tableproducts:{
				columns:[
					{ name:'id', align:'left', label:'ID', field:'id', sortable:true },
					{ name:'code', align:'left', label:'Codigo', field:'code', sortable:true },
					{ name:'name', align:'center', label:'Codigo Corto', field:'name', sortable:false },
					{ name:'description', align:'center', label:'Description', field:'description', sortable:false },
                    { name:'cant', align:'center', label:'Cantidad', field:'cant', sortable:true },
					{ name:'pieces', align:'center', label:'PzsXCaj', field:'pieces', sortable:true },
                    { name:'ppp', align:'center', label:'PPP', field:'ppp', sortable:true },
                    { name:'uprice', align:'center', label:'Precio Unitario', field:'uprice', sortable:true },
                    { name:'total', align:'center', label:'Total', field:'total', sortable:true },
				],
				filtrator:'',
                pagination:{
                    // sortBy: 'id',
                    descending: false,
                    page: 1,
                    rowsPerPage: 10
                }
			},
            pricelists:[
                { id:1, alias:'MEN', name:'MENUDEO' },
                { id:2, alias:'MAY', name:'MAYOREO' },
                { id:3, alias:'DOC', name:'DOCENA' },
                { id:4, alias:'CAJ', name:'CAJA' },
            ],
            metdeftsupply:{name:'Piezas', id:1, alias:'PZS'},
            metsupplies:[
                {name:'Piezas', id:1, alias:'PZS'},
                {name:'Docenas', id:2, alias:'DOC'},
                {name:'Cajas', id:3, alias:'CJS'}
            ],
            wndExport:{
                state:false
            }
        }
    },
    async mounted() {
        this.$store.commit('Preventa/setHeaderState', false);
        this.$store.commit('Preventa/setFooterState', false);

        this.$q.loading.show({ message:'...' });
        this.index = await preventadb.order(this.ordercatch);
        this.$q.loading.hide();
    },
    destroyed(){
        this.$store.commit('Preventa/setHeaderState',true);
		this.$store.commit('Preventa/setFooterState',true);
    },
    methods:{
        similarCodes(products){ this.wndAdder.similars = products; },
        setProduct(product){
            if(this.currentStep.id==1){
                let artexist = this.index.products.find(art=>art.code==product.code);
                
                if(artexist){
                    this.artduplicate.state=true;
                    this.artduplicate.product=artexist;
                }else{
                    this.wndAdder.product = product;
                    this.wndAdder.state = true;
                }
            }
        },
        orderExport(){
            this.$q.loading.show({message:'Generando...'});
            console.log("Exportando pedido!!");
            let filename = `Peventa_${this.workin.workpoint.alias}_${this.index.id}.xlsx`

            const workbook = new ExcelJS.Workbook();
            let sheet1 = workbook.addWorksheet('Sheet One');
            
            sheet1.columns = [
                { header:'id', key:'id', width:10 },
                { header:'Codigo', key:'code', width:15 },
                { header:'Codigo corto', key:'scode', width:20 },
                { header:'Descripcion', key:'dsc', width:40 },
                { header:'Seccion',key: 'sec', width:20 },
                { header:'Familia',key: 'fam', width:20 },
                { header:'Categoria',key: 'cat', width:20 },
                { header:'Cantidad', key:'amount', width:10 },
                { header:'Unidad de surtido', key:'usup', width:20 },
                { header:'Piezas', key:'pzs', width:10 },
                { header:'Lista de Precio', key:'plist', width:15 },
                { header:'Precio / Unidad', key:'price', width:15 },
                { header:'Total', key:'total', width:15 }
            ];

            console.log(this.gBasket);

            this.gBasket.forEach( p => {
                sheet1.addRow({ 
                    id:p.id,
                    code:p.code,
                    scode:p.name,
                    dsc:p.description,
                    sec:p.section,
                    fam:p.family,
                    cat:p.category,
                    ipack:p.pieces,
                    amount:p.ordered.amount,
                    usup:p.metsupply.name,
                    pzs:p.units,
                    plist:p.usedprice.name,
                    price:p.usedprice.price,
                    total:p.total
                });
            });

            workbook.xlsx.writeBuffer('exported.xlsx').then( data => {
                const blob = new Blob( [data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' } );
                saveAs(blob, filename);
                this.$q.notify({
                    icon:'done',
                    color:'positive',
                    message:'Documento guardado en Descargas'
                });
            });
            this.$q.loading.hide();
        },
        edit(prod){
            if(this.currentStep.id==1){
                this.wndEditor.product = prod;
                this.wndEditor.state = true;
            }
        },
        cleanEditor(){ this.wndEditor.product = undefined; this.$refs.patc.putFocus(); },
        async archive(){
            // this.$q.loading.show({message:'Archivando pedido...'});
            let data = { "_order": this.ordercatch.id }
            let resp = await preventadb.archive(data);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
            }else{
                let newstate = resp.status[resp.status.length-1];
                let ordersend = Object.assign({}, this.index);

                this.psocket.emit('order_update', { newstate:newstate, order:ordersend });
                this.$q.notify({ message:'Archivado correcto!!', color:'positive', icon:'done' });
                this.$router.push('/preventa/pedidos');
            }
        },
        async productAdd(params){
            this.$q.loading.show({message:`Agregando ${params.product.code}...`});

            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id ,
                "amount": params.amount,
                "comments": params.comments
            }

            let resp = await preventadb.add(data);

            if (resp.err) {
                console.log(resp.err);
            }else{
                this.index.products.unshift(resp);
                this.appsounds.added.play();

                this.wndAdder.product = undefined;
                this.wndAdder.similars = [];
                this.wndAdder.state = false;
                this.$refs.patc.putFocus();
            }
            this.$q.loading.hide();
        },
        async productEdit(params){
            this.$q.loading.show({message:`Guardando ${params.product.code}...`});

            let product = this.wndEditor.product;
            
            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id ,
                "amount": params.amount,
                "comments": params.comments
            }

            console.log(data);
            let resp = await preventadb.add(data);

            if(resp.error){
                console.log(resp.error);
                this.$q.notify({
                    message:'No se pudo actualizar el producto',
                    icon:'close', color:'negative'
                });
            }else{

                product.ordered.amount = params.amount;
                product.ordered.comments = params.comments;
                product.ordered._supply_by = params.metsupply.id;

                this.$q.notify({
                    message:'Producto Actualizado!!',
                    position:'center', color:'positive',
                    icon:'done',timeout:1200
                });

                this.wndEditor.state = false;
                this.wndEditor.product = undefined;
                this.$refs.patc.putFocus();
            }

            this.$q.loading.hide();
        },
        async remove(params){
            this.$q.loading.show({message:`Quitando ${params.product.code}...`});

            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id
            }

            let resp = await preventadb.removeProduct(data);

            if(resp.err){
                this.$q.notify({message:resp.err,icon:'fas fa-exclamation-triangle',color:'negative'});
            }else{
                let idx = this.index.products.findIndex( prod => prod.id==params.product.id );

                this.index.products.splice(idx,1);
                this.$q.notify({message:`${params.product.code} eliminado!`,icon:'done',color:'positive',timeout:1000,position:'center'});
                
                this.wndEditor.product = undefined;
                this.wndEditor.state = false;
            }
            this.$q.loading.hide();
        },
        initPrinters(){ this.wndPrinters.state = true; },
        print(printer){
            this.wndPrinters.printer = printer;
            this.wndPrinters.job=='print' ? this.nextStep() : this.reprint();
        },
        async reprint(printer){
            this.$q.loading.show({ message:'Reimprimiendo...' });

            let data = {
                "_order": this.ordercatch.id,
                "_printer": printer.id
            }

            let resp = await preventadb.rePrint(data);

            if (resp.err) {
                this.$q.notify({
                    message:'Error de impresion :(',
                    color:'negative',
                    icon:'fas fa-bug',
                    timeout:1500, 
                    position:'center'
                });
            }else{
                this.$q.notify({ message:'Reimpresion correcta', color:'positive', icon:'done' });
            }
            
            // this.wndPrinters.job = 'print';
            // this.wndPrinters.state = false;
            this.$q.loading.hide();
        },
        async nextStep(printer){
            this.$q.loading.show({ message:'Enviando...' });

            let data = {
                "_order": this.ordercatch.id,
                "_printer": printer.id
            }

            let resp = await preventadb.nextStep(data);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
            }else{
                console.log(resp.status);
                let newstate = resp.status[resp.status.length-1];
                let ordersend = Object.assign({}, this.index);
                ordersend.status = newstate;

                this.psocket.emit("order_update",{ newstate:newstate, order:ordersend });
                this.appsounds.ok.play();
                this.$router.push('/preventa/pedidos');
                this.$q.notify({ message:`Pedido ${data._order} enviado a ${newstate.name}`, color:'positive', icon:'done', position:'center', timeout:1000 });
                this.$q.loading.hide();
            }
        },
        createanx(){
			this.$q.loading.show({ message:'Creando anexo, espera...' });
			// this.windCreate.blocked=true;
			let data = { name:this.index.name, "_order":this.index.id };
            console.log(data);

            preventadb.create(data).then( done =>{
                let resp = done.data;
                console.log(resp);

                this.$q.notify({
                    message:`Anexo creado con Folio <b>${resp.id}</b>`,
                    color:'positive', icon:'done', html:true
                });
                this.$store.commit('Preventa/newOrder', resp);
				this.psocket.emit('order_add',{ user:this.profile, order:resp });
				this.$router.push(`/preventa/pedidos/${resp.id}`);
                this.$router.go();
                this.$q.loading.hide();

            }).catch( fail => {
                console.log(fail);
			    this.$q.notify({ icon:'bug', message:fail, color:'negative' });
            });
		},
        cancelAOE(){
            this.wndAdder.product = undefined;
            this.wndAdder.state = false;
            this.wndAdder.similars = [];

            this.wndEditor.product = undefined;
            this.wndEditor.state = false;
            this.$refs.patc.putFocus();
        }
    },
    computed: {
        profile(){ return this.$store.getters['Account/profile'];},// perfil del usuario
		workin(){ return this.$store.getters['Account/workin'];},// token de sucursal
        printers(){ return this.$store.getters['Preventa/printersSale'];},// impresoras de la sucursal
        ordercatch(){ return this.$route.params },// id de la orden 
        client(){ 
            if(this.index){
                return this.index._client ? { type:'REG', name:'Peter Parker', id:115 } : { type:'STD', name:this.index.name }; 
            }else{ return {type:'STD'}; }
        },
        pfams(){ return this.index ? this.index.products.map( p => p.family) : []; },
        upfams(){ return [...new Set(this.pfams)]; },
        dbproducts(){
            if (this.index) {
                return this.index.products.map( p => {
                    p.ipack = p.pieces ? p.pieces : 1;
                    p.pricelistDefault = this.pricelists.find( pl => pl.id==this.index.client._price_list);
                    p.metsupply = ( p => this.metsupplies.find( ms => ms.id == p.ordered._supply_by ) )(p);
                    p.productType = ( p =>{
                        if(p.prices.length){
                            let basePrice = p.prices[0].price;// obtiene el primer precio para comparar
                            let isOffer = p.prices.filter(item => item.id<=4 ).filter(item => basePrice==item.price).length==p.prices.length;//averigua si el precio es oferta
                            return isOffer ? 'off':'std'
                        }else{ return { error:true, msg:"Producto sin precios" } }
                    })(p);
                    p.units = ( p => {
                        switch (p.ordered._supply_by) {
                            case 2: return p.ordered.amount*12; //cantidad * 12 
                            case 3: return p.ordered.amount*p.ipack; //cantidad por piezas por caja
                            default: return p.ordered.amount;// retornar cantidad
                        }
                    })(p);
                    p.boxes = ( p => (p.units/p.ipack).toFixed(1) )(p);
                    p.usedprice = ( p => {
                        let siblings = this.index.products.filter( _p => (_p.family == p.family && _p.code!=p.code) );
                        let units_fam = 0;

                        if(siblings.length){
                            units_fam = siblings.reduce( (amm,s) => {//obtener las unidades totales de los productos integrantes de la familia de este producto
                                switch (s.ordered._supply_by) {
                                    case 2: return (s.ordered.amount*12)+amm;//cantidad * 12 
                                    case 3: return (s.ordered.amount*s.pieces)+amm;//cantidad por piezas por caja
                                    default: return (s.ordered.amount)+amm;// retornar cantidad
                                }
                            },p.units);
                        }else{ units_fam = p.units; }

                        switch (p.ordered._supply_by) {
                            case 2: return p.prices.find( pl => pl.id==3 ); // se utilizara el precio Docena
                            case 3: return p.prices.find( pl => pl.id==4 ); // se utilizara el precio Caja
                            default: 
                                if((p.productType=='off') || (units_fam<3)){//es oferta o menudeo
                                    return p.prices.find( pl => pl.id==1 );//devuelve el primer precio
                                }else if(units_fam>=3 && p.ordered.amount<p.ipack){//es mayoreo ?
                                    return p.prices.find( pl => pl.id==2 );
                                }else if (p.ordered.amount>=p.ipack) {
                                    return p.prices.find( pl => pl.id==4 );
                                }
                            break;
                        }
                    })(p);                    
                    p.total = p.units*p.usedprice.price;
                    
                    return p;
                });
            }else { return []; }
        },
        totalPzsProds(){ return this.dbproducts.reduce( (am,p) => parseInt(p.units)+am,0 ); },
        totalCashProds(){ return this.dbproducts.reduce( (am,p) => { return p.total+am } ,0 ) },
        gBasket(){
            if(this.art_filtrator.length){
                let _target = this.art_filtrator.toUpperCase().trim();
                let similars = this.dbproducts.filter( p => ( p.barcode.match(_target) || p.code.match(_target) || p.name.match(_target) || p.description.match(_target) ) );
                return similars.length ? similars : [];
            }else{ return this.dbproducts; }
        },
        basketPzs(){ return this.gBasket.length ? this.gBasket.filter( p => p.metsupply.id==1) : []; },
        totalCashPzs(){ return this.basketPzs.reduce( (am,p) => { return p.total+am } ,0 ) },
        pzsPzsBasket(){ return this.basketPzs.length ? this.basketPzs.reduce((am,p) => parseInt(p.units)+am,0) : 0; },
        basketDcs(){ return this.gBasket.length ? this.gBasket.filter( p => p.metsupply.id==2) : []; },
        totalCashDcs(){ return this.basketDcs.reduce( (am,p) => { return p.total+am } ,0 ) },
        basketBxs(){ return this.gBasket.length ? this.gBasket.filter( p => p.metsupply.id==3) : []; },
        totalCashBxs(){ return this.basketBxs.reduce( (am,p) => { return p.total+am } ,0 ) },
        pzsBxsBasket(){ return this.basketBxs.length ? this.basketBxs.reduce((am,p) => parseInt(p.units)+am,0) : 0; },
        currentStep(){ return this.index ? this.index.status : null },
        appsounds(){ return this.$store.getters['Multimediapp/sounds']; },
        haveparent(){ return this.index ? this.index._order : false; },
        havechildren(){ return this.index ? this.index.children : false; },
        orderlog(){ return this.index ? this.index.log:[] },
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
    },
}
</script>
<style lang="scss" scoped>
    .wrapper_prod{ border-bottom:1px solid #4b4b4b; }
    .divclient{ border-radius:0px 0px 20px 20px; }

    .dinobebe{border-radius:10px;}

    .ord_isanx{ color:#fff200; }
    .ord_haveanx{ color:#fff200; }

    .wrapper_similars{
        max-height: 300px;
        overflow: scroll;
    }
    
    //header expantion item
    .hei{ border-bottom:2px solid grey; }
</style>