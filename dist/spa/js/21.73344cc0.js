(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{d290:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-layout",{attrs:{view:"hHh Lpr fFf"}},[t("q-page-container",{staticClass:"bg-darkl0 exo text-grey-5"},[t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-gutter-md row"},[t("q-select",{staticStyle:{width:"250px","padding-bottom":"32px"},attrs:{dark:"",filled:"",value:a.model,"use-input":"","fill-input":"","hide-selected":"","input-debounce":"0",options:a.options,"hide-dropdown-icon":""},on:{filter:a.filterFn,"input-value":a.setModel},scopedSlots:a._u([{key:"option",fn:function(e){return[t("q-item",a._g(a._b({},"q-item",e.itemProps,!1),e.itemEvents),[t("q-item-section",{attrs:{avatar:""}},[t("q-img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e.opt.img}})],1),t("q-item-section",[t("q-item-label",{domProps:{innerHTML:a._s(e.opt.label)}}),t("q-item-label",{attrs:{caption:""}},[a._v(a._s(e.opt.description))])],1)],1)]}}]),model:{value:a.selection,callback:function(e){a.selection=e},expression:"selection"}},[[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[a._v("No results")])],1)]],2)],1)]),t("div",{staticClass:"text-h6"},[a._v(a._s(a.selection))]),t("div",[t("q-btn",{attrs:{label:"PDF"},on:{click:a.createPDF}})],1)])],1)],1)},s=[],o=(t("c975"),t("8baf")),n={data(){return{selection:void 0,model:null,options:void 0,stoptions:[{label:"alien",description:"los aliens son chidos",value:1,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ufo_alien_space_avatar-128.png"},{label:"aguacate",description:"los aguactes son ricos",value:2,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-128.png"},{label:"araña",description:"las arañas dan miedo we",value:3,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/spider_insect_bug_avatar-128.png"},{label:"arcoriris",description:"el arcoiris es de putitos",value:4,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cloud_crying_rain_avatar-128.png"},{label:"reloj",description:"el reloj marca la hora",value:5,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/apple_watch_sick_illness_avatar-128.png"},{label:"lapiz",description:"el lapiz es pa escribir",value:6,img:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/draw_pencil_addicted_love-128.png"}]}},methods:{filterFn(a,e,t){console.log(a),e((()=>{const e=a.toLocaleLowerCase();this.options=this.stoptions.filter((a=>a.label.toLocaleLowerCase().indexOf(e)>-1))}))},setModel(a){this.model=a},createPDF(){const a=new o["a"]("p","pt","letter");a.text("Hello world!"),a.save("a4.pdf")}}},l=n,c=t("2877"),r=t("4d5a"),d=t("09e3"),p=t("9989"),m=t("ddd8"),v=t("66e5"),u=t("4074"),g=t("068f"),_=t("0170"),f=t("9c40"),b=t("eebe"),h=t.n(b),w=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=w.exports;h()(w,"components",{QLayout:r["a"],QPageContainer:d["a"],QPage:p["a"],QSelect:m["a"],QItem:v["a"],QItemSection:u["a"],QImg:g["a"],QItemLabel:_["a"],QBtn:f["a"]})}}]);