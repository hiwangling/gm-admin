(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa0e7eb8"],{"0115":function(e,t,a){"use strict";var i=a("abe2"),l=a.n(i);l.a},"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var o=n(),r=e-o,s=20,c=0;t="undefined"===typeof t?500:t;var d=function e(){c+=s;var n=Math.easeInOutQuad(c,o,r,t);l(n),c<t?i(e):a&&"function"===typeof a&&a()};d()}},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i="http://kykjgm.lxygm.com/api/v1/upload/upload"},abe2:function(e,t,a){},b2f9:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入墓主或墓号"},model:{value:e.listQuery.keyword,callback:function(t){e.$set(e.listQuery,"keyword",t)},expression:"listQuery.keyword"}}),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /api/v1/service_info/service_infos_by_cemetery"],expression:"['GET /api/v1/service_info/service_infos_by_cemetery']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查找\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"墓名",prop:"cname",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"墓主",prop:"vcname",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.vcname.substring(0,t.row.vcname.length-1))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系人",prop:"buyer_name",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"已完成服务",prop:"finish_num"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.finish_num)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"未完成服务",prop:"to_be_com_num"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"red"}},[e._v(" "+e._s(t.row.to_be_com_num))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"wancheng_status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("or_status")(t.row.wancheng_status)}},[e._v("\n          "+e._s(1==t.row.wancheng_status?"待完成":"已完成")+"\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /api/v1/service_info/get_service_bill_by_cid"],expression:"['GET /api/v1/service_info/get_service_bill_by_cid']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("查看\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{"close-on-click-modal":!1,title:e.dialogStatus,visible:e.dialogFormVisible,top:"5vh"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading_,expression:"listLoading_"}],attrs:{data:e.list_service,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"服务名称",prop:"service_name"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"服务数量",prop:"serviceamount",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"begindate",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"resutlstatus",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("or_status")(t.row.resutlstatus)}},[e._v("\n            "+e._s(1==t.row.resutlstatus?"待完成":"已完成")+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.resutlstatus?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleCat(t.row.id)}}},[e._v("\n            查看\n          ")]):a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /api/v1/servicebill/execute"],expression:"['POST /api/v1/servicebill/execute']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleCreate(t.row.id)}}},[e._v("执行\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{"close-on-click-modal":!1,title:e.textMap[e.dialogStatus2],visible:e.dialogFormVisible_,top:"5vh"},on:{"update:visible":function(t){e.dialogFormVisible_=t}}},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{rules:e.rules,model:e.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"完成时间",prop:"execdate"}},[a("el-date-picker",{attrs:{type:"date",disabled:!!e.flag,"value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.dataForm.execdate,callback:function(t){e.$set(e.dataForm,"execdate",t)},expression:"dataForm.execdate"}})],1),e._v(" "),e.flag?a("el-form-item",{attrs:{label:"执行人员"}},[a("el-input",{attrs:{disabled:!!e.flag},model:{value:e.operater_name,callback:function(t){e.operater_name=t},expression:"operater_name"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"上传图片"}},[e.flag?e._e():a("span",{staticStyle:{color:"red"}},[e._v("只能上传image/jpeg文件，且不超过2M")]),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:e.headers,action:e.uploadPath,disabled:!!e.flag,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.image_url?a("img",{staticClass:"avatar",attrs:{src:e.image_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"服务说明",prop:"execnote"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{disabled:!!e.flag,type:"textarea"},model:{value:e.dataForm.execnote,callback:function(t){e.$set(e.dataForm,"execnote",t)},expression:"dataForm.execnote"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible_=!1}}},[e._v("取消")]),e._v(" "),0==e.flag?a("el-button",{attrs:{type:"primary"},on:{click:e.SendData}},[e._v("确定")]):e._e()],1)],1)],1)},l=[],n=a("2d63"),o=a("b775");function r(e){return Object(o["a"])({url:"/servicebill/service_infos_by_cemetery",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/servicebill/get_service_bill_by_cid",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/servicebill/execute",method:"post",data:e})}function d(e){return Object(o["a"])({url:"/servicebill/get_one",method:"get",params:e})}var u=a("91b6"),m=a("5f87"),p=a("333d"),f={name:"VueSaveList",components:{Pagination:p["a"]},data:function(){return{uploadPath:u["a"],list:null,list_service:null,operater_name:"",total:0,image_url:"",flag:!1,listLoading:!0,listLoading_:!0,dialogStatus:"",dialogStatus2:"",textMap:{update:"查看服务",create:"服务执行"},listQuery:{page:1,limit:20,keyword:void 0,save_status:"",sort:"add_time",order:"desc"},dialogFormVisible:!1,dialogFormVisible_:!1,dataForm:{cid:"",id:"",image_url:"",execdate:"",execnote:""},rules:{execdate:[{required:!0,message:"服务时间不能为空",trigger:"change"}]}}},computed:{headers:function(){return{token:Object(m["a"])()}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,r(this.listQuery).then((function(t){e.list=t.data.data,e.total=t.data.total||0,e.listLoading=!1})).catch((function(){e.list=[],e.total=0,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleUpdate:function(e){var t=this;this.listLoading_=!0,this.dialogStatus=e.cname,this.dialogFormVisible=!0,this.dataForm.cid=e.cid;var a={cid:e.cid};s(a).then((function(e){t.list_service=e.data,t.listLoading_=!1})).catch((function(){t.list_service=[],t.listLoading_=!1}))},handleCat:function(e){var t=this;this.flag=!0,this.dialogStatus2="update";var a={id:e};d(a).then((function(e){t.dialogFormVisible_=!0,t.image_url=""!==e.data.image_url?"http://kykjgm.lxygm.com/"+e.data.image_url:"",t.dataForm.execdate=e.data.execdate,t.operater_name=e.data.operater_name,t.dataForm.execnote=e.data.execnote}))},handleCreate:function(e){var t=this;this.flag=!1,this.dialogStatus2="create",this.image_url="",this.dataForm.execdate="",this.dataForm.execnote="",this.dialogFormVisible_=!0,this.dataForm.id=e,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleAvatarSuccess:function(e,t){this.image_url="http://kykjgm.lxygm.com/"+t.response.data,this.dataForm.image_url=t.response.data},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},SendData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&c(e.dataForm).then((function(t){var a,i=Object(n["a"])(e.list_service);try{for(i.s();!(a=i.n()).done;){var l=a.value;if(l.id===t.data.id){l.resutlstatus=2;break}}}catch(o){i.e(o)}finally{i.f()}e.getList(),e.dialogFormVisible_=!1,e.$message({type:"success",message:"服务执行成功"})})).catch((function(t){e.$message({type:"warning",message:t})}))}))}}},g=f,v=(a("0115"),a("2877")),_=Object(v["a"])(g,i,l,!1,null,null,null);t["default"]=_.exports}}]);