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
            <q-btn rounded dense :color="sockstate?'green-13':''">
                <q-img :src="picnick" spinner-color="white" style="height: 30px; width: 30px"/>

                <q-menu
                    transition-show="flip-right"
                    transition-hide="flip-left"
                >
                    <q-list style="min-width: 150px" class="text-grey-8 exo">
                        <q-item>
                            <q-item-section>Hola {{session.me.nick}}</q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item clickable @click="sessionDestroy">
                            <q-item-section>Salir</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </span>
    </q-toolbar>
</template>

<script>
    export default{
        name: 'ToolbarAccount',
        props:{ 
            title:{type:String, required:true},
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
            picnick(){ return this.session.me.pictures ? this.session.me.pictures : 'https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' },
        }
    }
</script>
