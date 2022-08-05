<template>
	<div class="q-pa-sm row items-center">
		<!-- <q-btn v-if="iconlauncher" dense rounded flat icon="fab fa-atlassian fa-rotate-180" @click="$router.push('/')"/> -->
		<div class="col text-ledt">
			<q-btn dense rounded flat icon="fab fa-atlassian fa-rotate-180" @click="$router.push('/')"/>
		</div>
		
		<div class="col text-center">
			<div>{{workin.workpoint.alias}}</div>
			<div class="text--2 text-grey-5">{{title}}</div>			
		</div>
		
		<div class="col text-right">
			<q-btn rounded dense :color="vsocket.connected?'green-13':''">
                <q-img src="~/src/assets/1049387.png" spinner-color="white" style="height: 30px; width: 30px"/>
                <q-menu dark
                    transition-show="flip-right"
                    transition-hide="flip-left"
                >
                    <q-list style="min-width: 150px" class="exo text-grey-6">
                        <q-item clickable @click="$router.push('/perfil');">
                            <q-item-section avatar><q-icon name="fas fa-user-astronaut" /></q-item-section>
                            <q-item-section class="text-green-13">{{profile.me.nick}}</q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item clickable @click="sessionDestroy">
                            <q-item-section avatar><q-icon name="meeting_room" /></q-item-section>
                            <q-item-section>Salir</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderApp',
		props:{
			title:{ type:String, default:'' }
		},
		data () {
			return {
				vsocket:false
			}
		},
		mounted(){ this.vsocket = this.$vSocket; },
		methods:{
			sessionDestroy(){
				this.$store.commit('Account/unsetsession');
				this.$router.push('/acceso');
			}
		},
		computed:{
			profile:{ get(){ return this.$store.state.Account.profile } },
			workin:{ get(){ return this.$store.state.Account.workin } },
			picnick(){ return this.profile.me.pictures ? this.session.me.pictures : 'https://image.flaticon.com/icons/png/512/2835/2835180.png' },
		}
	}
</script>
