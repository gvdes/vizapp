(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1d6c":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-toolbar",{staticClass:"row justify-between items-center"},[e("span",[t.iconlauncher?e("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(s){return t.$router.push("/")}}}):e("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),e("span",{staticClass:"col text-center"},[e("span",[t._v(t._s(t.workin.workpoint.alias))]),e("br"),e("span",[t._v(t._s(t.title))])]),e("span",{staticClass:"text-right"},[e("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[e("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),e("q-menu",{attrs:{dark:"","transition-show":"flip-right","transition-hide":"flip-left"}},[e("q-list",{staticClass:"exo text-grey-6",staticStyle:{"min-width":"150px"}},[e("q-item",{attrs:{clickable:""},on:{click:function(s){return t.$router.push("/perfil")}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"fas fa-user-astronaut"}})],1),e("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),e("q-separator"),e("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"meeting_room"}})],1),e("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},o=[],c={name:"ToolbarAccount",props:{title:{type:String,default:""},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},n=c,r=e("2877"),i=e("65c6"),l=e("9c40"),u=e("0016"),p=e("068f"),d=e("4e73"),g=e("1c1c"),f=e("66e5"),x=e("4074"),h=e("eb85"),b=e("eebe"),m=e.n(b),q=Object(r["a"])(n,a,o,!1,null,null,null);s["a"]=q.exports;m()(q,"components",{QToolbar:i["a"],QBtn:l["a"],QIcon:u["a"],QImg:p["a"],QMenu:d["a"],QList:g["a"],QItem:f["a"],QItemSection:x["a"],QSeparator:h["a"]})},"24b7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[e("q-card",{staticClass:"bg-darkl1"},[e("toolbar-account",{attrs:{title:"Almacen"}})],1)],1),e("div",{staticClass:"row q-pl-sm"},[e("div",{staticClass:"col-6 q-pb-sm q-pr-sm"},[e("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[e("q-card-section",{staticClass:"text-h4 text-left text-light-blue-13"},[t.stats?e("span",[t._v(t._s(t.stats.products))]):e("q-spinner-puff",{attrs:{color:"light-blue-13"}})],1),e("div",{staticClass:"text--2 text-right q-pr-xs text-grey-7"},[t._v("articulos en catalogo")])],1)],1),e("div",{staticClass:"col-6 q-pb-sm q-pr-sm"},[e("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[e("q-card-section",{staticClass:"text-h4 text-left text-green-13"},[t.stats?e("span",[t._v(t._s(t.stats.withStock.stock))]):e("q-spinner-puff",{attrs:{color:"green-13"}})],1),e("div",{staticClass:"text--2 text-right q-pr-xs text-grey-7"},[t._v("con stock")])],1)],1),e("div",{staticClass:"col-6 q-pb-sm q-pr-sm"},[e("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[e("q-card-section",{staticClass:"text-h4 text-left text-green-13"},[t.stats?e("span",[t._v(t._s(t.stats.withStock.withLocation))]):e("q-spinner-puff",{attrs:{color:"green-13"}})],1),e("div",{staticClass:"text--2 text-right q-pr-xs text-grey-7"},[t._v("con stock y ubicados")])],1)],1),e("div",{staticClass:"col-6 q-pb-sm q-pr-sm"},[e("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[e("q-card-section",{staticClass:"text-h4 text-left text-orange-14"},[t.stats?e("span",[t._v(t._s(t.stats.withStock.withoutLocation))]):e("q-spinner-puff",{attrs:{color:"orange-14"}})],1),e("div",{staticClass:"text--2 text-right q-pr-xs text-grey-7"},[t._v("con stock sin ubicar")])],1)],1),e("div",{staticClass:"col-6 q-pb-sm q-pr-sm"},[e("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[e("q-card-section",{staticClass:"text-h4 text-left text-orange-14"},[t.stats?e("span",[t._v(t._s(t.stats.withoutStock.stock))]):e("q-spinner-puff",{attrs:{color:"orange-14"}})],1),e("div",{staticClass:"text--2 text-right q-pr-xs text-grey-7"},[t._v("sin stock")])],1)],1),e("div",{staticClass:"col-6 q-pb-sm q-pr-sm"},[e("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[e("q-card-section",{staticClass:"text-h4 text-left text-orange-14"},[t.stats?e("span",[t._v(t._s(t.stats.withoutStock.withLocation))]):e("q-spinner-puff",{attrs:{color:"orange-14"}})],1),e("div",{staticClass:"text--2 text-right q-pr-xs text-grey-7"},[t._v("sin stock ubicados")])],1)],1)])],1)},o=[],c=(e("e6cf"),e("5ed6")),n=e("1d6c"),r={name:"PageIndex",components:{ToolbarAccount:n["a"]},mounted(){console.log("traiendo estadisticas"),this.index()},data(){return{stats:null}},methods:{async index(){this.stats=await c["a"].index()}}},i=r,l=(e("bacf"),e("2877")),u=e("9989"),p=e("e359"),d=e("f09f"),g=e("a370"),f=e("06d5"),x=e("eebe"),h=e.n(x),b=Object(l["a"])(i,a,o,!1,null,null,null);s["default"]=b.exports;h()(b,"components",{QPage:u["a"],QHeader:p["a"],QCard:d["a"],QCardSection:g["a"],QSpinnerPuff:f["a"]})},"5ed6":function(t,s,e){"use strict";var a=e("31b8");s["a"]={index(){return a["b"].get("/location/index").then((t=>t.data)).catch((t=>{console.log(t)}))},tree(t){return a["b"].get("/location/allSections",t)},warehouses(t){return a["b"].get("/location/cellers")},loadWarehouses(){return console.log("%cCargando Almacenes...","font-size:2em; color:purple;"),a["b"].get("/location/cellers").then((t=>(console.log(t),t.data.cellers))).catch((t=>{console.log(t)}))},loadSections(t){return console.log("Traiendo secciones"),a["b"].get("/location/sections",t)},product(t){return console.log(t),a["b"].get("/location/product",t)},toggle(t){return a["b"].post("/location/toggle",t)},create(t){return a["b"].post("/location/celler",t)},addSection(t){return console.log(t),a["b"].post("/location/section",t)},setminmax(t){return console.log(t),a["b"].post("/location/maximos",t)},existencesIndex(t){return console.log("Cargando index del modulo EXISTENCIAS.."),a["b"].post("/product/catalog",t).then((t=>t.data)).catch((t=>{console.log("===========ERROR==========="),console.log(t)}))},loadCats(t){return a["b"].post("/product/catalog",t)},getStocks(t){return a["b"].post("/location/stocks",t)},getFiltred(t){return console.log(t),a["b"].post("/product/catalog",t)}}},bacf:function(t,s,e){"use strict";var a=e("c9c2"),o=e.n(a);o.a},c9c2:function(t,s,e){}}]);