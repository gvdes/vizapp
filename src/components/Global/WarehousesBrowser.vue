<template>
    <div class="row items-end">
        <q-select 
            dark color="green-13"
            class="col-3 q-mr-sm q-mb-sm"
            label="Almacen"
            v-model="warehouses.selected"
            @input="setWarehouse"
            option-value="id"
            option-label="name"
            :options="warehouses.options"
        />
        
        <q-select
            dark color="amber-13"
            class="col-2 q-mr-sm q-mb-sm"
            label="Seleccione"
            v-for="(sect,idx) in warehouses.sections" :key="idx" 
            v-model="warehouses.sections[idx].model.value"
            :options="warehouses.sections[idx].options"
            @input="loadSections(warehouses.sections[idx],idx)"
            option-value="id"
            option-label="alias"
        />
        <q-inner-loading :showing="loading.state" dark><q-spinner-dots size="30px" color="amber-7" /></q-inner-loading>
    </div>
</template>

<script>
import warehousesdb from '../../API/warehouses'
import productsdb from '../../API/Product'

export default {
    props:{
        "fetchproducts":{type:Boolean,default:true}
    },
    data() {
        return {
            warehouses:{
                selected:null,
                options:[],
                sections:[]
            },
            filters:{
                "autocomplete":null,//
                "paginate" : null,
                "_category": null,// categopria que deseamos visualizar
                "_location": null,//id de la seccion a aobtener la lista de productos
                "check_stock":null,//valida los prodcutos que tienen o no existerncia en los almacenes del workpoint
                "with_stock":null,//adjunta el stock total de los almacenes del workpoint
                "_status": null,//status del produtcto
                "with_locations":true,//adjunta todas las ubicacione s de todos los almacenes del workpoint
                "with_prices":null,//adjunta los precios en los productos (default del 1 al 4, a root, todos los precios)
            },
            loading:{state:false,msg:''}
        }
    },
    async beforeMount() {
        console.log("%cMontando componente","font-size:2em; color:gold;");

        this.loading.state=true;
        
        let statelocator = JSON.parse(localStorage.getItem('statelocator'));

        if(statelocator){
            this.warehouses = statelocator;
        }else{ this.warehouses.options = await warehousesdb.list(); }

        this.loading.state=false;
    },
    methods: {
        async setWarehouse(){
            this.loading.state = true;
			this.warehouses.sections = [];// vaciamos las secciones

            let data = { params:{"_celler":this.warehouses.selected.id,"products":false } };
			let sections = await warehousesdb.sections(data);

            if(sections.length){
                let newSelect = {
                    options:sections,
                    model:{label:"Seleccione",value:null}
                }
                this.warehouses.sections.push(newSelect);
            }
            this.loading.state = false;

            this.selectedLoc();
        },
        async loadSections(section,idx){
            this.loading.state = true;
            this.warehouses.sections.splice(idx+1);

            let data = { params:{"_section":section.model.value.id,"products":false } };
            let sections = await warehousesdb.sections(data);

            if(sections.sections.length){
                let newSelect = {
                    options:sections.sections,
                    model:{label:"Seleccione",value:null}
                }
                this.warehouses.sections.push(newSelect);
            }
            this.selectedLoc(section);
		},
        async selectedLoc(section=null){

            this.filters._location = section ? section.model.value.id:null;
            let response = { warehouse:this.warehouses.selected, section:section, products:[], path:this.fullpath }

            if(this.fetchproducts&&section){ 
                console.log("cargando productos!!");
                response.products = await productsdb.get(this.filters);
            }

            this.loading.state=false;
            localStorage.setItem('statelocator',JSON.stringify(this.warehouses));
            this.$emit('selectedLoc',response);
        }
    },
    computed:{
        fullpath(){
            return this.warehouses.sections.map(sect=>{
                if (sect.model.value) { return sect.model; }
            });
		},
    }
}
</script>