<template>
    <div>
        <q-card class="bg-darkl1 text-grey-4">
            <q-card-section>
                <div class="row items-start q-gutter-md">
                    <div class="col-1">
                        <q-input v-model="form.cant" type="number" min="10" max="50" label="Productos" dark color="green-13"/>
                    </div>
                    <div class="col-1">
                        <q-select
                            :options="[{label:'TOP +',value:1},{label:'TOP -',value:0}]"
                            label="Tipo" dark color="green-13"
                            v-model="form.type"
                        />
                    </div>
                    <div class="col-2">
                        <q-select
                            :options="form.workpoints.options"
                            label="Punto de trabajo" dark color="green-13"
                            v-model="form.workpoints.selected"
                        />
                    </div>
                    <div class="col-3">
                        <CategoriesBrowser class="text-center" @selectedCat="selectedCat" :fetchproducts="false"/>
                    </div>
                    <div class="col-3 self-center row">
                        <q-btn icon="event" :label="calendarLeyend" no-caps class="bg-darkl2 full-width">
                            <q-menu transition-show="scale" transition-hide="scale" v-model="proxySetDates">
                                    <div class="bg-dark text-grey-4 exo q-pa-md">
                                        <div class="row justify-around items-center q-gutter-sm">
                                            <q-btn no-caps dense 
                                                v-for="opt in calendarview.opts" :key="opt.value"
                                                :label="opt.label"
                                                color="light-blue-13"
                                                :flat="!opt.active"
                                                @click="setDateRanges(opt)"
                                            />
                                        </div>
                                    </div>

                                    <div v-show="calendarview.opts[4].active">
                                        <q-date flat v-model="form.rangedates" range today-btn dark color="light-blue-13">
                                            <div class="row items-center justify-end q-gutter-sm">
                                                <q-btn label="Cancel" color="white" flat v-close-popup />
                                                <q-btn label="OK" color="white" flat @click="save" v-close-popup />
                                            </div>
                                        </q-date>
                                    </div>
                            </q-menu>
                        </q-btn>
                    </div>
                    <div class="col-1 text-center self-center"><q-btn rounded color="green" icon="done"/></div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import CategoriesBrowser from '../../../components/Global/CategoriesBrowser.vue'
export default {
    components:{
        CategoriesBrowser:CategoriesBrowser
    },
    data() {
        return {
            form:{
                type:{label:'TOP +',value:1},
                cant:10,
                rangedates:{ from:null, to:null },
                workpoints:{
                    selected:{label:'TODOS',value:null},
                    options:[
                        {label:'TODOS',value:null},
                        {label:'CEDISSP',value:1},
                        {label:'CEDISPAN',value:2},
                        {label:'AP1',value:3},
                        {label:'AP2',value:4},
                        {label:'BR1',value:5},
                        {label:'BR2',value:6},
                        {label:'BOL',value:13},
                        {label:'CO1',value:7},
                        {label:'CO2',value:8},
                        {label:'RC1',value:9},
                        {label:'RC2',value:10},
                        {label:'SP1',value:11},
                        {label:'SP2',value:12},
                    ]
                },
                category:null,
            },
            calendarview:{
                opts:[
                    { label:"Hoy", value:"t", active:true },
                    { label:"Semana", value:"w", active:false },
                    { label:"Mes", value:"m", active:false },
                    { label:"Año", value:"y", active:false },
                    { label:"Rango", value:"r", active:false },
                ],
            },
            proxySetDates:false,
            calendarLeyend:null
        }
    },
    methods: {
        save(){
            console.log("Rando seleccionado");
            let from = this.$moment(this.form.rangedates.from).format("MMMM DD, YYYY");
            let to = this.$moment(this.form.rangedates.to).format("MMMM DD, YYYY");

            this.calendarLeyend = `${from} a ${to}`;
        },
        selectedCat(cat){ this.form.category = cat; },
        setDateRanges(opt){
            this.calendarview.opts.forEach(element => { element.value==opt.value ? element.active = true: element.active = false; });
            let today = this.$moment();
            let from = null;
            let to = null;

            console.log("Setear fecha y cerrar ventanita");
            if (opt.value!="r") {
                switch (opt.value) {
                    case 'w':
                        this.form.rangedates.from = today.startOf('week').format("YYYY/MM/DD");
                        this.form.rangedates.to = today.format("YYYY/MM/DD");

                        from = today.startOf('week').format("D");
                        to = this.$moment().format("D, MMMM YYYY");
                        this.calendarLeyend = `Semana: ${from} a ${to}`;
                        this.proxySetDates = false;
                    break;

                    case 'm':
                        this.form.rangedates.from = today.startOf('month').format("YYYY/MM/DD");
                        this.form.rangedates.to = today.format("YYYY/MM/DD");

                        from = today.startOf('month').format("dddd D");
                        to = this.$moment().format("dddd D, MMMM YYYY");
                        this.calendarLeyend = `Mes: ${from} a ${to}`;
                        this.proxySetDates = false;
                    break;

                    case 'y':
                        this.form.rangedates.from = today.startOf('year').format("YYYY/MM/DD");
                        this.form.rangedates.to = today.format("YYYY/MM/DD");

                        from = today.startOf('year').format("dddd D");
                        to = this.$moment().format("dddd D, MMMM YYYY");
                        this.calendarLeyend = `Mes: ${from} a ${to}`;
                        this.proxySetDates = false;
                    break;
                
                    default:
                        this.form.rangedates.from = today.format("YYYY/MM/DD");
                        this.form.rangedates.to = today.format("YYYY/MM/DD");
                        let leyend = today.format("dddd D, MMMM YYYY");
                        this.calendarLeyend = `Hoy: ${leyend}`;
                        this.proxySetDates = false;
                    break;
                }
            }
        }
    },
}
</script>