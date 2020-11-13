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
				<q-form class="row">
					<q-input dark filled color="green-13"
						:type="iptsearch.type" dense
						v-model="iptsearch.value"
						autocomplete="off" capitalize="off"
						ref="iptsearch" class="text-uppercase col ipt-search"
					>
						<template v-slot:prepend>
							<q-btn type="button" dense size="sm" flat @click="toogleIptSearch" :icon="iptsearch.icon" color="grey-6"/>
						</template>
						<template v-slot:append>
							<q-btn flat size="sm" @click="get"
								icon="search" color="grey-6" 
								type="submit" :disabled="cansearch"
								:loading="iptsearch.processing" dense
							/>
						</template>
					</q-input>
				</q-form>
			</q-card-section>

			<q-card-section v-if="setproduct.state">
				<div>{{ setproduct.description }}</div>
				<q-form class="row q-gutter-lg">
					<q-input dense borderless readonly dark label="Stock" v-model="setproduct.stock" class="col"/>
					<q-input dense dark color="green-13" type="number" label="Minimo" v-model="setproduct.min" min="0" class="col" autofocus/>
					<q-input dense dark color="green-13" type="number" label="Maximo" v-model="setproduct.max" min="0" class="col"/>
					<q-btn v-if="canset" rounded flat class="bg-darkl1 shadow-1" color="green-13" icon="done" :loading="setproduct.setting" @click="set"/>
				</q-form>
			</q-card-section>
		</q-card>

		<q-card flat class="bg-darkl1 q-mt-md">
			<q-toolbar>Reportes</q-toolbar>
		</q-card>		
    </q-page>
</template>

<script>
import vizapi from '../../../API/warehouses'
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
			setproduct:{state:false,setting:false,code:undefined,min:0,max:0,currmin:0,currmax:0,stock:undefined,description:undefined}
        }
	},
	mounted(){ this.$refs.iptsearch.focus(); },
    methods:{
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
        get(){
            this.setproduct.state = false;
			this.iptsearch.processing=true;
			let codeart = this.iptsearch.value;
			let data = { params:{ code:codeart } }

			vizapi.product(data).then(success=>{
				let resp = success.data;
				if(resp.id){ 
					this.setproduct.code = resp.code;
					this.setproduct.stock = resp.stock;
					this.setproduct.min = resp.min;
					this.setproduct.max = resp.max;
					this.setproduct.currmin = resp.min;
					this.setproduct.currmax = resp.max;
					this.setproduct.description = resp.description;
					this.setproduct.state = true;
				}else{
					this.setproduct.state = false;
					this.$q.notify({
						message:`Sin coincidencias para ${codeart.toUpperCase()}`,
						timeout:1500, color:'negative', position:'center',
						icon:"fas fa-exclamation-triangle"
					});
				}
				this.iptsearch.processing=false;

			}).catch(fail=>{
                this.$q.notify({
					message:"Error de red, sin conexion al servidor :(",
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