(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"2dd7":function(t,e,s){},addf:function(t,e,s){"use strict";s("2dd7")},b6ba:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",{class:t.ismobile?"":"q-pb-md overflow-hidden",style:t.ismobile?"":"max-width:100%;max-height:70vh;"},[t.ismobile?e("div",[e("div",{staticClass:"col-md-12 col-xs-12 col-12 row self-center items-center q-pa-md"},[e("div",{staticClass:"col-md-4 col-4 q-pr-xs"},[e("q-select",{staticClass:"exo",attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",outlined:"",dense:"","options-dense":"",options:t.workpoints},on:{input:t.searchMarket},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"filter_alt"}})]},proxy:!0}]),model:{value:t.selectWorkpoint,callback:function(e){t.selectWorkpoint=e},expression:"selectWorkpoint"}})],1),e("div",{staticClass:"col-md-4 col-4 q-pr-xs"},[e("q-select",{staticClass:"exo",attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",multiple:"",outlined:"",dense:"","options-dense":"","display-value":"","emit-value":"","map-options":"",options:t.columns,"option-value":"name"},on:{click:t.orderColumns},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"settings"}})]},proxy:!0}]),model:{value:t.visibleColumns,callback:function(e){t.visibleColumns=e},expression:"visibleColumns"}})],1),e("div",{staticClass:"col-md-4 col-4 q-pr-xs"},[e("q-select",{staticClass:"exo",attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",outlined:"",dense:"","options-dense":"","display-value":"",options:t.timestamp,"option-value":"name"},on:{input:t.alertOrders},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"far fa-clock"}})]},proxy:!0}]),model:{value:t.timeSelected,callback:function(e){t.timeSelected=e},expression:"timeSelected"}})],1),e("div",{staticClass:"col-md-6 col-6 q-mt-xs"},[[e("q-input",{attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar Folio"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchID,callback:function(e){t.searchID=e},expression:"searchID"}})]],2)]),e("div",{staticClass:"q-pa-xs"},[e("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},t._l(t.visibleColumns,(function(s,a){return e("q-expansion-item",{key:a,staticClass:"text-black text-weight-bolder q-ma-sm",attrs:{group:"somegroup","expand-separator":"","header-class":"bg-green-13",icon:"fas fa-th",label:`${s}`,caption:`${t.orderManagement(s).length} en cola`,"expand-icon-class":"text-black"}},[e("q-scroll-area",{staticStyle:{height:"30vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.orderManagement(s),(function(s){return e("div",{key:s.id,staticClass:"q-py-md q-px-sm wrapper_prod",on:{click:function(e){return t.showLog(s.id)}}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"q-pr-sm"},[e("q-avatar",{staticClass:"q-ma-sm",attrs:{size:"3rem",square:""}},[e("img",{attrs:{transition:"slide-up",src:t.buildlog(s,"avatar")}})])],1),e("div",{staticClass:"col q-pr-sm text-grey-5"},[e("div",[e("span",{staticClass:"text--2 text-weight-bold"},[t._v("Orden "+t._s(s.id))]),e("q-avatar",{staticClass:"text-green-13",attrs:{icon:"fas fa-arrow-circle-right"}}),e("span",{staticClass:"text--2 text-light-blue-14 text-weight-bold"},[t._v(t._s(s.from.alias))])],1),e("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(t.buildlog(s,"resp")))]),e("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(s.notes))])]),e("div",{staticClass:"text-right text-green-13"},[t._v(t._s(t.buildlog(s,"time")))])])])})),0)],1)],1)})),1)],1)]):e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"col-md-12 col-xs-12 col-12 row self-center items-center"},[e("div",{staticClass:"col-md-3 col-3 q-pr-lg"},[e("q-select",{staticClass:"exo",staticStyle:{"min-width":"150px"},attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",outlined:"",dense:"","options-dense":"","display-value":"Sucursal",options:t.workpoints},on:{input:t.searchMarket},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"filter_alt"}})]},proxy:!0}],null,!1,3242521678),model:{value:t.selectWorkpoint,callback:function(e){t.selectWorkpoint=e},expression:"selectWorkpoint"}})],1),e("div",{staticClass:"col-md-3 col-3 q-pr-lg"},[e("q-select",{staticClass:"exo",staticStyle:{"min-width":"150px"},attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",multiple:"",outlined:"",dense:"","options-dense":"","display-value":"Configuración","emit-value":"","map-options":"",options:t.columns,"option-value":"name"},on:{click:t.orderColumns},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"settings"}})]},proxy:!0}],null,!1,8074509),model:{value:t.visibleColumns,callback:function(e){t.visibleColumns=e},expression:"visibleColumns"}})],1),e("div",{staticClass:"col-md-3 col-3 q-pr-lg"},[e("q-select",{staticClass:"exo",staticStyle:{"min-width":"150px"},attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",outlined:"",dense:"","options-dense":"","display-value":"Tiempo de alerta",options:t.timestamp,"option-value":"name"},on:{input:t.alertOrders},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"far fa-clock"}})]},proxy:!0}],null,!1,1576011967),model:{value:t.timeSelected,callback:function(e){t.timeSelected=e},expression:"timeSelected"}})],1),e("div",{staticClass:"col-md-3 col-3"},[[e("q-input",{attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar Folio"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,2901929698),model:{value:t.searchID,callback:function(e){t.searchID=e},expression:"searchID"}})]],2)]),e("div",{staticClass:"row justify-between full-width q-ma-sm"},t._l(t.visibleColumns,(function(s,a){return e("div",{key:a,staticClass:"col q-pa-xs"},[e("q-card",{staticClass:"bg-none"},[e("q-toolbar",{staticClass:"q-mb-sm text-green-13 bg-darkl1 text-uppercase text-thin subtitle1"},[t._v("\n            "+t._s(s)+"\n            "),e("q-space"),e("span",{staticClass:"text-white items-end q-pr-sm text-weight-bold"},[t._v("\n              "+t._s(t.orderManagement(s).length)+"\n            ")]),e("q-avatar",{staticClass:"q-pl-sm",attrs:{size:"sm",rounded:""}},[e("img",{attrs:{src:t.avatar(a,"toolbar")}})])],1)],1),e("q-scroll-area",{staticStyle:{height:"70vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.orderManagement(s),(function(s){return e("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s.id,class:(t.markedCard(s)&&t.findCards?"alertOrders":"")+" thing column bg-darkl1 q-mb-sm",attrs:{clickable:""},on:{click:function(e){return t.showLog(s.id)}}},[e("q-card-section",[e("div",{class:t.visibleColumns.length<8?"row justify-between items-center col-sm-3 col-md-4 col-xs-6":"column justify-between text-center items-center col-sm-3 col-md-4 col-xs-6"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"text-h5 text-white"},[t._v(t._s(s.id))]),e("div",{staticClass:"text-h6 text-light-blue"},[t._v(t._s(s.from.alias))]),e("div",{staticClass:"text-amber-13"},[t._v(t._s(s.notes))])]),e("div",{staticClass:"text-center col-auto"},[e("div",[e("q-avatar",{staticClass:"q-ma-sm",attrs:{size:"5rem",square:""}},[e("img",{attrs:{transition:"slide-up",src:t.buildlog(s,"avatar")}})])],1),e("div",[t._v(t._s(t.buildlog(s,"resp")))]),e("div",[e("span",{staticClass:"text-white text-bold"},[t._v("\n                        "+t._s(t.buildlog(s,"time"))+"\n                      ")])])])])])],1)})),1)],1)],1)})),0)]),e("q-dialog",{model:{value:t.wndLog.state,callback:function(e){t.$set(t.wndLog,"state",e)},expression:"wndLog.state"}},[t.wndLog.order?e("q-card",{staticClass:"exo bg-darkl0 text-grey-5",staticStyle:{width:"500px"}},[e("q-card-section",[e("div",{staticClass:"row text-white justify-between items-center"},[e("div",{staticClass:"text-h3"},[t._v(t._s(t.wndLog.order.from.alias)+" "+t._s(t.wndLog.order.id))]),e("div",{staticClass:"text-h6"},[e("div",[t._v("\n              "+t._s(t.ordersize(t.wndLog.order.products)[0])+"m\n              "+t._s(t.ordersize(t.wndLog.order.products)[1])+"p\n            ")]),t.wndLog.order&&t.wndLog.order.status.id>2?e("q-btn",{attrs:{icon:"print",flat:"",color:"green-13",loading:t.print.state,disable:t.print.state},on:{click:t.reprint}}):t._e()],1)]),e("q-timeline",{attrs:{dark:"",color:"green-13"}},t._l(t.wndLog.order.log,(function(s){return e("q-timeline-entry",{key:s.id,attrs:{subtitle:t.wndLog.order.status.id>2?s.details.responsable:"",title:s.name}},[e("div",{class:3==s.id&&s.details.actors?"q-pb-sm col row text-weight-bold text-body1":""},[e("div",{staticClass:"col-auto q-pr-sm"},[e("span",{staticClass:"text-green-13"},[3==s.id&&s.details.actors.managerState?e("q-icon",{staticClass:"q-pr-sm",attrs:{color:"blue-grey-7",name:"fas fa-truck-loading"}}):t._e(),t._v("\n                  "+t._s(3==s.id&&s.details.actors?s.details.actors.complete_name:"")+"\n                ")],1)]),e("div",{staticClass:"col-auto text-right"},[e("span",{staticClass:"text-white"},[t._v("\n                  "+t._s(3==s.id&&s.details.actors.managerState?t.humantime(s.details.actors.managerState.updateChanges):"")+"\n                ")])])]),e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col row items-center"},[e("q-icon",{attrs:{name:"fas fa-hourglass-start",color:"blue-grey-7"}}),e("span",{staticClass:"text-white q-px-sm"},[t._v("\n                  "+t._s(t.humantime(s.created_at))+"\n                ")])],1),e("div",{staticClass:"col row items-center"},[e("q-icon",{attrs:{name:"fas fa-hourglass-end",color:"blue-grey-7"}}),e("span",{staticClass:"text-white q-px-sm"},[t._v("\n                  "+t._s(t.humantime(s.updated_at))+"\n                ")])],1),e("div",{staticClass:"col row items-center"},[e("q-icon",{attrs:{name:"fas fa-stopwatch",color:"blue-grey-7"}}),e("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.duration(s)))])],1)]),e("div",{staticClass:"text-right"},[t.validateMarket(t.wndLog.order.status.id,t.wndLog.order.from.id)&&t.wndLog.order.status.id==s.id?e("div",{staticClass:"q-pt-md"}):t._e(),t.validateCEDIS(t.wndLog.order.status.id,s.id)&&t.wndLog.order.status.id==s.id?e("div",{staticClass:"q-pt-md"},[t.wndLog.order.status.id<=6?e("q-btn",{attrs:{outline:"",color:"green-13",label:t.msgCEDIS,disable:t.moving,loading:t.moving},on:{click:function(e){t.checkState(t.wndLog.order.status.id)?t.changeState(3):3==t.wndLog.order.status.id?t.changeState(7):5==t.wndLog.order.status.id?t.$router.push(`/pedidos/checkout/${t.wndLog.order.id}`):t.changeState(t.wndLog.order.status.id+1)}}}):t._e()],1):t._e()])])})),1),10==t.wndLog.order.status.id?e("div",{staticClass:"text-h6 text-light-blue-13 text-center text-"},[t._v("Pedido completado en "+t._s(t.totalduration(t.wndLog.order.log)))]):t._e()],1)],1):t._e()],1),t.timeElapsed.length?e("q-dialog",{model:{value:t.dialogOrders,callback:function(e){t.dialogOrders=e},expression:"dialogOrders"}},[e("q-card",{staticClass:"exo bg-darkl0 text-grey-5",attrs:{dark:""}},[e("q-card-section",{staticClass:"bg-darkl11 text-white"},[e("div",{staticClass:"text-h6"},[t._v("Seguimiento de Resurtido")])]),e("q-separator",{attrs:{color:"green-13"}}),e("q-card-section",[e("div",[e("div",[t._v("\n            Las siguientes "+t._s(t.timeElapsed.length)+" ordenes no se han surtido:\n            "),e("q-scroll-area",{staticStyle:{height:"40vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},t._l(t.timeElapsed,(function(s,a){return e("div",{key:a,staticClass:"text-subtitle2 text-left text-green-13"},[e("q-avatar",{staticClass:"text-green-13",attrs:{size:"md",icon:"fas fa-circle"}}),e("span",{staticClass:"text-bold"},[t._v(t._s(`${s.id}`))]),e("q-space"),e("q-avatar",{staticClass:"text-amber-13",attrs:{size:"md",icon:"fas fa-arrow-circle-right"}}),e("span",{staticClass:"text-amber-13"},[t._v(t._s(`Destino: ${s.from.alias}`))]),e("q-space"),e("q-avatar",{staticClass:"text-grey-7",attrs:{size:"md",icon:"timer"}}),e("span",{staticClass:"text-bold text-grey-7"},[t._v(t._s(`${t.humantime(s.updated_at)}`))]),e("q-separator",{attrs:{horizontal:"",color:"grey-9"}})],1)})),0)],1)])]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"green-13"},on:{click:function(e){t.alertOrders,t.setTime,t.findCards=!0}}})],1)],1)],1):t._e(),e("q-dialog",{model:{value:t.dialogOrdersFirst,callback:function(e){t.dialogOrdersFirst=e},expression:"dialogOrdersFirst"}},[t.timeOrdersFirst.length?e("q-card",{staticClass:"exo bg-darkl0 text-grey-5",attrs:{dark:""}},[e("q-card-section",{staticClass:"bg-darkl11 text-white"},[e("div",{staticClass:"text-h6"},[t._v("Seguimiento de Resurtido")])]),e("q-separator",{attrs:{color:"green-13"}}),e("q-card-section",[e("div",{staticClass:"row items-center justify-center"},[e("div",{staticClass:"col-md-5 col-xs-5 col-5 text-center"},[t._v("\n            Las siguientes "+t._s(t.timeOrdersFirst.length)+" ordenes no se han surtido:\n            "),e("q-scroll-area",{staticStyle:{height:"40vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},t._l(t.timeOrdersFirst,(function(s,a){return e("div",{key:a,staticClass:"text-subtitle2 text-left text-green-13"},[e("q-avatar",{staticClass:"text-green-13",attrs:{size:"md",icon:"fas fa-circle"}}),e("span",{staticClass:"text-bold"},[t._v(t._s(`${s.id}`))]),e("q-space"),e("q-avatar",{staticClass:"text-amber-13",attrs:{size:"md",icon:"fas fa-arrow-circle-right"}}),e("span",{staticClass:"text-amber-13"},[t._v(t._s(`Destino: ${s.from.alias}`))]),e("q-space"),e("q-avatar",{staticClass:"text-grey-7",attrs:{size:"md",icon:"timer"}}),e("span",{staticClass:"text-bold text-grey-7"},[t._v(t._s(`${t.humantime(s.updated_at)}`))]),e("q-separator",{attrs:{horizontal:"",color:"grey-9"}})],1)})),0)],1)])]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"green-13"},on:{click:function(e){t.alertOrders,t.setTime,t.findCards=!0}}})],1)],1):t._e()],1),e("q-dialog",{model:{value:t.wndStore.state,callback:function(e){t.$set(t.wndStore,"state",e)},expression:"wndStore.state"}},[e("DeliveryOpt",{directives:[{name:"show",rawName:"v-show",value:t.wndStore.state&&t.checkState(t.wndLog.order.status.id),expression:"wndStore.state && checkState(wndLog.order.status.id)"}],attrs:{orders:t.wndLog.order,data:t.grocerAccnt,ordersAll:t.ordersdb,state:1},on:{change:t.stateDxDiag}})],1)],1)},i=[],r=(s("caad"),s("bd4c")),o=s("bd9f"),n=s("c4e4"),l=function(){var t=this,e=t._self._c;return e("q-slide-transition",{staticClass:"q-ma-sm full-height",attrs:{"transition-show":"slide-right","transition-hide":"slide-left"}},[e("div",{staticStyle:{width:"600px"}},[e("q-card",{staticClass:"exo bg-darkl0 text-grey-5 full-height"},[e("q-card-section",[e("q-btn",{attrs:{icon:"fas fa-arrow-circle-left",color:"green-13",flat:"",roun:"",label:"Regresar"},on:{click:function(e){return t.returnState(!1,{},{},{})}}}),e("q-input",{staticClass:"q-pa-md",attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar (Disponibilidad ó Nombre)"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"text-green-13",attrs:{name:"filter_alt"}})]},proxy:!0}]),model:{value:t.selectWarehouse,callback:function(e){t.selectWarehouse=e},expression:"selectWarehouse"}}),e("q-scroll-area",{staticStyle:{height:"80vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("q-table",{attrs:{grid:"","rows-per-page-options":[0],dark:"","row-key":"id",columns:t.tableorders.columns,data:t.destructuringData(this.data),filter:t.selectWarehouse},scopedSlots:t._u([{key:"item",fn:function(s){return[e("div",{staticClass:"col col-xs-12 col-sm-6"},[e("q-card",{staticClass:"justify-center items-center text-justify bg-darkl0 shadow-1 q-ma-sm"},[e("div",{staticClass:"col items-center text-center"},[e("q-avatar",{staticClass:"bg-none",attrs:{size:"100px"}},[e("q-img",{staticClass:"bg-darkl0 q-pa-md",attrs:{transition:"slide-up",ratio:"1",src:"Surtiendo"==s.row.state?"https://image.flaticon.com/icons/png/512/3595/3595827.png":"https://image.flaticon.com/icons/png/512/1108/1108334.png"}})],1)],1),e("q-card-actions",[e("div",{staticClass:"col-12 text-h6 text-center text-grey-12 text-subtitle1",staticStyle:{height:"50px"}},[t._v("\n                      "+t._s(s.row.complete_name.trim())+"\n                    ")]),e("div",{class:`col-auto text-subtitle2 ${s.row.color}`},[e("q-icon",{class:s.row.color,attrs:{name:s.row.icon}}),t._v("\n                      "+t._s(s.row.state)+"\n                    ")],1),e("q-space"),e("q-stepper-navigation",[e("q-btn",{class:`self-end ${s.row.color}`,attrs:{rounded:"",flat:"",icon:"double_arrow",disable:s.row.disable},on:{click:function(e){return t.returnState(!1,t.orders,s.row,t.state)}}})],1)],1)],1)],1)]}}])})],1)],1)],1)],1)])},d=[],c={props:{data:{type:Array,default:[]},orders:{type:Object,default:[]},state:{type:Number,default:0},ordersAll:{type:Array,default:[]}},data(){return{thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#00e676",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#00e676",width:"9px",opacity:.2},optStoreDisplay:[],selectWarehouse:void 0,tableorders:{columns:[{name:"id",align:"left",label:"Folio",field:t=>t.id,sortable:!0},{name:"name",align:"left",label:"Nombre",field:t=>t.complete_name.trim(),sortable:!0},{name:"state",align:"center",label:"Estado",field:"state",sortable:!0}]},initpagination:{sortBy:"id",descending:!1,rowsPerPage:6},newState:!1}},methods:{returnState(t,e,s,a){let i={_state:t,_data:this.structuredDataDelivery(e,s,a)};this.$emit("change",i)},print(t,e,s){console.log(t),console.log(this.structuredDataDelivery(t,e,s))}},computed:{destructuringData(){return t=>{let e=t,s=[],a=0;for(let i=0;i<e.length;i++)a=this.ordersAll.findIndex(((t,s)=>t.log&&3===t.log.length&&t.log[2].details.actors.id===e[i].id)),console.log(a),a>0?s.push({id:e[i].id,name:e[i].names,surname_mat:e[i].surname_mat,surname_pat:e[i].surname_pat,complete_name:`${e[i].names} ${e[i].surname_pat} ${e[i].surname_mat}`,state:this.ordersAll[a].log[2].details.actors.id==e[i].id?this.ordersAll[a].log[2].details.actors.state:"",icon:"not_interested",color:"text-red-13",disable:!0}):s.push({id:e[i].id,name:e[i].names,surname_mat:e[i].surname_mat,surname_pat:e[i].surname_pat,complete_name:`${e[i].names} ${e[i].surname_pat} ${e[i].surname_mat}`,state:"Disponible",icon:"verified",color:"text-green-13",disable:!1}),a=0;return s}},structuredDataDelivery(){return(t,e,s)=>{let a=this.$moment(),i=localStorage.getItem("profile");i=JSON.parse(i);let r="";switch(s){case 0:r="Disponible";break;case 1:r="Surtiendo";break;case 2:r="En uso";default:r="No Disponible";break}let o={id:e.id,name:e.name,surname_mat:e.surname_mat,surname_pat:e.surname_pat,complete_name:`${e.name} ${e.surname_mat} ${e.surname_pat}`,state:r,update:a.format("YYYY-MM-DD HH:mm"),products:t.products,managerState:{id:i.me.id,manager_name:i.me.names,manager_mat:i.me.surname_mat,manager_pat:i.me.surname_pat,complete_name:`${i.me.names} ${i.me.surname_mat} ${i.me.surname_pat}`,workpoint:i.workpoint.id,workpoint_alias:i.workpoint.name,updateChanges:a.format("YYYY-MM-DD HH:mm")},to:t.to};return o}}}},m=c,u=s("2877"),p=s("e9c1"),g=s("f09f"),h=s("a370"),b=s("9c40"),v=s("27f9"),f=s("0016"),x=s("4983"),w=s("eaac"),_=s("cb32"),C=s("068f"),y=s("4b7e"),S=s("2c91"),k=s("b19c"),q=s("eebe"),D=s.n(q),$=Object(u["a"])(m,l,d,!1,null,null,null),L=$.exports;D()($,"components",{QSlideTransition:p["a"],QCard:g["a"],QCardSection:h["a"],QBtn:b["a"],QInput:v["a"],QIcon:f["a"],QScrollArea:x["a"],QTable:w["a"],QAvatar:_["a"],QImg:C["a"],QCardActions:y["a"],QSpace:S["a"],QStepperNavigation:k["a"]});var O=s("19e8"),I={components:{DeliveryOpt:L},data(){return{ordersFill:[],selectWorkpoint:void 0,workpointsOpc:void 0,workpoints:[],findCards:!1,today:!1,timeSelected:{label:"20 Min",value:20},dialogOrders:!1,dialogOrdersFirst:!1,tab:"mails",dataOrder:[],splitterModel:20,msgCEDIS:"",grocerAccnt:[],thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#525252",width:"5px",opacity:.75},wndStore:{state:!1,order:void 0},searchID:"",barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#525252",width:"9px",opacity:.2},visibleColumns:[],columns:[],data:[],dashboardPagination:{descending:!1,page:1,rowsPerPage:5},step:1,selectDelivery:void 0,selectWarehouse:void 0,selectMovil:void 0,optDeliveryDisplay:[{id:0,name:"Carlos Mejia Ramos",state:"Disponible",icon:"verified",color:"text-green-13",disable:!1},{id:1,name:"Daniel Jacobo Vite",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:2,name:"Jose Luis Martinez",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:3,name:"Ignacio Ambriz",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:4,name:"Uriel Moreno",state:"Disponible",icon:"not_interested",color:"text-green-13",disable:!1}],optMovilDisplay:[{id:0,name:"Moto",state:"Disponible",icon:"verified",color:"text-green-13",disable:!1},{id:1,name:"Motorratona",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:2,name:"Camioneta",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:3,name:"Diablito de Carga",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:4,name:"Plataforma de Carga",state:"Disponible",icon:"not_interested",color:"text-green-13",disable:!1}],title:"Resurtido | Dashboard",filtdash:{searcher:"",view:[],crude:null},index:void 0,sounds:{creating:new Audio("sounds/creating.mp3"),created:new Audio("sounds/waiting.mp3"),moved:new Audio("sounds/moved.mp3"),removed:new Audio("sounds/removed.mp3"),done:new Audio("sounds/done.mp3")},wndLog:{state:!1,order:void 0},store:"",moving:!1,print:{state:!1},timestamp:[{label:"10 Min",value:10},{label:"15 Min",value:15},{label:"20 Min",value:20},{label:"25 Min",value:25},{label:"30 Min",value:30}]}},async beforeMount(){this.$store.commit("Requisitions/setHeaderState",!0),this.$store.commit("Requisitions/setFooterState",!0);let t={_rol:[7]};this.grocerAccnt=await n["a"].get(t),this.$store.commit("Requisitions/setHeaderTitle",this.title);let e=0,s=[3,7,8,10,11],a=await O["a"].index();this.workpoints.push({label:"Todos",value:-1}),a.filter((t=>2==t.type.id)).map((t=>this.workpoints.push({label:t.name,value:t.id})));for(let i=0;i<this.getStatesLog.length;i++)e=this.checkPermissions?this.isCEDIS(i):this.isMarket(i),this.visibleColumns.push(this.getStatesLog[e].name),this.columns.push({name:this.getStatesLog[i].name,align:"left",label:this.getStatesLog[i].name,field:t=>this.buildlog(t,"resp"),sortable:!0,disable:!!s.includes(i)});this.visibleColumns=this.visibleColumns.filter(((t,e,s)=>s.indexOf(t)==e)),this.visibleColumns.length>0?(localStorage.setItem("setup",JSON.stringify(this.visibleColumns)),localStorage.setItem("setupTable",JSON.stringify(this.columns))):(this.visibleColumns=JSON.parse(localStorage.getItem("setup")),this.columns=JSON.parse(localStorage.getItem("setupTable"))),this.dialogOrders=!!this.timeElapsed,this.dialogOrders&&this.alertOrders()},methods:{stateDxDiag(t){if(void 0==t._data.id)this.wndStore.state=t._state,this.wndLog.state=!this.wndStore.state;else{this.wndStore.state=t._state,this.wndLog.state=!this.wndStore.state;let e=t._data?t._data:[];console.log(e),this.dataOrder=e,this.changeState()}},setStorage(t,e){return this.step=e,console.log(e),3==e&&(this.selectWarehouse=t),4==e&&(this.selectDelivery=t),5==e&&(this.selectMovil=t),this.getObject()},getObject(){let t={store:this.selectWarehouse,delivery:this.selectDelivery,movil:this.selectMovil};return console.log(t),t},reprint(){console.log("reimprimiendo");let t={_requisition:this.wndLog.order.id};this.print.state=!0,o["a"].reprint(t).then((t=>{console.log(t),this.print.state=!1;let e=this.ordersdb.findIndex((t=>t.id==this.wndLog.order.id));this.$store.commit("Requisitions/printed",this.ordersdb[e])})).catch((t=>{console.log(t)}))},showLog(t){console.log("=============================================="),console.log(`===============>> ${t} <<===============`),console.log("==============================================");let e=this.ordersdb.findIndex((e=>e.id==t));if(this.wndLog.order=this.ordersdb[e],this.wndLog.order.log.length>2)try{let t=this.grocerAccnt.findIndex((t=>t.id==this.wndLog.order.log[2].details.actors.id));console.log(t);let e=this.structuredDataDelivery(this.wndLog.order,this.grocerAccnt[t],0);this.dataOrder=e}catch(s){console.log(s)}this.wndLog.state=!0},changeState(t=null){this.moving=!0;let e=t||parseInt(this.wndLog.order.status.id)+1,s={id:this.wndLog.order.id,_status:e,_actors:this.dataOrder},a="";this.sounds.moved;this.wndStore.state=2==this.wndLog.order.id,console.log(e,s,this.wndLog.order.id),o["a"].nextstep(s).then((t=>{console.log(t.data);let s=t.data.updates;this.wndLog.state=!1,this.moving=!1;let i,r=this.ordersdb.findIndex((t=>t.id==this.wndLog.order.id)),o=[],n=[];n=this.ordersdb[r],i=s.status,o=this.ordersdb[r].log.concat(s.log),console.log(o),this.$q.notify({message:a,color:"positive",icon:"done",position:"bottom-right"}),5==e&&this.$router.push(`/pedidos/checkout/${this.wndLog.order.id}`),this.$sktRestock.emit("order_changestate",{state:i,profile:this.profile,log:o,order:this.ordersdb[r],from:this.workin,room:this.socketroom})})).catch((t=>{console.log(t)}))},async alertOrders(){return new Promise((t=>{this.timeOrdersFirst.length?(console.log(this.timeOrdersFirst),console.log("tiempo real",this.todayState(this.timeOrdersFirst[0])),console.log("tiempo restante",this.timeSelected.value-this.todayState(this.timeOrdersFirst[0])),console.log("entro"),setTimeout((()=>{this.dialogOrdersFirst=!0}),6e4*(this.timeSelected.value-this.todayState(this.timeOrdersFirst[0])))):setInterval((()=>{console.log(this.timeSelected.value),this.dialogOrders=!0,t("")}),6e4*this.timeSelected.value)}))},searchMarket(){this.searchID=this.searchID.length||this.selectWorkpoint?this.selectWorkpoint.label:this.searchID,this.searchID="Todos"==this.selectWorkpoint.label?"":this.searchID}},computed:{orderColumns(){let t=[],e=[];t.push(this.visibleColumns.map((t=>this.getStatesLog.findIndex((e=>t==e.name)))));let s=t[0].sort(((t,e)=>t-e));return this.getStatesLog.map((t=>s.map((s=>t.id-1==s?e.push(t.name):"")))),this.visibleColumns=e.length?e:this.visibleColumns,this.visibleColumns},markedCard(){return t=>this.dialogOrdersFirst?this.timeOrdersFirst.find((e=>e.id==t.id)):this.timeElapsed.find((e=>e.id==t.id))},setTime(){return setTimeout((()=>{this.findCards=!1}),3e3)},appsounds(){return this.$store.getters["Multimediapp/sounds"]},workin(){return this.$store.getters["Account/workin"]},orders(){return this.$store.getters["Requisitions/ordersDash"]},profile(){return this.$store.getters["Account/profile"]},appconnected(){return!!this.$sktRestock&&this.$sktRestock.connected},structuredDataDelivery(){return(t,e,s)=>{let a=this.$moment();console.log(e);let i=localStorage.getItem("profile");i=JSON.parse(i);let r="";switch(s){case 0:r="Disponible";break;case 1:r="Surtiendo";break;case 2:r="En uso";default:r="No Disponible";break}let o={id:e.id,name:e.names,surname_mat:e.surname_mat,surname_pat:e.surname_pat,complete_name:`${e.names} ${e.surname_mat} ${e.surname_pat}`,state:r,update:a.format("YYYY-MM-DD HH:mm"),products:t.products,managerState:{id:i.me.id,manager_name:i.me.names,manager_mat:i.me.surname_mat,manager_pat:i.me.surname_pat,complete_name:`${i.me.names} ${i.me.surname_mat} ${i.me.surname_pat}`,workpoint:i.workpoint.id,workpoint_alias:i.workpoint.name,updateChanges:a.format("YYYY-MM-DD HH:mm")},to:t.to};return o}},ordersdb(){return this.orders.length?this.orders:[]},todayState(){return t=>{let e=Date.now(),s=Date.parse(t.updated_at),a=r["b"].getDateDiff(e,s,"minutes");return a}},todayStateDay(){return t=>{let e=Date.now(),s=Date.parse(t.updated_at),a=r["b"].getDateDiff(e,s,"days");return a}},timeElapsed(){return this.ordersdb.filter((t=>2==t.status.id&&this.todayState(t)>=this.timeSelected.value&&0==this.todayStateDay(t)))},timeOrdersFirst(){return this.ordersdb.filter((t=>2==t.status.id&&this.todayState(t)<=this.timeSelected.value&&0==this.todayStateDay(t)))},getStatesLog(){return this.$store.getters["Requisitions/getStates"]},orderManagement(){return t=>this.ordersdb.filter((e=>e.id.toString().includes(this.searchID)&&e.status.name==t||e.notes.toString().toLowerCase().includes(this.searchID)&&e.status.name==t||e.from.name.toString().includes(this.searchID)&&e.status.name==t))},noprinteds(){return this.orderForSupply.filter((t=>t.printed))},ismobile(){return this.$q.platform.is.mobile},avatar(){return t=>{let e=[4,8],s=[5,9],a=[1],i=[10],r=[2],o=[7],n=[6],l=[3],d=t+1;return e.includes(d)?"https://cdn-icons-png.flaticon.com/512/3329/3329534.png":s.includes(d)?"https://cdn-icons-png.flaticon.com/512/2979/2979677.png":i.includes(d)?"https://cdn-icons-png.flaticon.com/512/3595/3595827.png":r.includes(d)?"https://cdn-icons-png.flaticon.com/512/1632/1632670.png":l.includes(d)?"https://cdn-icons-png.flaticon.com/512/639/639339.png":o.includes(d)?"https://cdn-icons-png.flaticon.com/512/609/609361.png":n.includes(d)?"https://cdn-icons-png.flaticon.com/512/2936/2936949.png":a.includes(d)?"https://cdn-icons-png.flaticon.com/512/1570/1570717.png":"https://image.flaticon.com/icons/png/512/1674/1674229.png"}},buildlog(){return(t,e)=>{let s,a=t.log.findIndex((e=>t.status.id==e.id?e.id:101));switch(e){case"time":let e=Date.parse(t.log[a].created_at);s=r["b"].formatDate(e,"hh:mm a");break;case"avatar":return this.verifyStations;case"resp":return t.log[a].details.responsable}return s}},humantime(){return t=>{let e=Date.now(),s=Date.parse(t),a=r["b"].getDateDiff(e,s,"days");switch(a){case 0:return"Hoy, "+r["b"].formatDate(s,"hh:mm a");case 1:return"Ayer, "+r["b"].formatDate(s,"hh:mm a");default:return`Hace ${a} dias, `+r["b"].formatDate(s,"hh:mm a")}}},duration(){return t=>{let e=Date.parse(t.created_at),s=Date.parse(t.updated_at),a=r["b"].getDateDiff(s,e,"minutes");if(a<=59)return a+"m";{let t=parseFloat(a/60).toFixed(2).split(".");return`${t[0]}h ${t[1]}m`}}},ordersize(){return t=>{let e=t.length;if(e){let s=t.reduce(((t,e)=>parseInt(e.ordered.amount)+t),0);return[e,s]}return[0,0]}},totalduration(){return t=>{let e=Date.parse(t.filter((t=>1==t.id))[0].created_at),s=Date.parse(t.filter((t=>10==t.id))[0].created_at),a=r["b"].getDateDiff(s,e,"minutes");if(a<=59)return a+"m";{let t=parseFloat(a/60).toFixed(2).split(".");return`${t[0]}h ${t[1]}m`}}},socketroom(){return`${this.workin.workpoint.alias}`},validateMarket(){return(t,e)=>{let s=[1,8,9],a=[1,2,16,18];return!!a.includes(e)&&s.includes(t)}},validateCEDIS(){return(t,e)=>{let s=[2,3,5,6,7,9,10],a=["Iniciar surtido","Iniciar Envio"];return this.msgCEDIS=s.includes(t)?a[s.indexOf(t)]:"",s.includes(t)}},checkState(){return t=>{let e=2==t;return e}},isCEDIS(){return t=>{let e=1==t||2==t||4==t||5==t||6==t||9==t?t:0;return e}},isMarket(){return t=>{let e=0==t||1==t||7==t||8==t||9==t?t:0;return e}},checkPermissions(){let t=JSON.parse(localStorage.getItem("workin")),e=[1,2,16,18];return!!e.includes(t.workpoint.id)},verifyStations(){let t=[{name:"Navidad",img:"https://cdn-icons-png.flaticon.com/512/1674/1674274.png",months:[1,10,11,12]},{name:"Mes Patrio",img:"https://cdn-icons-png.flaticon.com/512/1674/1674234.png",months:[9]},{name:"Normal",img:"https://cdn-icons-png.flaticon.com/512/1674/1674229.png",months:[2,3,4,5,6,7,8]}],e=this.$moment(),s=t.find((t=>t.months.includes(e.month()+1)?t.img:""));return s.img},currentStep(){return t=>t?t.status:null},getTicket(){return t=>this.currentStep(t)&&this.currentStep(t).id>=6&&t.log[4].details.order?`${t.log[4].details.order.serie} - ${t.log[4].details.order.ticket}`:"Error al Generar Folio"}}},M=I,Q=(s("addf"),s("9989")),A=s("ddd8"),F=s("65c6"),E=s("1c1c"),j=s("3b73"),z=s("24e8"),N=s("05eb"),R=s("74af"),W=s("eb85"),T=s("714f"),Y=s("7f67"),P=Object(u["a"])(M,a,i,!1,null,"eed07be2",null);e["default"]=P.exports;D()(P,"components",{QPage:Q["a"],QSelect:A["a"],QIcon:f["a"],QInput:v["a"],QCard:g["a"],QToolbar:F["a"],QSpace:S["a"],QAvatar:_["a"],QScrollArea:x["a"],QCardSection:h["a"],QList:E["a"],QExpansionItem:j["a"],QDialog:z["a"],QBtn:b["a"],QTimeline:N["a"],QTimelineEntry:R["a"],QSeparator:W["a"],QCardActions:y["a"]}),D()(P,"directives",{Ripple:T["a"],ClosePopup:Y["a"]})}}]);