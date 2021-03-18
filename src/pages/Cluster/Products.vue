<template>
    <q-page>
        <q-header class="bg-darkl0 text-grey-5 q-pa-sm">
			<q-card class="bg-darkl1">
				<toolbar-account title="Productos" />
                <q-separator/>
                <q-tabs
                    v-model="tab" dense class="text-grey"
                    active-color="green-13" indicator-color="green-13" align="justify" narrow-indicator
                >
                    <q-route-tab name="top" label="top"  to="top" exact/>
                    <q-route-tab name="vs" label="vs" to="vs" exact/>
                    <q-route-tab name="cat" label="categoria"  to="cat" exact/>
                </q-tabs>
			</q-card>
		</q-header>

        <div class="q-px-sm">
            <router-view />
        </div>

    </q-page>
</template>

<script>
import ToolbarAccount from '../../components/Global/ToolbarAccount.vue'
export default {
    components:{
        ToolbarAccount:ToolbarAccount
    },
    data(){
        return{
            tab:null
        }
    }
}
// imayorga@auctusbc.com
</script>