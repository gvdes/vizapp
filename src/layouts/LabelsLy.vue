<template>
	<q-layout class="exo" view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
		<q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account/>
				<div class="q-pa-sm row text-center">
					<div class="col">
						<div class="text--2 text-grey-6">Modelos</div>
						<div class="text-light-blue-13 text-h6">{{this.labels.length}}</div>
					</div>

					<div class="col">
						<div class="text--2 text-grey-6">Etiquetas</div>
						<div class="text-light-blue-13 text-h6">{{this.labels_size}}</div>
					</div>

					<div class="col">
						<div class="text--2 text-grey-6">Estandar</div>
						<div class="text-green-13 text-h6">{{this.labels_standar}}</div>
					</div>

					<div class="col">
						<div class="text--2 text-grey-6">Ofertas</div>
						<div class="text-orange text-h6">{{this.labels_offers}}</div>
					</div>
				</div>
			</q-card>
		</q-header>

		<q-dialog v-model="wndAddProduct.state" class="text-grey-6" position="bottom">
			<q-card class="bg-darkl1 text-grey-6">
				<ProductAutocomplete :checkState="false" @input="add" />
			</q-card>
		</q-dialog>

		<q-dialog v-model="wndImport.state" persistent>
			<q-card class="bg-darkl0 text-grey-5 exo">
				<q-card-section>
					Se preocesaron {{wndImport.rows}} filas, {{wndImport.goals.length}} modelos fueron encontrados y agregados a la lista pero;
				</q-card-section>
				<q-card-section v-if="wndImport.notfound.length">
					<div>No encontramos estos {{wndImport.notfound.length}} modelos:</div>
					<div class="text-uppercase" v-for="(code,idx) in wndImport.notfound" :key="'cnf_'+idx">
						{{code}}
					</div>
				</q-card-section>
				<q-card-section v-if="wndImport.repeat.length">
					<div>Se repitieron estos {{wndImport.repeat.length}} codigos:</div>
					<div class="text-uppercase" v-for="(code,idx) in wndImport.repeat" :key="'crp_'+idx">{{code}}</div>
				</q-card-section>
				<q-card-actions align="center">
					<q-btn flat label="Ok" color="green-13" v-close-popup/>
				</q-card-actions>
			</q-card>
		</q-dialog>

		<q-dialog position="bottom" v-model="wndGenPdf.state">
			<q-card class="bg-darkl0 exo text-grey-6">
				<q-card-section>Seleccione un formato</q-card-section>
				<div class="row">
					<q-btn flat style="min-height:80px;" color="grey-5" class="col-6" v-for="format in wndGenPdf.formatts" :key="format.id" :label="format.name" @click="genPdf(format.id)"/>
				</div>
			</q-card>
		</q-dialog>

		<!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
		<q-drawer v-model="leftDrawer" side="left" content-class="bg-darkl0 text-grey-6">
			<!-- QScrollArea is optional -->
			<q-scroll-area class="fit">
				<div class="column q-gutter-md q-pt-md">					
					<div class="q-px-md">
						<div>
							<q-checkbox dark v-model="useIpack" label="Incluir piezas por Caja" color="green-13" @input="updateCacheLabels"/>
						</div>
					</div>

					<div class="q-px-md">
						<div class="text-overline">Precios</div>
						<div class="column">
							<q-checkbox dark v-model="usingPrices" 
								v-for="(lprice,idx) in labelsPrices" :key="idx" 
								:val="lprice.id" :label="lprice.fullname" color="green-13"
								@input="updateCacheLabels"
							/>
						</div>
					</div>

					<div class="q-px-md">
						<div class="text-overline">Opciones</div>
						<div>
							<q-btn-group spread class="bg-darkl1">
								<q-btn dark icon="publish" @click="triggerInputFile"/>
								<template v-if="labels.length">
									<q-btn dark icon="delete_sweep" @click="confirmDrop"/>
									<q-btn dark icon="fas fa-file-download"  @click="wndGenPdf.state=true"/>
								</template>
							</q-btn-group>
						</div>
						<input type="file" ref="blobfile" id="blobfile" @input="readFile" hidden accept=".xlsx,.xls"/>
					</div>
				</div>
			</q-scroll-area>
		</q-drawer>

		<q-page-container>
		<!-- This is where pages get injected -->
		<!-- <router-view /> -->
			<q-page padding class="bg-darkl0 text-grey-5">
				<div class="q-gutter-sm q-pb-xl">
					<q-card class="bg-darkl1" v-for="(label,idx) in labels" :key="idx">
						<q-card-section>
							<div class="row items-center">
								<q-chip size="sm" class="fixed-right absolute-right text-bold text-white text-uppercase" :color="colorLabel(label.type)">{{label.type}}</q-chip>
								<!-- <div>
									imagen
								</div> -->
								<div class="col text-center">
									<div class="text-h5">{{label.code}}</div>
									<div class="text-bold">{{label.name}}</div>
									<div class="text--2">{{label.description}}</div>
									<div class="text-bold" v-if="useIpack">{{label.pieces}} pzs</div>
								</div>
							</div>
						</q-card-section>
						<q-card-section>
							<div class="row items-start text-white">
								<div class="col text-center" v-for="(price,idx) in label.usedPrices" :key="idx">
									<div>{{price.alias}}</div>
									<div>{{price.price}}</div>
								</div>
							</div>
						</q-card-section>
						<q-btn-group spread class="text-grey-5">
							<q-btn flat color="negative" icon="delete" @click="remove(idx)"/>
							<q-btn flat icon="settings" disable/>
							<q-btn flat icon="remove" @click="updateCopies(idx,'d')"/>
							<span class="text-center self-center q-px-md">
								<div class="text-caption text--2 ">copias</div>
								<div class="text-bold q-pb-sm">
									<!-- <q-input type="number" min="1" v-model="label.copies" borderless/> -->
									{{label.copies}}
								</div>
							</span>
							<q-btn flat icon="add" @click="updateCopies(idx,'u')"/>
						</q-btn-group>
					</q-card>
				</div>
			</q-page>

			<q-page-sticky position="bottom-right" :offset="[10, 10]">
				<div class="column q-gutter-sm">
					<q-btn color="green-13" class="bg-darkl1 shadow-2" flat rounded icon="add" @click="wndAddProduct.state=true"/>
				</div>
			</q-page-sticky>

			<q-page-sticky position="bottom-left" :offset="[10, 10]">
				<div class="column q-gutter-sm">
					<q-btn color="green-13" dense flat rounded icon="settings" @click="leftDrawer=true"/>
				</div>
			</q-page-sticky>
		</q-page-container>

	</q-layout>
</template>

<script>
import dblabels from '../API/labels.js'
import ExcelJS from 'exceljs'
import dbproduct from '../API/Product'
import ToolbarAccount from '../components/Global/ToolbarAccount.vue'
import ProductAutocomplete from '../components/Global/ProductAutocomplete.vue'
export default {
  // name: 'LayoutName',
	components:{ 
		ToolbarAccount:ToolbarAccount,
		ProductAutocomplete:ProductAutocomplete
	},
	data () {
		return {
			leftDrawer: false,
			labelsPage:[],
			labelsPrices:[
				{id:1,fullname:'Menudeo',shortname:'MEN'},
				{id:2,fullname:'Mayoreo',shortname:'MAY'},
				{id:3,fullname:'Docena',shortname:'DOC'},
				{id:4,fullname:'Caja',shortname:'CAJ'},
			],
			usingPrices:[2],
			useIpack:false,
			wndAddProduct:{state:false},
			index:undefined,
			wndGenPdf:{state:false,formatts:[]},
			wndImport:{state:false,goals:[],notfound:[],repeat:[],rows:0}
		}
	},
	async beforeMount() {
		this.$store.commit('Layout/hideToolbarModule');
		this.index = await dblabels.index();
		this.wndGenPdf.formatts = this.index.types;

		let applabels = JSON.parse(localStorage.getItem('applabels'));
		if (applabels) {
			this.usingPrices = applabels.settings.usingPrices;
			this.useIpack = applabels.settings.useIpack;
			this.labelsPage = applabels.labels;
		}else{
			applabels = {
				settings:{
					usingPrices:[1,2],
					useIpack:false
				},
				labels:[]
			}
			localStorage.setItem('applabels',JSON.stringify(applabels));
		}
	},
	methods: {
		add(opt){
			let newLabel = JSON.parse(JSON.stringify(opt));

			if(this.labelsPage.findIndex(item=>{return item.id==newLabel.id})>=0){
				this.$q.notify({
					icon:'fas fa-grin-beam-sweat',
					color:'info',
					message:`<b>${newLabel.code}</b> ya existe en la lista`,
					html:true
				});
			}else{
				console.log("Agregar Etiqueta");
				let _labelType = this.labelType(newLabel.prices,newLabel.pieces);
				console.log(_labelType);

				newLabel.copies = 1;
				newLabel.type =_labelType.type;
				newLabel.usedPrices =_labelType.prices;

				this.labelsPage.unshift(newLabel);
				this.updateCacheLabels();
			}
		},
		remove(idx){
			this.labelsPage.splice(idx,1);
			this.updateCacheLabels();
		},
		confirmDrop(){
			this.$q.dialog({
				message: 'Quieres eliminar todas las etiquetas?',
				cancel: true,
				persistent: true
			}).onOk(() => {
				this.labelsPage = [];
				this.updateCacheLabels();
				this.$q.notify({
					message:'Etiquetas eliminadas.',
					icon:'done',
					color:'positive',
					position:'center',
					timeout:1000
				});
				this.leftDrawer = false;
			});
		},
		updateCacheLabels(){
			let applabels = {
				settings:{
					usingPrices:this.usingPrices,
					useIpack:this.useIpack
				},
				labels:this.labelsPage
			}

			localStorage.setItem('applabels',JSON.stringify(applabels));
		},
		updateCopies(idx,opt){
			switch (opt) {
				case 'd': this.labels[idx].copies>1? this.labelsPage[idx].copies--:this.labels[idx].copies=1; break;
				default: this.labels[idx].copies++; break;
			}
			this.updateCacheLabels();		
		},
		genPdf(type){
			console.log("Generando PDF en formato: "+type);

			this.$q.loading.show({ message:'Generando documento, espera..' });
			let products = this.labelsPage.map(item=>{
				console.log(item);
				return {
					"id": item.id,
					"code": item.code,
					"name": item.name,
					"description": item.description,
					"type": item.type,
					"copies": item.copies,
					"prices": item.usedPrices,
					"pieces": item.pieces
				}
			});

			let data = {
				"_pdf": type,
				"isInnerPack": this.useIpack,
				"products":products
			}

			dblabels.generate(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				this.$q.loading.hide();
				window.open(`${this.$routefiles}/${resp.file}`);
				this.$q.notify({
					message:'Documento generado',
					icon:'done',
					color:'positive'
				});
				this.wndGenPdf.state = false;
			}).catch(fail=>{ console.log(fail); });
		},
		labelType(_prices,ipack){
			let natprices = [..._prices];
			let prices = [..._prices];			

			let pricesToOffer = natprices.filter(item=>{return item.id==1||item.id==2||item.id==3||item.id==4});//precios para validar oferta
			let pricesToMayMen = natprices.filter(item=>{return item.id==2||item.id==3||item.id==4});//precios pra poner solo mayoreo

			let avgOffer = pricesToOffer.reduce((amm,price)=>amm+price.price,0)/4;//sumatoria de los precios del producto
			let avgMenMay = pricesToMayMen.reduce((amm,price)=>amm+price.price,0)/3;//sumatoria de los precios del producto

			if(avgOffer==pricesToOffer[0].price){
				console.log("Es oferta");
				let _prices_ = {
					id:0,
					alias:'OFERTA',
					name:'Oferta',
					price:prices[0].price,
					used:true
				};
				return {type:"off",prices:[_prices_]};
			}else if((avgMenMay==pricesToMayMen[0].price)&&(natprices[0].price!=avgMenMay)){
				console.log("Es May/Men");
				return {type:"may",prices:natprices.filter(item=>{return item.id==1||item.id==2}) };
			}else{
				console.log("Es standard");
				console.log(`ipack: ${ipack}`);

				if(ipack<4){
					console.log("hay que omitir el precio de caja, aunque este seleccionado");
					let idx = prices.findIndex(item=>item.id == 4);
					prices.splice(idx,1);
					console.log(prices);
				}
				prices.map(item=>{ item.used = this.usingPrices.includes(item.id) ? true:false; return item; });
				return {type:"std",prices:prices.filter(item=>{ return item.used })}
			}
		},
		triggerInputFile(){ this.$refs.blobfile.click(); },
		readFile(){
			let inputFile = document.getElementById('blobfile').files[0];
			let workbook = new ExcelJS.Workbook();
			let codesToSend = [];

			workbook.xlsx.load(inputFile).then((data)=>{
				let worksheet = workbook.worksheets[0];
				let column = worksheet.getColumn('A');
				column.eachCell({ includeEmpty: true }, function(cell, rowNumber) { 
					cell.value ? codesToSend.push(cell.value) : null;
				});

				if(codesToSend.length){
					console.log(codesToSend);
					let data = { codes:codesToSend }
					this.wndImport.rows = codesToSend.length;
					this.$q.loading.show({ message:'Procesando archivo, espera..' });
					dbproduct.getMassive(data).then(success=>{
						let resp = success.data;
						console.log(resp);
						let addeds = 0;
						resp.products.forEach(item => {
							this.add(item);
							this.wndImport.goals.unshift(item);
							addeds++;
						});
						this.$q.loading.hide();

						//al menos una etiqueta fue agregada, y no hay errores
						if(addeds&&(!resp.fails.notFound.length&&!resp.fails.repeat.length)){
							this.$q.notify({
								message:`Etiquetas generadas: ${addeds}`,
								color:'positive', icon:'done', timeout:1000
							});
						}else{
							this.wndImport.notfound=resp.fails.notFound;
							this.wndImport.repeat=resp.fails.repeat;
							this.wndImport.state=true;
						}
					}).catch(fail=>{ console.log(fail); });
				}else{
					this.$q.notify({
						message:'Vaya!! Al parecer este archivo esta vacio.',
						icon:'fas fa-grin-beam-sweat', color:'negative'
					});
				}

				document.getElementById('blobfile').value="";
			});
		}
	},
	computed:{
		labels(){ if(this.labelsPage.length){ return this.labelsPage; } return []; },
		labels_size(){
			return this.labels.reduce((ammount,item)=>{return item.copies+ammount},0);
		},
		labels_standar(){ 
			return this.labels.filter(item=>item.type=="std"||item.type=="may").reduce((ammount,item)=>{return item.copies+ammount},0);
		},
		labels_offers(){
			return this.labels.filter(item=>item.type=="off").reduce((ammount,item)=>{return item.copies+ammount},0);
		},
		colorLabel(){ return type => {
				switch (type) {
					case 'off': return 'orange-9';	break;
					case 'may': return 'light-blue-9'; break;
					case 'std': return 'green-9'; break;
				}
			}
		}
	}
}
</script>
<style lang="scss" scoped>
	.labeloff{ background:#E65329; }
	.labelstd{ background:#558B2F; }
</style>