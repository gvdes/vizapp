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

        <template v-if="loadingComponent">
            <div class="text-center text-green-13">
                <q-spinner-dots size="4em"/>
                <div>Cargando datos, espere...</div>
            </div>
        </template>
        <template v-else>
            <div>{{this.tienda}}</div>
        </template>

    </div>
</template>
<script>
import apexcharts from 'vue-apexcharts'
import cluster from '../../API/cluster'
export default {
    components:{
        apexchart:apexcharts
    },
    props:{
        branch:{type:Object},
        rangesData:{type:Object}
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
            tienda:undefined
        }
    },
    beforeMount() {
        console.log("Cargando componente de resumen de tienda");
    },
    mounted(){
        // console.log("Componente montado...!!!");
        // console.log(this.branch);

        // let paymethodsLabels = this.branch.main.metodos_pago.map(item=>{ return item.alias; });
        //     this.$refs.chart_paymethods.updateOptions({ labels: paymethodsLabels });
        //     this.getBranch();
    },
    updated(){
        console.log("El componente ha cambiado!!!");
        console.log(this.branch);

        let paymethodsLabels = this.branch.main.metodos_pago.map(item=>{ return item.alias; });
            this.$refs.chart_paymethods.updateOptions({ labels: paymethodsLabels });
            this.getBranch();
    },
    methods: {
        closeBranch(){ this.$emit("closeBranch"); },
        async getBranch(){
            console.log("Obtener datos de la tienda");
            this.$q.loading.show({ message:'Cargando datos, espera...' });

            let data = {
                "_workpoint" : this.branch.main.id,
                "date_from": this.rangesData.date_from,
                "date_to": this.rangesData.date_to
            }

            console.log("Datos a enviar...");
            console.log(data);

            this.tienda = await cluster.openBranch(data);
            this.$q.loading.hide();
            console.log(this.tienda);
        }
    },
    computed:{
        formatcant(){
            return cant => { return new Intl.NumberFormat("es-MX").format(cant); }
        },
        payMethodsSeries(){
            return this.branch.main.metodos_pago.map(item=>{ return item.total });
        }
    }
}
</script>