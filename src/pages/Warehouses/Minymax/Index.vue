<template>
    <q-page>
       	<q-header class="bg-darkl0 QuickRegular">
			<q-card class="bg-darkl1">
				<!-- <toolbar-account title="Ajuste"/> -->
				<HeaderApp title="Ajuste"/>
				<q-card-section>
					<ProductAutocomplete @input="selectedProd" :check-state="false" :workpoint-status="[1,2,13]" :val-state-cedis="1" />
				</q-card-section>
			</q-card>
		</q-header>

		<div class="QuickRegular text-white q-pt-sm" v-if="product">
			<q-card class="bg-darkl1 bg-none" flat>
				<div class="q-pa-md text-center">
					<div class="text-h5">{{product.code}}</div>
					<div class="text--2">{{product.description}}</div>
				</div>
				<q-card-section>
					<!-- <div class="col q-py-md" v-if="wkpData">{{wkpData.name}}</div> -->
					<q-card class="bg-none row items-center">
						<q-select dark color="green-13"
							filled
							:options="optionStates"
							v-model="state"
							option-value="id"
							option-label="name"
							@input="freshState"
							label="Estatus"
							class="col"
						/>

						<template v-if="wkpData">
							<q-input filled type="number" dark label="Minimo" class="col" color="green-13" v-model="wkpData.min" @change="setChanges" min="0"/>
							<q-input filled type="number" dark label="Maximo" class="col" color="green-13" v-model="wkpData.max" @change="setChanges" min="0"/>
						</template>
					</q-card>
					<q-btn v-if="showSave" color="primary" class="full-width q-py-md" label="Aplicar Cambios" no-caps icon="done" @click="saveChanges"/>
					<div class="q-mt-md row justify-around" v-if="wkpData">
						<div class="text-center q-px-md">
							<div class="text-h5">{{product.pieces}}</div>
							<div class="text--2">PxC</div>
						</div>
						<div class="text-center q-px-md">
							<div class="text-h5">{{wkpData.stock}}</div>
							<div class="text--2">Stock</div>
						</div>
					</div>

					<div v-else class="text-amber-13 q-mt-md">Producto sin Stocks</div>
				</q-card-section>

				<template v-if="stocksWkps&&stocksWkps.length">
					<div class="row justify-around">
						<q-card class="q-pa-md bg-darkl2" v-for="wkp in stocksWkps" :key="wkp._workpoint">
							<div class="text-overline">{{wkp.name}}</div>
							<div>Stock: {{wkp.stock}}</div>
							<div>Estatus: {{wkp.status.name}}</div>
						</q-card>
					</div>
				</template>

        <div class="q-mt-md q-pt-md row items-center justify-around" v-if="storeExtensions.length">
          <q-card v-for="(ext,idx) in storeExtensions" :key="idx" dark class="bg-darkl2">
            <q-card-section>
              <div class="text-overline">{{ext.name}}</div>
							<div>Stock: {{ext.stock}}</div>
            </q-card-section>
          </q-card>
        </div>
			</q-card>
		</div>
    </q-page>
</template>

<script>
import WarehouseDB from '../../../API/warehouses'
import ProductDB from '../../../API/Product'
import HeaderApp from '../../../components/Global/HeaderApp.vue'
import ProductAutocomplete from '../../../components/Global/ProductAutocomplete.vue'

export default{
	components:{ ProductAutocomplete, HeaderApp },
    data(){
        return {
          listStates:null,
          product:undefined,
          state:undefined,
          cmin:undefined,
          cmax:undefined,
          showSave:false
        }
	},
	async mounted() {
		console.log("%cMontando minimos y maximos","font-size:1.5em; color:gold;");
		this.listStates = await ProductDB.listStates();
	},
    methods:{
		async saveChanges(){
			let data ={
				id:this.product.id,
				min:this.wkpData.min,
				max:this.wkpData.max
			}

			let resp = await WarehouseDB.setminmax(data);
			console.log(resp);

			if(resp.error){
				this.$q.notify({ message:resp.error, icon:'fas fa-bug', timeout:3000, color:'negative', position:'center' });
			}else{
				this.$q.notify({ message:'Actualizado!', icon:'done', timeout:1500, color:'positive' , position:'center' });
				this.cmin = this.wkpData.min;
				this.cmax = this.wkpData.max;

				console.log(this.cmin==this.wkpData.min);
				console.log(this.cmax==this.wkpData.max);
				this.showSave = false;
			}
		},
		setChanges(){ this.showSave = ((this.cmin!=this.wkpData.min) || (this.cmax!=this.wkpData.max)); },
		selectedProd(product){
			console.log("Producto Seleccionado");
			console.log(product);
			this.product = undefined;
			this.product = product;
			this.state = product.status;

			if(this.wkpData){
				this.cmin = this.wkpData.min;
				this.cmax = this.wkpData.max;
			}
		},
		async freshState(){
			let data = {"_product":this.product.id,"_status":this.state.id}

			let resp = await ProductDB.freshState(data);

			if(resp.error){
				this.$q.notify({
					message:'El status no pudo actualizarse :(',
					color:'negative', icon:'fas fa-bug', timeout:1500
				});
			}else{
				this.$q.notify({
					message:`Producto actualizado!`,
					timeout:1500, color:'positive', position:'center',
					icon:"done", html:true
				});
			}
		},
    },
    computed:{
      ismobile(){ return this.$q.platform.is.mobile; },
      profile(){ return this.$store.getters['Account/profile']; },
      workin(){ return this.$store.getters['Account/workin']; },
      wkpData(){ return this.product ? this.product.stocks.find( b => this.workin.workpoint.id == b._workpoint) : undefined; },
      stocksWkps(){ return this.product ? this.product.stocks.filter( b => this.workin.workpoint.id != b._workpoint) : undefined; },
      optionStates(){ return this.listStates ? this.listStates.filter( s => s.id<=3||s.id==6) : []; },
      storeExtensions(){
        if(this.product){
          let exts = this.product.stocks.find( s => s._workpoint=1);

          return exts ?
            [
              { name:"Vallejo 236", stock: exts.V23 },
              { name:"Los Reyes", stock: exts.LRY },
              { name:"Texcoco", stock: exts.STC },
            ] : [];
        } return [];
      }
    },
}
</script>
