(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"60f2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm q-gutter-sm"},[a("q-table",{attrs:{title:"Treats",data:e.data,columns:e.columns,"row-key":"name","binary-state-sort":""},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn",{attrs:{dense:"",color:"secondary",label:"Add Row","no-caps":""},on:{click:function(t){e.show_dialog=!0}}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"desc",attrs:{props:t}},[e._v(e._s(t.row.name))]),a("q-td",{key:"calories",attrs:{props:t}},[e._v(e._s(t.row.calories))]),a("q-td",{key:"fat",attrs:{props:t}},[e._v(e._s(t.row.fat))]),a("q-td",{key:"carbs",attrs:{props:t}},[e._v(e._s(t.row.carbs))]),a("q-td",{key:"protein",attrs:{props:t}},[e._v(e._s(t.row.protein))]),a("q-td",{key:"sodium",attrs:{props:t}},[e._v(e._s(t.row.sodium))]),a("q-td",{key:"calcium",attrs:{props:t}},[e._v(e._s(t.row.calcium))]),a("q-td",{key:"iron",attrs:{props:t}},[e._v(e._s(t.row.iron))]),a("q-td",{key:"actions",attrs:{props:t}},[a("q-btn",{attrs:{color:"blue",label:"Update",size:"sm","no-caps":""},on:{click:function(a){return e.editItem(t.row)}}}),a("q-btn",{attrs:{color:"red",label:"Delete",size:"sm","no-caps":""},on:{click:function(a){return e.deleteItem(t.row)}}})],1)],1)]}}])}),a("q-dialog",{model:{value:e.show_dialog,callback:function(t){e.show_dialog=t},expression:"show_dialog"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Add new item!")])]),a("q-card-section",[a("div",{staticClass:"row"},[a("q-input",{attrs:{label:"Dessert Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}}),a("q-input",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}}),a("q-input",{attrs:{label:"Fat"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}}),a("q-input",{attrs:{label:"Carbs"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}}),a("q-input",{attrs:{label:"Protein"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}}),a("q-input",{attrs:{label:"Sodium"},model:{value:e.editedItem.sodium,callback:function(t){e.$set(e.editedItem,"sodium",t)},expression:"editedItem.sodium"}}),a("q-input",{attrs:{label:"Calcium"},model:{value:e.editedItem.calcium,callback:function(t){e.$set(e.editedItem,"calcium",t)},expression:"editedItem.calcium"}}),a("q-input",{attrs:{label:"Iron"},model:{value:e.editedItem.iron,callback:function(t){e.$set(e.editedItem,"iron",t)},expression:"editedItem.iron"}})],1)]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"},on:{click:e.addRow}})],1)],1)],1)],1)},s=[],o={methods:{addRow(){this.editedIndex>-1?Object.assign(this.data[this.editedIndex],this.editedItem):this.data.push(this.editedItem),this.close()},deleteItem(e){const t=this.data.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.data.splice(t,1)},editItem(e){this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e),this.show_dialog=!0},close(){this.show_dialog=!1,setTimeout((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}),300)}},data(){return{show_dialog:!1,editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0,sodium:0,calcium:"0%",iron:"0%"},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0,sodium:0,calcium:"0%",iron:"0%"},columns:[{name:"desc",required:!0,label:"Dessert (100g serving)",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0,style:"width: 10px"},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0,sort:(e,t)=>parseInt(e,10)-parseInt(t,10)},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0,sort:(e,t)=>parseInt(e,10)-parseInt(t,10)},{name:"actions",label:"Actions",field:"actions"}],data:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}}},r=o,n=a("2877"),l=a("eaac"),d=a("9c40"),c=a("bd08"),m=a("db86"),u=a("24e8"),p=a("f09f"),b=a("a370"),f=a("27f9"),I=a("4b7e"),h=a("7f67"),w=a("eebe"),q=a.n(w),k=Object(n["a"])(r,i,s,!1,null,null,null);t["default"]=k.exports;q()(k,"components",{QTable:l["a"],QBtn:d["a"],QTr:c["a"],QTd:m["a"],QDialog:u["a"],QCard:p["a"],QCardSection:b["a"],QInput:f["a"],QCardActions:I["a"]}),q()(k,"directives",{ClosePopup:h["a"]})}}]);