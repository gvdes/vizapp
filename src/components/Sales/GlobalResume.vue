<template>
    <div>
        <div class="row justify-center items-center q-my-lg">
            <span class="text-h6">Resumen Global</span>
        </div>
        <div class="row items-start justify-center q-gutter-md">
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
                    <apexchart ref="chart_average" type="bar" :options="chartAverageOptions" :series="averageSeries" />
                </div>
            </q-card>

            <q-card class="bg-darkl1 text-grey-6">
                <q-card-section>
                    <div class="text-caption">Formas de Pago</div>
                </q-card-section>
                <q-separator />
                <div class="q-py-md">
                    <apexchart ref="chart_paymethods" type="donut" :options="chartPayMethodsOptions" :series="payMethodsSeries" />
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
        branches:{type:Array,default:()=>([])},
        averageSale:{type:Number,default:0},
        paymentMethods:{type:Array,default:()=>([])}
    },
    updated() {
        console.log("EL COMPONENTE DONUT HA SIDO MODIFICADO!!!");
        let branchXlabels = this.branches.map(item=>{ return item.alias; });
            this.$refs.chart_operations.updateOptions({ labels: branchXlabels });
            this.$refs.chart_average.updateOptions({ labels: branchXlabels });

        let paymethodsLabels = this.paymentMethods.map(item=>{ return item.alias; });
            this.$refs.chart_paymethods.updateOptions({ labels: paymethodsLabels });
    },
    data() {
        return {
            chartOperationsOptions:{
                chart: { type: 'donut',background:'none' },
                toolbar: { show: false },
                theme:{mode:'dark',palette:'palette10'},
                stroke:{colors:['#57606f'],width:1},
                labels: [],
                dataLabels: {
                    formatter: function (val, opts) { return opts.w.config.series[opts.seriesIndex] },
                },
            },
            chartAverageOptions:{
                chart: { type: 'bar',background:'none' },
                toolbar: { show: false },
                theme:{mode:'dark',palette:'palette10'},
                grid:{borderColor: '#57606f',},
                xaxis:{categories:[]},
                plotOptions: {
                    bar:{ horizontal: true, columnWidth: '100%', barHeight: '90%' }
                },
                dataLabels:{
                    formatter:(val,opts)=>{ return '$ '+this.formatcant(val); },
                    dropShadow: { enabled: true, left: 1, top: 1, opacity: 0.5}
                }
            },
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
            let average = this.branches.map(item=>{ return item.ticket_promedio });
            return [{ name: 'Ticket Promedio', data: average }]
        },
        payMethodsSeries(){
            return this.paymentMethods.map(item=>{ return item.total });
        }
    }
}
</script>