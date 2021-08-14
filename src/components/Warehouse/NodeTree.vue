<template>
    <q-expansion-item
        expand-separator
        expand-icon-toggle
    >
        <template v-slot:header>
            <q-item-section>{{ node.name }}</q-item-section>
            <q-item-section side>
                <div class="row items-left">
                    <q-btn flat icon="add" color="green-13" @click="add(node)"/>
                </div>
            </q-item-section>
        </template>
        
        <div>
            <q-list v-if="node.children && node.children.length" dark padding class="q-pl-md">
                <node v-for="(child,idx) in node.children" :node="child" :key="idx" />
            </q-list>
        </div>
    </q-expansion-item>
</template>

<script>
export default {
    name:"node",
    props: { node: Object },
    methods: {
        add(node){
            console.log(node);
            this.$store.commit('Warehouse/initAddSection',node);
        }
    },
}
</script>