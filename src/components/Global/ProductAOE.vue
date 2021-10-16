<template>
    <q-card class="bg-darkl1">
        <!-- HEADER  -->
            <q-card class="bg-none">
                <q-card-section>
                    <div class="row justify-between items-start text-h6 text-bold">
                        <div class="text-green-13">{{product.code}}</div>
                        <div v-if="product.stocks && product.stocks.length">
                            <q-btn flat dense no-caps class="text-bold"
                                :color="product.stocks[0].stock?'green-13':'amber-13'"
                                :label="`Stock: ${product.stocks[0].stock}`"
                            />
                        </div>
                        <div class="text-light-blue-13">{{product.name}}</div>
                    </div>
                    <div class="text--2">{{product.description}}</div>
                </q-card-section>
            </q-card>
        <!-- HEADER 6BRJYThutH  -->

        <!-- BODY  -->

            <div>
                <template v-if="product.stocks && !product.stocks.length">
                    <q-banner class="text-white bg-negative text-center">
                        <q-icon name="fas fa-exclamation-triangle" size="md"/> STOCK INDEFINIDO!! :/
                    </q-banner>
                </template>
                <template v-if="!valprices.state">
                    <q-banner class="text-white bg-negative text-center">
                        <q-icon name="fas fa-exclamation-triangle" size="md"/> {{valprices.msg}}
                    </q-banner>
                </template>
            </div>

        <!-- ACTIONS -->
            <div v-if="valprices.state">
                <template v-if="showprices">
                    <q-card-section class="text-center row justify-between q-px-md" v-if="productType=='std'">
                        <div v-for="prc in prices" :key="prc.id" class="q-px-md q-py-sm" :class="prc.id==usedprice.id ? 'usedprice':'' ">
                            <div class="text--2">{{prc.alias}}</div>
                            <div class="text-bold">$ {{prc.price}}</div>
                        </div>
                    </q-card-section>

                    <q-card-section class="text-center text-bold text-orange" v-if="productType=='off'">
                        <div>OFERTA</div>
                        <div class="text-h4">$ {{prices[0].price}}</div>
                    </q-card-section>
                </template>

                <q-card-section>
                    <div class="row items-end">
                        <div class="text-center">
                            <div class="column">
                                <div class="text-cemter">Cantidad:</div>
                                <q-btn icon="fas fa-chevron-up" class="q-py-xs" @click="ctrlPzsUp" flat/>
                                <div class="text-center col column q-py-md">
                                    <input type="number" min="1" v-model="amount" class="text-center exo fieldcant"/>
                                </div>
                                <q-btn icon="fas fa-chevron-down" class="q-py-xs" @click="ctrlPzsDown" flat/>
                            </div>
                        </div>
                        <div class="col">
                            <q-markup-table flat dense square class="col q-mx-md bg-none text-white">
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <q-select label="Surtir por" :disable="blockunitsupply" borderless dense dark color="green-13" v-model="metsupply.model" option-value="id" option-label="name" :options="metsupply.opts" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <q-input borderless dense dark flat label="Notas" color="green-13" v-model="comments"/>
                                        </td>
                                    </tr>
                                    <tr><td>Piezas X Caja</td><td align="right">{{ipack}}</td></tr>
                                    <tr><td>Cajas</td><td align="right">{{boxes}}</td></tr>
                                    <tr><td>Unidades</td><td align="right">{{units}}</td></tr>
                                    <template v-if="showprices">
                                        <tr><td>Precio unitario</td><td align="right">{{usedprice.price}}</td></tr>
                                        <tr><td>Total</td><td align="right" class="text-green-13 text-bold">{{usedprice.price*units}}</td></tr>
                                    </template>
                                </tbody>
                            </q-markup-table>
                        </div>
                    </div>
                </q-card-section>

                <template v-if="action=='add'">
                    <q-separator/>
                    <q-btn-group spread>
                        <q-btn flat icon="fas fa-check" class="q-py-md" color="green-13" @click="confirm" autofocus/>
                        <q-btn flat icon="fas fa-times" class="q-py-md" color="amber-13" @click="cancel"/>
                    </q-btn-group>
                </template>

                <template v-if="action=='edit'">
                    <q-separator/>
                    <q-btn-group spread flat>
                        <q-btn flat icon="fas fa-check" class="q-py-md" color="green-13" @click="confirm" autofocus/>
                        <q-btn flat icon="fas fa-times" class="q-py-md" color="amber-13" @click="cancel"/>
                        <q-btn flat icon="fas fa-trash" class="q-py-md" color="pink-13" @click="remove"/>
                    </q-btn-group>
                </template>
            </div>
    </q-card>
</template>

<script>
export default {
    props:{
        product:{ type:Object, default:{} },
        client:{ type:Object, default:{} },
        showprices:{ type:Boolean, default:false },
        blockunitsupply:{ type:Boolean, default:false },
        deftunitsupply:{ type:Number, default:null }
    },
    data(){
        return {
            amount:1,
            comments:"",
            metsupply:{
                model:{alias:'PZS', name:'Piezas', id: 1},
                opts:[
                    {alias:'PZS', name:'Piezas', id:1},
                    {alias:'DOC', name:'Docenas', id:2},
                    {alias:'CJS', name:'Cajas', id:3}
                ]
            },
            pricelists:[
                { id:1, alias:'MEN', name:'MENUDEO' },
                { id:2, alias:'MAY', name:'MAYOREO' },
                { id:3, alias:'DOC', name:'DOCENA' },
                { id:4, alias:'CAJ', name:'CAJA' },
            ],
        }
    },
    mounted(){
        if(this.action == 'add'){
            console.log("El producto es para agregar");
            /**
             * seteamos la propiedad de "unidad de surtido por default" si viene depfinida,
             * si no, tomara la unidad del producto por default
             */
            this.metsupply.model = this.deftunitsupply ? 
                                    this.metsupply.opts.find( ms => ms.id == this.deftunitsupply ) : 
                                    this.product.units;
        }else{
            /**
             * Si el producto es para editar, seteamos los datos que ya vienen con el producto
             */
            console.log("El producto es para editar");
            this.amount = this.product.ordered.amount;
            this.comments = this.product.ordered.comments;
            this.metsupply.model = this.metsupply.opts.find( ms => ms.id == this.product.metsupply.id );
        }
    },
    methods:{
        ctrlPzsUp(){ this.amount++; },
        ctrlPzsDown(){ if(this.amount > 1){ this.amount--; } },
        productRemove(){ 
            console.log(this.params);
            this.$emit('confirm',this.params);
        },
        confirm(){ this.$emit('confirm',this.params); },
        cancel(){ this.$emit('cancel',this.params); },
        remove(){ this.$emit('remove',this.params); } 
    },
    computed:{
        valprices(){
            if (this.product) {
                if(this.product.prices.length){
                    let errors = this.product.prices.filter( p => p.price==0 );
                    if (!errors.length) {
                        return {state:true, msg:"Precios validos", prices:this.product.prices }
                    }else{ return { state:false, msg:"No se pudo setear este producto: precios en 0", prices:[], errors:errors } }
                }else{ return {state:false, msg:"No se pudo setear este producto: no hay precios", prices:[] } } 
            }else{ return { state:false, msg:"El componente fallo al setear el producto",prices:[] } }
        },
        prices(){ return this.valprices.prices; },
        pricelistDefault(){ return this.pricelists.find( pl => pl.id==this.client._price_list); },
        productType(){
            if(this.prices.length){
                let basePrice = this.prices[0].price;// obtiene el primer precio para comparar
                let isOffer = this.prices.filter(item => item.id<=4 ).filter(item => basePrice==item.price).length==this.prices.length;//averigua si el precio es oferta
                return isOffer ? 'off':'std'
            }else{ return { error:true, msg:"Producto sin precios" } }
        },
        ipack(){ return this.product.pieces ? this.product.pieces : 1; },
        units(){ //obtiene las unidades en base al metodo de surtido
            // console.log(this.metsupply.model);
            switch (this.metsupply.model.id) {
                case 2: return this.amount*12; //cantidad * 12 
                case 3: return this.amount*this.ipack; //cantidad por piezas por caja
                default: return this.amount;// retornar cantidad325
            }
        },
        boxes(){// obtiene las cajas en base a la unidad de surtido
            // Math.floor(this.amount/this.product.pieces)
            return (this.units/this.ipack).toFixed(1);
        },
        usedprice(){
            switch (this.metsupply.model.id) {
                case 2: return this.prices.find( pl => pl.id==3 ); // se utilizara el precio Docena
                case 3: return this.prices.find( pl => pl.id==4 ); // se utilizara el precio Caja
                default: 
                    if(this.productType=='off'){//es oferta?
                        return this.prices.find( pl => pl.id==1 );
                    }else if(this.amount<3){//es menudeo ?
                        return this.prices.find( pl => pl.id==1 );
                    }else if(this.amount>=3){//es mayoreo ?
                        return this.prices.find( pl => pl.id==2 );
                    }
                break;
            }
        },
        params(){
            return {
                product:this.product,
                comments:this.comments,
                amount:this.amount,
                units:this.units,
                usedprice:this.usedprice,
                metsupply:this.metsupply.model
            }
        },
        action (){
            if (this.product) {
                return this.product.ordered ? 'edit':'add';
            }else { return 'add'; }
        }
    }
}
</script>

<style lang="scss" scoped>
    .fieldcant{
        width: 100px;
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

    .usedprice{
        border-bottom:3px solid #20bf6b;
    }

    .btn_focus button{
        &:focus{
            border: 4px solid #17c0eb !important;
        }
    }
</style>