(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59de4c48"],{"09f4":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,i,a){return t/=a/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,i){var o=r(),s=t-o,l=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=l;var r=Math.easeInOutQuad(c,o,s,e);n(r),c<e?a(t):i&&"function"===typeof i&&i()};u()}},"12f9":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"dialog",attrs:{"close-on-click-modal":!1,width:"500px",title:"扫描存档",visible:t.dialogFormVisible,top:"5vh","append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("div",{attrs:{id:"noniediv"}},[i("p",{staticClass:"xform-p"}),t._v(" "),i("p",{staticClass:"xform-p",attrs:{id:"streamwrap"}},[i("img",{staticClass:"xform",attrs:{id:"streamimage",src:"http://127.0.0.1:38088/video=stream&camidx=0",onerror:"onerror=null;src='http://kykjgm.lxygm.com/app_stop.jpg'"}})])]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.getimg}},[t._v("保存")])],1)])},n=[],r=(i("6b54"),i("bc3a")),o=i.n(r),s={data:function(){return{dialogFormVisible:!1}},methods:{getimg:function(){var t=this,e=0,i=0,a='{"filepath":"base64","rotate":"'+e.toString()+'","camidx":"'+i.toString()+'","cutpage":"1"}',n="http://127.0.0.1:38088/video=grabimage";o.a.post(n,a).then((function(e){0==e.data.code&&(t.$emit("setImg","data:image/jpg;base64,"+e.data.photoBase64),t.$notify.success({title:"成功",message:"照片保存成功"}),t.dialogFormVisible=!1)}))},show:function(t){this.dialogFormVisible=!0}}},l=s,c=(i("83fb"),i("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null);e["a"]=u.exports},"1efe":function(t,e,i){},2148:function(t,e,i){},"43d0":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"b",(function(){return s})),i.d(e,"e",(function(){return l}));var a=i("b775");function n(t){return Object(a["a"])({url:"/cemetery/list",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/cemetery/add",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/cemetery/edit",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/cemetery/del",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/cemetery/update_cemetery_usestatus_qian",method:"get",params:t})}},"47c5":function(t,e,i){"use strict";i.d(e,"h",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"j",(function(){return o})),i.d(e,"e",(function(){return s})),i.d(e,"b",(function(){return l})),i.d(e,"i",(function(){return c})),i.d(e,"f",(function(){return u})),i.d(e,"g",(function(){return d})),i.d(e,"d",(function(){return m})),i.d(e,"c",(function(){return p}));var a=i("b775");function n(t){return Object(a["a"])({url:"/order/buy_services_list",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/order/buy_services_add",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/order/upload_tablet_photo",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/order/buy_services_edit",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/order/buy_services_del",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/order/buy_services_pay",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/order/buy_services_one_list",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/service_info/get_serviceinfo_all",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/order/dy_services_bylb",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/order/dy_services_byfw",method:"get",params:t})}},"83fb":function(t,e,i){"use strict";var a=i("1efe"),n=i.n(a);n.a},"88f6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入墓位名称"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /api/v1/cemetery_classify/g_list"],expression:"['GET /api/v1/cemetery_classify/g_list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"原墓位",prop:"old_name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"联系人",prop:"linkname"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"linkphone"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"逝者姓名",prop:"buryname"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"迁出时间",prop:"create_time"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作人",prop:"operate_name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"create_time"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /api/v1/cemetery/del"],expression:"['GET /api/v1/cemetery/del']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handlereturn(e.row)}}},[t._v("撤销")]),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /api/v1/cemetery_classify/g_edit"],expression:"['POST /api/v1/cemetery_classify/g_edit']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /api/v1/cemetery_classify/g_edit"],expression:"['POST /api/v1/cemetery_classify/g_edit']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handlePrint(e.row)}}},[t._v("打印")])]}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[t.dataForm.photo.length>0?i("el-form-item",{attrs:{label:"照片",prop:"photo"}},t._l(t.dataForm.photo,(function(t,e){return i("img",{key:e,staticStyle:{"margin-left":"10px"},attrs:{preview:"1",src:t,alt:"",width:"80",height:"50"}})})),0):t._e()],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataForm.photo=[]}}},[t._v("清空照片")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.createmove}},[t._v("上传照片")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1),t._v(" "),i("card",{ref:"cardImg",on:{setImg:t.setImg}}),t._v(" "),i("build",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"build_"})],1)},n=[],r=(i("ac6a"),i("28a5"),i("ef42")),o=i("43d0"),s=i("333d"),l=i("ac0d"),c=i("12f9"),u=i("b808"),d={name:"VueGarden",components:{Pagination:s["a"],card:c["a"],build:u["a"]},mixins:[l["a"],l["b"]],data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,keyword:"",sort:"add_time",order:"desc"},dataForm:{id:"",fjids:[],photo:[]},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{type_name:[{required:!0,message:"墓园名称不能为空",trigger:"blur"}]}}},computed:{},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r["e"])(this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},createmove:function(){this.$refs.cardImg.show()},setImg:function(t){this.dataForm.photo.push(t)},handleExcep:function(t){var e=this,i={id:t.id,old_cid:t.old_cid};Object(o["e"])(i).then((function(t){console.log(t.data),e.getList(),e.$message({type:"success",message:"操作成功"})})).catch((function(t){e.$message({type:"warning",message:t})}))},handleUpdate:function(t){var e=this;this.dataForm.id=t.id;var i=t.fjids.split(",");this.dataForm.fjids=i;var a={id:t.id,fjids:i};Object(r["f"])(a).then((function(t){var i=[];t.data.forEach((function(t){i.push(t.photo)})),e.dataForm.photo=i})).catch((function(t){e.$message({type:"warning",message:t})})),this.dialogStatus="update",this.dialogFormVisible=!0},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&Object(r["m"])(t.dataForm).then((function(){t.getList(),t.dialogFormVisible=!1,t.$message({type:"success",message:"编辑成功"})})).catch((function(e){t.$message({type:"warning",message:e})}))}))},handlePrint:function(t){var e={type:3,name:t.old_name,operate:t.operate_name,buryname:t.buryname};this.$refs.build_.getlist(e)},handlereturn:function(t){var e=this;this.$confirm("您确认撤销吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var i={id:t.id,cid:t.old_cid};Object(r["k"])(i).then((function(t){e.$message({type:"success",message:"操作成功"}),e.getList()})).catch((function(t){e.$message({type:"warning",message:t})}))})).catch((function(){e.$message({type:"info",message:"已取消"})}))}}},m=d,p=i("2877"),f=Object(p["a"])(m,a,n,!1,null,null,null);e["default"]=f.exports},b808:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"print",staticStyle:{"padding-right":"50px"}},[i("h3",{staticClass:"print_title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.currentdate))]),t._v(" "),i("table",{staticClass:"table_print",attrs:{id:"hall_print"}},[i("tr",[i("td",[t._v("故者")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v("园区")]),t._v(" "),i("td",{attrs:{colspan:"7"}},[t._v(t._s(t.comont))])]),t._v(" "),i("tr",[i("td",[t._v(t._s(t.buryname))]),t._v(" "),i("td",{staticStyle:{width:"50px"},attrs:{colspan:"2"}},[t._v(t._s(t.name))]),t._v(" "),i("td",{attrs:{colspan:"7"}},[i("div",{staticStyle:{height:"130px","text-align":"left","padding-left":"20px"}},[t._v(t._s(t.sell_title))])])]),t._v(" "),3!=t.type?i("tr",[i("td",[t._v("立碑日期")]),t._v(" "),i("td",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{colspan:"9"}},[t._v(t._s(t.service_time))])]):t._e(),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"prinr_foot"},[i("span",[t._v("经办人:"+t._s(t.operate))]),t._v(" "),i("span")])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",[t._v("备注")]),t._v(" "),i("td",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{colspan:"9"}})])}],r=(i("7f7f"),i("ac6a"),i("47c5")),o=i("ac0d"),s={mixins:[o["b"]],data:function(){return{list:{},title:"",comont:"",name:"",type:"",operate:"",sell_title:null,buryname:"",service_time:null,server:null,currentdate:"",totalprice:""}},computed:{},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},solo:function(t){var e=[];return t.forEach((function(t,i){e.push(t.services)})),[].concat.apply([],e)},getlist:function(t){var e=this;if(this.rest(),this.name=t.name,this.type=t.type,this.operate=t.operate,1==t.type){this.title="夷陵区凌霄园公墓服务单",this.comont="服 务 内 容";var i={id:t.id};Object(r["c"])(i).then((function(t){e.$nextTick((function(){e.print()}))}))}else if(2==t.type){this.title="夷陵区凌霄园公墓施工单",this.comont="施 工 内 容";var a={id:t.id};Object(r["d"])(a).then((function(t){e.sell_title=t.data.sell_title,e.buryname=t.data.buryname,e.service_time=t.data.service_time,e.$nextTick((function(){e.print()}))}))}else this.buryname=t.buryname,this.title="夷陵区凌霄园公墓服务单",this.comont="服 务 内 容",this.sell_title="迁出",this.$nextTick((function(){e.print()}))},rest:function(){this.sell_title="",this.buryname="",this.service_time=null},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();i>=1&&i<=9&&(i="0"+i),a>=0&&a<=9&&(a="0"+a),this.currentdate=e+"年"+i+"月"+a+"日"}}},l=s,c=(i("e42d"),i("2877")),u=Object(c["a"])(l,a,n,!1,null,"1c164e60",null);e["a"]=u.exports},e42d:function(t,e,i){"use strict";var a=i("2148"),n=i.n(a);n.a}}]);