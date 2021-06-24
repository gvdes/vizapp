<template>
    <div>
        <q-select dark dense filled fill-input color="green-13" class="text-uppercase"
            use-input
            hide-dropdown-icon
            option-value="id"
            option-label="code"
            hide-selected
            behavior="menu"
            v-model="autocom.autocomplete"
            :value="autocom.autocomplete"
            :input-debounce="200"
            :autofocus="true"
            :options="options"
            :type="iptsearch.type"
            @filter="autocomplete"
            @input="selItem"
        >
            <template v-slot:no-option>
                <q-item>
                    <q-item-section avatar><q-icon name="fas fa-mug-hot" color="grey-8"/></q-item-section>
                    <q-item-section class="text-grey exo">Sin coincidencias</q-item-section>
                </q-item>
            </template>

            <template v-slot:prepend>
                <q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
            </template>

            <template v-slot:option="scope">
                <div v-if="scope.opt.status.id>1" class="text-grey-7 q-pa-sm exo" v-bind="scope.itemProps">
                    <div class="text-bold">
                        {{scope.opt.code}} - {{scope.opt.name}}
                        <q-chip color="red" class="text--2" text-color="white" icon="warning" :label="scope.opt.status.name" />
                    </div>
                    <div caption class="text--2">{{ scope.opt.description }}</div>
                </div>
                <div v-else class="q-pa-sm q-mb-sm exo" v-bind="scope.itemProps" v-on="scope.itemEvents">
                    <div class="text-body1 text-bold">
                        {{scope.opt.code}} - {{scope.opt.name}}
                    </div>
                    <div caption class="text--2">{{ scope.opt.description }}</div>
                </div>
            </template>
        </q-select> 
    </div>
</template>
<script>
import dbproduct from '../../API/Product'
export default {
    props:{
        checkState:{default:false,type:Boolean},
        image:{default:false,type:Boolean}
    },
    data() {
        return {
            autocom:{
                "autocomplete":"",
                "_category":null,
                "_status":null,
                "_location":null,
                "with_locations":null,
                "with_stock":true,// obtiene el stock de la tienada
                "check_stock":null,//  valida que SI tenga stock
                "paginate":null,
                "with_prices":true,
                "_celler":null,
                "limit":30
            },
            iptsearch:{ processing:false, type:"number", icon:'fas fa-hashtag' },
            options:undefined
        }
    },
    methods: {
        autocomplete (val, update, abort) {
            if(val.trim().length>1){
                this.autocom.autocomplete = val.toUpperCase().trim();

                dbproduct.autocomplete(this.autocom).then(success=>{
                    let resp = success.data;
                    update(() => { this.options=resp; });
                }).catch(fail=>{ console.log(fail); });
            }
        },
        toogleIptSearch(){
			switch (this.iptsearch.type) {
				case "text": 
					this.iptsearch.type="number";
					this.iptsearch.icon="fas fa-font";
				break;
				case "number": 
					this.iptsearch.type="text";
					this.iptsearch.icon="fas fa-hashtag";
				break;
			}
			// this.$refs.iptsearch.focus();
        },
        selItem(opt){
            this.$emit('input',opt);
            setTimeout(()=>{ this.autocom.autocomplete = null; },80);
        }
    },
}
</script>