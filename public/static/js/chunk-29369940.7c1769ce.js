(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29369940"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var s=i(),o=t-s,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var i=Math.easeInOutQuad(u,s,o,e);r(i),u<e?n(t):a&&"function"===typeof a&&a()};c()}},"2e5a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == 1"}],staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.listQuery.search_data,callback:function(e){t.$set(t.listQuery,"search_data",e)},expression:"listQuery.search_data"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:2==t.show||3==t.show,expression:"show == 2 || show == 3"}],staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{type:"year","value-format":"yyyy",placeholder:"选择年份"},model:{value:t.listQuery.contrast_years,callback:function(e){t.$set(t.listQuery,"contrast_years",e)},expression:"listQuery.contrast_years"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3==t.show||1==t.show,expression:"show == 3 || show == 1"}],staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"开始日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.startime,callback:function(e){t.$set(t.listQuery,"startime",e)},expression:"listQuery.startime"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3==t.show||1==t.show,expression:"show == 3 || show == 1"}],staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"结束日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.endtime,callback:function(e){t.$set(t.listQuery,"endtime",e)},expression:"listQuery.endtime"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.handleFilter(t.show)}}},[t._v("查找")]),t._v(" "),a("el-radio-group",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("el-radio-button",{attrs:{label:1}},[t._v("表格统计")]),t._v(" "),a("el-radio-button",{attrs:{label:2}},[t._v("年度统计")]),t._v(" "),a("el-radio-button",{attrs:{label:3}},[t._v("墓区统计")])],1)],1),t._v(" "),1==t.show?a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"墓穴位置",prop:"classify_name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.garden_name)+t._s(e.row.classify_name)+t._s(e.row.cname))])]}}],null,!1,2372824449)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系人",prop:"buyer_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"phone"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作人",prop:"sellname"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作时间",prop:"order_begin"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"金额",prop:"sum_price"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注",prop:"vcdesc"}})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1):t._e(),t._v(" "),2==t.show?a("line-chart",{attrs:{"chart-data":t.lineChartData,"auto-resize":!0,"chart-title":t.lineChartTitle,"legend-data":t.lineLegendData,"chart-year":t.lineChartYear}}):t._e(),t._v(" "),3==t.show?a("pie-chart",{attrs:{"chart-data":t.PieChartData,"char-title":t.PieChartTitle,"legend-data":t.PieChartlegend,"actual-data":t.PieActualData,"rose-type":""}}):t._e()],1)},r=[],i=(a("ac6a"),a("3917")),s=a("333d"),o=a("ac0d"),l=a("e702"),u=a("f7ee"),c={name:"VueGarden",components:{LineChart:l["a"],Pagination:s["a"],PieChart:u["a"]},mixins:[o["b"]],data:function(){return{show:1,lineChartData:{},lineChartYear:[],lineLegendData:[],lineChartTitle:"",PieChartData:{},PieChartTitle:[],PieChartlegend:{},PieActualData:{},list:null,total:0,year:2020,listLoading:!0,downloadLoading:!1,listLoadingserver:!1,listQuery:{page:1,limit:20,contrast_years:null,startime:null,endtime:null,search_data:"",financetype:5,sort:"add_time",order:"desc"}}},computed:{},watch:{show:{handler:function(t){this.listQueryRest(),this.handleFilter(t)}}},created:function(){this.getList(),this.getmonth(),this.gettogram()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i["n"])(this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},getmonth:function(){var t=this;Object(i["l"])(this.listQuery).then((function(e){t.lineChartData={expectedData:e.data.contrast_price||[],actualData:e.data.price},t.lineChartYear=e.data.month,t.lineLegendData={expectedData:null==t.listQuery.contrast_years?[]:["".concat(t.listQuery.contrast_years,"年迁出统计")],actualData:["".concat(t.year,"年迁出统计")]},t.lineChartTitle="迁出统计"}))},gettogram:function(){var t=this;Object(i["j"])(this.listQuery).then((function(e){var a=[],n=[],r=[];e.data.forEach((function(t,e){var i={name:t.type_name,value:parseInt(t.price)},s={name:t.type_name,value:parseInt(t.number)};r.push(t.type_name),a.push(i),n.push(s)})),t.PieChartData=a,t.PieActualData=n,t.PieChartlegend={type:"scroll",orient:"vertical",right:100,borderColor:"#ccc",top:0,bottom:20,data:r}}))},listQueryRest:function(){this.listQuery={page:1,limit:20,contrast_years:null,startime:null,endtime:null,search_data:"",financetype:5,sort:"add_time",order:"desc"}},handleFilter:function(t){switch(this.listQuery.page=1,t){case 1:this.getList();break;case 2:this.getmonth();break;case 3:this.gettogram();break;default:}},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}},d=c,h=a("2877"),m=Object(h["a"])(d,n,r,!1,null,null,null);e["default"]=m.exports},3917:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"l",(function(){return s})),a.d(e,"j",(function(){return o})),a.d(e,"n",(function(){return l})),a.d(e,"i",(function(){return u})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"h",(function(){return h})),a.d(e,"o",(function(){return m})),a.d(e,"k",(function(){return p})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return y})),a.d(e,"f",(function(){return b})),a.d(e,"m",(function(){return g}));var n=a("b775");function r(t){return Object(n["a"])({url:"/cemetery/tong_ji_xiao_by_qu",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/stat/buryList",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/stat/monthCartogram",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/stat/classifyCartogram",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/stat/quit",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/stat/buyYears",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/stat/buyMonth",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/stat/buyClassify",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/stat/buyPrice",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/stat/trade",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/stat/detailStat",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/stat/buryMonth",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/stat/buryType",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/stat/buyDays",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/stat/orderListPage",method:"get",params:t})}}}]);