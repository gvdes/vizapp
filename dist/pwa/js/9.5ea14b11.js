(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{3706:function(t,e,s){"use strict";s("f730")},ab74:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-page-container",{staticClass:"exo bg-darkl0 text-grey-5"},[t.layout.header.state?s("q-header",{staticClass:"bg-none"},[s("q-card",{staticClass:"bg-darkl1"},[s("HeaderApp",{attrs:{title:t.layout.header.title}}),s("div",{staticClass:"bg-darkl1 q-pa-sm col row justify-between"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.checkPermissions,expression:"checkPermissions"}],staticClass:"col-md-4 col-xs-4 q-pr-sm items-start",staticStyle:{"max-width":"15rem"}},[s("q-select",{attrs:{"transition-show":"scale","transition-hide":"scale",color:"green-13",disable:t.flag,label:"Sucursal",options:t.workpoints,dark:"","options-selected-class":"text-green-13"},on:{input:t.searchMarket},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"text-green-13",attrs:{name:"filter_alt"}})]},proxy:!0}],null,!1,3242521678),model:{value:t.selectWorkpoint,callback:function(e){t.selectWorkpoint=e},expression:"selectWorkpoint"}})],1),s("div",{class:t.checkPermissions?"col-md-9 col-auto items-end justify-end":"col-md-12 col-xs-12 items-end justify-end col"},[s("RangeDates",{on:{inputRanges:t.loadView}})],1)])],1)],1):t._e(),s("router-view"),s("div",[s("q-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("q-card",{staticClass:"exo bg-darkl0 text-grey-5",attrs:{dark:""}},[s("q-card-section",{staticClass:"bg-darkl11 text-white"},[s("div",{staticClass:"text-h6"},[t._v(t._s(this.layout.header.title))])]),s("q-separator",{attrs:{color:"green-13"}}),s("q-card-section",[s("div",{staticClass:"column items-center justify-center"},[s("div",{staticClass:"col-md-4 col-4 text-center"},[s("img",{attrs:{width:"100%",src:"https://www.huratips.com/wp-content/uploads/2019/04/empty-cart.png",alt:""}})]),s("div",{staticClass:"col-md-8 col-8 text-center"},[s("div",{staticClass:"text-subtitle1"},[t._v("\n                  No se encontraron resultados.\n                ")])])])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"green-13"}})],1)],1)],1)],1),t.layout.footer.state?s("q-footer",{staticClass:"bg-darktransl0",attrs:{reveal:""}},[s("ToolbarModule",{attrs:{with_home:!0}})],1):t._e()],1)],1)},i=[],a=(s("e01a"),s("b0fc")),r=s("7538"),n=s("1670"),d=s("19e8"),l=s("bd9f"),c={name:"Resurtido",components:{ToolbarModule:a["a"],RangeDates:r["a"],HeaderApp:n["a"]},data(){return{flagPermissions:!0,flag:!0,dialog:!1,date:void 0,workpointsOpc:void 0,workpoints:[],selectWorkpoint:void 0,index:[],rsocket:this.$sktRestock}},async beforeMount(){let t=await d["a"].index();this.workpointsOpc=this.markets(t),this.workpoints.push({label:"Todos",value:-1}),this.workpointsOpc.map((t=>this.workpoints.push({label:t.name,value:t.id})))},created(){this.rsocket.disconnect(),this.rsocket.connect(),this.rsocket.on("joineddashreq",(t=>{this.sktJoinatRes(t)})),this.rsocket.on("creating",(t=>{this.sktCreateOrd(t)})),this.rsocket.on("order_update",(t=>{this.sktUpdateOrd(t)})),this.rsocket.on("order_changestate",(t=>{this.sktChangeState(t)})),this.rsocket.emit("joinat",{profile:this.profile,workpoint:this.workin.workpoint,room:this.socketroom})},methods:{async loadView(t){this.$q.loading.show({message:"Cargando vista..."});let e={date_from:t.dbranges.from,date_to:t.dbranges.to},s={params:e};this.index=await l["a"].index(s);let o=await l["a"].dashboard(s);o.requisitions.length>=0&&this.checkPermissions?(this.index.requisitions=[],o.requisitions.forEach((t=>this.index.requisitions.push(t))),localStorage.removeItem("dashboard"),localStorage.setItem("dashboard",JSON.stringify(this.index)),this.flag=!(this.index.requisitions.length>0),this.index.requisitions.length<=0?(this.dialog=!0,this.$store.commit("Requisitions/startState",this.index)):(this.dialog=!1,this.$store.commit("Requisitions/startState",this.index))):(o.requisitions.forEach((t=>this.index.requisitions.push(t))),localStorage.removeItem("dashboard"),localStorage.setItem("dashboard",JSON.stringify(this.index)),this.flag=!(this.index.requisitions.length>0),this.index.requisitions.length<=0?(this.dialog=!0,this.$store.commit("Requisitions/startState",this.index)):(this.dialog=!1,this.$store.commit("Requisitions/startState",this.index))),this.$q.loading.hide()},async searchMarket(){this.$q.loading.show({message:"Cargando vista..."});let t=JSON.parse(localStorage.getItem("dashboard"));this.index.requisitions=[],this.index.requisitions=this.ordersRequisitions(t,this.selectWorkpoint),this.$store.commit("Requisitions/startState",this.index),this.$q.loading.hide()},sktJoinatRes(t){console.log(`%cSe unio a Resurtido ${t.user.me.nick}`,"background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;")},sktCreateOrd(t){let e=t.order,s=t.user.me;console.log(`%c${s.nick} esta creando la orden ${e.id}`,"background:#303952;color:#e66767;border-radius:10px;padding:8px;"),this.$store.commit("Requisitions/newOrder",e)},sktChangeState(t){console.log(t);let e={state:t.state,log:t.log},s=t.order;s.log=t.log,s.status=t.state,console.log(`%cLa orden ${t.order.id} cambio su status a ${t.state.name}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;"),this.$store.commit("Requisitions/updateState",{order:s,newState:e})},sktUpdateOrd(t){if(console.log(t),null==t.product){let e=t.order;console.log(`%cLa orden ${e.id} no añadio el producto seleccionado.`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;")}else{let e=t.order,s=t.product;console.log(`%cLa orden ${e.id} añadio ${s.description}`,"background:#7158e2;color:#fffa65;border-radius:10px;padding:8px;")}},markets(t){let e=t.filter((t=>2==t.type.id));return e}},beforeDestroy(){console.log("%cDesconectando de resurtido...","background:#F97F51;color:#2C3A47;border-radius:10px;padding:6px;"),this.rsocket.emit("unjoin",{profile:this.profile,workpoint:this.workin.workpoint,room:"main"}),this.rsocket.off()},computed:{ordersRequisitions(){return(t,e)=>{let s=e?e.value:{};return t.requisitions.filter((t=>s>0?t.from.id==s:t))}},workin(){return this.$store.getters["Account/workin"]},socketroom(){return this.profile.me._rol<=3?"admin":"orders"},profile(){return this.$store.getters["Account/profile"]},layout(){return this.$store.state.Requisitions.layout},checkPermissions(){let t=JSON.parse(localStorage.getItem("workin")),e=[1,2,16,18];return!!e.includes(t.workpoint.id)}}},u=c,h=(s("3706"),s("2877")),p=s("4d5a"),g=s("09e3"),m=s("e359"),k=s("f09f"),f=s("ddd8"),b=s("0016"),x=s("24e8"),w=s("a370"),q=s("eb85"),v=s("4b7e"),C=s("9c40"),S=s("7ff0"),y=s("7f67"),$=s("eebe"),R=s.n($),_=Object(h["a"])(u,o,i,!1,null,null,null);e["default"]=_.exports;R()(_,"components",{QLayout:p["a"],QPageContainer:g["a"],QHeader:m["a"],QCard:k["a"],QSelect:f["a"],QIcon:b["a"],QDialog:x["a"],QCardSection:w["a"],QSeparator:q["a"],QCardActions:v["a"],QBtn:C["a"],QFooter:S["a"]}),R()(_,"directives",{ClosePopup:y["a"]})},f730:function(t,e,s){}}]);