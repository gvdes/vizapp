<template>
	<q-page padding>
		<q-header elevated class="bg-darkl1 text-grey-5 q-pa-sm">
            <div class="row items-center">
                <div class="col">
                    <q-btn @click="$router.go(-1)" color="white" icon="arrow_back" dense flat/> <span class="q-pl-md">Pedido {{ordercatch.id}}</span>
                </div>
                <div class="col text-right text-white">Miguel Angel Battio</div>
            </div>
            <div class="row items-center">
                <div class="text-center q-px-lg">
                    <div class="text--2">modelos</div>
                    <div class="text-light-blue-13 text-h6">1</div>
                </div>
                <div class="text-center q-px-lg">
                    <div class="text--2">piezas</div>
                    <div class="text-light-blue-13 text-h6">1</div>
                </div>
                <div class="col text-right">
                    <div class="text--2">total</div>
                    <div class="text-green-13 text-h6">$ 0.00</div>
                </div>
            </div>
        </q-header>

        <q-footer class="bg-darkl1 text-white" elevated>
            <div class="q-pa-xs row justify-between items-center">
                sdfsdf
            </div>
        </q-footer>
	</q-page>
</template>

<script>
export default {
    // name: 'PageName',
    beforeMount() {
        this.$store.commit('Layout/hideToolbarModule');
    },
    beforeDestroy(){ this.$store.commit('Layout/showToolbarModule'); },
    computed: {
        ordercatch(){ return this.$route.params },
    },
}
</script>
