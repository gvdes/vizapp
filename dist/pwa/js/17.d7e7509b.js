(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"4d4a":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-layout",{staticClass:"exo bg-darkl0 text-grey-6",attrs:{view:"hHh Lpr fFf"}},[e("q-footer",{staticClass:"bg-none"},[e("q-btn",{staticClass:"text-overline text-amber-13",attrs:{flat:"",rounded:"",label:"salir"},on:{click:t.sessionDestroy}})],1),e("q-page-container",[e("q-page",{staticClass:"row items-center justify-center"},[t.workIn.workpoint?e("div",{staticStyle:{"min-width":"250px"}},[e("div",{staticClass:"row items-center justify-center"},[e("q-img",{staticStyle:{height:"140px","max-width":"140px"},attrs:{src:t.picnick(t.session.me.pictures),"spinner-color":"white"}})],1),e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-h4 q-py-sm"},[e("span",[t._v("Hola ")]),e("span",{class:t.vsocket.connected?"text-green-13":""},[t._v(t._s(t.session.me.nick))])]),e("div",{staticClass:"q-mb-md"},[t._v("¿por donde iniciamos?")])]),e("q-card",{class:{"bg-darkl1":!0,"cursor-pointer":t.workpoints.length>1},attrs:{flat:""},on:{click:t.openSetWorkpoint}},[e("q-card-section",[e("div",[t._v("Punto de Trabajo:")]),e("div",{staticClass:"text-grey-4"},[t._v(t._s(t.workIn.workpoint.name))])])],1),e("q-card",{staticClass:"bg-darkl1 q-mt-md cursor-pointer",attrs:{flat:""},on:{click:t.openSetModule}},[e("q-card-section",[e("div",[t._v("Modulo:")]),e("div",{staticClass:"text-grey-4"},[t._v(t._s(t.workIn.module?t.workIn.module.name:" --- "))])])],1),t.workIn.module?e("div",{staticClass:"text-center q-py-md"},[e("q-btn",{attrs:{label:"entrar",flat:"",rounded:"",color:"green-13"},on:{click:t.go}})],1):t._e()],1):t._e()]),e("q-dialog",{attrs:{maximized:t.ismobile,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.wndSetWorkpoint.state,callback:function(o){t.$set(t.wndSetWorkpoint,"state",o)},expression:"wndSetWorkpoint.state"}},[t.workIn.workpoint?e("q-layout",{staticClass:"bg-darkl0 exo",attrs:{view:"Lhh lpR fff",container:""}},[e("q-header",{staticClass:"bg-darkl1 text-grey-6",attrs:{elevated:""}},[e("q-toolbar",[t._v("\n\t\t\t\t\t\t\tSeleccione punto de trabajo\n\t\t\t\t\t\t")])],1),e("q-page-container",[e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"row text-grey-6"},t._l(t.workpoints,(function(o,s){return e("div",{key:s,staticClass:"q-pa-xs col-6"},[e("q-card",{staticClass:"bg-darkl1 cursor-pointer",attrs:{bordered:"",flat:""},on:{click:function(e){return t.setWorkpoint(o)}}},[e("q-card-section",{class:o.workpoint.id==t.workIn.workpoint.id?"text-green-13":""},[e("div",{staticClass:"text-h5"},[t._v(t._s(o.workpoint.alias))]),e("div",[t._v(t._s(o.workpoint.name))])])],1)],1)})),0)])],1),t.ismobile?e("q-footer",{staticClass:"bg-red-13",attrs:{elevated:""}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width q-py-md",attrs:{flat:"",dense:"",icon:"close"}})],1):t._e()],1):t._e()],1),e("q-dialog",{attrs:{maximized:t.ismobile,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.wndSetModule.state,callback:function(o){t.$set(t.wndSetModule,"state",o)},expression:"wndSetModule.state"}},[t.workIn.workpoint?e("q-layout",{staticClass:"bg-darkl0 exo",attrs:{view:"Lhh lpR fff",container:""}},[e("q-header",{staticClass:"bg-darkl1 text-grey-6",attrs:{elevated:""}},[e("q-toolbar",{staticClass:"row justify-between"},[e("span",[t._v("Seleccione modulo")]),e("span",{staticClass:"text-green"},[t._v(t._s(t.workIn.workpoint.name))])])],1),e("q-page-container",[e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"row text-grey-6"},t._l(t.modules,(function(o,s){return e("div",{key:s,staticClass:"q-pa-xs col-6"},[e("q-card",{staticClass:"bg-darkl1 cursor-pointer",attrs:{bordered:"",flat:""},on:{click:function(e){return t.setModule(o)}}},[e("q-card-section",[e("div",{staticClass:"text-h5"},[t._v(t._s(o.name))])])],1)],1)})),0)])],1),t.ismobile?e("q-footer",{staticClass:"bg-red-13",attrs:{elevated:""}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width q-py-md",attrs:{flat:"",dense:"",icon:"close"}})],1):t._e()],1):t._e()],1)],1)],1)},i=[],n=e("19e8"),a={data(){return{vsocket:null,workIn:{workpoint:void 0,module:void 0},modules:void 0,wndSetWorkpoint:{state:!1},wndSetModule:{state:!1}}},beforeMount(){if(this.vsocket=this.$vSocket,setTimeout((()=>{this.vsocket.connected||this.$q.notify({message:"No se logor establecer conexion al socket",color:"negative"})}),300),console.log(this.$vizapi.defaults.headers.common["Authorization"]),this.workIn.workpoint=this.session.workpoint,1==this.workpoints.length)this.modules=this.workpoints[0].modules,1==this.modules.length?(this.workIn.module=this.modules[0],this.go()):this.modules.length>1&&console.log("%cAcceso a mas de un modulo","color:gold;font-size:1.3em;");else if(this.workpoints.length>1){console.log("%cAcceso a mas de un workpoint, preguntando por modulos","color:gold;font-size:1.3em;");let t=this.workpoints.findIndex((t=>t.workpoint.id==this.session.workpoint.id));this.modules=this.workpoints[t].modules,1==this.modules.length?(console.log("%cAcceso a un solo modulo, autoseleccionar","color:gold;font-size:1.3em;"),console.log(this.modules),this.workIn.module=this.modules[0]):this.modules.length>1&&console.log("%cAcceso a mas de un modulo","color:gold;font-size:1.3em;")}},mounted(){console.log("%cLauncherLy montado!!","background:#3c40c6;color:white;border-radius:10px;padding:6px;")},methods:{openSetWorkpoint(){this.workpoints.length>1&&(this.wndSetWorkpoint.state=!0)},openSetModule(){this.modules.length>1&&(this.wndSetModule.state=!0)},setWorkpoint(t){console.log(t),this.workIn.workpoint.id!=t.workpoint.id?(this.workIn.workpoint=t.workpoint,this.modules=t.modules,this.workIn.module=t.modules.length>1?void 0:this.modules[0]):console.log("seleccionaste el mismo (y-_-)y"),this.wndSetWorkpoint.state=!1},setModule(t){console.log(t),this.workIn.module=t,this.wndSetModule.state=!1},sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")},go(){let t={workpoint:this.workIn.workpoint.id};n["a"].join(t).then((t=>{let o=t.data;this.$store.commit("Account/join",o),this.$store.commit("Account/setworkpoint",this.workIn),this.$router.push(`/${this.workIn.module.path}`)})).catch((t=>{console.log(t)}))}},computed:{session:{get(){return this.$store.state.Account.profile}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return t=>t||"https://image.flaticon.com/icons/png/512/2835/2835180.png"},ismobile(){return this.$q.platform.is.mobile}}},r=a,l=e("2877"),c=e("4d5a"),d=e("7ff0"),p=e("9c40"),u=e("09e3"),m=e("9989"),h=e("068f"),k=e("f09f"),w=e("a370"),g=e("24e8"),v=e("e359"),f=e("65c6"),b=e("7f67"),q=e("eebe"),x=e.n(q),C=Object(l["a"])(r,s,i,!1,null,null,null);o["default"]=C.exports;x()(C,"components",{QLayout:c["a"],QFooter:d["a"],QBtn:p["a"],QPageContainer:u["a"],QPage:m["a"],QImg:h["a"],QCard:k["a"],QCardSection:w["a"],QDialog:g["a"],QHeader:v["a"],QToolbar:f["a"]}),x()(C,"directives",{ClosePopup:b["a"]})}}]);