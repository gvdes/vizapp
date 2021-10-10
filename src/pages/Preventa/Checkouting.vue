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
                    <span>Canasta: {{outbasket.length}}</span>
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
        <q-dialog v-model="wndCounter.state" position="bottom" @hide="cleanCounter">
            <template v-if="wndCounter.product">
                <q-card class="bg-darkl1 text-white exo">
                    <q-card-section class="bg-blue-grey-9 text-white text-overline">CONFIRMAR PRODUCTO</q-card-section>
                    <q-separator/>
                    <ProductAOE :product="wndCounter.product" :client="order.client" showprices @confirm="productConfirm" />
                </q-card>
            </template>
        </q-dialog>

        <!-- VENTANA DE PRODUCTOS CONFIRMADOS / PARA EDITAR -->
        <q-dialog v-model="wndEditor.state" position="bottom" @hide="cleanEditor" class="exo">
            <template v-if="wndEditor.product">
                <q-card class="bg-darkl1 text-white exo">
                    <q-card-section class="bg-blue-grey-9 text-white text-overline">EDITAR PRODUCTO</q-card-section>
                    <q-separator/>
                    <ProductAOE :product="wndEditor.product" :client="order.client" showprices @confirm="productEdit" />
                </q-card>
            </template>
        </q-dialog>

        <!-- VENTANA DE PRODUCTOS PARA ANEXAR -->
        <q-dialog v-model="wndAdder.state" position="bottom" @hide="cleanAdder">
            <q-card class="text-white bg-darkl1 exo">
                <q-card-section class="bg-blue-grey-9 text-white text-overline">AGREGAR PRODUCTO</q-card-section>
                <div class="q-pa-sm"><ProductAutocomplete with_image with_prices with_stock @input="setProduct" /></div>
                <template class="ds" v-if="wndAdder.product">
                    <ProductAOE :product="wndAdder.product" :client="order.client" showprices @confirm="productAdd" />
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
                        class="text-uppercase"
                    >
                        <template v-slot:prepend>
                            <q-btn icon="fas fa-hashtag" dense rounded/>
                        </template>

                        <template v-slot:label>
                            <q-icon name="search" size="sm"/> barcode, Codigo o codigo corto
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
                product:undefined
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
    },
    methods:{
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
                    icon:'close', color:'negative'
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
                    icon:'done'
                });

                this.wndCounter.state = false;
                this.wndCounter.product = undefined;
            }

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
                product.ordered.toDelivered = params.amount;
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
        codeDefine(){
            let target = this.definitor.toUpperCase();

            let product = this.products.find( prod => ( prod.code==target||prod.name==target ) );

            if (product) {
                product.ordered.toDelivered ? this.edit(product) : this.confirm(product);
            }else { 
                console.log("No encontrado en products, Abrir wndAdder");
                this.wndAdder.state = true;
                this.wndAdder.product = null;
            }

            this.definitor = '';
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
        },
        cleanCounter(){ this.wndCounter.product = undefined; },
        cleanEditor(){ this.wndEditor.product = undefined; },
        cleanAdder(){ this.wndAdder.product = undefined; },
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
        products(){ 
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

                    // console.log(p.usedprice);
                    return p;
                });
            }else { return []; }
        },
        outbasket(){ return this.products.filter( prod => !prod.ordered.toDelivered ) },
        inbasket(){ return this.products.filter( prod => prod.ordered.toDelivered ) },
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