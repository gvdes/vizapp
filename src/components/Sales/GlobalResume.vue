<template>
    <div>
        <div class="row justify-center items-center q-my-lg">
            <span class="text-h6">Resumen Global</span>
        </div>
        <div class="row items-start justify-center q-gutter-md">
            <!-- <q-card class="bg-darkl1 text-grey-6">
                <q-card-section>
                    <div class="text-h4 text-green-13">$ {{formatcant(labelSale)}}</div>
                    <div class="text-right text-caption">Venta Total</div>
                </q-card-section>
            </q-card> -->

            <q-card class="bg-darkl1 text-grey-6">
                <q-card-section>
                    <div class="text-h4 text-light-blue-13">{{formatcant(labelTickets)}}</div>
                    <div class="text-caption">Operaciones</div>
                </q-card-section>
                <q-separator />
                
                <div class="q-py-md">
                    <apexchart ref="chart_operations" type="donut" :options="chartOperationsOptions" :series="operationsSeries" />
                </div>
            </q-card>

            <q-card class="bg-darkl1 text-grey-6">
                <q-card-section>
                    <div class="text-h4 text-light-blue-13">$ {{formatcant(averageSale)}}</div>
                    <div class="text-caption">Ticket Promedio</div>
                </q-card-section>
                <q-separator />
                <div class="q-py-md">
                    <apexchart ref="chart_average" type="donut" :options="chartAverageOptions" :series="averageSeries" />
                </div>
            </q-card>

            <q-card class="bg-darkl1 text-grey-6">
                <q-card-section>
                    <div class="text-caption">Metodos de Pago</div>
                </q-card-section>
                <q-separator />
                <div class="q-py-md">
                    <apexchart ref="chart_average" type="donut" :options="chartAverageOptions" :series="averageSeries" />
                </div>
            </q-card>
        </div>
    </div>
</template>

<script>
import apexcharts from 'vue-apexcharts'
export default {
    components:{apexchart:apexcharts},
    props:{
        branches:{type:Array,default:[]},
        averageSale:{type:Number,default:0}
    },
    updated() {
        console.log("EL COMPONENTE DONUT HA SIDO MODIFICADO!!!");
        let operations_xlabels = this.branches.map(item=>{ return item.alias; });
        this.$refs.chart_operations.updateOptions({ labels: operations_xlabels });
        this.$refs.chart_average.updateOptions({ labels: operations_xlabels });
    },
    data() {
        return {
            chartOperationsOptions:{
                chart: { type: 'donut',background:'none' },
                theme:{mode:'dark',palette:'palette2'},
                stroke:{colors:['#57606f'],width:1},
                labels: [],
                dataLabels: {
                    formatter: function (val, opts) { return opts.w.config.series[opts.seriesIndex] },
                },
            },
            chartAverageOptions:{
                chart: { type: 'donut',background:'none' },
                theme:{mode:'dark',palette:'palette10'},
                stroke:{colors:['#57606f'],width:1},
                labels: [],
                dataLabels: {
                    formatter:(val, opts) => { return '$ '+this.formatcant(opts.w.config.series[opts.seriesIndex]) },
                },
            }
        }
    },
    computed:{
        formatcant(){
            return cant => { return new Intl.NumberFormat("es-MX").format(cant); }
		},
        labelSale(){
            return this.branches.reduce((ammount,item)=>{ return parseFloat(item.venta)+ammount },0);
		},
        labelTickets(){
			return this.branches.reduce((ammount,item)=>{ return parseInt(item.tickets)+ammount },0);
        },
        operationsSeries(){
            return this.branches.map(item=>{ return item.tickets });
        },
        averageSeries(){
            return this.branches.map(item=>{ return item.ticket_promedio });
        }
    }
}
</script>