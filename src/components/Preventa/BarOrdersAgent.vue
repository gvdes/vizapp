<template>
    <div class="full-width">
        <template v-if="orders.length">
            <div class=" text--3 row bg-dark wrapperChunk">
                <div v-for="(chunk,idx) in chunks" :key="idx" :class="chunk.bg" class="text-center" :style="`width:${widthChunk(chunk.orders.length)}%;`">
                    <span v-if="chunk.orders.length" class="chunk">
                        {{chunk.alias}} {{chunk.orders.length}}
                    </span>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        orders:{type:Array,default:[]},
    },
    computed:{
        creating(){ return { serie:"Levantando", alias:'LV', bg:'sbg-1', orders:this.orders.filter( o => o.status.id==1)} },
        cashasign(){ return { serie:"Asignar Caja", alias:'AC', bg:'sbg-2', orders:this.orders.filter( o => o.status.id==2)}; },
        forcheckin(){ return { serie:"CheckIn", alias:'CKI', bg:'sbg-3', orders:this.orders.filter( o => o.status.id==3)}; },
        forsupply(){ return { serie:"Por Surtir", alias:'PS', bg:'sbg-4', orders:this.orders.filter( o => o.status.id==4)}; },
        onsupply(){ return { serie:"Surtiendo", alias:'SU', bg:'sbg-5', orders:this.orders.filter( o => o.status.id==5)}; },
        checkout(){ return { serie:"CheckOut", alias:'CKO', bg:'sbg-7', orders:this.orders.filter( o => o.status.id==7)}; },
        oncash(){ return { serie:"En Caja", alias:'EC', bg:'sbg-8', orders:this.orders.filter( o => o.status.id==8)}; },
        dones(){ return { serie:"CheckOut", alias:'FZ', bg:'sbg-10', orders:this.orders.filter( o => o.status.id==10)}; },
        archives(){ return { serie:"CheckOut", alias:'CN', bg:'sbg-100', orders:this.orders.filter( o => o.status.id==100)}; },
        chunks(){
            return [ 
                this.creating,
                this.cashasign,
                this.forcheckin,
                this.forsupply,
                this.onsupply,
                this.checkout,
                this.oncash,
                this.dones,
                this.archives
            ]
        },
        widthChunk(){ return w => w*100/parseInt(this.orders.length); }
    }
}
</script>

<style scoped>
    .wrapperChunk{
        border-radius:8px;
        overflow: hidden;
    }

    .chunk{ text-shadow: 1px 1px 2px #000; }
</style>