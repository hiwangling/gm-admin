(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc2bf74"],{"09f1":function(t,e,a){t.exports=a.p+"img/noData.1c06e1e1.jpeg"},"4a1b":function(t,e,a){"use strict";var r=a("5d46"),i=a.n(r);i.a},"5d46":function(t,e,a){},a027:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"myOrder"}},[a("van-nav-bar",{staticStyle:{height:"2.5rem"},attrs:{title:t.$t("mine.myOrders"),border:!1,fixed:!0,"left-arrow":""},on:{"click-left":t.onClickLeft}}),a("van-tabs",{ref:"tabs",attrs:{animated:"",swipeable:"",sticky:"",border:!1,"offset-top":47,type:"line",color:"#28BE57","title-active-color":"#28BE57","animated:yes":""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(t.itemsTitle[0]))])]),a("OrderType",{attrs:{orderTypeDataArray:t.typeArray}})],1),a("van-tab",[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(t.itemsTitle[1]))])]),a("OrderType",{attrs:{orderTypeDataArray:t.typeArray}})],1),a("van-tab",[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(t.itemsTitle[2]))])]),a("OrderType",{attrs:{orderTypeDataArray:t.typeArray}})],1),a("van-tab",[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(t.itemsTitle[3]))])]),a("OrderType",{attrs:{orderTypeDataArray:t.typeArray}})],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"orderType"}},[t.orderTypeDataArray.length>0?r("div"):r("div",{staticClass:"noDataPlaceHold"},[r("img",{attrs:{src:a("09f1"),alt:""}}),r("span",{staticClass:"desc"},[t._v(t._s(t.$t("mine.feedbackTip")))])])])},n=[],o={props:{orderTypeDataArray:Array},mounted:function(){},data:function(){return{}},components:{},methods:{}},l=o,c=(a("4a1b"),a("623f")),d=Object(c["a"])(l,s,n,!1,null,"a7188e92",null),p=d.exports,y={data:function(){return{typeArray:[],active:this.$route.params.active,itemsTitle:this.$t("mine.itemsTitle")}},components:{OrderType:p},methods:{onClickLeft:function(){this.$router.back()}}},v=y,u=(a("d8d0"),Object(c["a"])(v,r,i,!1,null,"8d2eb2ae",null));e["default"]=u.exports},d8d0:function(t,e,a){"use strict";var r=a("dea0"),i=a.n(r);i.a},dea0:function(t,e,a){}}]);