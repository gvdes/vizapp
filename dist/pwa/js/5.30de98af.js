(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{1957:function(t,e,s){t.exports=s.p+"img/success.14ee10ec.gif"},"2b3a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("q-header",{staticClass:"bg-darkl1",attrs:{unelevated:""}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.stateDelete,expression:"stateDelete"}],staticClass:"row items-stretch justify-between"},[i("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$router.push("/pedidos/dashboard")}}}),i("div",{staticClass:"row items-center col bg-dark divlcient"},[i("div",{staticClass:"q-pa-sm col text-center"},[i("div",{staticClass:"text--2"},[t._v("Destino:")]),i("div",{staticClass:"text-uppercase"},[t._v(t._s(t.setupToolbar.destiny))])]),i("div",{staticClass:"q-pa-sm col text-center"},[i("div",{staticClass:"text--2"},[t._v("Folio:")]),i("div",{staticClass:"text-bold"},[t._v(t._s(t.setupToolbar.verify))])])])],1),i("div",{staticClass:"row items-center justify-between q-mt-sm"},[i("div",{staticClass:"row text-center"},[i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"text--2"},[t._v("Modelos")]),i("span",{staticClass:"text-green-13 text-bold"},[t._v("\n            "+t._s(t.bucketToolbar.length)+"\n          ")])]),i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"text--2"},[t._v("Unidades")]),i("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.unityBucket))])]),i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"text--2"},[t._v("Cajas")]),i("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.boxesBucket))])])])])]),i("div",{staticClass:"q-mb-xl"},[i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[i("q-expansion-item",{attrs:{"expand-separator":"","header-class":"bg-indigo-5",icon:"content_paste",label:"Productos Solicitados: "+t.inBucket.length+" con un total de "+t.pzsInBucket+" pzs",caption:"Costo Total $ "+t.bucketCostInput,dark:""},model:{value:t.selectedInput,callback:function(e){t.selectedInput=e},expression:"selectedInput"}},[i("div",[i("q-scroll-area",{staticClass:"fill-window",attrs:{"thumb-style":t.thumbStyle.input,"bar-style":t.barStyle.input}},[i("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.inBucket,(function(e){return i("div",{key:e.id,staticClass:"q-py-md q-px-sm wrapper_prod",on:{click:function(s){return t.confirm(e)}}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"q-pr-sm"},[i("q-img",{attrs:{src:s("d3b1"),width:"50px"}})],1),i("div",{staticClass:"col q-pr-sm"},[i("div",[i("span",[t._v(t._s(e.code))]),t._v(" --\n                      "),i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.description))]),i("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(e.ordered.comments))])]),i("div",{staticClass:"text-right text-green-13"},[t._v("$ "+t._s(Math.floor(e.ordered.amount*e.cost)))])])])})),0)],1)],1)]),i("q-expansion-item",{attrs:{"expand-separator":"","header-class":"bg-teal-10",icon:"content_paste_go",label:"Contados: "+t.outBucket.length+" con un total de "+t.pzsOutBucket+" pzs",caption:"Costo Total $ "+t.bucketCostDelivered,dark:"","expand-icon-class":"text-white"},model:{value:t.selectedOutput,callback:function(e){t.selectedOutput=e},expression:"selectedOutput"}},[t.currentStep&&t.currentStep.id<=5?i("div",[i("q-scroll-area",{staticClass:"fill-window",attrs:{"thumb-style":t.thumbStyle.input,"bar-style":t.barStyle.input}},[i("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.outBucket,(function(e){return i("div",{key:e.id,staticClass:"q-py-md q-px-sm wrapper_prod",on:{click:function(s){return t.edit(e)}}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"q-pr-sm"},[i("q-img",{attrs:{src:s("d3b1"),width:"50px"}})],1),i("div",{staticClass:"col q-pr-sm"},[i("div",{staticClass:"text-weight-bold"},[i("span",[t._v(t._s(e.code))]),t._v(" --\n                      "),i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.description))]),i("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(e.ordered.comments))]),i("div",{staticClass:"col text--2"},[t._v(t._s(e.metsupply.name)+" "+t._s(e.ordered.amount)+t._s(1!=e.metsupply.id?" ("+e.units+" pzs)":"")+", PU: $"+t._s(e.cost))])]),i("div",{staticClass:"text-right text-green-13"},[t._v("$ "+t._s(Math.floor(e.ordered.amount*e.cost)))])])])})),0)],1)],1):i("div",{staticClass:"q-ma-xs"},[i("span",{staticClass:"text-h6 text-grey-5 text-weight-bold"},[t._v("\n            Folio Generado:\n            "),i("span",{staticClass:"text-green-13"},[t._v(t._s(t.getTicket))])]),i("q-scroll-area",{staticStyle:{height:"70vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle.input,"bar-style":t.barStyle.input}},[i("div",{staticClass:"q-pa-xs"},[i("q-markup-table",{staticClass:"bg-darkl0",attrs:{dark:"",flat:"",bordered:""}},[i("thead",{staticClass:"bg-dark"},[i("tr",[i("th",{staticClass:"text-center"},[t._v("Solicitado")]),i("th",{staticClass:"text-center"},[t._v("Contado")]),i("th",{staticClass:"text-center"},[t._v("Estado")])])]),i("tbody",t._l(t.outBucket,(function(e){return i("tr",{key:e.id,on:{click:function(s){return t.edit(e)}}},[i("td",{staticClass:"q-pa-xs-xs no-margin",staticStyle:{"max-width":"15%"}},[i("div",{staticClass:"row items-center no-wrap"},[i("div",{staticClass:"q-pr-sm"},[i("q-img",{attrs:{src:s("d3b1"),width:"3rem"}})],1),i("div",{staticClass:"col q-pr-sm"},[i("div",[i("span",[t._v(t._s(e.code))]),t._v(" --\n                            "),i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.description))]),i("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(e.ordered.comments))]),i("div",{staticClass:"col text--2"},[t._v(t._s(e.metsupply.name)+" "+t._s(e.ordered.units)+t._s(1!=e.metsupply.id?" ("+e.ordered.units+" pzs)":"")+", PU: $"+t._s(e.cost))])])])]),i("td",{staticClass:"q-pa-xs-xs no-margin",staticStyle:{"max-width":"15%"}},[i("div",{staticClass:"row items-center no-wrap"},[i("div",{staticClass:"q-pr-sm"},[i("q-img",{attrs:{src:s("d3b1"),width:"3rem"}})],1),i("div",{staticClass:"col q-pr-sm"},[i("div",[i("span",[t._v(t._s(e.code))]),t._v(" --\n                            "),i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.description))]),i("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(e.ordered.comments))]),i("div",{staticClass:"col text--2"},[t._v(t._s(e.metsupply.name)+" "+t._s(e.ordered.amount)+t._s(1!=e.metsupply.id?" ("+e.ordered.units+" pzs)":"")+", PU: $"+t._s(e.cost))])])])]),i("td",{staticClass:"q-pa-xs-xs no-margin",staticStyle:{"max-width":"8%"}},[i("div",{staticClass:"text-center items-center justify-center"},[i("q-avatar",{class:0==t.stateChangesDelivery(e)?"text-red-13":"text-green-13",attrs:{icon:0==t.stateChangesDelivery(e)?"fas fa-exclamation-triangle":"far fa-check-circle"}}),i("q-separator",{staticClass:"q-ma-xs self-center",attrs:{horizontal:"",color:"grey-8"}}),i("span",[t._v(t._s(0==t.stateChangesDelivery(e)?"Cantidades Indistintas":"Cantidades Exactas"))]),i("div",{staticClass:"text-amber-13"},[t._v(t._s(e.metsupply.name)+" "+t._s(e.ordered.amount)+t._s(1!=e.metsupply.id?" ("+e.ordered.units+" pzs)":""))])],1)])])})),0)])],1)])],1)])],1)],1),t.currentStep&&5==t.currentStep.id?i("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndCounter.state,callback:function(e){t.$set(t.wndCounter,"state",e)},expression:"wndCounter.state"}},[t.wndCounter.product?[i("q-card",{staticClass:"bg-darkl1 text-white exo"},[i("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v("CONFIRMAR PRODUCTO")]),i("q-separator"),i("ProductAOE",{attrs:{product:t.wndCounter.product,client:{},blockunitsupply:"",allow_innerpack:""},on:{cancel:t.cancelAOEs,confirm:t.productConfirm,remove:function(e){t.wndCounter.state=!t.wndCounter.state}}})],1)]:t._e()],2):t._e(),t.currentStep&&5==t.currentStep.id?i("q-dialog",{staticClass:"exo",attrs:{position:"bottom"},on:{hide:t.cancelAOEs},model:{value:t.wndEditor.state,callback:function(e){t.$set(t.wndEditor,"state",e)},expression:"wndEditor.state"}},[t.wndEditor.product?[i("q-card",{staticClass:"bg-darkl1 text-white exo"},[i("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v("EDITAR PRODUCTO")]),i("q-separator"),i("ProductAOE",{attrs:{product:t.wndEditor.product,client:{},blockunitsupply:"",allow_innerpack:""},on:{confirm:t.productEdit,cancel:t.cancelAOEs,remove:t.productDelete}})],1)]:t._e()],2):t._e(),i("q-dialog",{attrs:{persistent:""},model:{value:t.alert.state,callback:function(e){t.$set(t.alert,"state",e)},expression:"alert.state"}},[i("q-card",{staticClass:"exo bg-darkl0 text-grey-5",attrs:{dark:""}},[i("q-card-section",{staticClass:"bg-darkl11 text-white"},[i("div",{staticClass:"text-h6"},[t._v(t._s(t.alert.titleMessage))])]),i("q-separator",{attrs:{color:"green-13"}}),i("q-card-section",[i("div",{staticClass:"row items-center justify-center"},[i("div",{staticClass:"col-md-6 col-6 text-center"},[i("img",{attrs:{width:"40%",src:s("1957"),alt:""}})]),i("div",{staticClass:"col-md-4 col-4 text-left"},[i("div",{staticClass:"text-h5 exo-med text-green-13"},[t._v(t._s(t.alert.messageAlert))])])])]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"green-13"},on:{click:function(e){t.wndCounter.state=!0}}})],1)],1)],1),i("q-dialog",{attrs:{persistent:""},model:{value:t.dialogState.state,callback:function(e){t.$set(t.dialogState,"state",e)},expression:"dialogState.state"}},[i("q-card",{staticClass:"exo text-grey-5",staticStyle:{background:"#0f2126"},attrs:{dark:""}},[i("q-card-section",{staticClass:"bg-darkl11 text-white"},[i("div",{staticClass:"text-h6"},[t._v("CheckOut | Resurtido")])]),i("q-separator",{attrs:{color:"green-13"}}),i("q-card-section",[i("div",{staticClass:"column items-center justify-center"},[i("div",{staticClass:"col-md-12 col-12 text-center"},[i("img",{attrs:{width:"100%",src:s("34d5"),alt:""}})]),i("div",{staticClass:"col-md-4 col-4 text-left"},[i("div",{staticClass:"text-subtitle1 exo-med text-center"},[t._v(t._s(t.dialogState.message))])])])]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"green-13"},on:{click:function(e){t.wndCounter.state=!0,t.$router.push("/pedidos/dashboard")}}})],1)],1)],1),i("q-dialog",{attrs:{persistent:t.wndSending.persistent,position:"bottom"},model:{value:t.wndSending.state,callback:function(e){t.$set(t.wndSending,"state",e)},expression:"wndSending.state"}},[i("q-card",{staticClass:"bg-darkl1 text-white exo"},[i("q-card-section",{staticClass:"text-h6 bfv"},[t._v("Confirmar Pedido...")]),i("q-btn-group",{attrs:{spread:""}},[i("q-btn",{staticClass:"q-py-md",attrs:{flat:"",label:"Confirmar",color:"positive"},on:{click:t.nextStep}}),i("q-btn",{attrs:{flat:"",label:"Cancelar",color:"amber-14"},on:{click:function(e){t.wndSending.state=!1}}})],1)],1)],1),i("q-footer",{staticClass:"bg-darkl1 text-white"},[i("div",{staticClass:"q-pa-xs row items-center"},[i("div",{staticClass:"col text-center"},[i("q-input",{ref:"searcher",staticClass:"text-uppercase",attrs:{filled:"",dark:"",autofocus:"",dense:"",label:"",color:"green-13",type:t.iptsearch.type},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.codeDefine.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-btn",{attrs:{dense:"",flat:"",rounded:"",icon:t.iptsearch.icon},on:{click:t.toogleIptSearch}})]},proxy:!0},{key:"append",fn:function(){return[t.definitor.length?i("q-btn",{attrs:{icon:"close",dense:"",rounded:"",flat:""},on:{click:function(e){t.definitor=""}}}):t._e()]},proxy:!0}]),model:{value:t.definitor,callback:function(e){t.definitor=e},expression:"definitor"}})],1),t.currentStep&&t.currentStep.id<=5&&t.outBucket.length?i("q-btn",{attrs:{flat:"",icon:"fas fa-arrow-right",stack:"","no-caps":"",color:"green-13"},on:{click:function(e){t.wndSending.state=!0}}}):t._e()],1)])],1)},o=[],a=(s("498a"),s("e01a"),s("bd9f")),r=s("4709"),n={components:{ProductAOE:r["a"]},data(){return{alert:{messageAlert:"",titleMessage:"",state:!1},dialogState:{state:!1,message:""},wndSending:{state:!1,step:1,serie:void 0,folio:void 0,persistent:!1},finish:{state:!1},wndCounter:{state:!1,product:void 0},wndEditor:{state:!1,product:void 0},definitor:"",iptsearch:{processing:!1,type:"number",icon:"fas fa-font"},params:{id:"",data:Array},order:void 0,toDelivered:void 0,products:[],checkout:[],setupToolbar:{destiny:"",verify:""},stateDelete:!0,flag:!0,configToolbar:[],flagArchive:!1,rsocket:this.$sktRestock,thumbStyle:{input:{right:"4px",borderRadius:"5px",backgroundColor:"#5C6BC0",width:"5px",opacity:.75},delivered:{right:"4px",borderRadius:"5px",backgroundColor:"#004D40",width:"5px",opacity:.75}},barStyle:{input:{right:"2px",borderRadius:"9px",backgroundColor:"#5C6BC0",width:"9px",opacity:.2},delivered:{right:"2px",borderRadius:"9px",backgroundColor:"#004D40",width:"9px",opacity:.2}},metsupplies:[{name:"Piezas",id:1,alias:"pzs"},{name:"Docenas",id:2,alias:"dcs"},{name:"Cajas",id:3,alias:"cjs"}],selectedInput:!1,selectedOutput:!1}},async beforeMount(){this.$store.commit("Requisitions/setHeaderState",!1),this.$store.commit("Requisitions/setFooterState",!1),this.$store.commit("Layout/hideToolbarModule"),this.params.id=this.$route.params.id,this.$q.loading.show({message:"..."}),this.order=await a["a"].find(this.params.id),this.products=this.order.products,console.log(this.order),this.dialogState.state=this.order.log[this.order.log.length-1].id<=4,this.dialogState.message=`Esta orden no puede generar salidas. La orden se encuentra ${this.order.log[this.order.log.length-1].name}.`,this.setupToolbar.destiny=this.order.from.name,this.setupToolbar.verify=this.order.id,this.selectedInput=!!this.inBucket.length,this.selectedOutput=!!this.outBucket.length,this.$q.loading.hide()},beforeDestroy(){this.$store.commit("Requisitions/setHeaderState",!0),this.$store.commit("Requisitions/setFooterState",!0),this.$store.commit("Layout/showToolbarModule")},beforeUpdate(){this.selectedInput=!!this.inBucket.length,this.selectedOutput=!!this.outBucket.length},methods:{codeDefine(){if(this.definitor.trim().length)switch(this.listProducts.length){case 0:console.log("sin coincidencias, abrir el buscador");break;case 1:console.log("Excelente, una coincidencia, validar en que lista esta...");let t=this.listProducts[0];t.ordered.toDelivered?this.edit(t):this.confirm(t);break;default:let e=this.listProducts[0];e.ordered.toDelivered?this.edit(e):this.confirm(e),console.log("Hay mas de una coincidencia, agregaras el primero");break}else console.log("Abrir buscador..."),this.definitor=""},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.searcher.focus()},confirm(t){console.log(t),this.wndCounter.product=t,this.wndCounter.state=!0},edit(t){console.log(t),this.wndEditor.product=t,this.wndEditor.state=!0},async productConfirm(t){if(console.log(t),0==t.amount)this.$q.notify({message:"El producto no puede quedar en cero. Favor de validar la cantidad adecuada.",titleMessage:"Seguimiento CheckOut",color:"negative",timeout:1e3,icon:"report_problem",position:"center"});else{this.$q.loading.show({message:`Confirmando ${t.product.code}...`});let e=this.wndCounter.product,s={_product:t.product.id,_requisition:this.params.id,_supply_by:t.metsupply.id,amount:t.amount,comments:t.comments,pieces:t.innerpack},i=await a["a"].toDelivered(s);console.log(i),0==i.success?this.$q.notify({message:i.msg,icon:"close",color:"negative",timeout:1e3,position:"top"}):(e.ordered.amount=t.amount,e.ordered.toDelivered=t.amount,e.ordered.comments=t.comments,e.pieces=t.innerpack,e.ordered._supply_by=t.metsupply.id,console.log(e),this.appsounds.ok.play(),this.$q.notify({message:"Producto Confirmado!!",position:"center",color:"positive",icon:"done",timeout:1e3}),this.wndCounter.state=!1,this.wndCounter.product=void 0),this.definitor="",this.$q.loading.hide()}},async productEdit(t){this.$q.loading.show({message:`Aplicando cambios ${t.product.code}...`}),console.log(t);let e=this.wndEditor.product,s={_product:t.product.id,_requisition:this.params.id,_supply_by:t.metsupply.id,amount:t.amount,comments:t.comments,pieces:t.innerpack},i=await a["a"].toDelivered(s);console.log(i.data),0==i.success?(console.log(i.success),this.$q.notify({message:i.msg,icon:"close",color:"negative",timeout:1e3})):(e.ordered.amount=parseInt(t.amount),e.ordered.comments=t.comments,e.ordered.toDelivered=parseInt(t.amount),e.ordered._supply_by=t.metsupply.id,e.pieces=t.innerpack,this.appsounds.ok.play(),this.$q.notify({message:"Producto Actualizado!!",position:"top",color:"positive",icon:"done",timeout:1e3}),this.wndEditor.state=!1,this.wndEditor.product=void 0),this.$q.loading.hide()},async productDelete(t){console.log(t),this.$q.loading.show({message:`Devolviendo ${t.product.code}...`});let e=this.wndEditor.product,s={_product:t.product.id,_requisition:this.params.id,_supply_by:t.metsupply.id,amount:0,comments:t.comments},i=await a["a"].toDelivered(s);this.appsounds.done.play(),0==i.success?console.log("No se pudo devolver el producto"):(console.log(i.data),e.ordered.toDelivered=null,e.pieces=i.data.pieces,this.wndEditor.product=void 0,this.wndEditor.state=!1),this.$q.loading.hide()},cancelAOEs(){this.wndEditor.product=void 0,this.wndEditor.state=!1,this.wndCounter.product=void 0,this.wndCounter.state=!1,this.$refs.searcher.focus(),this.definitor=""},async nextStep(){this.$q.loading.show({message:"Creando folio..."});let t={id:this.params.id,_status:6};a["a"].nextstep(t).then((t=>{console.log(t);let e=t.data.updates;if(0==t.success)this.$q.notify({message:e.msg,color:"negative",icon:"fas fa-exclamation-triangle"}),this.$q.loading.hide();else if(e.log[0].details.order){let t=`Folio ${e.log[0].details.order.serie}-${e.log[0].details.order.ticket}`;this.alert.state=!0,this.alert.titleMessage="Folio Generado",this.alert.messageAlert=t,this.wndSending.state=!1;let s,i=this.ordersdb.findIndex((t=>t.id==this.params.id)),o=[];s=e.status,o=this.ordersdb[i].log.concat(e.log),this.$sktRestock.emit("order_changestate",{state:s,profile:this.profile,log:o,order:this.ordersdb[i],from:this.workin,room:this.socketroom}),this.$q.notify({message:"OK!!!",color:"positive",icon:"done"}),this.$q.loading.hide()}else this.$q.notify({message:"No se ha podido generar el folio!!!",color:"negative",icon:"report_problem"}),this.wndSending.state=!1,this.$q.loading.hide()})).catch((t=>{this.$q.notify({message:"Algo salio mal",icon:"fas fa-bug",color:"negative",position:"center"}),console.log(t)}))}},computed:{orders(){return this.$store.getters["Requisitions/getOrders"]},ordersdb(){return this.orders.length?this.orders:[]},originProducts(){return this.order?this.order.products.map((t=>(t.ipack=t.pieces?t.pieces:1,t.ordered.amount=t.ordered.toDelivered?t.ordered.amount:0,t.metsupply=(t=>this.metsupplies.find((e=>e.id==t.ordered._supply_by)))(t),t.units=(t=>{switch(t.ordered._supply_by){case 2:return 12*t.ordered.amount;case 3:return t.ordered.amount*t.ipack;default:return t.ordered.amount}})(t),t.boxes=(t=>(t.units/t.ipack).toFixed(1))(t),t))):[]},listProducts(){if(this.definitor.length){let t=this.definitor.toUpperCase().trim(),e=this.originProducts.filter((e=>e.code.match(t)||e.barcode.match(t)||e.name.match(t)||e.description.match(t)));return e.length?e:[]}return this.originProducts},inBucket(){return this.listProducts.filter((t=>!t.ordered.toDelivered))},outBucket(){return this.listProducts.filter((t=>t.ordered.toDelivered))},appsounds(){return this.$store.getters["Multimediapp/sounds"]},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},socketroom(){return`${this.workin.workpoint.alias}`},bucketToolbar(){return this.outBucket.map((t=>(t.pieces=t.pieces,t.boxes=t.ordered.amount,t)))},b_counter(){return this.b_delivered.map((t=>this.b_delivered++))},unityBucket(){return this.bucketToolbar.reduce(((t,e)=>t+parseInt(e.pieces*e.boxes)),0)},boxesBucket(){return this.bucketToolbar.reduce(((t,e)=>t+parseInt(e.boxes)),0)},bucketCostInput(){return this.inBucket.reduce(((t,e)=>parseInt(e.cost*e.ordered.amount)+t),0)},bucketCostDelivered(){return this.outBucket.reduce(((t,e)=>parseInt(e.cost*e.ordered.amount)+t),0)},currentStep(){let t=this.ordersdb.findIndex((t=>t.id==this.params.id));return this.ordersdb[t]?this.ordersdb[t].status:null},stateChangesDelivery(){return t=>t.ordered.units===t.ordered.amount?1:0},getTicket(){let t=this.ordersdb.findIndex((t=>t.id==this.params.id));return this.currentStep&&this.currentStep.id>=4&&this.ordersdb[t].log[4].details.order?`${this.ordersdb[t].log[4].details.order.serie} - ${this.ordersdb[t].log[4].details.order.ticket}`:"Error al Generar Folio"},pzsInBucket(){return this.inBucket.length?this.inBucket.reduce(((t,e)=>parseInt(e.units)+t),0):0},pzsOutBucket(){return this.outBucket.length?this.outBucket.reduce(((t,e)=>parseInt(e.units)+t),0):0}}},d=n,c=(s("4649"),s("2877")),l=s("9989"),u=s("e359"),p=s("9c40"),h=s("1c1c"),m=s("3b73"),g=s("0016"),v=s("4983"),b=s("068f"),f=s("2bb1"),x=s("cb32"),C=s("eb85"),_=s("24e8"),k=s("f09f"),y=s("a370"),w=s("4b7e"),q=s("e7a9"),$=s("7ff0"),S=s("27f9"),D=s("7f67"),E=s("eebe"),I=s.n(E),B=Object(c["a"])(d,i,o,!1,null,"1cb10145",null);e["default"]=B.exports;I()(B,"components",{QPage:l["a"],QHeader:u["a"],QBtn:p["a"],QList:h["a"],QExpansionItem:m["a"],QIcon:g["a"],QScrollArea:v["a"],QImg:b["a"],QMarkupTable:f["a"],QAvatar:x["a"],QSeparator:C["a"],QDialog:_["a"],QCard:k["a"],QCardSection:y["a"],QCardActions:w["a"],QBtnGroup:q["a"],QFooter:$["a"],QInput:S["a"]}),I()(B,"directives",{ClosePopup:D["a"]})},"34d5":function(t,e,s){t.exports=s.p+"img/rocket.de0c370c.gif"},4649:function(t,e,s){"use strict";s("6a22")},"6a22":function(t,e,s){}}]);