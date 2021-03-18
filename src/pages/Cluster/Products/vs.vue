<template>
    <div>
        <q-card class="bg-darkl1 text-grey-4">
            <q-card-section>
                <ProductAutocomplete @input="selected"/>
            </q-card-section>
        </q-card>

        <template v-if="table.products.length">
            <div class="q-mt-md">
                <q-table dark
                    card-class="bg-darkl1"
                    :data="table.products"
                    :columns="table.columns"
                >
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="code" :props="props">
                                <div class="text-left">
                                    <div>{{ props.row.code }}</div>
                                    <div class="text-grey-5 text--2">{{ props.row.description }}</div>
                                </div>                                
                            </q-td>
                            <q-td key="datecreate" :props="props">{{ props.row.created }}</q-td>
                            <q-td key="lastbuy" :props="props">{{ props.row.lastbuy }}</q-td>
                            <q-td key="ppc" :props="props">{{ props.row.pieces }}</q-td>
                            <q-td key="reference" :props="props">{{ props.row.paymet.alias }}</q-td>
                            <!--<q-td key="models" :props="props">{{ props.row.products.length }}</q-td>
                            <q-td key="total" :props="props">$ {{ formatcant(props.row.total) }}</q-td> -->
                        </q-tr>
                    </template>
                </q-table>
            </div>
        </template>

        <template v-else>
            <div class="text-center q-pa-lg text-grey-8">
                <q-icon name="fas fa-mug-hot" size="70px"/>
            </div>
        </template>
    </div>
</template>

<script>

import productAutocomplete from '../../../components/Global/ProductAutocomplete'

export default {
    components:{
        ProductAutocomplete:productAutocomplete
    },
    data() {
        return {
            table:{
                products:[],
                columns:[
                    { name:'code', label:'Articulo', align:'center', field: row=>row.code, sortable:true },
                    { name:'datecreate', label:'Ingreso', align:'center', field: row=>row.created, sortable:true },
                    { name:'lastbuy', label:'Ultima Compra', align:'center', field: row=>row.lastbuy, sortable:true },
                    { name:'ppc', label:'Piezas X Caja', align:'center', field: row=>row.pieces, sortable:true },
                    { name:'ref', label:'Referencia', align:'center', field: row=>row.created, sortable:true } 
                ],
            }
        }
    },
    methods: {
        selected(item){ 
            console.log(item);

            item.created = "2017-03-01";
            item.lastbuy = "2020-05-06";

            this.table.products.unshift(item);
        }
    },
}
</script>