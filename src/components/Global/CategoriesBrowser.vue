<template>
    <div class="row items-end">
        <q-select
            dark color="green-13"
            class="col-3 q-mr-sm q-mb-sm"
            @input="setRootCat"
            v-model="categories.selected"
            option-value="id"
            option-label="name"
            label="Categoria"
            :options="categories.options"
        />

        <q-select
            dark color="green-13"
            class="col-3 q-mr-sm q-mb-sm"
            label="Seleccione"
            v-for="(sect,idx) in categories.children" :key="idx" 
            v-model="categories.children[idx].model.value"
            :options="categories.children[idx].options"
            @input="loadCats(categories.children[idx].model,idx)"
            option-value="id"
            option-label="name"
        />
        <q-inner-loading :showing="loading.state" dark><q-spinner-dots size="30px" color="amber-7" /></q-inner-loading>
    </div>
</template>

<script>
// rsv351884634
import productsdb from '../../API/Product'

export default {
    props:{
        "fetchproducts":{type:Boolean,default:true}
    },
    data() {
        return {
            categories:{
                selected:null,
                options:[],
                children:[],
            },
            loading:{state:false,msg:''},
            filters:{
                "paginate" : null,
                "_category": null,
                "_location": null,
                "check_stock":false,
                "with_stock":false,
                "_status": null,
                "check_locations":true
            },
            labeloading:''
        }
    },
    async mounted() {
        this.loading.state=true;
        let data = {
            "_category" : null,
            "products": false,
        };
        this.categories.options = await productsdb.categories(data);
        console.log(this.categories.options);
        this.loading.state=false;
    },
    methods: {
        async setRootCat(){
            this.loading.state=true;
            this.categories.children = [];

            let data = {"_category":this.categories.selected.id};
            let category = await productsdb.categories(data);

            if(category.children.length){
                let newSelect = {
                    options:category.children,
                    model:{label:"Seleccione",value:null}
                }
                this.categories.children.push(newSelect);
            }
            this.selectedCat(this.categories.selected);
        },
        async loadCats(model,idx){
            this.loading.state=true;
            this.categories.children.splice(idx+1);
            let data = {"_category":model.value.id};
            let category = await productsdb.categories(data);

            if(category.children.length){
                let newSelect = {
                    options:category.children,
                    model:{label:"Seleccione",value:null}
                }
                this.categories.children.push(newSelect);
            }
            
            this.selectedCat(model.value);
        },
        async selectedCat(cat){
            this.filters._category = cat.id;

            let response = { category:cat, products:[] }

            if(this.fetchproducts&&cat.root){ response.products = await productsdb.get(this.filters); }
            
            this.loading.state=false;
            this.$emit('selectedCat',response);
        }
    },
}
</script>