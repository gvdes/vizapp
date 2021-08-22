<template>
	<q-layout view="hHh Lpr fFf" class="exo bg-darkl0 text-grey-6"> <!-- Be sure to play with the Layout demo on docs -->

		<!-- (Optional) The Footer -->
		<q-footer class="bg-none">
			<q-btn flat rounded @click="sessionDestroy" class="text-overline text-amber-13" label="salir"/>
		</q-footer>

		<q-page-container>
			<!-- This is where pages get injected -->
			<q-page class="row items-center justify-center">

				<div style="min-width:250px;" v-if="workIn.workpoint">
					<div class="row items-center justify-center">
						<q-img :src="picnick(session.me.pictures)" spinner-color="white" style="height: 140px; max-width: 140px"/>
					</div>

					<div class="text-center">
						<div class="text-h4 q-py-sm"> <span>Hola </span><span :class="vsocket.connected ? 'text-green-13':''">{{ session.me.nick }}</span></div>
						<div class="q-mb-md">¿por donde iniciamos?</div>
					</div>
					
					
					<q-card flat :class="{'bg-darkl1':true, 'cursor-pointer':workpoints.length>1}" @click="openSetWorkpoint" >
						<q-card-section>
							<div>Punto de Trabajo:</div>
							<div class="text-grey-4">{{ workIn.workpoint.name }}</div>
						</q-card-section>
					</q-card>


					<q-card flat class="bg-darkl1 q-mt-md cursor-pointer" @click="openSetModule">
						<q-card-section>
							<div>Modulo:</div>
							<div class="text-grey-4">{{ workIn.module ? workIn.module.name:' --- ' }}</div>
						</q-card-section>
					</q-card>

					<div class="text-center q-py-md" v-if="workIn.module">
						<q-btn label="entrar" flat rounded color="green-13" @click="go"/>
					</div>
				</div>
			</q-page>

			<q-dialog
				v-model="wndSetWorkpoint.state" 
				:maximized="ismobile"
				transition-show="slide-up"
      			transition-hide="slide-down"
			>
				<q-layout view="Lhh lpR fff" container class="bg-darkl0 exo" v-if="workIn.workpoint">
					<q-header elevated class="bg-darkl1 text-grey-6">
						<q-toolbar>
							Seleccione punto de trabajo
						</q-toolbar>
					</q-header>

					<q-page-container>
						<q-page padding>
							<div class="row text-grey-6">
								<div v-for="(wkp,idx) in workpoints" :key="idx" class="q-pa-xs col-6">
									<q-card bordered flat class="bg-darkl1 cursor-pointer" @click="setWorkpoint(wkp)">
										<q-card-section :class="wkp.workpoint.id==workIn.workpoint.id?'text-green-13':''">
											<div class="text-h5">{{ wkp.workpoint.alias }}</div>
											<div>{{ wkp.workpoint.name }}</div>
										</q-card-section> 
									</q-card>
								</div>
							</div>
						</q-page>
					</q-page-container>

					<q-footer elevated class="bg-red-13" v-if="ismobile">
						<q-btn flat v-close-popup dense icon="close" class="full-width q-py-md" />
					</q-footer>
				</q-layout>
			</q-dialog>

			<q-dialog
				v-model="wndSetModule.state" 
				:maximized="ismobile"
				transition-show="slide-up"
      			transition-hide="slide-down">

				<q-layout view="Lhh lpR fff" container class="bg-darkl0 exo" v-if="workIn.workpoint">
					<q-header elevated class="bg-darkl1 text-grey-6">
						<q-toolbar class="row justify-between">
							<span>Seleccione modulo</span>
							<span class="text-green">{{ workIn.workpoint.name }}</span>
						</q-toolbar>
					</q-header>

					<q-page-container>
						<q-page padding>
							<div class="row text-grey-6">
								<div v-for="(mdl,idx) in modules" :key="idx" class="q-pa-xs col-6">
									<q-card bordered flat class="bg-darkl1 cursor-pointer" @click="setModule(mdl)">
										<q-card-section >
											<div class="text-h5">{{mdl.name}}</div>
										</q-card-section> 
									</q-card>
								</div>
							</div>
						</q-page>
					</q-page-container>

					<q-footer elevated class="bg-red-13" v-if="ismobile">
						<q-btn flat v-close-popup dense icon="close" class="full-width q-py-md" />
					</q-footer>
				</q-layout>
			</q-dialog>
		</q-page-container>

	</q-layout>
</template>

<script>
import apiwkp from '../API/workpoint.js'
export default {
	// name: 'LayoutName',
	data () {
		return { 
			vsocket:null,
			workIn:{workpoint:undefined,module:undefined},
			modules:undefined,
			wndSetWorkpoint:{state:false},
			wndSetModule:{state:false},
		}
	},
	beforeMount(){
		this.vsocket = this.$vSocket;

		setTimeout(() => {
			if(!this.vsocket.connected){
				this.$q.notify({
					message:'No se logro establecer conexion al socket',
					color:'negative'
				});
			}
		},300);

		console.log(this.$vizapi.defaults.headers.common['Authorization']);

		// por default selecciona el workpoint base
		this.workIn.workpoint = this.session.workpoint;
		
		//p acceso a un solo punto de trabajo
		if(this.workpoints.length==1){
			// console.log("%cAcceso a un solo workpoint, listando modulos disponibles","color:gold;font-size:1.3em;");
			this.modules = this.workpoints[0].modules;
			if(this.modules.length==1){
				// console.log("%cAcceso a un solo modulo, autoseleccionando...","color:gold;font-size:1.3em;");
				this.workIn.module=this.modules[0];
				// console.log(`%credireccionar a ${this.workIn.module.path}`,"color:gold;font-size:1.3em;");
				this.go();
			}else if(this.modules.length>1){
				console.log("%cAcceso a mas de un modulo","color:gold;font-size:1.3em;");
			}
		}else if(this.workpoints.length>1){
			console.log("%cAcceso a mas de un workpoint, preguntando por modulos","color:gold;font-size:1.3em;");
			// busca los modulos relacionados a ese workpoint
			let idx = this.workpoints.findIndex(wkp => wkp.workpoint.id==this.session.workpoint.id);
			// agrega los modulos del workpoint base
			this.modules = this.workpoints[idx].modules;
			if(this.modules.length==1){
				console.log("%cAcceso a un solo modulo, autoseleccionar","color:gold;font-size:1.3em;");
				console.log(this.modules);
				this.workIn.module=this.modules[0];
			}else if(this.modules.length>1){ 
				console.log("%cAcceso a mas de un modulo","color:gold;font-size:1.3em;");
			}
		}
	},
	mounted(){
		console.log("%cLauncherLy montado!!","background:#3c40c6;color:white;border-radius:10px;padding:6px;");
	},
	methods:{
		openSetWorkpoint(){ if(this.workpoints.length>1){ this.wndSetWorkpoint.state=true; } },
		openSetModule(){ if(this.modules.length>1){ this.wndSetModule.state=true; } },
		setWorkpoint(wkp){
			console.log(wkp);
			if(this.workIn.workpoint.id!=wkp.workpoint.id){
				this.workIn.workpoint=wkp.workpoint;
				this.modules = wkp.modules;
				// si existe solo un modulo para esta sucursal, lo autoselecciona
				this.workIn.module = wkp.modules.length>1 ? undefined:this.modules[0];
			}else{ console.log("seleccionaste el mismo (y-_-)y"); }
			// cerrar la ventana
			this.wndSetWorkpoint.state=false;
		},
		setModule(mdl){
			console.log(mdl);
			this.workIn.module = mdl;
			this.wndSetModule.state=false;
		},
		sessionDestroy(){
			this.$store.commit('Account/unsetsession');
			this.$router.push('/acceso');
		},
		go(){
			let data = { "workpoint":this.workIn.workpoint.id };

			apiwkp.join(data).then(success=>{
				let resp = success.data;
				this.$store.commit('Account/join',resp);
				this.$store.commit('Account/setworkpoint',this.workIn);
				this.$router.push(`/${this.workIn.module.path}`);
				// console.log(resp);
			}).catch(fail=>{ console.log(fail); });

		}
	},
	computed:{
		session:{ get(){ return this.$store.state.Account.profile } },
		workpoints:{ get(){ return this.$store.state.Account.workpoints } },
		picnick(){ return img => { return img ? img : 'https://image.flaticon.com/icons/png/512/2835/2835180.png' } },
		ismobile(){ return this.$q.platform.is.mobile; }
	}
}
</script>