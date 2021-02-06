<template>
    <div>
        <q-select
            dark color="green-13"
            class="col-xs-4 col-sm-2"
            label="Categoria"
            @input="setRootCat"
            v-model="categories.selected"
            option-value="id"
            option-label="name"
            :options="categories.options"
        />

        <q-select
            dark color="green-13"
            class="col-xs-4 col-sm-2"
            label="Seleccione"
            v-for="(sect,idx) in categories.children" :key="idx" 
            v-model="categories.models[idx]"
            :options="categories.children[idx]"
            @input="loadSections(categories.models[idx],idx)"
            option-value="id"
            option-label="name"
        />
    </div>
</template>

<script>
import productsdb from '../../API/Product'
export default {
    data() {
        return {
            categories:{
                selected:null,
                options:[],
                children:[],
                models:[],
                loading:false
            },
        }
    },
    async mounted() {
        let data = {
            "_category" : null,
            "products": false,
        };
        this.categories.options = await productsdb.categories(data);
        console.log(this.categories.options);
    },
    methods: {
        async setRootCat(){
            // console.log('seteando raiz');
            // console.log(this.categories.selected);
            this.categories.children = [];

            let data = {"_category":this.categories.selected.id};
            let category = await productsdb.categories(data);
            console.log(category);

            this.categories.children.push(category);
            this.categories.models.push({label:"Seleccione",value:null});

            this.selectedCat(this.categories.selected);
        },
        selectedCat(id){ this.$emit('selectedCat',id); }
    },
}
</script>