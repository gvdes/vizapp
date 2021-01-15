<template>
    <q-card class="bg-darkl1 text-grey-5">
        <q-card-section horizontal class="row">
            <q-card-section class="col">
                <span class="text-green-13 text-bold">{{head.cashdesk}}</span><br>
                Folio: <span class="text-grey-3 text-bold">{{head.folio}}</span><br>
                Sucursal: {{head.name}} [ {{head.alias}} ]<br>
                Fecha: {{head.date}}
            </q-card-section>
            <q-card-section class="col text-right">
                Total:<br>
                <span class="text-h6 text-green-13">$ {{formatcant(head.totaltkt)}}</span>
            </q-card-section>
        </q-card-section>
        <q-separator/>
        <q-card-section>
            <q-table :data="body" :columns="columns" flat dark card-class="bg-none text-grey-5">
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td key="largecode" :props="props">{{ props.row.code }}</q-td>
                        <q-td key="shortcode" :props="props">{{ props.row.name }}</q-td>
                        <q-td key="description" :props="props">{{ props.row.description }}</q-td>
                        <q-td key="units" :props="props">{{ props.row.sold.amount }}</q-td>
                        <q-td key="price" :props="props">$ {{ formatcant(props.row.sold.price) }}</q-td>
                        <q-td key="subtotal" :props="props">$ {{ formatcant(props.row.sold.total) }}</q-td>
                    </q-tr>
                </template>
            </q-table>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    props:{
        head:{type:Object},
        body:{type:Array}
    },
    data() {
        return {
            columns:[
                { name:'largecode', label:'Codigo', field:row=>row.code, sortable:true, align:'left' },
                { name:'shortcode', label:'CC', field:row=>row.name, sortable:true, align:'center' },
                { name:'description', label:'Descripcion', field:'description', align:'left' },
                { name:'units', label:'Unidades', field:row=>row.sold.amount, sortable:true, align:'center' },
                { name:'price', label:'P/U', field:row=>row.sold.price, sortable:true },
                { name:'subtotal', label:'Total', field:row=>row.sold.total, sortable:true },
            ]
        }
    },
    computed:{
        formatcant(){ return cant => { return new Intl.NumberFormat("es-MX").format(cant); } },
    }
}
</script>