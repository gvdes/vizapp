(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0cf5":function(t,e,n){},1:function(t,e){},"1b91":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[n("q-card",{staticClass:"bg-darkl1"},[n("toolbar-account",{attrs:{title:"Contador"}})],1)],1),n("router-view"),n("div",[t.inventories.length?[n("div",{staticClass:"row q-pl-sm"},t._l(t.inventories,(function(e){return n("q-card",{key:e.id,staticClass:"col-xs-12 col-md-3 q-mb-sm q-mr-sm bg-darkl1"},[n("q-card-section",{staticClass:"row justify-between items-start"},[n("div",[n("div",{staticClass:"text-h5 text-green-13"},[t._v(t._s(e.id))]),n("div",[t._v("[ "+t._s(e.type.name)+" ]")])]),n("div",{staticClass:"text--1 text-right"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.created_at)),n("br"),t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.created_by.names)+" [ "+t._s(e.created_by.nick)+" ]\n\t\t\t\t\t\t\t")])]),n("q-separator"),n("q-card-section",[n("div",{staticClass:"row items-end"},[n("div",{staticClass:"col"},[t._v("\n\t\t\t\t\t\t\t\t\tResponsables ["+t._s(e.responsables.length)+"]:\n\t\t\t\t\t\t\t\t\t"),n("br"),t._v("\n\t\t\t\t\t\t\t\t\tModelos ["+t._s(e.products.length)+"]:\n\t\t\t\t\t\t\t\t")]),1==e.status.id?[t.imAdmin(e.created_by)?n("q-btn",{attrs:{rounded:"",flat:"",color:"light-blue-13",icon:"settings"},on:{click:function(n){return t.$router.push("contador/config/"+e.id)}}}):n("q-spinner-dots",{attrs:{color:"amber-13",size:"md"}})]:t._e(),2==e.status.id?[t.imAdmin(e.created_by)?n("q-btn",{attrs:{rounded:"",flat:"",color:"light-blue-13",icon:"settings"},on:{click:function(n){return t.$router.push("contador/config/"+e.id)}}}):t._e(),n("q-btn",{attrs:{rounded:"",flat:"",color:"green-13",icon:"launch"},on:{click:function(n){return t.$router.push("contador/"+e.id)}}})]:t._e()],2)])],1)})),1)]:t._e()],2),n("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndCreate.state,callback:function(e){t.$set(t.wndCreate,"state",e)},expression:"wndCreate.state"}},[n("q-card",{staticClass:"bg-darkl0 text-grey-5 exo"},[n("q-form",[n("q-card-section",[t._v("Nuevo Inventario")]),n("q-separator"),n("q-card-section",[n("q-select",{attrs:{dark:"",flat:"",color:"green-13","option-value":"id","option-label":"name",options:t.types,rules:[function(t){return t||"Seleccione tipo de Inventario"}],label:"Tipo:"},model:{value:t.wndCreate.form.type,callback:function(e){t.$set(t.wndCreate.form,"type",e)},expression:"wndCreate.form.type"}}),n("q-input",{attrs:{dark:"",flat:"",color:"green-13",label:"Notas:"},model:{value:t.wndCreate.form.notes,callback:function(e){t.$set(t.wndCreate.form,"notes",e)},expression:"wndCreate.form.notes"}})],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{color:"green-13",dark:"",flat:"",label:"Crear",type:"submit",disabled:t.wndCreate.loading,loading:t.wndCreate.loading},on:{click:t.create}})],1)],1)],1)],1),n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{staticClass:"text-green-13 bg-darkl1 shadow-1",attrs:{flat:"",rounded:"",icon:"add"},on:{click:function(e){t.wndCreate.state=!0}}})],1)],1)},a=[],r=(n("e6cf"),n("8055")),s=n.n(r),i=(n("5ed6"),n("e0df")),c=(n("c4e4"),n("1d6c")),l={components:{ToolbarAccount:c["a"]},data(){return{index:null,wndCreate:{state:!1,form:{type:null,notes:null},creating:!1},counterType:{label:"Categoria",value:1},sktcounter:null}},async beforeMount(){this.$q.loading.show(),this.index=await i["a"].index(),this.$q.loading.hide(),console.log("MONTANDO SOCKET"),this.sktcounter=await s()(this.$vsocket+"/counters"),this.sktcounter.emit("index",this.profile),this.sktcounter.on("connected",(t=>{console.log(t)}))},methods:{create(){if(console.log("Creando Nuevo Conteo"),this.wndCreate.form.type){this.wndCreate.creating=!0;let t={_type:this.wndCreate.form.type.id,notes:this.wndCreate.form.notes};i["a"].create(t).then((t=>{let e=t.data.inventory;e.products=[],this.wndCreate.creating=!1,this.index.inventory.unshift(e),this.wndCreate.creating=!1,this.wndCreate.state=!1,this.$q.notify({icon:"done",color:"positive",position:"center",message:`Inventario ${e.id} creado...`}),this.$router.push("/almacen/contador/config/"+e.id)})).catch((t=>{console.log(t)}))}},drop(t){console.log("Eliminar Inventario?"),console.log(t)}},computed:{states(){return this.index?this.index.status:[]},types(){return this.index?this.index.type:[]},inventories(){return this.index?this.index.inventory.filter((t=>4!=t.status.id)):[]},labelStep(){return t=>{let e="";switch(t){case 1:e="Iniciar";break;case 2:e="Finalizar";break}return e}},profile(){return this.$store.getters["Account/profile"]},imAdmin(){return t=>t.id==this.profile.me.id}}},d=l,u=(n("1d9e"),n("2877")),p=n("9989"),g=n("e359"),b=n("f09f"),f=n("a370"),h=n("eb85"),m=n("9c40"),v=n("8380"),w=n("24e8"),k=n("0378"),C=n("ddd8"),q=n("27f9"),y=n("4b7e"),x=n("de5e"),_=n("eaac"),Q=n("eebe"),$=n.n(Q),S=Object(u["a"])(d,o,a,!1,null,null,null);e["default"]=S.exports;$()(S,"components",{QPage:p["a"],QHeader:g["a"],QCard:b["a"],QCardSection:f["a"],QSeparator:h["a"],QBtn:m["a"],QSpinnerDots:v["a"],QDialog:w["a"],QForm:k["a"],QSelect:C["a"],QInput:q["a"],QCardActions:y["a"],QPageSticky:x["a"],QTable:_["a"]})},"1d6c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-toolbar",{staticClass:"row justify-between items-center"},[n("span",[t.iconlauncher?n("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):n("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),n("span",{staticClass:"col text-center"},[n("span",[t._v(t._s(t.workin.workpoint.alias))]),n("br"),n("span",[t._v(t._s(t.title))])]),n("span",{staticClass:"text-right"},[n("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[n("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),n("q-menu",{attrs:{dark:"","transition-show":"flip-right","transition-hide":"flip-left"}},[n("q-list",{staticClass:"exo text-grey-6",staticStyle:{"min-width":"150px"}},[n("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/perfil")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"fas fa-user-astronaut"}})],1),n("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),n("q-separator"),n("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"meeting_room"}})],1),n("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},a=[],r={name:"ToolbarAccount",props:{title:{type:String,default:""},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},s=r,i=n("2877"),c=n("65c6"),l=n("9c40"),d=n("0016"),u=n("068f"),p=n("4e73"),g=n("1c1c"),b=n("66e5"),f=n("4074"),h=n("eb85"),m=n("eebe"),v=n.n(m),w=Object(i["a"])(s,o,a,!1,null,null,null);e["a"]=w.exports;v()(w,"components",{QToolbar:c["a"],QBtn:l["a"],QIcon:d["a"],QImg:u["a"],QMenu:p["a"],QList:g["a"],QItem:b["a"],QItemSection:f["a"],QSeparator:h["a"]})},"1d9e":function(t,e,n){"use strict";var o=n("0cf5"),a=n.n(o);a.a},"5ed6":function(t,e,n){"use strict";var o=n("31b8");e["a"]={index(){return o["b"].get("/location/index").then((t=>t.data)).catch((t=>{console.log(t)}))},tree(t){return o["b"].get("/location/allSections",t)},warehouses(t){return o["b"].get("/location/cellers")},loadWarehouses(){return console.log("%cCargando Almacenes...","font-size:2em; color:purple;"),o["b"].get("/location/cellers").then((t=>(console.log(t),t.data.cellers))).catch((t=>{console.log(t)}))},loadSections(t){return console.log("Traiendo secciones"),o["b"].get("/location/sections",t)},product(t){return console.log(t),o["b"].get("/location/product",t)},toggle(t){return o["b"].post("/location/toggle",t)},create(t){return o["b"].post("/location/celler",t)},addSection(t){return console.log(t),o["b"].post("/location/section",t)},setminmax(t){return console.log(t),o["b"].post("/location/maximos",t)},existencesIndex(t){return console.log("Cargando index del modulo EXISTENCIAS.."),o["b"].post("/product/catalog",t).then((t=>t.data)).catch((t=>{console.log("===========ERROR==========="),console.log(t)}))},loadCats(t){return o["b"].post("/product/catalog",t)},getStocks(t){return o["b"].post("/location/stocks",t)},getFiltred(t){return console.log(t),o["b"].post("/product/catalog",t)}}},c4e4:function(t,e,n){"use strict";var o=n("31b8");e["a"]={join(t){return o["b"].get("/workpoint/join")},get(t){return o["b"].post("account/users",t)}}},e0df:function(t,e,n){"use strict";var o=n("31b8");e["a"]={index(){return o["b"].get("inventory").then((t=>t.data)).catch((t=>{console.log(t)}))},find(t){return o["b"].get("inventory/"+t).then((t=>t.data)).catch((t=>{console.log(t)}))},create(t){return o["b"].post("inventory",t)},toggleReponsable(t){return o["b"].post("inventory/responsable",t)},addProducts(t){return o["b"].post("inventory/add",t)},nextStep(t){return o["b"].post("inventory/next",t)},rowCount(t){return o["b"].post("inventory/value",t)}}}}]);