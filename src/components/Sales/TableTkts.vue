<template>
    <q-table dark title="Operaciones"
        card-class="bg-darkl1"
        :data="tickets"
        :columns="columns"
        :pagination="initialPagination"
    >
        <template v-slot:body="props">
            <q-tr :props="props" @click="selectedrow(props.row)">
                <q-td key="folio" :props="props">{{ props.row.num_ticket }}</q-td>
                <q-td key="cashdesk" :props="props">{{ props.row.cashdesk }}</q-td>
                <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                <q-td key="paymet" :props="props">{{ props.row.paymet.alias }}</q-td>
                <q-td key="models" :props="props">{{ props.row.products.length }}</q-td>
                <q-td key="total" :props="props">$ {{ formatcant(props.row.total) }}</q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script>
export default {
    props:{
        tickets:{type:Array}
    },
    data() {
        return {
            columns: [
                // { name:'id', required:true, label:'ID', align:'center', field: row => row.id, sortable:true },
                { name:'folio', label:'Folio', align:'center', field: row => row.num_ticket, sortable:true },
                { name:'cashdesk', label:'Caja', align:'center', field:row => row.cashdesk, sortable:true },
                { name:'name', label:'Cliente', align:'center', field:'name', sortable:true },
                { name:'paymet', label:'Forma de pago', align:'center', field:row=>row.paymet.alias, sortable:true },
                { name:'models', label: 'Modelos', align:'center', field:row=>row.products.length, sortable:true },
                { name:'total', label: 'Total', align:'right', field:row=>row.total, sortable:true },
            ],
            initialPagination: {
                sortBy: 'desc',
                descending: false,
                page: 1,
                rowsPerPage: 10
                // rowsNumber: xx if getting data from a server
            },
        }
    },
    mounted(){
        console.log(this.tickets);
    },
    methods: {
        selectedrow(data){ this.$emit('selectedrow',data); }
    },
    computed:{
        formatcant(){ return cant => { return new Intl.NumberFormat("es-MX").format(cant); } },
    }
}
</script>