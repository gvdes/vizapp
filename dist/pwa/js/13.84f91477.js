(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"047b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-header",{staticClass:"bg-darktransl0 text-grey-5 q-pa-sm"},[s("q-card",{staticClass:"bg-darkl1"},[s("toolbar-account",{attrs:{title:"Consulta de existencias"}}),t.rootcatwork?s("div",{staticClass:"row q-px-md q-pb-sm"},[s("div",{staticClass:"col"},[s("q-breadcrumbs",{staticClass:"text-green-13",attrs:{"active-color":"grey-3"},scopedSlots:t._u([{key:"separator",fn:function(){return[s("q-icon",{attrs:{size:".8em",name:"chevron_right",color:"green-13"}})]},proxy:!0}],null,!1,1133905327)},[s("q-breadcrumbs-el",{attrs:{label:t.rootcatwork.label}}),t._l(t.breadcrums,(function(t,e){return s("q-breadcrumbs-el",{key:e,attrs:{label:t}})}))],2)],1)]):t._e(),t.subcats.length?s("div",{staticClass:"q-pa-sm row justify-end items-center"},[t._v("\n                    "+t._s(t.totalproducts.length)+" de "+t._s(t.totalproducts.length)+" "),t.totalproducts.length?s("q-btn",{attrs:{rounded:"",size:"xs",icon:"fas fa-magic",loading:t.stocking,disable:t.stocking},on:{click:t.getStock}}):t._e()],1):t._e()],1)],1),s("q-drawer",{attrs:{side:"left","show-if-above":"","content-class":"bg-darkl0"},model:{value:t.leftdrawer,callback:function(e){t.leftdrawer=e},expression:"leftdrawer"}},[s("div",{staticClass:"q-pa-sm"},[s("q-card",{staticClass:"bg-darkl1 q-pa-sm"},[s("div",[t._v("Familia")]),s("q-select",{attrs:{dark:"",color:"green-13",dense:"",options:t.select_rootcat,loading:t.loadrootcats,disable:t.loadrootcats,"popup-content-style":"max-height:270px;"},on:{input:t.freshCats},model:{value:t.rootcatwork,callback:function(e){t.rootcatwork=e},expression:"rootcatwork"}}),t._l(t.subcats,(function(e,a){return s("div",{key:a,staticClass:"row"},[s("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",label:"seleccione",options:e.options,"popup-content-style":"max-height:270px;"},on:{input:function(e){return t.appendCats(a)}},model:{value:e.model,callback:function(s){t.$set(e,"model",s)},expression:"subcat.model"}})],1)})),t.loadingsubcats?s("div",{staticClass:"text-center q-pt-md"},[s("q-spinner-grid",{attrs:{color:"green-13"}})],1):t._e()],2)],1),s("div",{staticClass:"text-right"},[s("q-scroll-area",{staticStyle:{height:"350px",width:"100%"}},t._l(t.filtersAvs,(function(e,a){return s("div",{key:a,staticClass:"q-pa-sm"},[s("q-select",{staticClass:"shadow-2",attrs:{multiple:"",dark:"",color:"green-13",filled:"",options:e.options,label:e.label,"popup-content-style":"max-height:270px;"},model:{value:t.selectedfilters[e.idxattr].model,callback:function(s){t.$set(t.selectedfilters[e.idxattr],"model",s)},expression:"selectedfilters[filt.idxattr].model"}})],1)})),0),s("div",{staticClass:"q-pa-md"},[t.catwork?s("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",icon:"arrow_forward",color:"green-13",disabled:t.filtering,loading:t.filtering},on:{click:t.applyFilters}}):t._e()],1)],1)]),s("div",[s("q-table",{attrs:{dense:"",data:t.totalproducts,"row-key":"id",selection:"multiple",filter:t.filtrator,pagination:t.initpagination,grid:"","hide-header":"",dark:""},scopedSlots:t._u([t.totalproducts.length?{key:"top-right",fn:function(){return[s("q-input",{attrs:{dark:"",borderless:"",dense:"",debounce:"300",placeholder:"Buscar"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,4009527860),model:{value:t.filtrator,callback:function(e){t.filtrator=e},expression:"filtrator"}})]},proxy:!0}:null,{key:"item",fn:function(e){return[s("div",{staticClass:"q-pa-xs col-6 grid-style-transition"},[s("q-card",{staticClass:"bg-darkl1"},[s("div",{staticClass:"q-pa-sm text-white"},[t._v(t._s(e.row.code))]),s("div",{staticClass:"descript q-px-sm"},[t._v(t._s(e.row.description))]),e.row.showstocks.show?s("div",{staticClass:"q-pa-sm"},[2==e.row.showstocks.state?s("div",{staticClass:"text-center"},[s("q-spinner-dots",{attrs:{color:"green-13"}})],1):t._e(),3==e.row.showstocks.state?s("div",t._l(e.row.stockStores,(function(e,a){return s("div",{key:a},[t._v("\n                                        "+t._s(e.workpoint)+" "),s("span",{class:e.stock>0?"text-green-13":"text-negative"},[t._v(t._s(e.stock))])])})),0):t._e()]):t._e()])],1)]}},{key:"bottom",fn:function(e){return[s("q-page-sticky",{attrs:{position:"bottom",offset:[0,5]}},[s("q-btn-group",{staticClass:"bg-darkl1",attrs:{rounded:""}},[e.pagesNumber>2?s("q-btn",{attrs:{icon:"first_page",color:"green-13",round:"",dense:"",flat:"",disable:e.isFirstPage},on:{click:e.firstPage}}):t._e(),s("q-btn",{attrs:{icon:"chevron_left",color:"green-13",round:"",dense:"",flat:"",disable:e.isFirstPage},on:{click:e.prevPage}}),s("div",{staticClass:"text-center descript2 q-pa-xs"},[s("div",[t._v("PPP: "+t._s(e.pagination.rowsPerPage))]),s("div",[t._v("Pagina: "+t._s(e.pagination.page)+" de "+t._s(e.pagesNumber))])]),s("q-btn",{attrs:{icon:"chevron_right",color:"green-13",round:"",dense:"",flat:"",disable:e.isLastPage},on:{click:e.nextPage}}),e.pagesNumber>2?s("q-btn",{attrs:{icon:"last_page",color:"green-13",round:"",dense:"",flat:""},on:{click:e.lastPage}}):t._e()],1)],1)]}}],null,!0)})],1),s("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,5]},on:{click:function(e){t.leftdrawer=!0}}},[s("q-btn",{staticClass:"bg-darkl1 shadow-1",attrs:{rounded:"",flat:"",icon:"filter_alt",color:"green-13"}})],1)],1)},o=[],r=(s("a434"),s("e6cf"),s("5ed6")),l=s("1d6c"),i={components:{ToolbarAccount:l["a"]},async beforeMount(){console.log("traiendo datos..");let t=await r["a"].existencesIndex(null);this.rootcats=t.categories,this.loadrootcats=!1},data(){return{initpagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:50},filtrator:"",loadrootcats:!0,initstock:!1,rootcats:[],rootcatwork:void 0,subcats:[],catwork:void 0,totalproducts:[],leftdrawer:!0,filters:[],selectedfilters:[],stocking:!1,filtering:!1,loadingsubcats:!1}},methods:{changed(){console.log("Ha cambiado")},freshCats(){this.loadingsubcats=!0,this.subcats=[];let t={_category:this.rootcatwork.value};this.catwork=this.rootcatwork,this.pushCats(t)},appendCats(t){this.loadingsubcats=!0,this.subcats.splice(t+1);let e=this.selectedFilters(),s=new Object;s.products=!0,s._category=this.subcats[t].model.value,e.length&&(s.filter=e),this.pushCats(s),this.catwork=this.subcats[t].model},pushCats(t){this.loadingsubcats=!0,this.products=[],this.filters=[],r["a"].loadCats(t).then((t=>{let e=t.data;return e})).then((t=>{console.log("Datos obtenidos, construyendo select y filtros"),console.log(t),t.categories.children.length?(t.model=void 0,t.options=t.categories.children.map((t=>({label:t.name,value:t.id}))),this.subcats.push(t)):console.log("no hay mas por cargar"),this.loadingsubcats=!1,this.filters=t.filter,this.totalproducts=t.products.map((t=>(t.showstocks={show:!1,state:1},t)))})).catch((t=>{console.log(t)}))},selectedFilters(){let t=[];return this.selectedfilters.forEach((e=>{e.model.length&&t.push({_attribute:e.idattr,values:e.model})})),t},getStock(){console.log("Stockeando!!!"),this.stocking=!0;let t=this.totalproducts.map((t=>(console.log(),t.showstocks.show=!0,t.showstocks.state=2,t.id))),e={products:t};console.log(t),r["a"].getStocks(e).then((t=>{let e=t.data;console.log(e),this.totalproducts.map((t=>{let s=e.findIndex((e=>t.id==e.id));t.showstocks.show=!0,t.showstocks.state=3,t.stockStores=e[s].stockStores})),this.stocking=!1})).catch((t=>{this.stocking=!1,console.log(t)}))},applyFilters(){let t=this.selectedFilters();if(t.length){this.filtering=!0;let e={_category:this.catwork.value,products:!0,filter:t};r["a"].getFiltred(e).then((t=>{let e=t.data;this.totalproducts=e.products.map((t=>(t.showstocks={show:!1,state:1},t))),this.filtering=!1,this.leftdrawer=!1})).catch((t=>{console.log(t)}))}else this.$q.notify({message:"Seleccione al menos un filtro",color:"negative"})}},computed:{select_rootcat(){return this.rootcats.map((t=>({label:t.name,value:t.id})))},filtersAvs(){return!!this.filters.length&&(console.log(this.filters),this.filters.map(((t,e)=>{this.selectedfilters.push({filter:t.name,model:[],idattr:t.id});let s=t.details.options.map((t=>t));return{label:t.name,options:s,idxattr:e,idattr:t.id}})))},breadcrums(){return this.subcats.map((t=>t.model?t.model.label:""))}}},c=i,n=(s("1527"),s("2877")),d=s("9989"),u=s("e359"),p=s("f09f"),g=s("ead5"),h=s("0016"),f=s("079e"),b=s("9c40"),k=s("9404"),m=s("ddd8"),w=s("981c"),v=s("4983"),_=s("eaac"),q=s("27f9"),x=s("8380"),y=s("de5e"),C=s("e7a9"),P=s("eebe"),S=s.n(P),Q=Object(n["a"])(c,a,o,!1,null,null,null);e["default"]=Q.exports;S()(Q,"components",{QPage:d["a"],QHeader:u["a"],QCard:p["a"],QBreadcrumbs:g["a"],QIcon:h["a"],QBreadcrumbsEl:f["a"],QBtn:b["a"],QDrawer:k["a"],QSelect:m["a"],QSpinnerGrid:w["a"],QScrollArea:v["a"],QTable:_["a"],QInput:q["a"],QSpinnerDots:x["a"],QPageSticky:y["a"],QBtnGroup:C["a"]})},1527:function(t,e,s){"use strict";s("bf2b")},bf2b:function(t,e,s){}}]);