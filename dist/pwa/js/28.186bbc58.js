(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{f673:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{attrs:{padding:""}},[o("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[o("q-card",{staticClass:"bg-darkl1"},[o("toolbar-account",{attrs:{title:"Resurtido",sockstate:e.appconnected}})],1)],1),o("div",[o("q-table",{attrs:{dark:"",data:e.ordersday,"table-header-class":"text-green-13","card-class":"bg-darkl1 text-grey-6","row-key":"id",columns:e.tableOrders.columns,pagination:e.initpagination},scopedSlots:e._u([{key:"body",fn:function(t){return[o("q-tr",{attrs:{props:t},on:{click:function(o){return e.open(t.row.id)}}},[o("q-td",{key:"id",attrs:{props:t}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.row.id)+"\n\t\t\t\t\t\t")]),o("q-td",{key:"state",attrs:{props:t}},[o("div",[e._v(e._s(e.labelstate(t.row)))]),o("div",[e._v(e._s(e.timestate(t.row)))])]),o("q-td",{key:"size",attrs:{props:t}},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.ordersize(t.row.products))+"\n\t\t\t\t\t\t")])],1)]}}])})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:e.wndSetOrder.state,callback:function(t){e.$set(e.wndSetOrder,"state",t)},expression:"wndSetOrder.state"}},[o("q-card",{staticClass:"bg-darkl0 text-grey-6 exo"},[o("q-toolbar",{staticClass:"text-white"},[e._v("Nuevo Pedido")]),o("q-card-section",[o("div",{staticClass:"row q-gutter-md items-center"},[o("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Tipo",options:e.comboreqstypes,disable:1==e.comboreqstypes.length},model:{value:e.neworder.type,callback:function(t){e.$set(e.neworder,"type",t)},expression:"neworder.type"}}),o("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Destino",options:e.combowkps},model:{value:e.neworder.dest,callback:function(t){e.$set(e.neworder,"dest",t)},expression:"neworder.dest"}})],1),3==e.neworder.type.value||4==e.neworder.type.value?o("div",{staticClass:"row items-center q-gutter-md"},[o("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Origen",options:e.combowkpsorigin},model:{value:e.neworder.origin,callback:function(t){e.$set(e.neworder,"origin",t)},expression:"neworder.origin"}}),o("q-input",{staticClass:"col",attrs:{dark:"",type:"text",color:"green-13",label:"Folio"},model:{value:e.neworder.folio,callback:function(t){e.$set(e.neworder,"folio",t)},expression:"neworder.folio"}})],1):e._e(),o("q-input",{attrs:{dark:"",color:"green-13",label:"notas"},model:{value:e.neworder.notes,callback:function(t){e.$set(e.neworder,"notes",t)},expression:"neworder.notes"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"done",loading:e.wndSetOrder.creating,disable:e.wndSetOrder.creating},on:{click:e.tryCreate}})],1)],1)],1),o("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,5]}},[o("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"add"},on:{click:function(t){e.wndSetOrder.state=!0}}})],1)],1)},s=[],a=(o("13d5"),o("1d6c")),n=o("bd9f"),i=o("19e8"),d=o("bd4c"),l=o("981c"),c={components:{ToolbarAccount:a["a"]},data(){return{initpagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:20},status:[],index:void 0,tableOrders:{columns:[{name:"id",align:"left",label:"ID"},{name:"state",align:"left",label:"Estado"},{name:"size",align:"center",label:"Contenido"}],data:void 0},wndSetOrder:{state:!1,creating:!1},neworder:{notes:"",type:{label:"Manual",value:1},dest:{label:"CEDISSAP",value:1},origin:{label:"---",value:null},"folio:":void 0},sounds:{moved:new Audio("sounds/moved.mp3")},workpoints:void 0}},async beforeMount(){console.log(this.auths),this.index=await this.loadIndex(),this.tableOrders.data=this.index.requisitions,this.workpoints=await this.loadWorkpoints()},async mounted(){await this.$sktRestock.connect(),console.log("uniendose a ROOM"),this.$sktRestock.emit("joinat",{from:this.workin,user:this.profile,isdashboard:!1})},beforeDestroy(){this.$sktCounters.off(),console.log("desconectado del socket")},methods:{loadIndex(){return n["a"].index()},loadWorkpoints(){return i["a"].index()},open(e){console.log("editar "+e),this.$router.push("/pedidos/"+e)},tryCreate(){console.log("Creando pedido!!");let e=new Object;e._workpoint_to=this.neworder.dest.value,e._type=this.neworder.type.value,e.notes=this.neworder.notes;let t=!1;switch(console.log(e),console.log(this.neworder.type.value),this.neworder.type.value){case 2:this.$q.loading.show({spinner:l["a"],spinnerColor:"green-13",message:"Tu pedido se esta generando, por favor espera mientras consultamos existencias"}),t=!0;break;case 3:case 4:e.folio=this.neworder.folio,e.store=this.neworder.origin.value,e.folio&&e.store?(t=!0,this.$q.loading.show({spinner:l["a"],spinnerColor:"green-13",message:`Buscando folio <b class="text-green-13">${e.folio}</b> en <b class="text-green-13">${e.folio}</b>, porfavor espera`,html:!0})):(t=!1,this.$q.notify({icon:"fas fa-exclamation-circle",color:"red",message:"Sucursal y folio son obligatorios"}));break;default:t=!0,this.wndSetOrder.creating=!0;break}t&&n["a"].create(e).then((e=>{let t=e.data;console.log(t),this.$q.loading.hide(),this.wndSetOrder.creating=!1,this.wndSetOrder.state=!1,this.tableOrders.data.unshift(t.order),this.$q.notify({message:`Pedido ${t.order.id} creado!`,color:"positive",position:"center",timeout:1500}),this.$sktRestock.emit("creating",{user:this.profile,from:this.workin,order:t.order,to:this.neworder.dest}),this.$router.push("/pedidos/"+t.order.id)})).catch((e=>{console.log(e),this.$q.notify({message:"Rayos!!, esto no ha funcionado!",icon:"bug",color:"negative"})}))}},computed:{profile:{get(){return this.$store.getters["Account/profile"]}},workin(){return this.$store.getters["Account/workin"]},auths:{get(){return this.$store.getters["Account/moduleauths"]}},socketroom(){return`${this.workin.workpoint.alias}`},appconnected(){return!!this.$sktRestock&&this.$sktRestock.connected},combowkps(){return this.index?this.index.workpoints.map((e=>({label:e.alias,value:e.id}))):[]},combowkpsorigin(){return this.workpoints?this.workpoints.filter((e=>"VIZ"!=e.alias)).map((e=>({label:e.alias,value:e.id}))):[]},comboreqstypes(){if(this.index){let e=this.index.types.map((e=>({label:e.name,value:e.id})));return e}return[]},ordersday(){return this.tableOrders.data?this.tableOrders.data:[]},labelstate(){return e=>{let t=e.log.findIndex((t=>t.id==e.status.id));return e.log[t].name}},timestate(){return e=>{let t=e.log.findIndex((t=>t.id==e.status.id)),o=e.log[t].created_at;return this.humantime(o)}},humantime(){return e=>{let t=Date.now(),o=Date.parse(e),r=d["b"].getDateDiff(t,o,"days");switch(r){case 0:return"Hoy a las "+d["b"].formatDate(o,"hh:mm a");case 1:return"Ayer a las "+d["b"].formatDate(o,"hh:mm a");default:return`Hace ${r} dias, a las `+d["b"].formatDate(o,"hh:mm a")}}},ordersize(){return e=>{let t=e.length;if(t){let o=e.reduce(((e,t)=>t.ordered.amount+e),0);return`M:${t}, P:${o}`}return"--"}}}},u=c,p=o("2877"),g=o("9989"),h=o("e359"),b=o("f09f"),w=o("eaac"),m=o("bd08"),f=o("db86"),k=o("24e8"),v=o("65c6"),y=o("a370"),q=o("ddd8"),x=o("27f9"),$=o("4b7e"),C=o("9c40"),O=o("de5e"),S=o("eebe"),_=o.n(S),Q=Object(p["a"])(u,r,s,!1,null,null,null);t["default"]=Q.exports;_()(Q,"components",{QPage:g["a"],QHeader:h["a"],QCard:b["a"],QTable:w["a"],QTr:m["a"],QTd:f["a"],QDialog:k["a"],QToolbar:v["a"],QCardSection:y["a"],QSelect:q["a"],QInput:x["a"],QCardActions:$["a"],QBtn:C["a"],QPageSticky:O["a"]})}}]);