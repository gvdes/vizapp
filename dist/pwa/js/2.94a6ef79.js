(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"42c0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("q-header",{staticClass:"bg-darkl1",attrs:{elevated:""}},[i("div",{staticClass:"row items-stretch justify-between"},[i("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$router.push("/preventa/pedidos")}}}),i("div",{staticClass:"row items-center col bg-dark divclient _client"},[i("div",{staticClass:"q-pa-sm col text-center"},[i("div",{staticClass:"text--2"},[t._v("Cliente:")]),i("div",{staticClass:"text-uppercase"},["STD"!=t.client.type?i("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fas fa-medal"}}):t._e(),t._v(" "+t._s("STD"==t.client.type?t.client.name:t.client.name+" ("+t.client.id+")")+"\n                        ")],1)]),i("div",{staticClass:"q-pa-sm col text-center",class:t.haveparent?"ord_anx":""},[i("div",{staticClass:"text--2"},[t._v("Folio:")]),i("div",{staticClass:"text-bold"},[t._v(t._s(t.ordercatch.id))])])]),i("q-btn",{attrs:{flat:"",icon:"menu"},on:{click:function(e){t.ldrawer.state=!0}}})],1),i("div",{staticClass:"row items-center justify-between q-mt-sm"},[i("div",{staticClass:"row text-center"},[i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"text--2"},[t._v("Modelos")]),i("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.basket.length))])]),i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"text--2"},[t._v("Piezas")]),i("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.pzsBasket))])]),i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"text--2"},[t._v("Cajas")]),i("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.bxsBasket))])])]),i("div",{staticClass:"col text-right q-px-sm"},[i("div",{staticClass:"text--2"},[t._v("Total")]),i("div",{staticClass:"text-green-13 text-h6 text-bold"},[t._v("$ "+t._s(t.totalBasket))])])])]),i("q-drawer",{attrs:{side:"right","content-class":"bg-darkl0"},on:{hide:function(e){t.startremove.state=!1}},model:{value:t.ldrawer.state,callback:function(e){t.$set(t.ldrawer,"state",e)},expression:"ldrawer.state"}},[i("div",{staticClass:"q-pa-md"},[i("div",{staticClass:"text-overline"},[t._v("Opciones")]),i("div",[i("q-btn-group",{staticClass:"bg-darkl1",attrs:{spread:""}},[t.currentStep&&t.currentStep.id>1?i("q-btn",{attrs:{dark:"",icon:"print"},on:{click:function(e){return t.initPrinters("reprint")}}}):t._e(),t.basket.length?[i("q-btn",{attrs:{dark:"",icon:"fas fa-file-excel"}})]:t._e(),t.currentStep&&1==t.currentStep.id?[i("q-btn",{attrs:{dark:"",icon:"fas fa-file-upload"}}),t.startremove.state?i("div",[i("div",{staticClass:"q-ma-sm"},[t._v("Archivar?")]),i("span",{staticClass:"col row q-gutter-md"},[i("q-btn",{staticClass:"col",attrs:{label:"Si",color:"negative"},on:{click:t.archive}}),i("q-btn",{staticClass:"col",attrs:{flat:"",label:"No",color:"amber-13"},on:{click:function(e){t.startremove.state=!1}}})],1)]):i("q-btn",{attrs:{icon:"delete",color:"negative"},on:{click:function(e){t.startremove.state=!0}}})]:t._e(),!t.currentStep||3!=t.currentStep.id&&4!=t.currentStep.id?t._e():[i("q-btn",{attrs:{icon:"fas fa-pencil-alt",color:"orange-14"}})],t.currentStep&&5==t.currentStep.id?[t.startanx.state?i("div",[i("div",{staticClass:"q-ma-sm"},[t._v("Crear Anexo?")]),i("span",{staticClass:"col row q-gutter-md"},[i("q-btn",{staticClass:"col",attrs:{"no-caps":"",label:"Si",color:"primary"},on:{click:t.createanx}}),i("q-btn",{staticClass:"col",attrs:{flat:"","no-caps":"",label:"No",color:"amber-13"},on:{click:function(e){t.startanx.state=!1}}})],1)]):i("q-btn",{attrs:{icon:"fas fa-file-medical",color:"primary"},on:{click:function(e){t.startanx.state=!0}}})]:t._e()],2)],1)]),t.haveparent?i("div",{staticClass:"q-pa-md"},[i("div",[t._v("Origen: "+t._s(t.index._order))])]):t._e(),t.havechildren.length?i("div",{staticClass:"q-pa-md"},[i("div",[t._v("Anexos:")]),t._l(t.havechildren,(function(e){return i("div",{key:e.id},[t._v("\n                    "+t._s(e.id)+"\n                ")])}))],2):t._e(),i("div",{staticClass:"q-pt-md q-pl-md"},[i("q-timeline",{attrs:{color:"green-13",dark:""}},t._l(t.orderlog,(function(e){return i("q-timeline-entry",{key:e.id,attrs:{side:"right"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v(t._s(e.name))]},proxy:!0}],null,!0)},[i("div",{staticClass:"text--2"},[t._v(t._s(t.humantime(e.created_at)))]),i("div",[t._v(t._s(e.responsable.nick?e.responsable.nick:"VizApp"))])])})),1)],1)]),i("div",{staticClass:"q-mb-xl"},[i("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.basket,(function(e){return i("div",{key:e.id,staticClass:"q-py-md q-px-sm wrapper_prod",on:{click:function(s){return t.edit(e)}}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"q-pr-sm"},[i("q-img",{attrs:{src:s("d3b1"),width:"50px"}})],1),i("div",{staticClass:"col q-pr-sm"},[i("div",[i("span",[t._v(t._s(e.code))]),t._v(" --\n                                "),i("span",[t._v(t._s(e.name))])]),i("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.description))]),i("div",{staticClass:"col text--2"},[t._v(t._s(e.metsupply.name)+" "+t._s(e.ordered.amount)+t._s(1!=e.metsupply.id?" ("+e.units+" pzs)":"")+", PU: $"+t._s(e.usedprice.price))]),i("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(e.ordered.comments))])]),i("div",{staticClass:"text-right text-green-13"},[t._v("$ "+t._s(e.total))])])])})),0)],1),i("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndAdder.state,callback:function(e){t.$set(t.wndAdder,"state",e)},expression:"wndAdder.state"}},[i("q-card",{staticClass:"text-white bg-darkl1 exo"},[i("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v("AGREGAR PRODUCTO")]),t.wndAdder.product?[i("ProductAOE",{attrs:{product:t.wndAdder.product,client:t.index.client,showprices:""},on:{confirm:t.productAdd}})]:t._e()],2)],1),i("q-dialog",{staticClass:"exo",attrs:{position:"bottom"},on:{hide:t.cleanEditor},model:{value:t.wndEditor.state,callback:function(e){t.$set(t.wndEditor,"state",e)},expression:"wndEditor.state"}},[t.wndEditor.product?[i("q-card",{staticClass:"bg-darkl1 text-white exo"},[i("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v("EDITAR PRODUCTO")]),i("q-separator"),i("ProductAOE",{attrs:{product:t.wndEditor.product,client:t.index.client,showprices:""},on:{confirm:t.productEdit,remove:t.remove}})],1)]:t._e()],2),i("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndPrinters.state,callback:function(e){t.$set(t.wndPrinters,"state",e)},expression:"wndPrinters.state"}},[i("PrinterSelect",{ref:"PrinterSelect",attrs:{options:t.printers,title:"Continuar"},on:{clicked:t.print}})],1),i("q-footer",{staticClass:"bg-darkl0 text-white"},[t.currentStep&&1==t.currentStep.id?i("div",{staticClass:"q-pa-xs row items-center"},[i("div",{staticClass:"col text-center"},[i("ProductAutocomplete",{attrs:{with_image:"",with_prices:"",with_stock:""},on:{input:t.setProduct}})],1),i("div",{staticClass:"text-right"},[t.basket.length?i("q-btn",{attrs:{icon:"fas fa-arrow-right",color:"green-13",flat:""},on:{click:function(e){return t.initPrinters("print")}}}):t._e()],1)]):t._e()])],1)},r=[],a=s("bd4c"),n=s("5542"),o=s("b293"),d=s("4709"),c=s("a1a1"),l={components:{ProductAutocomplete:o["a"],PrinterSelect:c["a"],ProductAOE:d["a"]},data(){return{psocket:this.$sktPreventa,index:void 0,moreopts:!1,wndAdder:{state:!1,product:void 0},wndEditor:{state:!1,product:void 0},wndPrinters:{state:!1,printer:null,job:"print"},ldrawer:{state:!1},startremove:{state:!1},startanx:{state:!1},tableproducts:{columns:[{name:"id",align:"left",label:"ID",field:"id",sortable:!0},{name:"code",align:"left",label:"Codigo",field:"code",sortable:!0},{name:"name",align:"center",label:"Codigo Corto",field:"name",sortable:!1},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"cant",align:"center",label:"Cantidad",field:"cant",sortable:!0},{name:"pieces",align:"center",label:"PzsXCaj",field:"pieces",sortable:!0},{name:"ppp",align:"center",label:"PPP",field:"ppp",sortable:!0},{name:"uprice",align:"center",label:"Precio Unitario",field:"uprice",sortable:!0},{name:"total",align:"center",label:"Total",field:"total",sortable:!0}],filtrator:"",pagination:{descending:!1,page:1,rowsPerPage:10}},pricelists:[{id:1,alias:"MEN",name:"MENUDEO"},{id:2,alias:"MAY",name:"MAYOREO"},{id:3,alias:"DOC",name:"DOCENA"},{id:4,alias:"CAJ",name:"CAJA"}],metsupplies:[{name:"Piezas",id:1,alias:"pzs"},{name:"Docenas",id:2,alias:"dcs"},{name:"Cajas",id:3,alias:"cjs"}]}},async mounted(){this.$store.commit("Preventa/setHeaderState",!1),this.$store.commit("Preventa/setFooterState",!1),this.$q.loading.show({message:"..."}),this.index=await n["a"].order(this.ordercatch),console.log("%cEl Pedido fue montado!!","background:green;color:white;padding:10px;font-size:1.5em;"),console.log(this.index),this.dbproducts=this.index.products.length?this.index.products:[],this.$q.loading.hide()},destroyed(){this.$store.commit("Preventa/setHeaderState",!0),this.$store.commit("Preventa/setFooterState",!0)},methods:{sktorder_changestate(t){console.log("Una orden ha cambiado..."),console.log(t)},setProduct(t){if(1==this.currentStep.id){let e=this.index.products.find((e=>e.code==t.code));e?this.$q.notify({message:"Esto ya esta en la lista",icon:"fas fa-bug",color:"orange-13"}):(this.wndAdder.product=t,this.wndAdder.state=!0)}},edit(t){1==this.currentStep.id&&(this.wndEditor.product=t,this.wndEditor.state=!0)},cleanEditor(){this.wndEditor.product=void 0},async archive(){let t={_order:this.ordercatch.id},e=await n["a"].archive(t);if(e.err)this.$q.notify({message:e.err,color:"negative",icon:"fas fa-exclamation-triangle"});else{let t=e.status[e.status.length-1],s=Object.assign({},this.index);this.psocket.emit("order_update",{newstate:t,order:s}),this.$q.notify({message:"Archivado correcto!!",color:"positive",icon:"done"}),this.$router.push("/preventa/pedidos")}},async productAdd(t){this.$q.loading.show({message:`Agregando ${t.product.code}...`});let e={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:t.amount,comments:t.comments};console.log(e);let s=await n["a"].add(e);s.err?console.log(s.err):(console.log(s),this.index.products.unshift(s),this.appsounds.added.play(),this.wndAdder.product=void 0,this.wndAdder.state=!1),this.$q.loading.hide()},async productEdit(t){this.$q.loading.show({message:`Guardando ${t.product.code}...`});let e=this.wndEditor.product,s={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:t.amount,comments:t.comments};console.log(s);let i=await n["a"].add(s);i.error?(console.log(i.error),this.$q.notify({message:"No se pudo actualizar el producto",icon:"close",color:"negative"})):(e.ordered.amount=t.amount,e.ordered.comments=t.comments,e.ordered._supply_by=t.metsupply.id,this.$q.notify({message:"Producto Actualizado!!",position:"center",color:"positive",icon:"done"}),this.wndEditor.state=!1,this.wndEditor.product=void 0),this.$q.loading.hide()},async remove(t){this.$q.loading.show({message:`Quitando ${t.product.code}...`});let e={_product:t.product.id,_order:this.ordercatch.id},s=await n["a"].removeProduct(e);if(s.err)this.$q.notify({message:s.err,icon:"fas fa-exclamation-triangle",color:"negative"});else{let e=this.index.products.findIndex((e=>e.id==t.product.id));this.index.products.splice(e,1),this.$q.notify({message:`${t.product.code} eliminado!`,icon:"done",color:"positive"}),this.wndEditor.product=void 0,this.wndEditor.state=!1}this.$q.loading.hide()},initPrinters(t){this.wndPrinters.job=t,this.wndPrinters.state=!0},print(t){this.wndPrinters.printer=t,"print"==this.wndPrinters.job?this.nextStep():this.reprint()},async reprint(){this.$q.loading.show({message:"Reimprimiendo..."});let t={_order:this.ordercatch.id,_printer:this.wndPrinters.printer.id};await n["a"].rePrint(t);this.$q.notify({message:"Reimpresion correcta",color:"positive",icon:"done"}),this.$q.loading.hide()},async nextStep(t=null){this.$q.loading.show({message:"Enviando..."});let e={_order:this.ordercatch.id,_printer:this.wndPrinters.printer.id},s=await n["a"].nextStep(e);if(console.log(s),s.err)this.$q.notify({message:s.err,color:"negative",icon:"fas fa-exclamation-triangle"});else{console.log(s.status);let t=s.status[s.status.length-1],i=Object.assign({},this.index);i.status=t,this.psocket.emit("order_update",{newstate:t,order:i}),this.appsounds.ok.play(),this.$router.push("/preventa/pedidos"),this.$q.notify({message:`Pedido ${e._order} enviado a ${t.name}`,color:"positive",icon:"done",position:"center",timeout:1e3}),this.$q.loading.hide()}},createanx(){this.$q.loading.show({message:"Creando anexo, espera..."});let t={name:this.index.name,_order:this.index.id};console.log(t),n["a"].create(t).then((t=>{let e=t.data;console.log(e),this.$q.notify({message:`Anexo creado con Folio <b>${e.id}</b>`,color:"positive",icon:"done",html:!0}),this.$store.commit("Preventa/newOrder",e),this.psocket.emit("order_add",{user:this.profile,order:e}),this.$router.push(`/preventa/pedidos/${e.id}`),this.$router.go(),this.$q.loading.hide()})).catch((t=>{console.log(t),this.$q.notify({icon:"bug",message:t,color:"negative"})}))}},computed:{profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},printers(){return this.$store.getters["Preventa/printersSale"]},ordercatch(){return this.$route.params},client(){return this.index?this.index._client?{type:"REG",name:"Peter Parker",id:115}:{type:"STD",name:this.index.name}:{type:"STD"}},basket(){return this.index?this.index.products.map((t=>(t.ipack=t.pieces?t.pieces:1,t.pricelistDefault=this.pricelists.find((t=>t.id==this.index.client._price_list)),t.metsupply=(t=>this.metsupplies.find((e=>e.id==t.ordered._supply_by)))(t),t.productType=(t=>{if(t.prices.length){let e=t.prices[0].price,s=t.prices.filter((t=>t.id<=4)).filter((t=>e==t.price)).length==t.prices.length;return s?"off":"std"}return{error:!0,msg:"Producto sin precios"}})(t),t.units=(t=>{switch(t.ordered._supply_by){case 2:return 12*t.ordered.amount;case 3:return t.ordered.amount*t.ipack;default:return t.ordered.amount}})(t),t.boxes=(t=>(t.units/t.ipack).toFixed(1))(t),t.usedprice=(t=>{switch(t.ordered._supply_by){case 2:return t.prices.find((t=>3==t.id));case 3:return t.prices.find((t=>4==t.id));default:if("off"==t.productType)return t.prices.find((t=>1==t.id));if(t.ordered.amount<3)return t.prices.find((t=>1==t.id));if(t.ordered.amount>=3)return t.prices.find((t=>2==t.id));break}})(t),t.total=t.units*t.usedprice.price,t))):[]},totalBasket(){return this.basket.length?this.basket.reduce(((t,e)=>e.total+t),0):0},pzsBasket(){return this.basket.length?this.basket.reduce(((t,e)=>parseInt(e.units)+t),0):0},bxsBasket(){return this.basket.length?this.basket.reduce(((t,e)=>parseInt(e.boxes)+t),0):0},currentStep(){return this.index?this.index.status:null},appsounds(){return this.$store.getters["Multimediapp/sounds"]},haveparent(){return!!this.index&&this.index._order},havechildren(){return!!this.index&&this.index.children},orderlog(){return this.index?this.index.log:[]},humantime(){return t=>{let e=Date.now(),s=Date.parse(t),i=a["b"].getDateDiff(e,s,"days");switch(i){case 0:return a["b"].formatDate(s,"hh:mm a");case 1:return"Ayer, "+a["b"].formatDate(s,"hh:mm a");default:return`Hace ${i} dias, `+a["b"].formatDate(s,"hh:mm a")}}}}},p=l,u=(s("df39"),s("2877")),h=s("9989"),m=s("e359"),g=s("9c40"),v=s("0016"),f=s("9404"),b=s("e7a9"),x=s("05eb"),_=s("74af"),w=s("54e1"),q=s("068f"),C=s("24e8"),k=s("f09f"),y=s("a370"),$=s("eb85"),P=s("7ff0"),A=s("eebe"),E=s.n(A),S=Object(u["a"])(p,i,r,!1,null,"7732ce4f",null);e["default"]=S.exports;E()(S,"components",{QPage:h["a"],QHeader:m["a"],QBtn:g["a"],QIcon:v["a"],QDrawer:f["a"],QBtnGroup:b["a"],QTimeline:x["a"],QTimelineEntry:_["a"],QBanner:w["a"],QImg:q["a"],QDialog:C["a"],QCard:k["a"],QCardSection:y["a"],QSeparator:$["a"],QFooter:P["a"]})},7351:function(t,e,s){},df39:function(t,e,s){"use strict";s("7351")}}]);