(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa6a534"],{"766c":function(t,e,i){},a2ae:function(t,e,i){"use strict";var a=i("766c"),n=i.n(a);n.a},d0aa:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[0==t.type?i("van-nav-bar",{attrs:{title:"我的纪念馆","left-arrow":"",fixed:!0,"left-text":"返回",border:!0},on:{"click-right":t.add,"click-left":t.onClickLeft}},[i("van-button",{staticClass:"btn-add",attrs:{slot:"right",type:"info"},slot:"right"},[t._v("修改资料")])],1):i("van-nav-bar",{attrs:{title:"网上纪念馆","left-arrow":"",fixed:!0,"left-text":"返回",border:!0},on:{"click-left":t.ClickLeft}}),i("div",{staticClass:"menu",staticStyle:{"margin-top":"2rem"}},[t._l(t.list.people,(function(e,a){return i("div",{key:a,staticClass:"menu_box"},[i("div",{staticClass:"menu-centent"},[i("div",[i("img",{attrs:{src:t.list.vitrotype,alt:"",width:"100"}})]),i("ul",{staticClass:"bespeakinfo default"},[i("li",[i("span",{staticClass:"title"},[t._v("逝者姓名")]),i("span",{staticClass:"text"},[t._v(t._s(e.username))])]),i("li",[i("span",{staticClass:"title"},[t._v("性别")]),i("span",{staticClass:"text"},[t._v(t._s(e.sex))])]),i("li",[i("span",{staticClass:"title"},[t._v("生辰日期")]),i("span",{staticClass:"text"},[t._v(t._s(e.birthday))])]),i("li",[i("span",{staticClass:"title"},[t._v("逝世日期")]),i("span",{staticClass:"text"},[t._v(t._s(e.dieday))])])])]),i("h3",[t._v("逝者生平")]),i("div",{staticClass:"menu-centent txt_p"},[i("p",[t._v(t._s(e.introduction))])])])})),0==t.type?i("van-button",{staticStyle:{"margin-top":"15px",background:"#987878",border:"1px solid #987878"},attrs:{type:"danger",size:"large"},on:{click:t.handDel}},[t._v("删除纪念馆")]):t._e()],2)],1)},n=[],s=(i("4ca5"),i("77e6"),i("5ab2"),i("ff21"),i("cdbe"),i("6d57"),i("e10e"),i("4aac"),i("ad86")),r=(i("6657"),i("08c6")),c=i("289c"),o=i("8262"),l=i("08c1");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(c["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={data:function(){return{list:{},id:this.$route.query.id,type:this.$route.query.type||0}},created:function(){this.getList()},computed:d({},Object(l["e"])(["user_info"])),methods:{getList:function(){var t=this,e={id:this.id,uid:this.user_info.id||2};Object(o["f"])(e).then((function(e){t.list=e.data}))},onClickLeft:function(){this.$router.push({name:"memorial"})},ClickLeft:function(){this.$router.push({name:"eater",query:{id:this.id}})},add:function(){this.$router.push({name:"mymemorial",query:{id:this.id}})},handDel:function(){var t=this;r["a"].confirm({title:"删除提示",message:"您确认删除该纪念馆吗？"}).then((function(){var e={id:t.id};Object(o["s"])(e).then((function(e){0===e.code&&(Object(s["a"])({message:"删除成功",duration:800}),t.$router.push({name:"memorial"}))}))})).catch((function(){Object(s["a"])({message:"已取消",duration:800})}))}}},p=f,b=(i("a2ae"),i("623f")),h=Object(b["a"])(p,a,n,!1,null,"3faeaf9a",null);e["default"]=h.exports}}]);