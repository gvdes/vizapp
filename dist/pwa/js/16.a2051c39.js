(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"1d6c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-toolbar",{staticClass:"row justify-between items-center"},[a("span",[t.iconlauncher?a("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):a("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),a("span",{staticClass:"col text-center"},[a("span",[t._v(t._s(t.workin.workpoint.alias))]),a("br"),a("span",[t._v(t._s(t.title))])]),a("span",{staticClass:"text-right"},[a("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[a("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),a("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[a("q-list",{staticClass:"text-grey-8 exo",staticStyle:{"min-width":"150px"}},[a("q-item",[a("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),a("q-separator"),a("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[a("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},r=[],o={name:"ToolbarAccount",props:{title:{type:String,required:!0},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},n=o,i=a("2877"),l=a("65c6"),c=a("9c40"),d=a("0016"),p=a("068f"),m=a("4e73"),h=a("1c1c"),u=a("66e5"),f=a("4074"),b=a("eb85"),g=a("eebe"),v=a.n(g),y=Object(i["a"])(n,s,r,!1,null,null,null);e["a"]=y.exports;v()(y,"components",{QToolbar:l["a"],QBtn:c["a"],QIcon:d["a"],QImg:p["a"],QMenu:m["a"],QList:h["a"],QItem:u["a"],QItemSection:f["a"],QSeparator:b["a"]})},"2b4c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[a("q-card",{staticClass:"bg-darkl1"},[a("toolbar-account",{attrs:{title:"Ventas"}})],1)],1),a("global-sale",{attrs:{branches:t.branches,range:t.ranges,loadingBalance:t.loadingBalance},on:{settingRanges:t.setted,openBranch:t.openBranch}}),t.usedBranch.main?a("branch-resume",{attrs:{rangesData:t.ranges_data,branch:t.usedBranch},on:{closeBranch:function(e){t.usedBranch.main=null}}}):a("global-resume",{attrs:{branches:t.branches,averageSale:t.averageSale,paymentMethods:t.paymentMethods}})],1)},r=[],o=(a("e6cf"),a("31b8")),n={test(){console.log("cluster is working")},index(t){return o["b"].post("/ventas",t).then((t=>{let e=t.data;return e})).catch((t=>{console.log(t)}))},openBranch(t){return o["b"].post("/ventas/tienda",t).then((t=>{let e=t.data;return e})).catch((t=>{console.log(t)}))}},i=a("1d6c"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-darkl1"},[a("q-card",{staticClass:"bg-none"},[a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col text-h6"},[t._v("Ventas")]),a("div",[a("div",{staticClass:"row justify-end items-cente"},[a("q-select",{staticClass:"col",staticStyle:{"max-width":"130px"},attrs:{dark:"",color:"green-13",label:"Vista",options:t.range},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),"p"==t.date.value?a("div",{staticClass:"column"},[a("q-btn",{staticClass:"bg-none",attrs:{icon:"event",dark:"",flat:"",rounded:"",label:"del "+t.date_from}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{color:"grey-10",mask:"YYYY-MM-DD","first-day-of-week":"1",options:t.fromOptions,"navigation-min-year-month":"2020/01","navigation-max-year-month":"2020/12"},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Ok",flat:""}})],1)])],1)],1),a("q-btn",{staticClass:"bg-none",attrs:{icon:"event",dark:"",flat:"",rounded:"",label:"al "+t.date_to}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"},on:{hide:t.emmitDays}},[a("q-date",{attrs:{color:"grey-10",mask:"YYYY-MM-DD","first-day-of-week":"1",options:t.toOptions},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Ok",flat:""}})],1)])],1)],1)],1):t._e()],1),a("div",{staticClass:"q-pa-sm text--1 text-grey-4"},[t._v(t._s(t.viewDate))])])]),a("q-card-section",{staticClass:"text-center text-h4 text-green-13"},[t.loadingBalance?a("span",[a("q-spinner-pie",{attrs:{color:"green-13",size:"1.3em"}})],1):a("span",[t._v("$ "+t._s(t.formatted(t.totalSale)))])]),a("q-card-section",[a("apexchart",{ref:"chartglobalsale",attrs:{width:"97%",height:"400px",type:"bar",options:t.chartOptions,series:t.serieSales}})],1)],1)],1)},c=[],d=(a("13d5"),a("1321")),p=a.n(d),m={name:"GlobalSale",components:{apexchart:p.a},props:{branches:{type:Array,default:[]},range:{type:Array},loadingBalance:{type:Boolean,default:!1}},updated(){let t=this.branches.map((t=>t.alias));this.$refs.chartglobalsale.updateOptions({labels:t})},data(){return{date:{value:"t",label:"Diaria"},date_from:this.$moment().format("YYYY/MM/DD"),date_to:this.$moment().format("YYYY/MM/DD"),chartOptions:{chart:{id:"global_sale",background:"none",events:{dataPointSelection:(t,e,a)=>{this.openBranch(a.dataPointIndex)}}},tooltip:{y:{formatter:t=>"$"+this.formatted(t)}},toolbar:{show:!1},theme:{palette:"palette6",mode:"dark"},colors:["#3ae374"],grid:{borderColor:"#57606f"},xaxis:{categories:[]},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",barHeight:"90%"}},dataLabels:{formatter:(t,e)=>"$ "+this.formatted(t),dropShadow:{enabled:!0,left:1,top:1,opacity:.5}}}}},methods:{emmitDays(){let t={date_from:this.date_from,date_to:this.date_to};this.$emit("settingRanges",t)},openBranch(t){this.$emit("openBranch",t)}},computed:{viewDate(){console.log("%cEjecutando viewDate","font-size:1.5em;color:gold;");let t="",e=this.$moment().startOf("year").format("DD"),a=this.$moment().startOf("month").format("DD"),s=this.$moment().startOf("week").format("DD"),r=this.$moment().format("dddd"),o=this.$moment().format("DD"),n=this.$moment().format("MMMM"),i=this.$moment().format("MM"),l=this.$moment().format("YYYY");switch(this.date_to=`${l}-${i}-${o}`,this.date.value){case"t":this.date_from=`${l}-${i}-${o}`,t=`${r} ${o} de ${n}, ${l}`;break;case"w":this.date_from=this.$moment().startOf("week").format("YYYY-MM-DD"),t=`Del ${s} al ${o} de ${n}, ${l}`;break;case"m":this.date_from=this.$moment().startOf("month").format("YYYY-MM-DD"),t=`Del ${a} al ${o} de ${n}, ${l}`;break;case"y":this.date_from=this.$moment().startOf("year").format("YYYY-MM-DD"),t=`Del ${e} de Enero al ${o} de ${n}, ${l}`;break;case"p":console.log("vista personalizada");break}return"p"!=this.date.value&&this.emmitDays(),t},fromOptions(){let t=this.$moment(),e=(t.format("YYYY/MM/DD"),t.add(1,"d").format("YYYY/MM/DD")),a=t.startOf("year").format("YYYY/MM/DD");return t=>t>=a&&t<e},toOptions(){let t=this.$moment(this.date_from).format("YYYY/MM/DD"),e=(this.$moment(this.date_from).format("YYYY/MM/DD"),this.$moment().format("YYYY/MM/DD"));return a=>a>=t&&a<=e},totalSale(){return this.branches.reduce(((t,e)=>parseFloat(e.venta)+t),0)},formatted(){return t=>new Intl.NumberFormat("es-MX").format(t)},serieSales(){let t=this.branches.map((t=>t.venta));return[{name:"Venta",data:t}]}}},h=m,u=a("2877"),f=a("f09f"),b=a("ddd8"),g=a("9c40"),v=a("7cbe"),y=a("52ee"),_=a("a370"),x=a("163c"),k=a("7f67"),$=a("eebe"),C=a.n($),w=Object(u["a"])(h,l,c,!1,null,null,null),q=w.exports;C()(w,"components",{QCard:f["a"],QSelect:b["a"],QBtn:g["a"],QPopupProxy:v["a"],QDate:y["a"],QCardSection:_["a"],QSpinnerPie:x["a"]}),C()(w,"directives",{ClosePopup:k["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"row items-start justify-center q-gutter-md"},[a("q-card",{staticClass:"bg-darkl1 text-grey-6"},[a("q-card-section",[a("div",{staticClass:"text-h4 text-light-blue-13"},[t._v(t._s(t.formatcant(t.labelTickets)))]),a("div",{staticClass:"text-caption"},[t._v("Operaciones")])]),a("q-separator"),a("div",{staticClass:"q-py-md"},[a("apexchart",{ref:"chart_operations",attrs:{type:"donut",options:t.chartOperationsOptions,series:t.operationsSeries}})],1)],1),a("q-card",{staticClass:"bg-darkl1 text-grey-6"},[a("q-card-section",[a("div",{staticClass:"text-h4 text-light-blue-13"},[t._v("$ "+t._s(t.formatcant(t.averageSale)))]),a("div",{staticClass:"text-caption"},[t._v("Ticket Promedio")])]),a("q-separator"),a("div",{staticClass:"q-py-md"},[a("apexchart",{ref:"chart_average",attrs:{type:"bar",options:t.chartAverageOptions,series:t.averageSeries}})],1)],1),a("q-card",{staticClass:"bg-darkl1 text-grey-6"},[a("q-card-section",[a("div",{staticClass:"text-caption"},[t._v("Fromas de Pago")])]),a("q-separator"),a("div",{staticClass:"q-py-md"},[a("apexchart",{ref:"chart_paymethods",attrs:{type:"donut",options:t.chartPayMethodsOptions,series:t.payMethodsSeries}})],1)],1)],1)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-center items-center q-my-lg"},[a("span",{staticClass:"text-h6"},[t._v("Resumen Global")])])}],M={components:{apexchart:p.a},props:{branches:{type:Array,default:()=>[]},averageSale:{type:Number,default:0},paymentMethods:{type:Array,default:()=>[]}},updated(){console.log("EL COMPONENTE DONUT HA SIDO MODIFICADO!!!");let t=this.branches.map((t=>t.alias));this.$refs.chart_operations.updateOptions({labels:t}),this.$refs.chart_average.updateOptions({labels:t});let e=this.paymentMethods.map((t=>t.alias));this.$refs.chart_paymethods.updateOptions({labels:e})},data(){return{chartOperationsOptions:{chart:{type:"donut",background:"none"},toolbar:{show:!1},theme:{mode:"dark",palette:"palette10"},stroke:{colors:["#57606f"],width:1},labels:[],dataLabels:{formatter:function(t,e){return e.w.config.series[e.seriesIndex]}}},chartAverageOptions:{chart:{type:"bar",background:"none"},toolbar:{show:!1},theme:{mode:"dark",palette:"palette10"},grid:{borderColor:"#57606f"},xaxis:{categories:[]},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",barHeight:"90%"}},dataLabels:{formatter:(t,e)=>"$ "+this.formatcant(t),dropShadow:{enabled:!0,left:1,top:1,opacity:.5}}},chartPayMethodsOptions:{chart:{type:"donut",background:"none"},toolbar:{show:!1},theme:{mode:"dark",palette:"palette10"},stroke:{colors:["#57606f"],width:1},labels:[],tooltip:{y:{formatter:t=>"$ "+this.formatcant(t)}}}}},computed:{formatcant(){return t=>new Intl.NumberFormat("es-MX").format(t)},labelSale(){return this.branches.reduce(((t,e)=>parseFloat(e.venta)+t),0)},labelTickets(){return this.branches.reduce(((t,e)=>parseInt(e.tickets)+t),0)},operationsSeries(){return this.branches.map((t=>t.tickets))},averageSeries(){let t=this.branches.map((t=>t.ticket_promedio));return[{name:"Ticket Promedio",data:t}]},payMethodsSeries(){return this.paymentMethods.map((t=>t.total))}}},O=M,S=a("eb85"),B=Object(u["a"])(O,Y,D,!1,null,null,null),Q=B.exports;C()(B,"components",{QCard:f["a"],QCardSection:_["a"],QSeparator:S["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row justify-center q-gutter-md items-center q-my-lg text-h6"},[a("span",[t._v("Resumen")]),a("span",{staticClass:"text-green-13"},[t._v(t._s(t.branch.alias))]),a("q-btn",{attrs:{icon:"fas fa-broom",flat:"",color:"green-13",dense:"",rounded:""},on:{click:t.closeBranch}})],1),a("div",{staticClass:"row items-start justify-center q-gutter-md"},[a("div",[a("q-card",{staticClass:"bg-darkl1 text-grey-6 q-mb-md"},[a("q-card-section",[a("div",{staticClass:"text-h4 text-green-13"},[t._v("$ "+t._s(t.formatcant(t.branch.venta)))]),a("div",{staticClass:"text-caption"},[t._v("Venta")])])],1),a("q-card",{staticClass:"bg-darkl1 text-grey-6"},[a("q-card-section",[a("div",{staticClass:"text-h4 text-light-blue-13"},[t._v(t._s(t.formatcant(t.branch.tickets)))]),a("div",{staticClass:"text-caption"},[t._v("Operaciones")])])],1)],1),a("q-card",{staticClass:"bg-darkl1 text-grey-6"},[a("q-card-section",[a("div",{staticClass:"text-caption"},[t._v("Metodos de Pago")])]),a("q-separator"),a("div",{staticClass:"q-py-md"},[a("apexchart",{ref:"chart_paymethods",attrs:{type:"donut",options:t.chartPayMethodsOptions,series:t.payMethodsSeries}})],1)],1)],1),t.loadingComponent?[a("div",{staticClass:"text-center text-green-13"},[a("q-spinner-dots",{attrs:{size:"4em"}}),a("div",[t._v("Cargando datos, espere...")])],1)]:[a("div",[t._v("\n            LISTO!!!!\n        ")])]],2)},P=[],A={components:{apexchart:p.a},props:{branch:{type:Object},rangesData:{type:Object}},data(){return{loadingComponent:!1,chartPayMethodsOptions:{chart:{type:"donut",background:"none"},toolbar:{show:!1},theme:{mode:"dark",palette:"palette10"},stroke:{colors:["#57606f"],width:1},labels:[],tooltip:{y:{formatter:t=>"$ "+this.formatcant(t)}}}}},updated(){console.log("El modelo ha cambiado!!!");let t=this.branch.metodos_pago.map((t=>t.alias));this.$refs.chart_paymethods.updateOptions({labels:t})},methods:{closeBranch(){this.$emit("closeBranch")},async getBranch(){console.log("Obtener datos de la tienda"),this.loadingComponent=!0}},computed:{formatcant(){return t=>new Intl.NumberFormat("es-MX").format(t)},payMethodsSeries(){return this.branch.metodos_pago.map((t=>t.total))}}},I=A,E=a("8380"),N=Object(u["a"])(I,j,P,!1,null,null,null),T=N.exports;C()(N,"components",{QBtn:g["a"],QCard:f["a"],QCardSection:_["a"],QSeparator:S["a"],QSpinnerDots:E["a"]});var z={data(){return{index:void 0,ranges:[{value:"t",label:"Diaria"},{value:"w",label:"Semanal"},{value:"m",label:"Mensual"},{value:"y",label:"Anual"},{value:"p",label:"Personalizada"}],ranges_data:void 0,loadingBalance:!1,usedBranch:{state:!1,main:null,complements:null}}},components:{ToolbarAccount:i["a"],GlobalSale:q,GlobalResume:Q,BranchResume:T},methods:{setted(t){console.log("%cEnviando rango de fechas!!","font-size:2em;color:gold;"),console.log(t),this.ranges_data=t,this.indexSales(this.ranges_data)},openBranch(t){console.log(t),this.usedBranch.main=this.branches[t]},async indexSales(t){this.loadingBalance=!0,this.index=await n.index(t),console.log(this.index),this.loadingBalance=!1}},computed:{branches(){return this.index?this.index.sucursales:[]},averageSale(){return this.index?this.index.ticket_promedio:0},paymentMethods(){return this.index?this.index.metodos_de_pago:[]}}},F=z,L=a("9989"),R=a("e359"),H=Object(u["a"])(F,s,r,!1,null,null,null);e["default"]=H.exports;C()(H,"components",{QPage:L["a"],QHeader:R["a"],QCard:f["a"]})}}]);