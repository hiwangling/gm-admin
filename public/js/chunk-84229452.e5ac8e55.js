(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84229452"],{1007:function(t,e,n){"use strict";var r=n("e46b"),s=n("09b9"),o=n("ee21"),a=n("eafa"),i=[].lastIndexOf,c=!!i&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("a2cd")(i)),"Array",{lastIndexOf:function(t){if(c)return i.apply(this,arguments)||0;var e=s(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},"15f8":function(t,e,n){t.exports=n.p+"img/empty.5053d452.png"},"1fca":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader-layer",class:t.show?"active":""},[t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),n("div",{staticClass:"double-bounce2"},[t._v("loading...")]),n("div",{staticClass:"double-bounce3"})])}],o={props:["show"]},a=o,i=(n("4fb8"),n("623f")),c=Object(i["a"])(a,r,s,!1,null,"58520af5",null);e["a"]=c.exports},"4fb8":function(t,e,n){"use strict";var r=n("cbd4"),s=n.n(r);s.a},"587d":function(t,e,n){"use strict";n("5cb4"),n("1007"),n("e10e"),n("6d57"),n("ff21");var r=n("82ae"),s=n.n(r);function o(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(o,i){if("GET"===r.toUpperCase()){var c="";Object.keys(n).forEach((function(t){c+=t+"="+n[t]+"&"})),c?(c=c.substr(0,c.lastIndexOf("&")),-1===e.indexOf("127.0.0.1")?e+="?"+c+"&Geek-James="+a(20):e+="?"+c):-1===e.indexOf("127.0.0.1")&&(e+="?Geek-James="+a(20)),t=s.a.get(e)}else"POST"===r.toUpperCase()&&(t=s.a.post(e,n));t.then((function(t){o(t.data)})).catch((function(t){i(t)}))}))}function a(t){for(var e=["0","1","2","3","4","5","6","7","8","9"],n="",r=0;r<t;r++){var s=Math.ceil(9*Math.random());n+=e[s]}return n}n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"i",(function(){return m})),n.d(e,"h",(function(){return v}));var i="http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/",c=function(){return o(i+"homeApi")},u=function(){return o(i+"homeApi/categories")},l=function(t){return o(i+"homeApi/categoriesdetail"+t)},d=function(){return o(i+"recipe/allScene")},p=function(t){return o(i+"recipe/menulist"+t)},f=function(){return o(i+"cart/youlike")},h=function(t){return o(i+"send_code",{phoneNumber:t})},m=function(t,e){return o(i+"login_code",{phone:t,captcha:e},"POST")},v=function(){return o(i+"vip")}},"6dcc":function(t,e,n){},bca2:function(t,e,n){"use strict";var r=n("6dcc"),s=n.n(r);s.a},c228:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("header",{staticClass:"\n     titleWrapper"},[r("h4",[r("strong",[t._v(t._s(t.$t("car.title")))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowEmptyCart,expression:"isShowEmptyCart"}],staticClass:"clearCart",style:0==t.selectedGoodsCount?"color:grey":"color:#45c763",on:{click:t.clearCart}},[t._v(t._s(t.$t("car.delete")))])]),r("div",{staticClass:"cartWrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowEmptyCart,expression:"!isShowEmptyCart"}],staticClass:"emptyCart"},[r("img",{attrs:{src:n("15f8"),alt:""}}),r("div",{staticClass:"title"},[t._v(t._s(t.$t("car.tip")))]),r("router-link",{staticClass:"goHome",attrs:{to:"/dashboard/home"}},[t._v(t._s(t.$t("car.walk")))])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowEmptyCart,expression:"isShowEmptyCart"}],staticClass:"contentWrapper"},[t._l(t.shopCart,(function(e,n){return r("div",{key:e.id,staticClass:"contentWrapperList"},[r("section",[r("div",{staticClass:"shopCartListCon"},[r("div",{staticClass:"left"},[r("a",{staticClass:"cartCheckBox",attrs:{href:"javaScript:;",checked:e.checked},on:{click:function(n){return n.stopPropagation(),t.single(e.id)}}})]),r("div",{staticClass:"center"},[r("img",{attrs:{src:e.smallImage}})]),r("div",{staticClass:"right"},[r("a",[t._v(t._s(e.name))]),r("div",{staticClass:"bottomContent"},[r("p",{staticClass:"shopPrice"},[t._v(" "+t._s(t._f("moneyFormat")(e.price)))]),r("div",{staticClass:"shopDeal"},[r("span",{on:{click:function(n){return t.reduceGoods(e.id,e.num)}}},[t._v("-")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"goods.num"}],attrs:{type:"number",disabled:""},domProps:{value:e.num},on:{input:function(n){n.target.composing||t.$set(e,"num",n.target.value)}}}),r("span",{on:{click:function(n){return t.addGoods(e.id,e.name,e.smallImage,e.price)}}},[t._v("+")])])])])])])])})),r("van-submit-bar",{directives:[{name:"show",rawName:"v-show",value:t.isShowEmptyCart,expression:"isShowEmptyCart"}],attrs:{price:t.totalPrice,"button-text":t.submitBarText,disabled:!(t.selectedGoodNum>0)},on:{submit:t.onSubmit}},[r("van-checkbox",{attrs:{"checked-color":"#45c763"},model:{value:t.isCheckedAll,callback:function(e){t.isCheckedAll=e},expression:"isCheckedAll"}},[t._v(t._s(t.$t("car.all")))])],1)],2),r("van-divider",{style:{color:"black",borderColor:"grey",padding:"0 16px"}},[t._v("\n      购物车\n    ")])],1),r("Loading",{attrs:{show:t.isShowLoading}}),r("v-top")],1)},s=[],o=(n("4ca5"),n("77e6"),n("5ab2"),n("cdbe"),n("4aac"),n("ad86")),a=(n("63ff"),n("57f0")),i=(n("6657"),n("08c6")),c=(n("de78"),n("ff21"),n("6d57"),n("e10e"),n("289c")),u=n("fb2d"),l=n("587d"),d=n("1fca"),p=n("08c1");n("cdd9");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={mounted:function(){this._initData()},data:function(){return{youLike_product_lists:[],isShowLoading:!1,isEmptyCart:!1}},components:{ProduceItem:u["a"],Loading:d["a"]},computed:h({submitBarText:function(){var t=this.selectedGoodNum;return this.$t("order.settlement")+(t?"(".concat(t,")"):"")},isShowEmptyCart:function(){var t=!1;return this.totalCount>0&&(t=!0),t}},Object(p["e"])(["shopCart","userInfo"]),{},Object(p["c"])({selectedGoodNum:"SELECTED_GOODS_COUNT",totalPrice:"SELECTED_GOODS_PRICE"}),{totalCount:function(){return Object.keys(this.shopCart).length},selectedGoodsCount:function(){var t=0;return Object.values(this.shopCart).forEach((function(e,n){e.checked&&t++})),t},isCheckedAll:{get:function(){var t=this.totalCount>0,e=this.shopCart;return Object.values(e).forEach((function(e){e.checked||(t=!1)})),t},set:function(t){var e=!t;this.ALL_SELECT_GOODS({isCheckedAll:e})}}}),methods:h({},Object(p["d"])(["ADD_GOODS","REDUCE_GOODS","SINGLE_SELECT_GOODS","ALL_SELECT_GOODS","DELETE_SELECT_GOODS","ADD_TO_CART"]),{clearCart:function(){var t=this;this.selectedGoodsCount>0&&i["a"].confirm({title:this.$t("login.tipTile"),message:this.$t("common.deleteConfirm")}).then((function(){t.DELETE_SELECT_GOODS()})).catch((function(){}))},_initData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["c"])();case 2:e=t.sent,e.success&&(this.youLike_product_lists=e.data.product_list,this.isShowLoading=!1);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),reduceGoods:function(t,e){var n=this;e>1?this.REDUCE_GOODS({goodsID:t}):1===e&&i["a"].confirm({title:"温馨提示",message:"确定删除该商品吗?"}).then((function(){n.REDUCE_GOODS({goodsID:t})})).catch((function(){}))},addGoods:function(t,e,n,r){this.ADD_GOODS({goodsID:t,goodsName:e,goodsSmallImage:n,goodsPrice:r})},single:function(t){this.SINGLE_SELECT_GOODS({goodsID:t})},onSubmit:function(){this.selectedGoodNum>0?this.$router.push("/order"):Object(o["a"])({message:this.$t("order.chooseGoods"),duration:1e3})}})},v=m,b=(n("bca2"),n("623f")),C=Object(b["a"])(v,r,s,!1,null,"0726e73d",null);e["default"]=C.exports},c495:function(t,e,n){"use strict";var r=n("cff8"),s=n.n(r);s.a},cbd4:function(t,e,n){},cff8:function(t,e,n){},fb2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"produceItem"}},[n("h3",{staticClass:"produceItem-title"},[t._v("商品推荐")]),t._l(t.product_lists,(function(e,r){return n("div",{key:r,staticClass:"item",on:{click:function(n){return n.stopPropagation(),t.goToGoodsDetail(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.thumb,expression:"product.thumb"}],attrs:{alt:""}}),n("p",{staticClass:"itemTitle"},[t._v(t._s(e.shoptype_name))]),n("p",{staticClass:"itemSubTitle"},[t._v(t._s(e.vcnote))]),t.isShowEatTag?n("span",{staticClass:"tagEat"},[t._v(t._s(t.$t("home.foodie")))]):t._e(),n("span",{staticClass:"price"},[t._v("\n      "+t._s(t._f("moneyFormat")(e.price))+"\n    ")]),n("span",{staticClass:"originPrice"},[t._v(t._s(t._f("moneyFormat")(e.price)))]),n("div",{staticClass:"buyCar",on:{click:function(n){return n.stopPropagation(),t.addCart(e)}}},[n("svg-icon",{staticStyle:{width:"1.5rem",height:"1.5rem"},attrs:{iconClass:"car"}})],1)])}))],2)},s=[],o=(n("4ca5"),n("77e6"),n("5ab2"),n("ff21"),n("cdbe"),n("6d57"),n("e10e"),n("cc57"),n("289c")),a=n("08c1");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={props:{product_lists:Array},data:function(){return{isShowEatTag:!1}},components:{},computed:{},methods:c({},Object(a["d"])({addCart:"ADD_TO_CART"}),{goToGoodsDetail:function(t){this.$router.push({name:"goodsDetail",query:{id:t.id,name:t.name,small_image:t.small_image,price:t.price,spec:t.spec,total_sales:t.total_sales,origin_price:t.origin_price}})}})},l=u,d=(n("c495"),n("623f")),p=Object(d["a"])(l,r,s,!1,null,"b95037da",null);e["a"]=p.exports}}]);