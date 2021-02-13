<template>
    <div>
        <q-select dark dense filled fill-input color="green-13"
            use-input class="text-uppercase" hide-dropdown-icon
            input-debounce="0" option-value="id" option-label="code"
            hide-selected behavior="menu" autofocus
            :value="autocom.model" v-model="autocom.model"
            :options="autocom.options" :type="iptsearch.type"
            @filter="autocomplete" @input="selItem"
        >
            <template v-slot:no-option>
                <q-item><q-item-section class="text-grey">Sin coincidencias</q-item-section></q-item>
            </template>

            <template v-slot:prepend>
                <q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
            </template>

            <template v-slot:option="scope">
                <div v-if="scope.opt.status.id>1" class="text-grey-7 q-pa-sm" v-bind="scope.itemProps">
                    <div class="text-bold">
                        {{scope.opt.code}} - {{scope.opt.name}}
                        <q-chip color="red" class="text--2" text-color="white" icon="warning" :label="scope.opt.status.name" />
                    </div>
                    <div caption class="text--2">{{ scope.opt.description }}</div>
                </div>
                <div v-else class="q-pa-sm q-mb-sm" v-bind="scope.itemProps" v-on="scope.itemEvents">
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
            autocom:{model:null,options:undefined},
            iptsearch:{
                processing:false,
                type:"text",
                icon:'fas fa-hashtag'
            }
        }
    },
    methods: {
        autocomplete (val, update, abort) {
            let data={params:{ "code": val.trim() }};
            dbproduct.autocomplete(data).then(success=>{
                let resp = success.data;
                update(() => { this.autocom.options=resp; });
            }).catch(fail=>{ console.log(fail); });
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
			this.$refs.iptsearch.focus();
        },
        selItem(opt){
            this.$emit('input',opt);
            setTimeout(()=>{ this.autocom.model = null; },100);
        }
    },
}
</script>