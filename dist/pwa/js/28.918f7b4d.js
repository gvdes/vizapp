(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{a458:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-header",{staticClass:"bg-darkl0 text-grey-5"},[a("q-card",{staticClass:"bg-darkl1"},[a("toolbar-account",{attrs:{title:"Preventa / Bodega"}}),a("div",{staticClass:"q-pa-md row"},[a("div",{staticClass:"col-md col-xs-12"},[a("RangeDates",{on:{inputRanges:e.loadView}})],1)])],1)],1),a("div",{staticClass:"row items-start"},[a("div",{staticClass:"col-md col-xs-12 q-pa-sm"},[a("q-card",{staticClass:"bg-darkl1"},[a("q-card-section",[a("q-table",{attrs:{data:e.ordersDb,flat:"","row-key":"id",dark:"",filter:e.tableorders.filtrator,"card-class":"q-pa-sm bg-none",columns:e.tableorders.columns},scopedSlots:e._u([e.ordersDb.length?{key:"top-left",fn:function(){return[a("div",{staticClass:"text-bold"},[e._v(e._s(e.ordersDb.length)+" pedidos")])]},proxy:!0}:null,e.ordersDb.length?{key:"top-right",fn:function(){return[a("q-input",{attrs:{color:"green-13",dark:"",dense:"",debounce:"0",placeholder:"Buscar (folio o nombre)"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,4009527860),model:{value:e.tableorders.filtrator,callback:function(t){e.$set(e.tableorders,"filtrator",t)},expression:"tableorders.filtrator"}})]},proxy:!0}:null,{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t},on:{click:function(a){return e.tryReprint(t.row.id)}}},[a("q-td",{key:"id",attrs:{props:t}},[e._v(e._s(t.row.id))]),a("q-td",{key:"client",attrs:{props:t}},[e._v(e._s(t.row.name))]),a("q-td",{key:"cstate",attrs:{props:t}},[e._v(e._s(t.row.status.name))]),a("q-td",{key:"timestart",attrs:{props:t}},[e._v(e._s(e.humantime(t.row.created_at)))]),a("q-td",{key:"createdby",attrs:{props:t}},[e._v(e._s(t.row.created_by.nick))])],1)]}}],null,!0)})],1)],1)],1)]),a("q-dialog",{attrs:{position:"bottom"},model:{value:e.wndPrinters.state,callback:function(t){e.$set(e.wndPrinters,"state",t)},expression:"wndPrinters.state"}},[a("q-card",{staticClass:"bg-darkl1 exo "},[a("q-card-section",{staticClass:"text-white"},[e._v("Seleccione Impresora")]),a("q-card-section",[a("div",{staticClass:"row items-center justify-between text-grey-4"},e._l(e.wndPrinters.devices.opts,(function(t){return a("q-btn",{key:t.id,class:t.selected?"bg-primary text-white":"",attrs:{flat:"",stack:"","no-caps":""},on:{click:function(a){return e.selPrinter(t.id)}}},[a("q-icon",{attrs:{name:"print",size:"xl"}}),a("div",{staticClass:"text--2"},[e._v(e._s(t.name))])],1)})),1)]),e.wndPrinters.devices.model?a("div",{staticClass:"text-right"},[a("q-btn",{staticClass:"q-pa-md text-bold full-width",attrs:{color:"green-13",flat:"",label:"enviar",loading:e.wndPrinters.next.loading,disable:e.wndPrinters.next.dis},on:{click:e.reprint}})],1):e._e()],1)],1)],1)},r=[],n=a("7538"),i=a("1d6c"),o=a("5542"),l=a("bd4c"),d={components:{ToolbarAccount:i["a"],RangeDates:n["a"]},data(){return{index:null,tableorders:{columns:[{name:"id",align:"left",label:"Folio",field:"id",sortable:!0},{name:"client",align:"left",label:"Cliente",field:"name",sortable:!0},{name:"cstate",align:"center",label:"Estado",field:"created_at",sortable:!0},{name:"timestart",align:"center",label:"Hora",field:"created_at",sortable:!0},{name:"createdby",align:"center",label:"Agente",field:"created_by",sortable:!0}],filtrator:""},wndPrinters:{state:!1,devices:{model:null,opts:[]},next:{loading:!1,dis:!1}},orderselected:null}},methods:{async loadView(e){this.index=void 0,this.$q.loading.show({message:"Cargando vista..."});let t={date_from:e.dbranges.from,date_to:e.dbranges.to};this.index=await o["a"].index(t);let a=this.index.printers;console.log(this.index),a.length?(this.wndPrinters.devices.opts=a?a.filter((e=>2==e.id))[0].printers.map((e=>(e.selected=!1,e))):[],this.$q.loading.hide()):(this.$q.notify({message:"Vaya, no hay impresoras disponibles",color:"negative",icon:"fas fa-exclamation-triangle"}),this.$q.loading.hide())},selPrinter(e){this.wndPrinters.devices.opts.forEach((t=>{t.id==e?(console.log("aca esta la chida",t.name),t.selected=!0,this.wndPrinters.devices.model=t):t.selected=!1}))},tryReprint(e){this.orderselected=e,this.wndPrinters.state=!0},async reprint(){this.wndPrinters.next.loading=!0,this.wndPrinters.next.dis=!0,this.$q.loading.show({message:"Enviando..."});let e={_order:this.orderselected,_printer:this.wndPrinters.devices.model.id};console.log(e);let t=await o["a"].reprint(e);t.err?this.$q.notify({message:t.err,color:"negative",icon:"fas fa-exclamation-triangle"}):(this.$q.loading.hide(),this.$q.notify({message:"OK!",color:"positive",icon:"done"}),this.wndPrinters.next.loading=!1,this.wndPrinters.next.dis=!1,this.wndPrinters.state=!1)}},computed:{profile(){return this.$store.getters["Account/profile"]},ordersDb(){return this.index?this.index.orders:[]},humantime(){return e=>{let t=Date.now(),a=Date.parse(e),s=l["b"].getDateDiff(t,a,"days");switch(s){case 0:return l["b"].formatDate(a,"hh:mm a");case 1:return"Ayer, "+l["b"].formatDate(a,"hh:mm a");default:return`Hace ${s} dias, `+l["b"].formatDate(a,"hh:mm a")}}}}},c=d,p=a("2877"),m=a("9989"),b=a("e359"),u=a("f09f"),f=a("a370"),h=a("eaac"),g=a("27f9"),w=a("0016"),v=a("bd08"),x=a("db86"),y=a("24e8"),q=a("9c40"),_=a("eebe"),k=a.n(_),P=Object(p["a"])(c,s,r,!1,null,null,null);t["default"]=P.exports;k()(P,"components",{QPage:m["a"],QHeader:b["a"],QCard:u["a"],QCardSection:f["a"],QTable:h["a"],QInput:g["a"],QIcon:w["a"],QTr:v["a"],QTd:x["a"],QDialog:y["a"],QBtn:q["a"]})}}]);