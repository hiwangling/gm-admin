(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{"12f9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"dialog",attrs:{"close-on-click-modal":!1,width:"500px",title:"扫描存档",visible:t.dialogFormVisible,top:"5vh","append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{attrs:{id:"noniediv"}},[a("p",{staticClass:"xform-p"}),t._v(" "),a("p",{staticClass:"xform-p",attrs:{id:"streamwrap"}},[a("img",{staticClass:"xform",attrs:{id:"streamimage",src:"http://127.0.0.1:38088/video=stream&camidx=0",onerror:"onerror=null;src='http://kykjgm.lxygm.com/app_stop.jpg'"}})])]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.getimg}},[t._v("保存")])],1)])},r=[],n=(a("6b54"),a("bc3a")),s=a.n(n),o={data:function(){return{dialogFormVisible:!1}},methods:{getimg:function(){var t=this,e=0,a=0,i='{"filepath":"base64","rotate":"'+e.toString()+'","camidx":"'+a.toString()+'","cutpage":"1"}',r="http://127.0.0.1:38088/video=grabimage";s.a.post(r,i).then((function(e){0==e.data.code&&(t.$emit("setImg","data:image/jpg;base64,"+e.data.photoBase64),t.$notify.success({title:"成功",message:"照片保存成功"}),t.dialogFormVisible=!1)}))},show:function(){this.dialogFormVisible=!0}}},l=o,c=(a("83fb"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,null,null);e["a"]=d.exports},"1efe":function(t,e,a){},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[],n=(a("c5f6"),a("09f4")),s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,24,30,40,50,60]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&Object(n["a"])(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&Object(n["a"])(0,800)}}},o=s,l=(a("879d"),a("2877")),c=Object(l["a"])(o,i,r,!1,null,"6efb947a",null);e["a"]=c.exports},"83fb":function(t,e,a){"use strict";var i=a("1efe"),r=a.n(i);r.a},"879d":function(t,e,a){"use strict";var i=a("eb4c"),r=a.n(i);r.a},e702:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},r=[],n=(a("7f7f"),a("bd86")),s=a("313e"),o=a.n(s),l=a("ed08");a("817d");var c={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0},legendData:{required:!0},chartType:{type:Boolean,default:!0},chartYear:{type:Array,required:!0},chartTitle:{type:String,default:""}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(l["b"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.expectedData,i=e.actualData;if(this.legendData.expectedData||this.legendData.actualData)var r=this.legendData.expectedData[0],s=this.legendData.actualData[0];this.chart.setOption({title:{text:this.chartTitle,top:0,x:"center"},xAxis:{data:this.chartYear,boundaryGap:!0},toolbox:{feature:{magicType:{show:!0,type:["line","bar","stack"]},restore:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},grid:{left:10,right:20,bottom:20,top:80,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,5]},yAxis:{axisTick:{show:!1}},legend:{data:[r,s],top:30},series:[(t={name:this.legendData.expectedData,itemStyle:{normal:{color:"#003366"}},label:{normal:{show:!0,position:"top"}}},Object(n["a"])(t,"itemStyle",{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(15,197,243,1)"},{offset:1,color:"rgba(15,197,243,0)"}]),borderColor:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(180,240,255,1)"},{offset:1,color:"rgba(15,197,243,1)"}]),borderWidth:2}}),Object(n["a"])(t,"type","bar"),Object(n["a"])(t,"data",a),t),{name:this.legendData.actualData,type:"bar",label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(61,126,235, 1)"},{offset:1,color:"rgba(61,126,235, 0)"}]),borderColor:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(160,196,225, 1)"},{offset:1,color:"rgba(61,126,235, 1)"}]),borderWidth:2}},data:i}]})},initChart:function(){var t=this;this.chart=o.a.init(this.$el,"macarons"),this.setOptions(this.chartData),this.chart.on("click",(function(e){t.chartType&&t.$emit("xData",e.data.name)}))}}},d=c,h=a("2877"),u=Object(h["a"])(d,i,r,!1,null,null,null);e["a"]=u.exports},eb4c:function(t,e,a){},f7ee:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},r=[],n=(a("ac6a"),a("313e")),s=a.n(n),o=a("ed08");a("817d");var l={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},chartData:{required:!0},charTitle:{type:String,default:""},legendData:{default:[]},actualData:{default:[]},roseType:{type:String,default:""}},data:function(){return{chart:null,total_chartData:0,total_actualData:0}},watch:{chartData:{deep:!0,handler:function(t){this.initChart()}}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(o["b"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{changeSell:function(t){var e=0;return t.forEach((function(t,a){e+=parseInt(t.value)})),e},initChart:function(){this.chart=s.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:[{trigger:"item",formatter:"{b} : {c} ({d}%)"}],legend:this.legendData,calculable:!0,title:[{text:"金额比例",subtext:"总计 ".concat(this.changeSell(this.chartData)," (元)"),left:"20%",textAlign:"center"},{text:"数量比例",subtext:"总计 ".concat(this.changeSell(this.actualData)," (个)"),right:"39%",textAlign:"center"}],series:[{type:"pie",radius:[0,"50%"],center:["20%","45%"],emphasis:{label:{show:!0}},data:this.chartData},{type:"pie",radius:[0,"50%"],center:["55%","45%"],data:this.actualData}]})}}},c=l,d=a("2877"),h=Object(d["a"])(c,i,r,!1,null,null,null);e["a"]=h.exports}}]);