(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f626a59a","chunk-17abcec3"],{"35f5":function(e,t,a){"use strict";var r=a("d27b"),o=a.n(r);o.a},"7fba":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"orderGoodsList"}},[a("div",{staticClass:"listitle"},[a("span",[e._v(e._s(e.$t("order.goods")))]),a("span",{staticClass:"total"},[e._v(e._s(e.selectedCount))])]),a("ul",e._l(e.goods,(function(t,r){return a("li",{key:r,staticClass:"goodsList"},[a("div",{staticClass:"listItem"},[a("img",{attrs:{src:t.thumb,alt:""}})]),a("div",{staticClass:"textDetail"},[a("p",{staticClass:"name"},[e._v(e._s(t.name))]),a("span",{staticClass:"subParam"},[e._v(e._s(e.$t("order.sigalPrice"))+e._s(e._f("moneyFormat")(t.price)))]),a("span",{staticClass:"subParam"},[e._v(e._s(e.$t("order.numbers"))+e._s(t.num))])]),a("div",{staticClass:"goodPrice"},[e._v(e._s(e._f("moneyFormat")(t.price*t.num)))])])})),0)])},o=[],i=(a("4ca5"),a("77e6"),a("5ab2"),a("ff21"),a("cdbe"),a("6d57"),a("e10e"),a("289c")),s=a("08c1");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l={computed:c({},Object(s["c"])({selectedCount:"SELECTED_GOODS_COUNT",goods:"SELECTED_GOODS"})),data:function(){return{}},components:{},methods:{onClickLeft:function(){this.$router.back()}}},u=l,d=(a("35f5"),a("623f")),m=Object(d["a"])(u,r,o,!1,null,"d7378f88",null);t["default"]=m.exports},ccb8:function(e,t,a){},d27b:function(e,t,a){},e39c:function(e,t,a){"use strict";var r=a("ccb8"),o=a.n(r);o.a},f86d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"order"}},[a("van-nav-bar",{attrs:{title:e.$t("order.inputForm"),"left-arrow":"",fixed:!0},on:{"click-left":e.onClickLeft}}),a("OrderGoodsList"),a("van-cell-group",{staticStyle:{"margin-top":"0.6rem"}},[e.is_show?a("van-cell",{attrs:{value:e.is_cemetery,"is-link":""},on:{click:e.chooseAddress}},[a("template",{slot:"title"},[a("span",{staticClass:"red"},[e._v("*")]),a("span",{staticClass:"custom-title"},[e._v("已选墓穴")])])],2):a("van-cell",{attrs:{"is-link":""},on:{click:e.chooseAddress}},[a("template",{slot:"title"},[a("span",{staticClass:"red"},[e._v("*")]),a("van-icon",{staticClass:"ico_square",attrs:{name:"add-square"}}),a("span",{staticClass:"custom-title ico_square_txt"},[e._v(e._s(e.$t("order.location")))])],1)],2),a("van-field",{attrs:{label:"逝者姓名",type:"textarea",readonly:"",placeholder:"",rows:"1",autosize:""},model:{value:e.is_name,callback:function(t){e.is_name=t},expression:"is_name"}}),a("van-cell",{attrs:{"is-link":"",value:e.dataForm.sacrificetime},on:{click:function(t){e.CalendarShow=!0}}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-title"},[e._v("祭扫日期")])])],2),a("van-field",{attrs:{label:"联系人",type:"textarea",required:"",placeholder:"请输入姓名",rows:"1",autosize:""},model:{value:e.dataForm.payname,callback:function(t){e.$set(e.dataForm,"payname",t)},expression:"dataForm.payname"}}),a("van-field",{attrs:{label:"联系电话",type:"textarea",required:"",placeholder:"请输入电话",rows:"1",autosize:""},model:{value:e.dataForm.payphone,callback:function(t){e.$set(e.dataForm,"payphone",t)},expression:"dataForm.payphone"}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:e.flower.length>0,expression:"flower.length > 0"}],attrs:{title:"提货方式","is-link":"",value:e.address},on:{click:function(t){e.showChooseSex=!0}}}),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:e.flower.length>0,expression:"flower.length > 0"}],attrs:{title:"提货时间",value:e.dataForm.picktime,"is-link":""},on:{click:function(t){e.showDateTimePopView=!0}}}),a("van-calendar",{on:{confirm:e.onConfirm},model:{value:e.CalendarShow,callback:function(t){e.CalendarShow=t},expression:"CalendarShow"}})],1),a("van-cell",{directives:[{name:"show",rawName:"v-show",value:e.lamp.length>0,expression:"lamp.length > 0"}]},[a("template",{slot:"title"},[a("span",{staticClass:"red"},[e._v("*")]),a("span",{staticClass:"custom-title",staticStyle:{color:"red"}},[e._v("您选购了祭扫服务，请后续留意订单反馈信息。")])])],2),a("van-cell-group",{staticStyle:{"margin-top":"0.6rem"}},[a("van-cell",{attrs:{title:e.$t("order.totalMoney")}},[a("div",{staticClass:"money"},[e._v(e._s(e._f("moneyFormat")(e.selectedTotalPrice/100)))])])],1),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.showDateTimePopView,callback:function(t){e.showDateTimePopView=t},expression:"showDateTimePopView"}},[a("van-datetime-picker",{attrs:{type:"date","max-date":e.maxDate,"min-date":e.minDate},on:{confirm:e.confirm,cancel:e.cancel},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),a("van-popup",{style:{height:"25%"},attrs:{position:"bottom"},model:{value:e.showChooseSex,callback:function(t){e.showChooseSex=t},expression:"showChooseSex"}},[a("van-radio-group",{model:{value:e.address_radio,callback:function(t){e.address_radio=t},expression:"address_radio"}},[a("van-cell-group",{staticStyle:{"margin-top":"2rem"},on:{click:function(t){return e.clickCell(e.radio)}}},[a("van-cell",{attrs:{title:"自提",clickable:""},on:{click:function(t){e.radio=1}}},[a("van-radio",{attrs:{slot:"right-icon",name:1,"checked-color":"#07c160"},slot:"right-icon"})],1),a("van-cell",{attrs:{title:"园内",clickable:""},on:{click:function(t){e.radio=2}}},[a("van-radio",{attrs:{slot:"right-icon",name:2,"checked-color":"#07c160"},slot:"right-icon"})],1)],1)],1)],1),a("van-submit-bar",{attrs:{price:e.selectedTotalPrice,label:e.$t("order.pay"),"button-text":e.$t("order.sendForm")},on:{submit:e.onSubmit}}),a("transition",{attrs:{name:"router-slider",mode:"out-in"}},[a("router-view")],1)],1)},o=[],i=(a("4ca5"),a("77e6"),a("5ab2"),a("e10e"),a("4aac"),a("ad86")),s=(a("6d57"),a("ff21"),a("63ff"),a("57f0")),n=(a("cdbe"),a("289c")),c=(a("ecd2"),a("08c1")),l=a("6bf2"),u=a.n(l),d=(a("00ca"),a("7fba")),m=a("8262");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={data:function(){return{showChooseSex:!1,showDateTimePopView:!1,CalendarShow:!1,dataForm:{pick:2,picktime:"",sacrificetime:"",vcnote:"",totalprice:"",buryname:"",cid:"",uid:"",openid:"",payname:"",payphone:"",ordertype:2,out_trade_no:"",services:[],cname:""},cemetery:{},address_radio:"",radio:"1",currentDate:new Date,minDate:new Date("2019/01/01"),maxDate:new Date("2030/12/31")}},computed:h({},Object(c["c"])({selectedCount:"SELECTED_GOODS_COUNT",goods:"SELECTED_GOODS",selectedTotalPrice:"SELECTED_GOODS_PRICE"}),{},Object(c["e"])(["set_cemetery","user_info"]),{address:function(){return""==this.dataForm.pick?"请选择提货地点":1==this.dataForm.pick?"自提":"园内"},is_show:function(){if(this.set_cemetery.id||this.cemetery.id)return!0},is_cemetery:function(){if(this.set_cemetery.id||this.cemetery.id)return this.set_cemetery.cname||this.cemetery.cname},is_name:function(){if(this.set_cemetery.id||this.cemetery.id)return this.set_cemetery.buryname||this.cemetery.buryname},lamp:function(){var e=this;return this.goods.filter((function(t,a,r){return t.shoptype==e.SHOPTYPE_LAMP}))},flower:function(){var e=this;return this.goods.filter((function(t,a,r){return t.shoptype==e.SHOPTYPE_FLOWER}))}}),mounted:function(){this.INIT_SHOP_CART(),this.goods.length>0&&this.$nextTick((function(){}))},components:{OrderGoodsList:d["default"]},created:function(){var e=this;this.dataForm.payname=this.user_info.realname||"",this.dataForm.payphone=this.user_info.mobile||"";var t={uid:this.user_info.id||18};Object(m["n"])(t).then((function(t){if(t.data){var a=t.data.filter((function(e){return 1==e.state}));a.length>0&&(e.cemetery=a[0])}}))},methods:h({},Object(c["d"])(["INIT_SHOP_CART","DELETE_SELECT_GOODS"]),{onConfirm:function(e){this.CalendarShow=!1,this.dataForm.sacrificetime=u()(e).format("YYYY-MM-DD")},onClickLeft:function(){this.$router.back()},clickCell:function(e){this.address_radio=e,this.dataForm.pick=e,this.showChooseSex=!1},confirm:function(e){this.dataForm.picktime=u()(e).format("YYYY-MM-DD"),this.showDateTimePopView=!1},cancel:function(){this.showDateTimePopView=!1},onSubmit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.goods.forEach((function(e,a){t.$set(e,"totalprice",e.price*e.num)})),this.dataForm.services=this.goods,this.dataForm.cid=this.set_cemetery.cid||this.cemetery.cid,this.dataForm.cname=this.set_cemetery.cname||this.cemetery.cname,this.dataForm.buryname=this.set_cemetery.buryname||this.cemetery.buryname,this.dataForm.uid=this.user_info.id,this.dataForm.openid=this.user_info.openid,this.dataForm.totalprice=this.selectedTotalPrice/100,this.dataForm.cid){e.next=11;break}return Object(i["a"])({message:"请先添加墓穴",duration:800}),e.abrupt("return");case 11:if(this.dataForm.payname){e.next=14;break}return Object(i["a"])({message:"请填写购买人",duration:800}),e.abrupt("return");case 14:if(!this.dataForm.payphone||/^[1][34578]\d{9}$/.test(this.dataForm.payphone)&&/^[1-9]\d*$/.test(this.dataForm.payphone)&&11===this.dataForm.payphone.length){e.next=17;break}return Object(i["a"])("请输入正确的手机号码"),e.abrupt("return");case 17:if(1!=this.set_cemetery.c_state&&1!=this.cemetery.c_state){e.next=20;break}return Object(i["a"])({message:"该墓位已经购买过此服务，不能重复购买",duration:800}),e.abrupt("return");case 20:Object(m["u"])(this.dataForm).then((function(e){Object(i["a"])({type:"success",message:"提交成功",duration:800,onClose:function(){t.DELETE_SELECT_GOODS(),t.$router.push("/")}})}));case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),chooseAddress:function(){this.$router.push("/cemetery")}}),beforeDestroy:function(){}},b=f,v=(a("e39c"),a("623f")),y=Object(v["a"])(b,r,o,!1,null,"6ea824d3",null);t["default"]=y.exports}}]);