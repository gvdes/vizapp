<template>
	<q-page>
		<q-header elevated class="bg-darkl1">
            <div class="row items-stretch justify-between">
                <q-btn @click="$router.push('/preventa/pedidos')" flat icon="close"/>

                <div class="row items-center col bg-dark divclient _client">
                    <div class="q-pa-sm col text-center">
                        <div class="text--2">Cliente:</div>
                        <div class="text-uppercase">
                            <q-icon v-if="client.type!='STD'" name="fas fa-medal" class="q-mr-sm"/> {{ client.type == 'STD'? client.name : `${client.name} (${client.id})` }}
                        </div>
                    </div>

                    <div class="q-pa-sm col text-center" :class="haveparent ? 'ord_anx':''">
                        <div class="text--2">Folio:</div>
                        <div class="text-bold">{{ordercatch.id}}</div>
                    </div>
                </div>

                <q-btn flat icon="menu" @click="ldrawer.state=true"/>
            </div>
            <div class="row items-center justify-between q-mt-sm">
                <div class="row text-center">
                    <div class="q-px-md">
                        <div class="text--2">Modelos</div>
                        <span class="text-green-13 text-bold">{{basket.length}}</span>
                    </div>

                    <div class="q-px-md">
                        <div class="text--2">Piezas</div>
                        <span class="text-green-13 text-bold">{{pzsBasket}}</span>
                    </div>

                    <div class="q-px-md">
                        <div class="text--2">Cajas</div>
                        <span class="text-green-13 text-bold">{{bxsBasket}}</span>
                    </div>                    
                </div>

                <div class="col text-right q-px-sm">
                    <div class="text--2">Total</div>
                    <div class="text-green-13 text-h6 text-bold">$ {{totalBasket}}</div>
                </div>
            </div>
        </q-header>

        <q-drawer v-model="ldrawer.state" side="right" content-class="bg-darkl0" @hide="startremove.state=false">
            <div class="q-pa-md">
                <div class="text-overline">Opciones</div>
                <div>
                    <q-btn-group spread class="bg-darkl1">
                        <q-btn dark icon="print" @click="initPrinters('reprint');" v-if="currentStep&&currentStep.id>1" />

                        <template v-if="basket.length">
                            <q-btn dark icon="fas fa-file-excel"/>
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
                <!-- <input type="file" ref="blobfile" id="blobfile" @input="readFile" hidden accept=".xlsx,.xls"/> -->
            </div>

            <div v-if="haveparent" class="q-pa-md">
                <div>Origen: {{index._order}}</div>
            </div>

            <div v-if="havechildren.length" class="q-pa-md">
                <div>Anexos:</div>
                <div v-for="anx in havechildren" :key="anx.id">
                    {{anx.id}}
                </div>
            </div>

            <div class="q-pt-md q-pl-md">
                <q-timeline color="green-13" dark>
                    <q-timeline-entry v-for="log in orderlog" :key="log.id"
                        side="right"
                    >
                        <template v-slot:subtitle>{{log.name}}</template>
                        <div class="text--2">{{humantime(log.created_at)}}</div>
                        <div>{{log.responsable.nick ? log.responsable.nick:'VizApp'}}</div>
                    </q-timeline-entry>
                </q-timeline>
            </div>
        </q-drawer>

        <!-- <div v-if="wndAOE.wwd" class="q-pa-md q-mt-md">
            <q-banner inline-actions squared rounded class="bg-amber-13 text-dark">
                <template v-slot:avatar>
                    <q-img src="~/assets/baiabaia.png" width="90px" class="dinobebe"/>
                </template>
                Ya agregaste esto...
                <template v-slot:action inline-actions>
                    <q-btn color="dark" class="text-bold text-amber-12" no-caps label="Ok" @click="tableproducts.filtrator=''; wndAOE.wwd=false;"/>
                </template>
            </q-banner>
        </div> -->

        <div class="q-mb-xl">
            <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <div v-for="prod in basket" :key="prod.id" @click="edit(prod)" class="q-py-md q-px-sm wrapper_prod">
                    <div class="row items-center">
                        <div class="q-pr-sm"><q-img src="~/assets/_defprod_.png" width="50px" /></div>
                        <div class="col q-pr-sm">
                            <div>
                                <span>{{ prod.code }}</span> --
                                <span>{{ prod.name }}</span>
                            </div>
                            <div class="text--2 text-grey-5">{{ prod.description }}</div>
                            <div class="text--2 text-amber-13">{{ prod.ordered.comments }}</div>
                            <div class="col text--2">{{prod.metsupply.name}} {{prod.ordered.amount}}{{ prod.metsupply.id!=1 ? ` (${prod.units} pzs)`:``}}, PU: ${{prod.usedprice.price}}</div>
                        </div>
                        <div class="text-right text-green-13">$ {{prod.total}}</div>
                    </div>
                </div>
            </transition-group>
        </div>

        <!-- VENTANA DE PRODUCTOS PARA AGREGAR -->
        <q-dialog v-model="wndAdder.state" position="bottom">
            <q-card class="text-white bg-darkl1 exo">
                <q-card-section class="bg-blue-grey-9 text-white text-overline">AGREGAR PRODUCTO</q-card-section>
                <template class="ds" v-if="wndAdder.product">
                    <ProductAOE :product="wndAdder.product" :client="index.client" showprices @confirm="productAdd" />
                </template>
            </q-card>
        </q-dialog>

        <!-- VENTANA DE PRODUCTOS PARA EDITAR -->
        <q-dialog v-model="wndEditor.state" position="bottom" @hide="cleanEditor" class="exo">
            <template v-if="wndEditor.product">
                <q-card class="bg-darkl1 text-white exo">
                    <q-card-section class="bg-blue-grey-9 text-white text-overline">EDITAR PRODUCTO</q-card-section>
                    <q-separator/>
                    <ProductAOE :product="wndEditor.product" :client="index.client" showprices @confirm="productEdit" />
                </q-card>
            </template>
        </q-dialog>


        <q-dialog v-model="wndPrinters.state" position="bottom">
            <PrinterSelect :options="printers" @clicked="print" title="Continuar" ref="PrinterSelect"/>
        </q-dialog>

        <q-footer class="bg-darkl0 text-white">
            <div class="q-pa-xs row items-center" v-if="currentStep&&(currentStep.id==1)">
                <div class="col text-center">
                    <ProductAutocomplete with_image with_prices with_stock @input="setProduct" />
                </div>
                <div class="text-right"><q-btn v-if="basket.length" icon="fas fa-arrow-right" color="green-13" flat @click="initPrinters('print')" /></div>
            </div>
        </q-footer>
	</q-page>
</template>

<script>
import { date } from 'quasar'
import preventadb from '../../API/preventa.js'
import ProductAutocomplete from '../../components/Global/ProductAutocomplete.vue'
import ProductAOE from '../../components/Global/ProductAOE.vue'
import PrinterSelect from '../../components/Preventa/PinterSelect.vue'

export default {
    // name: 'PageName',
    components:{ ProductAutocomplete, PrinterSelect, ProductAOE },
    data(){
        return {
            psocket:this.$sktPreventa,
            index:undefined,
            moreopts:false,
            wndAdder:{
                state:false,
                product:undefined
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
            metsupplies:[
                {name:'Piezas', id:1, alias:'pzs'},
                {name:'Docenas', id:2, alias:'dcs'},
                {name:'Cajas', id:3, alias:'cjs'}
            ],
        }
    },
    async mounted() {
        this.$store.commit('Preventa/setHeaderState', false);
        this.$store.commit('Preventa/setFooterState', false);

        this.$q.loading.show({ message:'...' });
 
        this.index = await preventadb.order(this.ordercatch);
        console.log("%cEl Pedido fue montado!!","background:green;color:white;padding:10px;font-size:1.5em;");
        console.log(this.index);

        this.dbproducts = this.index.products.length ? this.index.products : [];
        this.$q.loading.hide();
    },
    destroyed(){
        this.$store.commit('Preventa/setHeaderState',true);
		this.$store.commit('Preventa/setFooterState',true);
    },
    methods:{
        sktorder_changestate(data){
            console.log('Una orden ha cambiado...');
            console.log(data);
        },
        setProduct(product){
            if(this.currentStep.id==1){
                let artexist = this.index.products.find(art=>art.code==product.code);
                
                if(artexist){
                    this.$q.notify({
                        message:'Esto ya esta en la lista',
                        icon:'fas fa-bug',
                        color:'orange-13'
                    });
                }else{
                    this.wndAdder.product = product;
                    this.wndAdder.state = true;
                }
            }
        },
        edit(prod){
            if(this.currentStep.id==1){
                this.wndEditor.product = prod;
                this.wndEditor.state = true;
            }
        },
        cleanEditor(){ this.wndEditor.product = undefined; },
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
        async remove(){
            let model = this.wndAOE.product;
            this.$q.loading.show({message:`Removiendo ${model.code}...`});

            let data = {
                "_product": model.id,
                "_order": this.ordercatch.id
            }

            console.log(data);

            let resp = await preventadb.removeProduct(data);

            console.log(resp);

            if(resp.err){
                this.$q.notify({message:resp.err,icon:'fas fa-exclamation-triangle',color:'negative'});
            }else{
                let idx = this.dbproducts.findIndex(prod=>prod.id==model.id);

                this.dbproducts.splice(idx,1);
                this.$q.notify({message:`${model.code} eliminado!`,icon:'done',color:'positive'});
                this.$q.loading.hide();
                this.wndAOE.state = false;
            }
        },
        async productAdd(params){

            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id ,
                "amount": params.amount,
                "comments": params.comments
            }

            console.log(data);
            let resp = await preventadb.add(data);

            if (resp.err) {
                console.log(resp.err);
            }else{
                console.log(resp);
                this.index.products.unshift(resp);
                this.appsounds.added.play();

                this.wndAdder.product = undefined;
                this.wndAdder.state = false;
            }
        },
        async productEdit(params){
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
                    icon:'done'
                });

                this.wndEditor.state = false;
                this.wndEditor.product = undefined;
            }
        },
        initPrinters(job){
            this.wndPrinters.job = job;
            this.wndPrinters.state = true;
        },
        print(printer){
            this.wndPrinters.printer = printer;
            this.wndPrinters.job=='print' ? this.nextStep() : this.reprint();
        },
        async reprint(){
            this.$q.loading.show({ message:'Reimprimiendo...' });

            let data = {
                "_order": this.ordercatch.id,
                "_printer": this.wndPrinters.printer.id
            }  

            let resp = await preventadb.rePrint(data);
            this.$q.notify({ message:'Reimpresion correcta', color:'positive', icon:'done' });
            this.$q.loading.hide();
        },
        async nextStep(step=null){

            this.$q.loading.show({ message:'Enviando...' });

            let data = {
                "_order": this.ordercatch.id,
                "_printer": this.wndPrinters.printer.id
            }            

            let resp = await preventadb.nextStep(data);
            console.log(resp);

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
    },
    computed: {
        profile(){ return this.$store.getters['Account/profile'];},
		workin(){ return this.$store.getters['Account/workin'];},
        printers(){ return this.$store.getters['Preventa/printersSale'];},
        ordercatch(){ return this.$route.params },
        client(){ 
            if(this.index){
                return this.index._client ? { type:'REG', name:'Peter Parker', id:115 } : { type:'STD', name:this.index.name }; 
            }else{ return {type:'STD'}; }
        },
        basket(){ 
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
                        switch (p.ordered._supply_by) {
                            case 2: return p.prices.find( pl => pl.id==3 ); // se utilizara el precio Docena
                            case 3: return p.prices.find( pl => pl.id==4 ); // se utilizara el precio Caja
                            default: 
                                if(p.productType=='off'){//es oferta?
                                    return p.prices.find( pl => pl.id==1 );
                                }else if(p.ordered.amount<3){//es menudeo ?
                                    return p.prices.find( pl => pl.id==1 );
                                }else if(p.ordered.amount>=3){//es mayoreo ?
                                    return p.prices.find( pl => pl.id==2 );
                                }
                            break;
                        }
                    })(p);                    
                    p.total = p.units*p.usedprice.price;

                    // console.log(p.usedprice);
                    return p;
                });
            }else { return []; }
        },
        totalBasket(){ return this.basket.length ? this.basket.reduce((am,p) => { return p.total+am },0) : 0; },
        pzsBasket(){ return this.basket.length ? this.basket.reduce((am,p) => parseInt(p.units)+am, 0) : 0; },
        bxsBasket(){ return this.basket.length ? this.basket.reduce((am,p) => parseInt(p.boxes)+am, 0) : 0; },
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

    .ord_anx{ color:#fff200; }
    .ord_haveanx{ color:#fff200; }
</style>