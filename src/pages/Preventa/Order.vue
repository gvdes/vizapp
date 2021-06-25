<template>
	<q-page padding>
		<q-header elevated class="bg-darkl1">
            <div class="row items-center">
                <div>
                    <q-btn @click="$router.push('/preventa')" flat icon="fas fa-chevron-left"/>
                </div>
                <div class="text-right text-white text-white">
                    <div class="q-pa-sm row items-center justify-center text-uppercase" :class="client.type=='STD'?'bg-dark q-px-md':'bg-blue-grey-7'">
                        <q-icon v-if="client.type!='STD'" name="fas fa-medal" class="q-mr-sm"/>
                        {{ client.type == 'STD'? client.name : `${client.name} (${client.id})` }}
                    </div>
                </div>
                <div class="col text-right">
                    <span class="text--2">Folio:</span> <span class="text-h6 text-bold q-px-sm">{{ordercatch.id}}</span>
                </div>
            </div>
            <div class="row items-center q-py-sm">
                <div class="col">
                    <q-chip color="dark" class="text--1">
                        <q-avatar color="dark" text-color="white">M</q-avatar>
                        <span class="text-green-13">{{basket.length}}</span>
                    </q-chip>
                    <q-chip color="dark" class="text--1">
                        <q-avatar color="dark" text-color="white">P</q-avatar>
                        <span class="text-green-13">{{totaltkt_pzs}}</span>    
                    </q-chip>
                    <!-- <q-chip color="dark" class="text--1">
                        <q-avatar color="dark" text-color="white">C</q-avatar>
                        <span class="text-green-13">0</span>    
                    </q-chip> -->
                </div>
                
                <div class="text-right text-green-13 text-h6 q-pr-sm">$ {{totaltkt_pay}}</div>
            </div>
        </q-header>

        <div v-if="basket.length" class="q-mb-xl q-mt-sm">
            <!-- <q-table grid :data="basket" >
                <template v-slot:item="props">
                    <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                        <q-card class="bg-darkl1 full-width q-mb-md">
                            <div class="full-width row ds">
                                <div>check</div>
                                <div class="divimg ds">imagen</div>
                                <div class="col q-pa-sm">
                                    <div class="text-white text-bold">{{props.row.code}}</div>
                                    <div class="text--2 q-pb-sm">{{props.row.description}}</div>
                                    <div class="row justify-between"><span>Unidades:</span> <span>1</span></div>
                                    <div class="row justify-between"><span>Cajas:</span> <span>1</span></div>
                                    <div class="row justify-between"><span>Precio:</span> <span>1</span></div>
                                    <div class="text-green-13 text-right">$ 200</div>
                                </div>
                            </div>
                        </q-card>
                    </transition>
                </template>
            </q-table> -->

            <transition-group appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <q-card class="bg-darkl1 full-width q-mb-md" v-for="product in basket" :key="product.id" @click="selprod(product,'e')">
                    <div class="text-white text-bold q-pa-sm">{{product.code}}</div>
                    <div class="full-width row">
                        <!-- <div>check</div> -->
                        <div>
                            <q-img src="https://image.flaticon.com/icons/png/512/578/578158.png" class="divimg" />
                            <!-- <div class="text--2 q-pb-sm">{{product.description}}</div> -->
                        </div>
                        <div class="col text-grey-4 text--2 q-px-sm column justify-around">
                            <div class="text-grey-5">{{product.description}}</div>
                            <div class="row justify-between"><span>Cantidad:</span><span>{{product.cant}}</span></div>
                            <div class="row justify-between"><span>Piezas X Caja:</span><span>{{product.pieces}}</span></div>
                            <div class="row justify-between"><span>Unidades:</span><span>{{product.ppp}}</span></div>
                            <div class="row justify-between"><span>Precio Unitario:</span><span>$ {{product.uprice}}</span></div>
                            <div class="row justify-between text-bold"><span>Total: </span><span class="text-green-13"> $ {{product.total}}</span></div>
                        </div>
                    </div>
                </q-card>
            </transition-group>
        </div>
        
        <q-dialog v-model="wndAOE.state" position="bottom" @hide="cleanWndAOE">
            <q-card v-if="wndAOE.product" class="exo bg-darkl0 text-grey-4">
                <q-card-section>
                    <div class="row justify-between items-end">
                        <div class="text-h6 text-green-13">{{wndAOE.product.code}}</div>
                        <div v-if="wndAOE.product.stocks">
                            <q-btn flat dense no-caps class="text-bold"
                                :color="wndAOE.product.stocks[0].stock?'green-13':'amber-13'"
                                :label="`Stock: ${wndAOE.product.stocks[0].stock}`"
                            />
                        </div>
                    </div>
                    <div class="text--2">{{wndAOE.product.description}}</div>
                </q-card-section>

                <div>
                    <template v-if="wndAOE.params.type=='std'">
                        <div class="text-center row justify-between q-px-md">
                            <div v-for="prc in wndAOE.product.prices" :key="prc.id" class="q-px-md">
                                <div class="text--2">{{prc.alias}}</div>
                                <div class="text-bold">$ {{prc.price}}</div>
                            </div>
                        </div>
                    </template>

                    <template v-if="wndAOE.params.type=='off'">
                        <div class="text-center text-bold text-orange">
                            <div>OFERTA</div>
                            <div class="text-h4">$ {{wndAOE.product.prices[0].price}}</div>
                        </div>
                    </template>

                    <div class="q-mt-lg row items-end">
                        <div class="text-center">
                            <div class="column">
                                <q-btn icon="fas fa-chevron-up" class="q-py-xs" @click="ctrlPzsUp" flat/>
                                <div class="text-center col column q-py-md">
                                    <input type="number" min="1" v-model="wndAOE.params.amount" class="text-center exo fieldcant" @keyup="wAOEcalcs"/>
                                </div>
                                <q-btn icon="fas fa-chevron-down" class="q-py-xs" @click="ctrlPzsDown" flat/>
                            </div>
                        </div>
                        <div class="col">
                            <q-markup-table dark flat dense square class="col q-mx-md bg-none text-grey-5">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <q-select label="Surtir por" @input="wAOEcalcs" borderless dense dark color="green-13" v-model="metsupply.model" option-value="id" option-label="alias" :options="metsupply.opts" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <q-input borderless dense dark flat label="Notas" color="green-13" v-model="wndAOE.params.comments"/>
                                        </td>
                                    </tr>
                                    <tr><td>Piezas X Caja</td><td align="right">{{wndAOE.product.pieces}}</td></tr>
                                    <tr><td>Cajas</td><td align="right">{{wndAOE.params.boxes}}</td></tr>
                                    <tr><td>Unidades</td><td align="right">{{wndAOE.params.units}}</td></tr>
                                    <tr><td>Precio unitario</td><td align="right">{{wndAOE.params.price}}</td></tr>
                                    <tr><td>Total</td><td align="right">{{wndAOE.params.total}}</td></tr>
                                </tbody>
                            </q-markup-table>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <q-btn class="col q-py-md" color="green-13" icon="done" :label="wndAOE.action=='a'?'Agregar':'Aplicar'" no-caps flat @click="doneAOE" :loading="wndAOE.actions.done.save" :disable="wndAOE.actions.done.dis"/>
                    <q-btn v-if="wndAOE.action=='e'" class="col q-py-md" color="amber-13" icon="delete" label="Remover" no-caps flat @click="remove" :loading="wndAOE.actions.remove.rem" :disable="wndAOE.actions.remove.dis"/>
                    <q-btn class="col q-py-md" color="light-blue-14" icon="close" label="Cancelar" no-caps flat @click="cancelAOE"/>
                </div>
            </q-card>
        </q-dialog>

        <q-dialog v-model="wndPrinters.state" position="bottom">
            <q-card class="bg-darkl1 exo ">
                <q-card-section class="text-white">Seleccione Impresora</q-card-section>
                <q-card-section>
                    <div class="row text-grey-4 justify-around">
                        <q-btn :class="printer.selected?'bg-primary text-white':''" v-for="printer in wndPrinters.devices.opts" flat :key="printer.id" stack no-caps @click="selPrinter(printer.id)">
                            <q-icon name="print" size="xl"></q-icon>
                            <div class="text--2">{{printer.name}}</div>
                        </q-btn>
                    </div>
                </q-card-section>
                <div v-if="wndPrinters.devices.model" class="text-right">
                    <q-btn @click="nextStep" class="q-pa-md text-bold full-width" color="green-13" flat label="enviar" :loading="wndPrinters.next.loading" :disable="wndPrinters.next.dis" />
                </div>
            </q-card>
        </q-dialog>

        <q-footer class="bg-darkl1 text-white" elevated>
            <div class="q-pa-xs row items-center" v-if="currentStep&&currentStep.id==1">
                <div><q-btn class="q-px-md" flat @click="moreopts=!moreopts" :icon="moreopts?'fas fa-chevron-down':'fas fa-chevron-up'"/></div>
                <div class="col text-center"><ProductAutocomplete @input="selprod"/></div>
                <div class="col-5 text-right"><q-btn v-if="basket.length" icon="fas fa-arrow-right" color="green-13" dense flat @click="wndPrinters.state=true" /></div>
            </div>
            <div v-if="moreopts" class="q-pa-md text-center">
                <q-btn label="Archivar Pedido" icon="delete" color="negative" no-caps @click="archive"/>
            </div>
        </q-footer>
	</q-page>

    
</template>

<script>
import preventadb from '../../API/preventa.js'
import ProductAutocomplete from '../../components/Global/ProductAutocomplete.vue'

/**
 * 
 * mapear 
 * 
 * 
*/


export default {
    // name: 'PageName',
    components:{ ProductAutocomplete:ProductAutocomplete },
    data(){
        return {
            moreopts:false,
            index:undefined,
            wndAOE:{
                state:false,//muestra o no el modal
                product:undefined,//almacena el producto sobre el que se trabaja
                params:{
                    amount:1,//cantidad
                    units:0,//unidades
                    boxes:0,//cajas
                    type:'std',//tipo de producto
                    prices:[],//precios utilizados
                    pricelist:null,//lista de precios utilizado
                    price:0,//total por precio unitario
                    total:0,//total del producto por precio unitario,
                    stock:0,//stock al consultar el producto,
                    comments:''//notas del producto
                },
                actions:{
                    done:{dis:false,save:false},
                    cancel:{dis:false},
                    remove:{dis:false,rem:false}
                },
                action:'a'
            },
            dbproducts:[],
            metsupply:{
                model:{alias:'Piezas', id: 1},
                opts:[
                    {alias:'Piezas', id:1},
                    {alias:'Docenas', id:2},
                    {alias:'Cajas', id:3}
                ]
            },
            priceLists:{
                model:{id:1, name:"Menudo", alias:"MEN"},
                opts:[
                    { id:1, name:"Menudo", alias:"MEN" },
                    { id:2, name:"Mayoreo", alias:"MAY" },
                    { id:3, name:"Docena", alias:"DOC" },
                    { id:4, name:"Caja", alias:"CAJ" },
                ]
            },
            wndPrinters:{
                state:false,
                devices:{
                    model:null,
                    opts:[]
                },
                next:{loading:false,dis:false}
            }
        }
    },
    async beforeMount() {
        this.$store.commit('Layout/hideToolbarModule');
        this.$q.loading.show({ message:'...' });

        this.index = await preventadb.order(this.ordercatch);
        console.log(this.index);

        this.dbproducts = this.index.products.length ? this.index.products : [];
        this.$q.loading.hide();
        
        let printers = JSON.parse(localStorage.getItem('printers'));
        console.log(printers);
        this.wndPrinters.devices.opts = printers ? printers.filter(printer=>printer.id == 1)[0].printers.map(printer => {printer.selected = false; return printer;}) : [];
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    methods:{
        selprod(product,opt='a'){
            if(this.currentStep.id==1){
                this.wndAOE.product = product;
                let type = this.productType();

                if(type.type!='err'){
                    this.wndAOE.action = opt;// define si se agrega o edita el producto
                    this.wndAOE.params.type = type.type;// define el si el producto es oferta o standard
                    this.wndAOE.params.prices = type.prices;// asigna los a utilizar
                    
                    if(this.wndAOE.action=='e'){
                        this.wndAOE.params.amount = this.wndAOE.product.ordered.amount;
                        this.metsupply.model = this.metsupply.opts.filter(met=>met.id==this.wndAOE.product.ordered._supply_by)[0];
                        this.wndAOE.params.comments = product.ordered.comments;// asigna los a utilizar
                    }

                    this.wAOEcalcs();//calcular totales del producto
                    this.wndAOE.state = true;//despliega el modal para mostrar datos procesados dle producto
                }else{ this.$q.notify({ message:type.msg, color:'negative', icon:'far fa-dizzy', position:'center' }); }
            }
        },
        async archive(){
            this.$q.loading.show({message:'Archivando pedido...'});
            let data = { "_order": this.ordercatch.id }
            let resp = await preventadb.archive(data);

            console.log(resp);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
            }else{
                this.$q.notify({ message:'Archivado correcto!!', color:'positive', icon:'done' });
                this.$router.push('/preventa');
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
        ctrlPzsUp(){
            this.wndAOE.params.amount++;//incrementar el amount
            this.wAOEcalcs();
        },
        ctrlPzsDown(){ 
            if(this.wndAOE.params.amount > 1){
                this.wndAOE.params.amount--;
                this.wAOEcalcs();
            }
        },
        cleanWndAOE(){
            this.wndAOE.product=undefined;
            this.wndAOE.action='a';
            this.wndAOE.params.amount=1;
            this.wndAOE.params.units=0;
            this.wndAOE.params.boxes=0;
            this.wndAOE.params.type='std';
            this.wndAOE.params.prices=[];
            this.wndAOE.params.pricelist=null;
            this.wndAOE.params.price=0;
            this.wndAOE.params.total=0;
            this.wndAOE.params.stock=0;
            this.wndAOE.params.comments='';

            this.wndAOE.actions.done.dis=false;
            this.wndAOE.actions.done.save=false;
            this.wndAOE.actions.cancel.dis=false;

            this.metsupply.model = {alias:'Piezas', id: 1};
        },
        wAOEcalcs(){//calculo de totales de ventana de agregar o editar
            let prices = this.wndAOE.params.prices;
            let uprice = null;

            switch (this.metsupply.model.id) {
                case 2://calcular precio por docenas
                    uprice = prices.filter(pl=>pl.id==3)[0];//lista de precio a utilizar
                    this.wndAOE.params.price = uprice.price;//precio a utilizar
                    this.wndAOE.params.units = this.wndAOE.params.amount*12;//amount x 12 piezas => unidades totales
                    this.wndAOE.params.boxes = (this.wndAOE.params.units/this.wndAOE.product.pieces).toFixed(1);//unidades totales / (innerpack) => cajas
                break;

                case 3://calculando por cajas
                    uprice = prices.filter(pl=>pl.id==4)[0];//lista de precios a usar
                    this.wndAOE.params.price = uprice.price;//precio a utilizar
                    this.wndAOE.params.units = this.wndAOE.params.amount*this.wndAOE.product.pieces;//amount * piezas x caja => unidades totales
                    this.wndAOE.params.boxes = this.wndAOE.params.amount;//cajas
                break;
            
                default://calcular por piezas
                    if(this.wndAOE.params.type=='off'){//es oferta?
                        uprice = prices[0];
                    }else if(this.wndAOE.params.amount<3){//es menudeo ?
                        uprice = prices.filter(pl=>pl.id==1)[0];
                    }else if(this.wndAOE.params.amount>=3){//es mayoreo ?
                        uprice = prices.filter(pl=>pl.id==2)[0];
                    }

                    this.wndAOE.params.price = uprice.price;//precio utilizado
                    this.wndAOE.params.units = this.wndAOE.params.amount;//total de unidades 
                    this.wndAOE.params.boxes = Math.floor(this.wndAOE.params.amount/this.wndAOE.product.pieces);// cajas
                break;
            }
            
            this.wndAOE.params.total = uprice.price*this.wndAOE.params.units;// precio utilizado * unidades totales => total
        },
        productType(_product=null){//
            let product = _product ? _product : this.wndAOE.product;//determina si trabaja con un producto o el producto asignado al ventana modal
            let product_proc = { type:null, prices:[], msg:null };//valores iniciales a retornar

            if(this.client.type=='STD'){//es un cliente precio publico?
                let prices = product.prices;//obtiene los precios del producto

                if( (prices.length) && (prices.reduce((amm,item)=>{ return amm+item.price},0)) ){//averigua si hay precios en el prodcuto
                        let basePrice = prices[0].price;// obtiene el primer precio para comparar
                        let isOffer = prices.filter(item => item.id<=4 ).filter(item => basePrice==item.price).length==prices.length;//averigua si el precio es oferta

                        //determinar el numero de saber el metodo de surtido
                        product_proc.type = isOffer ? 'off':'std';// averigua si es oferta o no
                        product_proc.prices = prices;//asignar las listas de precios utilizadas

                        return product_proc;
                }else{ //si no hay precios, devuelve un error para notificar al usuario
                    product_proc.msg = 'Vaya!!, este producto no tiene precios aun';
                    product_proc.type = 'err';
                    return product_proc;
                }
            }else{ //trabajar con lista de precio del cliente (cuando este lista)

            }
        },
        async doneAOE(){
            console.log("Aplicando...");
            this.wndAOE.actions.done.dis=true;
            this.wndAOE.actions.done.save=true;
            this.wndAOE.actions.cancel.dis=true;

            let data = {
                "_product": this.wndAOE.product.id,
                "_order": this.ordercatch.id,
                "_supply_by": this.metsupply.model.id ,
                "amount": this.wndAOE.params.amount,
                "comments": this.wndAOE.params.comments
            }

            let pvresp = await preventadb.add(data);

            if(pvresp.err){
                console.log(pvresp.err);
            }else{
                console.log(pvresp.resp);

                if(this.wndAOE.action=='a'){
                    this.dbproducts.unshift(pvresp.resp);
                }else{
                    let idx = this.dbproducts.findIndex(item=>item.code==pvresp.resp.code);
                    this.dbproducts[idx].ordered = pvresp.resp.ordered;
                }

                this.wndAOE.state=false;
            }
        },
        cancelAOE(){
            console.log("cancel AOE");
            this.wndAOE.state=false;
        },
        async nextStep(step=null){
            this.wndPrinters.next.loading=true;
            this.wndPrinters.next.dis=true;

            this.$q.loading.show({ message:'Enviando...' });

            let data = {
                "_order": this.ordercatch.id,
                "_printer": this.wndPrinters.devices.model.id
            }

            let resp = await preventadb.nextStep(data);

            if(resp.err){
                this.$q.notify({ message:resp.err, color:'negative', icon:'fas fa-exclamation-triangle' });
            }else{
                this.$router.push('/preventa/pedidos');
                this.$q.loading.hide();
                this.$q.notify({ message:'Enviado!', color:'positive', icon:'done' });
            }
        },
        selPrinter(pid){
            // console.log(pid);
            this.wndPrinters.devices.opts.forEach(print => { 
                if (print.id==pid) {
                    console.log("aca esta la chida",print.name);
                    print.selected = true;
                    this.wndPrinters.devices.model=print;
                }else{ print.selected = false; }
            });
        }
    },
    computed: {
        ordercatch(){ return this.$route.params },
        client(){ 
            if(this.index){
                return this.index._client ? { type:'REG', name:'Peter Parker', id:115 } : { type:'STD', name:this.index.name }; 
            }else{ return {type:'STD'}; }
        },
        basket(){
            return this.dbproducts.map(item => {
                let _methsupply = this.metsupply.opts.filter(met=>met.id==item.ordered._supply_by)[0];
                item.cant = (item.ordered.amount)+' '+(_methsupply.alias);
                item.type = this.productType(item).type;
                item.uprice = item.ordered.price;
                item.ppp = item.ordered.units; //piezas por producto (en base al metsupply)
                item.total = item.ordered.units*item.ordered.price;
                return item;
            });
        },
        totaltkt_pay(){ return this.basket.reduce((amm,item)=>{ return amm+item.total},0); },
        totaltkt_pzs(){ return this.basket.reduce((amm,item)=>{ return amm+item.ppp},0); },
        currentStep(){ return this.index ? this.index.status : null },
    },
}
</script>
<style lang="scss" scoped>
    .fieldcant{
        width: 120px;
        padding: none;
        margin: none;
        font-size: 1.8em;
        background: none;
        outline: greenyellow;
        color:white;
        margin: auto auto;
        border:none;

        &:focus{ background: rgba(#FFF,.06); }
    }

    .divimg{
        width: 140px;
        height: 140px;
    }
</style>
