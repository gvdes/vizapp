(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"4d4a":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t._self._c;return o("q-layout",{staticClass:"QuickRegular bg-darkl0 text-white",attrs:{view:"hHh Lpr fFf"}},[o("q-footer",{staticClass:"bg-none"},[o("q-btn",{staticClass:"text-overline text-amber-13",attrs:{flat:"",rounded:"",label:"salir"},on:{click:t.sessionDestroy}})],1),o("q-page-container",[o("q-page",{staticClass:"row items-center justify-center"},[t.workIn.workpoint?o("q-card",{staticClass:"bg-none q-pa-md",staticStyle:{"min-width":"300px"},attrs:{flat:""}},[o("div",{staticClass:"row items-center justify-center"},[o("q-img",{staticStyle:{height:"140px","max-width":"140px"},attrs:{src:e("b366"),"spinner-color":"white"}})],1),o("div",{staticClass:"text-center"},[o("div",{staticClass:"text-h4 q-py-sm"},[o("span",[t._v("Hola ")]),o("span",{class:t.vsocket.connected?"text-green-13":""},[t._v(t._s(t.session.me.nick))])]),o("div",{staticClass:"q-mb-md"},[t._v("¿por donde iniciamos?")])]),o("q-card",{staticClass:"bg-whitetrans",class:{"cursor-pointer":t.workpoints.length>1},on:{click:t.openSetWorkpoint}},[o("q-card-section",[o("div",{staticClass:"text-grey-6"},[t._v("Punto de Trabajo:")]),o("div",[t._v(t._s(t.workIn.workpoint.name))])])],1),o("q-card",{staticClass:"bg-whitetrans q-mt-md cursor-pointer",on:{click:t.openSetModule}},[o("q-card-section",[o("div",{staticClass:"text-grey-6"},[t._v("Modulo:")]),o("div",[t._v(t._s(t.workIn.module?t.workIn.module.name:" --- "))])])],1),t.workIn.module?o("div",{staticClass:"text-center q-py-md"},[o("q-btn",{attrs:{label:"entrar",flat:"",rounded:"",color:"green-13"},on:{click:t.go}})],1):t._e()],1):t._e()],1),o("q-dialog",{attrs:{maximized:t.ismobile,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.wndSetWorkpoint.state,callback:function(o){t.$set(t.wndSetWorkpoint,"state",o)},expression:"wndSetWorkpoint.state"}},[t.workIn.workpoint?o("q-layout",{staticClass:"bg-darkl0 exo",attrs:{view:"Lhh lpR fff",container:""}},[o("q-header",{staticClass:"bg-darkl1 text-grey-6",attrs:{elevated:""}},[o("q-toolbar",[t._v("\n\t\t\t\t\t\t\tSeleccione punto de trabajo\n\t\t\t\t\t\t")])],1),o("q-page-container",[o("q-page",{attrs:{padding:""}},[o("div",{staticClass:"row text-grey-6"},t._l(t.workpoints,(function(e,s){return o("div",{key:s,staticClass:"q-pa-xs col-6"},[o("q-card",{staticClass:"bg-darkl1 cursor-pointer",attrs:{bordered:"",flat:""},on:{click:function(o){return t.setWorkpoint(e)}}},[o("q-card-section",{class:e.workpoint.id==t.workIn.workpoint.id?"text-green-13":""},[o("div",{staticClass:"text-h5"},[t._v(t._s(e.workpoint.alias))]),o("div",[t._v(t._s(e.workpoint.name))])])],1)],1)})),0)])],1),t.ismobile?o("q-footer",{staticClass:"bg-red-13",attrs:{elevated:""}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width q-py-md",attrs:{flat:"",dense:"",icon:"close"}})],1):t._e()],1):t._e()],1),o("q-dialog",{attrs:{maximized:t.ismobile,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.wndSetModule.state,callback:function(o){t.$set(t.wndSetModule,"state",o)},expression:"wndSetModule.state"}},[t.workIn.workpoint?o("q-layout",{staticClass:"bg-darkl0 exo",attrs:{view:"Lhh lpR fff",container:""}},[o("q-header",{staticClass:"bg-darkl1 text-grey-6",attrs:{elevated:""}},[o("q-toolbar",{staticClass:"row justify-between"},[o("span",[t._v("Seleccione modulo")]),o("span",{staticClass:"text-green"},[t._v(t._s(t.workIn.workpoint.name))])])],1),o("q-page-container",[o("q-page",{attrs:{padding:""}},[o("div",{staticClass:"row text-grey-6"},t._l(t.modules,(function(e,s){return o("div",{key:s,staticClass:"q-pa-xs col-6"},[o("q-card",{staticClass:"bg-darkl1 cursor-pointer",attrs:{bordered:"",flat:""},on:{click:function(o){return t.setModule(e)}}},[o("q-card-section",[o("div",{staticClass:"text-h5"},[t._v(t._s(e.name))])])],1)],1)})),0)])],1),t.ismobile?o("q-footer",{staticClass:"bg-red-13",attrs:{elevated:""}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width q-py-md",attrs:{flat:"",dense:"",icon:"close"}})],1):t._e()],1):t._e()],1)],1)],1)},i=[],n=e("19e8"),a={data(){return{vsocket:null,workIn:{workpoint:void 0,module:void 0},modules:void 0,wndSetWorkpoint:{state:!1},wndSetModule:{state:!1},printers:void 0}},async beforeMount(){if(localStorage.removeItem("dbranges"),this.vsocket=this.$vSocket,console.log(this.$vizapi.defaults.headers.common["Authorization"]),this.workIn.workpoint=this.session.workpoint,1==this.workpoints.length)this.modules=this.workpoints[0].modules,1==this.modules.length?(this.workIn.module=this.modules[0],this.go()):this.modules.length>1&&console.log("%cAcceso a mas de un modulo","color:gold;font-size:1.3em;");else if(this.workpoints.length>1){console.log("%cAcceso a mas de un workpoint, preguntando por modulos","color:gold;font-size:1.3em;");let t=this.workpoints.findIndex((t=>t.workpoint.id==this.session.workpoint.id));this.modules=this.workpoints[t].modules,1==this.modules.length?(console.log("%cAcceso a un solo modulo, autoseleccionar","color:gold;font-size:1.3em;"),console.log(this.modules),this.workIn.module=this.modules[0]):this.modules.length>1&&console.log("%cAcceso a mas de un modulo","color:gold;font-size:1.3em;")}},mounted(){console.log("%cLauncherLy montado!!","background:#3c40c6;color:white;border-radius:10px;padding:6px;")},methods:{openSetWorkpoint(){this.workpoints.length>1&&(this.wndSetWorkpoint.state=!0)},openSetModule(){this.modules.length>1&&(this.wndSetModule.state=!0)},setWorkpoint(t){console.log(t),this.workIn.workpoint.id!=t.workpoint.id?(this.workIn.workpoint=t.workpoint,this.modules=t.modules,this.workIn.module=t.modules.length>1?void 0:this.modules[0]):console.log("seleccionaste el mismo (y-_-)y"),this.wndSetWorkpoint.state=!1},setModule(t){console.log(t),this.workIn.module=t,this.wndSetModule.state=!1},sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")},async go(){this.$q.loading.show({message:"Validando ..."});let t={workpoint:this.workIn.workpoint.id},o=await n["a"].join(t);o.error?alert(o.error):(this.$store.commit("Account/join",o),this.$store.commit("Account/setworkpoint",this.workIn),this.$router.push(`/${this.workIn.module.path}`),this.$q.loading.hide())}},computed:{session:{get(){return this.$store.state.Account.profile}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return t=>t||"https://image.flaticon.com/icons/png/512/2835/2835180.png"},ismobile(){return this.$q.platform.is.mobile}}},r=a,l=e("2877"),d=e("4d5a"),c=e("7ff0"),p=e("9c40"),u=e("09e3"),m=e("9989"),h=e("f09f"),w=e("068f"),k=e("a370"),g=e("24e8"),v=e("e359"),f=e("65c6"),b=e("7f67"),q=e("eebe"),C=e.n(q),x=Object(l["a"])(r,s,i,!1,null,null,null);o["default"]=x.exports;C()(x,"components",{QLayout:d["a"],QFooter:c["a"],QBtn:p["a"],QPageContainer:u["a"],QPage:m["a"],QCard:h["a"],QImg:w["a"],QCardSection:k["a"],QDialog:g["a"],QHeader:v["a"],QToolbar:f["a"]}),C()(x,"directives",{ClosePopup:b["a"]})},b366:function(t,o,e){t.exports=e.p+"img/867875.d007723b.png"}}]);