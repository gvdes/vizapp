<template>
    <q-card class="bg-darkl1 exo ">
        <q-card-section class="text-white">Seleccione Impresora</q-card-section>
        <q-card-section>
            <div class="row items-center justify-between text-grey-4">
                <q-btn v-for="printer in printers" :key="printer.id" :class="printer.selected ? 'bg-primary text-white':''" flat stack no-caps @click="selPrinter(printer.id)">
                    <q-icon name="print" size="xl"></q-icon>
                    <div class="text--2">{{printer.name}}</div>
                    <div class="text--2">{{printer.ip}}</div>
                </q-btn>
            </div>
        </q-card-section>
        <div v-if="printer" class="text-right">
            <q-btn @click="emitselect" class="q-pa-md text-bold full-width" color="green-13" flat :label="title" no-caps/>
        </div>
    </q-card>
</template>

<script>

export default{
    name:'PreventaSelectPrinter',
    props:{
        options:{ type:Array, default:[] },
        title:{ type:String, default:"Impimir" }
    },
    data(){
        return {
            printer:null
        }
    },
    methods:{
        selPrinter(pid){
            console.log(pid);
            this.options.forEach(print => { 
                if (print.id==pid) {
                    console.log("aca esta la chida",print.name);
                    print.selected = true;
                    this.printer=print;
                }else{ print.selected = false; }
            });
        },
        emitselect(){
            this.$emit('clicked', this.printer);
        },
    },
    computed:{
        printers(){ return this.options.length ? this.options.map( printer => { printer.selected = false; return printer;}) : [] },
    }

}
</script>
