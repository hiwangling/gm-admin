(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-888ba702"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),Math.easeInOutQuad=function(t,e,a,r){return t/=r/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var l=i(),s=t-l,o=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=o;var i=Math.easeInOutQuad(u,l,s,e);n(i),u<e?r(t):a&&"function"===typeof a&&a()};c()}},3917:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"l",(function(){return l})),a.d(e,"j",(function(){return s})),a.d(e,"n",(function(){return o})),a.d(e,"i",(function(){return u})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"h",(function(){return h})),a.d(e,"o",(function(){return m})),a.d(e,"k",(function(){return p})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return y})),a.d(e,"f",(function(){return g})),a.d(e,"m",(function(){return b}));var r=a("b775");function n(t){return Object(r["a"])({url:"/cemetery/tong_ji_xiao_by_qu",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/stat/buryList",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/stat/monthCartogram",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/stat/classifyCartogram",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/stat/quit",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/stat/buyYears",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/stat/buyMonth",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/stat/buyClassify",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/stat/buyPrice",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/stat/trade",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/stat/detailStat",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/stat/buryMonth",method:"get",params:t})}function y(t){return Object(r["a"])({url:"/stat/buryType",method:"get",params:t})}function g(t){return Object(r["a"])({url:"/stat/buyDays",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/stat/orderListPage",method:"get",params:t})}},"9f52":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container",staticStyle:{height:"50px"}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == 1"}],staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:2==t.show,expression:"show == 2"}],staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{type:"year","value-format":"yyyy",placeholder:"选择年份"},model:{value:t.listQuery.years,callback:function(e){t.$set(t.listQuery,"years",e)},expression:"listQuery.years"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == 1"}],staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"开始日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.startime,callback:function(e){t.$set(t.listQuery,"startime",e)},expression:"listQuery.startime"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == 1"}],staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"结束日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.endtime,callback:function(e){t.$set(t.listQuery,"endtime",e)},expression:"listQuery.endtime"}}),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.show||2==t.show,expression:"show == 1 || show == 2"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.handleFilter(t.show)}}},[t._v("查找")]),t._v(" "),a("el-radio-group",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("el-radio-button",{attrs:{label:1}},[t._v("文字统计")]),t._v(" "),a("el-radio-button",{attrs:{label:2}},[t._v("按年度统计")]),t._v(" "),a("el-radio-button",{attrs:{label:3}},[t._v("年龄统计")]),t._v(" "),a("el-radio-button",{attrs:{label:4}},[t._v("性别统计")])],1)],1),t._v(" "),1==t.show?a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"墓位",prop:"area_name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.garden_name)+t._s(e.row.classify_name)+t._s(e.row.cname))])]}}],null,!1,2372824449)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"类型",prop:"style_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"使用人",prop:"vcname"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"性别",prop:"sex"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"出生日期",prop:"birth"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"死亡日期",prop:"death"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"安葬日期",prop:"bury"}})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1):t._e(),t._v(" "),2==t.show?a("grave-chart",{attrs:{"chart-data":t.lineChartData,"chart-type":t.lineChartType,"chart-title":t.lineChartTitle,"chart-current":t.lineChartCurrent,"auto-resize":!0,"legend-data":t.lineLegendData,"chart-year":t.lineChartYear},on:{xData:t.handleTooltip}}):t._e(),t._v(" "),3==t.show||4==t.show?a("pie-chart",{attrs:{"chart-data":t.PieChartData,"char-title":t.PieChartTitle,"legend-data":t.PieChartlegend,"actual-data":t.PieActualData,"rose-type":""}}):t._e()],1)},n=[],i=(a("ac6a"),a("3917")),l=a("333d"),s=a("ac0d"),o=a("e702"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},c=[],d=a("313e"),h=a.n(d),m=a("ed08");a("817d");var p={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},chartData:{required:!0},charTitle:{type:String,default:""},legendData:{default:[]},actualData:{default:[]},roseType:{type:String,default:""}},data:function(){return{chart:null,total_chartData:0,total_actualData:0}},watch:{chartData:{deep:!0,handler:function(t){this.initChart()}}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(m["b"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{changeSell:function(t){var e=0;return t.forEach((function(t,a){e+=parseInt(t.value)})),e},initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:[{trigger:"item",formatter:"{b} : {c} ({d}%)"}],legend:this.legendData,calculable:!0,title:[{text:this.charTitle,subtext:"总计 ".concat(this.changeSell(this.chartData)," (人)"),left:"50%",textAlign:"center"}],series:[{type:"pie",radius:[0,"50%"],center:["50%","45%"],roseType:"radius",emphasis:{label:{show:!0}},data:this.chartData}]})}}},f=p,y=a("2877"),g=Object(y["a"])(f,u,c,!1,null,null,null),b=g.exports,v={name:"VueGarden",components:{GraveChart:o["a"],Pagination:l["a"],PieChart:b},mixins:[s["b"]],data:function(){return{show:1,lineChartData:{},lineChartYear:[],lineLegendData:[],PieChartData:{},PieChartTitle:[],PieChartlegend:{},PieActualData:{},lineChartTitle:"",lineChartCurrent:"year",list:null,total:0,year:2020,lineChartType:!0,listLoading:!0,downloadLoading:!1,listLoadingserver:!1,listQuery:{page:1,limit:20,years:"2020",financetype:2,startime:null,endtime:null,keyword:"",sort:"add_time",order:"desc"},txt:"全部园区",month:null,day:null,area:[],listLoading_month:!1,listLoading_day:!1,year_:"2020",year_text:"",month_text:"",classify:"",sum:0}},computed:{},watch:{show:{handler:function(t){this.listQueryRest(),this.handleFilter(t)}}},created:function(){this.getList(),this.getmonth(),this.gettogram()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i["b"])(this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},getmonth:function(){var t=this;this.listLoading=!0,Object(i["c"])(this.listQuery).then((function(e){t.listLoading=!1,t.lineChartData={expectedData:[],actualData:e.data.number},t.lineChartType=!1,t.lineChartCurrent="year",t.lineChartYear=e.data.month,t.lineLegendData={expectedData:[],actualData:["安葬人数"]},t.lineChartTitle="".concat(t.listQuery.years,"年安葬人数")}))},gettogram:function(){var t=this;Object(i["d"])().then((function(e){var a;a=3==t.show?e.data.age:e.data.sex,t.PieChartTitle=3==t.show?"各年龄段占比":"男女占比",console.log(a);var r=[],n=[];a.forEach((function(t,e){var a={name:t.title,value:parseInt(t.number)};n.push(t.title),r.push(a)})),t.PieChartData=r,t.PieChartlegend={type:"scroll",orient:"vertical",right:100,borderColor:"#ccc",top:0,bottom:20,data:n}}))},handleTooltip:function(t){this.getYear(t)},getYear:function(t){var e=this;this.year_text=t;var a={years:t||this.listQuery.years};Object(i["g"])(a).then((function(a){e.lineChartData={expectedData:a.data.number,actualData:a.data.price},e.lineChartType=!1,e.lineChartCurrent="year",e.lineChartYear=a.data.month,e.month=a.data.list,e.lineLegendData={expectedData:["销售数量"],actualData:["销售金额"]},e.lineChartTitle="".concat(t,"年墓穴销售数量与金额")}))},listQueryRest:function(){this.listQuery={page:1,limit:20,years:"2020",startime:null,endtime:null,search_data:"",financetype:2,sort:"add_time",order:"desc"}},handleFilter:function(t){switch(this.listQuery.page=1,t){case 1:this.getList();break;case 2:this.getmonth();break;case 3:this.gettogram();break;case 4:this.gettogram();break;default:}}}},w=v,_=(a("a36f"),Object(y["a"])(w,r,n,!1,null,null,null));e["default"]=_.exports},a36f:function(t,e,a){"use strict";var r=a("e277"),n=a.n(r);n.a},e277:function(t,e,a){}}]);