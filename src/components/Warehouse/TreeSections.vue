<template>
    <q-list dark padding class="q-pl-md">
        <node-tree :node="treeData" />
    </q-list>
</template>

<script>
import NodeTree from "./NodeTree";
export default {
    name:"TreeSections",
    props: {
        treeData: Object
    },
    components: {
        NodeTree
    },
}
</script>