<template>
    <q-page>
        <q-header unelevated class="bg-darkl1">
            <div class="row items-center justify-between">
                <q-btn @click="$router.push('/preventa/checkout')" flat icon="close"/>

                <div class="row items-center col bg-dark divlcient _client">
                    <div class="q-pa-sm col text-center">
                        <div class="text--2">Cliente:</div>
                        <div class="text-uppercase" v-if="order">
                            <!-- <q-icon v-if="client.type!='STD'" name="fas fa-medal" class="q-mr-sm"/> {{ client.type == 'STD'? client.name : `${client.name} (${client.id})` }} -->
                            {{order.name}}
                        </div>
                    </div>

                    <!-- <div class="q-pa-sm col text-center" :class="haveparent ? 'ord_anx':''"> -->
                    <div class="q-pa-sm col text-center">
                        <div class="text--2">Checkout:</div>
                        <div class="text-bold">{{ordercatch.id}}</div>
                    </div>
                </div>

                <q-btn flat icon="menu"/>
            </div>

            <div class="row items-center justify-between q-mt-sm">
                <div class="row text-center">
                    <div class="q-px-md">
                        <div class="text--2">Modelos</div>
                        <span class="text-green-13 text-bold">{{inbasket.length}}</span>
                    </div>

                    <div class="q-px-md">
                        <div class="text--2">Unidades</div>
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

        <div class="q-mb-xl">
            <!-- LISTA INICIAL DE PRODUCTOS -->
            <div>
                <div class="q-pa-md bg-blue-grey-8 row items-center justify-between">
                    <span>Por Confirmar: {{outbasket.length}}</span>
                    <span>$ {{totalOutBasket}}</span>
                </div>
                <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                    <div v-for="prod in outbasket" :key="prod.id" @click="confirm(prod)" class="q-py-md q-px-sm wrapper_prod">
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

            <!-- LISTA DE PRODUCTOS CONFIRMADOS -->
            <div>
                <div class="q-pa-md bg-primary row items-center justify-between">
                    <span>Canasta: {{inbasket.length}}</span>
                    <span>$ {{totalBasket}}</span>
                </div>
                <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                    <div v-for="prod in inbasket" :key="prod.id" @click="edit(prod)" class="q-py-md q-px-sm wrapper_prod">
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
        </div>

        <!-- VENTADA DE PRODUCTOS A CONFIRMAR -->
        <q-dialog v-model="wndCounter.state" position="bottom" @hide="cancelAOEs">
            <template v-if="wndCounter.product">
                <q-card class="bg-darkl1 text-white exo">
                    <q-card-section class="bg-blue-grey-9 text-white text-overline">CONFIRMAR PRODUCTO</q-card-section>
                    <q-separator/>
                    <ProductAOE :product="wndCounter.product" :client="order.client" showprices @confirm="productConfirm" @cancel="cancelAOEs"/>
                </q-card>
            </template>
        </q-dialog>

        <!-- VENTANA DE PRODUCTOS CONFIRMADOS / PARA EDITAR -->
        <q-dialog v-model="wndEditor.state" position="bottom" @hide="cancelAOEs" class="exo">
            <template v-if="wndEditor.product">
                <q-card class="bg-darkl1 text-white exo">
                    <q-card-section class="bg-blue-grey-9 text-white text-overline">EDITAR PRODUCTO</q-card-section>
                    <q-separator/>
                    <ProductAOE
                        showprices
                        :product="wndEditor.product"
                        :client="order.client" 
                        @confirm="productEdit"
                        @cancel="cancelAOEs"
                        @remove="productDelete"
                    />
                </q-card>
            </template>
        </q-dialog>

        <!-- VENTANA DE PRODUCTOS PARA ANEXAR -->
        <q-dialog v-model="wndAdder.state" position="bottom" @hide="cancelAOEs">
            <q-card class="text-white bg-darkl1 exo">
                <q-card-section class="bg-blue-grey-9 text-white text-overline">AGREGAR PRODUCTO</q-card-section>
                <div class="q-pa-sm"><ProductAutocomplete with_image with_prices with_stock @input="setProduct"  @similarcodes="similarCodes"/></div>
                <template v-if="wndAdder.product">
                    <ProductAOE :product="wndAdder.product" :client="order.client" showprices @confirm="productAdd" @cancel="cancelAOEs"/>
                </template>

                <template v-if="wndAdder.similars.length">
                    <q-card-section>
                        <div>Varios productos coinciden con tu lectura</div>
                        <div class="row">
                            <div class="col-6 q-pa-xs" v-for="art in wndAdder.similars" :key="art.id">
                                <q-card class="q-pa-sm bg-darkl2" @click="setProduct(art)">
                                    <div>{{art.code}} -- {{art.name}}</div>
                                    <div class="text--3">{{art.description}}</div>
                                </q-card>
                            </div>
                        </div>
                    </q-card-section>
                </template>
            </q-card>
        </q-dialog>

        <q-dialog v-model="wndSending.state" :persistent="wndSending.persistent" position="bottom">
            <q-card class="bg-darkl1 text-white exo">
                <q-card-section class="text-h6 bfv">Confirmar Pedido...</q-card-section>
                <q-btn-group spread>
                    <q-btn flat label="Confirmar" class="q-py-md" color="positive" @click="nextStep"/>
                    <q-btn flat label="Cancelar" @click="wndSending.state=false" color="amber-14"/>
                </q-btn-group>
            </q-card>
        </q-dialog>

        <q-footer class="bg-darkl1 text-white">
            <div v-if="finish.state">
                <q-btn-group spread>
                    <q-btn label="Enviar a Caja" icon="done" class="q-py-md" color="positive" @click="nextStep"/>
                    <q-btn label="Cancelar" icon="cancel" @click="finish.state=false" color="amber-14"/>
                </q-btn-group>
            </div>
            <div class="q-pa-xs row items-center" v-else>
                <div class="col text-center">
                    <q-input filled dark autofocus dense label color="green-13"
                        v-model="definitor" @keypress.enter="codeDefine"
                        class="text-uppercase" :type="iptsearch.type"
                        ref="searcher"
                    >
                        <template v-slot:prepend>
                            <q-btn dense flat rounded :icon="iptsearch.icon" @click="toogleIptSearch"/>
                        </template>

                        <template v-slot:append>
                            <q-btn icon="close" dense rounded flat v-if="definitor.length" @click="definitor=''"/>
                        </template>
                    </q-input>
                </div>
                <q-btn flat icon="fas fa-plus" stack no-caps color="green-13" @click="wndAdder.state=true"/>
                <q-btn flat icon="fas fa-arrow-right" stack no-caps color="green-13" v-if="inbasket.length" @click="wndSending.state=true"/>
            </div>
        </q-footer>
    </q-page>
</template>

<script>
import PreventaDB from '../../API/preventa.js'
import ProductAutocomplete from '../../components/Global/ProductAutocomplete.vue'
import ProductAOE from '../../components/Global/ProductAOE.vue'

export default {
    components:{ ProductAutocomplete, ProductAOE },
    data(){
        return {
            psocket:this.$sktPreventa,
            iptsearch:{ processing:false, type:"number", icon:'fas fa-font' },
            order:null,
            wndCounter:{
                state:false,
                product:undefined
            },
            wndEditor:{
                state:false,
                product:undefined
            },
            wndAdder:{
                state:false,
                product:undefined,
                similars:[]
            },
            definitor:'',
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
            finish:{ state:false },
            wndSending:{ state:false, step:1, serie:undefined, folio:undefined, persistent:false }
        }
    },
    async mounted(){
        this.$store.commit('Preventa/setHeaderState', false);
        this.$store.commit('Preventa/setFooterState', false);

        this.$q.loading.show({ message: 'Cargando...' });

        this.order = await PreventaDB.order(this.ordercatch);
        console.log(this.order);
        this.$q.loading.hide();

        this.$refs.searcher.focus();
    },
    methods:{
        toogleIptSearch(){
			switch (this.iptsearch.type) {
				case "text": 
					this.iptsearch.type="number";
					this.iptsearch.icon="fas fa-font";
				break;
				case "number": 
					this.iptsearch.type="text";
					this.iptsearch.icon="fas fa-hashtag";
				break;
			}

            this.$refs.searcher.focus();

            // localStorage.setItem('typeiptsearch',JSON.stringify(this.iptsearch));
        },
        async productConfirm(params){
            console.log(params);
            let product = this.wndCounter.product;

            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id,
                "amount": params.amount,
                "comments": ""
            }

            let result = await PreventaDB.makeCheckout(data);

            if(result.error){
                console.log(result.error);
                this.$q.notify({
                    message:'Confirmacion erronea!',
                    icon:'close', color:'negative',
                    timeout:1000
                });
            }else{

                product.ordered.amount = params.amount;
                product.ordered.toDelivered = params.amount;
                product.ordered.comments = params.comments;
                product.ordered.toDelivered = params.amount;
                product.ordered._supply_by = params.metsupply.id;

                this.$q.notify({
                    message:'Producto Confirmado!!',
                    position:'center', color:'positive',
                    icon:'done', timeout:1000
                });

                this.wndCounter.state = false;
                this.wndCounter.product = undefined;
            }
            this.definitor = '';
        },
        async productAdd(params){
            console.log(params);
            let product = this.wndAdder.product;

            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id,
                "amount": params.amount,
                "comments": ""
            }

            let result = await PreventaDB.makeCheckout(data);

            if(result.server_status == 400){
                this.$q.notify({
                    message:`Error: ${result.msg}`,
                    color:'negative', icon:"fas fa-bug"
                });
            }else{
                let newProduct = result.data;
                console.log(newProduct);
                this.order.products.unshift(newProduct);
                this.wndAdder.product = undefined;
                this.wndAdder.state = false;
            }  
        },
        async productEdit(params){
            console.log(`El producto fue modificado, enviando actualizacion ... `,"");
            console.log(params);
            let product = this.wndEditor.product;
            
            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id,
                "amount": params.amount,
                "comments": ""
            }

            let result = await PreventaDB.makeCheckout(data);

            if(result.error){
                console.log(result.error);
                this.$q.notify({
                    message:'No se pudo actualizar el producto',
                    icon:'close', color:'negative'
                });
            }else{

                product.ordered.amount = params.amount;
                product.ordered.comments = params.comments;
                product.ordered.toDelivered = params.amount;
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
        async productDelete(params){
            this.$q.loading.show({message:`Devlviendo ${params.product.code}...`});

            let product = this.wndEditor.product;
            
            let data = {
                "_product": params.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": params.metsupply.id,
                "amount": 0,
                "comments": ""
            }

            let resp = await PreventaDB.makeCheckout(data);
            if (resp.error) {
                console.log("No se pudo devolver el producto");
            }else{
                product.ordered.toDelivered = null;
                this.wndEditor.product = undefined;
                this.wndEditor.state = false;
            }

            this.$q.loading.hide();
        },
        codeDefine(){
            if(this.definitor.trim().length){
                switch (this.listProducts.length) {
                    case 0: console.log("sin coincidencias, abrir el buscador"); break;

                    case 1:
                        console.log("Excelente, una coincidencia, validar en que lista esta...");
                        let product = this.listProducts[0];
                        product.ordered.toDelivered ? this.edit(product) : this.confirm(product);
                        break;
                
                    default:
                        this.$q.notify({
                            message:`Varias opciones disponibles, selecciona alguna ...`,
                            icon:'far fa-grin-beam-sweat',
                            color:'orange-14',
                            position:'top',
                            timeout:1700
                        });
                        console.log("Hay mas de una coincidencia, agregaras el primero");
                    break;
                }
            }else{ console.log("Abrir buscador..."); this.definitor='';}
        },
        confirm(prod){
            this.wndCounter.product = prod;
            this.wndCounter.state = true;
        },
        edit(prod){
            this.wndEditor.product = prod;
            this.wndEditor.state = true;
        },
        setProduct(product){
            console.log(product);
            this.wndAdder.product = product;
            this.wndAdder.similars=[];
        },
        cancelAOEs(){
            this.wndAdder.product = undefined;
            this.wndAdder.state = false;
            this.wndAdder.similars=[];

            this.wndEditor.product = undefined;
            this.wndEditor.state = false;

            this.wndCounter.product = undefined;
            this.wndCounter.state = false;

            this.$refs.searcher.focus();
            this.definitor='';
        },
        similarCodes(products){ this.wndAdder.similars = products; },
        async nextStep(){

            this.$q.loading.show({ message:'Creando folio...' });

            let data = {
                "_order": this.ordercatch.id,
                // "_printer": this.wndPrinters.printer.id
            }            

            let resp = await PreventaDB.nextStep(data);
            console.log(resp);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
                this.$q.loading.hide();
            }else{
                console.log(resp.status);
                let newstate = resp.status[resp.status.length-1];

                // this.psocket.emit("order_update",{ newstate:newstate, order:ordersend, update:'state' });
                // this.appsounds.ok.play();
                this.$router.push('/preventa/checkout');
                this.$q.notify({ message:`OK!!!`, color:'positive', icon:'done' });
                this.$q.loading.hide();
            }
        },
    },
    beforeDestroy(){
        this.$store.commit('Preventa/setHeaderState', true);
        this.$store.commit('Preventa/setFooterState', true);
    },
    computed:{
        ordercatch(){ return this.$route.params },
        originProducts(){ 
            if (this.order) {
                return this.order.products.map( p => {
                    p.ipack = p.pieces ? p.pieces : 1;
                    p.pricelistDefault = this.pricelists.find( pl => pl.id==this.order.client._price_list);
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

                    return p;
                });
            }else { return []; }
        },
        listProducts(){
            if(this.definitor.length){
                let _target = this.definitor.toUpperCase().trim();
                let similars = this.originProducts.filter( p => ( p.barcode.match(_target) || p.code.match(_target) || p.name.match(_target) || p.description.match(_target) ) );
                return similars.length ? similars : [];
            }else{ return this.originProducts; }
        },
        outbasket(){ return this.listProducts.filter( prod => !prod.ordered.toDelivered ) },
        inbasket(){ return this.listProducts.filter( prod => prod.ordered.toDelivered ) },
        totalBasket(){ return this.inbasket.length ? this.inbasket.reduce((am,p) => { return p.total+am },0) : 0; },
        totalOutBasket(){ return this.outbasket.length ? this.outbasket.reduce((am,p) => { return p.total+am },0) : 0; },
        pzsBasket(){ return this.inbasket.length ? this.inbasket.reduce((am,p) => parseInt(p.units)+am, 0) : 0; },
        bxsBasket(){ return this.inbasket.length ? this.inbasket.reduce((am,p) => parseInt(p.boxes)+am, 0) : 0; }
    }
}
</script>

<style lang="scss" scoped>
.wrapper_prod{ border-bottom:1px solid #4b4b4b; }
.divlcient{ border-radius:0px 0px 20px 20px; }
</style>