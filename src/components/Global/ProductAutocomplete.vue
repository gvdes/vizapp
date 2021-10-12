<template>
    <div>
        <q-select dark dense filled color="green-13" class="text-uppercase"
            use-input
            hide-dropdown-icon
            option-value="id"
            option-label="id"
            hide-selected
            behavior="menu"
            v-model="target"
            :value="target"
            :input-debounce="200"
            :autofocus="true"
            :options="options"
            :type="iptsearch.type"
            @filter="autocomplete"
            @input="selItem"
            popup-content-class="bg-darkl1"
        >
            <template v-slot:no-option>
                <q-item>
                    <q-item-section avatar><q-img src="~/assets/chihuacry.png" width="50px"/></q-item-section>
                    <q-item-section class="text-grey exo">Nada por aqui...</q-item-section>
                </q-item>
            </template>

            <template v-slot:prepend>
                <q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
            </template>

            <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents" :disable="scope.opt.status.id==4||scope.opt.status.id==5" >
                    <q-item-section avatar v-if="with_image">
                        <q-img src="~/assets/_boxprod.png" width="35px" />
                    </q-item-section>
                    
                    <q-item-section>
                        <div class="row items-center justify-between no-wrap exo">
                            <div class="col">
                                <div>{{scope.opt.code}} <span class="text-grey-4 q-pl-md"> {{scope.opt.name}}</span></div>
                                <div class="text--2 text-grey-5">{{scope.opt.description}}</div>
                            </div>

                            <q-icon name="fas fa-circle" :class="`bullet-${scope.opt.status.id} q-pl-md`" size="10px"/>
                        </div>
                    </q-item-section>
                </q-item>
                <q-separator />
            </template>
        </q-select> 
    </div>
</template>
<script>
import dbproduct from '../../API/Product'
export default {
    props:{
        "mode":'autocomplete',
        "limit":{ default:30, type:Number },
        "_category":{ default:null, type:Boolean },
        "_status":{ default:null, type:Boolean },
        "_location":{ default:null, type:Boolean },
        "_celler":{ default:null, type:Boolean },
        "check_stock":{ default:null, type:Boolean },
        "with_locations":{ default:null, type:Boolean },
        "with_image":{ default:null, type:Boolean },
        "with_prices":{ default:null, type:Boolean },
        "with_stock":{ default:null, type:Boolean },
    },
    data() {
        return {
            target:"",
            iptsearch:{ processing:false, type:"number", icon:'fas fa-font' },
            options:undefined
        }
    },
    methods: {
        autocomplete (val, update, abort) {
            if(val.trim().length>1){
                this.target = val.toUpperCase().trim();

                dbproduct.autocomplete(this.attrs).then(success=>{
                    let resp = success.data;
                    update(
                        () => { this.options=resp; },
                        ref => {
                            ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
                            ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
                        }
                    );
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
        },
        selItem(opt){ this.$emit('input',opt); },
        clear(){ this.target = ""; }
    },
    computed:{
        attrs(){
            return {
                "autocomplete":this.target,
                "_category":this._category,
                "_status":this._status,
                "_location":this._location,
                "with_locations":this.with_locations,
                "with_stock":this.with_stock,
                "check_stock":this.check_stock,
                "with_prices":this.with_prices,
                "_celler":this._celler,
                "limit":this.limit
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .bullet-1{ color:#2ed573; } // Disponible
    .bullet-2{ color:#1e90ff; } // Reservado
    .bullet-3{ color:#ffa502; } // Agotado
    .bullet-4{ color:#ff4757; } // Bloqueado
    .bullet-5{ color:#57606f; } // Descatalogado
</style>