(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0cf5":function(t,e,o){},"1b91":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[o("q-card",{staticClass:"bg-darkl1"},[o("toolbar-account",{attrs:{title:"Contador"}}),t.warehouses?o("div",{staticClass:"q-pa-xs column"},[o("div",{staticClass:"row"},[o("q-select",{staticClass:"col q-px-md",attrs:{dark:"",color:"amber-13",label:"Tipo de conteo",options:[{label:"Categoria",value:1},{label:"Seccion",value:2}]},model:{value:t.counterType,callback:function(e){t.counterType=e},expression:"counterType"}}),o("q-select",{staticClass:"col q-px-md",attrs:{dark:"",color:"amber-13",label:"Almacen",options:t.warehousesOptions},on:{input:t.setWarehouse},model:{value:t.workIn,callback:function(e){t.workIn=e},expression:"workIn"}})],1),1==t.counterType.value?o("div",{staticClass:"row q-px-md justify-around"},t._l(t.sections,(function(e,s){return o("q-select",{key:s,attrs:{dark:"",color:"amber-13",options:t.sections[s]},on:{input:function(e){return t.loadSections(t.sectModels[s],s)}},model:{value:t.sectModels[s],callback:function(e){t.$set(t.sectModels,s,e)},expression:"sectModels[idx]"}})})),1):t._e(),2==t.counterType.value?o("div",{staticClass:"row q-px-md justify-around"},t._l(t.sections,(function(e,s){return o("q-select",{key:s,attrs:{dark:"",color:"amber-13",options:t.sections[s]},on:{input:function(e){return t.loadSections(t.sectModels[s],s)}},model:{value:t.sectModels[s],callback:function(e){t.$set(t.sectModels,s,e)},expression:"sectModels[idx]"}})})),1):t._e()]):t._e()],1)],1),o("div",[o("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[t.tableproducts.data?o("div",[o("q-table",{staticClass:"_thsticky",attrs:{dark:"",flat:"","card-class":"bg-none text-grey-6",data:t.tableproducts.data,columns:t.tableproducts.columns,"row-key":"opening","table-header-class":"text-amber-13",loading:t.tableproducts.loading},scopedSlots:t._u([{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"locations",attrs:{props:e}},[o("div",{staticClass:"column"},t._l(e.row.locations,(function(e,s){return o("span",{key:s},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.path)+"\n\t\t\t\t\t\t\t\t\t")])})),0)]),o("q-td",{key:"code",attrs:{props:e}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.code)+"\n\t\t\t\t\t\t\t")]),o("q-td",{key:"counter",attrs:{props:e}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.counter)+"\n\t\t\t\t\t\t\t\t "),o("q-popup-edit",{attrs:{dark:"",title:"Conteo: "+e.row.code},model:{value:e.row.counter,callback:function(o){t.$set(e.row,"counter",o)},expression:"props.row.counter"}},[o("q-input",{attrs:{dark:"",color:"amber",min:"0",type:"number",dense:"",autofocus:"",counter:""},model:{value:e.row.counter,callback:function(o){t.$set(e.row,"counter",o)},expression:"props.row.counter"}})],1)],1)],1)]}}])})],1):o("q-card-section",[t._v("\n\t\t\t\tFiltre secciones para ver articulos\n\t\t\t")])],1)],1)],1)},a=[],n=(o("a434"),o("e6cf"),o("5ed6")),l=o("1d6c"),c={name:"PageIndex",components:{ToolbarAccount:l["a"]},data(){return{warehouses:null,counterType:{label:"Categoria",value:1},workIn:{label:"seleccione",value:null,disabled:!0},sections:[],sectModels:[],tableproducts:{loading:!1,data:null,columns:[{name:"locations",align:"left",label:"Ubicacion",field:"locations"},{name:"code",align:"left",label:"Codigo",field:"code",sortable:!0},{name:"counter",align:"center",label:"Conteo",field:"counter",sortable:!0}]}}},beforeMount(){this.loadIndex()},methods:{setWarehouse(){this.tableproducts.loading=!0,console.log(this.workIn),this.sections=[];let t={params:{_celler:this.workIn.value,products:!0,paginate:50}};n["a"].loadSections(t).then((t=>{let e=t.data.sections.map((t=>({label:t.alias,value:t.id})));console.log(e),this.sections.push(e),this.sectModels.push({label:"Seleccione",value:null}),this.tableproducts.data=t.data.products.data.map((t=>({code:t.code,locations:t.locations,counter:0}))),this.tableproducts.loading=!1})).catch((t=>{console.log(t)}))},loadSections(t,e){this.tableproducts.loading=!0,console.log(this.sections),console.log(this.sectModels),this.sections.splice(e+1),this.sectModels.splice(e+1);let o={params:{_section:t.value,products:!0,paginate:50}};n["a"].loadSections(o).then((t=>{let e=t.data.sections.sections;if(e.length>0){let o=e.map((t=>({label:t.alias,value:t.id})));console.log(o),this.sections.push(o),this.sectModels.push({label:"Seleccione",value:null}),this.tableproducts.data=t.data.products.data.map((t=>({code:t.code,locations:t.locations,counter:0}))),this.tableproducts.loading=!1}else console.log("Sin mas subsecciones por cargar!!")})).catch((t=>{console.log(t)}))},async loadIndex(){this.warehouses=await n["a"].loadWarehouses()}},computed:{cansearch(){return!(this.iptsearch.value.length>2)},warehousesOptions(){return this.warehouses.map((t=>({label:t.name,value:t.id})))},fullpath(){let t="";return this.sectModels.forEach(((e,o,s)=>{e.value&&(t+=0==o?""+e.label:"-"+e.label)})),t}}},r=c,i=(o("1d9e"),o("2877")),u=o("9989"),d=o("e359"),p=o("f09f"),b=o("ddd8"),h=o("a370"),g=o("eaac"),m=o("bd08"),f=o("db86"),k=o("42a1"),w=o("27f9"),v=o("eebe"),x=o.n(v),q=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=q.exports;x()(q,"components",{QPage:u["a"],QHeader:d["a"],QCard:p["a"],QSelect:b["a"],QCardSection:h["a"],QTable:g["a"],QTr:m["a"],QTd:f["a"],QPopupEdit:k["a"],QInput:w["a"]})},"1d6c":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-toolbar",{staticClass:"row justify-between items-center"},[o("span",[t.iconlauncher?o("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):o("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),o("span",{staticClass:"col text-center"},[o("span",[t._v(t._s(t.workin.workpoint.alias))]),o("br"),o("span",[t._v(t._s(t.title))])]),o("span",{staticClass:"text-right"},[o("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[o("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),o("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[o("q-list",{staticClass:"text-grey-8 exo",staticStyle:{"min-width":"150px"}},[o("q-item",[o("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),o("q-separator"),o("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[o("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},a=[],n={name:"ToolbarAccount",props:{title:{type:String,required:!0},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},l=n,c=o("2877"),r=o("65c6"),i=o("9c40"),u=o("0016"),d=o("068f"),p=o("4e73"),b=o("1c1c"),h=o("66e5"),g=o("4074"),m=o("eb85"),f=o("eebe"),k=o.n(f),w=Object(c["a"])(l,s,a,!1,null,null,null);e["a"]=w.exports;k()(w,"components",{QToolbar:r["a"],QBtn:i["a"],QIcon:u["a"],QImg:d["a"],QMenu:p["a"],QList:b["a"],QItem:h["a"],QItemSection:g["a"],QSeparator:m["a"]})},"1d9e":function(t,e,o){"use strict";var s=o("0cf5"),a=o.n(s);a.a},"5ed6":function(t,e,o){"use strict";var s=o("31b8");e["a"]={index(){return s["b"].get("/location/index").then((t=>t.data)).catch((t=>{console.log(t)}))},tree(t){return s["b"].get("/location/allSections",t)},warehouses(t){return s["b"].get("/location/cellers")},loadWarehouses(){return console.log("%cCargando Almacenes...","font-size:2em; color:purple;"),s["b"].get("/location/cellers").then((t=>(console.log(t),t.data.cellers))).catch((t=>{console.log(t)}))},loadSections(t){return console.log("Traiendo secciones"),s["b"].get("/location/sections",t)},product(t){return console.log(t),s["b"].get("/location/product",t)},toggle(t){return s["b"].post("/location/toggle",t)},create(t){return s["b"].post("/location/celler",t)},addSection(t){return console.log(t),s["b"].post("/location/section",t)},setminmax(t){return console.log(t),s["b"].post("/location/maximos",t)},existencesIndex(t){return console.log("Cargando index del modulo EXISTENCIAS.."),s["b"].post("/product/catalog",t).then((t=>t.data)).catch((t=>{console.log("===========ERROR==========="),console.log(t)}))},loadCats(t){return s["b"].post("/product/catalog",t)},getStocks(t){return s["b"].post("/location/stocks",t)},getFiltred(t){return console.log(t),s["b"].post("/product/catalog",t)}}}}]);