(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"24b7":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("q-page",{attrs:{padding:""}},[a("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[a("q-card",{staticClass:"bg-darkl1"},[a("toolbar-account",{attrs:{title:"Almacenes"}})],1)],1),e.warehouses?a("div",e._l(e.warehouses,(function(t){return a("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"bg-darkl1 q-mb-md",on:{click:function(a){return e.open(t)}}},[a("q-card-section",[a("div",{staticClass:"row items-center justify-center"},[a("div",{staticClass:"col"},[e._v(e._s(t.name))])])])],1)})),1):e._e(),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,5]}},[a("q-btn",{staticClass:"bg-darkl1 text-green-13",attrs:{icon:"add",rounded:"","no-caps":""}})],1),a("q-footer",{staticClass:"bg-darktransl0",attrs:{reveal:""}},[a("ToolbarModule")],1)],1)},o=[],r=t("5ed6"),n=t("1d6c"),c=t("b0fc"),l={name:"PageIndex",components:{ToolbarAccount:n["a"],ToolbarModule:c["a"]},async beforeMount(){this.warehouses=await r["a"].loadWarehouses()},data(){return{warehouses:null}},methods:{open(e){console.log("Abriendo almacen",""),console.log(e);let a={path:`almacen/${e.id}`,query:{name:e.name}};this.$router.push(a)}}},i=l,d=t("2877"),u=t("9989"),p=t("e359"),b=t("f09f"),f=t("a370"),m=t("de5e"),g=t("9c40"),h=t("7ff0"),w=t("714f"),k=t("eebe"),q=t.n(k),v=Object(d["a"])(i,s,o,!1,null,null,null);a["default"]=v.exports;q()(v,"components",{QPage:u["a"],QHeader:p["a"],QCard:b["a"],QCardSection:f["a"],QPageSticky:m["a"],QBtn:g["a"],QFooter:h["a"]}),q()(v,"directives",{Ripple:w["a"]})}}]);