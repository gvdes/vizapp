(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{d290:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-layout",{attrs:{view:"hHh Lpr fFf"}},[t("q-page-container",{staticClass:"bg-darkl0 exo text-grey-5"},[t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-gutter-md row"},[t("q-select",{staticStyle:{width:"250px","padding-bottom":"32px"},attrs:{dark:"",filled:"",value:a.model,"use-input":"","fill-input":"","hide-selected":"","input-debounce":"0",options:a.options,"hide-dropdown-icon":""},on:{filter:a.filterFn,"input-value":a.setModel},scopedSlots:a._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[a._v("No results")])],1)]},proxy:!0},{key:"option",fn:function(e){return[t("q-item",a._g(a._b({},"q-item",e.itemProps,!1),e.itemEvents),[t("q-item-section",{attrs:{avatar:""}},[t("q-img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e.opt.img}})],1),t("q-item-section",[t("q-item-label",{domProps:{innerHTML:a._s(e.opt.label)}}),t("q-item-label",{attrs:{caption:""}},[a._v(a._s(e.opt.description))])],1)],1)]}}]),model:{value:a.selection,callback:function(e){a.selection=e},expression:"selection"}})],1)]),t("div",{staticClass:"text-h6"},[a._v(a._s(a.selection))])])],1)],1)},s=[],o=(t("c975"),{data(){return{selection:void 0,model:null,options:void 0,stoptions:[{label:"alien",description:"los aliens son chidos",value:1,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ufo_alien_space_avatar-128.png"},{label:"aguacate",description:"los aguactes son ricos",value:2,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-128.png"},{label:"araña",description:"las arañas dan miedo we",value:3,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/spider_insect_bug_avatar-128.png"},{label:"arcoriris",description:"el arcoiris es de putitos",value:4,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cloud_crying_rain_avatar-128.png"},{label:"reloj",description:"el reloj marca la hora",value:5,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/apple_watch_sick_illness_avatar-128.png"},{label:"lapiz",description:"el lapiz es pa escribir",value:6,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/draw_pencil_addicted_love-128.png"}]}},methods:{filterFn(a,e,t){console.log(a),e((()=>{const e=a.toLocaleLowerCase();this.options=this.stoptions.filter((a=>a.label.toLocaleLowerCase().indexOf(e)>-1))}))},setModel(a){this.model=a}}}),n=o,l=t("2877"),c=t("4d5a"),r=t("09e3"),d=t("9989"),p=t("ddd8"),m=t("66e5"),u=t("4074"),v=t("068f"),g=t("0170"),_=t("eebe"),f=t.n(_),h=Object(l["a"])(n,i,s,!1,null,null,null);e["default"]=h.exports;f()(h,"components",{QLayout:c["a"],QPageContainer:r["a"],QPage:d["a"],QSelect:p["a"],QItem:m["a"],QItemSection:u["a"],QImg:v["a"],QItemLabel:g["a"]})}}]);