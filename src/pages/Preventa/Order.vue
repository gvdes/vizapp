<template>
	<q-page padding>
		<q-header elevated class="bg-darkl0">
            <div class="row items-stretch justify-between">
                <q-btn @click="$router.push('/preventa')" flat icon="close"/>

                <div class="row items-center col bg-dark divlcient">
                    <div class="q-pa-sm col text-center">
                        <div class="text--2">Cliente:</div>
                        <div class="text-uppercase">
                            <q-icon v-if="client.type!='STD'" name="fas fa-medal" class="q-mr-sm"/> {{ client.type == 'STD'? client.name : `${client.name} (${client.id})` }}
                        </div>
                    </div>

                    <div class="q-pa-sm col text-center">
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
                        <div class="text--2">Unidades</div>
                        <span class="text-green-13 text-bold">{{totaltkt_pzs}}</span>
                    </div>

                    <div class="q-px-md">
                        <div class="text--2">Cajas</div>
                        <span class="text-green-13 text-bold">0</span>
                    </div>                    
                </div>

                <div class="col text-right q-px-sm">
                    <div class="text--2">Total</div>
                    <div class="text-green-13 text-h6 text-bold">$ {{totaltkt_pay}}</div>
                </div>
            </div>
        </q-header>

        <q-drawer v-model="ldrawer.state" side="right" content-class="text-grey-5 bg-darkl0" @hide="startremove.state=false">
            <div class="q-pa-md">
                <q-btn label="Archivar Pedido" icon="delete" color="negative" no-caps @click="startremove.state=true" v-if="!startremove.state"/>
                <div v-else>
                    <div class="q-mb-md">Archivar pedido?</div>
                    <span class="col row q-gutter-md">
                        <q-btn no-caps label="Si" class="col" color="negative" @click="archive"/>
                        <q-btn no-caps label="No" class="col" color="primary" @click="startremove.state=false"/>
                    </span>
                </div>
            </div>
            <q-separator/>
        </q-drawer>

        <div v-if="basket.length" class="q-mb-xl q-mt-sm">
            <q-table grid flat dark
                row-key="id"
                :columns="tableproducts.columns"
                :data="basket"
                :pagination="tableproducts.pagination"
            >
                <template v-slot:item="props">
                    <div class="q-pa-sm col-xs-12 text-grey-4 col-sm-6 col-md-4 col-lg-3">
                        <q-card class="bg-darkl1" @click="setprod(props.row,'e')">
                            <!-- {{ props.row }} -->
                            <div class="full-width row ds">
                                <div>
                                    <div class="text-center text-white text-bold q-pa-sm">{{props.row.code}}</div>
                                    <q-img src="https://image.flaticon.com/icons/png/512/578/578158.png" class="divimg" />
                                </div>
                                <div class="col text-grey-4 text--2 q-px-sm column justify-around">
                                    <div class="text-white text-bold q-pt-sm">CC: {{props.row.name}}</div>
                                    <div class="text-grey-5">{{props.row.description}}</div>
                                    <div class="row justify-between"><span>Cantidad:</span><span>{{props.row.cant}}</span></div>
                                    <div class="row justify-between"><span>Piezas X Caja:</span><span>{{props.row.pieces}}</span></div>
                                    <div class="row justify-between"><span>Unidades:</span><span>{{props.row.ppp}}</span></div>
                                    <div class="row justify-between"><span>Precio Unitario:</span><span>$ {{props.row.uprice}}</span></div>
                                    <div class="row justify-between text-bold"><span>Total: </span><span class="text-h6 text-green-13"> $ {{props.row.total}}</span></div>
                                </div>
                            </div> 
                        </q-card>
                    </div>
                </template>

                <template v-slot:bottom="scope">
                    <q-page-sticky position="bottom-left" class="full-width" :offset="[10, 5]">
                        <div class="row q-pt-xs">
                            <!-- <div round class="text--2 text-white bg-teal q-py-xs q-px-md shadow-1" style="border-radius:20px;">
                                <div>Pagina: <span class="text-teal-10 text-bold">{{scope.pagination.page}}</span> de <span class="text-teal-10 text-bold">{{scope.pagesNumber}}</span></div>
                                <div>Ordenes por pagina: <span class="text-teal-10 text-bold">{{scope.pagination.rowsPerPage}}</span></div>
                            </div> -->

                            <q-btn-group rounded class="bg-dark text-white">
                                <q-btn v-if="scope.pagesNumber > 2" icon="first_page" round dense flat :disable="scope.isFirstPage" @click="scope.firstPage" class="q-px-sm"/>
                                <q-btn icon="chevron_left" round dense flat :disable="scope.isFirstPage" @click="scope.prevPage" class="q-px-sm"  />
                                <q-btn flat disable no-caps>{{scope.pagination.page}} / {{scope.pagesNumber}}</q-btn>
                                <q-btn icon="chevron_right" round dense flat :disable="scope.isLastPage" @click="scope.nextPage" class="q-px-sm" />
                                <q-btn v-if="scope.pagesNumber > 2" icon="last_page" round dense flat @click="scope.lastPage" class="q-px-sm" />
                            </q-btn-group>
                        </div>
                    </q-page-sticky> 
                </template>
            </q-table>
        </div>
        
        <q-dialog v-model="wndAOE.state" position="bottom" @hide="cleanWndAOE">
            <q-card v-if="wndAOE.product" class="exo bg-darkl0 text-grey-4">
                <q-card-section>
                    <div class="row justify-between items-start text-h6 text-bold">
                        <div class="text-green-13">{{wndAOE.product.code}}</div>
                        <div class="text-light-blue-13">{{wndAOE.product.name}}</div>
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
                                <div v-if="wndAOE.product.stocks">
                                    <q-btn flat dense no-caps class="text-bold"
                                        :color="wndAOE.product.stocks[0].stock?'green-13':'amber-13'"
                                        :label="`Stock: ${wndAOE.product.stocks[0].stock}`"
                                    />
                                </div>
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
                <q-separator />
                <div class="row">
                    <q-btn class="col q-py-md" color="green-13" icon="done" :label="wndAOE.action=='a'?'Agregar':'Aplicar'" no-caps flat @click="doneAOE" :loading="wndAOE.actions.done.save" :disable="wndAOE.actions.done.dis"/>
                    <q-btn v-if="wndAOE.action=='e'" class="col q-py-md" color="amber-13" icon="delete" label="Remover" no-caps flat @click="remove" :loading="wndAOE.actions.remove.rem" :disable="wndAOE.actions.remove.dis"/>
                    <q-btn class="col q-py-md" color="light-blue-14" icon="close" label="Cancelar" no-caps flat @click="cancelAOE"/>
                </div>
            </q-card>
        </q-dialog>

        <q-dialog v-model="wndPrinters.state" position="bottom">
            <PrinterSelect :options="printers" @clicked="setprinter" title="Continuar" ref="PrinterSelect"/>
        </q-dialog>

        <q-footer class="bg-darkl0 text-white">
            <div class="q-pa-xs row items-center" v-if="currentStep&&currentStep.id==1">
                <div class="col text-center"><ProductAutocomplete @input="setprod"/></div>
                <div class="text-right"><q-btn v-if="basket.length" icon="fas fa-arrow-right" color="green-13" flat @click="wndPrinters.state=true" /></div>
            </div>
        </q-footer>
	</q-page>

    
</template>

<script>
import preventadb from '../../API/preventa.js'
import ProductAutocomplete from '../../components/Global/ProductAutocomplete.vue'
import PrinterSelect from '../../components/Preventa/PinterSelect.vue'

export default {
    // name: 'PageName',
    components:{ ProductAutocomplete, PrinterSelect},
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
                printer:null
            },
            socket:this.$sktPreventa,
            ldrawer:{ state:false },
            startremove:{ state:false },
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
                    sortBy: 'id',
                    descending: false,
                    page: 1,
                    rowsPerPage: 5
                }
			},
        }
    },
    async mounted() {
        this.$store.commit('Preventa/setHeaderState', false);
        this.$store.commit('Preventa/setFooterState', false);

        this.$q.loading.show({ message:'...' });

        this.index = await preventadb.order(this.ordercatch);
        console.log(this.index);

        this.dbproducts = this.index.products.length ? this.index.products : [];
        this.$q.loading.hide();

        this.socket.emit('join', { profile:this.profile, workpoint:this.workin.workpoint, room:`ORD${this.ordercatch.id}` });
    },
    beforeDestroy(){
        this.socket.emit('unjoin', { profile:this.profile, workpoint:this.workin.workpoint, room:`ORD${this.index.id}` });
    },
    methods:{
        sktorder_changestate(data){
            console.log('Una orden ha cambiado...');
            console.log(data);
        },
        setprod(product,opt='a'){
            let openWindow = true;

            if(this.currentStep.id==1){

                if(opt=='a'){//Queremos agregar un producto?
                    let artexist = this.dbproducts.findIndex(art=>art.code==product.code);

                    if(artexist>=0){//producto ya esta en la lista
                        this.$q.notify({ message:`<strong>${product.code}</strong> ya esta en la lista`, html:true, color:'orange-13', icon:'fas fa-exclamation-triangle' });
                        openWindow=false;
                    }else{ console.log("Se agregara el producto en lista"); }
                }

                if(openWindow){
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
                    this.appsounds.added.play();
                }else{
                    let idx = this.dbproducts.findIndex(item=>item.code==pvresp.resp.code);
                    this.dbproducts[idx].ordered = pvresp.resp.ordered;
                    this.appsounds.added.play();
                }

                this.wndAOE.state=false;
            }
        },
        cancelAOE(){
            console.log("cancel AOE");
            this.wndAOE.state=false;
        },
        setprinter(printer){
            this.wndPrinters.printer = printer;
            this.nextStep();
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

                this.socket.emit("order_changestate",{ newstate:newstate, order: ordersend });
                this.appsounds.ok.play();
                this.$router.push('/preventa/');
                this.$q.notify({ message:`Pedido ${data._order} enviado a ${newstate.name}`, color:'positive', icon:'done' });
                this.$q.loading.hide();
            }
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
        appsounds(){ return this.$store.getters['Multimediapp/sounds']; }
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

    .divlcient{
        border-radius:0px 0px 20px 20px;
    }

</style>
