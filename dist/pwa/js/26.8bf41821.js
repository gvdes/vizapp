(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"1add":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-header",{staticClass:"bg-darkl0 text-grey-5"},[a("q-card",{staticClass:"bg-darkl1"},[a("toolbar-account",{attrs:{title:"Preventa"}}),a("div",{staticClass:"q-pa-md row"},[a("div",{staticClass:"col-md col-xs-12"},[a("RangeDates",{on:{inputRanges:e.loadView}})],1)])],1)],1),a("div",{staticClass:"row items-start"},[a("div",{staticClass:"col-md col-xs-12 q-pa-sm"},[a("q-card",{staticClass:"bg-darkl1"},[a("q-card-section",[a("q-table",{attrs:{data:e.ordersDb,flat:"","row-key":"id",dark:"",filter:e.tableorders.filtrator,"card-class":"q-pa-sm bg-none text-grey-4",columns:e.tableorders.columns,"visible-columns":e.visibleColumns},scopedSlots:e._u([e.ordersDb.length?{key:"top-right",fn:function(){return[a("q-input",{attrs:{color:"green-13",dark:"",dense:"",debounce:"0",placeholder:"Buscar (folio o nombre)"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,4009527860),model:{value:e.tableorders.filtrator,callback:function(t){e.$set(e.tableorders,"filtrator",t)},expression:"tableorders.filtrator"}})]},proxy:!0}:null,{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t},on:{click:function(a){return e.open(t.row.id)}}},[a("q-td",{key:"id",attrs:{props:t}},[e._v(e._s(t.row.id))]),a("q-td",{key:"client",attrs:{props:t}},[e._v(e._s(t.row.name))]),a("q-td",{key:"cstate",attrs:{props:t}},[e._v(e._s(t.row.status.name))]),a("q-td",{key:"timestart",attrs:{props:t}},[e._v(e._s(e.humantime(t.row.created_at)))]),a("q-td",{key:"createdby",attrs:{props:t}},[e._v(e._s(t.row.created_by.nick))])],1)]}}],null,!0)})],1)],1)],1)]),a("q-dialog",{attrs:{position:"bottom",persistent:e.windCreate.blocked},model:{value:e.windCreate.state,callback:function(t){e.$set(e.windCreate,"state",t)},expression:"windCreate.state"}},[a("q-card",{staticClass:"bg-darkl0 exo text-grey-5"},[a("q-form",[a("q-toolbar",[e._v("Nuevo Pedido")]),a("q-card-section",[a("div",{staticClass:"row items-end q-gutter-sm"},[a("q-btn",{staticClass:"text-black",attrs:{icon:"fas fa-address-book",flat:"",dense:"",color:e.isclient?"green-13":"grey-8"},on:{click:function(t){e.isclient=!e.isclient}}}),a("q-input",{staticClass:"col",attrs:{dark:"",label:"Cliente",color:"green-13",autofocus:""},model:{value:e.windCreate.ipt.client,callback:function(t){e.$set(e.windCreate.ipt,"client",t)},expression:"windCreate.ipt.client"}}),e.cancreate?a("q-btn",{attrs:{flat:"",rounded:"",type:"submit",icon:"done",color:"green-13",disable:e.windCreate.ipt.load,loading:e.windCreate.ipt.load},on:{click:e.tryCreate}}):e._e()],1)])],1)],1)],1),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,3]}},[a("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"add"},on:{click:function(t){e.windCreate.state=!0}}})],1)],1)},o=[],s=a("1321"),i=a.n(s),n=a("bd4c"),l=a("1d6c"),d=a("5542"),c=a("7538"),p={components:{apexchart:i.a,ToolbarAccount:l["a"],RangeDates:c["a"]},data(){return{orders_chart:{options:{chart:{id:"orders_chart",background:"none"},stroke:{colors:["#2D3035"]},theme:{palette:"palette8",mode:"dark"},labels:["En captura","Por surtir","Surtiendo","Cobrados","Completados"],colors:["#ced6e0","#fa8231","#1e90ff","#4cd137","#eb3b5a"]}},windCreate:{state:!1,ipt:{dis:!0,load:!1,client:""},blocked:!1},index:void 0,tableorders:{columns:[{name:"id",align:"left",label:"Folio",field:"id",sortable:!0},{name:"client",align:"left",label:"Cliente",field:"name",sortable:!0},{name:"cstate",align:"center",label:"Estado",field:"created_at",sortable:!0},{name:"timestart",align:"center",label:"Hora",field:"created_at",sortable:!0},{name:"createdby",align:"center",label:"Agente",field:"created_by",sortable:!0}],filtrator:""},isclient:!1,printers:[]}},async beforeMount(){localStorage.removeItem("printers")},beforeDestroy(){console.log("desconectando del room"),this.$sktPreventa.off()},methods:{async loadView(e){this.$q.loading.show({message:"Cargando vista..."});let t={date_from:e.dbranges.from,date_to:e.dbranges.to};this.index=await d["a"].index(t);let a=this.index.printers;this.printers=a,console.log(this.index),a.length?(localStorage.setItem("printers",JSON.stringify(a)),this.$q.loading.hide()):this.$q.notify({message:"Vaya, no hay impresoras disponibles",color:"negative",icon:"fas fa-exclamation-triangle"})},tryCreate(){this.windCreate.ipt.load=!0,this.windCreate.blocked=!0;let e=this.isclient?{id:this.windCreate.ipt.client}:{name:this.windCreate.ipt.client};console.log(e),d["a"].create(e).then((e=>{let t=e.data;console.log(t),this.windCreate.ipt.load=!1,this.windCreate.blocked=!1,this.$router.push(`/preventa/pedidos/${t.id}`)})).catch((e=>{console.log(e),this.windCreate.ipt.load=!1,this.windCreate.blocked=!1,this.$q.notify({icon:"bug",message:e,color:"negative"})}))},open(e){this.$router.push(`/preventa/pedidos/${e}`)},sktjoinprev(e){console.log(e)},sktjoinprevwrh(e){console.log(e)}},computed:{profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},visibleColumns(){let e=this.profile.me._rol;return 1==e||2==e||3==e?["id","client","cstate","timestart","createdby"]:["id","client","cstate","timestart"]},cancreate(){let e=this.isclient?1:3;return this.windCreate.ipt.client.length>=e},ordersDb(){return this.index?this.index.orders:[]},series_chart(){return[this.orders_capture.length,this.orders_forsupply.length,this.orders_onsupply.length,this.orders_chargeds.length,this.orders_archive.length]},humantime(){return e=>{let t=Date.now(),a=Date.parse(e),r=n["b"].getDateDiff(t,a,"days");switch(r){case 0:return n["b"].formatDate(a,"hh:mm a");case 1:return"Ayer, "+n["b"].formatDate(a,"hh:mm a");default:return`Hace ${r} dias, `+n["b"].formatDate(a,"hh:mm a")}}}}},b=p,u=a("2877"),h=a("9989"),m=a("e359"),g=a("f09f"),f=a("a370"),w=a("eaac"),k=a("27f9"),C=a("0016"),y=a("bd08"),q=a("db86"),v=a("24e8"),_=a("0378"),x=a("65c6"),$=a("9c40"),D=a("de5e"),Q=a("eebe"),S=a.n(Q),P=Object(u["a"])(b,r,o,!1,null,null,null);t["default"]=P.exports;S()(P,"components",{QPage:h["a"],QHeader:m["a"],QCard:g["a"],QCardSection:f["a"],QTable:w["a"],QInput:k["a"],QIcon:C["a"],QTr:y["a"],QTd:q["a"],QDialog:v["a"],QForm:_["a"],QToolbar:x["a"],QBtn:$["a"],QPageSticky:D["a"]})}}]);