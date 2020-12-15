<template>
    <div>
        <div class="row justify-center items-center q-my-lg">
            <span class="text-h6">Resumen de Sucursal</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{branch:{type:Object}},
    mounted() {
        console.log("!!!!!!!!!!!!!!!Componente montado¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡");
    },
}
</script>