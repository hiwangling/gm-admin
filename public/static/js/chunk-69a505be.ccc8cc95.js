(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a505be"],{2204:function(t,a,e){"use strict";var n=e("87de"),i=e.n(n);i.a},3917:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return r})),e.d(a,"l",(function(){return s})),e.d(a,"j",(function(){return o})),e.d(a,"n",(function(){return l})),e.d(a,"i",(function(){return c})),e.d(a,"g",(function(){return u})),e.d(a,"e",(function(){return d})),e.d(a,"h",(function(){return h})),e.d(a,"p",(function(){return p})),e.d(a,"k",(function(){return m})),e.d(a,"c",(function(){return f})),e.d(a,"d",(function(){return b})),e.d(a,"f",(function(){return v})),e.d(a,"m",(function(){return g})),e.d(a,"o",(function(){return y}));var n=e("b775");function i(t){return Object(n["a"])({url:"/cemetery/tong_ji_xiao_by_qu",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/stat/buryList",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/stat/monthCartogram",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/stat/classifyCartogram",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/stat/quit",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/stat/buyYears",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/stat/buyMonth",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/stat/buyClassify",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/stat/buyPrice",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/stat/trade",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/stat/detailStat",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/stat/buryMonth",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/stat/buryType",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/stat/buyDays",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/stat/orderListPage",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/stat/todayOrder",method:"get",params:t})}},"87de":function(t,a,e){},"8c7b":function(t,a,e){},"8e0b":function(t,a,e){"use strict";var n=e("96e3"),i=e.n(n);i.a},9406:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e(t.currentRole,{tag:"component"})],1)},i=[],r=e("db72"),s=e("2f62"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("panel-group"),t._v(" "),e("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[e("line-chart",{attrs:{"chart-data":t.lineChartData,"chart-year":t.lineChartYear}})],1)],1)},l=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("newVisitis")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("\n          待售墓穴\n        ")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.num?t.num[1]:null,duration:2600}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("messages")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"message","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("\n          已售墓穴\n        ")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.num?t.num[2]:null,duration:3e3}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("purchases")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-money"},[e("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("\n          预订墓穴\n        ")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.num?t.num[3]:null,duration:3200}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("shoppings")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[e("svg-icon",{attrs:{"icon-class":"shopping","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("\n          已安葬\n        ")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.num?t.num[4]:null,duration:3600}})],1)])])],1)},u=[],d=e("ec1b"),h=e.n(d),p=e("3917"),m={components:{CountTo:h.a},data:function(){return{count:null,num:null,sell:null}},created:function(){var t=this;Object(p["a"])().then((function(a){t.num=a.data,t.sell=t.num[3]+t.num[4]}))},methods:{}},f=m,b=(e("9aa3"),e("2877")),v=Object(b["a"])(f,c,u,!1,null,"3727c428",null),g=v.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},_=[],w=e("313e"),C=e.n(w),x=e("ed08");e("817d");var V={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{required:!0},chartYear:{required:!0}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(x["b"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){this.chart.setOption({xAxis:{data:this.chartYear,boundaryGap:!1,axisTick:{show:!1}},toolbox:{feature:{magicType:{show:!0,type:["line","bar","stack"]},restore:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["当月销售量"]},series:[{name:"当月销售量",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:this.chartData,animationDuration:2800,animationEasing:"cubicInOut"}]})},initChart:function(){this.chart=C.a.init(this.$el,"macarons"),this.setOptions()}}},O=V,F=Object(b["a"])(O,y,_,!1,null,null,null),j=F.exports,D={name:"DashboardAdmin",components:{PanelGroup:g,LineChart:j},data:function(){return{lineChartData:[],lineChartYear:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(p["f"])().then((function(a){t.lineChartYear=a.data.days,t.lineChartData=a.data.number}))}}},A=D,S=(e("bb4b"),Object(b["a"])(A,o,l,!1,null,"7e4dbcc0",null)),q=S.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("div",{staticClass:" clearfix"},[e("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v("\n      Your roles:\n      "),t._l(t.roles,(function(a){return e("span",{key:a,staticClass:"pan-info-roles"},[t._v(t._s(a))])}))],2),t._v(" "),e("div",{staticClass:"info-container"},[e("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),e("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),t._v(" "),e("div",[e("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},k=[],z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[e("div",{staticClass:"pan-info"},[e("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),t._v(" "),e("img",{staticClass:"pan-thumb",attrs:{src:t.image}})])},N=[],T=(e("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),L=T,R=(e("2204"),Object(b["a"])(L,z,N,!1,null,"be3d0b3e",null)),$=R.exports,P={name:"DashboardEditor",components:{PanThumb:$},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(r["a"])({},Object(s["c"])(["name","avatar","roles"]))},M=P,H=(e("8e0b"),Object(b["a"])(M,E,k,!1,null,"25b93ad7",null)),Y=H.exports,I={name:"Dashboard",components:{adminDashboard:q,editorDashboard:Y},data:function(){return{currentRole:"adminDashboard"}},computed:Object(r["a"])({},Object(s["c"])(["perms"])),created:function(){}},G=I,B=Object(b["a"])(G,n,i,!1,null,null,null);a["default"]=B.exports},"96e3":function(t,a,e){},"9aa3":function(t,a,e){"use strict";var n=e("8c7b"),i=e.n(n);i.a},bb4b:function(t,a,e){"use strict";var n=e("fffa"),i=e.n(n);i.a},ec1b:function(t,a,e){!function(a,e){t.exports=e()}(0,(function(){return function(t){function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,e){var n=e(4)(e(1),e(5),null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var a=t.split("."),e=a[0],n=a.length>1?this.decimal+a[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(e);)e=e.replace(i,"$1"+this.separator+"$2");return this.prefix+e+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)a.requestAnimationFrame=r=function(){},a.cancelAnimationFrame=s=function(){};else{a.requestAnimationFrame=r=window.requestAnimationFrame,a.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<i.length&&(!r||!s);l++)o=i[l],a.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],a.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(a.requestAnimationFrame=r=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-n)),i=window.setTimeout((function(){t(a+e)}),e);return n=a+e,i},a.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=r,a.cancelAnimationFrame=s},function(t,a){t.exports=function(t,a,e,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),e&&(o._scopeId=e),n){var l=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var a=n[t];l[t]=function(){return a}})),o.computed=l}return{esModule:i,exports:r,options:o}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},fffa:function(t,a,e){}}]);