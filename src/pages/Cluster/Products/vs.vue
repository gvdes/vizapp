<template>
    <div>
        <q-card flat class="bg-darkl1 text-grey-4">
            <q-card-section>
                <div class="row items-center justify-between">
                    <div><ProductAutocomplete @input="selected"/></div>
                    <div>Periodo</div>
                </div>
            </q-card-section>
        </q-card>

        <template v-if="table.products.length">

            <div class="q-mt-md">
                <q-card class="q-mb-md bg-darkl1">
                    <div class="q-pa-md row items-center text-center">
                        <div class="col-1">Producto</div>
                        <div class="col-3" v-for="(art,idx) in articles" :key="idx">
                            <div class="text-h6">{{art.code}}</div>
                            <div class="text-grey-6 text--2">{{art.descr}}</div>
                            <div class="text-white">{{art.ref}}</div>
                        </div>
                    </div>
                </q-card>

                <!-- <q-card class="q-mb-md bg-darkl1">
                    <div class="q-pa-md row items-center">
                        <div class="col-1 text-center">Ingreso</div>
                        <div class="col-3 text-center text-white" v-for="(entrie,idx) in entries" :key="idx">
                            <div>{{entrie}}</div>
                            <div class="text-grey-6 text--2">hace "x" tiempo</div>
                        </div>
                    </div>
                </q-card> -->

                <q-card class="q-mb-md bg-darkl1">
                    <div class="q-pa-md row items-center">
                        <div class="col-1 text-center">Piezas por Caja</div>
                        <div class="col-3 text-center text-white" v-for="(ipack,idx) in ipacks" :key="idx">
                            <div>{{ipack}}</div>
                        </div>
                    </div>
                </q-card>

                <q-card class="q-mb-md bg-darkl1">
                    <div class="q-pa-md row items-center">
                        <div class="col-1 text-center">Compras a CEDIS</div>
                        <div class="col-3 text-center text-green-13" v-for="(buy,idx) in buys" :key="idx">
                            <div>{{buy}}</div>
                        </div>
                    </div>
                </q-card>

                <q-card class="q-mb-md bg-darkl1">
                    <div class="q-pa-md row items-center">
                        <div class="col-1 text-center">Primer Compra</div>
                        <div class="col-3 text-center text-green-13" v-for="(fbuy,idx) in firstbuys" :key="idx">
                            <q-chip color="primary" text-color="white" icon="event" size="sm">
                                {{fbuy.date}}
                            </q-chip>
                            <q-chip color="teal" text-color="white" icon="attach_money" size="sm">
                                {{fbuy.cost}}
                            </q-chip>
                            <q-chip color="purple-9" text-color="white" icon="fas fa-box-open" size="sm">
                                {{fbuy.units}} pzs, ({{fbuy.boxes}} cajas)
                            </q-chip>
                        </div>
                    </div>
                </q-card>

                <q-card class="q-mb-md bg-darkl1">
                    <div class="q-pa-md row items-center">
                        <div class="col-1 text-center">Ultima Compra</div>
                        <div class="col-3 text-center text-green-13" v-for="(lbuy,idx) in lastbuys" :key="idx">
                            <q-chip color="primary" text-color="white" icon="event" size="sm">
                                {{lbuy.date}}
                            </q-chip>
                            <q-chip color="teal" text-color="white" icon="attach_money" size="sm">
                                {{lbuy.cost}}
                            </q-chip>
                            <q-chip color="purple-9" text-color="white" icon="fas fa-box-open" size="sm">
                                {{lbuy.units}} pzs, ({{lbuy.boxes}} cajas)
                            </q-chip>
                        </div>
                    </div>
                </q-card>

                <div class="q-mb-md">
                    <div class="q-pa-md row items-center">
                        <div class="col-1 text-center">Consumo por sucursal</div>
                        <q-card class="col-3 bg-darkl1" v-for="(serie,idx) in series" :key="idx">
                            <apexchart dark type="bar" height="250" widht="300" :options="chartOptions" :series="serie" />
                        </q-card>
                    </div>
                </div>
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
// importar productos desde un excel
// 
import productAutocomplete from '../../../components/Global/ProductAutocomplete'
import apexcharts from 'vue-apexcharts'

export default {
    components:{
        ProductAutocomplete:productAutocomplete,
        apexchart:apexcharts
    },
    data() {
        return {
            table:{
                products:[],
                columns:[
                    { name:'code', label:'Articulo', align:'center', field: row=>row.code, sortable:true },
                    { name:'ppc', label:'Piezas X Caja', align:'center', field: row=>row.pieces, sortable:true },
                    { name:'datecreate', label:'Ingreso', align:'center', field: row=>row.created, sortable:true },
                    { name:'firstbuy', label:'Primer Compra', align:'center', field: row=>row.firstbuy, sortable:true },
                    { name:'firstcost', label:'Primer costo', align:'center', field: row=>row.firstcost, sortable:true },
                    { name:'lastbuy', label:'Ultima Compra', align:'center', field: row=>row.lastbuy, sortable:true },
                    { name:'lastcost', label:'Ultimo costo', align:'center', field: row=>row.lastcost, sortable:true },
                    { name:'nbuys', label:'# Compras', align:'center', field: row=>row.buys, sortable:true }, 
                    { name:'ref', label:'Referencia', align:'center', field: row=>row.ref, sortable:true }, 
                    { name:'tcc', label:'TCC', align:'center', field: row=>row.tcc, sortable:true }, 
                    { name:'tpc', label:'TPC', align:'center', field: row=>row.tpc, sortable:true },
                    { name:'requests', label:'# veces pedido', align:'center', field: row=>row.requests, sortable:true },
                    { name:'suplies', label:'# veces surtido', align:'center', field: row=>row.suplies, sortable:true }, 
                ],
            },
            chartOptions: {
                chart: { height: 250, type: 'bar', background:'none' },
                stroke:{ colors:['#2D3035'] },
                theme:{ palette: 'palette8', mode: 'dark' },
                grid:{borderColor: '#57606f',},
                toolbar: { show: false },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: { enabled: false },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: [ 'AP1', 'AP2', 'BR1', 'BR2', 'CO1', 'CO2', 'RC1', 'RC2', 'BOL'],
                },
            }
        }
    },
    methods: {
        selected(item){ 
            console.log(item);

            item.created = "2017-03-01";//fecha de alta del producto
            item.buys = 5;// numero de veces comprado
            item.firstbuy={date:"2020-03-20",cost:135.00, units:600, boxes:50};//primer compra
            item.lastbuy={date:"2020-03-20",cost:150.00, units:500, boxes:50};//ultima compra
            item.ref = 'linea';// estatus
            item.tcc = 28;//total de cajas compradas
            item.tuc = (item.pieces*item.tcc); //total de cajas compradas
            item.requests = 150//total de veces pedido
            item.suplies = 120//total de veces surtido
            item.series = [{
                name: 'Consumo',
                data: [ 2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 0 ]
            }]

            this.table.products.push(item);
        },
    },
    computed:{
        articles(){ return this.table.products.map(p=>{return {code:p.code,descr:p.description, ref:p.ref}}); },
        entries(){ return this.table.products.map(p=>{return p.created}); },
        ipacks(){ return this.table.products.map(p=>{return p.pieces}); },
        buys(){ return this.table.products.map(p=>{return p.buys}); },
        firstbuys(){ return this.table.products.map(p=>{return p.firstbuy}); },
        lastbuys(){ return this.table.products.map(p=>{return p.lastbuy}); },
        series(){ return this.table.products.map(p=>{return p.series}); },
    }
}
</script>