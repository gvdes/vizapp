(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"418c":function(t,e,s){"use strict";s("69c5")},"69c5":function(t,e,s){},b429:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-header",{staticClass:"bg-darkl1",attrs:{unelevated:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.stateDelete,expression:"stateDelete"}],staticClass:"row items-stretch justify-between"},[s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$router.push("/pedidos/")}}}),s("div",{staticClass:"row items-center col bg-dark divlcient"},[s("div",{staticClass:"q-pa-sm col text-center"},[s("div",{staticClass:"text--2"},[t._v("Proveniente:")]),s("div",{staticClass:"text-uppercase"},[t._v("\n            "+t._s(t.setupToolbar.destiny)+"\n          ")])]),s("div",{staticClass:"q-pa-sm col text-center"},[s("div",{staticClass:"text--2"},[t._v("Folio:")]),s("div",{staticClass:"text-bold"},[t._v(t._s(t.setupToolbar.verify))])])])],1),s("div",{staticClass:"row items-center justify-between q-mt-sm"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Modelos")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.bucketToolbar.length))])]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Unidades")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.unityBucket))])]),s("div",{staticClass:"q-px-md"},[s("div",{staticClass:"text--2"},[t._v("Cajas")]),s("span",{staticClass:"text-green-13 text-bold"},[t._v(t._s(t.boxesBucket))])])])])])],1)},a=[],o=s("bd9f"),r={data(){return{params:{id:"",data:Array},order:void 0,setupToolbar:{destiny:"",verify:""},stateDelete:!0,flag:!0,configToolbar:[],flagArchive:!1,rsocket:this.$sktRestock}},async beforeMount(){this.$store.commit("Requisitions/setHeaderState",!1),this.$store.commit("Requisitions/setFooterState",!1),this.params.id=this.$route.params.id,this.$store.commit("Layout/hideToolbarModule"),this.$q.loading.show({message:"..."}),this.order=await o["a"].find(this.params.id),console.log(this.order),this.setupToolbar.destiny=this.order.to.name,this.setupToolbar.verify=this.order.id,this.products=this.order.products,this.$q.loading.hide()},destroyed(){},methods:{},computed:{profile(){return this.$store.getters["Account/profile"]},workin(){return this.$store.getters["Account/workin"]},socketroom(){return`${this.workin.workpoint.alias}`},bucketToolbar(){return this.b_products.map((t=>(t.pieces=t.pieces,t.boxes=t.ordered.amount,t)))},b_products(){return this.products?this.products:[]},unityBucket(){return this.bucketToolbar.reduce(((t,e)=>t+parseInt(e.pieces*e.boxes)),0)},boxesBucket(){return this.bucketToolbar.reduce(((t,e)=>t+parseInt(e.boxes)),0)}}},c=r,n=(s("418c"),s("2877")),d=s("9989"),l=s("e359"),u=s("9c40"),p=s("eebe"),b=s.n(p),v=Object(n["a"])(c,i,a,!1,null,"d2c77b2e",null);e["default"]=v.exports;b()(v,"components",{QPage:d["a"],QHeader:l["a"],QBtn:u["a"]})}}]);