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
        {{this.fullpath}}
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
                sections:[],
                loading:false
            },
            filters:{
                "paginate" : null,
                "_category": null,
                "_location": null,
                "check_stock":false,
                "with_stock":false,
                "_status": null,
                "check_locations":true
            },
            loading:{state:false,msg:''},
        }
    },
    async mounted() {
        this.loading.state=true;
        this.warehouses.options = await warehousesdb.list();
        // console.log(this.warehouses.options);
        this.loading.state=false;
    },
    methods: {
        async setWarehouse(){
            this.loading.state = true;
			this.warehouses.sections = [];// vaciamos las secciones

            let data = { params:{"_celler":this.warehouses.selected.id,"products":false } };
			let sections = await warehousesdb.sections(data);
            // console.log(sections);

            if(sections.length){
                let newSelect = {
                    options:sections,
                    model:{label:"Seleccione",value:null}
                }
                this.warehouses.sections.push(newSelect);
            }
            this.loading.state = false;
        },
        async loadSections(section,idx){
            this.loading.state = true;
            this.warehouses.sections.splice(idx+1);
            // console.log(section.model.value.id);
            let data = { params:{"_section":section.model.value.id,"products":false } };
            let sections = await warehousesdb.sections(data);
            // console.log(sections.sections);

            if(sections.sections.length){
                let newSelect = {
                    options:sections.sections,
                    model:{label:"Seleccione",value:null}
                }
                this.warehouses.sections.push(newSelect);
            }

            this.selectedLoc(section);
		},
        async selectedLoc(section){
            // console.log(this.fullpath);
            
            this.filters._location = section.model.value.id;
            // console.log(this.filters._location);

            let response = { section:section, products:[] }

            if(this.fetchproducts){
                // console.log("Obteniendo productos");
                response.products = await productsdb.get(this.filters);
            }

            // console.log(response);
            this.loading.state=false;
            this.$emit('selectedLoc',response);
        }
    },
    computed:{
        fullpath(){
            return this.warehouses.sections.reduce((path,sect)=>{
                // console.log(sect);
                return path+`-${sect.alias}`;
            },'');
		}
    }
}
</script>