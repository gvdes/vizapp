(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"0c4f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("q-header",{staticClass:"bg-darkl1 text-grey-5",attrs:{elevated:""}},[e("div",{staticClass:"q-pa-sm row items-center"},[e("q-btn",{attrs:{dense:"",icon:"arrow_back_ios",flat:""},on:{click:function(e){return t.$router.push("/almacen")}}}),e("q-breadcrumbs",{staticClass:"text-green-13",attrs:{separator:"","active-color":"grey-4"}},[e("q-breadcrumbs-el",{staticClass:"cursor-pointer",attrs:{label:`Almacen ${this.$route.query.name}`},on:{click:function(e){return t.navAtSection("home")}}}),t._l(t.path,(function(a){return e("q-breadcrumbs-el",{key:a.id,staticClass:"cursor-pointer",attrs:{label:a.alias,icon:"navigate_next"},on:{click:function(e){return t.navAtSection("section",a)}}})}))],2)],1),e("q-separator"),e("q-card",{staticClass:"bg-none",attrs:{flat:""}},[e("q-tabs",{staticClass:"text-grey",attrs:{dark:"","active-color":"green-13"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("q-tab",{attrs:{name:"structure","no-caps":"",icon:"account_tree",label:"Estructura"}}),e("q-tab",{attrs:{name:"content","no-caps":"",icon:"category",label:"Productos"}}),e("q-tab",{attrs:{name:"config","no-caps":"",icon:"settings",label:"Configuracion"}})],1)],1)],1),e("q-card",{staticClass:"q-mb-xl q-pb-xl bg-none",attrs:{flat:""}},[e("q-tab-panels",{staticClass:"q-mt-sm bg-none no-shadow",attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("q-tab-panel",{staticClass:"q-pa-none no-shadow",attrs:{name:"structure"}},[t.sections?e("div",[t.sections.length?t._l(t.sections,(function(a){return e("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.id,staticClass:"bg-darkl1 q-mb-md",on:{click:function(e){return t.putSections(a)}}},[e("q-card-section",[e("div",{staticClass:"row items-center justify-center"},[e("div",{staticClass:"col"},[t._v(t._s(a.name)+" "),e("span",{staticClass:"text-grey-6"},[t._v("["+t._s(a.path)+"]")])]),e("div",[e("q-btn",{attrs:{flat:"",round:"",color:"light-blue-13",icon:"chevron_right"}})],1)])])],1)})):[e("div",{staticClass:"text-center text-grey-7 q-pa-xl"},[e("q-icon",{attrs:{name:"fas fa-mug-hot",size:"80px"}}),e("div",{staticClass:"q-pa-md"},[t._v("Nada por aqui")])],1)]],2):t._e()]),e("q-tab-panel",{attrs:{name:"content"}},[t.loadingprods?void 0:[e("q-table",{attrs:{dark:"",data:t.tableProducts.items,columns:t.tableProducts.columns,"row-key":"id"}})]],2),e("q-tab-panel",{attrs:{name:"config"}},[t.inSection?[e("div",{staticClass:"column q-gutter-md"},[e("div",{staticClass:"text-h6 text-light-blue-13"},[t._v(t._s(t.dataSection.name)+" ["+t._s(t.dataSection.path)+"]")]),e("q-card",{staticClass:"bg-darkl1"},[e("q-card-section",[e("q-icon",{attrs:{name:"edit",size:"md"}}),t._v(" Cambiar datos\n                                ")],1),e("q-separator"),e("q-form",[e("q-card-section",[e("div",{staticClass:"row q-gutter-md"},[e("q-input",{staticClass:"col",attrs:{color:"green-13",dark:"",value:t.dataSection.name,label:"Nombre"},model:{value:t.formEdit.name.new,callback:function(e){t.$set(t.formEdit.name,"new",e)},expression:"formEdit.name.new"}}),e("q-input",{staticClass:"col",attrs:{color:"green-13",dark:"",value:t.dataSection.alias,label:"Alias"},model:{value:t.formEdit.alias.new,callback:function(e){t.$set(t.formEdit.alias,"new",e)},expression:"formEdit.alias.new"}}),t.wasModified?e("q-btn",{attrs:{flat:"",icon:"done",rounded:"",color:"green-13","no-caps":""}}):t._e()],1)])],1)],1),e("q-card",{staticClass:"bg-darkl1"},[e("div",{staticClass:"ds"},[e("q-card-section",[e("q-icon",{attrs:{name:"warning",size:"md",color:"amber-13"}}),t._v(" Zona de Riesgo!\n                                    ")],1),e("q-separator"),e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{staticClass:"bg-darkl0",attrs:{color:"red-13",flat:"",label:"Eliminar "+t.dataSection.path,"no-caps":""},on:{click:function(e){return t.activeZoneRisk("del")}}}),e("q-btn",{staticClass:"bg-darkl0",attrs:{color:"red-13",flat:"",label:"Vaciar "+t.dataSection.path,"no-caps":""},on:{click:function(e){return t.activeZoneRisk("drop")}}})],1)],1)])],1)]:void 0],2)],1)],1),e("q-dialog",{attrs:{position:"bottom",persistent:t.wndAddSection.persistent},model:{value:t.wndAddSection.state,callback:function(e){t.$set(t.wndAddSection,"state",e)},expression:"wndAddSection.state"}},[e("q-card",{staticClass:"bg-darkl1 exo text-grey-6"},[e("q-card-section",[t._v("Nueva Seccion en "+t._s(t.humanpath))]),e("q-separator"),e("q-form",{on:{submit:t.saveSection}},[e("q-card-section",[e("div",{staticClass:"row items-center q-gutter-sm"},[e("q-input",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Nombre",autocorrect:"off",autocapitalize:"none",autofocus:""},model:{value:t.wndAddSection.name,callback:function(e){t.$set(t.wndAddSection,"name",e)},expression:"wndAddSection.name"}}),e("q-input",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"Alias"},model:{value:t.wndAddSection.alias,callback:function(e){t.$set(t.wndAddSection,"alias",e)},expression:"wndAddSection.alias"}}),e("q-input",{staticClass:"col-2",attrs:{dark:"",color:"green-13",label:"Elementos",type:"number",min:"1"},model:{value:t.wndAddSection.elements,callback:function(e){t.$set(t.wndAddSection,"elements",e)},expression:"wndAddSection.elements"}})],1)]),e("q-card-section",[e("div",{staticClass:"row justify-around items-center"},[e("q-radio",{attrs:{size:"xs",dark:"",color:"amber-13",val:!1,label:"NO usar secuencia"},model:{value:t.wndAddSection.autoinc,callback:function(e){t.$set(t.wndAddSection,"autoinc",e)},expression:"wndAddSection.autoinc"}}),e("q-radio",{attrs:{size:"xs",dark:"",color:"green-13",val:!0,label:"Usar secuencia"},model:{value:t.wndAddSection.autoinc,callback:function(e){t.$set(t.wndAddSection,"autoinc",e)},expression:"wndAddSection.autoinc"}})],1)]),t.canSaveSection?e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{type:"submit",flat:"",rounded:"",color:"green-13",loading:t.wndAddSection.creating,disable:t.wndAddSection.creating,icon:"done",label:t.wndAddSection.creating?"espera...":"Crear","no-caps":""}})],1):t._e()],1),e("q-inner-loading",{attrs:{dark:"",showing:t.wndAddSection.creating}},[e("q-spinner-gears",{attrs:{size:"50px",color:"white"}})],1)],1)],1),e("q-dialog",{attrs:{persistent:t.wndZoneRisk.persistent},model:{value:t.wndZoneRisk.state,callback:function(e){t.$set(t.wndZoneRisk,"state",e)},expression:"wndZoneRisk.state"}},[t.wndZoneRisk.option?["del"==t.wndZoneRisk.option?e("q-card",{staticClass:"bg-dark text-grey exo"},[e("q-card-section",[e("div",{staticClass:"text-h6 text-amber-13"},[e("q-icon",{attrs:{name:"warning"}}),t._v(" Estas por eliminar una seccion\n                        ")],1)]),e("q-card-section",[t._v("\n                        Esta opcion eliminara la seccion "),e("span",{staticClass:"text-amber-13"},[t._v(t._s(t.humanpath))]),t._v(" y las ubicaciones de los productos dentro de está (asi como las secciones y ubicaciones que está contenga)."),e("br"),t._v(" ¿Quieres confirmar esta operacion?\n                    ")]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{label:"Si, eliminar seccion",color:"negative",disable:t.wndZoneRisk.dis,loading:t.wndZoneRisk.load},on:{click:t.execRisk}})],1)],1):t._e(),"drop"==t.wndZoneRisk.option?e("q-card",{staticClass:"bg-dark text-grey exo"},[e("q-card-section",[e("div",{staticClass:"text-h6 text-amber-13"},[e("q-icon",{attrs:{name:"warning"}}),t._v(" Estas por Vaciar una seccion\n                        ")],1)]),e("q-card-section",[t._v("\n                        Esta opcion eliminara la ubicacion de los productos que se encuentren en "),e("span",{staticClass:"text-amber-13"},[t._v(t._s(t.humanpath))]),t._v("."),e("br"),t._v(" ¿Quieres confirmar esta operacion?\n                    ")]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{label:"Si, vaciar seccion",color:"negative",disable:t.wndZoneRisk.dis,loading:t.wndZoneRisk.load},on:{click:t.execRisk}})],1)],1):t._e()]:t._e()],2),e("q-footer",{staticClass:"bg-darkl1 q-px-md",attrs:{elevated:""}},[e("q-tab-panels",{staticClass:"bg-none no-shadow",attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("q-tab-panel",{staticClass:"bg-none q-pa-sm no-shadow",attrs:{name:"structure"}},[e("div",{staticClass:"row justify-around"},[t.path.length?e("q-btn",{attrs:{stack:"",color:"green-13",rounded:"",flat:"",icon:"chevron_left",label:"Atras","no-caps":""},on:{click:function(e){return t.navAtSection()}}}):t._e(),e("q-btn",{attrs:{stack:"",color:"green-13",rounded:"",flat:"",icon:"add",label:"Agregar Seccion","no-caps":""},on:{click:t.openAddSection}})],1)])],1)],1)],1)},s=[],i=a("1d6c"),o=a("5ed6"),c=a("f7cb"),l={name:"PageIndex",data(){return{tab:"structure",sections:null,path:[],wndAddSection:{state:!1,name:null,alias:null,elements:1,autoinc:void 0,creating:!1,persistent:!1},wndZoneRisk:{state:!1,option:null,persistent:!1,dis:!1,load:!1},formEdit:{name:{new:null,current:null},alias:{new:null,current:null}},tableProducts:{columns:[{name:"id",align:"left",label:"ID",field:t=>t.id,sortable:!0},{name:"code",align:"left",label:"Codigo",field:t=>t.code,sortable:!0},{name:"description",align:"left",label:"Descripcion",field:t=>t.description},{name:"locations",align:"center",label:"Ubicaciones",field:t=>t.locations.length,sortable:!0}],items:[]},paramsprods:{autocomplete:null,paginate:null,_category:null,_location:null,check_stock:null,with_stock:null,_status:null,with_locations:!0,with_prices:null},loadingprods:!1}},components:{ToolbarAccount:i["a"]},async beforeMount(){this.$store.commit("Layout/hideToolbarModule"),console.log(this.path),this.putSections()},beforeDestroy(){this.$store.commit("Layout/showToolbarModule")},methods:{cleanZoneRisk(){this.wndZoneRisk.state=!1,this.wndZoneRisk.option=null,this.wndZoneRisk.dis=!1,this.wndZoneRisk.load=!1,this.wndZoneRisk.persistent=!1},activeZoneRisk(t){this.wndZoneRisk.state=!0,this.wndZoneRisk.option=t},async execRisk(){this.wndZoneRisk.dis=!0,this.wndZoneRisk.load=!0,this.wndZoneRisk.persistent=!0;let t=this.path[this.path.length-1];console.log(t);let e={_section:t.id};switch(console.log(e),this.wndZoneRisk.option){case"drop":console.log("%cVaciando Seccion...","color:gold;");let t=await o["a"].sectionRemove(e);this.cleanZoneRisk(),console.log(t.data),t.data.res&&this.$q.notify({color:"positive",icon:"done",message:"Las ubicaciones han sido eliminadas!"});break;case"del":console.log("%cEliminando Seccion...","color:gold;");let a=await o["a"].sectionDelete(e);console.log(a.data),this.cleanZoneRisk(),this.navAtSection(),this.tab="structure",a.data.success&&this.$q.notify({color:"positive",icon:"done",message:"Seccion eliminada!"});break}},async putSections(t=null){console.log(t),this.$q.loading.show();let e=t?{params:{_section:t.id,products:!1}}:{params:{_celler:this.$route.params.idwrh,products:!1}};console.log("%cCargando secciones...","color:orange;font-size:2em;");let a=await o["a"].sections(e);this.sections=t?a.sections:a,t?this.path.push(t):this.path=[],console.log("%cSecciones Listas!!","color:green;font-size:2em;"),this.$q.loading.hide(),t&&(console.log("%cCargando productos de la seccion...","color:gold;font-size:2em;"),this.paramsprods._location=t.id,this.tableProducts.items=await c["a"].get(this.paramsprods),console.log("%cProductos Listos!!","color:green;font-size:2em;"))},async navAtSection(t,e=null){switch(console.log("%c------------ Browsing --------------","color:gold;"),t){case"home":console.log("Hacia el home"),this.path.length&&this.putSections();break;case"section":let t=this.path.findIndex((t=>t.id==e.id));if(this.path.length-1!=t){let e=this.path[t];console.log("Hacia "+e.name),this.path.splice(t),console.log(`Hacia ${e.alias} (${e.id}::${e.path})`),this.putSections(e)}break;default:if(this.path.length>1){this.path.pop();let t=this.path[this.path.length-1],e=this.path.findIndex((e=>e.id==t.id));console.log("Hacia atras (a "+t.name+")"),this.path.splice(e),this.putSections(t)}else console.log("Hacia atras (al home)"),this.putSections();break}},openAddSection(){this.wndAddSection.state=!0},saveSection(){this.wndAddSection.creating=!0,this.wndAddSection.persistent=!0,console.log("Creando seccion");let t={name:this.wndAddSection.name,alias:this.wndAddSection.alias.toUpperCase(),items:this.wndAddSection.elements,root:null,details:null,_celler:null,autoincrement:this.wndAddSection.autoinc};this.inSection?(t._celler=null,t.root=this.path[this.path.length-1].id):(t._celler=this.$route.params.idwrh,t.root=null),console.log(t),o["a"].addSections(t).then((t=>{let e=t.data.celler;console.log(e),e.forEach((t=>{this.sections.unshift(t)})),this.wndAddSection.creating=!1,this.wndAddSection.persistent=!1,this.wndAddSection.state=!1})).catch((t=>{this.wndAddSection.creating=!1,this.wndAddSection.persistent=!1,console.log(t),alert(t)}))}},computed:{humanpath(){let t=`Almacen ${this.$route.query.name}`;return this.path.length&&(t+=", ",t+=this.path.map((t=>t.name)).join(", ")),t},canSaveSection(){let t=0,e=3;return this.wndAddSection.name&&this.wndAddSection.name.length>2?t++:t--,this.wndAddSection.alias&&this.wndAddSection.alias.length>=1&&this.wndAddSection.alias.length<=4?t++:t--,void 0!=this.wndAddSection.autoinc?t++:t--,t==e},inSection(){return!!this.path.length},screen(){return this.$q.screen},dataSection(){if(this.inSection){let t=this.path.length-1,e=this.path[t];return this.formEdit.name.new=e.name,this.formEdit.name.current=e.name,this.formEdit.alias.new=e.alias,this.formEdit.alias.current=e.alias,e}return"Pintar datos del almacen para editarlo"},wasModified(){return this.formEdit.name.new!=this.formEdit.name.current||this.formEdit.alias.new!=this.formEdit.alias.current}}},r=l,d=a("2877"),u=a("9989"),h=a("e359"),p=a("9c40"),m=a("ead5"),b=a("079e"),g=a("eb85"),w=a("f09f"),f=a("429b"),q=a("7460"),k=a("adad"),S=a("823b"),v=a("a370"),A=a("0016"),_=a("eaac"),C=a("0378"),x=a("27f9"),R=a("4b7e"),y=a("24e8"),Z=a("3786"),$=a("74f7"),E=a("cf57"),Q=a("7ff0"),z=a("714f"),P=a("eebe"),T=a.n(P),I=Object(d["a"])(r,n,s,!1,null,null,null);e["default"]=I.exports;T()(I,"components",{QPage:u["a"],QHeader:h["a"],QBtn:p["a"],QBreadcrumbs:m["a"],QBreadcrumbsEl:b["a"],QSeparator:g["a"],QCard:w["a"],QTabs:f["a"],QTab:q["a"],QTabPanels:k["a"],QTabPanel:S["a"],QCardSection:v["a"],QIcon:A["a"],QTable:_["a"],QForm:C["a"],QInput:x["a"],QCardActions:R["a"],QDialog:y["a"],QRadio:Z["a"],QInnerLoading:$["a"],QSpinnerGears:E["a"],QFooter:Q["a"]}),T()(I,"directives",{Ripple:z["a"]})}}]);