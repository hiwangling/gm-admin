(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca49cb4"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var s=n(),l=t-s,o=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=o;var n=Math.easeInOutQuad(c,s,l,e);r(n),c<e?i(t):a&&"function"===typeof a&&a()};u()}},3759:function(t,e,a){},3917:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"l",(function(){return s})),a.d(e,"j",(function(){return l})),a.d(e,"n",(function(){return o})),a.d(e,"i",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"h",(function(){return h})),a.d(e,"o",(function(){return m})),a.d(e,"k",(function(){return p})),a.d(e,"c",(function(){return y})),a.d(e,"d",(function(){return f})),a.d(e,"f",(function(){return v})),a.d(e,"m",(function(){return g}));var i=a("b775");function r(t){return Object(i["a"])({url:"/cemetery/tong_ji_xiao_by_qu",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/stat/buryList",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/stat/monthCartogram",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/stat/classifyCartogram",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/stat/quit",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/stat/buyYears",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/stat/buyMonth",method:"get",params:t})}function d(t){return Object(i["a"])({url:"/stat/buyClassify",method:"get",params:t})}function h(t){return Object(i["a"])({url:"/stat/buyPrice",method:"get",params:t})}function m(t){return Object(i["a"])({url:"/stat/trade",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/stat/detailStat",method:"post",data:t})}function y(t){return Object(i["a"])({url:"/stat/buryMonth",method:"get",params:t})}function f(t){return Object(i["a"])({url:"/stat/buryType",method:"get",params:t})}function v(t){return Object(i["a"])({url:"/stat/buyDays",method:"get",params:t})}function g(t){return Object(i["a"])({url:"/stat/orderListPage",method:"get",params:t})}},6507:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container",staticStyle:{height:"50px"}},[a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3==t.show||4==t.show,expression:"show == 3 || show == 4"}],staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{type:"year","value-format":"yyyy",placeholder:"选择年份"},model:{value:t.listQuery.years,callback:function(e){t.$set(t.listQuery,"years",e)},expression:"listQuery.years"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3==t.show||4==t.show,expression:"show == 3 || show == 4"}],staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"开始日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.startime,callback:function(e){t.$set(t.listQuery,"startime",e)},expression:"listQuery.startime"}}),t._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3==t.show||4==t.show,expression:"show == 3 || show == 4"}],staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"结束日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.endtime,callback:function(e){t.$set(t.listQuery,"endtime",e)},expression:"listQuery.endtime"}}),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.show,expression:"show != 1"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.handleFilter(t.show)}}},[t._v("查找")]),t._v(" "),a("el-radio-group",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("el-radio-button",{attrs:{label:1}},[t._v("文字统计")]),t._v(" "),a("el-radio-button",{attrs:{label:2}},[t._v("按年度统计")]),t._v(" "),a("el-radio-button",{attrs:{label:3}},[t._v("按墓区统计")]),t._v(" "),a("el-radio-button",{attrs:{label:4}},[t._v("按金额统计")])],1)],1),t._v(" "),1==t.show?a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}]},[t.list?a("div",[a("div",{staticClass:"title_"},[t._v("\n          销售年统计\n          "),a("strong",[t._v("("+t._s(t.txt)+")")])]),t._v(" "),a("el-row",{staticStyle:{"flex-wrap":"wrap","margin-bottom":"10px"},attrs:{type:"flex"}},t._l(t.list,(function(e,i){return a("el-col",{key:i,staticClass:"cols",class:e.years==t.year_text?"active":""},[a("ul",{staticStyle:{height:"90px"},on:{click:function(a){return t.getYear(e.years)}}},[a("li",[a("span",{staticClass:"text"},[t._v(t._s(e.years)+"年")])]),t._v(" "),a("li",[a("span",{staticClass:"title"},[t._v("已售出 :")]),t._v(" "),a("span",{staticClass:"text"},[t._v("\n                  "+t._s(e.number)+"\n                  "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.number>0,expression:"item.number>0"}]},[t._v("座")])])]),t._v(" "),a("li",[a("span",{staticClass:"title"},[t._v("总售价 :")]),t._v(" "),a("span",{staticClass:"text"},[t._v("\n                  "+t._s(e.price)+"\n                  "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.price>0,expression:"item.price>0"}]},[t._v("元")])])])])])})),1)],1):t._e()]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading_month,expression:"listLoading_month"}]},[t.month&&t.month.length>0?a("div",[a("div",{staticClass:"title_"},[t._v("\n          销售月统计\n          "),a("strong",[t._v("("+t._s(t.year_text)+"年)")])]),t._v(" "),a("el-row",{staticStyle:{"padding-top":"5px",border:"1px solid #eee"},attrs:{gutter:20}},t._l(t.month,(function(e,i){return a("el-col",{key:i,staticClass:"cols",class:i+1==t.month_text?"active":"",staticStyle:{"margin-bottom":"10px"},attrs:{span:4}},[a("ul",{staticClass:"cols_month",staticStyle:{height:"90px"},on:{click:function(e){return t.grave_list(i+1)}}},[a("li",[a("span",{staticClass:"text"},[t._v(t._s(t.year_text)+"年"+t._s(i+1)+"月")])]),t._v(" "),a("li",[a("span",{staticClass:"title"},[t._v("已售出 :")]),t._v(" "),a("span",{staticClass:"text"},[t._v("\n                  "+t._s(e.number)+"\n                  "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.number>0,expression:"item.number>0"}]},[t._v("座")])])]),t._v(" "),a("li",[a("span",{staticClass:"title"},[t._v("总售价 :")]),t._v(" "),a("span",{staticClass:"text"},[t._v("\n                  "+t._s(e.price)+"\n                  "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.price>0,expression:"item.price>0"}]},[t._v("元")])])])])])})),1)],1):t._e()])]):t._e(),t._v(" "),2==t.show?a("grave-chart",{attrs:{"chart-data":t.lineChartData,"chart-type":t.lineChartType,"chart-title":t.lineChartTitle,"chart-current":t.lineChartCurrent,"auto-resize":!0,"legend-data":t.lineLegendData,"chart-year":t.lineChartYear},on:{xData:t.handleTooltip}}):t._e(),t._v(" "),3==t.show||4==t.show?a("pie-chart",{attrs:{"chart-data":t.PieChartData,"char-title":t.PieChartTitle,"legend-data":t.PieChartlegend,"actual-data":t.PieActualData,"rose-type":""}}):t._e(),t._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"墓穴销售信息",visible:t.dialogFormVisible,top:"5vh","append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoadings,expression:"listLoadings"}],attrs:{data:t.grave,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"墓穴位置",prop:"garden_name",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.garden_name)+t._s(e.row.classify_name)+t._s(e.row.cname))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"逝者姓名",prop:"bury_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系人",prop:"buyer_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"phone"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"类型",prop:"style_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作人",prop:"sellname"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"金额",prop:"sum_price",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",{staticStyle:{color:"red"}},[t._v(t._s(e.row.sum_price))])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1)],1)],1)},r=[],n=(a("ac6a"),a("3917")),s=a("333d"),l=a("ac0d"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},c=[],u=(a("7f7f"),a("313e")),d=a.n(u),h=a("ed08");a("817d");var m={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"550px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0},legendData:{required:!0},chartType:{type:Boolean,default:!0},chartCurrent:{type:String,default:"year"},chartTitle:{type:String,default:""},chartYear:{type:Array,required:!0}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(h["b"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;if(this.legendData.expectedData||this.legendData.actualData)var i=this.legendData.expectedData[0],r=this.legendData.actualData[0];this.chart.setOption({backgroundColor:"#323a5e",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{magicType:{show:!0,type:["line","bar","stack"]},restore:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},title:{text:this.chartTitle,textStyle:{fontSize:22,fontWeight:"normal",color:"#fff"},top:10,x:"center"},grid:{left:"2%",right:"4%",bottom:"14%",top:"16%",containLabel:!0},legend:{data:[i,r],top:50,textStyle:{color:"#fff"},x:"center",itemWidth:12,itemHeight:10},xAxis:{type:"category",data:this.chartYear,axisLine:{lineStyle:{color:"white"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei"}}},yAxis:[{type:"value",name:"金额",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)"}},axisLabel:{formatter:"{value} 元"}},{type:"value",scale:!0,name:"数量",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)"}},axisLabel:{formatter:"{value} 座"}}],series:[{name:this.legendData.actualData,type:"bar",barWidth:"15%",yAxisIndex:0,itemStyle:{normal:{color:new d.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fccb05"},{offset:1,color:"#f5804d"}]),barBorderRadius:0}},data:a},{name:this.legendData.expectedData,type:"bar",barWidth:"15%",yAxisIndex:1,itemStyle:{normal:{color:new d.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#248ff7"},{offset:1,color:"#6851f1"}]),barBorderRadius:0}},data:e}]})},initChart:function(){var t=this;this.chart=d.a.init(this.$el,"macarons"),this.setOptions(this.chartData),this.chart.on("click",(function(e){if(t.chartType){var a={type:t.chartCurrent,data:e};t.$emit("xData",a.data.name)}}))}}},p=m,y=a("2877"),f=Object(y["a"])(p,o,c,!1,null,null,null),v=f.exports,g=a("f7ee"),b={name:"VueGarden",components:{GraveChart:v,Pagination:s["a"],PieChart:g["a"]},mixins:[l["b"]],data:function(){return{show:1,lineChartData:{},lineChartYear:[],lineLegendData:[],PieChartData:{},PieChartTitle:[],PieChartlegend:{},PieActualData:{},lineChartTitle:"",lineChartCurrent:"year",dialogFormVisible:!1,list:null,grave:null,total:0,year:2020,lineChartType:!0,listLoading:!0,listLoadings:!0,downloadLoading:!1,listLoadingserver:!1,listQuery:{page:1,limit:20,years:"2020",financetype:2,startime:null,endtime:null,search_data:"",days:"",sort:"add_time",order:"desc"},txt:"全部园区",month:null,day:null,area:[],listLoading_month:!1,listLoading_day:!1,year_:"2020",year_text:"",month_text:"",classify:"",sum:0}},computed:{},watch:{show:{handler:function(t){this.listQueryRest(),this.handleFilter(t)}}},created:function(){this.getmonth(),this.gettogram(),this.statbuyPrice()},methods:{getList:function(){var t=this;this.listLoadings=!0,Object(n["m"])(this.listQuery).then((function(e){t.grave=e.data.data,t.total=e.data.total||0,t.listLoadings=!1})).catch((function(){t.grave=[],t.total=0,t.listLoadings=!1}))},grave_list:function(t){this.month_text=t,this.listQuery.days="".concat(this.year_text,"-").concat(this.addzero(t)),this.dialogFormVisible=!0,this.getList()},addzero:function(t){return t<10?"0"+t:t},getmonth:function(){var t=this;this.listLoading=!0,Object(n["i"])(this.listQuery).then((function(e){var a=[],i=[],r=[];t.list=e.data,t.listLoading=!1,e.data.forEach((function(t,e){a.push(t.years),i.push(t.price),r.push(t.number)})),t.lineChartData={expectedData:r,actualData:i},t.lineChartType=!0,t.lineChartCurrent="year",t.lineChartYear=a,t.lineLegendData={expectedData:["销售数量"],actualData:["销售金额"]},t.lineChartTitle="墓穴销售数量与金额"}))},gettogram:function(){var t=this;Object(n["e"])(this.listQuery).then((function(e){var a=[],i=[],r=[];e.data.forEach((function(t,e){var n={name:t.type_name,value:parseInt(t.price)},s={name:t.type_name,value:parseInt(t.number)};r.push(t.type_name),a.push(n),i.push(s)})),t.PieChartData=a,t.PieActualData=i,t.PieChartlegend={type:"scroll",orient:"vertical",right:100,borderColor:"#ccc",top:0,bottom:20,data:r}}))},statbuyPrice:function(){var t=this;Object(n["h"])(this.listQuery).then((function(e){t.PieChartTitle="".concat(t.listQuery.years,"年销售数量统计");var a=[],i=[],r=[];e.data.forEach((function(t,e){var n={name:t.sum_price,value:parseInt(t.price)},s={name:t.sum_price,value:parseInt(t.number)};r.push(t.sum_price),a.push(n),i.push(s)})),t.PieChartData=a,t.PieActualData=i,t.PieChartlegend={type:"scroll",orient:"vertical",right:100,borderColor:"#ccc",top:0,bottom:20,data:r}}))},handleTooltip:function(t){this.getYear(t)},getYear:function(t){var e=this;this.year_text=t;var a={years:t||this.listQuery.years};Object(n["g"])(a).then((function(a){e.lineChartData={expectedData:a.data.number,actualData:a.data.price},e.lineChartType=!1,e.lineChartCurrent="year",e.lineChartYear=a.data.month,e.month=a.data.list,e.lineLegendData={expectedData:["销售数量"],actualData:["销售金额"]},e.lineChartTitle="".concat(t,"年墓穴销售数量与金额")}))},listQueryRest:function(){this.listQuery={page:1,limit:20,years:"2020",startime:null,endtime:null,search_data:"",financetype:2,sort:"add_time",order:"desc"}},handleFilter:function(t){switch(this.listQuery.page=1,t){case 1:this.getList();break;case 2:this.getmonth();break;case 3:this.gettogram();break;case 4:this.statbuyPrice();break;default:}}}},_=b,w=(a("bc92"),Object(y["a"])(_,i,r,!1,null,null,null));e["default"]=w.exports},bc92:function(t,e,a){"use strict";var i=a("3759"),r=a.n(i);r.a}}]);