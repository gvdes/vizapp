<template>
    <div class="row q-pt-sm q-pl-sm">
        <template v-if="editable">
            <div class="col-6" v-for="(prod,idxprod) in products" :key="idxprod">
                <q-card class="bg-darkl1 q-mb-sm q-mr-sm">
                    <div class="q-pa-sm">
                        <div class="row justify-between items-center">
                            <span class="text-white">{{prod.code}}</span>
                            <span class="text-grey-5 text-bold">{{prod.name}}</span>
                        </div>
                    </div>
                    <div class="text--2 text-center q-pa-sm">{{prod.description}}</div>
                    <div class="text-center q-pb-sm row items-center">
                        <div class="q-pa-sm">
                            <q-img src="../../../assets/_defprod.png" style="height: 50px; width: 50px"/>
                        </div>
                        <div class="col column">
                            <span class="text-green-13 text-h6">{{prod.ordered.amount}}</span>
                            <span class="text--2">piezas</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center text--2">{{prod.ordered.comments}}</div>
                    </div>
                </q-card>
            </div>
        </template>
        <template v-else>
            <div class="col-6" v-for="(prod,idxprod) in products" :key="idxprod">
                <q-card class="bg-darkl1 q-mb-sm q-mr-sm">
                    <div class="q-pa-sm">
                        <div class="row justify-between items-center">
                            <span class="text-white">{{prod.code}}</span>
                            <span class="text-grey-5 text-bold">{{prod.name}}</span>
                        </div>
                    </div>
                    <div class="text--2 text-center q-pa-sm">{{prod.description}}</div>
                    <div class="text-center q-pb-sm row items-center">
                        <div class="q-pa-sm">
                            <q-img src="../../../assets/_defprod.png" style="height: 50px; width: 50px"/>
                        </div>
                        <div class="col column">
                            <span class="text-green-13 text-h6">{{prod.ordered.amount}}</span>
                            <span class="text--2">piezas</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center text--2">{{prod.ordered.comments}}</div>
                    </div>
                </q-card>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props:['products','editable']
}
</script>