(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"5ed6":function(e,t,o){"use strict";var s=o("31b8");t["a"]={index(){return s["b"].get("/location/index").then((e=>e.data)).catch((e=>{console.log(e)}))},tree(e){return s["b"].get("/location/allSections",e)},warehouses(e){return s["b"].get("/location/cellers")},list(){return s["b"].get("/location/cellers").then((e=>(console.log(e.data),e.data.cellers))).catch((e=>{console.log(e)}))},loadWarehouses(){return console.log("%cCargando Almacenes...","font-size:2em; color:purple;"),s["b"].get("/location/cellers").then((e=>(console.log(e),e.data.cellers))).catch((e=>{console.log(e)}))},sections(e){return s["b"].get("/location/sections",e).then((e=>(console.log(e.data),e.data.sections))).catch((e=>{console.log(e)}))},product(e){return console.log(e),s["b"].get("/location/product",e)},toggle(e){return s["b"].post("/location/toggle",e)},create(e){return s["b"].post("/location/celler",e)},addSection(e){return console.log(e),s["b"].post("/location/section",e)},setminmax(e){return console.log(e),s["b"].post("/location/maximos",e)},existencesIndex(e){return s["b"].post("/product/catalog",e).then((e=>e.data)).catch((e=>{console.log("===========ERROR==========="),console.log(e)}))},loadCats(e){return s["b"].post("/product/catalog",e)},getStocks(e){return s["b"].post("/location/stocks",e)},getFiltred(e){return s["b"].post("/product/catalog",e)},report(e){return s["b"].post("/location/report",e)}}},b293:function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-select",{staticClass:"text-uppercase",attrs:{dark:"",dense:"",filled:"","fill-input":"",color:"green-13","use-input":"","hide-dropdown-icon":"","input-debounce":"0","option-value":"id","option-label":"code","hide-selected":"",behavior:"menu",autofocus:"",value:e.autocom.model,options:e.autocom.options,type:e.iptsearch.type},on:{filter:e.autocomplete,input:e.selItem},scopedSlots:e._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[e._v("Sin coincidencias")])],1)]},proxy:!0},{key:"prepend",fn:function(){return[o("q-btn",{attrs:{type:"button",dense:"",size:"sm",flat:"",icon:e.iptsearch.icon,color:"grey-6"},on:{click:e.toogleIptSearch}})]},proxy:!0},{key:"option",fn:function(t){return[t.opt.status.id>1?o("div",e._b({staticClass:"text-grey-7 q-pa-sm"},"div",t.itemProps,!1),[o("div",{staticClass:"text-bold"},[e._v("\n                    "+e._s(t.opt.code)+" - "+e._s(t.opt.name)+"\n                    "),o("q-chip",{staticClass:"text--2",attrs:{color:"red","text-color":"white",icon:"warning",label:t.opt.status.name}})],1),o("div",{staticClass:"text--2",attrs:{caption:""}},[e._v(e._s(t.opt.description))])]):o("div",e._g(e._b({staticClass:"q-pa-sm q-mb-sm"},"div",t.itemProps,!1),t.itemEvents),[o("div",{staticClass:"text-body1 text-bold"},[e._v("\n                    "+e._s(t.opt.code)+" - "+e._s(t.opt.name)+"\n                ")]),o("div",{staticClass:"text--2",attrs:{caption:""}},[e._v(e._s(t.opt.description))])])]}}]),model:{value:e.autocom.model,callback:function(t){e.$set(e.autocom,"model",t)},expression:"autocom.model"}})],1)},a=[],n=(o("498a"),o("f7cb")),i={props:{checkState:{default:!1,type:Boolean},image:{default:!1,type:Boolean}},data(){return{autocom:{model:null,options:void 0},iptsearch:{processing:!1,type:"text",icon:"fas fa-hashtag"}}},methods:{autocomplete(e,t,o){let s={params:{code:e.trim()}};n["a"].autocomplete(s).then((e=>{let o=e.data;t((()=>{this.autocom.options=o}))})).catch((e=>{console.log(e)}))},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.iptsearch.focus()},selItem(e){this.$emit("input",e),setTimeout((()=>{this.autocom.model=null}),100)}}},l=i,c=o("2877"),r=o("ddd8"),d=o("66e5"),u=o("4074"),p=o("9c40"),h=o("b047"),g=o("eebe"),m=o.n(g),b=Object(c["a"])(l,s,a,!1,null,null,null);t["a"]=b.exports;m()(b,"components",{QSelect:r["a"],QItem:d["a"],QItemSection:u["a"],QBtn:p["a"],QChip:h["a"]})},c738:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{attrs:{padding:""}},[o("q-header",{staticClass:"bg-darkl1",attrs:{elevated:""}},[o("div",{staticClass:"q-py-sm text-uppercase row items-center"},[o("q-btn",{attrs:{flat:"",icon:"fas fa-chevron-left",color:"white"},on:{click:function(t){return e.$router.push("/almacen/contador")}}}),o("span",{staticClass:"text-light-blue-13"},[e._v(" Configuracion de Inventario "+e._s(this.$route.params.id))])],1)]),e.data?[o("q-card",{staticClass:"q-mt-xs bg-darkl1 exo"},[o("q-card-section",[e._v("\n                Creacion: "+e._s(e.data.inventory.created_at)),o("br"),e._v("\n                Administrador: "+e._s(e.data.inventory.created_by.names)+" "+e._s(e.data.inventory.created_by.surname_pat)+" [ "+e._s(e.data.inventory.created_by.nick)+" ]"),o("br")])],1),o("div",{class:e.wrapperClass+" q-pt-md q-mb-xl q-gutter-md"},[o("q-card",{staticClass:"col bg-darkl1 exo"},[o("q-expansion-item",{attrs:{"expand-separator":"",icon:"fas fa-users",label:"Responsables",caption:e.group.length.toString(),"header-class":"text-grey-5"},model:{value:e.expands.respos,callback:function(t){e.$set(e.expands,"respos",t)},expression:"expands.respos"}},[o("q-card-section",[o("q-list",e._l(e.natAccounts,(function(t){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{tag:"label"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-checkbox",{attrs:{disable:1!=e.data.inventory.status.id,dark:"",val:t.id,color:"green-13"},on:{input:function(o){return e.toggleReponsable(t.id)}},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1),o("q-item-section",[o("q-item-label",[o("span",{staticClass:"text-grey-6"},[e._v(e._s(t.names+" "+t.surname_pat))]),o("br"),e._v("\n                                        [ "+e._s(t.nick.toLowerCase())+" ]\n                                    ")])],1)],1)})),1)],1)],1)],1),o("q-card",{staticClass:"col bg-darkl1 exo"},[o("q-expansion-item",{attrs:{"expand-separator":"",icon:"fas fa-boxes",label:"Productos",caption:e.listProducts.length.toString(),"header-class":"text-grey-5"},model:{value:e.expands.products,callback:function(t){e.$set(e.expands,"products",t)},expression:"expands.products"}},[o("q-card-section",[o("div",{staticClass:"row items-start"},[1==e.data.inventory.status.id?o("div",{staticClass:"col"},[o("q-select",{attrs:{dark:"",dense:"",flat:"",color:"green-13",label:"Agregar por...","stack-label":"",options:e.optsAddProds},on:{input:e.modeAddChanged},model:{value:e.modeAdd,callback:function(t){e.modeAdd=t},expression:"modeAdd"}})],1):e._e()])]),e.modeAdd?o("q-card-section",[1==e.modeAdd.value?o("CategoriesBrowser",{on:{selectedCat:e.selectedCat}}):e._e(),2==e.modeAdd.value?o("WarehousesBrowser",{on:{selectedLoc:e.selectedLoc}}):e._e(),3==e.modeAdd.value?o("div",[o("ProductAutocomplete")],1):e._e()],1):e._e(),o("q-card-section",{staticStyle:{"max-width":"100%"}},[o("q-table",{attrs:{dark:"",flat:"","card-class":"bg-none",data:e.listProducts,columns:e.tableProducts.columns,"visible-columns":e.tableProducts.visibleColumns},scopedSlots:e._u([{key:"body",fn:function(t){return[o("q-tr",{attrs:{props:t}},[o("q-td",{key:"id",attrs:{props:t}},[e._v(e._s(t.row.id))]),o("q-td",{key:"code",attrs:{props:t}},[e._v(e._s(t.row.code))]),o("q-td",{key:"description",staticClass:"text--2",attrs:{props:t}},[e._v(e._s(t.row.description))]),o("q-td",{key:"locations",attrs:{props:t}},[e._v("\n                                        [ "+e._s(t.row.locations.length)+" ]\n                                        "),e._l(t.row.locations,(function(t,s){return o("span",{key:s},[e._v(e._s(t.path))])}))],2)],1)]}}],null,!1,3869234322)})],1)],1)],1)],1)]:e._e(),o("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[e.trydiscard?[o("q-btn",{attrs:{rounded:"","no-caps":"",color:"primary",icon:"close",label:"No Eliminar"},on:{click:function(t){e.trydiscard=!1}}}),o("q-btn",{attrs:{rounded:"","no-caps":"",color:"negative",label:"¡Confirmar Eliminacion de Inventario!"},on:{click:function(t){return e.nextStep(4)}}})]:o("q-btn",{attrs:{rounded:"","no-caps":"",color:"orange-14",icon:"delete",label:"Eliminar"},on:{click:function(t){e.trydiscard=!0}}})],2),e.canStart&&!e.trydiscard?o("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[o("q-btn",{attrs:{rounded:"","no-caps":"",color:"primary",icon:"fas fa-play-circle",label:"Iniciar"},on:{click:e.start}})],1):e._e()],2)},a=[],n=(o("e01a"),o("e6cf"),o("e0df")),i=o("31b8"),l={join(e){return i["b"].get("/workpoint/join")},get(e){return i["b"].post("account/users",e)}},c=o("b293"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row items-end"},[o("q-select",{staticClass:"col-3 q-mr-sm q-mb-sm",attrs:{dark:"",color:"green-13","option-value":"id","option-label":"name",label:"Categoria",options:e.categories.options},on:{input:e.setRootCat},model:{value:e.categories.selected,callback:function(t){e.$set(e.categories,"selected",t)},expression:"categories.selected"}}),e._l(e.categories.children,(function(t,s){return o("q-select",{key:s,staticClass:"col-3 q-mr-sm q-mb-sm",attrs:{dark:"",color:"green-13",label:"Seleccione",options:e.categories.children[s].options,"option-value":"id","option-label":"name"},on:{input:function(t){return e.loadCats(e.categories.children[s].model,s)}},model:{value:e.categories.children[s].model.value,callback:function(t){e.$set(e.categories.children[s].model,"value",t)},expression:"categories.children[idx].model.value"}})})),o("q-inner-loading",{attrs:{showing:e.loading.state,dark:""}},[o("q-spinner-dots",{attrs:{size:"30px",color:"amber-7"}})],1)],2)},d=[],u=(o("a434"),o("f7cb")),p={props:{fetchproducts:{type:Boolean,default:!0}},data(){return{categories:{selected:null,options:[],children:[]},loading:{state:!1,msg:""},filters:{paginate:null,_category:null,_location:null,check_stock:!1,with_stock:!1,_status:null,check_locations:!0},labeloading:""}},async mounted(){this.loading.state=!0;let e={_category:null,products:!1};this.categories.options=await u["a"].categories(e),console.log(this.categories.options),this.loading.state=!1},methods:{async setRootCat(){this.loading.state=!0,this.categories.children=[];let e={_category:this.categories.selected.id},t=await u["a"].categories(e);if(t.children.length){let e={options:t.children,model:{label:"Seleccione",value:null}};this.categories.children.push(e)}this.selectedCat(this.categories.selected)},async loadCats(e,t){this.loading.state=!0,this.categories.children.splice(t+1);let o={_category:e.value.id},s=await u["a"].categories(o);if(s.children.length){let e={options:s.children,model:{label:"Seleccione",value:null}};this.categories.children.push(e)}this.selectedCat(e.value)},async selectedCat(e){this.filters._category=e.id;let t={category:e,products:[]};this.fetchproducts&&e.root&&(t.products=await u["a"].get(this.filters)),this.loading.state=!1,this.$emit("selectedCat",t)}}},h=p,g=o("2877"),m=o("ddd8"),b=o("74f7"),v=o("8380"),f=o("eebe"),y=o.n(f),_=Object(g["a"])(h,r,d,!1,null,null,null),w=_.exports;y()(_,"components",{QSelect:m["a"],QInnerLoading:b["a"],QSpinnerDots:v["a"]});var k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row items-end"},[o("q-select",{staticClass:"col-3 q-mr-sm q-mb-sm",attrs:{dark:"",color:"green-13",label:"Almacen","option-value":"id","option-label":"name",options:e.warehouses.options},on:{input:e.setWarehouse},model:{value:e.warehouses.selected,callback:function(t){e.$set(e.warehouses,"selected",t)},expression:"warehouses.selected"}}),e._l(e.warehouses.sections,(function(t,s){return o("q-select",{key:s,staticClass:"col-2 q-mr-sm q-mb-sm",attrs:{dark:"",color:"amber-13",label:"Seleccione",options:e.warehouses.sections[s].options,"option-value":"id","option-label":"alias"},on:{input:function(t){return e.loadSections(e.warehouses.sections[s],s)}},model:{value:e.warehouses.sections[s].model.value,callback:function(t){e.$set(e.warehouses.sections[s].model,"value",t)},expression:"warehouses.sections[idx].model.value"}})})),o("q-inner-loading",{attrs:{showing:e.loading.state,dark:""}},[o("q-spinner-dots",{attrs:{size:"30px",color:"amber-7"}})],1)],2)},x=[],q=o("5ed6"),C={props:{fetchproducts:{type:Boolean,default:!0}},data(){return{warehouses:{selected:null,options:[],sections:[],sectModels:[],loading:!1},filters:{paginate:null,_category:null,_location:null,check_stock:!1,with_stock:!1,_status:null,check_locations:!0},loading:{state:!1,msg:""}}},async mounted(){this.loading.state=!0,this.warehouses.options=await q["a"].list(),console.log(this.warehouses.options),this.loading.state=!1},methods:{async setWarehouse(){this.loading.state=!0,this.warehouses.sections=[];let e={params:{_celler:this.warehouses.selected.id,products:!1}},t=await q["a"].sections(e);if(console.log(t),t.length){let e={options:t,model:{label:"Seleccione",value:null}};this.warehouses.sections.push(e)}this.loading.state=!1},async loadSections(e,t){this.loading.state=!0,this.warehouses.sections.splice(t+1),console.log(e.model.value.id);let o={params:{_section:e.model.value.id,products:!1}},s=await q["a"].sections(o);if(console.log(s.sections),s.sections.length){let e={options:s.sections,model:{label:"Seleccione",value:null}};this.warehouses.sections.push(e)}this.selectedLoc(e)},async selectedLoc(e){console.log("Obteniendo productos"),this.filters._location=e.model.value.id,console.log(this.filters._location);let t={section:e,products:[]};this.fetchproducts&&(t.products=await u["a"].get(this.filters)),console.log(t),this.loading.state=!1,this.$emit("selectedLoc",t)}}},S=C,$=Object(g["a"])(S,k,x,!1,null,null,null),A=$.exports;y()($,"components",{QSelect:m["a"],QInnerLoading:b["a"],QSpinnerDots:v["a"]});var Q={components:{ProductAutocomplete:c["a"],CategoriesBrowser:w,WarehousesBrowser:A},data(){return{data:null,natAccounts:null,trydiscard:!1,group:[],optsAddProds:[{label:"Categoria",value:1},{label:"Ubicacion",value:2},{label:"Codigo",value:3}],modeAdd:null,listProducts:[],tableProducts:{columns:[{name:"id",align:"left",label:"ID",field:e=>e.id,sortable:!0},{name:"code",align:"left",label:"Codigo",field:e=>e.code,sortable:!0},{name:"description",align:"left",label:"Descripcion",field:e=>e.description},{name:"locations",align:"center",label:"Ubicaciones",field:e=>e.locations.length,sortable:!0}],visibleColumns:["code","locations"]},expands:{respos:!0,products:!0}}},async beforeMount(){this.$store.commit("Layout/hideToolbarModule"),this.data=await n["a"].find(this.$route.params.id),console.log(this.data),this.listProducts=this.data.inventory.products,this.getAccounts()},methods:{getAccounts(){l.get({_rol:[7]}).then((e=>{console.log(e.data),this.natAccounts=e.data.map((e=>(this.data.inventory.responsables.forEach((t=>{t.id==e.id&&this.group.push(e.id)})),e)))})).catch((e=>{console.log(e)}))},toggleReponsable(e){let t={_responsable:e,_inventory:this.$route.params.id};n["a"].toggleReponsable(t).then((e=>{console.log(e.data),console.log(this.group)})).catch((e=>{console.log(e)}))},selectedCat(e){console.log("Categoria Seleccionada"),console.log(e),this.listProducts=e.products.length?e.products:[]},selectedLoc(e){console.log("Ubicacion seleccionada"),console.log(e),this.listProducts=e.products.length?e.products:[]},async modeAddChanged(){switch(this.listProducts=[],this.modeAdd.value){case 1:console.log("Modo Categoria Activado!!");break;case 2:console.log("Modo Ubicacion Activado!!");break;case 3:console.log("Modo Codigo Activado!!");break}},start(){console.log("Iniciando ");let e=this.listProducts.map((e=>e.id));console.log(e);let t={_products:e,_inventory:this.data.inventory.id,settings:this.settings};console.log(t),this.$q.loading.show({message:"Aplicando Configuracion, espera..."}),n["a"].addProducts(t).then((e=>{this.nextStep()})).catch((e=>{console.log(e)}))},nextStep(e,t){let o=this.data.inventory.status,s="";console.log("Estatus Actual: "+o.id);let a=e||o.id+1;switch(a){case 2:s="Iniciando Inventario, espera...";break;case 3:s="Cerrando Inventario, esperaa..";break;case 4:s="Eliminando Inventario, espera...";break}this.$q.loading.show({message:s});let i={_inventory:this.data.inventory.id,_status:a};console.log("Cambiando status"),console.log(i),n["a"].nextStep(i).then((e=>{let t=e.data;console.log(t),this.data.inventory.status=t.order.status,this.notifyChangeState(t),this.$q.loading.hide()})).catch((e=>{console.log(e)}))},notifyChangeState(e){let t=e.order.status.id;switch(t){case 2:this.$q.notify({icon:"done",color:"positive",message:"El inventario ya puede realizarse!!",timeout:1200}),this.$q.loading.show(),setTimeout((()=>{this.$router.push("/almacen/contador/"+e.order.id),this.$q.loading.hide()}),1500);break;case 3:msgnewState="Cerrando Inventario, esperaa..";break;case 4:this.$q.notify({icon:"done",color:"positive",message:"El inventario ha sido eliminado!"}),this.$router.push("/almacen/contador");break}}},beforeDestroy(){this.$store.commit("Layout/showToolbarModule")},computed:{settings(){let e=new Object;if(this.data)switch(e.type=this.modeAdd,e.type.value){case 2:e.warehouse={id:this.warehouses.selected.id,name:this.warehouses.selected.name},e.path=this.fullpath;break;default:break}return e},fullpath(){let e="";return this.warehouses.sectModels.forEach(((t,o,s)=>{t.value&&(e+=0==o?""+t.label:"-"+t.label)})),e},auths(){return this.$store.getters["Account/moduleauths"]},profile(){return this.$store.getters["Account/profile"]},canStart(){return this.listProducts.length&&this.group.length},wrapperClass(){return this.$q.platform.is.mobile?"column":"row items-start"}}},I=Q,P=o("9989"),E=o("e359"),L=o("9c40"),R=o("f09f"),B=o("a370"),M=o("3b73"),j=o("1c1c"),O=o("66e5"),T=o("4074"),z=o("8f8e"),D=o("0016"),W=o("0170"),U=o("eaac"),J=o("bd08"),N=o("db86"),F=o("de5e"),H=o("714f"),G=Object(g["a"])(I,s,a,!1,null,null,null);t["default"]=G.exports;y()(G,"components",{QPage:P["a"],QHeader:E["a"],QBtn:L["a"],QCard:R["a"],QCardSection:B["a"],QExpansionItem:M["a"],QList:j["a"],QItem:O["a"],QItemSection:T["a"],QCheckbox:z["a"],QIcon:D["a"],QItemLabel:W["a"],QSelect:m["a"],QTable:U["a"],QTr:J["a"],QTd:N["a"],QPageSticky:F["a"]}),y()(G,"directives",{Ripple:H["a"]})},e0df:function(e,t,o){"use strict";var s=o("31b8");t["a"]={index(){return s["b"].get("inventory").then((e=>e.data)).catch((e=>{console.log(e)}))},find(e){return s["b"].get("inventory/"+e).then((e=>e.data)).catch((e=>{console.log(e)}))},create(e){return s["b"].post("inventory",e)},toggleReponsable(e){return s["b"].post("inventory/responsable",e)},addProducts(e){return s["b"].post("inventory/add",e)},nextStep(e){return s["b"].post("inventory/next",e)},rowCount(e){return s["b"].post("inventory/value",e)}}},f7cb:function(e,t,o){"use strict";var s=o("31b8");t["a"]={autocomplete(e){return s["b"].get("/product/autocomplete",e)},getMassive(e){return s["b"].post("/product/getMassive",e)},labelStates(){return s["b"].get("/product/getStatus").then((e=>e.data.status)).catch((e=>{console.log(e)}))},updateState(e){return s["b"].post("/product/updateStatus",e)},listPoducts(e){return s["b"].post("product",e)},categories(e){return s["b"].post("/product/catalog",e).then((e=>e.data.categories)).catch((e=>{console.log(e)}))},get(e){return s["b"].post("/product",e).then((e=>e.data)).catch((e=>{console.log(e)}))}}}}]);