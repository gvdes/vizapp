(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{1:function(t,e){},"148f":function(t,e,s){},"2cb2":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("q-header",{staticClass:"bg-darkl1 text-grey-5",attrs:{elevated:""}},[o("q-toolbar",[o("q-btn",{attrs:{color:"white",icon:"arrow_back",dense:"",flat:""},on:{click:function(e){return t.$router.go(-1)}}}),o("span",{staticClass:"q-pl-md"},[t._v("Pedido "+t._s(t.ordercatch.id))]),o("q-space"),t.order?o("div",[t._v("Destino: "+t._s(t.order.to.alias))]):t._e()],1),t.order?o("q-toolbar",[o("div",[o("div",[t._v("Origen: "+t._s(t.order.from.alias))]),o("div",{staticClass:"text--2 text-white"},[t._v(t._s(t.humantime(t.order.created_at)))])]),o("q-space"),o("div",{staticClass:"row"},[o("div",{staticClass:"column text-center q-pa-sm"},[o("div",{staticClass:"text-white"},[t._v(t._s(t.ordersize[0]))]),o("div",{staticClass:"text--2"},[t._v("mdls")])]),o("div",{staticClass:"column text-center q-pa-sm"},[o("div",{staticClass:"text-white"},[t._v(t._s(t.ordersize[1]))]),o("div",{staticClass:"text--2"},[t._v("pzs")])])])],1):t._e()],1),o("div",{staticClass:"row q-pt-sm q-pl-sm"},t._l(t.products,(function(e,a){return o("div",{key:a,staticClass:"col-xs-12 col-md-3"},[o("q-card",{staticClass:"bg-darkl1 q-mb-sm q-mr-sm",on:{click:function(s){return t.selItem(e)}}},[o("div",{staticClass:"row items-center q-pt-md"},[o("div",{staticClass:"q-px-lg"},[o("q-img",{staticStyle:{height:"50px",width:"50px"},attrs:{src:s("b4c4")}})],1),o("div",{staticClass:"text-white col"},[o("div",{staticClass:"text-bold"},[t._v(t._s(e.code))]),o("div",[t._v(t._s(e.name))]),o("div",{staticClass:"text--2 text-grey-5"},[t._v(t._s(e.description))])])]),o("div",{staticClass:"col q-px-md"},[o("q-markup-table",{staticClass:"bg-none",attrs:{flat:"",dark:""}},[o("thead",[o("tr",[o("th",[t._v("Sol. ("+t._s(e.units.name)+"s)")]),o("th",[t._v("pzs / caj")]),o("th",[t._v("Disp. (piezas)")])])]),o("tbody",[o("tr",{staticClass:"text-center"},[o("td",[t._v(t._s(e.ordered.amount))]),o("td",[t._v(t._s(e.pieces))]),o("td",[t.order.status.id>1?o("span",{class:e.ordered.stock>=1?"text-green-13":"text-pink-13"},[t._v("\n                                        "+t._s(e.ordered.stock)+"\n                                    ")]):t._e()])])])])],1),e.ordered.comments?o("q-banner",{staticClass:"bg-orange text-white",attrs:{rounded:""}},[t._v(t._s(e.ordered.comments))]):t._e()],1)],1)})),0),o("q-dialog",{attrs:{position:"bottom"},on:{hide:t.wndSetItemReset},model:{value:t.wndSetItem.state,callback:function(e){t.$set(t.wndSetItem,"state",e)},expression:"wndSetItem.state"}},[t.wndSetItem.art?o("q-card",{staticClass:"exo bg-darkl0 text-grey-5"},[o("q-card-section",[o("div",{staticClass:"row text-white items-center justify-between"},[o("span",{staticClass:"text-h6"},[t._v(t._s(t.wndSetItem.art.code))]),o("span",{staticClass:"text-bold"},[t._v(t._s(t.wndSetItem.art.name))])]),o("div",{staticClass:"text--1"},[t._v(t._s(t.wndSetItem.art.description))]),t.editableord?t._e():[o("div",{staticClass:"row q-gutter-md"},[o("div",[t._v("Cantidad: "+t._s(t.wndSetItem.units))])])]],2),t.editableord?o("q-form",[o("q-card-section",{staticClass:"row justify-around items-center"},[o("q-input",{attrs:{dark:"",color:"green-13",min:"1",type:"number","label-slot":"",autofocus:""},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",{staticClass:"row text-amber-13"},[o("q-icon",{attrs:{name:1==t.wndSetItem.art.units?"fas fa-box":"fas fa-puzzle-piece"}}),o("div",{staticClass:"q-pl-sm"},[t._v("\n                                    "+t._s(t.wndSetItem.art.units.name)+"s\n                                    "),3==t.wndSetItem.art.units.id?o("span",[t._v(" ("+t._s(t.wndSetItem.art.pieces)+" pzs / caj)")]):t._e()])],1)]},proxy:!0}],null,!1,3605890503),model:{value:t.wndSetItem.units,callback:function(e){t.$set(t.wndSetItem,"units",e)},expression:"wndSetItem.units"}}),o("q-input",{attrs:{label:"notas",dark:"",color:"green-13",type:"text"},model:{value:t.wndSetItem.notes,callback:function(e){t.$set(t.wndSetItem,"notes",e)},expression:"wndSetItem.notes"}})],1),o("q-card-actions",{attrs:{align:"around"}},[t.duplicate?["ask"==t.deleteitem?o("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"pink-13",icon:"delete",disable:t.wndSetItem.adding},on:{click:function(e){t.deleteitem="confirm"}}}):o("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"pink-13",label:"eliminar "+t.wndSetItem.art.code,disable:t.erasing.state,loading:t.erasing.state},on:{click:t.removeProduct}})]:t._e(),"ask"==t.deleteitem?o("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"green-13",type:"submit",icon:"done",loading:t.wndSetItem.adding,disable:t.wndSetItem.adding},on:{click:t.addProduct}}):o("q-btn",{staticClass:"bg-none",attrs:{dark:"",flat:"",color:"amber-13",label:"cancelar"},on:{click:function(e){t.deleteitem="ask"}}})],2)],1):t._e()],1):t._e()],1),o("q-dialog",{model:{value:t.wndLog.state,callback:function(e){t.$set(t.wndLog,"state",e)},expression:"wndLog.state"}},[t.wndLog.order?o("q-card",{staticClass:"exo bg-darkl0 text-grey-5",staticStyle:{width:"500px"}},[o("q-card-section",[o("q-timeline",{attrs:{dark:"",color:"green-13"}},[o("q-timeline-entry",{attrs:{heading:""}},[t._v("\n                        "+t._s(t.wndLog.order.from.alias)+" "+t._s(t.wndLog.order.id)+"\n                    ")]),t._l(t.wndLog.order.log,(function(e){return o("q-timeline-entry",{key:e.id,attrs:{subtitle:e.details.responsable,title:e.name}},[o("div",{staticClass:"row text-center"},[o("div",{staticClass:"col row items-center"},[o("q-icon",{attrs:{name:"fas fa-hourglass-start",color:"blue-grey-7"}}),o("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.humantime(e.created_at)))])],1),o("div",{staticClass:"col row items-center"},[o("q-icon",{attrs:{name:"fas fa-hourglass-end",color:"blue-grey-7"}}),o("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.humantime(e.updated_at)))])],1),o("div",{staticClass:"col row items-center"},[o("q-icon",{attrs:{name:"fas fa-stopwatch",color:"blue-grey-7"}}),o("span",{staticClass:"text-white q-px-sm"},[t._v(t._s(t.duration(e)))])],1)])])}))],2)],1)],1):t._e()],1),t.order?o("q-footer",{staticClass:"bg-darkl1 text-white",attrs:{elevated:""}},[o("div",{staticClass:"q-pa-xs row justify-between items-center"},[1==t.order.status.id?["ask"==t.nextstep.value?[t.archive.state?[o("q-btn",{attrs:{flat:"",color:"amber-13",label:"cancelar"},on:{click:function(e){t.archive.state=!1}}}),o("q-btn",{attrs:{flat:"",color:"red-13",label:"archivar pedido"},on:{click:t.order_archive}})]:[o("q-btn",{attrs:{flat:"",color:"red-13",icon:"fas fa-archive"},on:{click:function(e){t.archive.state=!0}}}),o("q-select",{staticClass:"text-uppercase",attrs:{dark:"",dense:"",filled:"","fill-input":"",color:"green-13","use-input":"","hide-selected":"","hide-dropdown-icon":"","input-debounce":"0","option-value":"id","option-label":"code",value:t.autocom.model,options:t.autocom.options,type:t.iptsearch.type,behavior:"menu"},on:{filter:t.autocomplete,input:t.selItem},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("Sin coincidencias")])],1)]},proxy:!0},{key:"prepend",fn:function(){return[o("q-btn",{attrs:{type:"button",dense:"",size:"sm",flat:"",icon:t.iptsearch.icon,color:"grey-6"},on:{click:t.toogleIptSearch}})]},proxy:!0},{key:"option",fn:function(e){return[e.opt.status.id>1?o("div",t._b({staticClass:"text-grey-7 q-pa-sm"},"div",e.itemProps,!1),[o("div",{staticClass:"text-bold"},[t._v("\n                                        "+t._s(e.opt.code)+" - "+t._s(e.opt.name)+"\n                                        "),o("q-chip",{staticClass:"text--2",attrs:{color:"red","text-color":"white",icon:"warning",label:e.opt.status.name}})],1),o("div",{staticClass:"text--2",attrs:{caption:""}},[t._v(t._s(e.opt.description))])]):o("div",t._g(t._b({staticClass:"q-pa-sm q-mb-sm"},"div",e.itemProps,!1),e.itemEvents),[o("div",{staticClass:"text-body1 text-bold"},[t._v("\n                                        "+t._s(e.opt.code)+" - "+t._s(e.opt.name)+"\n                                    ")]),o("div",{staticClass:"text--2",attrs:{caption:""}},[t._v(t._s(e.opt.description))])])]}}],null,!1,3831712121)}),o("q-btn",{attrs:{flat:"",color:"green-13",icon:"done",disable:!t.products.length},on:{click:function(e){t.nextstep.value="confirm"}}})]]:[o("q-btn",{attrs:{flat:"",color:"amber-13",label:"cancelar"},on:{click:function(e){t.nextstep.value="ask"}}}),o("q-btn",{attrs:{flat:"",color:"green-13",label:"terminar",disable:t.nextstep.state,loading:t.nextstep.state},on:{click:function(e){return t.changeState()}}})]]:5==t.order.status.id?[t.tostock.state?[o("span"),o("span",[o("q-btn",{attrs:{flat:"",color:"green-13",label:"Confirmar entrega"},on:{click:function(e){return t.changeState(9)}}}),o("q-btn",{attrs:{flat:"",color:"amber-13",label:"cancelar"},on:{click:function(e){t.tostock.state=!1}}})],1)]:[o("span",{staticClass:"text-grey-4 q-pl-md"},[t._v(t._s(t.order.status.name))]),o("span",[o("q-btn",{attrs:{flat:"",color:"green-13",icon:"history"},on:{click:t.showLog}}),t.owner?o("q-btn",{attrs:{flat:"",color:"green-13",icon:"fas fa-people-carry"},on:{click:function(e){t.tostock.state=!0}}}):t._e()],1)]]:[o("span",{staticClass:"text-grey-4 q-pl-md"},[t._v(t._s(t.order.status.name))]),o("q-btn",{attrs:{flat:"",color:"green-13",icon:"history"},on:{click:t.showLog}})],t.order.printed?o("q-btn",{attrs:{icon:"print",flat:"",color:"green-13",loading:t.print.state,disable:t.print.state},on:{click:t.reprint}}):t._e()],2)]):t._e()],1)},a=[],i=(s("13d5"),s("a434"),s("e6cf"),s("498a"),s("bd4c")),r=s("f7cb"),n=s("bd9f"),d=s("8055"),c=s.n(d),l={data(){return{seltypeunit:[{label:"cajas",value:1},{label:"piezas",value:2}],products:[],leftdrawer:!0,order:void 0,iptsearch:{value:"",processing:!1,type:"text",icon:"fas fa-hashtag"},wndSetItem:{state:!1,adding:!1,idxlist:void 0,art:void 0,units:1,notes:"",unittype:void 0},wndLog:{state:!1,order:void 0},deleteitem:"ask",erasing:{state:!1},nextstep:{value:"ask",state:!1},sounds:{moved:new Audio("sounds/moved.mp3")},archive:{state:!1},tostock:{state:!1},duplicate:!1,print:{state:!1},autocom:{model:null,options:void 0}}},async beforeMount(){this.$store.commit("Layout/hideToolbarModule"),this.order=await n["a"].find(this.ordercatch.id),this.products=this.order.products},async mounted(){console.log(this.owner),this.vsocket=await c()(this.$vsocket),this.vsocket.emit("using_order",{profile:this.profile,order:this.ordercatch}),this.vsocket.on("order_changestate",(t=>{console.log("Se ha cambiado el status a un pedido... "),t.order.id==this.ordercatch.id?(console.log("y si es este"),console.log(t),this.order.log=t.order.log,this.order.status=t.order.status,this.sounds.moved.play()):console.log("... pero no es este")}))},beforeDestroy(){this.$store.commit("Layout/showToolbarModule")},methods:{autocomplete(t,e,s){let o={params:{code:t.trim()}};r["a"].autocomplete(o).then((t=>{let s=t.data;e((()=>{this.autocom.options=s}))})).catch((t=>{console.log(t)}))},showLog(){this.wndLog.order=this.order,this.wndLog.state=!0},reprint(){console.log("reimprimiendo");let t={_requisition:this.ordercatch.id};this.print.state=!0,n["a"].reprint(t).then((t=>{console.log(t),this.print.state=!1})).catch((t=>{console.log(t)}))},changeState(t=null){let e=t||parseInt(this.order.status.id)+1,s={id:this.ordercatch.id,_status:e},o="",a={id:e,name:void 0};switch(e){case 2:console.log("Moviendo a por surtir"),a.name="Por surtir",o="Enviando pedido...";break;case 9:console.log("Moviendo a Terminados"),a.name="Recibido",o="Recibiendo y finalizando...";break}this.$q.loading.show({message:o}),n["a"].nextstep(s).then((t=>{console.log("%cLa respuesta llego...","font-size:1.5em;color:yellow;");let e=t.data;console.log(e),this.order=e.order,this.products=e.order.products,this.$q.loading.hide(),this.$q.notify({color:"positive",icon:"done",position:"center"}),this.vsocket.emit("order_changestate",{state:a,profile:this.profile,order:this.order})})).catch((t=>{console.log(t)}))},wndSetItemReset(){this.wndSetItem.idxlist=void 0,this.wndSetItem.art=void 0,this.wndSetItem.units=1,this.wndSetItem.notes="",this.wndSetItem.adding=!1,this.deleteitem="ask"},order_archive(){let t={id:this.ordercatch.id,_status:10};this.$q.loading.show({message:"Archivando pedido, espera..."}),n["a"].nextstep(t).then((t=>{let e=t.data,s={id:10,name:"Cancelado"};console.log(e),this.order=e.order,this.$q.loading.hide(),this.$q.notify({message:"Pedido archivado",color:"positive",icon:"done",position:"center"}),this.vsocket.emit("order_changestate",{state:s,profile:this.profile,order:this.order}),this.$router.push("/pedidos")})).catch((t=>{console.log(t)}))},removeProduct(t){this.erasing.state=!0;let e={_product:this.wndSetItem.art.id,_requisition:this.ordercatch.id};n["a"].remove(e).then((t=>{t.data;this.products.splice([this.wndSetItem.idxlist],1),this.erasing.state=!1,this.wndSetItem.state=!1})).catch((t=>{console.log(t)}))},addProduct(){console.log("agregando..."),this.wndSetItem.adding=!0;let t=new Object,e=this.wndSetItem.art;e.amount=this.wndSetItem.units,e.comments=this.wndSetItem.notes,t._product=e.id,t.amount=e.amount,t.comments=e.comments,t._requisition=this.ordercatch.id,n["a"].add(t).then((t=>{let e=this.wndSetItem.idxlist,s=t.data;if(e>=0){console.log("Articulo editado");let t=this.products[e];t.ordered.amount=this.wndSetItem.units,t.ordered.comments=this.wndSetItem.notes}else this.products.unshift(s);this.wndSetItem.state=!1,this.autocom.options=void 0,this.autocom.model=null})).catch((t=>{console.log(t)}))},selItem(t){console.log(t);let e=this.products.findIndex((e=>t.id==e.id));if(e>=0){console.log("Editando producto"),this.duplicate=!0;let t=this.products[e];this.wndSetItem.notes=t.ordered.comments,this.wndSetItem.units=t.ordered.amount,this.wndSetItem.idxlist=e,this.wndSetItem.art=t}else console.log("Agregando producto..."),this.duplicate=!1,this.wndSetItem.art=t;this.wndSetItem.state=!0},toogleIptSearch(){switch(this.iptsearch.type){case"text":this.iptsearch.type="number",this.iptsearch.icon="fas fa-font";break;case"number":this.iptsearch.type="text",this.iptsearch.icon="fas fa-hashtag";break}this.$refs.iptsearch.focus()}},computed:{profile:{get(){return this.$store.getters["Account/profile"]}},editableord(){return!!this.order&&1==this.order.status.id},ordercatch(){return this.$route.params},ordersize(){if(this.order){let t=this.products.length;if(t){let e=this.products.reduce(((t,e)=>parseInt(e.ordered.amount)+t),0);return[t,e]}return[0,0]}return[0,0]},humantime(){return t=>{let e=Date.now(),s=Date.parse(t),o=i["b"].getDateDiff(e,s,"days");switch(o){case 0:return"Hoy a las "+i["b"].formatDate(s,"hh:mm a");case 1:return"Ayer a las "+i["b"].formatDate(s,"hh:mm a");default:return`Hace ${o} dias, a las `+i["b"].formatDate(s,"hh:mm a")}}},duration(){return t=>{let e=Date.parse(t.created_at),s=Date.parse(t.updated_at),o=i["b"].getDateDiff(s,e,"minutes");if(o<=59)return o+"m";{let t=parseFloat(o/60).toFixed(2).split(".");return`${t[0]}h ${t[1]}m`}}},owner(){return!!this.order&&this.order.created_by.id==this.profile.me.id},isduplicate(){return t=>this.products.findIndex((e=>e.code==t))>=0}}},u=l,p=(s("c9d9"),s("2877")),h=s("9989"),m=s("e359"),g=s("65c6"),b=s("9c40"),v=s("2c91"),f=s("f09f"),w=s("068f"),q=s("2bb1"),A=s("54e1"),x=s("24e8"),k=s("a370"),C=s("0378"),S=s("ddd8"),I=s("27f9"),y=s("0016"),D=s("4b7e"),Q=s("05eb"),_=s("74af"),L=s("7ff0"),H=s("66e5"),T=s("4074"),j=s("b047"),E=s("eebe"),O=s.n(E),B=Object(p["a"])(u,o,a,!1,null,null,null);e["default"]=B.exports;O()(B,"components",{QPage:h["a"],QHeader:m["a"],QToolbar:g["a"],QBtn:b["a"],QSpace:v["a"],QCard:f["a"],QImg:w["a"],QMarkupTable:q["a"],QBanner:A["a"],QDialog:x["a"],QCardSection:k["a"],QForm:C["a"],QSelect:S["a"],QInput:I["a"],QIcon:y["a"],QCardActions:D["a"],QTimeline:Q["a"],QTimelineEntry:_["a"],QFooter:L["a"],QItem:H["a"],QItemSection:T["a"],QChip:j["a"]})},b4c4:function(t,e){t.exports="data:image/png;base64,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"},bd9f:function(t,e,s){"use strict";var o=s("31b8");e["a"]={index(){return o["b"].get("/requisition").then((t=>t.data)).catch((t=>{console.log(t)}))},create(t){return console.log("Creando pedido..."),o["b"].post("/requisition",t)},find(t){return console.log("traiendo "+t),o["b"].get("/requisition/"+t).then((t=>{let e=t.data;return console.log(e),e})).catch((t=>{console.log(t)}))},add(t){return console.log(t),o["b"].post("/requisition/add",t)},remove(t){return console.log(t),o["b"].post("/requisition/remove",t)},nextstep(t){return o["b"].post("/requisition/next",t)},dashboard(){return o["b"].get("/requisition/dashboard").then((t=>{let e=t.data;return e})).catch((t=>{console.log(t)}))},reprint(t){return o["b"].post("/requisition/reimpresion",t)}}},c9d9:function(t,e,s){"use strict";var o=s("148f"),a=s.n(o);a.a},f7cb:function(t,e,s){"use strict";var o=s("31b8");e["a"]={autocomplete(t){return o["b"].get("/product/autocomplete",t)},getMassive(t){return o["b"].post("/product/getMassive",t)},labelStates(){return o["b"].get("/product/getStatus").then((t=>t.data.status)).catch((t=>{console.log(t)}))},updateState(t){return o["b"].post("/product/updateStatus",t)}}}}]);