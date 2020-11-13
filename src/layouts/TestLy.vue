<template>
	<q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
        <q-page-container class="bg-darkl0 exo text-grey-5">
            
            <q-page padding>
                <div class="q-pa-md">
                    <div class="q-gutter-md row">
                        <q-select dark filled :value="model"
                            use-input fill-input hide-selected
                            input-debounce="0"
                            :options="options"
                            @filter="filterFn"
                            @input-value="setModel"
                            style="width: 250px; padding-bottom: 32px"
                            v-model="selection"
                        >
                            <template v-slot:no-option>
                                <q-item>
                                    <q-item-section class="text-grey">No results</q-item-section>
                                </q-item>
                            </template>

                            <template v-slot:option="scope">
                                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                    <q-item-section avatar>
                                        <q-img :src="scope.opt.img" style="width:35px;height:35px;"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label v-html="scope.opt.label" />
                                        <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </template>
                        </q-select>
                    </div>
                </div>
                <div class="text-h6">{{selection}}</div>
            </q-page>
		</q-page-container>
	</q-layout>
</template>

<script>
export default {
    data () {
        return {
            selection:undefined,
            model: null,
            options: undefined,
            stoptions:[
                {label:'alien',description:'los aliens son chidos',value:1,img:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ufo_alien_space_avatar-128.png'},
                {label:'aguacate',description:'los aguactes son ricos',value:2,img:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-128.png'},
                {label:'araña',description:'las arañas dan miedo we',value:3,img:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/spider_insect_bug_avatar-128.png'},
                {label:'arcoriris',description:'el arcoiris es de putitos',value:4,img:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cloud_crying_rain_avatar-128.png'},
                {label:'reloj',description:'el reloj marca la hora',value:5,img:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/apple_watch_sick_illness_avatar-128.png'},
                {label:'lapiz',description:'el lapiz es pa escribir',value:6,img:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/draw_pencil_addicted_love-128.png'}
            ]
        }
    },
    methods:{
        filterFn (val, update, abort) {
            update(() => {
                const needle = val.toLocaleLowerCase()
                this.options = this.stoptions.filter(v => v.label.toLocaleLowerCase().indexOf(needle) > -1)
            })
        },
        setModel(val) { this.model = val }
    }
}
</script>