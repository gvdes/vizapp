(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"30f2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("q-header",{staticClass:"bg-darkl0",attrs:{elevated:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.stateDelete,expression:"stateDelete"}],staticClass:"row items-stretch justify-between"},[s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"row items-center col bg-dark divlcient"},[s("div",{staticClass:"q-pa-sm col text-center"},[s("div",{staticClass:"text--2"},[t._v("Destino:")]),s("div",{staticClass:"text-uppercase"},[t._v(t._s(t.setupToolbar.destiny))])]),s("div",{staticClass:"q-pa-sm col text-center"},[s("div",{staticClass:"text--2"},[t._v("Folio:")]),s("div",{staticClass:"text-bold"},[t._v(t._s(t.setupToolbar.verify))])])]),t._getorders&&t._getorders.status.id<=2?s("q-btn",{attrs:{flat:"",icon:"menu"},on:{click:function(e){t.ldrawer.state=!t.ldrawer.state}}}):t._e()],1),s("div",{staticClass:"row items-center justify-between q-mt-sm"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Modelos")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v("\n            "+t._s(t.bucketToolbar.length)+"\n          ")])]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Unidades")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.unityBucket))])]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Cajas")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.boxesBucket))])])]),s("div",{staticClass:"col-md-6 col-xs-4 q-ma-xs",staticStyle:{"max-width":"20rem"}},[s("q-select",{attrs:{"transition-show":"scale","transition-hide":"scale",color:"green-13",label:"Disponibilidad",options:t.available,dark:"","options-selected-class":"text-green-13"},on:{click:t.filterAvailable},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"text-green-13",attrs:{name:"filter_alt"}})]},proxy:!0}]),model:{value:t.selectAvailable,callback:function(e){t.selectAvailable=e},expression:"selectAvailable"}})],1)])]),s("q-slide-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.flagDuplicate,expression:"flagDuplicate"}]},[s("q-banner",{staticClass:"bg-orange-8",scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"pan_tool",color:"dark"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{staticClass:"text-weight-bold",attrs:{rounded:"",flat:"",color:"dark",label:"Entendido","icon-right":"double_arrow"},on:{click:function(e){t.filteringItems="",t.flagDuplicate=!t.flagDuplicate}}})]},proxy:!0}])},[s("span",{staticClass:"text-subtitle1 text-dark text-weight-bold"},[t._v(t._s(t.messageDuplicate))])])],1)]),t._getorders&&t._getorders.status.id<=2?s("q-drawer",{attrs:{side:"right","content-class":"text-grey-5 bg-darkl1"},on:{hide:function(e){t.startremove.state=!1}},model:{value:t.ldrawer.state,callback:function(e){t.$set(t.ldrawer,"state",e)},expression:"ldrawer.state"}},[s("div",{staticClass:"q-pa-md"},[t._getorders&&1==t._getorders.status.id?s("q-btn",{staticClass:"q-mb-md",attrs:{label:"Vaciar Orden",icon:"remove_circle_outline",color:"red-10","no-caps":"",disable:0==t.products.length},on:{click:t.emptyOrder}}):t._e(),t.startremove.state?s("div",[s("div",{staticClass:"q-mb-md"},[t._v("Archivar pedido?")]),s("span",{staticClass:"col row q-gutter-md"},[s("q-btn",{staticClass:"col",attrs:{"no-caps":"",label:"Si",color:"negative"},on:{click:t.order_archive}}),s("q-btn",{staticClass:"col",attrs:{"no-caps":"",label:"No",color:"primary"},on:{click:function(e){t.startremove.state=!1}}})],1)]):s("q-btn",{attrs:{label:"Archivar Pedido",icon:"delete",color:"negative","no-caps":""},on:{click:function(e){t.startremove.state=!0}}})],1),s("q-separator")],1):t._e(),s("div",{staticClass:"q-mb-xl q-mt-sm"},[t.__basket.length?s("div",{staticClass:"col-md-4 col-xs-8 q-mb-sm",staticStyle:{"max-width":"300px"}},[[s("q-input",{attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar Folio, Código o Descripción"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,2901929698),model:{value:t.filteringItems,callback:function(e){t.filteringItems=e},expression:"filteringItems"}})]],2):t._e(),s("q-table",{attrs:{grid:"",flat:"",dark:"","row-key":"id",columns:t.tableproducts.columns,data:t.filterAvailable,pagination:t.tableproducts.pagination,filter:t.filteringItems},on:{"update:data":function(e){t.filterAvailable=e}},scopedSlots:t._u([{key:"item",fn:function(e){return[s("div",{staticClass:"q-pa-xs col-xs-12 text-grey-4 col-sm-6 col-md-4 col-lg-3"},[s("q-card",{staticClass:"bg-darkl1 q-mb-sm q-mr-sm",on:{click:function(s){return t.selItem(e.row,2)}}},[s("div",{staticClass:"row items-center q-pt-md"},[s("div",{staticClass:"q-px-lg"},[s("q-img",{staticStyle:{height:"50px",width:"50px"},attrs:{transition:"slide-up",src:"https://image.flaticon.com/icons/png/512/586/586627.png"}})],1),s("div",{staticClass:"text-white col"},[s("div",{staticClass:"text-bold"},[t._v(t._s(e.row.code))]),s("div",[t._v(t._s(e.row.name))]),s("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.row.description))])])]),s("div",{staticClass:"col q-px-md"},[s("q-markup-table",{staticClass:"bg-none",attrs:{flat:"",dark:""}},[s("thead",[s("tr",[s("th",[t._v("Sol. ("+t._s(e.row._name)+")")]),s("th",[t._v("pzs / caj")]),s("th",[t._v("Disp. (piezas)")])])]),s("tbody",[s("tr",{staticClass:"text-center"},[s("td",[t._v(t._s(e.row.ordered.amount))]),s("td",[t._v(t._s(e.row.pieces))]),s("td",[s("span",{class:e.row.ordered.stock>=1?"text-green-13":"text-pink-13"},[t._v(t._s(e.row.ordered.stock))])])])])])],1),e.row.ordered.comments||e.row.ordered._supply_by?s("q-banner",{staticClass:"bg-darkl0 text-amber-13",attrs:{rounded:""}},[s("span",{staticClass:"text--2"},[t._v("\n                Se surtira la cantidad de\n                "),s("span",{staticClass:"text-weight-bold"},[t._v(t._s(e.row._units)+"pz")]),t._v("\n                correspondiente a la unidad de\n                "),s("span",{staticClass:"text-weight-bold"},[t._v(t._s(e.row._name))]),s("q-separator",{attrs:{dark:""}}),t._v("\n                Notas: "+t._s(e.row.ordered.comments)+"\n              ")],1)]):t._e()],1)],1)]}},{key:"bottom",fn:function(e){return[s("q-page-sticky",{staticClass:"full-width",attrs:{position:"bottom",offset:[0,18]}},[s("div",{staticClass:"row q-pt-xs"},[s("q-btn-group",{staticClass:"bg-dark text-white",attrs:{rounded:""}},[e.pagesNumber>2?s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"first_page",round:"",dense:"",flat:"",disable:e.isFirstPage},on:{click:e.firstPage}}):t._e(),s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"chevron_left",round:"",dense:"",flat:"",disable:e.isFirstPage},on:{click:e.prevPage}}),s("q-btn",{attrs:{flat:"",disable:"","no-caps":""}},[t._v(t._s(e.pagination.page)+" / "+t._s(e.pagesNumber))]),s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"chevron_right",round:"",dense:"",flat:"",disable:e.isLastPage},on:{click:e.nextPage}}),e.pagesNumber>2?s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"last_page",round:"",dense:"",flat:""},on:{click:e.lastPage}}):t._e()],1)],1)])]}}])})],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.wndImportJSON.state,callback:function(e){t.$set(t.wndImportJSON,"state",e)},expression:"wndImportJSON.state"}},[s("q-card",{staticClass:"bg-darkl0 text-grey-5 exo text-subtitle1"},[s("q-card-section",[t._v("\n        Se preocesarón\n        "),s("span",{staticClass:"text-green-13 text-weight-bold"},[t._v("\n          "+t._s(t.wndImportJSON.wndTotal)+"\n        ")]),t._v("\n        filas,\n        "),s("span",{staticClass:"text-green-13 text-weight-bold"},[t._v("\n          "+t._s(t.wndImportJSON.wndGetRows)+"\n        ")]),t._v("\n        modelos fueron encontrados y agregados a la lista"+t._s(0!=t.wndImportJSON.wndNoDataFound.length?", sin embargo;":".")+"\n      ")]),t.wndImportJSON.wndNoDataFound.length?s("q-card-section",[s("div",[t._v("\n          No encontramos estos\n          "),s("span",{staticClass:"text-red-6 text-weight-bold"},[t._v("\n            "+t._s(t.wndImportJSON.wndNoDataFound.length)+"\n          ")]),t._v("\n          modelos:\n        ")]),t._l(t.wndImportJSON.wndNoDataFound,(function(e,a){return s("div",{key:a,staticClass:"text-uppercase"},[s("q-avatar",{staticClass:"text-red-6",attrs:{size:"xs",icon:"fas fa-circle"}}),t._v("\n          "+t._s(e)+"\n        ")],1)}))],2):t._e(),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{flat:"",label:"Ok",color:"green-13"}})],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.stateDone,callback:function(e){t.stateDone=e},expression:"stateDone"}},[s("q-card",{staticClass:"bg-darkl0 exo"},[s("q-card-section",{staticClass:"row items-center"},[s("q-avatar",{attrs:{icon:"notifications_active",color:"orange-13"}}),s("span",{staticClass:"q-ml-sm text-white"},[t._v("¿Estas seguro de terminar esta orden?")])],1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",icon:"close",color:"red-5"}}),s("q-btn",{attrs:{flat:"",label:"Terminar",icon:"done",color:"green-13"},on:{click:function(e){return t.changeState()}}})],1)],1)],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:t.flagProducts,callback:function(e){t.flagProducts=e},expression:"flagProducts"}},[s("q-card",{staticClass:"text-white bg-darkl1 exo"},[[s("ProductAOE",{attrs:{product:t.wndSetItem.art,client:{},blockunitsupply:"",action:t.stateAOE},on:{confirm:t.addProduct,remove:t.removeProduct,cancel:t.cancelproduct}})]],2)],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndSelectSupply.wndDialogState,callback:function(e){t.$set(t.wndSelectSupply,"wndDialogState",e)},expression:"wndSelectSupply.wndDialogState"}},[s("q-card",{staticClass:"exo bg-darkl0 text-grey-4"},[s("q-card-section",[s("div",{staticClass:"row justify-between text-h6 text-center"},[t._v("Selección de Surtido")]),s("q-separator",{attrs:{color:"green-13",dark:""}})],1),s("q-card-section",{staticClass:"q-pt-none row text-center col justify-around"},t._l(t.wndSelectSupply.options,(function(e,a){return s("q-card",{key:a,staticClass:"col-4 card-action cursor-pointer bg-darkl1 text-white no-border",on:{click:function(s){return t.setSupplyTarget(e.value)}}},[s("q-card-section",[s("div",{staticClass:"text-subtitle1"},[s("q-avatar",{attrs:{square:""}},[s("img",{attrs:{src:e.icon}})])],1),s("span",{},[t._v(t._s(e.label))])])],1)})),1),s("div")],1)],1),s("q-dialog",{attrs:{position:"bottom"},on:{hide:t.wndSetItemReset},model:{value:t.wndSetItem.state,callback:function(e){t.$set(t.wndSetItem,"state",e)},expression:"wndSetItem.state"}},[t.wndSetItem.art?s("q-card",{staticClass:"exo bg-darkl0 text-grey-5"},[s("q-card-section",[s("div",{staticClass:"row text-white items-center justify-between"},[s("span",{staticClass:"text-h6"},[t._v(t._s(t.wndSetItem.art.code))]),s("span",{staticClass:"text-bold"},[t._v(t._s(t.wndSetItem.art.name))])]),s("div",{staticClass:"text--1"},[t._v(t._s(t.wndSetItem.art.description))]),t.editableord?t._e():[s("div",{staticClass:"row q-gutter-md"},[s("div",[t._v("Cantidad: "+t._s(t.wndSetItem.units))])])]],2),t.editableord?s("q-form",[s("q-card-section",{staticClass:"row justify-around items-center"},[s("q-input",{attrs:{dark:"",color:"green-13",min:"1",type:"number","label-slot":"",autofocus:""},scopedSlots:t._u([{key:"label",fn:function(){return[s("div",{staticClass:"row text-amber-13"},[s("q-icon",{attrs:{name:1==t.wndSetItem.art.units?"fas fa-box":"fas fa-puzzle-piece"}}),s("div",{staticClass:"q-pl-sm"},[t._v("\n                  "+t._s(t.wndSetItem.art.units.name)+"s\n                  "),3==t.wndSetItem.art.units.id?s("span",[t._v("("+t._s(t.wndSetItem.art.pieces)+" pzs / caj)")]):t._e()])],1)]},proxy:!0}],null,!1,628195751),model:{value:t.wndSetItem.units,callback:function(e){t.$set(t.wndSetItem,"units",e)},expression:"wndSetItem.units"}}),s("q-input",{attrs:{label:"notas",dark:"",color:"green-13",type:"text"},model:{value:t.wndSetItem.notes,callback:function(e){t.$set(t.wndSetItem,"notes",e)},expression:"wndSetItem.notes"}})],1),s("q-card-actions",{attrs:{align:"around"}},[t.duplicate?["ask"==t.deleteitem?s("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"pink-13",icon:"delete",disable:t.wndSetItem.adding},on:{click:function(e){t.deleteitem="confirm"}}}):s("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"pink-13",label:"eliminar "+t.wndSetItem.art.code,disable:t.erasing.state,loading:t.erasing.state},on:{click:t.removeProduct}})]:t._e(),"ask"==t.deleteitem?s("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"green-13",type:"submit",icon:"done",loading:t.wndSetItem.adding,disable:t.wndSetItem.adding},on:{click:t.addProduct}}):s("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"amber-13",label:"cancelar"},on:{click:function(e){t.deleteitem="ask"}}})],2)],1):t._e()],1):t._e()],1),s("q-dialog",{model:{value:t.wndLog.state,callback:function(e){t.$set(t.wndLog,"state",e)},expression:"wndLog.state"}},[t.wndLog.order?s("q-card",{staticClass:"exo bg-darkl0 text-grey-5",staticStyle:{width:"500px"}},[s("q-card-section",[s("q-timeline",{attrs:{dark:"",color:"green-13"}},[s("q-timeline-entry",{attrs:{heading:""}},[t._v(t._s(t.wndLog.order.from.alias)+" "+t._s(t.wndLog.order.id))]),t._l(t.wndLog.order.log,(function(e){return s("q-timeline-entry",{key:e.id,attrs:{subtitle:e.details.responsable,title:e.name}},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col row items-center"},[s("q-icon",{attrs:{name:"fas fa-hourglass-start",color:"blue-grey-7"}}),s("span",{staticClass:"text-white q-px-sm"},[t._v("\n                  "+t._s(t.humantime(e.created_at))+"\n                ")])],1),s("div",{staticClass:"col row items-center"},[s("q-icon",{attrs:{name:"fas fa-hourglass-end",color:"blue-grey-7"}}),s("span",{staticClass:"text-white q-px-sm"},[t._v("\n                  "+t._s(t.humantime(e.updated_at))+"\n                ")])],1),s("div",{staticClass:"col row items-center"},[s("q-icon",{attrs:{name:"fas fa-stopwatch",color:"blue-grey-7"}}),s("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.duration(e)))])],1)])])}))],2)],1)],1):t._e()],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.flagPrompt,callback:function(e){t.flagPrompt=e},expression:"flagPrompt"}},[s("q-card",{staticClass:"exo bg-darkl0 text-white",staticStyle:{"min-width":"350px"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Nombre del archivo")])]),s("q-card-section",{staticClass:"q-pt-none"},[s("q-input",{attrs:{dark:"",dense:"",color:"green-13",autofocus:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.exportExcel,t.flagPrompt=!t.flagPrompt}},model:{value:t.saveNameExport,callback:function(e){t.saveNameExport=e},expression:"saveNameExport"}})],1),s("q-card-actions",{staticClass:"text-green-13",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Descargar"},on:{click:t.exportExcel}})],1)],1)],1),t.order?s("q-footer",{staticClass:"bg-darkl1 text-white",attrs:{elevated:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.stateDelete,expression:"stateDelete"}],staticClass:"q-pa-xs row justify-center items-center"},[0!=t.order.products.length?[s("div",[s("q-btn",{staticClass:"no-shadow",attrs:{flat:"",color:"green-13",icon:"fas fa-download"},on:{click:function(e){t.flagPrompt=!t.flagPrompt}}})],1)]:t._e(),t._getorders&&1==t._getorders.status.id?[s("div",[s("q-btn",{staticClass:"q-mr-sm no-shadow",attrs:{dense:"",flat:"",color:"green-13",icon:"fas fa-upload"},on:{click:function(e){t.wndSelectSupply.wndDialogState=!t.wndSelectSupply.wndDialogState}}})],1),s("div",{staticClass:"col text-center"},[s("ProductAutocomplete",{ref:"comp_autocomplete",attrs:{with_image:"",with_prices:"",with_stock:"","workpoint-status":[1,2],"val-state-cedis":1,"block-states":[3,4,5,6]},on:{input:t.selItem}})],1),s("div",{staticClass:"text-right"},[s("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.products.length,expression:"products.length"}],attrs:{dense:"",flat:"",color:"green-13",icon:"fas fa-arrow-right",disable:t.nextstep.state,loading:t.nextstep.state},on:{click:function(e){t.stateDone=!t.stateDone}}}),s("input",{ref:"blobfile",attrs:{type:"file",id:"blobfile",hidden:"",accept:".xlsx, .xls"},on:{input:t.deliveryJSON}})],1)]:t._getorders&&7==t._getorders.status.id?[t.tostock.state?[s("span",[s("q-btn",{attrs:{flat:"",dense:"",color:"green-13",label:"Confirmar entrega"},on:{click:function(e){return t.changeState(10)}}}),s("q-btn",{attrs:{flat:"",dense:"",color:"amber-13",label:"cancelar"},on:{click:function(e){t.tostock.state=!1}}})],1)]:[s("span",{staticClass:"text-grey-4 q-pl-md"},[t._v(t._s(t._getorders&&t._getorders.status.name))]),s("span",[s("q-btn",{attrs:{flat:"",color:"green-13",icon:"history"},on:{click:t.showLog}}),t.owner?s("q-btn",{attrs:{dense:"",flat:"",color:"green-13",icon:"fas fa-people-carry"},on:{click:function(e){t.tostock.state=!0}}}):t._e(),s("div")],1)]]:[s("span",{staticClass:"text-grey-4 q-pl-md"},[t._v(t._s(t._getorders&&t._getorders.status.name))]),s("q-btn",{attrs:{flat:"",color:"green-13",icon:"history"},on:{click:t.showLog}})]],2)]):t._e()],1)},o=[],i=(s("e01a"),s("bd4c")),r=s("f7cb"),n=s("e8ae"),l=s.n(n),d=s("bd9f"),c=s("b293"),p=s("21a6"),u=s.n(p),m=s("4709"),h={components:{ProductAutocomplete:c["a"],ProductAOE:m["a"]},data(){return{orderMutate:[],flagArchive:!1,selectAvailable:"Todos",available:[{label:"Todos",value:1},{label:"Disponible",value:2},{label:"No Disponible",value:3}],stateDelete:!0,stateOrder:!0,stateDone:!1,stateAOE:"add",alias:"",flagProducts:!1,flagPrompt:!1,saveNameExport:"",orderProd:[],flagDuplicate:!1,messageDuplicate:"",filteringItems:void 0,flagFilter:!1,ldrawer:{state:!1},startremove:{state:!1},flag:!0,configToolbar:[],setupToolbar:{destiny:"",verify:""},params:{id:"",data:Array},seltypeunit:[{label:"cajas",value:1},{label:"piezas",value:2}],products:[],order:void 0,iptsearch:{value:"",processing:!1,type:"text",icon:"fas fa-hashtag"},wndSetItem:{state:!1,adding:!1,idxlist:void 0,art:void 0,units:1,notes:"",unittype:void 0,metsupply:1},wndLog:{state:!1,order:void 0},deleteitem:"ask",erasing:{state:!1},nextstep:{value:"ask",state:!1},sounds:{moved:new Audio("sounds/moved.mp3")},archive:{state:!1},tostock:{state:!1},duplicate:!1,print:{state:!1},autocom:{model:null,options:void 0},tableproducts:{columns:[{name:"id",align:"left",label:"ID",field:"id",sortable:!0},{name:"code",align:"left",label:"Codigo",field:"code",sortable:!0},{name:"name",align:"center",label:"Codigo Corto",field:"name",sortable:!1},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"cant",align:"center",label:"Cantidad",field:"cant",sortable:!0},{name:"pieces",align:"center",label:"PzsXCaj",field:"pieces",sortable:!0},{name:"stock",align:"center",label:"Disponibles",field:t=>t.ordered.stock,sortable:!0},{name:"boxes",align:"center",label:"Cajas",field:"boxes",sortable:!0}],filtrator:"",pagination:{descending:!1,page:1,rowsPerPage:16}},wndImportJSON:{state:!1,wndGetRows:[],wndNoDataFound:[],wndTotal:[],wndGetAdded:[],_supply_by:0},wndSelectSupply:{wndDialogState:!1,options:[{label:"Unidad",icon:"https://cdn-icons-png.flaticon.com/512/1524/1524855.png",value:1},{label:"Docena",icon:"https://cdn-icons-png.flaticon.com/512/541/541087.png",value:2},{label:"Caja",icon:"https://cdn-icons-png.flaticon.com/512/2979/2979677.png",value:3}]},rsocket:this.$sktRestock,pricelists:[{id:1,alias:"MEN",name:"MENUDEO"},{id:2,alias:"MAY",name:"MAYOREO"},{id:3,alias:"DOC",name:"DOCENA"},{id:4,alias:"CAJ",name:"CAJA"}],metsupplies:[{name:"Piezas",id:1,alias:"pzs"},{name:"Docenas",id:2,alias:"dcs"},{name:"Cajas",id:3,alias:"cjs"}]}},beforeDestroy(){this.$store.commit("Layout/showToolbarModule")},async mounted(){this.$store.commit("Requisitions/setHeaderState",!1),this.$store.commit("Requisitions/setFooterState",!1),this.params.id=this.$route.params.id,this.params.data=this.$route.params,this.$store.commit("Layout/hideToolbarModule"),this.$q.loading.show({message:"..."}),this.order=await d["a"].find(this.params.id),this.products=this.order.products,this.flagArchive=this.order.status.id<=2,this.$q.loading.hide(),this.flagFilter=this.order.log.length>=2,this.flag=10!=this.order.status.id,this.setupToolbar.destiny=this.order.to.alias,this.setupToolbar.verify=this.order.id,this.alias=this.workin.workpoint.alias,this.saveNameExport=`${this.alias}_${this.setupToolbar.verify}_RES`},methods:{sktOrderHere(t){return this.params.id==t.order.id},showLog(){this.wndLog.order=this.order,this.wndLog.state=!0},reprint(){console.log("reimprimiendo");let t={_requisition:this.params.id};this.print.state=!0,d["a"].reprint(t).then((t=>{console.log(t),this.print.state=!1})).catch((t=>{console.log(t)}))},sktOrder_changeState(t){console.log("Este pedido ha sido modificado por cedis"),console.log(t.order.status),console.log(this.order.status);let e="",s="",a="",o=!1;switch(this.order.log=t.order.log,this.order.status=t.order.status,t.order.status.id){case 3:e="Inició el surtido de este pedido",s="fas fa-people-carry",a="blue-10",o=!0;break;case 5:e="Inició la salida de este pedido",s="fas fa-truck-moving",a="green-10",o=!0;break}o&&(this.$q.notify({icon:s,color:a,message:e,position:"bottom-right",html:!0}),this.sounds.moved.play())},changeState(t=null){this.stateDone=9==this.order.status.id&&!this.stateDone;let e=t||parseInt(this.order.status.id)+1,s={id:this.params.id,_status:e},a="",o={id:e,name:void 0};switch(this.$q.loading.show({message:"Enviando orden, favor de esperar..."}),e){case 2:console.log("Moviendo a por surtir"),o.name="Por surtir",a="Enviando pedido...";break;case 9:console.log("Moviendo a Terminados"),o.name="Recibido",a="Recibiendo y finalizando...";break}d["a"].nextstep(s).then((t=>{console.log("%cEl pedido ha cambiado de status...","font-size:1.5em;color:yellow;"),console.log(t),this.$q.loading.hide();let e,s=t.data.updates,a=[];e=s.status,console.log(this._getorders.log),a=this._getorders.log.concat(s.log),this.$q.notify({color:"positive",icon:"done",position:"center"}),this.rsocket.emit("order_changestate",{state:e,log:a,user:this.profile,from:this.workin,order:this.order,room:this.socketroom})})).catch((t=>{console.error(t)}))},wndSetItemReset(){this.wndSetItem.idxlist=void 0,this.wndSetItem.art=void 0,this.wndSetItem.units=1,this.wndSetItem.notes="",this.wndSetItem.adding=!1,this.deleteitem="ask"},order_archive(){let t={id:this.params.id,_status:100};this.$q.loading.show({message:"Archivando pedido, espera..."}),d["a"].nextstep(t).then((t=>{let e=t.data,s={id:100,name:"Cancelado"};console.log(e),this.order=e.order,this.$q.loading.hide(),this.$q.notify({message:"Pedido archivado",color:"positive",icon:"done",position:"center"}),this.rsocket.emit("order_changestate",{state:s,user:this.profile,from:this.workin,order:this.order,room:this.socketroom}),this.$router.push("/pedidos")})).catch((t=>{console.log(t)}))},cancelproduct(t){this.flagProducts=!this.flagProducts},removeProduct(t){let e=t.product.id,s=t.product;this.erasing.state=!0;let a={_product:e,_requisition:this.params.id};d["a"].remove(a).then((t=>{this.products.splice(this.wndSetItem.idxlist,1),this.erasing.state=!1,this.flagProducts=!this.flagProducts,this.$q.notify({message:"El producto ha sido removido.",color:"positive",type:"positive",position:"center",timeout:1500}),this.rsocket.emit("order_update",{user:this.profile,from:this.workin,cmd:"remove",order:this.params.data,product:s})})).catch((t=>{console.log(t)}))},removeAllProduct(t){this.$q.loading.show({message:"Removiendo datos, espera..."});let e=t.id,s=t;this.erasing.state=!0;let a={_product:e,_requisition:this.params.id};d["a"].remove(a).then((t=>{this.products.splice(this.wndSetItem.idxlist,1),this.erasing.state=!1,this.$q.notify({message:"El producto ha sido removido.",color:"positive",type:"positive",position:"center",timeout:1500}),this.rsocket.emit("order_update",{user:this.profile,from:this.workin,cmd:"remove",order:this.params.data,product:s}),this.stateDelete=0==this.products.length,this.$q.loading.hide()})).catch((t=>{console.log(t)}))},addProduct(t){if(console.log(t),3==t.product.status.id)this.messageDuplicate=`El producto ${this.wndSetItem.art.description} con código ${this.wndSetItem.art.code} se encuentra agotado.`,this.flagDuplicate=!this.flagDuplicate,this.flagProducts=!this.flagProducts;else{this.wndSetItem.adding=!0,this.filteringItems="";let e=new Object;this.wndSetItem.art=t.product,this.wndSetItem.units=t.units,this.wndSetItem.amount=t.amount,this.wndSetItem.notes=t.comments,this.wndSetItem.metsupply=t.metsupply;let s=this.wndSetItem.art;s.amount=this.wndSetItem.amount,s.comments=this.wndSetItem.notes,s.prices=this.wndSetItem.art.prices,e._product=s.id,e.amount=s.amount,e.comments=s.comments,e._requisition=this.params.id,e._supply_by=t.metsupply.id,this.$q.loading.show({message:"Enviando archivo, espera..."}),d["a"].add(e).then((t=>{let e=t.data;console.log(e);let a=this.products.findIndex((t=>e.id==t.id)),o=null,i=null;if(this.$q.loading.hide(),console.log(a),a>=0)console.log("Articulo editado"),o=this.products[a],this.products[a].ordered._supply_by=this.wndSetItem.metsupply.id,this.products[a].ordered.amount=this.wndSetItem.amount,this.products[a].ordered.comments=this.wndSetItem.notes,i="edit",this.flagDuplicate=!1;else{console.log("Articulo agregado");let t={prices:s.prices};0==e.success?(this.messageDuplicate=`El producto ${this.wndSetItem.art.description} con código ${this.wndSetItem.art.code} no tiene costo.`,this.flagDuplicate=!this.flagDuplicate):(e=Object.assign(e,this._metsupply(e)[0]),e=Object.assign(e,t),console.log(e),this.products.unshift(e),i="add",o=e)}this.flagProducts=!this.flagProducts,this.autocom.options=void 0,this.autocom.model=null,this.$refs.comp_autocomplete.putFocus(),this.rsocket.emit("order_update",{user:this.profile,from:this.workin,cmd:i,order:this.params.data,product:o})})).catch((t=>{console.log(t)}))}},async selItem(t,e){console.log(t);let s=this.products.findIndex((e=>t.id==e.id));if(s>=0){2==e||(this.flagDuplicate=!this.flagDuplicate,this.messageDuplicate="Haz seleccionado este producto dos veces, te sugiero que ingreses la cantidad correcta.",this.filteringItems=t.code,this.flagProducts=!0),console.log("Editando producto");let a=this.products[s];console.log(this.products[s]),this.order.status.id>=2?this.flagProducts=!1:this.flagProducts=!this.flagProducts,this.stateAOE="edit",this.wndSetItem.notes=a.ordered.comments,this.wndSetItem.units=a.ordered.amount,this.wndSetItem.idxlist=s;let o=a,i=Object.assign(o,this._metsupply(a)[0]);this.wndSetItem.art=i,this.products[s]=o}else console.log("Agregando producto..."),this.duplicate=!1,this.wndSetItem.idxlist=0,this.wndSetItem.art=t,this.flagProducts=!0,this.stateAOE="add",this.filteringItems=""},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.iptsearch.focus()},async getOrder(t){let e=[],s={params:{code:t}};return await r["a"].autocompleteGET(s).then((t=>{let s=t.data;e=s})).catch((t=>{console.log(t)})),e},triggerInputFile(){this.$refs.blobfile.click()},async deliveryJSON(){let t=document.getElementById("blobfile").files[0],e=new l.a.Workbook;this.$q.loading.show({message:"El documento se esta importando, favor de esperar..."}),e.xlsx.load(t).then((()=>{let t=e.worksheets[0],s=t.getColumn("A"),a=[],o=[],i=[];s.eachCell({includeEmpty:!0},(function(t,e){t.value&&a.push(t.value)}));let r=t.getColumn("B");r.eachCell({includeEmpty:!0},(function(t,e){t.value&&o.push(t.value)}));for(let e=0;e<a.length;e++){let t={code:a[e],amount:o[e]};i.push(t)}let n=i.filter(((t,e,s)=>s.findIndex((e=>e.code===t.code))===e)),l=a.length-n.length;n.length!=a.length&&(this.flagDuplicate=!this.flagDuplicate,this.messageDuplicate=`Durante el análisis nos percatamos de ${1==l?"un folio":l+" folios"} duplicados. Los retiramos para el proceso de subida de información, sin embargo le recomendamos revisar sus archivos antes de subirlos.`);let c={_requisition:this.setupToolbar.verify,products:n,_supply_by:this.wndImportJSON._supply_by};console.log(c),d["a"].addMasive(c).then((t=>{console.log(t.data);let e=[];e=t.data,console.log(e);for(let s=0;s<e.notFound.length;s++)this.wndImportJSON.wndNoDataFound.push(e.notFound[s]);this.wndImportJSON.wndTotal=i.length,this.wndImportJSON.wndGetRows=e.added.length,this.wndImportJSON.state=!this.wndImportJSON.state,this.wndImportJSON.wndGetAdded=e.added,this.wndImportJSON.wndGetAdded.map((t=>{this.products.push(t)})),this.$q.loading.hide()})).catch((t=>{console.log(t),this.$q.loading.hide()})),document.getElementById("blobfile").value=""})).catch((t=>{console.log(t),this.$q.loading.hide(),this.flagDuplicate=!this.flagDuplicate,this.messageDuplicate="El archivo que intentas subir no es compatible. Debes actualizar tu formato a nuevas versiones de Excel.(Extensión .xlsx)"}))},exportExcel(){let t=new l.a.Workbook,e=t.addWorksheet("My Sheet");e.mergeCells("A1:A2"),e.mergeCells("B1:B2"),e.mergeCells("C1:C2"),e.mergeCells("D1:D2"),e.mergeCells("E1:E2"),e.mergeCells("F1:F2"),e.mergeCells("G1:I1"),e.getCell("A1:A2").alignment={horizontal:"center",vertical:"middle"},e.getCell("B1:B2").alignment={horizontal:"center",vertical:"middle"},e.getCell("C1:C2").alignment={horizontal:"center",vertical:"middle"},e.getCell("D1:D2").alignment={horizontal:"center",vertical:"middle"},e.getCell("E1:E2").alignment={horizontal:"center",vertical:"middle"},e.getCell("F1:F2").alignment={horizontal:"center",vertical:"middle"},e.getCell("G1:I1").alignment={horizontal:"center",vertical:"middle"},e.getCell("G1:I1").value="Solicitado",e.getCell("G1:I1").alignment={horizontal:"center",vertical:"middle"},e.mergeCells("J1:J2"),e.mergeCells("K1:L1"),e.getCell("K1:L1").value="Existencia",e.getCell("K1:L1").alignment={horizontal:"center",vertical:"middle"},e.getCell("G2").value="Cantidad",e.getCell("H2").value="Unidad",e.getCell("I2").value="Piezas",e.getCell("K2").value="Piezas",e.getCell("L2").value="Cajas",e.getCell("J1:J2").value="Piezas x Caja",e.getCell("J1:J2").alignment={horizontal:"center",vertical:"middle"},e.getCell("G2").alignment={horizontal:"center",vertical:"middle"},e.getCell("H2").alignment={horizontal:"center",vertical:"middle"},e.getCell("I2").alignment={horizontal:"center",vertical:"middle"},e.getCell("K2").alignment={horizontal:"center",vertical:"middle"},e.getCell("L2").alignment={horizontal:"center",vertical:"middle"},e.columns=[{header:"Código",key:"code",width:15},{header:"Modelo",key:"model",width:15},{header:"Descripción",key:"description",width:60},{header:"Sección",key:"section",width:15},{header:"Familia",key:"family",width:15},{header:"Categoría",key:"category",width:15},{header:"Solicitado",key:"amount",width:15},{header:"Solicitado",key:"unity",width:15},{header:"Solicitado",key:"pieces",width:15},{header:"Piezas x Caja",key:"pieces_box",width:15},{header:"Existencia",key:"boxes",width:10},{header:"Existencia",key:"_unity",width:10}],console.log(this.products);for(let a=0;a<this.products.length;a++)e.addRow({code:parseInt(this.products[a].name),model:this.products[a].code,description:this.products[a].description,section:this.products[a].section,family:this.products[a].family,category:this.products[a].category,amount:parseInt(this.products[a].ordered.amount),unity:this.products[a].metsupply.name,pieces:parseInt(this.products[a].ordered.units),pieces_box:parseInt(this.products[a].ipack),boxes:parseInt(this.products[a].stocks[0].stock*this.products[a].ipack),_unity:parseInt(this.products[a].stocks[0].stock)}).alignment={horizontal:"center"};let s=this.saveNameExport;console.log(s),this.appsounds.download.play(),t.xlsx.writeBuffer().then((t=>{u()(new Blob([t],{type:"application/octet-stream"}),`${s}.xlsx`)})),this.saveNameExport=`${this.alias}_${this.setupToolbar.verify}_RES`},setSupplyTarget(t){console.log(t),this.wndImportJSON._supply_by=t,this.wndSelectSupply.wndDialogState=!this.wndSelectSupply.wndDialogState,this.triggerInputFile()},emptyOrder(){this.stateDelete=!1;let t=this.products.length-1;this.ldrawer.state=!this.ldrawer.state;do{this.wndSetItem.art=this.products[t],this.removeAllProduct(this.wndSetItem.art),t--}while(t>=0)}},computed:{_getorders(){return this.$store.getters["Requisitions/getOrders"]?this.$store.getters["Requisitions/getOrders"].find((t=>t.id==this.params.id)):null},filterAvailable(){switch(this.selectAvailable.value){case 2:return this.__basket.filter((t=>0!=t.ordered.stock));case 3:return this.__basket.filter((t=>0==t.ordered.stock));default:return this.__basket}},getState(){return t=>-1==t},__basket(){return this.products?this.products.map((t=>(t.ipack=t.pieces?t.pieces:1,t.status=t.ordered.stock>0?{id:1,status:"Disponible"}:{id:1,status:"No Disponible"},t.metsupply=(t=>this.metsupplies.find((e=>e.id==t.ordered._supply_by)))(t),t._units=(t=>{switch(t.ordered._supply_by){case 2:return 12*t.ordered.amount;case 3:return t.ordered.amount*t.ipack;default:return t.ordered.amount}})(t),t._name=(t=>{switch(t.ordered._supply_by){case 2:return"Docenas";case 3:return"Cajas";default:return"Piezas"}})(t),t.boxes=(t=>(t._units/t.ipack).toFixed(1))(t),t))):[]},supply(){return t=>{switch(t.ordered._supply_by){case 1:return t.amount;case 2:return t.units*t.amount;case 3:return t.units*t.amount;default:break}}},_metsupply(){return t=>{let e=[];switch(t.ordered._supply_by){case 1:e=[{metsupply:{id:t.ordered._supply_by,name:"Piezas"}}];break;case 2:e=[{metsupply:{id:t.ordered._supply_by,name:"Docena"}}];break;case 3:e=[{metsupply:{id:t.ordered._supply_by,name:"Cajas"}}];break;default:break}return e}},appsounds(){return this.$store.getters["Multimediapp/sounds"]},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},socketroom(){return`${this.workin.workpoint.alias}`},bucketToolbar(){return this.products.map((t=>(t.pieces=t.pieces,t.boxes=t.ordered.amount,t)))},unityBucket(){return this.bucketToolbar.reduce(((t,e)=>t+parseInt(e.pieces*e.boxes)),0)},boxesBucket(){return this.bucketToolbar.reduce(((t,e)=>t+parseInt(e.boxes)),0)},editableord(){return!!this.order&&1==this.order.status.id},ordersize(){if(this.order){let t=this.products.length;if(t){let e=this.products.reduce(((t,e)=>parseInt(e.ordered.amount)+t),0);return[t,e]}return[0,0]}return[0,0]},humantime(){return t=>{let e=Date.now(),s=Date.parse(t),a=i["b"].getDateDiff(e,s,"days");switch(a){case 0:return"Hoy a las "+i["b"].formatDate(s,"hh:mm a");case 1:return"Ayer a las "+i["b"].formatDate(s,"hh:mm a");default:return`Hace ${a} dias, a las `+i["b"].formatDate(s,"hh:mm a")}}},duration(){return t=>{let e=Date.parse(t.created_at),s=Date.parse(t.updated_at),a=i["b"].getDateDiff(s,e,"minutes");if(a<=59)return a+"m";{let t=parseFloat(a/60).toFixed(2).split(".");return`${t[0]}h ${t[1]}m`}}},owner(){return!!this.order&&this.order.created_by._rol==this.profile.me._rol},isduplicate(){return t=>this.products.findIndex((e=>e.code==t))>=0}}},g=h,f=s("2877"),b=s("9989"),v=s("e359"),w=s("9c40"),_=s("ddd8"),x=s("0016"),k=s("e9c1"),y=s("54e1"),C=s("9404"),q=s("eb85"),S=s("27f9"),I=s("eaac"),D=s("f09f"),P=s("068f"),$=s("2bb1"),E=s("de5e"),N=s("e7a9"),A=s("24e8"),O=s("a370"),z=s("cb32"),J=s("4b7e"),T=s("0378"),F=s("05eb"),j=s("74af"),Q=s("7ff0"),L=s("7f67"),B=s("eebe"),R=s.n(B),M=Object(f["a"])(g,a,o,!1,null,"4ecf114a",null);e["default"]=M.exports;R()(M,"components",{QPage:b["a"],QHeader:v["a"],QBtn:w["a"],QSelect:_["a"],QIcon:x["a"],QSlideTransition:k["a"],QBanner:y["a"],QDrawer:C["a"],QSeparator:q["a"],QInput:S["a"],QTable:I["a"],QCard:D["a"],QImg:P["a"],QMarkupTable:$["a"],QPageSticky:E["a"],QBtnGroup:N["a"],QDialog:A["a"],QCardSection:O["a"],QAvatar:z["a"],QCardActions:J["a"],QForm:T["a"],QTimeline:F["a"],QTimelineEntry:j["a"],QFooter:Q["a"]}),R()(M,"directives",{ClosePopup:L["a"]})}}]);