<template>
    <q-card flat class="exo text-white bg-none">
        <template v-if="printers.options.length">
            <q-card-section>
                <q-select label="Sucursal" filled :disable="branches.options.length==1" :options="branches.options" v-model="branches.val" color="white" option-label="name" option-value="id" dark @input="buildOptions">
                    <template v-slot:prepend><q-icon name="fas fa-store-alt" size="xs"/></template>
                    <template v-slot:option="scope">
                        <q-item dark
                            v-bind="scope.itemProps"
                            v-on="scope.itemEvents"
                        >
                            <q-item-section>
                                <q-item-label>{{scope.opt.alias}}</q-item-label>
                                <q-item-label class="text--3">{{ scope.opt.name }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
                <br>
                <q-select label="Impresora" filled  :options="printers.options" v-model="printers.val" color="white" option-label="name" option-value="id" dark>
                    <template v-slot:prepend><q-icon name="print" /></template>
                    <template v-slot:option="scope">
                        <q-item dark
                            v-bind="scope.itemProps"
                            v-on="scope.itemEvents"
                        >
                            <q-item-section>
                                <q-item-label>{{scope.opt.name}}</q-item-label>
                                <q-item-label class="text--3">{{ scope.opt.ip }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
            </q-card-section>

            <q-card-actions align="center" v-if="printers.val">
                <q-btn color="primary" class="full-width" :label="labelTitle" no-caps @click="printemit" />
            </q-card-actions>
        </template>
        <template v-else>
            <q-card-section class="text-amber-13">
                No se han agregdo impresoras
            </q-card-section>
        </template>
    </q-card>
</template>

<script>
import PrintersAPI from '../../API/Printers.js'
export default {
    props:{
        all:{ type:Boolean, default:true },
        type:{ type:String, default:'all' },
        printOnTouch:{ type:Boolean, default:false },
        labelTitle:{ type:String, default:"Ok" }
    },
    data(){
        return{
            branches:{
                val:undefined,
                options:[]
            },
            printers:{
                val:undefined,
                options:[]
            }
        }
    },
    async beforeMount(){
        // this.$q.loading.show({ message: 'Cargando Impresoras ...' });
        console.log("Creando componente de Impresoras");
        this.loadPrinters();
    },
    beforeDestroy(){ console.log("Destruyendo componente de impresoras"); },
    destroyed(){ console.log("Componente impresoras destruido"); },
    methods:{
        printemit(){ this.$emit("input",this.printers.val); },
        freshOptions(){ this.options = this.branch.groups.map( g => g.printers ).flat(); },
        async loadPrinters(){
            let printers_store = JSON.parse(localStorage.getItem("printers_native"));

            if(printers_store){
                this.buildView(printers_store);
            }else{
                let nativeData = await PrintersAPI.get();
                localStorage.setItem("printers_native",JSON.stringify(nativeData));
                this.buildView(nativeData);
            }
        },
        buildView(data){
            this.branches.options = data.map( b => {
                console.log(`${b.name} (${b.id})`);
                console.log(b.printers);
                return {
                    id:b.id,
                    name:b.name,
                    alias:b.alias,
                    groups:b.printers,
                    selected:this.workin.workpoint.id==b.id
                }
            });

            this.branches.val = this.branches.options.find( b => b.selected==true);
            this.buildOptions();
        },
        buildOptions(){
            this.printers.val=undefined;
            switch (this.type) {
                case 'all':
                    this.printers.options = this.branches.val.groups.map( g => g.printers).flat();
                break;
            
                default: console.log("otra cosas"); break;
            }
        }
    },
    computed:{
        profile(){ return this.$store.getters['Account/profile'];},// perfil del usuario
        workin(){ return this.$store.getters['Account/workin'];},// token de sucursal
        configs(){ return this.profile.me._rol==1; },
    }
}
</script>