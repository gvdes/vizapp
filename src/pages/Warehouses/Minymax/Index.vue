<template>
    <q-page>
       	<q-header class="bg-darkl0 QuickRegular">
			<q-card class="bg-darkl1">
				<!-- <toolbar-account title="Ajuste"/> -->
				<HeaderApp title="Ajuste"/>
				<q-card-section>
					<!-- <ProductAutocomplete @input="selectedProd" :check-state="false" :val-state-cedis="1" /> -->
					<ProductAutocomplete @input="selectedProd" :workpoint-status="'all'"/>
				</q-card-section>
			</q-card>
		</q-header>

		<div class="QuickRegular text-white q-gutter-md q-pa-md row items-start justify-center" v-if="product">
      <q-card class="bg-darkl1">
        <q-card-section>

          <q-list dark dense>
            <q-item>
              <q-item-section>Codigo</q-item-section>
              <q-item-section>{{product.code}}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section>Descripcion</q-item-section>
              <q-item-section class="text--2">{{product.description}}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section>Piezas por Caja</q-item-section>
              <q-item-section>{{product.pieces}}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section>Stock</q-item-section>
              <q-item-section v-if="wkpData" >{{wkpData.gen}}</q-item-section>
              <q-item-section v-else class="text-amber-13">Producto sin Stocks</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-section>
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
            <div class="q-mt-xs row items-center q-gutter-md">
              <q-input filled type="number" dark label="Minimo" color="green-13" v-model="wkpData.min" @change="setChanges" min="0"/>
              <q-input filled type="number" dark label="Maximo" color="green-13" v-model="wkpData.max" @change="setChanges" min="0"/>
            </div>
            <q-btn v-if="showSave" color="primary" class="full-width q-py-md q-mt-md" label="Aplicar Cambios" no-caps icon="done" @click="saveChanges"/>
          </template>
        </q-card-section>
        <q-separator dark />
        <q-card-section>
          <q-list>
            <q-item v-for="(ext,idx) in storeExtensions" :key="idx">
              <q-item-section>{{ ext.name }}</q-item-section>
              <q-item-section>{{ ext.stock }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <q-card class="bg-darkl1">
        <q-card-section v-if="storesStocks.length">
          <q-table dark flat
            :data="storesStocks"
            :columns="tableStocks.cols"
            row-key="id"
            class="transparent"
          >

          </q-table>
        </q-card-section>
      </q-card>

			<!-- <q-card class="bg-darkl1 bg-none" flat>
        <div class="q-mt-md q-pt-md row items-center justify-around" v-if="storeExtensions.length">
          <q-card v-for="(ext,idx) in storeExtensions" :key="idx" dark class="bg-darkl2">
            <q-card-section>
              <div class="text-overline">{{ext.name}}</div>
							<div>Stock: {{ext.stock}}</div>
            </q-card-section>
          </q-card>
        </div>
			</q-card> -->
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
          showSave:false,
          tableStocks:{
            cols:[
              // { name:"id", label:"IDWKP", field:"_workpoint" },
              { name:"branch", label:"Sucursal", field:"name", align:"left", sortable:true },
              { name:"stock", label:"Stock (pzs)", field:"stock", align:"center", sortable:true },
              { name:"statename", label:"Estatus", field: row => row.status.name, align:"left" },
            ]
          }
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
      wkpData(){ return this.product ? this.product.stocks.find( wkp => this.workin.workpoint.id == wkp._workpoint) : undefined; },
      storesStocks(){ return this.product.stocks ? this.product.stocks.filter( wpk => wpk._workpoint!=this.workin.workpoint.id ) : [] },
      optionStates(){ return this.listStates ? this.listStates.filter( s => s.id<=3||s.id==6) : []; },
      storeExtensions(){
        if(this.product){
          let exts = this.product.stocks.find( s => s._workpoint=1);

          return exts ?
            [
              { name:"Texcoco", stock: exts.STC },
              { name:"Vallejo 236", stock: exts.V23 },
              { name:"Los Reyes", stock: exts.LRY },
            ] : [];
        } return [];
      }
    },
}
</script>
