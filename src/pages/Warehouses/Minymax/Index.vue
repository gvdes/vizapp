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
							<q-item-section avatar>
								<!-- <q-img :src="'http://192.168.1.86:6011/products/'+scope.opt.code+'.jpg'" @error="noload" style="border-radius:30%;width:50px;height:50px;"/> -->
							</q-item-section>
							<q-item-section>
								<q-item-label><span class="text-bold">{{scope.opt.code}}</span> - {{scope.opt.name}}</q-item-label>
								<q-item-label caption class="text--2">{{ scope.opt.description }}</q-item-label>
							</q-item-section>
						</q-item>
					</template>
				</q-select>
			</q-card-section>

			<q-card-section v-if="setproduct.state">
				<div class=" row no-wrap q-gutter-sm">
					<div class="">
						<q-img :src="`http://192.168.1.86:6011/products/${setproduct.code}.jpg`" style="overflow:hidden;width:120px;height:120px;border-radius:10px;">
						</q-img>
					</div>
					<div class="">
						<div class="text-h6">{{ setproduct.code }}</div>
						<div>{{ setproduct.description }}</div>
						<div>
							<q-select dense dark color="green-13"
								v-model="prodstate.val"
								@input="updateState"
								:disable="prodstate.block"
								:loading="prodstate.block"
								:options="labelstates"
								label="Estatus"
								v-if="canBlock"
							/>
						</div>
					</div>
				</div>
				<div v-if="getting" class="q-pt-md text-center text-green-13">
					<q-spinner/> Cargando datos...</div>
				<q-form v-else class="q-pt-md">
					<div class="row q-gutter-lg">
						<div class="col text-center">
							<div class="text--1">Piezas x Caja</div>
							<div class="text-light-blue-13 text-h5">{{setproduct.ipack}}</div>
						</div>

						<div class="col text-center">
							<div class="text--1">Stock</div>
							<div class="text-h5" :class="setproduct.stock>=1?'text-green-13':'text-negative'">{{setproduct.stock}}</div>
						</div>

						<div class="col text-center" v-for="(stockstore,idx) in setproduct.stock_stores" :key="idx">
							<div class="text--1">{{stockstore.alias}}</div>
							<div class="text-h5" :class="stockstore.stocks>=1?'text-green-13':'text-negative'">{{stockstore.stocks}}</div>
						</div>
					</div>
					<q-separator />
					<div class="row q-gutter-lg">
						<q-input dark color="green-13" type="number" label="Minimo" v-model="setproduct.min" min="0" class="col" autofocus/>
						<q-input dark color="green-13" type="number" label="Maximo" v-model="setproduct.max" min="0" class="col"/>
						<q-btn v-if="canset" rounded flat class="bg-darkl1 shadow-1" color="green-13" icon="done" :loading="setproduct.setting" @click="set"/>
					</div>
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
			setproduct:{
				id:null,
				state:false,setting:false,code:undefined,
				min:0,max:0,currmin:0,currmax:0,
				ipack:undefined,stock:undefined,description:undefined,
				stock_stores:undefined
			},
			getting:false,
			dbLabelStates:null,
			prodstate:{val:null,state:false,block:false}
        }
	},
	async beforeMount() {
		console.log("%cMontando minimos y maximos","font-size:1.5em; color:gold;");
		this.dbLabelStates = await dbproduct.labelStates();
		console.log(this.dbLabelStates);
	},
	mounted(){
		console.log(this.profile);
	},
    methods:{
		noload(){
			console.log("imagen no cargo");
		},
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
		updateState(){
			this.prodstate.block=true;

			let data = {"_product":this.setproduct.id,"_status":this.prodstate.val.value}

			dbproduct.updateState(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				this.prodstate.block=false;

				this.$q.notify({
					message:`<b>${this.setproduct.code}</b> actualizado a <b>${this.prodstate.val.label}</b>`,
					timeout:2000, color:'positive', position:'center',
					icon:"done",
					html:true
				});
			}).catch(fail=>{
				console.log(fail);
			});

		},
        get(opt){
			this.setproduct = {
				id:null,
				state:false,setting:false,code:undefined,
				min:0,max:0,currmin:0,currmax:0,
				ipack:undefined,stock:undefined,description:undefined,
				stock_stores:undefined
			};
			this.getting=true;
			console.log(opt);
            this.setproduct.state = false;
			this.iptsearch.processing=true;
			let idart = opt.id;
			let data = { "params":{ "id":idart,"stocks": true } }

			this.setproduct.code = opt.code;
			this.setproduct.description = opt.description;
			this.setproduct.state = true;

			vizapi.product(data).then(success=>{
				console.log(success);
				let resp = success.data;

				this.getting=false;
				this.prodstate.val = {value:resp.status.id,label:resp.status.name};
				this.setproduct.id = resp.id;
				this.setproduct.stock_stores = resp.stocks_stores;
				this.setproduct.stock = resp.stock;
				this.setproduct.ipack = resp.pieces;
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
		},
		ismobile(){ return this.$q.platform.is.mobile; },
		imgcover(){ return route =>{
			let _route = route ? '':'';
			return 'http://192.168.1.86:6011/products/'+setproduct.code+'.jpg'
		}},
		labelstates(){
			return this.dbLabelStates ? 
				this.dbLabelStates.map(item=>{
					return {value:item.id,label:item.name}
				}) : [];
		},
		profile:{
			get(){ return this.$store.getters['Account/profile']; }
		},
		canBlock(){
			let branch = this.profile.workpoint.id;
			return (branch==1||branch==2||branch==13) ? true : false;
		}
    }
}
</script>