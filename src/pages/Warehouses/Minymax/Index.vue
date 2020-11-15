<template>
    <q-page padding>
       <q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Min/Max"/>
			</q-card>				
		</q-header>

		<q-card flat class="bg-darkl1">
			<q-toolbar>Ajuste</q-toolbar>
			<q-separator/>
			<q-card-section>
				<q-select dark dense filled fill-input color="green-13" behavior="menu"
					use-input hide-selected class="text-uppercase" hide-dropdown-icon
					input-debounce="0" option-value="id" option-label="code"
					:value="autocom.model"
					:options="autocom.options" 
					@filter="autocomplete"
					@input="get" ref="iptsearch"
					:type="iptsearch.type">
					<template v-slot:no-option>
						<q-item><q-item-section class="text-grey">Sin coincidencias</q-item-section></q-item>
					</template>

					<template v-slot:prepend>
						<q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
					</template>

					<template v-slot:option="scope">
						<q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
							<!-- <q-item-section avatar>
								<q-img :src="scope.opt.img" style="width:35px;height:35px;"/>
							</q-item-section> -->
							<q-item-section>
								<q-item-label><span class="text-bold">{{scope.opt.code}}</span> - {{scope.opt.name}}</q-item-label>
								<q-item-label caption class="text--2">{{ scope.opt.description }}</q-item-label>
							</q-item-section>
						</q-item>
					</template>
				</q-select>
			</q-card-section>

			<q-card-section v-if="setproduct.state">
				<div class="text-h6">{{ setproduct.code }}</div>
				<div>{{ setproduct.description }}</div>
				<q-form class="row q-gutter-lg">
					<q-input dense borderless readonly dark label="Stock" v-model="setproduct.stock" class="col"/>
					<q-input dense dark color="green-13" type="number" label="Minimo" v-model="setproduct.min" min="0" class="col" autofocus/>
					<q-input dense dark color="green-13" type="number" label="Maximo" v-model="setproduct.max" min="0" class="col"/>
					<q-btn v-if="canset" rounded flat class="bg-darkl1 shadow-1" color="green-13" icon="done" :loading="setproduct.setting" @click="set"/>
				</q-form>
			</q-card-section>
		</q-card>		
    </q-page>
</template>

<script>
import vizapi from '../../../API/warehouses'
import dbproduct from '../../../API/Product'
import ToolbarAccount from '../../../components/Global/ToolbarAccount.vue'
export default{
	components:{
		ToolbarAccount:ToolbarAccount
	},
    data(){
        return {
            iptsearch:{
				value:'',
				processing:false,
				type:"text",
				icon:'fas fa-hashtag'
			},
			autocom:{model:null,options:undefined},
			setproduct:{state:false,setting:false,code:undefined,min:0,max:0,currmin:0,currmax:0,stock:undefined,description:undefined}
        }
	},
    methods:{
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
					this.iptsearch.type ="text";
					this.iptsearch.icon="fas fa-hashtag";
				break;
			}

			this.$refs.iptsearch.focus();
        },
        get(opt){
			console.log(opt);
            this.setproduct.state = false;
			this.iptsearch.processing=true;
			let codeart = opt.code;
			let data = { params:{ code:codeart } }

			this.setproduct.code = opt.code;
			this.setproduct.description = opt.description;
			this.setproduct.state = true;

			vizapi.product(data).then(success=>{
				let resp = success.data;
				this.setproduct.stock = resp.stock;
				this.setproduct.min = resp.min;
				this.setproduct.max = resp.max;
				this.setproduct.currmin = resp.min;
				this.setproduct.currmax = resp.max;
				this.iptsearch.processing=false;
			}).catch(fail=>{
                this.$q.notify({
					message:"Raios!!, esto no ha funcionado!!",
					timeout:3000, color:'deep-orange-14', position:'center',
					icon:"fas fa-exclamation-triangle"
				});
			});
		},
		set(){
			let data = {
				"code":this.setproduct.code,
				"min":parseInt(this.setproduct.min),
				"max":parseInt(this.setproduct.max)
			}

			vizapi.setminmax(data).then(success=>{
				let resp = success.data.success;
				if(resp){ 
					this.setproduct.currmin = this.setproduct.min;
					this.setproduct.currmax = this.setproduct.max;
					this.$q.notify({ timeout:1500, color:'positive', position:'center', icon:"done" });
					this.$refs.iptsearch.focus();
				}else{
					this.$q.notify({ timeout:1500, color:'negative', position:'center', icon:"fas fa-heart-broken" });
				}
			}).catch(fail=>{ console.log(fail); });
		}
    },
    computed:{
		cansearch(){ return this.iptsearch.value.length>2 ? false : true; },
		canset(){
			return ((this.setproduct.min!=this.setproduct.currmin)||(this.setproduct.max!=this.setproduct.currmax)) ? true:false;
		}
    }
}
</script>