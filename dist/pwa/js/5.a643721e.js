(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{3506:function(t,e,s){"use strict";s("cb28")},"6ac4":function(t,e,s){},c36e:function(t,e,s){"use strict";s.r(e);s("14d9");var i=function(){var t=this,e=t._self._c;return e("q-page",[e("q-header",{staticClass:"bg-darkl1",attrs:{unelevated:""}},[e("div",{staticClass:"row items-center justify-between"},[e("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$router.push("/preventa/checkout")}}}),e("div",{staticClass:"row items-center col bg-dark divlcient _client"},[e("div",{staticClass:"q-pa-sm col text-center"},[e("div",{staticClass:"text--2"},[t._v("Cliente:")]),t.order?e("div",{staticClass:"text-uppercase"},[t._v("\n                      "+t._s(t.order.name)+"\n                  ")]):t._e()]),e("div",{staticClass:"q-pa-sm col text-center"},[e("div",{staticClass:"text--2"},[t._v("Checkout:")]),e("div",{staticClass:"text-bold"},[t._v(t._s(t.ordercatch.id))])])]),e("q-btn",{attrs:{flat:"",icon:"menu"}})],1),e("div",{staticClass:"row items-center justify-between q-mt-sm"},[e("div",{staticClass:"row text-center"},[e("div",{staticClass:"q-px-md"},[e("div",{staticClass:"text--2"},[t._v("Modelos")]),e("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.inbasket.length))])]),e("div",{staticClass:"q-px-md"},[e("div",{staticClass:"text--2"},[t._v("Unidades")]),e("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.pzsBasket))])])]),e("div",{staticClass:"col text-right q-px-sm"},[e("div",{staticClass:"text--2"},[t._v("Total")]),e("div",{staticClass:"text-green-13 text-h6 text-bold"},[t._v("$ "+t._s(t.totalBasket))])])])]),t.artduplicate.state?e("div",{staticClass:"q-pa-md q-mt-md"},[e("q-banner",{staticClass:"bg-amber-13 text-dark",attrs:{"inline-actions":"",squared:"",rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-img",{staticClass:"dinobebe",attrs:{src:s("e7de"),width:"90px"}})]},proxy:!0},{key:"action",fn:function(){return[e("q-btn",{staticClass:"text-bold text-amber-12",attrs:{color:"dark","no-caps":"",label:"Ok"},on:{click:function(e){t.artduplicate.state=!1,t.artduplicate.state=void 0}}})]},proxy:!0}],null,!1,1247846310)},[t._v("\n\n        Esto ya esta en la lista\n\n        ")]),e("transition",{attrs:{appear:"","enter-active-class":"animated bounceInUp","leave-active-class":"animated zoomOut"}},[e("div",{staticClass:"q-py-lg q-px-sm wrapper_prod",on:{click:function(e){return t.edit(t.artduplicate.product)}}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"q-pr-sm"},[e("q-img",{attrs:{src:s("d3b1"),width:"50px"}})],1),e("div",{staticClass:"col q-pr-sm"},[e("div",[e("span",[t._v(t._s(t.artduplicate.product.code))]),t._v(" --\n                    "),e("span",[t._v(t._s(t.artduplicate.product.name))])]),e("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(t.artduplicate.product.description))]),e("div",{staticClass:"col text--2"},[t._v(t._s(t.artduplicate.product.metsupply.name)+" "+t._s(t.artduplicate.product.ordered.amount)+t._s(1!=t.artduplicate.product.metsupply.id?` (${t.artduplicate.product.units} pzs)`:"")+", PU: $"+t._s(t.artduplicate.product.usedprice.price))]),e("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(t.artduplicate.product.ordered.comments))])]),e("div",{staticClass:"text-right text-green-13"},[t._v("$ "+t._s(t.artduplicate.product.total))])])])])],1):t._e(),t.artduplicate.state?t._e():e("div",{staticClass:"q-mb-xl"},[e("div",{staticClass:"q-mb-xl"},[e("div",{staticClass:"q-py-sm q-px-md text-blue row items-center justify-between"},[e("div",{staticClass:"row"},[e("div",[e("div",{staticClass:"text-bold"},[t._v("Por Confirmar")]),e("div",{staticClass:"text--2"},[t._v(t._s(t.outbasket.length)+" productos "),e("q-icon",{attrs:{name:"fas fa-caret-right"}}),t._v(" "+t._s(t.pzsOutBasket)+" pzs")],1)]),e("q-btn",{staticClass:"q-ml-sm exo",attrs:{icon:"print",color:"grey-4",dense:"",flat:""}},[e("q-menu",{attrs:{"content-class":"bg-darkl1 exo"}},[e("q-card",{staticClass:"bg-blue-grey-9 text-overline text-white",attrs:{flat:""}},[e("q-card-section",[t._v("Seleccione Impresora")])],1),e("PrinterSelect",{on:{input:t.printNotCounted}})],1)],1)],1),e("div",{staticClass:"text-h6"},[t._v("$ "+t._s(t.totalOutBasket))])]),e("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.outbasket,(function(i){return e("div",{key:i.id,staticClass:"q-py-md q-px-sm wrapper_prod",on:{click:function(e){return t.confirm(i)}}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"q-pr-sm"},[e("q-img",{attrs:{src:s("d3b1"),width:"50px"}})],1),e("div",{staticClass:"col q-pr-sm"},[e("div",{staticClass:"text--3 text-uppercase text-italic"},[t._v("ID: "+t._s(i.id))]),e("div",[e("span",{staticClass:"text-bold"},[t._v(t._s(i.code))]),t._v(" --\n                            "),e("span",[t._v(t._s(i.name))])]),e("div",{staticClass:"text--3 text-uppercase text-italic"},[t._v(t._s(i.family))]),e("div",{staticClass:"text--3 text-grey-5"},[t._v(t._s(i.description))]),e("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(i.ordered.comments))]),e("div",{staticClass:"col text--2"},[t._v(t._s(i.metsupply.name)+" "+t._s(i.ordered.amount)+t._s(1!=i.metsupply.id?` (${i.units} pzs)`:"")+", PU: $"+t._s(i.usedprice.price))])]),e("div",{staticClass:"text-right text-green-13"},[t._v("$ "+t._s(i.total))])])])})),0)],1),e("div",{staticClass:"q-mb-xl"},[e("div",{staticClass:"q-py-sm q-px-md text-green row items-center justify-between"},[e("div",[e("div",{staticClass:"text-bold"},[t._v("Confirmados")]),e("div",{staticClass:"text--2"},[t._v(t._s(t.inbasket.length)+" productos "),e("q-icon",{attrs:{name:"fas fa-caret-right"}}),t._v(" "+t._s(t.pzsInBasket)+" pzs")],1)]),e("span",{staticClass:"text-h6"},[t._v("$ "+t._s(t.totalBasket))])]),e("transition-group",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},t._l(t.inbasket,(function(i){return e("div",{key:i.id,staticClass:"q-py-md q-px-sm wrapper_prod",on:{click:function(e){return t.edit(i)}}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"q-pr-sm"},[e("q-img",{attrs:{src:s("d3b1"),width:"50px"}})],1),e("div",{staticClass:"col q-pr-sm"},[e("div",{staticClass:"text--3 text-uppercase text-italic"},[t._v("ID: "+t._s(i.id))]),e("div",[e("span",{staticClass:"text-bold"},[t._v(t._s(i.code))]),t._v(" --\n                                "),e("span",[t._v(t._s(i.name))])]),e("div",{staticClass:"text--3 text-uppercase text-italic"},[t._v(t._s(i.family))]),e("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(i.description))]),e("div",{staticClass:"text--2 text-amber-13"},[t._v(t._s(i.ordered.comments))]),e("div",{staticClass:"text-red-13"},[t._v(t._s(i.ordered.deleted_at))]),e("div",{staticClass:"col text--2"},[t._v(t._s(i.metsupply.name)+" "+t._s(i.ordered.amount)+t._s(1!=i.metsupply.id?` (${i.units} pzs)`:"")+", PU: $"+t._s(i.usedprice.price))])]),e("div",{staticClass:"text-right text-green-13"},[t._v("$ "+t._s(i.total))])])])})),0)],1)]),e("q-dialog",{attrs:{position:"bottom"},on:{hide:t.cancelAOEs},model:{value:t.wndCounter.state,callback:function(e){t.$set(t.wndCounter,"state",e)},expression:"wndCounter.state"}},[t.wndCounter.product?[e("q-card",{staticClass:"bg-darkl1 text-white exo"},[e("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline row items-center justify-between"},[t._v("CONFIRMAR PRODUCTO "),e("q-btn",{attrs:{color:"amber-13",icon:"close",flat:"",dense:"",round:""},on:{click:function(e){t.wndCounter.state=!1}}})],1),e("q-separator"),e("OrdersAOE",{attrs:{allow_innerpack:"",product:t.wndCounter.product,client:t.order.client,showprices:""},on:{confirm:t.productConfirm,remove:t.productDelete}})],1)]:t._e()],2),e("q-dialog",{staticClass:"exo",attrs:{position:"bottom"},on:{hide:t.cancelAOEs},model:{value:t.wndEditor.state,callback:function(e){t.$set(t.wndEditor,"state",e)},expression:"wndEditor.state"}},[t.wndEditor.product?[e("q-card",{staticClass:"bg-darkl1 text-white exo"},[e("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline row items-center justify-between"},[t._v("EDITAR PRODUCTO  "),e("q-btn",{attrs:{color:"amber-13",icon:"close",flat:"",dense:"",round:""},on:{click:function(e){t.wndEditor.state=!1}}})],1),e("q-separator"),e("OrdersAOE",{attrs:{allow_innerpack:"",showprices:"",product:t.wndEditor.product,client:t.order.client,work:"edit"},on:{confirm:t.productEdit,cancel:t.cancelAOEs,devolve:t.productDevolve,remove:t.productDelete}})],1)]:t._e()],2),e("q-dialog",{attrs:{position:"bottom"},on:{hide:t.cancelAOEs},model:{value:t.wndAdder.state,callback:function(e){t.$set(t.wndAdder,"state",e)},expression:"wndAdder.state"}},[e("q-card",{staticClass:"text-white bg-darkl1 exo"},[e("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v("AGREGAR PRODUCTO")]),e("div",{staticClass:"q-pa-sm"},[e("ProductAutocomplete",{ref:"comp_proauto",attrs:{with_image:"",with_prices:"",with_stock:""},on:{input:t.setProduct,similarcodes:t.similarCodes}}),e("div",{staticClass:"row items-bottom justify-between q-py-md"},[e("q-select",{staticClass:"col-6",attrs:{dark:"",dense:"",color:"green-13",options:t.metsupplies,"option-value":"id","option-label":"name",label:"Unidad de surtido"},on:{input:t.setSettings},model:{value:t.wndAdder.settings.deftsupply,callback:function(e){t.$set(t.wndAdder.settings,"deftsupply",e)},expression:"wndAdder.settings.deftsupply"}}),e("q-checkbox",{staticClass:"text--2",attrs:{label:"Mantener ventana",dark:"",color:"green-13"},on:{input:t.setSettings},model:{value:t.wndAdder.settings.stillAdding,callback:function(e){t.$set(t.wndAdder.settings,"stillAdding",e)},expression:"wndAdder.settings.stillAdding"}})],1)],1),t.wndAdder.product?[e("q-separator"),e("ProductAOE",{attrs:{product:t.wndAdder.product,client:t.order.client,showprices:"",deftunitsupply:t.wndAdder.settings.deftsupply.id},on:{confirm:t.productAdd,cancel:t.cancelAOEs}})]:t._e(),t.wndAdder.similars.length?[e("q-card-section",[e("div",[t._v("Varios productos coinciden con tu lectura")]),e("div",{staticClass:"row"},t._l(t.wndAdder.similars,(function(s){return e("div",{key:s.id,staticClass:"col-6 q-pa-xs"},[e("q-card",{staticClass:"q-pa-sm bg-darkl2",on:{click:function(e){return t.setProduct(s)}}},[e("div",[t._v(t._s(s.code)+" -- "+t._s(s.name))]),e("div",{staticClass:"text--3"},[t._v(t._s(s.description))])])],1)})),0)])]:t._e()],2)],1),e("q-dialog",{attrs:{persistent:t.wndSending.persistent,position:"bottom"},model:{value:t.wndSending.state,callback:function(e){t.$set(t.wndSending,"state",e)},expression:"wndSending.state"}},[e("q-card",{staticClass:"bg-darkl1 text-white exo"},[e("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v("ENVIAR A CAJA")]),e("q-card-actions",[e("q-btn",{staticClass:"q-py-md full-width",attrs:{flat:"",label:"Enviar",color:"green-13","no-caps":""},on:{click:t.nextStep}})],1)],1)],1),e("q-dialog",{attrs:{persistent:"","no-esc-dismiss":""},model:{value:t.wndFactusol.state,callback:function(e){t.$set(t.wndFactusol,"state",e)},expression:"wndFactusol.state"}},[t.wndFactusol.folios.length?[e("q-card",{staticClass:"bg-darkl1 exo text-white"},[e("q-card-section",{staticClass:"bg-blue-grey-9 text-white text-overline"},[t._v(t._s(1==t.wndFactusol.folios.length?"Folio creado":"Folios creados"))]),t._l(t.wndFactusol.folios,(function(s,i){return e("q-card-section",{key:i,staticClass:"text-h5"},[t._v("\n                    "+t._s(s.serie)+" - "+t._s(s.ticket)+"\n                ")])})),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{flat:"",color:"green-13","no-caps":"",label:"Ok"},on:{click:function(e){return t.$router.push("/preventa/checkout")}}})],1)],2)]:t._e()],2),t.currentStep&&7==t.currentStep.id?e("q-footer",{staticClass:"bg-darkl1 text-white"},[t.finish.state?e("div",[e("q-btn-group",{attrs:{spread:""}},[e("q-btn",{staticClass:"q-py-md",attrs:{label:"Enviar a Caja",icon:"done",color:"positive"},on:{click:t.nextStep}}),e("q-btn",{attrs:{label:"Cancelar",icon:"cancel",color:"amber-14"},on:{click:function(e){t.finish.state=!1}}})],1)],1):e("div",{staticClass:"q-pa-xs row items-center"},[e("div",{staticClass:"col text-center"},[e("q-input",{ref:"searcher",staticClass:"text-uppercase",attrs:{filled:"",dark:"",autofocus:"",dense:"",label:"",color:"green-13",type:t.iptsearch.type},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.codeDefine.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-btn",{attrs:{dense:"",flat:"",rounded:"",icon:t.iptsearch.icon},on:{click:t.toogleIptSearch}})]},proxy:!0},{key:"append",fn:function(){return[t.definitor.length?e("q-btn",{attrs:{icon:"close",dense:"",rounded:"",flat:""},on:{click:function(e){t.definitor=""}}}):t._e()]},proxy:!0}],null,!1,4006658571),model:{value:t.definitor,callback:function(e){t.definitor=e},expression:"definitor"}})],1),e("q-btn",{attrs:{flat:"",icon:"fas fa-plus",stack:"","no-caps":"",color:"green-13"},on:{click:function(e){t.wndAdder.state=!0}}}),t.inbasket.length?e("q-btn",{attrs:{flat:"",icon:"fas fa-arrow-right",stack:"","no-caps":"",color:"green-13"},on:{click:function(e){t.wndSending.state=!0}}}):t._e()],1)]):t._e()],1)},a=[],r=(s("3c65"),s("5542")),o=s("b293"),n=s("3a84"),d=function(){var t=this,e=t._self._c;return e("q-card",{staticClass:"bg-darkl1"},[e("q-card",{staticClass:"bg-none"},[e("q-card-section",[e("div",{staticClass:"row justify-between items-start text-h6 text-bold"},[e("div",{staticClass:"text-green-13"},[t._v(t._s(t.product.code))]),t.product.stocks&&t.product.stocks.length?e("div",[e("q-btn",{staticClass:"text-bold",attrs:{flat:"",dense:"","no-caps":"",color:t.product.stocks[0].stock?"green-13":"amber-13",label:`Stock: ${t.product.stocks[0].stock}`}})],1):t._e(),e("div",{staticClass:"text-light-blue-13"},[t._v(t._s(t.product.name))])]),e("div",{staticClass:"text--2"},[t._v(t._s(t.product.description))])])],1),e("div",[t.product.stocks&&!t.product.stocks.length?[e("q-banner",{staticClass:"text-white bg-negative text-center"},[e("q-icon",{attrs:{name:"fas fa-exclamation-triangle",size:"md"}}),t._v(" STOCK INDEFINIDO!! :/\n                ")],1)]:t._e(),t.valprices.state?t._e():[e("q-banner",{staticClass:"text-white bg-negative text-center"},[e("q-icon",{attrs:{name:"fas fa-exclamation-triangle",size:"md"}}),t._v(" "+t._s(t.valprices.msg)+"\n                ")],1)]],2),t.valprices.state?e("div",[t.showprices?["std"==t.productType?e("q-card-section",{staticClass:"text-center row justify-between q-px-md"},t._l(t.prices,(function(s){return e("div",{key:s.id,staticClass:"q-px-md q-py-sm",class:s.id==t.usedprice.id?"usedprice":""},[e("div",{staticClass:"text--2"},[t._v(t._s(s.alias))]),e("div",{staticClass:"text-bold"},[t._v("$ "+t._s(s.price))])])})),0):t._e(),"off"==t.productType?e("q-card-section",{staticClass:"text-center text-bold text-orange"},[e("div",[t._v("OFERTA")]),e("div",{staticClass:"text-h4"},[t._v("$ "+t._s(t.prices[0].price))])]):t._e()]:t._e(),e("q-card-section",[e("div",{staticClass:"row items-end"},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"column"},[e("div",{staticClass:"text-cemter"},[t._v("Cantidad:")]),e("q-btn",{staticClass:"q-py-xs",attrs:{icon:"fas fa-chevron-up",flat:""},on:{click:t.ctrlPzsUp}}),e("div",{staticClass:"text-center col column q-py-md"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-center exo fieldcant",attrs:{type:"number",min:"1"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),e("q-btn",{staticClass:"q-py-xs",attrs:{icon:"fas fa-chevron-down",flat:""},on:{click:t.ctrlPzsDown}})],1)]),e("div",{staticClass:"col"},[e("q-markup-table",{staticClass:"col q-mx-md bg-none text-white",attrs:{flat:"",dense:"",square:""}},[e("tbody",[e("tr",[e("td",{attrs:{colspan:"2"}},[e("q-select",{attrs:{label:"Surtir por",disable:t.blockunitsupply,borderless:"",dense:"",dark:"",color:"green-13","option-value":"id","option-label":"name",options:t.metsupply.opts},model:{value:t.metsupply.model,callback:function(e){t.$set(t.metsupply,"model",e)},expression:"metsupply.model"}})],1)]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("q-input",{attrs:{borderless:"",dense:"",dark:"",flat:"",label:"Notas",color:"green-13"},model:{value:t.comments,callback:function(e){t.comments=e},expression:"comments"}})],1)]),e("tr",[e("td",[t._v("Piezas X Caja ("+t._s(t.product.pieces)+")")]),t.allow_innerpack?e("td",{attrs:{align:"right"}},[e("q-input",{attrs:{filled:"",type:"number",min:"1",dense:"",dark:"",color:"green-13","input-class":"text-right q-pb-none"},model:{value:t.innerpack,callback:function(e){t.innerpack=e},expression:"innerpack"}})],1):e("td",{attrs:{align:"right"}},[t._v(t._s(t.ipack))])]),e("tr",[e("td",[t._v("Cajas")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.boxes))])]),e("tr",[e("td",[t._v("Unidades")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.units))])]),t.showprices?[e("tr",[e("td",[t._v("Precio unitario")]),e("td",{attrs:{align:"right"}},[t._v(t._s(t.usedprice.price))])]),e("tr",[e("td",[t._v("Total")]),e("td",{staticClass:"text-green-13 text-bold",attrs:{align:"right"}},[t._v(t._s(t.usedprice.price*t.units))])])]:t._e()],2)])],1)])]),"add"==t.work?[e("q-separator"),e("q-btn-group",{attrs:{spread:""}},[e("q-btn",{staticClass:"q-py-md",attrs:{flat:"",icon:"fas fa-check",color:"green-13",autofocus:""},on:{click:t.confirm}}),e("q-btn",{staticClass:"q-py-md",attrs:{flat:"",icon:"fas fa-trash",color:"pink-13"},on:{click:t.remove}})],1)]:t._e(),"edit"==t.work?[e("q-separator"),e("q-btn-group",{attrs:{spread:"",flat:""}},[e("q-btn",{staticClass:"q-py-md",attrs:{flat:"",icon:"fas fa-check",color:"green-13",autofocus:""},on:{click:t.confirm}}),e("q-btn",{staticClass:"q-py-md",attrs:{flat:"",icon:"fas fa-arrow-up",color:"amber-13"},on:{click:t.devolve}}),e("q-btn",{staticClass:"q-py-md",attrs:{flat:"",icon:"fas fa-trash",color:"pink-13"},on:{click:t.remove}})],1)]:t._e()],2):t._e()],1)},c=[],l={props:{work:{type:String,default:"add"},product:{type:Object,default:{}},client:{type:Object,default:{}},showprices:{type:Boolean,default:!1},blockunitsupply:{type:Boolean,default:!1},deftunitsupply:{type:Number,default:null},block_trash:{type:Boolean,default:!1},allow_innerpack:{type:Boolean,default:!1}},data(){return{amount:1,comments:"",innerpack:void 0,metsupply:{model:{alias:"PZS",name:"Piezas",id:1},opts:[{alias:"PZS",name:"Piezas",id:1},{alias:"DOC",name:"Docenas",id:2},{alias:"CJS",name:"Cajas",id:3}]},pricelists:[{id:1,alias:"MEN",name:"MENUDEO"},{id:2,alias:"MAY",name:"MAYOREO"},{id:3,alias:"DOC",name:"DOCENA"},{id:4,alias:"CAJ",name:"CAJA"}]}},mounted(){"add"==this.work?(console.log("El producto es para agregar"),console.log(this.product),this.metsupply.model=this.deftunitsupply?this.metsupply.opts.find((t=>t.id==this.deftunitsupply)):this.metsupply.opts.find((t=>t.id==this.product.metsupply.id))):(console.log("El producto es para editar"),console.log(this.product),this.amount=this.product.ordered.amount,this.comments=this.product.ordered.comments,this.metsupply.model=this.metsupply.opts.find((t=>t.id==this.product.metsupply.id))),this.innerpack=this.product.ordered.ripack?this.product.ordered.ripack:this.product.pieces?this.product.pieces:1},methods:{ctrlPzsUp(){this.amount++},ctrlPzsDown(){this.amount>1&&this.amount--},productRemove(){console.log(this.params),this.$emit("confirm",this.params)},confirm(){console.log(this.params),this.$emit("confirm",this.params)},devolve(){this.$emit("devolve",this.params)},remove(){this.$emit("remove",this.params)}},computed:{valprices(){if(this.product){if(this.product.prices.length){let t=this.product.prices.filter((t=>0==t.price));return t.length?{state:!1,msg:"No se pudo setear este producto: precios en 0",prices:[],errors:t}:{state:!0,msg:"Precios validos",prices:this.product.prices}}return{state:!1,msg:"No se pudo setear este producto: no hay precios",prices:[]}}return{state:!1,msg:"El componente fallo al setear el producto",prices:[]}},prices(){return this.valprices.prices},pricelistDefault(){return this.pricelists.find((t=>t.id==this.client._price_list))},productType(){if(this.prices.length){let t=this.prices[0].price,e=this.prices.filter((t=>t.id<=4)).filter((e=>t==e.price)).length==this.prices.length;return e?"off":"std"}return{error:!0,msg:"Producto sin precios"}},ipack(){return this.innerpack},units(){switch(this.metsupply.model.id){case 2:return 12*this.amount;case 3:return this.amount*this.ipack;default:return this.amount}},boxes(){return(this.units/this.ipack).toFixed(1)},usedprice(){switch(this.metsupply.model.id){case 2:return this.prices.find((t=>3==t.id));case 3:return this.prices.find((t=>4==t.id));default:if("off"==this.productType)return this.prices.find((t=>1==t.id));if(this.amount<3)return this.prices.find((t=>1==t.id));if(this.amount>=3&&this.amount<this.ipack)return this.prices.find((t=>2==t.id));if(this.amount>=this.ipack)return this.prices.find((t=>4==t.id));break}},params(){return{product:this.product,comments:this.comments,amount:this.amount,units:this.units,usedprice:this.usedprice,metsupply:this.metsupply.model,innerpack:parseInt(this.innerpack)}},action(){return this.product&&this.product.ordered?"edit":"add"}}},p=l,u=(s("3506"),s("2877")),m=s("f09f"),h=s("a370"),f=s("9c40"),v=s("54e1"),g=s("0016"),_=s("2bb1"),b=s("ddd8"),C=s("27f9"),k=s("eb85"),w=s("e7a9"),x=s("eebe"),y=s.n(x),q=Object(u["a"])(p,d,c,!1,null,"3607f195",null),A=q.exports;y()(q,"components",{QCard:m["a"],QCardSection:h["a"],QBtn:f["a"],QBanner:v["a"],QIcon:g["a"],QMarkupTable:_["a"],QSelect:b["a"],QInput:C["a"],QSeparator:k["a"],QBtnGroup:w["a"]});var $=s("4709"),E={components:{ProductAutocomplete:o["a"],ProductAOE:$["a"],OrdersAOE:A,PrinterSelect:n["a"]},data(){return{psocket:this.$sktPreventa,iptsearch:{processing:!1,type:"number",icon:"fas fa-font"},order:null,productsdb:[],wndCounter:{state:!1,product:void 0},wndEditor:{state:!1,product:void 0},wndAdder:{state:!1,product:void 0,similars:[],settings:{stillAdding:!1,deftsupply:{name:"Piezas",id:1,alias:"pzs"}}},wndFactusol:{state:!1,folios:[]},definitor:"",pricelists:[{id:1,alias:"MEN",name:"MENUDEO"},{id:2,alias:"MAY",name:"MAYOREO"},{id:3,alias:"DOC",name:"DOCENA"},{id:4,alias:"CAJ",name:"CAJA"}],metsupplies:[{name:"Piezas",id:1,alias:"pzs"},{name:"Docenas",id:2,alias:"dcs"},{name:"Cajas",id:3,alias:"cjs"}],finish:{state:!1},wndSending:{state:!1,persistent:!1},artduplicate:{state:!1,product:void 0}}},async mounted(){let t=JSON.parse(localStorage.getItem("checkout_adder"));t&&(this.wndAdder.settings=t),this.$store.commit("Preventa/setHeaderState",!1),this.$store.commit("Preventa/setFooterState",!1),this.$q.loading.show({message:"Cargando..."}),this.order=await r["a"].order(this.ordercatch),console.log(this.order),this.$q.loading.hide(),setTimeout((()=>{7==this.currentStep.id&&this.$refs.searcher.focus()}),500)},methods:{setSettings(){localStorage.setItem("checkout_adder",JSON.stringify(this.wndAdder.settings))},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.searcher.focus()},async productConfirm(t){console.log(t),this.$q.loading.show({message:`Confirmando ${t.product.code}...`});let e=this.wndCounter.product,s={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:t.amount,ripack:t.innerpack,comments:""},i=await r["a"].makeCheckout(s);console.log(i),i.error?(console.log(i.error),this.$q.notify({message:"Confirmacion erronea!",icon:"close",color:"negative",timeout:1e3,position:"top"})):(e.ordered.amount=t.amount,e.ordered.toDelivered=t.amount,e.ordered.comments=t.comments,e.ordered._supply_by=t.metsupply.id,e.ordered.ripack=t.innerpack,this.$q.notify({message:"Producto Confirmado!!",position:"center",color:"positive",icon:"done",timeout:1e3}),this.wndCounter.state=!1,this.wndCounter.product=void 0),this.definitor="",this.$q.loading.hide()},async productAdd(t){console.log(t),this.$q.loading.show({message:`Agregando ${t.product.code}...`});this.wndAdder.product;let e={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:t.amount,comments:""},s=await r["a"].makeCheckout(e);if(400==s.server_status)this.$q.notify({message:`Error: ${s.msg}`,color:"negative",icon:"fas fa-bug"});else{let t=s.data;console.log(t),this.order.products.unshift(t),this.wndAdder.product=void 0,this.wndAdder.settings.stillAdding?this.$refs.comp_proauto.putFocus():this.wndAdder.state=!1}this.$q.loading.hide()},async productEdit(t){this.$q.loading.show({message:`Aplicando cambios ${t.product.code}...`}),console.log(t);let e=this.wndEditor.product,s={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:t.amount,ripack:t.innerpack,comments:""},i=await r["a"].makeCheckout(s);i.error?(console.log(i.error),this.$q.notify({message:"No se pudo actualizar el producto",icon:"close",color:"negative",timeout:1e3})):(e.ordered.amount=t.amount,e.ordered.comments=t.comments,e.ordered.toDelivered=t.amount,e.ordered._supply_by=t.metsupply.id,e.ordered.ripack=t.innerpack,this.$q.notify({message:"Producto Actualizado!!",position:"top",color:"positive",icon:"done",timeout:1e3}),this.wndEditor.state=!1,this.wndEditor.product=void 0),this.$q.loading.hide()},async productDelete(t){this.$q.loading.show({message:`Removiendo ${t.product.code}...`});let e={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:0,comments:""},s=this.order.products.findIndex((e=>e.id==t.product.id));console.log(s),this.order.products.slice(s,1);let i=await r["a"].removeProduct(e);if(i.success){let e=this.order.products.findIndex((e=>e.id==t.product.id));console.log(e),this.order.products.splice(e,1)}this.wndEditor.state=!1,this.wndEditor.product=void 0,this.wndCounter.state=!1,this.wndCounter.product=void 0,this.$q.loading.hide()},async productDevolve(t){this.$q.loading.show({message:`Devolviendo ${t.product.code}...`});let e=this.wndEditor.product,s={_product:t.product.id,_order:this.ordercatch.id,_supply_by:t.metsupply.id,amount:0,comments:""},i=await r["a"].makeCheckout(s);i.error?console.log("No se pudo devolver el producto"):(e.ordered.toDelivered=null,this.wndEditor.product=void 0,this.wndEditor.state=!1),this.$q.loading.hide()},codeDefine(){if(this.definitor.trim().length){let t=null;switch(this.listProducts.length){case 0:this.$q.notify({message:"Vaya, este producto no esta en el pedido...",icon:"far fa-grin-beam-sweat",color:"negative",position:"center",timeout:1700});break;case 1:console.log("Excelente, una coincidencia, validar en que lista esta..."),t=this.listProducts[0],t.ordered.toDelivered?this.edit(t):this.confirm(t);break;default:this.$q.notify({message:"Seleccionamos el producto en el filtro, aseguarte de que sea el correcto ...",icon:"far fa-grin-beam-sweat",color:"orange-14",position:"bottom",timeout:1300}),t=this.listProducts[0],t.ordered.toDelivered?this.edit(t):this.confirm(t);break}}else console.log("Abrir buscador..."),this.definitor=""},confirm(t){7==this.currentStep.id&&(this.wndCounter.product=t,this.wndCounter.state=!0)},edit(t){7==this.currentStep.id&&(this.wndEditor.product=t,this.wndEditor.state=!0)},setProduct(t){console.log(t),this.wndAdder.product=t,this.wndAdder.state=!0,this.wndAdder.similars=[]},cancelAOEs(){this.wndAdder.product=void 0,this.wndAdder.state=!1,this.wndAdder.similars=[],this.wndEditor.product=void 0,this.wndEditor.state=!1,this.wndCounter.product=void 0,this.wndCounter.state=!1,this.$refs.searcher.focus(),this.definitor=""},similarCodes(t){this.wndAdder.similars=t},async nextStep(){this.$q.loading.show({message:"Creando folio..."});let t={_order:this.ordercatch.id},e=await r["a"].nextStep(t);if(e.err)this.$q.notify({message:e.err,color:"negative",icon:"fas fa-exclamation-triangle"}),this.$q.loading.hide();else{console.log(e.status);let t=e.status[e.status.length-1];this.wndFactusol.folios=t.details[0],this.wndFactusol.state=!0,this.wndSending.state=!1;let s=Object.assign({},this.order);this.$store.commit("Preventa/updateState",{order:s,newstate:t}),this.psocket.emit("order_update",{newstate:t,order:s,update:"state"}),this.$q.loading.hide()}},async printNotCounted(t){let e={_order:this.order.id,_printer:t.id},s=await r["a"].printNotDelivered(e);s.success?this.$q.notify({message:"Listo!!",icon:"done",color:"positive",position:"center"}):this.$q.notify({message:"Sin conexion a la impresora",color:"negative",icon:"fas fa-bug"}),console.log(s)}},beforeDestroy(){this.$store.commit("Preventa/setHeaderState",!0),this.$store.commit("Preventa/setFooterState",!0)},computed:{ordercatch(){return this.$route.params},originProducts(){return this.order?this.order.products.map((t=>(t.ipack=t.pieces?t.pieces:1,t.pricelistDefault=this.pricelists.find((t=>t.id==this.order.client._price_list)),t.metsupply=(t=>this.metsupplies.find((e=>e.id==t.ordered._supply_by)))(t),t.productType=(t=>{if(t.prices.length){let e=t.prices[0].price,s=t.prices.filter((t=>t.id<=4)).filter((t=>e==t.price)).length==t.prices.length;return s?"off":"std"}return{error:!0,msg:"Producto sin precios"}})(t),t.units=(t=>{switch(t.ordered._supply_by){case 2:return 12*t.ordered.amount;case 3:return t.ordered.amount*t.ipack;default:return t.ordered.amount}})(t),t.boxes=(t=>(t.units/t.ipack).toFixed(1))(t),t.usedprice=(t=>{switch(t.ordered._supply_by){case 2:return t.prices.find((t=>3==t.id));case 3:return t.prices.find((t=>4==t.id));default:if("off"==t.productType)return t.prices.find((t=>1==t.id));if(t.ordered.amount<3)return t.prices.find((t=>1==t.id));if(t.ordered.amount>=3)return t.prices.find((t=>2==t.id));break}})(t),t.total=t.units*t.usedprice.price,t))):[]},listProducts(){if(this.definitor.length){console.log(this.definitor);let t=this.definitor.toUpperCase().trim(),e=this.originProducts.filter((e=>e.barcode?e.barcode.match(t)||e.code.match(t)||e.name.match(t)||e.description.match(t):e.code.match(t)||e.name.match(t)||e.description.match(t)));return e.length?e:[]}return this.originProducts},outbasket(){return this.listProducts.filter((t=>!t.ordered.toDelivered))},inbasket(){return this.listProducts.filter((t=>t.ordered.toDelivered))},pzsOutBasket(){return this.outbasket.length?this.outbasket.reduce(((t,e)=>parseInt(e.units)+t),0):0},pzsInBasket(){return this.inbasket.length?this.inbasket.reduce(((t,e)=>parseInt(e.units)+t),0):0},totalBasket(){return this.inbasket.length?this.inbasket.reduce(((t,e)=>e.total+t),0):0},totalOutBasket(){return this.outbasket.length?this.outbasket.reduce(((t,e)=>e.total+t),0):0},pzsBasket(){return this.inbasket.length?this.inbasket.reduce(((t,e)=>parseInt(e.units)+t),0):0},bxsBasket(){return this.inbasket.length?this.inbasket.reduce(((t,e)=>parseInt(e.boxes)+t),0):0},currentStep(){return this.order?this.order.status:null}}},O=E,P=(s("ff5a"),s("9989")),S=s("e359"),D=s("068f"),z=s("4e73"),I=s("24e8"),Q=s("8f8e"),B=s("4b7e"),N=s("7ff0"),j=Object(u["a"])(O,i,a,!1,null,"1df344bb",null);e["default"]=j.exports;y()(j,"components",{QPage:P["a"],QHeader:S["a"],QBtn:f["a"],QIcon:g["a"],QBanner:v["a"],QImg:D["a"],QMenu:z["a"],QCard:m["a"],QCardSection:h["a"],QDialog:I["a"],QSeparator:k["a"],QSelect:b["a"],QCheckbox:Q["a"],QCardActions:B["a"],QFooter:N["a"],QBtnGroup:w["a"],QInput:C["a"]})},cb28:function(t,e,s){},ff5a:function(t,e,s){"use strict";s("6ac4")}}]);