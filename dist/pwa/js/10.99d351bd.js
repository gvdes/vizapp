(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{1:function(t,e){},"1d6c":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-toolbar",{staticClass:"row justify-between items-center"},[o("span",[t.iconlauncher?o("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):o("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),o("span",{staticClass:"col text-center"},[o("span",[t._v(t._s(t.workin.workpoint.alias))]),o("br"),o("span",[t._v(t._s(t.title))])]),o("span",{staticClass:"text-right"},[o("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[o("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),o("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[o("q-list",{staticClass:"text-grey-8 exo",staticStyle:{"min-width":"150px"}},[o("q-item",[o("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),o("q-separator"),o("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[o("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},a=[],r={name:"ToolbarAccount",props:{title:{type:String,required:!0},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},n=r,i=o("2877"),d=o("65c6"),l=o("9c40"),c=o("0016"),u=o("068f"),p=o("4e73"),h=o("1c1c"),g=o("66e5"),b=o("4074"),m=o("eb85"),f=o("eebe"),w=o.n(f),k=Object(i["a"])(n,s,a,!1,null,null,null);e["a"]=k.exports;w()(k,"components",{QToolbar:d["a"],QBtn:l["a"],QIcon:c["a"],QImg:u["a"],QMenu:p["a"],QList:h["a"],QItem:g["a"],QItemSection:b["a"],QSeparator:m["a"]})},bd9f:function(t,e,o){"use strict";var s=o("31b8");e["a"]={index(){return s["b"].get("/requisition").then((t=>t.data)).catch((t=>{console.log(t)}))},create(t){return console.log("Creando pedido..."),s["b"].post("/requisition",t)},find(t){return console.log("traiendo "+t),s["b"].get("/requisition/"+t).then((t=>{let e=t.data;return console.log(e),e})).catch((t=>{console.log(t)}))},add(t){return console.log(t),s["b"].post("/requisition/add",t)},remove(t){return console.log(t),s["b"].post("/requisition/remove",t)},nextstep(t){return s["b"].post("/requisition/next",t)},dashboard(){return s["b"].get("/requisition/dashboard").then((t=>{let e=t.data;return e})).catch((t=>{console.log(t)}))},reprint(t){return s["b"].post("/requisition/reimpresion",t)}}},f673:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{attrs:{padding:""}},[o("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[o("q-card",{staticClass:"bg-darkl1"},[o("toolbar-account",{attrs:{title:"Resurtido",sockstate:t.appconnected}})],1)],1),o("div",[o("q-table",{attrs:{dark:"",data:t.ordersday,"table-header-class":"text-green-13","card-class":"bg-darkl1 text-grey-6","row-key":"id",columns:t.tableOrders.columns,pagination:t.initpagination},scopedSlots:t._u([{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e},on:{click:function(o){return t.open(e.row.id)}}},[o("q-td",{key:"id",attrs:{props:e}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.id)+"\n\t\t\t\t\t\t")]),o("q-td",{key:"state",attrs:{props:e}},[o("div",[t._v(t._s(t.labelstate(e.row)))]),o("div",[t._v(t._s(t.timestate(e.row)))])]),o("q-td",{key:"size",attrs:{props:e}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.ordersize(e.row.products))+"\n\t\t\t\t\t\t")])],1)]}}])})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndSetOrder.state,callback:function(e){t.$set(t.wndSetOrder,"state",e)},expression:"wndSetOrder.state"}},[o("q-card",{staticClass:"bg-darkl0 text-grey-6 exo"},[o("q-toolbar",{staticClass:"text-white"},[t._v("Nuevo Pedido")]),o("q-card-section",[o("div",{staticClass:"row q-gutter-md"},[o("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Tipo",options:t.comboreqstypes,disable:1==t.comboreqstypes.length},model:{value:t.neworder.type,callback:function(e){t.$set(t.neworder,"type",e)},expression:"neworder.type"}}),o("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Destino",options:t.combowkps},model:{value:t.neworder.dest,callback:function(e){t.$set(t.neworder,"dest",e)},expression:"neworder.dest"}})],1)]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"done",loading:t.wndSetOrder.creating,disable:t.wndSetOrder.creating},on:{click:t.tryCreate}})],1)],1)],1),o("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,5]}},[o("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"add"},on:{click:function(e){t.wndSetOrder.state=!0}}})],1)],1)},a=[],r=(o("13d5"),o("e6cf"),o("bd4c")),n=o("bd9f"),i=o("1d6c"),d=o("8055"),l=o.n(d),c=o("981c"),u={components:{ToolbarAccount:i["a"]},data(){return{vsocket:void 0,initpagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:20},status:[],index:void 0,tableOrders:{columns:[{name:"id",align:"left",label:"ID"},{name:"state",align:"left",label:"Estado"},{name:"size",align:"center",label:"Contenido"}],data:void 0},wndSetOrder:{state:!1,creating:!1},neworder:{type:{label:"Manual",value:1},dest:{label:"CEDISSAP",value:1}},sounds:{moved:new Audio("sounds/moved.mp3")}}},async beforeMount(){this.index=await this.loadIndex(),this.tableOrders.data=this.index.requisitions},async mounted(){this.vsocket=await l()(this.$vsocket),this.vsocket.emit("joinme_to_dashboard",this.profile),this.vsocket.on("dashboard_ready",(t=>{console.log("DASHBOARD esta disponible..."),console.log(t)})),this.vsocket.on("order_changestate",(t=>{console.log("Se ha cambiado el status a un pedido... "),console.log(t);let e=this.ordersday.findIndex((e=>e.id==t.order.id));e?(console.log("... y aqui esta"),this.ordersday[e].log=t.order.log,this.ordersday[e].status=t.order.status,this.sounds.moved.play()):console.log("... pero no esta aqui")}))},methods:{loadIndex(){return n["a"].index()},open(t){console.log("editar "+t),this.$router.push("/pedidos/"+t)},tryCreate(){console.log("Creando pedido!!");let t=new Object;t._workpoint_to=this.neworder.dest.value,t._type=this.neworder.type.value,2==this.neworder.type.value?this.$q.loading.show({spinner:c["a"],spinnerColor:"green-13",message:"Tu pedido se esta generando, por favor espera mientras consultamos existencias"}):this.wndSetOrder.creating=!0,n["a"].create(t).then((t=>{let e=t.data;console.log(e),this.$q.loading.hide(),this.wndSetOrder.creating=!1,this.wndSetOrder.state=!1,this.tableOrders.data.unshift(e.order),this.$q.notify({message:`Pedido ${e.order.id} creado!`,color:"positive",position:"center",timeout:1500}),this.vsocket.emit("creatingorder",{profile:this.profile,order:e.order}),this.$router.push("/pedidos/"+e.order.id)})).catch((t=>{console.log(t),this.$q.notify({message:"Rayos!!, esto no ha funcionado!",icon:"bug",color:"negative"})}))}},computed:{profile:{get(){return this.$store.getters["Account/profile"]}},appconnected(){return!!this.vsocket&&this.vsocket.connected},combowkps(){return this.index?this.index.workpoints.map((t=>({label:t.alias,value:t.id}))):[]},comboreqstypes(){return this.index?this.index.types.map((t=>({label:t.name,value:t.id}))):[]},ordersday(){return this.tableOrders.data?this.tableOrders.data:[]},labelstate(){return t=>{let e=t.log.findIndex((e=>e.id==t.status.id));return t.log[e].name}},timestate(){return t=>{let e=t.log.findIndex((e=>e.id==t.status.id)),o=t.log[e].created_at;return this.humantime(o)}},humantime(){return t=>{let e=Date.now(),o=Date.parse(t),s=r["a"].getDateDiff(e,o,"days");switch(s){case 0:return"Hoy a las "+r["a"].formatDate(o,"hh:mm a");case 1:return"Ayer a las "+r["a"].formatDate(o,"hh:mm a");default:return`Hace ${s} dias, a las `+r["a"].formatDate(o,"hh:mm a")}}},ordersize(){return t=>{let e=t.length;if(e){let o=t.reduce(((t,e)=>e.ordered.amount+t),0);return`M:${e}, P:${o}`}return"--"}}}},p=u,h=o("2877"),g=o("9989"),b=o("e359"),m=o("f09f"),f=o("eaac"),w=o("bd08"),k=o("db86"),q=o("24e8"),v=o("65c6"),y=o("a370"),x=o("ddd8"),_=o("4b7e"),S=o("9c40"),C=o("de5e"),$=o("eebe"),Q=o.n($),O=Object(h["a"])(p,s,a,!1,null,null,null);e["default"]=O.exports;Q()(O,"components",{QPage:g["a"],QHeader:b["a"],QCard:m["a"],QTable:f["a"],QTr:w["a"],QTd:k["a"],QDialog:q["a"],QToolbar:v["a"],QCardSection:y["a"],QSelect:x["a"],QCardActions:_["a"],QBtn:S["a"],QPageSticky:C["a"]})}}]);