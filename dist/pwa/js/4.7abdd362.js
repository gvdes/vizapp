(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"15a9":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-layout",{attrs:{view:"hHh Lpr fFf"}},[a("q-page-container",{staticClass:"bg-darkl0 exo"},[a("q-page",{staticClass:"row items-center justify-center overflow-hidden"},[a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDownBig"}},[a("div",{key:"img",staticClass:"text-center q-mb-sm"},[a("q-img",{staticStyle:{width:"170px"},attrs:{src:e("cf05"),"spinner-color":"white"}})],1)]),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInUp delay-1s"}},[a("q-card",{key:"title",staticClass:"bg-darkl1 text-white"},[a("q-card-section",{staticClass:"row justify-between items-center"},[a("span",{staticClass:"text-h6"},[a("span",{staticClass:"text-pink-6"},[t._v(" Viz")]),a("span",{staticClass:"text-weight-thin"},[t._v("App")])])])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInUp delay-2s"}},[t.credentials.formstate?a("q-form",{staticClass:"column loginform",on:{submit:t.tryLogin}},[a("q-card",{staticClass:"q-mt-sm bg-darkl1 text-white",attrs:{flat:""}},[a("q-card-section",[a("div",{staticClass:"column"},[a("q-input",{staticClass:"ipt q-mb-xs",attrs:{dark:"",color:"green-13","label-color":"grey-7",label:"Usuario",autocapitalize:"off",autocomplete:"off"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"account_circle",color:"grey-8"}})]},proxy:!0}],null,!1,2145116503),model:{value:t.credentials.nick,callback:function(s){t.$set(t.credentials,"nick",s)},expression:"credentials.nick"}}),a("q-input",{staticClass:"ipt q-mb-xs",attrs:{type:t.ipttypepass?"password":"text",dark:"",color:"green-13","label-color":"grey-7",label:"Contraseña",autocapitalize:"off",autocomplete:"off"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock",color:"grey-8"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.ipttypepass?"visibility_off":"visibility"},on:{click:function(s){t.ipttypepass=!t.ipttypepass}}})]},proxy:!0}],null,!1,4202864250),model:{value:t.credentials.pass,callback:function(s){t.$set(t.credentials,"pass",s)},expression:"credentials.pass"}})],1)]),t.credentials.nick.length>=2&&t.credentials.pass.length>=4?a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{staticClass:"q-pa-sm",attrs:{flat:"",dense:"",color:"green-13",type:"submit",label:"entrar",loading:t.credentials.logging,disable:t.credentials.logging}})],1):t._e()],1)],1):t._e()],1),t.resume.state?a("div",{staticClass:"q-mt-sm text-grey-6 loginform"},[t.resume.account.me.change_password?a("q-card",{staticClass:"bg-darkl1",attrs:{flat:""}},[a("q-card-section",[t._v("\n\t\t\t\t\t\t\t\tBienvenido "),a("span",{staticClass:"text-green-13"},[t._v(t._s(t.resume.account.me.names))]),t._v("."),a("br"),t._v("Para continuar, porfavor establece una contraseña:\n\t\t\t\t\t\t\t")]),a("q-form",{on:{submit:t.setPass}},[a("q-card-section",[a("q-input",{staticClass:"ipt q-mb-xs",attrs:{dark:"",color:"green-13","label-color":"grey-7",type:t.ipttypepass?"password":"text",autocapitalize:"off",autocomplete:"off",label:"Contraseña",hint:t.setpass.pass.length>=5?"":"Minimo 5 caracteres"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.ipttypepass?"visibility_off":"visibility"},on:{click:function(s){t.ipttypepass=!t.ipttypepass}}})]},proxy:!0}],null,!1,3673760803),model:{value:t.setpass.pass,callback:function(s){t.$set(t.setpass,"pass",s)},expression:"setpass.pass"}}),a("q-input",{staticClass:"ipt q-mb-xs",attrs:{dark:"",color:"green-13","label-color":"grey-7",type:t.ipttypepass?"password":"text",autocapitalize:"off",autocomplete:"off",label:"Confirmar Contraseña",rules:[function(s){return s==t.setpass.pass||"Las contraseñas no coinciden"}]},model:{value:t.setpass.confirm,callback:function(s){t.$set(t.setpass,"confirm",s)},expression:"setpass.confirm"}})],1),t.trysetpass?a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{dark:"",color:"green-13",flat:"",type:"submit",label:"continuar",loading:t.setpass.state,disabled:t.setpass.state}})],1):t._e()],1)],1):a("q-card",{staticClass:"bg-darkl1 text-center",attrs:{flat:""}},[a("q-card-section",[a("div",[t._v("Bienvenido "),a("span",{staticClass:"text-green-13"},[t._v(t._s(t.resume.account.me.names))]),t._v(", espera...")])]),a("q-card-section",[a("q-spinner-grid",{attrs:{color:"green-13",size:"md"}})],1)],1)],1):t._e()],1)]),a("q-footer",{staticClass:"bg-none"},[a("q-toolbar",{staticClass:"column justify-center text-grey-8 text-center text-caption"},[t._v("\n\t\t\t\t\tGrupo Vizcarra - 2020\n\t\t\t\t")])],1)],1)],1)},o=[],n=e("31b8"),i={trySignin(t){return console.log("%cLogueando...","font-size:2em; color:#2e86de;"),console.log(t),n["b"].post("account/auth",t)},trySetPass(t){return console.log("%cSetting Pass...","font-size:2em; color:#2e86de;"),console.log(t),n["b"].put("account/password",t)}},r={data(){return{credentials:{nick:"",pass:"",formstate:!0,logging:!1},resume:{state:!1,account:void 0,workpoints:void 0,text:""},setpass:{pass:"",confirm:"",state:!1},ipttypepass:!0,vsocket:null}},beforeMount(){this.vsocket=this.$vSocket},methods:{tryLogin(){let t={nick:this.credentials.nick,password:this.credentials.pass};this.credentials.logging=!0,i.trySignin(t).then((t=>{let s=t.data;console.log(s),s.account?(this.credentials.formstate=!1,this.resume.state=!0,this.resume.account=s.account,this.resume.workpoints=s.workpoints,this.$vizapi.defaults.headers.common["Authorization"]="Bearer "+s.account.token,s.account.me.change_password?(this.ipttypepass=!0,console.log("%cCambiar el pasword","font-size:2em;")):this.setSession()):(this.credentials.logging=!1,this.$q.notify({color:"red-13",message:s.message,icon:"announcement",timeout:800}))})).catch((t=>{console.log(t),this.credentials.logging=!1,this.$q.notify({color:"negative",message:"¡¡Raios!! el servidor no responde!",icon:"announcement"})}))},setPass(){this.setpass.state=!0,console.log("Seteando password"),console.log(this.$vizapi.defaults.headers.common["Authorization"]);let t={password:this.credentials.pass,new_password:this.setpass.confirm};i.trySetPass(t).then((t=>{let s=t.data;s.success?(this.resume.text="Iniciando...",this.resume.account.change_password=!1,this.setSession()):(this.setpass.state=!1,this.$q.notify({color:"red-13",message:s.message,icon:"announcement",timeout:800}))})).catch((t=>{console.log(t)}))},setSession(){console.log("%cSeteando Sesion","font-size:2em;");let t={account:this.resume.account,workpoints:this.resume.workpoints,stock:!0};this.$store.commit("Account/setsession",t),this.vsocket.connect(),this.vsocket.on("socketid",(t=>{this.vsocket.emit("session_start",{profile:this.profile,socketid:t.socketid,from:this.workin}),console.log("%cUnido al Canal Global (by LogIn)","background:#1B9CFC;color:white;border-radius:10px;padding:6px;")})),this.$router.push("/lanzador")}},computed:{trysetpass(){return this.setpass.pass.length>4&&this.setpass.pass==this.setpass.confirm},workin(){return this.$store.getters["Account/workin"]},profile(){return this.$store.getters["Account/profile"]}}},c=r,l=(e("91c6"),e("2877")),p=e("4d5a"),d=e("09e3"),u=e("9989"),m=e("068f"),g=e("f09f"),f=e("a370"),h=e("0378"),b=e("27f9"),y=e("0016"),k=e("4b7e"),v=e("9c40"),q=e("981c"),w=e("7ff0"),C=e("65c6"),x=e("eebe"),_=e.n(x),S=Object(l["a"])(c,a,o,!1,null,null,null);s["default"]=S.exports;_()(S,"components",{QLayout:p["a"],QPageContainer:d["a"],QPage:u["a"],QImg:m["a"],QCard:g["a"],QCardSection:f["a"],QForm:h["a"],QInput:b["a"],QIcon:y["a"],QCardActions:k["a"],QBtn:v["a"],QSpinnerGrid:q["a"],QFooter:w["a"],QToolbar:C["a"]})},"91c6":function(t,s,e){"use strict";e("a65b")},a65b:function(t,s,e){},cf05:function(t,s,e){t.exports=e.p+"img/logo.2bb91c8d.png"}}]);