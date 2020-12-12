<template>
    <div class="bg-darkl1">
        <q-card class="bg-none">
            <div class="row q-pa-md">
                <div class="col text-h6">Ventas</div>
                <div>
                    <div class="row justify-end items-cente">
                        <q-select dark class="col"
                            color="green-13" style="max-width:130px;"
                            label="Vista" v-model="date" :options="range"
                        />
                        <div v-if="date.value=='p'" class="column">
                            <q-btn icon="event" dark flat rounded class="bg-none" :label="'del '+date_from">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                    <q-date color="grey-10" v-model="date_from" mask="YYYY-MM-DD"
                                        first-day-of-week="1"
                                        :options="fromOptions"
                                        navigation-min-year-month="2020/01"
                                        navigation-max-year-month="2020/12"
                                    >
                                        <div class="row items-center justify-end">
                                            <q-btn label="Ok" flat v-close-popup/>
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-btn>
                            <q-btn icon="event" dark flat rounded class="bg-none" :label="'al '+date_to">
                                <q-popup-proxy @hide="emmitDays" transition-show="scale" transition-hide="scale">
                                    <q-date color="grey-10" v-model="date_to" mask="YYYY-MM-DD"
                                        first-day-of-week="1"
                                        :options="toOptions"
                                    >
                                        <div class="row items-center justify-end">
                                            <q-btn label="Ok" flat v-close-popup/>
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-btn>
                        </div>
                    </div>
                    <div class="q-pa-sm text--1 text-grey-4">{{viewDate}}</div>
                </div>
            </div>
            <q-card-section class="text-center text-h4 text-green-13">
                <span v-if="loadingBalance">
                    <q-spinner-pie color="green-13" size="1.3em"/>
                </span>
                <span v-else>$ {{formatted(totalSale)}}</span>
            </q-card-section>
            <q-card-section>
                <apexchart width="97%" height="500px" type="bar" :options="options" :series="chartsales" />
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import apexcharts from 'vue-apexcharts'
export default {
    name:'GlobalSale',
    components:{
        apexchart:apexcharts
    },
    props:{
        branches:{type:Array,default:[]},
        range:{type:Array},
        loadingBalance:{type:Boolean,default:false}
    },
    data() {
        return {
            date:{value:"t",label:"Diaria"},
            date_from:this.$moment().format('YYYY/MM/DD'),
            date_to:this.$moment().format('YYYY/MM/DD'),
            chartsales:[
                { name: 'Venta', data: [1,2,3,4,5,6,7,8,9] },
                { name: 'Tickets', data: [10,20,30,40,50,60,70,80,90] }
            ],
            options:{
            	chart: { 
                    id:'global_sale', background:'none',
                    theme:{mode:"dark"},
            		events:{ dataPointSelection: (event, chartContext, config) => { this.tryOpenBranch(config.dataPointIndex); } }
                },
                stroke:{ colors:['#222f3e'] },
                colors:['#64DD18', '#33691E'],
                xaxis: {
                  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                },
            	plotOptions: {
            		bar:{ horizontal: true, columnWidth: '100%', barHeight: '90%' }
                },
            },
        }
    },
    methods: {
        emmitDays(){
            let ranges = {date_from:this.date_from,date_to:this.date_to};
            this.$emit("settingRanges",ranges);
        }
    },
    computed:{
        viewDate(){
            let label = '';
            let startOfYear = this.$moment().startOf('year').format('DD');//devuelve el dia del inicio del año
            let startOfMonth = this.$moment().startOf('month').format('DD');
            let startOfWeek = this.$moment().startOf('week').format('DD');
            let nameday = this.$moment().format('dddd');
            let day = this.$moment().format('DD');
            let namemonth = this.$moment().format('MMMM');
            let month = this.$moment().format('MM');
            let year = this.$moment().format('YYYY');

            this.date_to = `${year}-${month}-${day}`;

            switch (this.date.value) {
                case 't':
                    this.date_from = `${year}-${month}-${day}`;
                    label=`${nameday} ${day} de ${namemonth}, ${year}`;
                break;
                case 'w':
                    this.date_from = this.$moment().startOf('week').format('YYYY-MM-DD');
                    label=`Del ${startOfWeek} al ${day} de ${namemonth}, ${year}`;
                break;
                case 'm':
                    this.date_from = this.$moment().startOf('month').format('YYYY-MM-DD');
                    label=`Del ${startOfMonth} al ${day} de ${namemonth}, ${year}`;
                break;
                case 'y':
                    this.date_from = this.$moment().startOf('year').format('YYYY-MM-DD');
                    label=`Del ${startOfYear} de Enero al ${day} de ${namemonth}, ${year}`;
                break;
                case 'p': 
                    console.log("vista personalizada");
                break;
            }

            this.date.value=='p'?null:this.emmitDays();

            return label;
        },
        fromOptions(){
            let momment = this.$moment();
            let _now = momment.format('YYYY/MM/DD');
            let tomorrow = momment.add(1,'d').format('YYYY/MM/DD');
            let startYear = momment.startOf('year').format('YYYY/MM/DD');

            return _now => _now >= startYear && _now < tomorrow;
        },
        toOptions(){
            let mindate = this.$moment(this.date_from).format('YYYY/MM/DD');
            let date = this.$moment(this.date_from).format('YYYY/MM/DD');
            let maxdate = this.$moment().format('YYYY/MM/DD');// el maximo de fecha a elegir es HOY

            return date => date >= mindate && date <= maxdate;
        },
        totalSale(){
            return this.branches.reduce((ammount,item)=>{ return parseFloat(item.venta)+ammount },0);
        },
        formatted(){
            return cant => { return new Intl.NumberFormat("es-MX").format(cant); }
        },
        xlabels(){
            // return this.branches.map(item=>{ console.log(item); return item.alias; });
            return ['1','2','3','4','5','6','7','8','9'];
        }
    },
}
</script>