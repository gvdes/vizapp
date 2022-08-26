<template>
    <div>
        <div class="row justify-center q-gutter-md items-center q-my-lg text-h6">
            <span>Resumen</span>
            <span class="text-green-13">{{branch.main.alias}}</span>
            <q-btn icon="fas fa-broom" flat color="green-13" dense rounded @click="closeBranch"/>
        </div>

        <div class="row items-start justify-center q-gutter-md">
            <div>
                <q-card class="bg-darkl1 text-grey-6 q-mb-md">
                    <q-card-section>
                        <div class="text-h4 text-green-13">$ {{formatcant(branch.main.venta)}}</div>
                        <div class="text-caption">Venta</div>
                    </q-card-section>
                </q-card>

                <q-card class="bg-darkl1 text-grey-6 q-mb-md">
                    <q-card-section>
                        <div class="text-h4 text-light-blue-13">{{formatcant(branch.main.tickets)}}</div>
                        <div class="text-caption">Operaciones</div>
                    </q-card-section>
                </q-card>

                <q-card class="bg-darkl1 text-grey-6">
                    <q-card-section>
                        <div class="text-h4 text-light-blue-13">$ {{formatcant(branch.main.ticket_promedio)}}</div>
                        <div class="text-caption">Ticket Promedio</div>
                    </q-card-section>
                </q-card>
            </div>

            <q-card class="bg-darkl1 text-grey-6">
                <q-card-section>
                    <div class="text-caption">Metodos de Pago</div>
                </q-card-section>
                <q-separator />
                <div class="q-py-md">
                    <apexchart ref="chart_paymethods" type="donut" :options="chartPayMethodsOptions" :series="payMethodsSeries" />
                </div>
            </q-card>            
        </div>

        <div class="q-mt-md row items-start justify-center q-gutter-md">
            <q-card class="col-md-3 col-xs-10 bg-darkl1" v-for="cash in cashdesks" :key="cash.id">
                <q-card-section class="text-uppercase text-bold">{{cash.name}}</q-card-section>
                <div class="row text-right q-pr-md">
                    <div class="col text-light-blue">
                        <div class="text-h5">{{cash.sales.length}}</div>
                        <div>Operaciones</div>
                    </div>
                    <div class="col text-green-13">
                        <div class="text-h5">$ {{cashdeskSale(cash.sales)}}</div>
                        <div>Total</div>
                    </div>
                </div>
                <q-card-section>
                    <chunksbar :chunks="cashdeskChunks(cash.sales)"/>
                </q-card-section>
            </q-card>
        </div>

        <div class="q-mt-lg">
            <tabletkts :tickets="ticketLists" @selectedrow="tktViewer"/>
        </div>

        <q-dialog v-model="wndTktViewer.state" @hide="wndTktViewer.head=null">
            <template v-if="wndTktViewer.head">
                <ticket :head="wndTktViewer.head" :body="wndTktViewer.body"/>
            </template>
        </q-dialog>
    </div>
</template>
<script>
import apexcharts from 'vue-apexcharts'
import cluster from '../../API/cluster'
import chunksbar from '../../components/Global/Chunksbar.vue'
import tabletkts from '../../components/Sales/TableTkts.vue'
import ticket from '../../components/Sales/Ticket.vue'
export default {
    components:{
        apexchart:apexcharts,
        chunksbar:chunksbar,
        tabletkts:tabletkts,
        ticket:ticket
    },
    props:{
        branch:{type:Object}
    },
    data(){
        return{
            loadingComponent:false,
            chartPayMethodsOptions:{
                chart: { type: 'donut',background:'none' },
                toolbar: { show: false },
                theme:{mode:'dark',palette:'palette10'},
                stroke:{colors:['#57606f'],width:1},
                labels: [],
                tooltip:{
                    y:{ formatter: val => { return '$ '+this.formatcant(val) } }
                }
            },
            wndTktViewer:{state:false,head:null,body:null}
        }
    },
    updated(){
        // console.log("El componente ha cambiado!!!");
        let paymethodsLabels = this.branch.main.metodos_pago.map(item=>{ return item.alias; });
        this.$refs.chart_paymethods.updateOptions({ labels: paymethodsLabels });
    },
    methods: {
        closeBranch(){ this.$emit("closeBranch"); },
        tktViewer(data){
            console.log("Se ha seleccionado una flia!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(data);
            this.wndTktViewer.head  = {
                name:this.branch.main.name,
                alias:this.branch.main.alias,
                folio:data.num_ticket,
                date:data.created_at,
                paymet:data.paymet,
                totaltkt:data.total,
                cashdesk:data.cashdesk
            }
            this.wndTktViewer.body  = data.products;
            this.wndTktViewer.state = true;
        }
    },
    computed:{
        formatcant(){ return cant => { return new Intl.NumberFormat("es-MX").format(cant); } },
        payMethodsSeries(){ return this.branch.main.metodos_pago.map(item=>{ return item.total }); },
        cashdesks(){ return this.branch.store.workpoint.cajas; },
        ticketLists(){
            let list = [];
            this.cashdesks.filter( c => c.id!=61 ).forEach(item=>{
                item.sales.forEach(_item=>{
                    _item.cashdesk = item.name;
                    _item.paymet = this.branch.main.metodos_pago.filter(pm=>{return pm.id==_item._paid_by})[0];
                    list.push(_item);
                });
            });
            return list;
        },
        cashdeskSale(){
            return sales => {
                return this.formatcant(sales.reduce((amu,tkt)=>{ return amu+tkt.total; },0));
            }
        },
        cashdeskChunks(){
            return sales =>{
                let chunks = [];
                this.branch.main.metodos_pago.forEach(paymet=>{
                    let total = sales.filter(_item=>_item._paid_by==paymet.id).reduce((amount,tkt)=>{
                        return amount+tkt.total;
                    },0);
                    chunks.push({size:total,label:paymet.alias});
                });
                return chunks;
            }
        }
    },
    destroyed() {
        console.log("El componente ha sido destruido");
    },
}
</script>