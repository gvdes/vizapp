(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"649c":function(e,t,a){},a714:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("q-page",{attrs:{padding:""}},[t("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[t("q-card",{staticClass:"bg-darkl1"},[t("toolbar-account",{attrs:{title:"Reportes"}})],1)],1),e.stats?t("div",{staticClass:"row q-pl-sm"},e._l(e.reports,(function(a,s){return t("div",{key:s,staticClass:"col-md-3 col-xs-6 q-pb-sm q-pr-sm",on:{click:function(t){return e.genReport(a)}}},[t("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[t("q-card-section",{class:a.clases},[t("span",[e._v(e._s(a.value))])]),t("div",{staticClass:"text--1 text-right q-pa-xs text-white"},[e._v(e._s(a.description))])],1)],1)})),0):t("div",{staticClass:"q-py-xl text-center text-green-13"},[e._v("\n\t\t\tCalculando, porfavor espera...\n\t\t")]),t("div",{staticClass:"q-pt-md"},[t("ProductSales")],1)],1)},l=[],o=(a("ddb0"),a("2b3d"),a("9861"),a("1d6c")),n=a("5ed6"),r=function(){var e=this,t=e._self._c;return e.loadingSales?t("div",{staticClass:"q-pa-md text-center text-green-13"},[e._v("\n  Cargando productos...\n")]):t("div",{staticClass:"q-mt-md"},[t("q-separator",{attrs:{dark:""}}),t("div",{staticClass:"row items-start justify-between q-pt-md"},[t("div",{staticClass:"text-h6"},[e._v("Venta (pzs)")]),t("div",{staticClass:"row"},[t("q-btn",{attrs:{flat:"",color:"green-13",icon:"sync"},on:{click:e.getSales}}),t("q-select",{attrs:{dense:"",dark:"",options:e.optRanges,label:"Vista",filled:""},on:{input:e.getSales},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1)]),t("div",{staticClass:"row q-pa-md q-gutter-md justify-center"},[t("q-card",{staticClass:"bg-darkl1 col-xs-12"},[t("q-table",{ref:"tablesales",staticClass:"transparent",attrs:{dark:"",flat:"","row-key":"id",data:e.sales,columns:e.table1.columns,pagination:e.table1.pagination,"visible-columns":e.table1.viewcols,filter:e.table1.filter},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"full-width row items-center"},[t("div",{staticClass:"col text-grey-5"},[e._v("ARTICULOS CON VENTAS ("+e._s(e.sales.length)+")")]),t("div",{staticClass:"row"},[t("q-btn",{attrs:{flat:"",icon:"fas fa-file-excel",color:"green-13",rounded:""},on:{click:e.downSales}}),t("q-input",{attrs:{rounded:"",dark:"",color:"green-13",dense:"",type:"text",label:"Buscar"},model:{value:e.table1.filter,callback:function(t){e.$set(e.table1,"filter",t)},expression:"table1.filter"}})],1)])]},proxy:!0}])})],1),t("q-card",{staticClass:"bg-darkl1 col-xs-12"},[t("q-table",{ref:"tablenosales",staticClass:"transparent",attrs:{dark:"",flat:"","row-key":"id",data:e.nosales,columns:e.table1.columns,pagination:e.table1.pagination,"visible-columns":e.table1.viewcols,filter:e.table1.filter},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"full-width row items-center"},[t("div",{staticClass:"col text-grey-5"},[e._v("ARTICULOS SIN VENTAS ("+e._s(e.nosales.length)+")")]),t("div",{staticClass:"row"},[t("q-btn",{attrs:{flat:"",icon:"fas fa-file-excel",color:"green-13",rounded:""},on:{click:e.downNoSales}}),t("q-input",{attrs:{rounded:"",dark:"",color:"green-13",dense:"",type:"text",label:"Buscar"},model:{value:e.table1.filter,callback:function(t){e.$set(e.table1,"filter",t)},expression:"table1.filter"}})],1)])]},proxy:!0}])})],1)],1)],1)},i=[],c=a("31b8"),d={salesStore(e){return c["b"].post("C/salesstore",e).then((e=>e)).catch((e=>e.response))}},p=a("e8ae"),u=a.n(p),b=a("21a6"),f=a.n(b),g=a("fe09"),x={data(){return{loadingSales:!1,optRanges:[{id:"day",label:"Dia"},{id:"week",label:"Semana"},{id:"month",label:"Mes"}],range:{id:"day",label:"Dia"},tablesales:null,tablenosales:null,table1:{viewcols:["code","descript","sale","stock","min","max"],columns:[{name:"id",label:"ID",field:"id",sortable:!0,align:"center"},{name:"shortcode",label:"CodigoCorto",field:"name",sortable:!0,align:"center"},{name:"code",label:"Codigo",field:"code",sortable:!0,align:"center",classes:e=>e.STO<=0?"text-bold text-red":e.STO>0&&e.STO<=e.MIN?"text-orange-13":void 0},{name:"descript",label:"Descripcion",field:"description",align:"left"},{name:"sale",label:"Venta (pzs)",field:"VEN",sortable:!0,align:"center"},{name:"stock",label:"Stock (pzs)",field:"STO",sortable:!0,align:"center",classes:e=>e.STO<=0?"text-bold text-red":e.STO>0&&e.STO<=e.MIN?"text-orange-13":void 0},{name:"min",label:"min (pzs)",field:"MIN",sortable:!0,align:"center"},{name:"max",label:"max (pzs)",field:"MAX",sortable:!0,align:"center"},{name:"sect",label:"Seccion",field:"SECCION",sortable:!0},{name:"fam",label:"Familia",field:"FAMILIA",sortable:!0},{name:"cat",label:"Categoria",field:"CATEGORIA",sortable:!0}],filter:"",pagination:{sortBy:"sale",descending:!0,rowsPerPage:20}},productsdb:[]}},mounted(){console.log("Ooli"),this.getSales()},methods:{async getSales(){this.loadingSales=!0,console.log("Vamo a traer las ventas",this.range.id);const e=await d.salesStore({view:this.range.id});if(console.log(e),200==e.status){let t=e.data;this.loadingSales=!1,this.productsdb=t.rows}else console.error(e),alert(`Error ${e.status}: ${e.data}`)},async downSales(){this.$q.loading.show({message:"Generando documento, espera..."});let e=g["a"].formatDate(Date.now(),"YYMMDD_HHmmss"),t=`Ventas_${this.workin.workpoint.alias}_${e}.xlsx`,a=this.$refs.tablesales.data;const s=new u.a.Workbook,l=s.addWorksheet("Venta x Producto");let o=2;l.columns=this.table1.columns.map((e=>({header:e.label,key:e.name}))),a.forEach((e=>{l.getRow(o).values=[e.id,e.name,e.code,e.description,e.VEN,e.STO,e.MIN,e.MAX,e.SECCION,e.FAMILIA,e.CATEGORIA],o++})),await s.xlsx.writeBuffer().then((e=>{f()(new Blob([e],{type:"application/octet-stream"}),t),this.$q.loading.hide()})).catch((e=>{console.error(e)}))},async downNoSales(){this.$q.loading.show({message:"Generando documento, espera..."});let e=g["a"].formatDate(Date.now(),"YYMMDD_HHmmss"),t=`NoVentas_${this.workin.workpoint.alias}_${e}.xlsx`,a=this.$refs.tablenosales.data;const s=new u.a.Workbook,l=s.addWorksheet("Sin Venta x Producto");let o=2;l.columns=this.table1.columns.map((e=>({header:e.label,key:e.name}))),a.forEach((e=>{l.getRow(o).values=[e.id,e.name,e.code,e.description,e.VEN,e.STO,e.MIN,e.MAX,e.SECCION,e.FAMILIA,e.CATEGORIA],o++})),await s.xlsx.writeBuffer().then((e=>{f()(new Blob([e],{type:"application/octet-stream"}),t),this.$q.loading.hide()})).catch((e=>{console.error(e)}))},async setRanges(e){console.log(e.id),console.log("Se actualiza el date ranges")}},computed:{sales(){return this.productsdb.filter((e=>e.VEN))},nosales(){return this.productsdb.filter((e=>!e.VEN))},workin(){return this.$store.getters["Account/workin"]}}},m=x,h=a("2877"),w=a("eb85"),k=a("9c40"),v=a("ddd8"),C=a("f09f"),S=a("eaac"),q=a("27f9"),y=a("eebe"),_=a.n(y),$=Object(h["a"])(m,r,i,!1,null,null,null),A=$.exports;_()($,"components",{QSeparator:w["a"],QBtn:k["a"],QSelect:v["a"],QCard:C["a"],QTable:S["a"],QInput:q["a"]});var I={components:{ToolbarAccount:o["a"],ProductSales:A},data(){return{stats:null,clases:{1:"text-h4 text-left text-light-blue-13",2:"text-h4 text-left text-green-13",3:"text-h4 text-left text-green-13",4:"text-h4 text-left text-orange-14",5:"text-h4 text-left text-orange-14",6:"text-h4 text-left text-orange-14",7:"text-h4 text-left text-pink-14",8:"text-h4 text-left text-pink-14",9:"text-h4 text-left text-pink-14",10:"text-h4 text-left text-pink-14",11:"text-h4 text-left text-pink-14",12:"text-h4 text-left text-light-blue-13"}}},async beforeMount(){this.stats=await n["a"].index()},methods:{genReport(e){this.$vizapi.defaults.responseType="blob";let t=`${e.description} - ${this.workin.workpoint.alias}`;this.$q.loading.show({message:`Generando reporte (${t}), porfavor espera...`});let a={_type:e._excel};console.log(a),n["a"].report(a).then((e=>{console.log(e);const a=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=a,s.setAttribute("download",t+".xlsx"),document.body.appendChild(s),s.click(),this.$vizapi.defaults.responseType="json",this.$q.loading.hide()})).catch((e=>{console.log(e),this.$q.notify({icon:"fas fa-bug",color:"negative",message:"Vaya, algo salio mal "})}))}},computed:{reports(){return this.stats?(console.log(this.stats),this.stats.map((e=>(e.clases=this.clases[e._excel],e)))):null},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]}}},O=I,N=(a("aa6c"),a("9989")),T=a("e359"),E=a("a370"),M=Object(h["a"])(O,s,l,!1,null,null,null);t["default"]=M.exports;_()(M,"components",{QPage:N["a"],QHeader:T["a"],QCard:C["a"],QCardSection:E["a"]})},aa6c:function(e,t,a){"use strict";a("649c")}}]);