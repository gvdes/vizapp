(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{b2f0:function(t,e,s){"use strict";s("d0d8")},b6ba:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{class:t.ismobile?"":"q-pb-md overflow-hidden",style:t.ismobile?"":"max-width:100%;max-height:70vh;"},[s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"col-md-12 col-xs-12 col-12 row self-center items-center"},[s("div",{staticClass:"col-md-3 col-3 q-pr-lg"},[s("q-select",{staticClass:"exo",staticStyle:{"min-width":"150px"},attrs:{"transition-show":"jump-up","transition-hide":"jump-down",dark:"",color:"green-13",multiple:"",outlined:"",dense:"","options-dense":"","display-value":"Configuración","emit-value":"","map-options":"",options:t.columns,"option-value":"name"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"text-green-13",attrs:{name:"settings"}})]},proxy:!0}]),model:{value:t.visibleColumns,callback:function(e){t.visibleColumns=e},expression:"visibleColumns"}})],1),s("div",{staticClass:"col-md-3 col-3"},[[s("q-input",{attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar Folio"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchID,callback:function(e){t.searchID=e},expression:"searchID"}})]],2)]),s("div",{staticClass:"row justify-between full-width q-ma-sm"},t._l(t.visibleColumns,(function(e,a){return s("div",{key:a,staticClass:"col q-pa-xs"},[s("q-card",{staticClass:"bg-none"},[s("q-toolbar",{staticClass:"\n              q-mb-sm\n              text-green-13\n              bg-darkl1\n              text-uppercase text-thin\n              subtitle1\n            "},[t._v("\n            "+t._s(e)+"\n            "),s("q-space"),s("span",{staticClass:"text-white items-end q-pr-sm text-weight-bold"},[t._v(t._s(t.orderManagement(e).length))]),s("q-avatar",{staticClass:"q-pl-sm",attrs:{size:"sm",rounded:""}},[s("img",{attrs:{src:t.avatar(a,"toolbar")}})])],1)],1),s("q-scroll-area",{staticStyle:{height:"70vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[s("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.orderManagement(e),(function(e){return s("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"column bg-darkl1 q-mb-sm",attrs:{clickable:""},on:{click:function(s){return t.showLog(e.id)}}},[s("q-card-section",[s("div",{class:t.visibleColumns.length<8?"row justify-between items-center col-sm-3 col-md-4 col-xs-6":"column justify-between text-center items-center col-sm-3 col-md-4 col-xs-6"},[s("div",{staticClass:"col-3"},[s("div",{staticClass:"text-h5 text-white"},[t._v(t._s(e.id))]),s("div",{staticClass:"text-h6 text-light-blue"},[t._v("\n                      "+t._s(e.from.alias)+"\n                    ")]),s("div",{staticClass:"text-amber-13"},[t._v(t._s(e.notes))])]),s("div",{staticClass:"text-center col-auto"},[s("div",[s("q-avatar",{staticClass:"q-ma-sm",attrs:{size:"5rem",square:""}},[s("img",{attrs:{transition:"slide-up",src:t.buildlog(e,"avatar")}})])],1),s("div",[t._v(t._s(t.buildlog(e,"resp")))]),s("div",[s("span",{staticClass:"text-white text-bold"},[t._v(t._s(t.buildlog(e,"time")))])])])])])],1)})),1)],1)],1)})),0)]),s("q-dialog",{model:{value:t.wndLog.state,callback:function(e){t.$set(t.wndLog,"state",e)},expression:"wndLog.state"}},[t.wndLog.order?s("q-card",{staticClass:"exo bg-darkl0 text-grey-5",staticStyle:{width:"500px"}},[s("q-card-section",[s("div",{staticClass:"row text-white justify-between items-center"},[s("div",{staticClass:"text-h3"},[t._v("\n            "+t._s(t.wndLog.order.from.alias)+" "+t._s(t.wndLog.order.id)+"\n          ")]),s("div",{staticClass:"text-h6"},[s("div",[t._v("\n              "+t._s(t.ordersize(t.wndLog.order.products)[0])+"m\n              "+t._s(t.ordersize(t.wndLog.order.products)[1])+"p\n            ")]),t.wndLog.order&&t.wndLog.order.status.id>1?s("q-btn",{attrs:{icon:"print",flat:"",color:"green-13",loading:t.print.state,disable:t.print.state},on:{click:t.reprint}}):t._e()],1)]),s("q-timeline",{attrs:{dark:"",color:"green-13"}},t._l(t.wndLog.order.log,(function(e){return s("q-timeline-entry",{key:e.id,attrs:{subtitle:t.wndLog.order.status.id>2?e.details.responsable:"",title:e.name}},[s("div",{class:3==e.id&&e.details.actors?"q-pb-sm col row text-weight-bold text-body1":""},[s("div",{staticClass:"col-auto q-pr-sm"},[s("span",{staticClass:"text-green-13"},[3==e.id&&e.details.actors.managerState?s("q-icon",{staticClass:"q-pr-sm",attrs:{color:"blue-grey-7",name:"fas fa-truck-loading"}}):t._e(),t._v("\n                  "+t._s(3==e.id&&e.details.actors?e.details.actors.complete_name:"")+"\n                ")],1)]),s("div",{staticClass:"col-auto text-right"},[s("span",{staticClass:"text-white"},[t._v(t._s(3==e.id&&e.details.actors.managerState?t.humantime(e.details.actors.managerState.updateChanges):""))])])]),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col row items-center"},[s("q-icon",{attrs:{name:"fas fa-hourglass-start",color:"blue-grey-7"}}),s("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.humantime(e.created_at)))])],1),s("div",{staticClass:"col row items-center"},[s("q-icon",{attrs:{name:"fas fa-hourglass-end",color:"blue-grey-7"}}),s("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(e.updated_at==e.created_at?"--":t.humantime(e.updated_at)))])],1),s("div",{staticClass:"col row items-center"},[s("q-icon",{attrs:{name:"fas fa-stopwatch",color:"blue-grey-7"}}),s("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.duration(e)))])],1)]),s("div",{staticClass:"text-right"},[t.validateMarket(t.wndLog.order.status.id,t.wndLog.order.from.id)&&t.wndLog.order.status.id==e.id?s("div",{staticClass:"q-pt-md"},[s("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.wndStore.state,expression:"!wndStore.state"}],attrs:{outline:"",color:"green-13",label:"iniciar surtido",disable:t.moving,loading:t.moving},on:{click:function(e){t.wndStore.state=!t.wndStore.state}}})],1):t._e(),t.validateCEDIS(t.wndLog.order.status.id,e.id)&&t.wndLog.order.status.id==e.id?s("div",{staticClass:"q-pt-md"},[s("q-btn",{attrs:{outline:"",color:"teal-13",label:t.msgCEDIS,disable:t.moving,loading:t.moving},on:{click:function(e){t.checkState(t.wndLog.order.status.id)?(t.wndStore.state=!t.wndStore.state,t.wndLog.state=!t.wndLog.state):t.changeState(3==t.wndLog.order.status.id?7:t.wndLog.order.status.id+1)}}})],1):t._e()])])})),1),10==t.wndLog.order.status.id?s("div",{staticClass:"text-h6 text-light-blue-13 text-center text-"},[t._v("\n          Pedido completado en "+t._s(t.totalduration(t.wndLog.order.log))+"\n        ")]):t._e()],1)],1):t._e()],1),s("q-dialog",{model:{value:t.wndStore.state,callback:function(e){t.$set(t.wndStore,"state",e)},expression:"wndStore.state"}},[s("DeliveryOpt",{directives:[{name:"show",rawName:"v-show",value:t.wndStore.state&&t.checkState(t.wndLog.order.status.id),expression:"wndStore.state && checkState(wndLog.order.status.id)"}],attrs:{orders:t.wndLog.order,data:t.grocerAccnt,ordersAll:t.ordersdb,state:1},on:{change:t.stateDxDiag}})],1)],1)},i=[],r=s("bd4c"),o=s("bd9f"),n=s("1d6c"),l=s("c4e4"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-slide-transition",{staticClass:"q-ma-sm full-height",attrs:{"transition-show":"slide-right","transition-hide":"slide-left"}},[s("div",{staticStyle:{width:"600px"}},[s("q-card",{staticClass:"exo bg-darkl0 text-grey-5 full-height"},[s("q-card-section",[s("q-btn",{attrs:{icon:"fas fa-arrow-circle-left",color:"green-13",flat:"",roun:"",label:"Regresar"},on:{click:function(e){return t.returnState(!1,{},{},{})}}}),s("q-input",{staticClass:"q-pa-md",attrs:{dense:"",color:"green-13",dark:"",debounce:"0",placeholder:"Buscar (Disponibilidad ó Nombre)"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"text-green-13",attrs:{name:"filter_alt"}})]},proxy:!0}]),model:{value:t.selectWarehouse,callback:function(e){t.selectWarehouse=e},expression:"selectWarehouse"}}),s("q-scroll-area",{staticStyle:{height:"80vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[s("q-table",{attrs:{grid:"","rows-per-page-options":[0],dark:"","row-key":"id",columns:t.tableorders.columns,data:t.destructuringData(this.data),filter:t.selectWarehouse},scopedSlots:t._u([{key:"item",fn:function(e){return[s("div",{staticClass:"col col-xs-12 col-sm-6"},[s("q-card",{staticClass:"\n                    justify-center\n                    items-center\n                    text-justify\n                    bg-darkl0\n                    shadow-1\n                    q-ma-sm\n                  "},[s("div",{staticClass:"col items-center text-center"},[s("q-avatar",{staticClass:"bg-none",attrs:{size:"100px"}},[s("q-img",{staticClass:"bg-darkl0 q-pa-md",attrs:{transition:"slide-up",ratio:"1",src:"Surtiendo"==e.row.state?"https://image.flaticon.com/icons/png/512/3595/3595827.png":"https://image.flaticon.com/icons/png/512/1108/1108334.png"}})],1)],1),s("q-card-actions",[s("div",{staticClass:"\n                        col-12\n                        text-h6 text-center text-grey-12 text-subtitle1\n                      ",staticStyle:{height:"50px"}},[t._v("\n                      "+t._s(e.row.complete_name.trim())+"\n                    ")]),s("div",{class:"col-auto text-subtitle2 "+e.row.color},[s("q-icon",{class:e.row.color,attrs:{name:e.row.icon}}),t._v("\n                      "+t._s(e.row.state)+"\n                    ")],1),s("q-space"),s("q-stepper-navigation",[s("q-btn",{class:"self-end "+e.row.color,attrs:{rounded:"",flat:"",icon:"double_arrow",disable:e.row.disable},on:{click:function(s){return t.returnState(!1,t.orders,e.row,t.state)}}})],1)],1)],1)],1)]}}])})],1)],1)],1)],1)])},c=[],m=(s("498a"),{props:{data:{type:Array,default:[]},orders:{type:Object,default:[]},state:{type:Number,default:0},ordersAll:{type:Array,default:[]}},data(){return{thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#00e676",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#00e676",width:"9px",opacity:.2},optStoreDisplay:[],selectWarehouse:void 0,tableorders:{columns:[{name:"id",align:"left",label:"Folio",field:t=>t.id,sortable:!0},{name:"name",align:"left",label:"Nombre",field:t=>t.complete_name.trim(),sortable:!0},{name:"state",align:"center",label:"Estado",field:"state",sortable:!0}]},initpagination:{sortBy:"id",descending:!1,rowsPerPage:6},newState:!1}},methods:{returnState(t,e,s,a){let i={_state:t,_data:this.structuredDataDelivery(e,s,a)};this.$emit("change",i)},print(t,e,s){console.log(t),console.log(this.structuredDataDelivery(t,e,s))}},computed:{destructuringData(){return t=>{let e=t,s=[];for(let a=0;a<e.length;a++){let t=this.ordersAll.findIndex(((t,s)=>3==t.log.length&&t.log[2].details.actors.id==e[a].id?s:""));t>0?s.push({id:e[a].id,name:e[a].names,surname_mat:e[a].surname_mat,surname_pat:e[a].surname_pat,complete_name:`${e[a].names} ${e[a].surname_pat} ${e[a].surname_mat}`,state:this.ordersAll[t].log[2].details.actors.id==e[a].id?this.ordersAll[t].log[2].details.actors.state:"",icon:"not_interested",color:"text-red-13",disable:!0}):s.push({id:e[a].id,name:e[a].names,surname_mat:e[a].surname_mat,surname_pat:e[a].surname_pat,complete_name:`${e[a].names} ${e[a].surname_pat} ${e[a].surname_mat}`,state:"Disponible",icon:"verified",color:"text-green-13",disable:!1}),t--}return s}},structuredDataDelivery(){return(t,e,s)=>{let a=this.$moment();console.log(e);let i=localStorage.getItem("profile");i=JSON.parse(i);let r="";switch(s){case 0:r="Disponible";break;case 1:r="Surtiendo";break;case 2:r="En uso";default:r="No Disponible";break}let o={id:e.id,name:e.name,surname_mat:e.surname_mat,surname_pat:e.surname_pat,complete_name:`${e.name} ${e.surname_mat} ${e.surname_pat}`,state:r,update:a.format("YYYY-MM-DD HH:mm"),products:t.products,managerState:{id:i.me.id,manager_name:i.me.names,manager_mat:i.me.surname_mat,manager_pat:i.me.surname_pat,complete_name:`${i.me.names} ${i.me.surname_mat} ${i.me.surname_pat}`,workpoint:i.workpoint.id,workpoint_alias:i.workpoint.name,updateChanges:a.format("YYYY-MM-DD HH:mm")},to:t.to};return o}}}}),u=m,p=s("2877"),g=s("e9c1"),h=s("f09f"),b=s("a370"),v=s("9c40"),w=s("27f9"),f=s("0016"),_=s("4983"),x=s("eaac"),S=s("cb32"),y=s("068f"),C=s("4b7e"),k=s("2c91"),D=s("b19c"),q=s("eebe"),L=s.n(q),$=Object(p["a"])(u,d,c,!1,null,null,null),I=$.exports;L()($,"components",{QSlideTransition:g["a"],QCard:h["a"],QCardSection:b["a"],QBtn:v["a"],QInput:w["a"],QIcon:f["a"],QScrollArea:_["a"],QTable:x["a"],QAvatar:S["a"],QImg:y["a"],QCardActions:C["a"],QSpace:k["a"],QStepperNavigation:D["a"]});var M={components:{ToolbarAccount:n["a"],DeliveryOpt:I},data(){return{tab:"mails",dataOrder:[],splitterModel:20,msgCEDIS:"",grocerAccnt:[],thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#00e676",width:"5px",opacity:.75},wndStore:{state:!1,order:void 0},searchID:"",barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#00e676",width:"9px",opacity:.2},visibleColumns:[],columns:[],data:[],dashboardPagination:{descending:!1,page:1,rowsPerPage:5},step:1,selectDelivery:void 0,selectWarehouse:void 0,selectMovil:void 0,optDeliveryDisplay:[{id:0,name:"Carlos Mejia Ramos",state:"Disponible",icon:"verified",color:"text-green-13",disable:!1},{id:1,name:"Daniel Jacobo Vite",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:2,name:"Jose Luis Martinez",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:3,name:"Ignacio Ambriz",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:4,name:"Uriel Moreno",state:"Disponible",icon:"not_interested",color:"text-green-13",disable:!1}],optMovilDisplay:[{id:0,name:"Moto",state:"Disponible",icon:"verified",color:"text-green-13",disable:!1},{id:1,name:"Motorratona",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:2,name:"Camioneta",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:3,name:"Diablito de Carga",state:"Entregando",icon:"not_interested",color:"text-red-13",disable:!0},{id:4,name:"Plataforma de Carga",state:"Disponible",icon:"not_interested",color:"text-green-13",disable:!1}],title:"Resurtido | Dashboard",filtdash:{searcher:"",view:[],crude:null},index:void 0,sounds:{creating:new Audio("sounds/creating.mp3"),created:new Audio("sounds/waiting.mp3"),moved:new Audio("sounds/moved.mp3"),removed:new Audio("sounds/removed.mp3"),done:new Audio("sounds/done.mp3")},wndLog:{state:!1,order:void 0},store:"",moving:!1,print:{state:!1}}},async beforeMount(){let t={_rol:[7]};this.grocerAccnt=await l["a"].get(t),this.index=this.orders,this.$store.commit("Requisitions/getAllCleanDuplicates",this.orders),this.$store.commit("Requisitions/setHeaderTitle",this.title);let e=0,s=[3,4,5,7,8,10,11];for(let a=0;a<this.getStatesLog.length;a++)e=this.checkPermissions?this.isCEDIS(a):this.isMarket(a),this.visibleColumns.push(this.getStatesLog[e].name),this.columns.push({name:this.getStatesLog[a].name,align:"left",label:this.getStatesLog[a].name,field:t=>this.buildlog(t,"resp"),sortable:!0,disable:!!s.includes(a)});this.visibleColumns=this.visibleColumns.filter(((t,e,s)=>s.indexOf(t)==e)),this.visibleColumns.length>0?(localStorage.setItem("setup",JSON.stringify(this.visibleColumns)),localStorage.setItem("setupTable",JSON.stringify(this.columns))):(this.visibleColumns=JSON.parse(localStorage.getItem("setup")),this.columns=JSON.parse(localStorage.getItem("setupTable")))},beforeDestroy(){this.$sktRestock.emit("leave",{room:this.socketroom,user:this.profile})},methods:{stateDxDiag(t){if(void 0==t._data.id)this.wndStore.state=t._state,this.wndLog.state=!this.wndStore.state;else{this.wndStore.state=t._state,this.wndLog.state=!this.wndStore.state;let e=t._data?t._data:[];console.log(e),this.dataOrder=e,this.changeState()}},setStorage(t,e){return this.step=e,console.log(e),3==e&&(this.selectWarehouse=t),4==e&&(this.selectDelivery=t),5==e&&(this.selectMovil=t),this.getObject()},getObject(){let t={store:this.selectWarehouse,delivery:this.selectDelivery,movil:this.selectMovil};return console.log(t),t},reprint(){console.log("reimprimiendo");let t={_requisition:this.wndLog.order.id};this.print.state=!0,o["a"].reprint(t).then((t=>{console.log(t),this.print.state=!1;let e=this.ordersdb.findIndex((t=>t.id==this.wndLog.order.id));this.$store.commit("Requisitions/printed",this.ordersdb[e])})).catch((t=>{console.log(t)}))},showLog(t){let e=this.ordersdb.findIndex((e=>e.id==t));if(this.$store.commit("Requisitions/getCleanDuplicates",this.ordersdb[e]),this.wndLog.order=this.ordersdb[e],this.wndLog.order.log.length>2)try{let t=this.grocerAccnt.findIndex((t=>t.id==this.wndLog.order.log[2].details.actors.id));console.log(t);let e=this.structuredDataDelivery(this.wndLog.order,this.grocerAccnt[t],0);this.dataOrder=e}catch(s){this.$q.notify({message:"La orden contiene estados duplicados.",color:"negative",type:"negative",position:"center",timeout:1e3})}this.wndLog.state=!0},changeState(t=null){this.moving=!0;let e=t||parseInt(this.wndLog.order.status.id)+1,s={id:this.wndLog.order.id,_status:e,_actors:this.dataOrder},a="",i={id:e,name:void 0};this.sounds.moved;switch(this.wndStore.state=2==this.wndLog.order.id,e){case 3:console.log("Moviendo a surtiendo..."),i.name="Surtiendo",a="Surtido iniciado";break;case 5:console.log("Moviendo a En camino..."),i.name="En camino",a="Envio iniciado";break}o["a"].nextstep(s).then((t=>{let e=t.data.updates;this.wndLog.state=!1,this.moving=!1;let s,i=this.ordersdb.findIndex((t=>t.id==this.wndLog.order.id)),r=[];s=e.status,r=this.ordersdb[i].log.concat(e.log),console.log(r),this.$q.notify({message:a,color:"positive",icon:"done",position:"bottom-right"}),this.sounds.moved.play(),this.$sktRestock.emit("order_changestate",{state:s,profile:this.profile,log:r,order:this.ordersdb[i],from:this.workin,room:this.socketroom})})).catch((t=>{console.log(t)}))}},computed:{workin(){return this.$store.getters["Account/workin"]},orders(){return this.$store.getters["Requisitions/getOrders"]},profile(){return this.$store.getters["Account/profile"]},appconnected(){return!!this.$sktRestock&&this.$sktRestock.connected},structuredDataDelivery(){return(t,e,s)=>{let a=this.$moment();console.log(e);let i=localStorage.getItem("profile");i=JSON.parse(i);let r="";switch(s){case 0:r="Disponible";break;case 1:r="Surtiendo";break;case 2:r="En uso";default:r="No Disponible";break}let o={id:e.id,name:e.names,surname_mat:e.surname_mat,surname_pat:e.surname_pat,complete_name:`${e.names} ${e.surname_mat} ${e.surname_pat}`,state:r,update:a.format("YYYY-MM-DD HH:mm"),products:t.products,managerState:{id:i.me.id,manager_name:i.me.names,manager_mat:i.me.surname_mat,manager_pat:i.me.surname_pat,complete_name:`${i.me.names} ${i.me.surname_mat} ${i.me.surname_pat}`,workpoint:i.workpoint.id,workpoint_alias:i.workpoint.name,updateChanges:a.format("YYYY-MM-DD HH:mm")},to:t.to};return o}},ordersdb(){return this.orders.length?this.orders:[]},getStatesLog(){return this.$store.getters["Requisitions/getStates"]},orderManagement(){return t=>this.ordersdb.filter((e=>e.id.toString().includes(this.searchID)&&e.status.name==t))},noprinteds(){return this.orderForSupply.filter((t=>t.printed))},ismobile(){return this.$q.platform.is.mobile},avatar(){return t=>{let e=[4,8],s=[5,9],a=[1],i=[10],r=[2],o=[7],n=[6],l=[3],d=t+1;return e.includes(d)?"https://cdn-icons-png.flaticon.com/512/3329/3329534.png":s.includes(d)?"https://cdn-icons-png.flaticon.com/512/2979/2979677.png":i.includes(d)?"https://cdn-icons-png.flaticon.com/512/3595/3595827.png":r.includes(d)?"https://cdn-icons-png.flaticon.com/512/1632/1632670.png":l.includes(d)?"https://cdn-icons-png.flaticon.com/512/639/639339.png":o.includes(d)?"https://cdn-icons-png.flaticon.com/512/609/609361.png":n.includes(d)?"https://cdn-icons-png.flaticon.com/512/2936/2936949.png":a.includes(d)?"https://cdn-icons-png.flaticon.com/512/1570/1570717.png":"https://image.flaticon.com/icons/png/512/1674/1674229.png"}},buildlog(){return(t,e)=>{let s,a=t.log.findIndex((e=>t.status.id==e.id?e.id:101));switch(e){case"time":let e=Date.parse(t.log[a].created_at);s=r["b"].formatDate(e,"hh:mm a");break;case"avatar":return this.verifyStations;case"resp":return t.log[a].details.responsable}return s}},humantime(){return t=>{let e=Date.now(),s=Date.parse(t),a=r["b"].getDateDiff(e,s,"days");switch(a){case 0:return"Hoy, "+r["b"].formatDate(s,"hh:mm a");case 1:return"Ayer, "+r["b"].formatDate(s,"hh:mm a");default:return`Hace ${a} dias, `+r["b"].formatDate(s,"hh:mm a")}}},duration(){return t=>{let e=Date.parse(t.created_at),s=Date.parse(t.updated_at),a=r["b"].getDateDiff(s,e,"minutes");if(a<=59)return a+"m";{let t=parseFloat(a/60).toFixed(2).split(".");return`${t[0]}h ${t[1]}m`}}},ordersize(){return t=>{let e=this.checkPermissions?t.length:0;if(e){let s=t.reduce(((t,e)=>parseInt(e.ordered.amount)+t),0);return[e,s]}return[0,0]}},totalduration(){return t=>{let e=Date.parse(t.filter((t=>1==t.id))[0].created_at),s=Date.parse(t.filter((t=>10==t.id))[0].created_at),a=r["b"].getDateDiff(s,e,"minutes");if(a<=59)return a+"m";{let t=parseFloat(a/60).toFixed(2).split(".");return`${t[0]}h ${t[1]}m`}}},socketroom(){return`${this.workin.workpoint.alias}`},validateMarket(){return(t,e)=>{let s=[1,8,9],a=[1,2,16,18];return!!a.includes(e)&&s.includes(t)}},validateCEDIS(){return(t,e)=>{let s=[2,3,9],a=["Iniciar surtido","Entregar"];return this.msgCEDIS=s.includes(t)?a[s.indexOf(t)]:"",s.includes(t)}},checkState(){return t=>{let e=2==t||6==t;return e}},isCEDIS(){return t=>{let e=1==t||2==t||6==t||9==t?t:0;return e}},isMarket(){return t=>{let e=0==t||1==t||7==t||8==t||9==t?t:0;return e}},checkPermissions(){let t=JSON.parse(localStorage.getItem("workin")),e=[1,2,16,18];return!!e.includes(t.workpoint.id)},verifyStations(){let t=[{name:"Navidad",img:"https://cdn-icons-png.flaticon.com/512/1674/1674274.png",months:[1,10,11,12]},{name:"Mes Patrio",img:"https://cdn-icons-png.flaticon.com/512/1674/1674234.png",months:[9]},{name:"Normal",img:"https://cdn-icons-png.flaticon.com/512/1674/1674229.png",months:[2,3,4,5,6,7,8]}],e=this.$moment(),s=t.find((t=>t.months.includes(e.month()+1)?t.img:""));return s.img}}},A=M,Q=(s("b2f0"),s("9989")),E=s("ddd8"),O=s("65c6"),N=s("24e8"),R=s("05eb"),Y=s("74af"),j=s("714f"),P=Object(p["a"])(A,a,i,!1,null,"48d90bcd",null);e["default"]=P.exports;L()(P,"components",{QPage:Q["a"],QSelect:E["a"],QIcon:f["a"],QInput:w["a"],QCard:h["a"],QToolbar:O["a"],QSpace:k["a"],QAvatar:S["a"],QScrollArea:_["a"],QCardSection:b["a"],QDialog:N["a"],QBtn:v["a"],QTimeline:R["a"],QTimelineEntry:Y["a"]}),L()(P,"directives",{Ripple:j["a"]})},d0d8:function(t,e,s){}}]);