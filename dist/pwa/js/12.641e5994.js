(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"028d":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{attrs:{padding:""}},[o("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[o("q-card",{staticClass:"bg-darkl1"},[o("toolbar-account",{attrs:{title:"Min/Max"}})],1)],1),o("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[o("q-toolbar",[t._v("Ajuste")]),o("q-separator"),o("q-card-section",[o("q-select",{ref:"iptsearch",staticClass:"text-uppercase",attrs:{dark:"",dense:"",filled:"","fill-input":"",color:"green-13",behavior:"menu","use-input":"","hide-selected":"","hide-dropdown-icon":"","input-debounce":"0","option-value":"id","option-label":"code",value:t.autocom.model,options:t.autocom.options,type:t.iptsearch.type},on:{filter:t.autocomplete,input:t.get},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("Sin coincidencias")])],1)]},proxy:!0},{key:"prepend",fn:function(){return[o("q-btn",{attrs:{type:"button",dense:"",size:"sm",flat:"",icon:t.iptsearch.icon,color:"grey-6"},on:{click:t.toogleIptSearch}})]},proxy:!0},{key:"option",fn:function(e){return[o("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[o("q-item-section",[o("q-item-label",[o("span",{staticClass:"text-bold"},[t._v(t._s(e.opt.code))]),t._v(" - "+t._s(e.opt.name))]),o("q-item-label",{staticClass:"text--2",attrs:{caption:""}},[t._v(t._s(e.opt.description))])],1)],1)]}}])})],1),t.setproduct.state?o("q-card-section",[o("div",[t._v(t._s(t.setproduct.description))]),o("q-form",{staticClass:"row q-gutter-lg"},[o("q-input",{staticClass:"col",attrs:{dense:"",borderless:"",readonly:"",dark:"",label:"Stock"},model:{value:t.setproduct.stock,callback:function(e){t.$set(t.setproduct,"stock",e)},expression:"setproduct.stock"}}),o("q-input",{staticClass:"col",attrs:{dense:"",dark:"",color:"green-13",type:"number",label:"Minimo",min:"0",autofocus:""},model:{value:t.setproduct.min,callback:function(e){t.$set(t.setproduct,"min",e)},expression:"setproduct.min"}}),o("q-input",{staticClass:"col",attrs:{dense:"",dark:"",color:"green-13",type:"number",label:"Maximo",min:"0"},model:{value:t.setproduct.max,callback:function(e){t.$set(t.setproduct,"max",e)},expression:"setproduct.max"}}),t.canset?o("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",color:"green-13",icon:"done",loading:t.setproduct.setting},on:{click:t.set}}):t._e()],1)],1):t._e()],1)],1)},a=[],c=(o("e01a"),o("498a"),o("5ed6")),n=o("f7cb"),i=o("1d6c"),r={components:{ToolbarAccount:i["a"]},data(){return{iptsearch:{value:"",processing:!1,type:"text",icon:"fas fa-hashtag"},autocom:{model:null,options:void 0},setproduct:{state:!1,setting:!1,code:void 0,min:0,max:0,currmin:0,currmax:0,stock:void 0,description:void 0}}},methods:{autocomplete(t,e,o){let s={params:{code:t.trim()}};n["a"].autocomplete(s).then((t=>{let o=t.data;e((()=>{this.autocom.options=o}))})).catch((t=>{console.log(t)}))},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.iptsearch.focus()},get(t){console.log(t),this.setproduct.state=!1,this.iptsearch.processing=!0;let e=t.code,o={params:{code:e}};c["a"].product(o).then((t=>{let o=t.data;o.id?(this.setproduct.code=o.code,this.setproduct.stock=o.stock,this.setproduct.min=o.min,this.setproduct.max=o.max,this.setproduct.currmin=o.min,this.setproduct.currmax=o.max,this.setproduct.description=o.description,this.setproduct.state=!0):(this.setproduct.state=!1,this.$q.notify({message:"Sin coincidencias para "+e.toUpperCase(),timeout:1500,color:"negative",position:"center",icon:"fas fa-exclamation-triangle"})),this.iptsearch.processing=!1})).catch((t=>{this.$q.notify({message:"Error de red, sin conexion al servidor :(",timeout:3e3,color:"deep-orange-14",position:"center",icon:"fas fa-exclamation-triangle"})}))},set(){let t={code:this.setproduct.code,min:parseInt(this.setproduct.min),max:parseInt(this.setproduct.max)};c["a"].setminmax(t).then((t=>{let e=t.data.success;e?(this.setproduct.currmin=this.setproduct.min,this.setproduct.currmax=this.setproduct.max,this.$q.notify({timeout:1500,color:"positive",position:"center",icon:"done"}),this.$refs.iptsearch.focus()):this.$q.notify({timeout:1500,color:"negative",position:"center",icon:"fas fa-heart-broken"})})).catch((t=>{console.log(t)}))}},computed:{cansearch(){return!(this.iptsearch.value.length>2)},canset(){return this.setproduct.min!=this.setproduct.currmin||this.setproduct.max!=this.setproduct.currmax}}},l=r,p=o("2877"),u=o("9989"),d=o("e359"),m=o("f09f"),h=o("65c6"),g=o("eb85"),f=o("a370"),b=o("ddd8"),x=o("66e5"),k=o("4074"),q=o("9c40"),v=o("068f"),y=o("0170"),_=o("0378"),w=o("27f9"),C=o("eebe"),Q=o.n(C),S=Object(p["a"])(l,s,a,!1,null,null,null);e["default"]=S.exports;Q()(S,"components",{QPage:u["a"],QHeader:d["a"],QCard:m["a"],QToolbar:h["a"],QSeparator:g["a"],QCardSection:f["a"],QSelect:b["a"],QItem:x["a"],QItemSection:k["a"],QBtn:q["a"],QImg:v["a"],QItemLabel:y["a"],QForm:_["a"],QInput:w["a"]})},"1d6c":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-toolbar",{staticClass:"row justify-between items-center"},[o("span",[t.iconlauncher?o("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):o("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),o("span",{staticClass:"col text-center"},[o("span",[t._v(t._s(t.workin.workpoint.alias))]),o("br"),o("span",[t._v(t._s(t.title))])]),o("span",{staticClass:"text-right"},[o("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[o("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),o("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[o("q-list",{staticClass:"text-grey-8 exo",staticStyle:{"min-width":"150px"}},[o("q-item",[o("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),o("q-separator"),o("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[o("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},a=[],c={name:"ToolbarAccount",props:{title:{type:String,required:!0},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},n=c,i=o("2877"),r=o("65c6"),l=o("9c40"),p=o("0016"),u=o("068f"),d=o("4e73"),m=o("1c1c"),h=o("66e5"),g=o("4074"),f=o("eb85"),b=o("eebe"),x=o.n(b),k=Object(i["a"])(n,s,a,!1,null,null,null);e["a"]=k.exports;x()(k,"components",{QToolbar:r["a"],QBtn:l["a"],QIcon:p["a"],QImg:u["a"],QMenu:d["a"],QList:m["a"],QItem:h["a"],QItemSection:g["a"],QSeparator:f["a"]})},"5ed6":function(t,e,o){"use strict";var s=o("31b8");e["a"]={index(){return s["b"].get("/location/index").then((t=>t.data)).catch((t=>{console.log(t)}))},tree(t){return s["b"].get("/location/allSections",t)},warehouses(t){return s["b"].get("/location/cellers")},loadWarehouses(){return console.log("%cCargando Almacenes...","font-size:2em; color:purple;"),s["b"].get("/location/cellers").then((t=>(console.log(t),t.data.cellers))).catch((t=>{console.log(t)}))},loadSections(t){return console.log("Traiendo secciones"),s["b"].get("/location/sections",t)},product(t){return console.log(t),s["b"].get("/location/product",t)},toggle(t){return s["b"].post("/location/toggle",t)},create(t){return s["b"].post("/location/celler",t)},addSection(t){return console.log(t),s["b"].post("/location/section",t)},setminmax(t){return console.log(t),s["b"].post("/location/maximos",t)},existencesIndex(t){return console.log("Cargando index del modulo EXISTENCIAS.."),s["b"].post("/product/catalog",t).then((t=>t.data)).catch((t=>{console.log("===========ERROR==========="),console.log(t)}))},loadCats(t){return s["b"].post("/product/catalog",t)},getStocks(t){return s["b"].post("/location/stocks",t)},getFiltred(t){return console.log(t),s["b"].post("/product/catalog",t)}}},f7cb:function(t,e,o){"use strict";var s=o("31b8");e["a"]={autocomplete(t){return s["b"].get("/product/autocomplete",t)}}}}]);