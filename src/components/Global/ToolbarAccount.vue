<template>
    <q-toolbar class="row justify-between items-center">
        <span>
            <q-btn v-if="iconlauncher" dense rounded flat icon="fab fa-atlassian fa-rotate-180" @click="$router.push('/')"/>
            <q-icon v-else name="fab fa-atlassian fa-rotate-180" size="25px"/>
        </span>
        <span class="col text-center">
            <span>{{ workin.workpoint.alias }}</span><br/>
            <span>{{title}}</span>
        </span>
        <span class="text-right">
          <q-btn @click="wndGuide=true" round outline color="grey-8" class="q-mr-sm">
                <q-icon name="img:serie.png" size="30px"/>
              </q-btn>
            <q-btn rounded dense :color="sockstate?'green-13':''">
                <q-img src="~/src/assets/user1.png" spinner-color="white" style="height: 30px; width: 30px"/>

                <q-menu dark
                    transition-show="flip-right"
                    transition-hide="flip-left"
                >
                    <q-list style="min-width: 150px" class="exo text-grey-6">
                        <q-item clickable @click="$router.push('/perfil');">
                            <q-item-section avatar><q-icon name="fas fa-user-astronaut" /></q-item-section>
                            <q-item-section>Hola {{session.me.nick}}</q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item clickable @click="sessionDestroy">
                            <q-item-section avatar><q-icon name="meeting_room" /></q-item-section>
                            <q-item-section>Salir</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </span>

        <q-dialog v-model="wndGuide"> <LGuide /> </q-dialog>
    </q-toolbar>
</template>

<script>
    import LGuide from "src/components/Guide.vue";
    export default{
        name: 'ToolbarAccount',
        components: { LGuide },
        data() {
          return {
            wndGuide:false
          }
        },
        props:{
            title:{type:String, default:''},
            iconlauncher:{ type:Boolean, default:true },
            sockstate:{ type:Boolean, default:false },
        },
        methods:{
            sessionDestroy(){
                this.$store.commit('Account/unsetsession');
                this.$router.push('/acceso');
            }
        },
        computed:{
            session:{ get(){ return this.$store.state.Account.profile } },
            workin:{ get(){ return this.$store.state.Account.workin } },
            workpoints:{ get(){ return this.$store.state.Account.workpoints } },
            picnick(){ return this.session.me.pictures ? this.session.me.pictures : 'https://image.flaticon.com/icons/png/512/2835/2835180.png' },
        }
    }
</script>
