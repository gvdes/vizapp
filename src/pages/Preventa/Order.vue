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
                    <q-chip color="dark">
                        <q-avatar color="dark" text-color="white">M</q-avatar>
                        <span class="text-green-13">130</span>
                    </q-chip>
                    <q-chip color="dark">
                        <q-avatar color="dark" text-color="white">P</q-avatar>
                        <span class="text-green-13">621</span>    
                    </q-chip>
                </div>
                
                <div class="col text-right text-green-13 text-h6 q-pr-sm">$ 0.00</div>
            </div>
        </q-header>

        <q-dialog v-model="wndAOE.state" position="bottom">
            <q-card v-if="wndAOE.product" class="exo bg-darkl0 text-grey-4">
                <q-card-section>
                    <div class="row justify-between items-end">
                        <div class="text-h6 text-green-13">{{wndAOE.product.code}}</div>
                    </div>
                    <div class="text--2">{{wndAOE.product.description}}</div>
                </q-card-section>

                <div>
                    <template v-if="wndAOE.type=='std'">
                        <div class="text-center row justify-between q-px-md">
                            <div v-for="prc in wndAOE.product.prices" :key="prc.id" class="q-px-md">
                                <div class="text--2">{{prc.alias}}</div>
                                <div class="text-bold">$ {{prc.price}}</div>
                            </div>
                        </div>
                    </template>

                    <template v-if="wndAOE.type=='off'">
                        <div class="text-center text-bold text-orange">
                            <div>OFERTA</div>
                            <div class="text-h4">
                                $ {{wndAOE.product.prices[0].price}}</div>
                            </div>
                    </template>

                    <div class="q-mt-lg row items-end">
                        <div class="text-center">
                            <div class="column">
                                <q-btn icon="fas fa-chevron-up" class="q-py-xs" @click="ctrlPzsUp" flat/>
                                <div class="text-center col column q-py-md">
                                    <input type="number" min="1" v-model="wndAOE.amount" class="text-center exo fieldcant"/>
                                </div>
                                <q-btn icon="fas fa-chevron-down" class="q-py-xs" @click="ctrlPzsDown" flat/>
                            </div>
                        </div>
                        <div class="col">
                            <q-markup-table dark flat dense square class="col q-mx-md bg-none text-grey-5">
                                <tbody>
                                    <tr>
                                        <td colspan="2"><q-select label="Surtir por" borderless dense dark color="green-13" v-model="msupply.model" option-value="id" option-label="alias" :options="msupply.opts" /></td>
                                    </tr>
                                    <tr>
                                        <td>Piezas X Caja</td>
                                        <td align="right">{{wndAOE.product.pieces}}</td>
                                    </tr>

                                    <tr>
                                        <td>Cajas</td>
                                        <td align="right">{{wAOEcalcs.boxes}}</td>
                                    </tr>

                                    <tr>
                                        <td>Unidades</td>
                                        <td align="right">{{wAOEcalcs.units}}</td>
                                    </tr>

                                    <tr>
                                        <td>Precio unitario</td>
                                        <td align="right">0</td>
                                    </tr>

                                    <tr>
                                        <td>Total</td>
                                        <td align="right">{{wAOEcalcs.tpu}}</td>
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <q-btn class="col q-py-md" color="green-13" icon="done" :label="wndAOE.action=='a'?'Agregar':'Aplicar'" no-caps flat/>
                    <q-btn class="col q-py-md" color="light-blue-14" icon="close" label="Cancelar" no-caps flat/>
                </div>
            </q-card>
        </q-dialog>

        <q-footer class="bg-darkl1 text-white" elevated>
            <div class="q-pa-xs row justify-between items-center">
                <q-btn icon="fas fa-ellipsis-v" dense flat/>
                <div>
                    <ProductAutocomplete @input="selprod"/>
                </div>
                <q-btn></q-btn>
            </div>
        </q-footer>
	</q-page>
</template>

<script>
import preventadb from '../../API/preventa.js'
import ProductAutocomplete from '../../components/Global/ProductAutocomplete.vue'

export default {
    // name: 'PageName',
    components:{ ProductAutocomplete:ProductAutocomplete },
    data(){
        return {
            index:undefined,
            wndAOE:{
                state:false,
                product:undefined,
                action:'a',
                amount:1,
                units:1,
                type:'std'
            },
            basket:[],
            msupply:{
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
            }
        }
    },
    async beforeMount() {
        this.$store.commit('Layout/hideToolbarModule');
        this.$q.loading.show({ message:'...' });

        this.index = await preventadb.order(this.ordercatch);
        this.$q.loading.hide();
        console.log("respuesta lista");
        console.log(this.index);
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    methods:{
        selprod(product){
            console.log(product);
            this.wndAOE.product = product;
            this.wndAOE.state = true;
            this.wndAOE.type = this.productType();
        },
        ctrlPzsUp(){
            this.wndAOE.amount++;//incrementar el amount
        },
        ctrlPzsDown(){ this.wndAOE.amount > 1 ? this.wndAOE.amount-- : null },
        productType(){
            if(this.client.type=='STD'){
                // return this.wndAOE.model.prices.reduce((amm,pr)=>{ return amm },0);
                return 'off';
            }else{
                return 0;
            }
        }
    },
    computed: {
        ordercatch(){ return this.$route.params },
        client(){ 
            if(this.index){
                return this.index._client ? { type:'REG', name:'Peter Parker', id:115 } : { type:'STD', name:this.index.name }; 
            }else{ return {type:'STD'}; }
        },
        wAOEcalcs(){
            let values = { boxes:0, units:0, tpu:0 };

            if(this.wndAOE.model){

                // values.type = this.productType();
                values.tpu = this.wndAOE.amount
                return values;
            }else{ return values;}
        },
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
</style>
