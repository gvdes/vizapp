<template>
    <div class="overflow-hidden row justify-start items-center wrapperchunks">
        <template v-for="(chunk,idx) in chunks">
            <div v-if="chunk.size"
                :key="idx"
                :style="chunkStyles(chunk)"
                class="chunk row items-center justify-center pallet1"
            >
                {{(chunk.size*100/totalSize).toFixed(2)}}%
                <q-tooltip 
                    anchor="top middle"
                    self="top middle"
                    content-class="bg-dark text-white"
                >
                    {{chunk.label}}: $ {{formatcant(chunk.size)}}
                </q-tooltip>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        chunks:{type:Array}
    },
    computed:{
        formatcant(){ return cant => { return new Intl.NumberFormat("es-MX").format(cant); } },
        totalSize(){ return this.chunks.reduce((amount,item)=>{ return amount+item.size; },0); },
        chunkStyles(){
            return chunk =>{
                let width = chunk.size*100/this.totalSize;
                // console.log(`${chunk.size} => ${width}% de ${this.totalSize}`);
                return `width:${width}%`;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapperchunks{
        background:none;
        border-radius:8px;
        max-width: 100%;

        .chunk{
            background: green;
            padding:2px;
            text-align:center;
            display:flex;
            color:white;
            font-weight:bolder;
            font-size:.7em;
            opacity:.8;
            text-shadow: 1px 1px 2px black;
            cursor:default;


            &:hover{ opacity: 1; }
        }
    }

    .pallet1{
        &:nth-child(1) { background: #82589F; }
        &:nth-child(2) { background: #B33771; }
        &:nth-child(3) { background: #686de0; }
        &:nth-child(4) { background: #3867d6; }
        &:nth-child(5) { background: #2d98da; }
        &:nth-child(6) { background: #45aaf2; }
        &:nth-child(7) { background: #1abc9c; }
        &:nth-child(8) { background: #6F1E51; }
    }
</style>