<template>
	<q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

		<q-page-container class="bg-darkl0 exo">
			<!-- This is where pages get injected -->
			<!-- <router-view /> -->
			<q-page class="row items-center justify-center overflow-hidden">
				<div>


					<transition appear enter-active-class="animated fadeInUp delay-1s">
						<q-card class="bg-darkl1 text-white exo" key="title">
							<q-card-section class="row justify-between items-center">
								<span class="text-h6">
									<span class="text-pink-6"> Viz</span>
									<span class="text-weight-thin">App</span>
								</span>
							</q-card-section>
						</q-card>
					</transition>

					<transition appear enter-active-class="animated fadeInUp delay-2s">
						<q-form @submit="tryLogin" v-if="credentials.formstate" class="column loginform">
							<q-card flat class="q-mt-sm bg-darkl1 text-white">
								<q-card-section>
									<div class="column">
										<q-input dark color="green-13" label-color="grey-7" label="Usuario" class="ipt q-mb-xs" v-model="credentials.nick" autocapitalize="off" autocomplete="off">
											<template v-slot:prepend> <q-icon name="account_circle" color="grey-8"/> </template>
										</q-input>
										<q-input :type="ipttypepass?'password':'text'" dark color="green-13" label-color="grey-7" label="Contraseña" class="ipt q-mb-xs" v-model="credentials.pass" autocapitalize="off" autocomplete="off">
											<template v-slot:prepend> <q-icon name="lock" color="grey-8"/> </template>
											<template v-slot:append>
												<q-icon
													:name="ipttypepass ? 'visibility_off' : 'visibility'"
													class="cursor-pointer"
													@click="ipttypepass=!ipttypepass"
												/>
											</template>
										</q-input>
									</div>
								</q-card-section>

								<q-card-actions align="right" v-if="credentials.nick.length>=2&&credentials.pass.length>=4">
									<q-btn flat dense class="q-pa-sm" color="green-13" type="submit" label="entrar" :loading="credentials.logging" :disable="credentials.logging" />
								</q-card-actions>
							</q-card>
						</q-form>
					</transition>

					<div v-if="resume.state" class="q-mt-sm text-grey-6 loginform">
						<q-card flat class="bg-darkl1" v-if="resume.account.me.change_password">
							<q-card-section>
								Bienvenido <span class="text-green-13">{{ resume.account.me.names }}</span>.<br>Para continuar, porfavor establece una contraseña:
							</q-card-section>
							<q-form @submit="setPass">
								<q-card-section>
									<q-input dark color="green-13"
										label-color="grey-7"
										:type="ipttypepass?'password':'text'"
										class="ipt q-mb-xs" autocapitalize="off"
										autocomplete="off" label="Contraseña"
										v-model="setpass.pass"
										:hint="setpass.pass.length>=5?'':'Minimo 5 caracteres'"
									>
										<template v-slot:append>
											<q-icon
												:name="ipttypepass ? 'visibility_off' : 'visibility'"
												class="cursor-pointer"
												@click="ipttypepass=!ipttypepass"
											/>
										</template>
									</q-input>
									<q-input dark color="green-13"
										label-color="grey-7"
										:type="ipttypepass?'password':'text'"
										class="ipt q-mb-xs" autocapitalize="off"
										autocomplete="off" label="Confirmar Contraseña"
										v-model="setpass.confirm"
										:rules="[val => val==setpass.pass||'Las contraseñas no coinciden']"
									/>
								</q-card-section>
								<q-card-actions v-if="trysetpass" align="right">
									<q-btn dark color="green-13" flat type="submit" label="continuar" :loading="setpass.state" :disabled="setpass.state"/>
								</q-card-actions>
							</q-form>
						</q-card>

						<q-card flat v-else class="bg-darkl1 text-center">
							<q-card-section>
								<div>Bienvenido <span class="text-green-13">{{ resume.account.me.names }}</span>, espera...</div>
							</q-card-section>
							<q-card-section>
								<q-spinner-grid color="green-13" size="md"/>
							</q-card-section>
						</q-card>
					</div>
				</div>
			</q-page>

		</q-page-container>
	</q-layout>
</template>

<script>
import vizapi from '../API/signin.js'

export default {
	// name: 'LayoutName',
	data () {
		return {
			credentials:{ nick:"", pass:"", formstate:true, logging:false },
			resume:{ state:false, account:undefined, workpoints:undefined, text:"" },
			setpass:{ pass:'', confirm:'', state:false },
			ipttypepass:true,
			vsocket:this.$vSocket
		}
	},
	methods:{
		tryLogin(){
			let data = { "nick":this.credentials.nick, "password":this.credentials.pass }
			this.credentials.logging=true;
			vizapi.trySignin(data).then(success=>{
				let resp = success.data;
				console.log(resp);
				if(resp.account){
					this.credentials.formstate=false;
					this.resume.state=true;
					this.resume.account=resp.account;
					this.resume.workpoints=resp.workpoints;
					this.$vizapi.defaults.headers.common['Authorization'] = 'Bearer '+resp.account.token;

					if(!resp.account.me.change_password){ this.setSession(); }
					else{ this.ipttypepass=true; console.log("%cCambiar el pasword","font-size:2em;"); }
				}else{
					this.credentials.logging=false;
					this.$q.notify({ color:'red-13', message: resp.message, icon: 'announcement',timeout:800 });
				}
			}).catch(fail=>{
				console.log(fail);
				this.credentials.logging=false;
                this.$q.notify({ color:'negative', message:"¡¡Raios!! el servidor no responde!", icon: 'announcement' });
            });
		},
		setPass(){
			this.setpass.state = true;
			console.log("Seteando password");
			console.log(this.$vizapi.defaults.headers.common['Authorization']);

			let data = {
				"password": this.credentials.pass,
    			"new_password": this.setpass.confirm
			}

			vizapi.trySetPass(data).then(success=>{
				let resp = success.data;
				if(resp.success){
					this.resume.text="Iniciando...";
					this.resume.account.change_password = false;
					this.setSession();
				}else{
					this.setpass.state = false;
					this.$q.notify({ color:'red-13', message: resp.message, icon: 'announcement',timeout:800 });
				}
			}).catch(fail=>{
				console.log(fail);
			});
		},
		setSession(){
			console.log("%cSeteando Sesion","font-size:2em;");

			let data = {
				account:this.resume.account,
				workpoints:this.resume.workpoints,
				stock:true
			}

			this.$store.commit('Account/setsession',data);

			this.vsocket.connect();

			this.vsocket.on('socketid', data => {
				this.vsocket.emit('session_start',{profile:this.profile,socketid:data.socketid,from:this.workin});
				console.log("%cUnido al Canal Global (by LogIn)","background:#1B9CFC;color:white;border-radius:10px;padding:6px;");
			});

			this.$router.push('/lanzador');
		},
	},
	computed:{
		trysetpass(){ return (this.setpass.pass.length>4&&this.setpass.pass==this.setpass.confirm) },
		workin(){ return this.$store.getters['Account/workin']; },
		profile(){ return this.$store.getters['Account/profile']; }
	}
}
</script>
<style lang="scss">
	.mainicon{ border-radius:20px; }
	.loginform{ width:300px; }
</style>
