(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bff783d"],{"34f9":function(t,e,i){},6847:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:"我的纪念馆","left-arrow":"",fixed:!0,"left-text":"返回",border:!0},on:{"click-right":t.add,"click-left":t.onClickLeft}},[i("van-button",{staticClass:"btn-add",attrs:{slot:"right"},slot:"right"},[t._v("添加")])],1),t.list.memorial?i("div",{ref:"wrapper",staticClass:"wrapper"},[i("div",{staticClass:"search-main"},[i("div",{staticClass:"service-box"},[i("div",{staticClass:"service"},[i("p",{staticClass:"title"},[i("van-icon",{staticClass:"m-ico",attrs:{name:"wap-home"}}),t._v("我的纪念馆\n          ")],1)]),i("div",{staticClass:"line"}),i("div",{staticClass:"service"},[i("ul",{staticClass:"info-list"},[i("van-row",{staticStyle:{width:"100%"}},t._l(t.list.memorial,(function(e,s){return i("van-col",{key:s,attrs:{span:"8"},on:{click:function(i){return t.Detail(e)}}},[i("li",[i("img",{staticClass:"header-img",attrs:{src:e.vitrotype,alt:""}}),i("p",[t._v(t._s(e.title))])])])})),1)],1)])]),t.collect.memorial?i("div",{staticClass:"service-box"},[i("div",{staticClass:"service"},[i("p",{staticClass:"title"},[i("van-icon",{staticClass:"m-ico",attrs:{name:"like"}}),t._v("我的收藏\n          ")],1)]),i("div",{staticClass:"line"}),i("div",{staticClass:"service"},[i("ul",{staticClass:"info-list"},[i("van-row",{staticStyle:{width:"100%"}},t._l(t.collect.memorial,(function(e,s){return i("van-col",{key:s,attrs:{span:"8"},on:{click:function(i){return t.Details(e)}}},[i("li",[i("img",{staticClass:"header-img",attrs:{src:e.vitrotype,alt:""}}),i("p",[t._v(t._s(e.title))])])])})),1)],1)])]):t._e()])]):t._e()],1)},a=[],r=(i("4ca5"),i("77e6"),i("5ab2"),i("ff21"),i("cdbe"),i("6d57"),i("e10e"),i("289c")),c=i("ecd2"),n=i("08c1"),l=i("8262");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={data:function(){return{list:[],collect:[]}},mounted:function(){var t=this;this.$nextTick((function(){var e={click:!0,tap:!0};t.scroll=new c["a"](t.$refs.wrapper,e)}))},computed:u({},Object(n["e"])(["user_info"])),created:function(){this.getList()},methods:{getList:function(){var t=this,e={uid:this.user_info.id||2};Object(l["g"])(e).then((function(e){t.list=e.data[0],t.collect=e.data[1]}))},onSearch:function(){},Detail:function(t){this.$router.push({name:"memorialPage",query:{id:t.id}})},Details:function(t){this.$router.push({name:"eater",query:{id:t.id}})},onClickLeft:function(){this.$router.push({name:"mine"})},add:function(){this.$router.push("/mymemorial")}}},d=f,v=(i("de82"),i("623f")),p=Object(v["a"])(d,s,a,!1,null,"e0e72864",null);e["default"]=p.exports},de82:function(t,e,i){"use strict";var s=i("34f9"),a=i.n(s);a.a}}]);