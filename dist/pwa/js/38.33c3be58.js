(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"028d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",[e("q-header",{staticClass:"bg-darkl0 QuickRegular"},[e("q-card",{staticClass:"bg-darkl1"},[e("HeaderApp",{attrs:{title:"Ajuste"}}),e("q-card-section",[e("ProductAutocomplete",{attrs:{"workpoint-status":"all"},on:{input:t.selectedProd}})],1)],1)],1),t.product?e("div",{staticClass:"QuickRegular text-white q-gutter-md q-pa-md row items-start justify-center"},[e("q-card",{staticClass:"bg-darkl1"},[e("q-card-section",[e("q-list",{attrs:{dark:"",dense:""}},[e("q-item",[e("q-item-section",[t._v("Codigo")]),e("q-item-section",[t._v(t._s(t.product.code))])],1),e("q-item",[e("q-item-section",[t._v("Descripcion")]),e("q-item-section",{staticClass:"text--2"},[t._v(t._s(t.product.description))])],1),e("q-item",[e("q-item-section",[t._v("Piezas por Caja")]),e("q-item-section",[t._v(t._s(t.product.pieces))])],1),e("q-item",[e("q-item-section",[t._v("Stock")]),t.wkpData?e("q-item-section",[t._v(t._s(t.wkpData.gen))]):e("q-item-section",{staticClass:"text-amber-13"},[t._v("Producto sin Stocks")])],1)],1)],1),e("q-card-section",[e("q-select",{staticClass:"col",attrs:{dark:"",color:"green-13",filled:"",options:t.optionStates,"option-value":"id","option-label":"name",label:"Estatus"},on:{input:t.freshState},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),t.wkpData?[e("div",{staticClass:"q-mt-xs row items-center q-gutter-md"},[e("q-input",{attrs:{filled:"",type:"number",dark:"",label:"Minimo",color:"green-13",min:"0"},on:{change:t.setChanges},model:{value:t.wkpData.min,callback:function(e){t.$set(t.wkpData,"min",e)},expression:"wkpData.min"}}),e("q-input",{attrs:{filled:"",type:"number",dark:"",label:"Maximo",color:"green-13",min:"0"},on:{change:t.setChanges},model:{value:t.wkpData.max,callback:function(e){t.$set(t.wkpData,"max",e)},expression:"wkpData.max"}})],1),t.showSave?e("q-btn",{staticClass:"full-width q-py-md q-mt-md",attrs:{color:"primary",label:"Aplicar Cambios","no-caps":"",icon:"done"},on:{click:t.saveChanges}}):t._e()]:t._e()],2),e("q-separator",{attrs:{dark:""}}),e("q-card-section",[e("q-list",t._l(t.storeExtensions,(function(s,a){return e("q-item",{key:a},[e("q-item-section",[t._v(t._s(s.name))]),e("q-item-section",[t._v(t._s(s.stock))])],1)})),1)],1)],1),e("q-card",{staticClass:"bg-darkl1"},[t.storesStocks.length?e("q-card-section",[e("q-table",{staticClass:"transparent",attrs:{dark:"",flat:"",data:t.storesStocks,columns:t.tableStocks.cols,"row-key":"id"}})],1):t._e()],1)],1):t._e()],1)},o=[],i=s("5ed6"),n=s("f7cb"),c=s("1670"),r=s("b293"),l={components:{ProductAutocomplete:r["a"],HeaderApp:c["a"]},data(){return{listStates:null,product:void 0,state:void 0,cmin:void 0,cmax:void 0,showSave:!1,tableStocks:{cols:[{name:"branch",label:"Sucursal",field:"name",align:"left",sortable:!0},{name:"stock",label:"Stock (pzs)",field:"stock",align:"center",sortable:!0},{name:"statename",label:"Estatus",field:t=>t.status.name,align:"left"}]}}},async mounted(){console.log("%cMontando minimos y maximos","font-size:1.5em; color:gold;"),this.listStates=await n["a"].listStates()},methods:{async saveChanges(){let t={id:this.product.id,min:this.wkpData.min,max:this.wkpData.max},e=await i["a"].setminmax(t);console.log(e),e.error?this.$q.notify({message:e.error,icon:"fas fa-bug",timeout:3e3,color:"negative",position:"center"}):(this.$q.notify({message:"Actualizado!",icon:"done",timeout:1500,color:"positive",position:"center"}),this.cmin=this.wkpData.min,this.cmax=this.wkpData.max,console.log(this.cmin==this.wkpData.min),console.log(this.cmax==this.wkpData.max),this.showSave=!1)},setChanges(){this.showSave=this.cmin!=this.wkpData.min||this.cmax!=this.wkpData.max},selectedProd(t){console.log("Producto Seleccionado"),console.log(t),this.product=void 0,this.product=t,this.state=t.status,this.wkpData&&(this.cmin=this.wkpData.min,this.cmax=this.wkpData.max)},async freshState(){let t={_product:this.product.id,_status:this.state.id},e=await n["a"].freshState(t);e.error?this.$q.notify({message:"El status no pudo actualizarse :(",color:"negative",icon:"fas fa-bug",timeout:1500}):this.$q.notify({message:"Producto actualizado!",timeout:1500,color:"positive",position:"center",icon:"done",html:!0})}},computed:{ismobile(){return this.$q.platform.is.mobile},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},wkpData(){return this.product?this.product.stocks.find((t=>this.workin.workpoint.id==t._workpoint)):void 0},storesStocks(){return this.product.stocks?this.product.stocks.filter((t=>t._workpoint!=this.workin.workpoint.id)):[]},optionStates(){return this.listStates?this.listStates.filter((t=>t.id<=3||6==t.id)):[]},storeExtensions(){if(this.product){let t=this.product.stocks.find((t=>t._workpoint=1));return t?[{name:"Texcoco",stock:t.STC},{name:"Vallejo 236",stock:t.V23},{name:"Los Reyes",stock:t.LRY}]:[]}return[]}}},d=l,m=s("2877"),p=s("9989"),u=s("e359"),k=s("f09f"),h=s("a370"),w=s("1c1c"),q=s("66e5"),f=s("4074"),g=s("ddd8"),b=s("27f9"),v=s("9c40"),S=s("eb85"),_=s("eaac"),x=s("eebe"),C=s.n(x),D=Object(m["a"])(d,a,o,!1,null,null,null);e["default"]=D.exports;C()(D,"components",{QPage:p["a"],QHeader:u["a"],QCard:k["a"],QCardSection:h["a"],QList:w["a"],QItem:q["a"],QItemSection:f["a"],QSelect:g["a"],QInput:b["a"],QBtn:v["a"],QSeparator:S["a"],QTable:_["a"]})}}]);