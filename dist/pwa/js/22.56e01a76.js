(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"1d06":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-header",{staticClass:"bg-darkl0 text-grey-5 q-pa-sm"},[a("q-card",{staticClass:"bg-darkl1"},[a("toolbar-account",{attrs:{title:"Productos"}}),a("q-separator"),a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"green-13","indicator-color":"green-13",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"top",label:"top",to:"top",exact:""}}),a("q-route-tab",{attrs:{name:"vs",label:"vs",to:"vs",exact:""}}),a("q-route-tab",{attrs:{name:"cat",label:"categoria",to:"cat",exact:""}})],1)],1)],1),a("div",{staticClass:"q-px-sm"},[a("router-view")],1)],1)},n=[],o=a("1d6c"),r={components:{ToolbarAccount:o["a"]},data(){return{tab:null}}},i=r,c=a("2877"),l=a("9989"),u=a("e359"),p=a("f09f"),b=a("eb85"),m=a("429b"),d=a("7867"),f=a("eebe"),h=a.n(f),q=Object(c["a"])(i,s,n,!1,null,null,null);e["default"]=q.exports;h()(q,"components",{QPage:l["a"],QHeader:u["a"],QCard:p["a"],QSeparator:b["a"],QTabs:m["a"],QRouteTab:d["a"]})},"1d6c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-toolbar",{staticClass:"row justify-between items-center"},[a("span",[t.iconlauncher?a("q-btn",{attrs:{dense:"",rounded:"",flat:"",icon:"fab fa-atlassian fa-rotate-180"},on:{click:function(e){return t.$router.push("/")}}}):a("q-icon",{attrs:{name:"fab fa-atlassian fa-rotate-180",size:"25px"}})],1),a("span",{staticClass:"col text-center"},[a("span",[t._v(t._s(t.workin.workpoint.alias))]),a("br"),a("span",[t._v(t._s(t.title))])]),a("span",{staticClass:"text-right"},[a("q-btn",{attrs:{rounded:"",dense:"",color:t.sockstate?"green-13":""}},[a("q-img",{staticStyle:{height:"30px",width:"30px"},attrs:{src:t.picnick,"spinner-color":"white"}}),a("q-menu",{attrs:{dark:"","transition-show":"flip-right","transition-hide":"flip-left"}},[a("q-list",{staticClass:"exo text-grey-6",staticStyle:{"min-width":"150px"}},[a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/perfil")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-user-astronaut"}})],1),a("q-item-section",[t._v("Hola "+t._s(t.session.me.nick))])],1),a("q-separator"),a("q-item",{attrs:{clickable:""},on:{click:t.sessionDestroy}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"meeting_room"}})],1),a("q-item-section",[t._v("Salir")])],1)],1)],1)],1)],1)])},n=[],o={name:"ToolbarAccount",props:{title:{type:String,default:""},iconlauncher:{type:Boolean,default:!0},sockstate:{type:Boolean,default:!1}},methods:{sessionDestroy(){this.$store.commit("Account/unsetsession"),this.$router.push("/acceso")}},computed:{session:{get(){return this.$store.state.Account.profile}},workin:{get(){return this.$store.state.Account.workin}},workpoints:{get(){return this.$store.state.Account.workpoints}},picnick(){return this.session.me.pictures?this.session.me.pictures:"https://www.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"}}},r=o,i=a("2877"),c=a("65c6"),l=a("9c40"),u=a("0016"),p=a("068f"),b=a("4e73"),m=a("1c1c"),d=a("66e5"),f=a("4074"),h=a("eb85"),q=a("eebe"),g=a.n(q),w=Object(i["a"])(r,s,n,!1,null,null,null);e["a"]=w.exports;g()(w,"components",{QToolbar:c["a"],QBtn:l["a"],QIcon:u["a"],QImg:p["a"],QMenu:b["a"],QList:m["a"],QItem:d["a"],QItemSection:f["a"],QSeparator:h["a"]})}}]);