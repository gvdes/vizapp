(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"42c0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("q-header",{staticClass:"bg-darkl0",attrs:{elevated:""}},[s("div",{staticClass:"row items-stretch justify-between"},[s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$router.push("/preventa")}}}),s("div",{staticClass:"row items-center col bg-dark divlcient"},[s("div",{staticClass:"q-pa-sm col text-center"},[s("div",{staticClass:"text--2"},[t._v("Cliente:")]),s("div",{staticClass:"text-uppercase"},["STD"!=t.client.type?s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fas fa-medal"}}):t._e(),t._v(" "+t._s("STD"==t.client.type?t.client.name:t.client.name+" ("+t.client.id+")")+"\n                        ")],1)]),s("div",{staticClass:"q-pa-sm col text-center"},[s("div",{staticClass:"text--2"},[t._v("Folio:")]),s("div",{staticClass:"text-bold"},[t._v(t._s(t.ordercatch.id))])])]),s("q-btn",{attrs:{flat:"",icon:"menu"},on:{click:function(e){t.ldrawer.state=!0}}})],1),s("div",{staticClass:"row items-center justify-between q-mt-sm"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Modelos")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.basket.length))])]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Unidades")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.totaltkt_pzs))])]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Cajas")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v("0")])])]),s("div",{staticClass:"col text-right q-px-sm"},[s("div",{staticClass:"text--2"},[t._v("Total")]),s("div",{staticClass:"text-green-13 text-h6 text-bold"},[t._v("$ "+t._s(t.totaltkt_pay))])])])]),s("q-drawer",{attrs:{side:"right","content-class":"text-grey-5 bg-darkl0"},on:{hide:function(e){t.startremove.state=!1}},model:{value:t.ldrawer.state,callback:function(e){t.$set(t.ldrawer,"state",e)},expression:"ldrawer.state"}},[s("div",{staticClass:"q-pa-md"},[t.startremove.state?s("div",[s("div",{staticClass:"q-mb-md"},[t._v("Archivar pedido?")]),s("span",{staticClass:"col row q-gutter-md"},[s("q-btn",{staticClass:"col",attrs:{"no-caps":"",label:"Si",color:"negative"},on:{click:t.archive}}),s("q-btn",{staticClass:"col",attrs:{"no-caps":"",label:"No",color:"primary"},on:{click:function(e){t.startremove.state=!1}}})],1)]):s("q-btn",{attrs:{label:"Archivar Pedido",icon:"delete",color:"negative","no-caps":""},on:{click:function(e){t.startremove.state=!0}}})],1),s("q-separator")],1),t.basket.length?s("div",{staticClass:"q-mb-xl q-mt-sm"},[s("q-table",{attrs:{grid:"",flat:"",dark:"","row-key":"id",columns:t.tableproducts.columns,data:t.basket,pagination:t.tableproducts.pagination},scopedSlots:t._u([{key:"item",fn:function(e){return[s("div",{staticClass:"q-pa-sm col-xs-12 text-grey-4 col-sm-6 col-md-4 col-lg-3"},[s("q-card",{staticClass:"bg-darkl1",on:{click:function(s){return t.setprod(e.row,"e")}}},[s("div",{staticClass:"full-width row ds"},[s("div",[s("div",{staticClass:"text-center text-white text-bold q-pa-sm"},[t._v(t._s(e.row.code))]),s("q-img",{staticClass:"divimg",attrs:{src:"https://image.flaticon.com/icons/png/512/578/578158.png"}})],1),s("div",{staticClass:"col text-grey-4 text--2 q-px-sm column justify-around"},[s("div",{staticClass:"text-white text-bold q-pt-sm"},[t._v("CC: "+t._s(e.row.name))]),s("div",{staticClass:"text-grey-5"},[t._v(t._s(e.row.description))]),s("div",{staticClass:"row justify-between"},[s("span",[t._v("Cantidad:")]),s("span",[t._v(t._s(e.row.cant))])]),s("div",{staticClass:"row justify-between"},[s("span",[t._v("Piezas X Caja:")]),s("span",[t._v(t._s(e.row.pieces))])]),s("div",{staticClass:"row justify-between"},[s("span",[t._v("Unidades:")]),s("span",[t._v(t._s(e.row.ppp))])]),s("div",{staticClass:"row justify-between"},[s("span",[t._v("Precio Unitario:")]),s("span",[t._v("$ "+t._s(e.row.uprice))])]),s("div",{staticClass:"row justify-between text-bold"},[s("span",[t._v("Total: ")]),s("span",{staticClass:"text-h6 text-green-13"},[t._v(" $ "+t._s(e.row.total))])])])])])],1)]}},{key:"bottom",fn:function(e){return[s("q-page-sticky",{staticClass:"full-width",attrs:{position:"bottom-left",offset:[10,5]}},[s("div",{staticClass:"row q-pt-xs"},[s("q-btn-group",{staticClass:"bg-dark text-white",attrs:{rounded:""}},[e.pagesNumber>2?s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"first_page",round:"",dense:"",flat:"",disable:e.isFirstPage},on:{click:e.firstPage}}):t._e(),s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"chevron_left",round:"",dense:"",flat:"",disable:e.isFirstPage},on:{click:e.prevPage}}),s("q-btn",{attrs:{flat:"",disable:"","no-caps":""}},[t._v(t._s(e.pagination.page)+" / "+t._s(e.pagesNumber))]),s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"chevron_right",round:"",dense:"",flat:"",disable:e.isLastPage},on:{click:e.nextPage}}),e.pagesNumber>2?s("q-btn",{staticClass:"q-px-sm",attrs:{icon:"last_page",round:"",dense:"",flat:""},on:{click:e.lastPage}}):t._e()],1)],1)])]}}],null,!1,2687050348)})],1):t._e(),s("q-dialog",{attrs:{position:"bottom"},on:{hide:t.cleanWndAOE},model:{value:t.wndAOE.state,callback:function(e){t.$set(t.wndAOE,"state",e)},expression:"wndAOE.state"}},[t.wndAOE.product?s("q-card",{staticClass:"exo bg-darkl0 text-grey-4"},[s("q-card-section",[s("div",{staticClass:"row justify-between items-start text-h6 text-bold"},[s("div",{staticClass:"text-green-13"},[t._v(t._s(t.wndAOE.product.code))]),s("div",{staticClass:"text-light-blue-13"},[t._v(t._s(t.wndAOE.product.name))])]),s("div",{staticClass:"text--2"},[t._v(t._s(t.wndAOE.product.description))])]),s("div",["std"==t.wndAOE.params.type?[s("div",{staticClass:"text-center row justify-between q-px-md"},t._l(t.wndAOE.product.prices,(function(e){return s("div",{key:e.id,staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v(t._s(e.alias))]),s("div",{staticClass:"text-bold"},[t._v("$ "+t._s(e.price))])])})),0)]:t._e(),"off"==t.wndAOE.params.type?[s("div",{staticClass:"text-center text-bold text-orange"},[s("div",[t._v("OFERTA")]),s("div",{staticClass:"text-h4"},[t._v("$ "+t._s(t.wndAOE.product.prices[0].price))])])]:t._e(),s("div",{staticClass:"q-mt-lg row items-end"},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"column"},[t.wndAOE.product.stocks?s("div",[s("q-btn",{staticClass:"text-bold",attrs:{flat:"",dense:"","no-caps":"",color:t.wndAOE.product.stocks[0].stock?"green-13":"amber-13",label:"Stock: "+t.wndAOE.product.stocks[0].stock}})],1):t._e(),s("q-btn",{staticClass:"q-py-xs",attrs:{icon:"fas fa-chevron-up",flat:""},on:{click:t.ctrlPzsUp}}),s("div",{staticClass:"text-center col column q-py-md"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.wndAOE.params.amount,expression:"wndAOE.params.amount"}],staticClass:"text-center exo fieldcant",attrs:{type:"number",min:"1"},domProps:{value:t.wndAOE.params.amount},on:{keyup:t.wAOEcalcs,input:function(e){e.target.composing||t.$set(t.wndAOE.params,"amount",e.target.value)}}})]),s("q-btn",{staticClass:"q-py-xs",attrs:{icon:"fas fa-chevron-down",flat:""},on:{click:t.ctrlPzsDown}})],1)]),s("div",{staticClass:"col"},[s("q-markup-table",{staticClass:"col q-mx-md bg-none text-grey-5",attrs:{dark:"",flat:"",dense:"",square:""}},[s("tbody",[s("tr",[s("td",{attrs:{colspan:"2"}},[s("q-select",{attrs:{label:"Surtir por",borderless:"",dense:"",dark:"",color:"green-13","option-value":"id","option-label":"alias",options:t.metsupply.opts},on:{input:t.wAOEcalcs},model:{value:t.metsupply.model,callback:function(e){t.$set(t.metsupply,"model",e)},expression:"metsupply.model"}})],1)]),s("tr",[s("td",{attrs:{colspan:"2"}},[s("q-input",{attrs:{borderless:"",dense:"",dark:"",flat:"",label:"Notas",color:"green-13"},model:{value:t.wndAOE.params.comments,callback:function(e){t.$set(t.wndAOE.params,"comments",e)},expression:"wndAOE.params.comments"}})],1)]),s("tr",[s("td",[t._v("Piezas X Caja")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.wndAOE.product.pieces))])]),s("tr",[s("td",[t._v("Cajas")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.wndAOE.params.boxes))])]),s("tr",[s("td",[t._v("Unidades")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.wndAOE.params.units))])]),s("tr",[s("td",[t._v("Precio unitario")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.wndAOE.params.price))])]),s("tr",[s("td",[t._v("Total")]),s("td",{attrs:{align:"right"}},[t._v(t._s(t.wndAOE.params.total))])])])])],1)])],2),s("q-separator"),s("div",{staticClass:"row"},[s("q-btn",{staticClass:"col q-py-md",attrs:{color:"green-13",icon:"done",label:"a"==t.wndAOE.action?"Agregar":"Aplicar","no-caps":"",flat:"",loading:t.wndAOE.actions.done.save,disable:t.wndAOE.actions.done.dis},on:{click:t.doneAOE}}),"e"==t.wndAOE.action?s("q-btn",{staticClass:"col q-py-md",attrs:{color:"amber-13",icon:"delete",label:"Remover","no-caps":"",flat:"",loading:t.wndAOE.actions.remove.rem,disable:t.wndAOE.actions.remove.dis},on:{click:t.remove}}):t._e(),s("q-btn",{staticClass:"col q-py-md",attrs:{color:"light-blue-14",icon:"close",label:"Cancelar","no-caps":"",flat:""},on:{click:t.cancelAOE}})],1)],1):t._e()],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:t.wndPrinters.state,callback:function(e){t.$set(t.wndPrinters,"state",e)},expression:"wndPrinters.state"}},[s("PrinterSelect",{ref:"PrinterSelect",attrs:{options:t.printers,title:"Continuar"},on:{clicked:t.setprinter}})],1),s("q-footer",{staticClass:"bg-darkl0 text-white"},[t.currentStep&&1==t.currentStep.id?s("div",{staticClass:"q-pa-xs row items-center"},[s("div",{staticClass:"col text-center"},[s("ProductAutocomplete",{on:{input:t.setprod}})],1),s("div",{staticClass:"text-right"},[t.basket.length?s("q-btn",{attrs:{icon:"fas fa-arrow-right",color:"green-13",flat:""},on:{click:function(e){t.wndPrinters.state=!0}}}):t._e()],1)]):t._e()])],1)},i=[],n=(s("13d5"),s("5542")),r=s("b293"),o=s("a1a1"),d={components:{ProductAutocomplete:r["a"],PrinterSelect:o["a"]},data(){return{moreopts:!1,index:void 0,wndAOE:{state:!1,product:void 0,params:{amount:1,units:0,boxes:0,type:"std",prices:[],pricelist:null,price:0,total:0,stock:0,comments:""},actions:{done:{dis:!1,save:!1},cancel:{dis:!1},remove:{dis:!1,rem:!1}},action:"a"},dbproducts:[],metsupply:{model:{alias:"Piezas",id:1},opts:[{alias:"Piezas",id:1},{alias:"Docenas",id:2},{alias:"Cajas",id:3}]},priceLists:{model:{id:1,name:"Menudo",alias:"MEN"},opts:[{id:1,name:"Menudo",alias:"MEN"},{id:2,name:"Mayoreo",alias:"MAY"},{id:3,name:"Docena",alias:"DOC"},{id:4,name:"Caja",alias:"CAJ"}]},wndPrinters:{state:!1,printer:null},socket:this.$sktPreventa,ldrawer:{state:!1},startremove:{state:!1},tableproducts:{columns:[{name:"id",align:"left",label:"ID",field:"id",sortable:!0},{name:"code",align:"left",label:"Codigo",field:"code",sortable:!0},{name:"name",align:"center",label:"Codigo Corto",field:"name",sortable:!1},{name:"description",align:"center",label:"Description",field:"description",sortable:!1},{name:"cant",align:"center",label:"Cantidad",field:"cant",sortable:!0},{name:"pieces",align:"center",label:"PzsXCaj",field:"pieces",sortable:!0},{name:"ppp",align:"center",label:"PPP",field:"ppp",sortable:!0},{name:"uprice",align:"center",label:"Precio Unitario",field:"uprice",sortable:!0},{name:"total",align:"center",label:"Total",field:"total",sortable:!0}],filtrator:"",pagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:5}}}},async mounted(){this.$store.commit("Preventa/setHeaderState",!1),this.$store.commit("Preventa/setFooterState",!1),this.$q.loading.show({message:"..."}),this.index=await n["a"].order(this.ordercatch),console.log(this.index),this.dbproducts=this.index.products.length?this.index.products:[],this.$q.loading.hide(),this.socket.emit("join",{profile:this.profile,workpoint:this.workin.workpoint,room:`ORD${this.ordercatch.id}`})},beforeDestroy(){this.socket.emit("unjoin",{profile:this.profile,workpoint:this.workin.workpoint,room:`ORD${this.index.id}`})},methods:{sktorder_changestate(t){console.log("Una orden ha cambiado..."),console.log(t)},setprod(t,e="a"){let s=!0;if(1==this.currentStep.id){if("a"==e){let e=this.dbproducts.findIndex((e=>e.code==t.code));e>=0?(this.$q.notify({message:`<strong>${t.code}</strong> ya esta en la lista`,html:!0,color:"orange-13",icon:"fas fa-exclamation-triangle"}),s=!1):console.log("Se agregara el producto en lista")}if(s){this.wndAOE.product=t;let s=this.productType();"err"!=s.type?(this.wndAOE.action=e,this.wndAOE.params.type=s.type,this.wndAOE.params.prices=s.prices,"e"==this.wndAOE.action&&(this.wndAOE.params.amount=this.wndAOE.product.ordered.amount,this.metsupply.model=this.metsupply.opts.filter((t=>t.id==this.wndAOE.product.ordered._supply_by))[0],this.wndAOE.params.comments=t.ordered.comments),this.wAOEcalcs(),this.wndAOE.state=!0):this.$q.notify({message:s.msg,color:"negative",icon:"far fa-dizzy",position:"center"})}}},async archive(){this.$q.loading.show({message:"Archivando pedido..."});let t={_order:this.ordercatch.id},e=await n["a"].archive(t);console.log(e),e.err?this.$q.notify({message:e.err,color:"negative",icon:"fas fa-exclamation-triangle"}):(this.$q.notify({message:"Archivado correcto!!",color:"positive",icon:"done"}),this.$router.push("/preventa"))},async remove(){let t=this.wndAOE.product;this.$q.loading.show({message:`Removiendo ${t.code}...`});let e={_product:t.id,_order:this.ordercatch.id};console.log(e);let s=await n["a"].removeProduct(e);if(console.log(s),s.err)this.$q.notify({message:s.err,icon:"fas fa-exclamation-triangle",color:"negative"});else{let e=this.dbproducts.findIndex((e=>e.id==t.id));this.dbproducts.splice(e,1),this.$q.notify({message:`${t.code} eliminado!`,icon:"done",color:"positive"}),this.$q.loading.hide(),this.wndAOE.state=!1}},ctrlPzsUp(){this.wndAOE.params.amount++,this.wAOEcalcs()},ctrlPzsDown(){this.wndAOE.params.amount>1&&(this.wndAOE.params.amount--,this.wAOEcalcs())},cleanWndAOE(){this.wndAOE.product=void 0,this.wndAOE.action="a",this.wndAOE.params.amount=1,this.wndAOE.params.units=0,this.wndAOE.params.boxes=0,this.wndAOE.params.type="std",this.wndAOE.params.prices=[],this.wndAOE.params.pricelist=null,this.wndAOE.params.price=0,this.wndAOE.params.total=0,this.wndAOE.params.stock=0,this.wndAOE.params.comments="",this.wndAOE.actions.done.dis=!1,this.wndAOE.actions.done.save=!1,this.wndAOE.actions.cancel.dis=!1,this.metsupply.model={alias:"Piezas",id:1}},wAOEcalcs(){let t=this.wndAOE.params.prices,e=null;switch(this.metsupply.model.id){case 2:e=t.filter((t=>3==t.id))[0],this.wndAOE.params.price=e.price,this.wndAOE.params.units=12*this.wndAOE.params.amount,this.wndAOE.params.boxes=(this.wndAOE.params.units/this.wndAOE.product.pieces).toFixed(1);break;case 3:e=t.filter((t=>4==t.id))[0],this.wndAOE.params.price=e.price,this.wndAOE.params.units=this.wndAOE.params.amount*this.wndAOE.product.pieces,this.wndAOE.params.boxes=this.wndAOE.params.amount;break;default:"off"==this.wndAOE.params.type?e=t[0]:this.wndAOE.params.amount<3?e=t.filter((t=>1==t.id))[0]:this.wndAOE.params.amount>=3&&(e=t.filter((t=>2==t.id))[0]),this.wndAOE.params.price=e.price,this.wndAOE.params.units=this.wndAOE.params.amount,this.wndAOE.params.boxes=Math.floor(this.wndAOE.params.amount/this.wndAOE.product.pieces);break}this.wndAOE.params.total=e.price*this.wndAOE.params.units},productType(t=null){let e=t||this.wndAOE.product,s={type:null,prices:[],msg:null};if("STD"==this.client.type){let t=e.prices;if(t.length&&t.reduce(((t,e)=>t+e.price),0)){let e=t[0].price,a=t.filter((t=>t.id<=4)).filter((t=>e==t.price)).length==t.length;return s.type=a?"off":"std",s.prices=t,s}return s.msg="Vaya!!, este producto no tiene precios aun",s.type="err",s}},async doneAOE(){console.log("Aplicando..."),this.wndAOE.actions.done.dis=!0,this.wndAOE.actions.done.save=!0,this.wndAOE.actions.cancel.dis=!0;let t={_product:this.wndAOE.product.id,_order:this.ordercatch.id,_supply_by:this.metsupply.model.id,amount:this.wndAOE.params.amount,comments:this.wndAOE.params.comments},e=await n["a"].add(t);if(e.err)console.log(e.err);else{if(console.log(e.resp),"a"==this.wndAOE.action)this.dbproducts.unshift(e.resp);else{let t=this.dbproducts.findIndex((t=>t.code==e.resp.code));this.dbproducts[t].ordered=e.resp.ordered}this.wndAOE.state=!1}},cancelAOE(){console.log("cancel AOE"),this.wndAOE.state=!1},setprinter(t){this.wndPrinters.printer=t,this.nextStep()},async nextStep(t=null){this.$q.loading.show({message:"Enviando..."});let e={_order:this.ordercatch.id,_printer:this.wndPrinters.printer.id},s=await n["a"].nextStep(e);if(console.log(s),s.err)this.$q.notify({message:s.err,color:"negative",icon:"fas fa-exclamation-triangle"});else{console.log(s.status);let t=s.status[s.status.length-1],a=Object.assign({},this.index);a.status=t,this.socket.emit("order_changestate",{newstate:t,order:a}),this.$router.push("/preventa/"),this.$q.notify({message:`Pedido ${e._order} enviado a ${t.name}`,color:"positive",icon:"done"}),this.$q.loading.hide()}}},computed:{profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},printers(){return this.$store.getters["Preventa/printersSale"]},ordercatch(){return this.$route.params},client(){return this.index?this.index._client?{type:"REG",name:"Peter Parker",id:115}:{type:"STD",name:this.index.name}:{type:"STD"}},basket(){return this.dbproducts.map((t=>{let e=this.metsupply.opts.filter((e=>e.id==t.ordered._supply_by))[0];return t.cant=t.ordered.amount+" "+e.alias,t.type=this.productType(t).type,t.uprice=t.ordered.price,t.ppp=t.ordered.units,t.total=t.ordered.units*t.ordered.price,t}))},totaltkt_pay(){return this.basket.reduce(((t,e)=>t+e.total),0)},totaltkt_pzs(){return this.basket.reduce(((t,e)=>t+e.ppp),0)},currentStep(){return this.index?this.index.status:null}}},c=d,l=(s("b706"),s("2877")),p=s("9989"),m=s("e359"),u=s("9c40"),h=s("0016"),w=s("9404"),v=s("eb85"),g=s("eaac"),b=s("f09f"),f=s("068f"),A=s("de5e"),E=s("e7a9"),O=s("24e8"),x=s("a370"),_=s("2bb1"),C=s("ddd8"),y=s("27f9"),q=s("7ff0"),k=s("eebe"),P=s.n(k),$=Object(l["a"])(c,a,i,!1,null,"41997dc9",null);e["default"]=$.exports;P()($,"components",{QPage:p["a"],QHeader:m["a"],QBtn:u["a"],QIcon:h["a"],QDrawer:w["a"],QSeparator:v["a"],QTable:g["a"],QCard:b["a"],QImg:f["a"],QPageSticky:A["a"],QBtnGroup:E["a"],QDialog:O["a"],QCardSection:x["a"],QMarkupTable:_["a"],QSelect:C["a"],QInput:y["a"],QFooter:q["a"]})},9031:function(t,e,s){},b706:function(t,e,s){"use strict";s("9031")}}]);