(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{c991:function(t,e,s){"use strict";s("d5a3")},d5a3:function(t,e,s){},fa13:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"text-center q-pt-md"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.iptsearch.model,expression:"iptsearch.model"}],ref:"ipt_search",class:t.psocket.connected?"son":"soff",attrs:{type:"number",autocomplete:"off",id:"ipt_search",disabled:t.searching},domProps:{value:t.iptsearch.model},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.iptsearch,"model",e.target.value)}}}),e("div",{staticClass:"q-pt-sm",class:t.checkinstate?"text-green-13 text-italic":"text--2 text-grey-6"},[t._v("Servicio "+t._s(t.checkinstate?"en linea":"Apagado"))]),e("div",{staticClass:"q-pt-lg q-gutter-md"},[e("div",{staticClass:"row items-center justify-center q-gutter-sm"},t._l(t.orders,(function(s){return e("q-btn",{key:s.id,staticClass:"bg-darkl1",attrs:{"no-caps":""}},[e("div",{staticClass:"column text-justify"},[e("div",{staticClass:"text-h6"},[e("b",[t._v(t._s(s.id))])]),e("div",{staticClass:"q-py-xs"},[e("b",[t._v(t._s(s.name))])])])])})),1)])])])},r=[],a=s("6d5d"),o=s("5542"),n={components:{OrdersList:a["a"]},data(){return{iptsearch:{model:"",focus:!1},gstate:"listen",searching:!1,target:void 0,psocket:this.$sktPreventa}},beforeMount(){this.$store.commit("Preventa/setHeaderTitle","Preventa | CheckIn")},mounted(){this.$refs.ipt_search.focus()},methods:{listenipt(t){this.iptsearch.focus=t},search(){this.searching=!0;let t=this.orders.findIndex((t=>this.iptsearch.model==t.id));-1==t?(this.$q.notify({color:"negative",message:`<b>${this.iptsearch.model}</b> No encontrado...`,timeout:2e3,position:"center",html:!0}),this.iptsearch.model="",this.$refs.ipt_search.focus(),this.searching=!1):(this.target=this.orders[t],this.nextStep())},async nextStep(){let t=await o["a"].nextStep({_order:this.target.id});if(console.log(t),t.success){let e=Object.assign({},this.target),s=t.status[t.status.length-1];this.iptsearch.model="",this.$store.commit("Preventa/updateState",{order:e,newstate:s}),this.$q.notify({color:"positive",message:`Pedido <b>${e.id}</b> enviado!!`,html:!0}),this.$refs.ipt_search.focus(),this.target=void 0,this.searching=!1,this.psocket.emit("order_update",{newstate:s,order:e})}},orderclicked(t){console.log(t)}},beforeDestroy(){},destroyed(){this.$store.commit("Preventa/setHeaderState",!0)},computed:{checkinstate(){return this.$store.getters["Preventa/keepProcess"](3)},orders(){return this.$store.getters["Preventa/OrdersCheckIn"]},profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},appsounds(){return this.$store.getters["Multimediapp/sounds"]}}},c=n,d=(s("c991"),s("2877")),h=s("9989"),l=s("9c40"),p=s("eebe"),u=s.n(p),m=Object(d["a"])(c,i,r,!1,null,"3389ccd1",null);e["default"]=m.exports;u()(m,"components",{QPage:h["a"],QBtn:l["a"]})}}]);