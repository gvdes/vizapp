(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{d290:function(i,a,e){"use strict";e.r(a);var o=function(){var i=this,a=i.$createElement,e=i._self._c||a;return e("div",{staticClass:"q-pa-md"},[e("q-table",{ref:"myTable",class:i.tableClass,attrs:{tabindex:"0",title:"Treats",data:i.data,columns:i.columns,"row-key":"name",selection:"single",selected:i.selected,pagination:i.pagination,filter:i.filter},on:{"update:selected":function(a){i.selected=a},"update:pagination":function(a){i.pagination=a}},nativeOn:{focusin:function(a){return i.activateNavigation(a)},focusout:function(a){return i.deactivateNavigation(a)},keydown:function(a){return i.onKey(a)}},scopedSlots:i._u([{key:"top-right",fn:function(){return[e("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:i._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:i.filter,callback:function(a){i.filter=a},expression:"filter"}})]},proxy:!0}])})],1)},n=[],r=(e("c975"),e("ded3")),c=e.n(r),t={data(){return{navigationActive:!1,filter:"",selected:[],pagination:{},columns:[{name:"desc",required:!0,label:"Dessert (100g serving)",align:"left",field:i=>i.name,format:i=>""+i,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0,sort:(i,a)=>parseInt(i,10)-parseInt(a,10)},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0,sort:(i,a)=>parseInt(i,10)-parseInt(a,10)}],data:[{id:1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:3,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:4,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:5,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:6,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:7,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:8,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:9,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:10,name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"},{id:11,name:"Frozen Yogurt-1",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:12,name:"Ice cream sandwich-1",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:13,name:"Eclair-1",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:14,name:"Cupcake-1",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:15,name:"Gingerbread-1",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:16,name:"Jelly bean-1",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:17,name:"Lollipop-1",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:18,name:"Honeycomb-1",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:19,name:"Donut-1",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:20,name:"KitKat-1",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"},{id:21,name:"Frozen Yogurt-2",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:22,name:"Ice cream sandwich-2",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:23,name:"Eclair-2",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:24,name:"Cupcake-2",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:25,name:"Gingerbread-2",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:26,name:"Jelly bean-2",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:27,name:"Lollipop-2",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:28,name:"Honeycomb-2",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:29,name:"Donut-2",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:30,name:"KitKat-2",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"},{id:31,name:"Frozen Yogurt-3",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:32,name:"Ice cream sandwich-3",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:33,name:"Eclair-3",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:34,name:"Cupcake-3",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:35,name:"Gingerbread-3",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:36,name:"Jelly bean-3",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:37,name:"Lollipop-3",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:38,name:"Honeycomb-3",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:39,name:"Donut-3",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:40,name:"KitKat-3",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}},computed:{tableClass(){return!0===this.navigationActive?"shadow-8 no-outline":void 0}},methods:{activateNavigation(){this.navigationActive=!0},deactivateNavigation(){this.navigationActive=!1},onKey(i){if(!0!==this.navigationActive||-1===[33,34,35,36,38,40].indexOf(i.keyCode)||void 0===this.$refs.myTable)return;i.preventDefault();const{computedRowsNumber:a,computedRows:e}=this.$refs.myTable;if(0===e.length)return;const o=this.selected.length>0?e.indexOf(this.selected[0]):-1,n=this.pagination.page,r=0===this.pagination.rowsPerPage?a:this.pagination.rowsPerPage,t=e.length-1,s=Math.ceil(a/r);let l=o,m=n;switch(i.keyCode){case 36:m=1,l=0;break;case 35:m=s,l=r-1;break;case 33:m=n<=1?s:n-1,l<0&&(l=0);break;case 34:m=n>=s?1:n+1,l<0&&(l=r-1);break;case 38:o<=0?(m=n<=1?s:n-1,l=r-1):l=o-1;break;case 40:o>=t?(m=n>=s?1:n+1,l=0):l=o+1;break}m!==this.pagination.page?(this.pagination=c()(c()({},this.pagination),{},{page:m}),this.$nextTick((()=>{const{computedRows:i}=this.$refs.myTable;this.selected=[i[Math.min(l,i.length-1)]]}))):this.selected=[e[l]]}}},s=t,l=e("2877"),m=e("eaac"),d=e("27f9"),u=e("0016"),p=e("eebe"),b=e.n(p),f=Object(l["a"])(s,o,n,!1,null,null,null);a["default"]=f.exports;b()(f,"components",{QTable:m["a"],QInput:d["a"],QIcon:u["a"]})}}]);