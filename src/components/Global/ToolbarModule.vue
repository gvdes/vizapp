<template>
    <q-toolbar class="bg-none" v-if="layout.bottom_toolbar">
        <q-card class="bg-darkl1 text-grey-4 full-width">
            <q-tabs dense>
                <q-route-tab exact
                    icon="home"
                    :to="`/${modules.prefix}`"
                    v-if="with_home"
                />

                <q-route-tab exact
                    v-for="(module,idx) in modules.paths" :key="`mapp_${idx}`"
                    :icon="module.icon"
                    :to="module.path"
                />
            </q-tabs>
        </q-card>
    </q-toolbar>
</template>

<script>
export default {
    props:{
        with_home:{ type:Boolean, default:false }
    },
    computed: {
        modules:{ get(){ return this.$store.getters['Account/toolbarModule'] } },
        layout:{ get(){ return this.$store.state.Layout } },
    },
}
</script>