(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"1d6c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-toolbar",{staticClass:"row justify-between items-center"},[a("span",[e.iconlauncher?a("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(t){return e.$router.push("/")}}}):a("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),a("span",{staticClass:"col text-center"},[a("span",[e._v(e._s(e.workin.workpoint.alias))]),a("br"),a("span",[e._v(e._s(e.title))])]),a("span",{staticClass:"text-right"},[a("q-btn",{attrs:{rounded:"",dense:"",color:e.sockstate?"green-13":""}},[a("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:e.picnick,"spinner-color":"white"}}),a("q-menu",{attrs:{dark:"","transition-show":"flip-right","transition-hide":"flip-left"}},[a("q-list",{staticClass:"exo text-grey-6",staticStyle:{"min-width":"150px"}},[a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push("/perfil")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-user-astronaut"}})],1),a("q-item-section",[e._v("Hola "+e._s(e.session.me.nick))])],1),a("q-separator"),a("q-item",{attrs:{clickable:""},on:{click:e.sessionDestroy}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"meeting_room"}})],1),a("q-item-section",[e._v("Salir")])],1)],1)],1)],1)],1)])},o=[],s={name:"ToolbarAccount",props:{title:{type:String,default:""},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},r=s,c=a("2877"),i=a("65c6"),l=a("9c40"),d=a("0016"),u=a("068f"),m=a("4e73"),p=a("1c1c"),h=a("66e5"),g=a("4074"),b=a("eb85"),w=a("eebe"),f=a.n(w),S=Object(c["a"])(r,n,o,!1,null,null,null);t["a"]=S.exports;f()(S,"components",{QToolbar:i["a"],QBtn:l["a"],QIcon:d["a"],QImg:u["a"],QMenu:m["a"],QList:p["a"],QItem:h["a"],QItemSection:g["a"],QSeparator:b["a"]})},"5ed6":function(e,t,a){"use strict";var n=a("31b8");t["a"]={index(){return n["b"].get("/location/index").then((e=>e.data)).catch((e=>{console.log(e)}))},tree(e){return n["b"].get("/location/allSections",e)},warehouses(e){return n["b"].get("/location/cellers")},loadWarehouses(){return console.log("%cCargando Almacenes...","font-size:2em; color:purple;"),n["b"].get("/location/cellers").then((e=>(console.log(e),e.data.cellers))).catch((e=>{console.log(e)}))},loadSections(e){return console.log("Traiendo secciones"),n["b"].get("/location/sections",e)},product(e){return console.log(e),n["b"].get("/location/product",e)},toggle(e){return n["b"].post("/location/toggle",e)},create(e){return n["b"].post("/location/celler",e)},addSection(e){return console.log(e),n["b"].post("/location/section",e)},setminmax(e){return console.log(e),n["b"].post("/location/maximos",e)},existencesIndex(e){return n["b"].post("/product/catalog",e).then((e=>e.data)).catch((e=>{console.log("===========ERROR==========="),console.log(e)}))},loadCats(e){return n["b"].post("/product/catalog",e)},getStocks(e){return n["b"].post("/location/stocks",e)},getFiltred(e){return n["b"].post("/product/catalog",e)},report(e){return n["b"].post("/location/report",e)}}},ae94:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-header",{staticClass:"bg-darktransl0 text-grey-5 q-pa-sm"},[a("q-card",{staticClass:"bg-darkl1"},[a("toolbar-account",{attrs:{title:"Almacen"}})],1)],1),a("div",{staticClass:"q-px-sm"},[a("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[a("q-toolbar",[e._v("\n\t\t\t\tAlmacenes\n\t\t\t\t"),a("q-space"),a("q-btn",{attrs:{flat:"",rounded:"",dense:"",icon:"add"}},[a("q-menu",{attrs:{"content-class":"bg-darkl0 text-grey-6"},model:{value:e.newwarehouse.state,callback:function(t){e.$set(e.newwarehouse,"state",t)},expression:"newwarehouse.state"}},[a("q-card",{staticClass:"bg-none"},[a("q-form",{on:{submit:e.create}},[a("q-card-section",[a("q-input",{attrs:{dark:"","label-stacked":"",color:"green-13",autofocus:"",filled:"",label:"Nuevo almacen",rules:[function(t){return e.newwarehouse.name.length>=3||"Ingrese un nombre"}]},model:{value:e.newwarehouse.name,callback:function(t){e.$set(e.newwarehouse,"name",t)},expression:"newwarehouse.name"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{rounded:"",color:"amber-13",flat:"",icon:"close"},on:{click:e.cancelAddSection}}),e.newwarehouse.name.length>=3?a("q-btn",{attrs:{rounded:"",color:"green-13",flat:"",icon:"done",type:"submit"}}):e._e()],1)],1)],1)],1)],1)],1),e.loading.state?a("div",{staticClass:"text-center q-pb-sm"},[a("q-spinner-grid",{attrs:{color:"green",size:"2em"}})],1):a("div",e._l(e.warehouses,(function(e,t){return a("div",{key:t,staticClass:"bg-darkl1 text-grey-6"},[a("tree",{attrs:{"tree-data":e}}),a("q-separator")],1)})),0)],1)],1),a("q-dialog",{attrs:{persistent:"",position:"bottom"},model:{value:e.wndAddSections.state,callback:function(t){e.$set(e.wndAddSections,"state",t)},expression:"wndAddSections.state"}},[e.wndAddSections.parent?[a("q-card",{staticClass:"bg-darkl0 text-grey-6 exo"},[a("q-toolbar",[e._v("\n\t\t\t\t\tNueva seccion en "),a("span",{staticClass:"q-ml-sm text-green-13 text-bold"},[e._v(" "+e._s(e.wndAddSections.parent.name))])]),a("q-form",{on:{submit:e.addSection}},[a("q-card-section",{staticClass:"row"},[a("q-input",{staticClass:"col",attrs:{dark:"",color:"amber-13",label:"Nombre","stack-label":"",autofocus:""},model:{value:e.newSection.name,callback:function(t){e.$set(e.newSection,"name",t)},expression:"newSection.name"}}),a("q-input",{staticClass:"col text-uppercase",attrs:{dark:"",color:"amber-13",label:"Alias","stack-label":""},model:{value:e.newSection.alias,callback:function(t){e.$set(e.newSection,"alias",t)},expression:"newSection.alias"}}),a("q-input",{staticClass:"col",attrs:{dark:"",color:"amber-13",type:"number",label:"Elementos"},model:{value:e.newSection.items,callback:function(t){e.$set(e.newSection,"items",t)},expression:"newSection.items"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",icon:"close",color:"amber-13",disabled:e.newSection.adding},on:{click:e.cancelAddSection}}),a("q-btn",{attrs:{flat:"",icon:"done",type:"submit",color:"green-13",disabled:e.newSection.adding,loading:e.newSection.adding}})],1)],1)],1)]:e._e()],2)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",{staticClass:"q-pl-md",attrs:{dark:"",padding:""}},[a("node-tree",{attrs:{node:e.treeData}})],1)},r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-expansion-item",{attrs:{"expand-separator":"","expand-icon-toggle":""},scopedSlots:e._u([{key:"header",fn:function(){return[a("q-item-section",[e._v(e._s(e.node.name))]),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"row items-left"},[a("q-btn",{attrs:{flat:"",icon:"add",color:"green-13"},on:{click:function(t){return e.add(e.node)}}})],1)])]},proxy:!0}])},[a("div",[e.node.children&&e.node.children.length?a("q-list",{staticClass:"q-pl-md",attrs:{dark:"",padding:""}},e._l(e.node.children,(function(e,t){return a("node",{key:t,attrs:{node:e}})})),1):e._e()],1)])},i=[],l={name:"node",props:{node:Object},methods:{add(e){console.log(e),this.$store.commit("Warehouse/initAddSection",e)}}},d=l,u=a("2877"),m=a("3b73"),p=a("4074"),h=a("9c40"),g=a("1c1c"),b=a("eebe"),w=a.n(b),f=Object(u["a"])(d,c,i,!1,null,null,null),S=f.exports;w()(f,"components",{QExpansionItem:m["a"],QItemSection:p["a"],QBtn:h["a"],QList:g["a"]});var q={name:"TreeSections",props:{treeData:Object},components:{NodeTree:S}},k=q,x=Object(u["a"])(k,s,r,!1,null,null,null),v=x.exports;w()(x,"components",{QList:g["a"]});var _=a("5ed6"),A=a("1d6c"),C={name:"AdminWrhs",components:{ToolbarAccount:A["a"],Tree:v},beforeMount(){this.$store.commit("Warehouse/cleanModule"),_["a"].warehouses().then((e=>{let t=e.data.cellers;t.length>0?t.map((e=>{let t={params:{_celler:e.id}};_["a"].tree(t).then((t=>{this.loading.state=!1,e.children=t.data,e.celler=e.id,this.$store.commit("Warehouse/set",e)})).catch((e=>{alert(e)}))})):this.loading.state=!1}))},data(){return{loading:{state:!0,type:"icon"},newwarehouse:{state:!1,name:""},newSection:{name:"",alias:"",items:1,adding:!1}}},methods:{create(){let e={name:this.newwarehouse.name,_type:1};_["a"].create(e).then((e=>{let t=e.data;if(t.celler){let e=t.celler;e.celler=e.id,e.children=[],this.$store.commit("Warehouse/set",e),this.newwarehouse.state=!1,this.newwarehouse.name=""}else alert("Crear un NOTIFY de que no se crea el almacen!!")})).catch((e=>{console.log(e)}))},addSection(){if(this.newSection.name&&this.newSection.alias){console.log("agregando seccion"),this.newSection.adding=!0,console.log(this.wndAddSections);let e=this.wndAddSections.parent.root;console.log(e);let t={name:this.newSection.name,alias:this.newSection.alias.toUpperCase(),items:this.newSection.items,root:null,details:{},_celler:null};switch(e){case void 0:console.log("no tiene padre, solo el almacen"),t._celler=this.wndAddSections.parent.celler;break;default:console.log("tiene una seccion padre: "+this.wndAddSections.parent.id),t.root=this.wndAddSections.parent.id;break}console.log(t),_["a"].addSection(t).then((e=>{let t=e.data;console.log(t),this.$store.commit("Warehouse/addChildren",e.data.celler),this.$store.commit("Warehouse/cancelAddSection"),this.resetFormAddSection()})).catch((e=>{console.log(e)}))}},resetFormAddSection(){this.newSection.name="",this.newSection.alias="",this.newSection.items=1,this.newSection.adding=!1},cancelAddSection(){this.$store.commit("Warehouse/cancelAddSection")}},computed:{wndAddSections:{get(){return this.$store.state.Warehouse.wndAddSections}},warehouses:{get(){return this.$store.state.Warehouse.warehouses}}}},Q=C,$=a("9989"),y=a("e359"),W=a("f09f"),I=a("65c6"),T=a("2c91"),j=a("4e73"),O=a("0378"),E=a("a370"),N=a("27f9"),B=a("4b7e"),D=a("981c"),F=a("eb85"),M=a("24e8"),z=a("7f67"),L=Object(u["a"])(Q,n,o,!1,null,null,null);t["default"]=L.exports;w()(L,"components",{QPage:$["a"],QHeader:y["a"],QCard:W["a"],QToolbar:I["a"],QSpace:T["a"],QBtn:h["a"],QMenu:j["a"],QForm:O["a"],QCardSection:E["a"],QInput:N["a"],QCardActions:B["a"],QSpinnerGrid:D["a"],QSeparator:F["a"],QDialog:M["a"]}),w()(L,"directives",{ClosePopup:z["a"]})}}]);