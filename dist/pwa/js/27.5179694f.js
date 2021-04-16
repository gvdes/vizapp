(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{c738:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-header",{staticClass:"bg-darkl1 q-py-sm",attrs:{elevated:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{flat:"",icon:"fas fa-chevron-left",color:"white"},on:{click:function(e){return t.$router.push("/almacen/contador")}}})],1),a("div",{staticClass:"text-center col"},[a("span",[t._v("INVENTARIO "+t._s(this.$route.params.id))]),a("span",{staticClass:"text-grey"},[t._v(" Configuración")])]),a("div",{staticClass:"col text-right q-pr-sm"},[!t.ismobile&&t.data?[t.trydiscard?t._e():a("q-btn",{attrs:{flat:"","no-caps":"",color:"pink-13",icon:"inventory_2"},on:{click:function(e){t.trydiscard=!0}}}),t.trydiscard?[a("q-btn",{attrs:{"no-caps":"",flat:"",rounded:"",color:"pink-13",icon:"inventory",label:"Archivar Inventario!!"},on:{click:function(e){return t.nextStep(4)}}}),a("q-btn",{attrs:{"no-caps":"",unelevated:"",rounded:"",color:"primary",icon:"close ",label:"Cancelar"},on:{click:function(e){t.trydiscard=!1}}})]:t._e(),1==t.data.inventory.status.id&&t.canStart&&!t.trydiscard?[a("transition",{attrs:{appear:"","enter-active-class":"animated rubberBand slower","leave-active-class":"animated zoomOut"}},[a("q-btn",{attrs:{flat:"","no-caps":"",color:"green-13",icon:"fas fa-play-circle"},on:{click:t.start}})],1)]:t._e(),2!=t.data.inventory.status.id||t.trydiscard?t._e():[a("q-btn",{attrs:{rounded:"",flat:"",color:"green-13",icon:"launch"},on:{click:function(e){return t.$router.push("contador/"+t.inv.id)}}})]]:t._e()],2)])]),t.data?[a("q-card",{staticClass:"q-mt-xs bg-darkl1 exo"},[a("q-card-section",[t._v("\n                Creacion: "+t._s(t.data.inventory.created_at)),a("br"),t._v("\n                Administrador: "+t._s(t.data.inventory.created_by.names)+" "+t._s(t.data.inventory.created_by.surname_pat)+" [ "+t._s(t.data.inventory.created_by.nick)+" ]"),a("br")])],1),a("div",{class:t.wrapperClass+" q-pt-md q-mb-xl q-gutter-md"},[a("q-card",{staticClass:"col bg-darkl1 exo"},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"fas fa-users",label:"Responsables",caption:t.group.length.toString(),"header-class":"text-grey-5"},model:{value:t.expands.team,callback:function(e){t.$set(t.expands,"team",e)},expression:"expands.team"}},[a("q-card-section",[a("q-list",t._l(t.natAccounts,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-checkbox",{attrs:{disable:1!=t.data.inventory.status.id,dark:"",val:e.id,color:"green-13"},on:{input:function(a){return t.toggleReponsable(e.id)}},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),a("q-item-section",[a("q-item-label",[a("span",{staticClass:"text-grey-6"},[t._v(t._s(e.names+" "+e.surname_pat))]),a("br"),t._v("\n                                        [ "+t._s(e.nick.toLowerCase())+" ]\n                                    ")])],1)],1)})),1)],1)],1)],1),1==t.data.inventory.status.id?a("q-card",{staticClass:"col bg-darkl1 exo"},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"fab fa-searchengin",label:"Seleccion de productos","header-class":"text-grey-5"},model:{value:t.expands.seeker,callback:function(e){t.$set(t.expands,"seeker",e)},expression:"expands.seeker"}},[a("q-card-section",[a("div",{staticClass:"row items-start"},[1==t.data.inventory.status.id?a("div",{staticClass:"col"},[a("q-select",{attrs:{dark:"",dense:"",flat:"",color:"green-13",label:"Agregar por...","stack-label":"",options:t.optsAddProds},on:{input:t.modeAddChanged},model:{value:t.modeAdd,callback:function(e){t.modeAdd=e},expression:"modeAdd"}})],1):t._e()])]),t.modeAdd?a("q-card-section",[1==t.modeAdd.value?a("CategoriesBrowser",{on:{selectedCat:t.selectedCat}}):t._e(),2==t.modeAdd.value?a("WarehousesBrowser",{on:{selectedLoc:t.selectedLoc}}):t._e(),3==t.modeAdd.value?a("div",[a("ProductAutocomplete")],1):t._e()],1):t._e(),a("q-card-section",{staticStyle:{"max-width":"100%"}},[a("q-table",{attrs:{dark:"",flat:"","card-class":"bg-none",data:t.listSeekers,columns:t.tableSeekers.columns,"visible-columns":t.tableSeekers.visibleColumns},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"id",attrs:{props:e}},[t._v(t._s(e.row.id))]),a("q-td",{key:"code",attrs:{props:e}},[t._v(t._s(e.row.code))]),a("q-td",{key:"description",staticClass:"text--2",attrs:{props:e}},[t._v(t._s(e.row.description))]),a("q-td",{key:"locations",attrs:{props:e}},[e.row.locations.length?a("span",[a("span",{staticClass:"text-light-blue text-bold"},[t._v("[ "+t._s(e.row.locations.length)+" ]")]),t._v("\n                                            "+t._s(e.row.locations.map((function(t){return t.path})).join(", "))+"\n                                        ")]):t._e()])],1)]}}],null,!1,1959157716)})],1),t.listSeekers.length?a("div",{staticClass:"row"},[a("q-btn",{staticClass:"col q-pa-sm",attrs:{flat:"",label:"Limpiar",color:"amber-13","no-caps":""}}),a("q-btn",{staticClass:"col q-pa-sm",attrs:{flat:"",label:"Agregar a la Lista",color:"green-13","no-caps":""},on:{click:t.dragProducts}})],1):t._e()],1)],1):t._e(),a("q-card",{staticClass:"col bg-darkl1 exo"},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"list_alt",label:"Productos","header-class":"text-grey-5"},model:{value:t.expands.products,callback:function(e){t.$set(t.expands,"products",e)},expression:"expands.products"}},[a("q-card-section",[a("q-table",{attrs:{dark:"",flat:"","card-class":"bg-none",data:t.listProducts,columns:t.tableProducts.columns,"visible-columns":t.tableProducts.visibleColumns},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"id",attrs:{props:e}},[t._v(t._s(e.row.id))]),a("q-td",{key:"code",attrs:{props:e}},[t._v(t._s(e.row.code))]),a("q-td",{key:"description",staticClass:"text--2",attrs:{props:e}},[t._v(t._s(e.row.description))]),a("q-td",{key:"locations",attrs:{props:e}},[e.row.locations.length?a("span",[a("span",{staticClass:"text-green-13 text-bold"},[t._v("[ "+t._s(e.row.locations.length)+" ]")]),t._v("\n                                            "+t._s(e.row.locations.map((function(t){return t.path})).join(", "))+"\n                                        ")]):t._e()])],1)]}}],null,!1,2805601837)})],1),t.listProducts.length&&1==t.data.inventory.status.id?a("div",{staticClass:"row"},[a("q-btn",{staticClass:"col q-pa-sm",attrs:{flat:"",label:"Limpiar",color:"amber-13","no-caps":""},on:{click:t.clearAddeds}})],1):t._e()],1)],1)],1)]:t._e(),t.ismobile?a("q-footer",{staticClass:"bg-darkl1",attrs:{elevated:""}},[a("div",{staticClass:"q-pa-sm row items-center justify-between"},[t.trydiscard?t._e():a("q-btn",{attrs:{flat:"","no-caps":"",color:"pink-13",icon:"inventory_2"},on:{click:function(e){t.trydiscard=!0}}}),t.trydiscard?[a("q-btn",{attrs:{"no-caps":"",unelevated:"",rounded:"",color:"primary",icon:"close ",label:"Cancelar"},on:{click:function(e){t.trydiscard=!1}}}),a("q-btn",{attrs:{"no-caps":"",flat:"",rounded:"",color:"pink-13",icon:"inventory",label:"Archivar Inventario!!"},on:{click:function(e){return t.nextStep(4)}}})]:t._e(),1==t.data.inventory.status.id&&t.canStart&&!t.trydiscard?[a("transition",{attrs:{appear:"","enter-active-class":"animated rubberBand slower","leave-active-class":"animated zoomOut"}},[a("q-btn",{attrs:{flat:"","no-caps":"",color:"green-13",icon:"fas fa-play-circle"},on:{click:t.start}})],1)]:t._e(),2!=t.data.inventory.status.id||t.trydiscard?t._e():[a("q-btn",{attrs:{rounded:"",flat:"",color:"green-13",icon:"launch"},on:{click:function(e){return t.$router.push("contador/"+t.inv.id)}}})]],2)]):t._e()],2)},o=[],n=(a("e01a"),a("e6cf"),a("e0df")),r=a("31b8"),i={join(t){return r["b"].get("/workpoint/join")},get(t){return r["b"].post("account/users",t)}},l=a("b293"),c=a("7908"),d=a("a647"),u={components:{ProductAutocomplete:l["a"],CategoriesBrowser:c["a"],WarehousesBrowser:d["a"]},data(){return{data:null,natAccounts:null,trydiscard:!1,group:[],optsAddProds:[{label:"Categoria",value:1,disable:!0},{label:"Ubicacion",value:2,disabled:!1},{label:"Individual",value:3,disable:!0}],modeAdd:null,listProducts:[],tableProducts:{columns:[{name:"id",align:"left",label:"ID",field:t=>t.id,sortable:!0},{name:"code",align:"left",label:"Codigo",field:t=>t.code,sortable:!0},{name:"description",align:"left",label:"Descripcion",field:t=>t.description},{name:"locations",align:"center",label:"Ubicaciones",field:t=>t.locations.length,sortable:!0}],visibleColumns:["code","locations"]},listSeekers:[],tableSeekers:{columns:[{name:"id",align:"left",label:"ID",field:t=>t.id,sortable:!0},{name:"code",align:"left",label:"Codigo",field:t=>t.code,sortable:!0},{name:"description",align:"left",label:"Descripcion",field:t=>t.description},{name:"locations",align:"center",label:"Ubicaciones",field:t=>t.locations.length,sortable:!0}],visibleColumns:["code","locations"]},expands:{team:!0,seeker:!0,products:!0},settings:new Object}},async beforeMount(){this.$store.commit("Layout/hideToolbarModule"),this.data=await n["a"].find(this.$route.params.id),console.log(this.data),this.listProducts=this.data.inventory.products,this.getAccounts()},methods:{getAccounts(){i.get({_rol:[7]}).then((t=>{console.log(t.data),this.natAccounts=t.data.map((t=>(this.data.inventory.responsables.forEach((e=>{e.id==t.id&&this.group.push(t.id)})),t)))})).catch((t=>{console.log(t)}))},toggleReponsable(t){let e={_responsable:t,_inventory:this.$route.params.id};n["a"].toggleReponsable(e).then((t=>{console.log(t.data),console.log(this.group)})).catch((t=>{console.log(t)}))},selectedCat(t){console.log("Categoria Seleccionada"),this.settings.category=t.category,this.listSeekers=t.products.length?t.products:[],console.log(this.settings)},selectedLoc(t){console.log("Ubicacion seleccionada"),this.settings.warehouse=t.warehouse,this.settings.section=t.section?t.section.model.value:null,this.listSeekers=t.products.length?t.products:[]},async modeAddChanged(){this.settings=new Object,this.listSeekers=[],this.settings.addmode=this.modeAdd.value},dragProducts(){console.log("Arrastrando porductos!!"),this.listSeekers.forEach((t=>{this.listProducts.findIndex((e=>e.id==t.id))<0&&this.listProducts.unshift(t)}))},clearAddeds(){this.listProducts=[]},start(){console.log("Iniciando ");let t=this.listProducts.map((t=>t.id)),e={_products:t,_inventory:this.data.inventory.id,settings:this.settings};this.$q.loading.show({message:"Aplicando configuracion, porfavor espera..."}),n["a"].addProducts(e).then((t=>{this.nextStep()})).catch((t=>{console.log(t)}))},nextStep(t,e){let a=this.data.inventory.status,s="";console.log("Estatus Actual: "+a.id);let o=t||a.id+1;switch(o){case 2:s="Iniciando Inventario, espera...";break;case 3:s="Cerrando Inventario, esperaa..";break;case 4:s="Eliminando Inventario, espera...";break}this.$q.loading.show({message:s});let r={_inventory:this.data.inventory.id,_status:o};console.log("Cambiando status"),console.log(r),n["a"].nextStep(r).then((t=>{let e=t.data;console.log(e),this.data.inventory.status=e.order.status,this.notifyChangeState(e),this.$q.loading.hide()})).catch((t=>{console.log(t)}))},notifyChangeState(t){let e=t.order.status.id;switch(e){case 2:this.$q.notify({icon:"done",color:"positive",timeout:1200,message:"El inventario ya puede realizarse!!"}),this.$q.loading.show(),this.$router.push("/almacen/contador/"+t.order.id),this.$q.loading.hide();break;case 3:msgnewState="Cerrando Inventario, esperaa..";break;case 4:this.$q.notify({icon:"done",color:"positive",message:"El inventario ha sido eliminado!"}),this.$router.push("/almacen/contador");break}}},beforeDestroy(){this.$store.commit("Layout/showToolbarModule"),localStorage.removeItem("statelocator")},computed:{fullpath(){let t="";return this.warehouses.sectModels.forEach(((e,a,s)=>{e.value&&(t+=0==a?`${e.label}`:`-${e.label}`)})),t},ismobile(){return this.$q.platform.is.mobile},auths(){return this.$store.getters["Account/moduleauths"]},profile(){return this.$store.getters["Account/profile"]},canStart(){return this.listProducts.length&&this.group.length},wrapperClass(){return this.$q.platform.is.mobile?"column":"row items-start"}}},p=u,b=a("2877"),g=a("9989"),m=a("e359"),h=a("9c40"),v=a("f09f"),f=a("a370"),y=a("3b73"),_=a("1c1c"),k=a("66e5"),q=a("4074"),C=a("8f8e"),w=a("0016"),x=a("0170"),A=a("ddd8"),S=a("eaac"),$=a("bd08"),P=a("db86"),I=a("7ff0"),Q=a("714f"),L=a("eebe"),E=a.n(L),j=Object(b["a"])(p,s,o,!1,null,null,null);e["default"]=j.exports;E()(j,"components",{QPage:g["a"],QHeader:m["a"],QBtn:h["a"],QCard:v["a"],QCardSection:f["a"],QExpansionItem:y["a"],QList:_["a"],QItem:k["a"],QItemSection:q["a"],QCheckbox:C["a"],QIcon:w["a"],QItemLabel:x["a"],QSelect:A["a"],QTable:S["a"],QTr:$["a"],QTd:P["a"],QFooter:I["a"]}),E()(j,"directives",{Ripple:Q["a"]})}}]);