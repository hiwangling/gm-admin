(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36a9d962"],{"09f4":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),Math.easeInOutQuad=function(e,t,i,a){return e/=a/2,e<1?i/2*e*e+t:(e--,-i/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,i){var s=r(),o=e-s,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var r=Math.easeInOutQuad(c,s,o,t);n(r),c<t?a(e):i&&"function"===typeof i&&i()};u()}},"2f21":function(e,t,i){"use strict";var a=i("79e5");e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"47c5":function(e,t,i){"use strict";i.d(t,"h",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return s})),i.d(t,"f",(function(){return o})),i.d(t,"c",(function(){return l})),i.d(t,"e",(function(){return c})),i.d(t,"d",(function(){return u})),i.d(t,"g",(function(){return d}));var a=i("b775");function n(e){return Object(a["a"])({url:"/order/get_services_order_list",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/order/buy_services_order_info",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/order/buy_services",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/order/buy_services_edit",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/order/buy_cemetery_del",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/order/dy_services_bylb",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/order/dy_services_byfw",method:"get",params:e})}function d(e){return Object(a["a"])({url:"/service_info/get_services_all",method:"get",params:e})}},"55dd":function(e,t,i){"use strict";var a=i("5ca1"),n=i("d8e8"),r=i("4bf8"),s=i("79e5"),o=[].sort,l=[1,2,3];a(a.P+a.F*(s((function(){l.sort(void 0)}))||!s((function(){l.sort(null)}))||!i("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(r(this)):o.call(r(this),n(e))}})},7514:function(e,t,i){"use strict";var a=i("5ca1"),n=i("0a49")(5),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a(a.P+a.F*s,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(r)},"8b45":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入套餐名称"},model:{value:e.listQuery.type_name,callback:function(t){e.$set(e.listQuery,"type_name",t)},expression:"listQuery.type_name"}}),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /api/v1/combo/list"],expression:"['GET /api/v1/combo/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查找")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /api/v1/combo/add"],expression:"['POST /api/v1/combo/add']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("添加")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"名称",prop:"service_name"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"原始价格",prop:"unit_price"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"实际价格",prop:"sell_price"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /api/v1/combo/edit"],expression:"['POST /api/v1/combo/edit']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /api/v1/combo/del"],expression:"['GET /api/v1/combo/del']"}],attrs:{type:"danger",size:"mini"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),i("el-dialog",{staticClass:"dialog",attrs:{id:"service","close-on-click-modal":!1,title:"创建套餐",visible:e.dialogFormVisible,top:"5vh","append-to-body":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("service",{ref:"server",on:{service_data:e.service_data}}),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),"create"==e.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("确定")]):i("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("确定")])],1)],1)],1)},n=[],r=(i("55dd"),i("96cf"),i("3b8d")),s=i("b775");function o(e){return Object(s["a"])({url:"/combo/list",method:"get",params:e})}function l(e){return Object(s["a"])({url:"/combo/add",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/combo/edit",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/combo/del",method:"get",params:e})}function d(e){return Object(s["a"])({url:"/combo/servicesinfo",method:"get",params:e})}var m=i("47c5"),p=i("333d"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{ref:"dataForm",attrs:{inline:!0,model:e.dataForm,"status-icon":"","label-position":"left","label-width":"80px"}},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"套餐名称",prop:"service_name"}},[i("el-input",{attrs:{size:"mini",placeholder:"请输入名称"},on:{blur:e.changetime},model:{value:e.dataForm.service_name,callback:function(t){e.$set(e.dataForm,"service_name",t)},expression:"dataForm.service_name"}})],1),e._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"套餐价格",prop:"totalprice"}},[i("el-input",{staticStyle:{width:"100px"},attrs:{size:"mini",placeholder:"请输入价格"},on:{blur:e.changetime},model:{value:e.dataForm.totalprice,callback:function(t){e.$set(e.dataForm,"totalprice",t)},expression:"dataForm.totalprice"}})],1),e._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"套餐排序",prop:"sort"}},[i("el-input",{staticStyle:{width:"100px"},attrs:{size:"mini",placeholder:"请输入排序"},model:{value:e.dataForm.sort,callback:function(t){e.$set(e.dataForm,"sort",t)},expression:"dataForm.sort"}})],1)],1),e._v(" "),i("el-tabs",{attrs:{"tab-position":"top"},on:{"tab-click":e.handleClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._l(e.tab,(function(t,a){return i("el-tab-pane",{key:a,attrs:{label:t.label+"("+e.sum_price+"元)",name:t.label}},[i("el-table",{ref:"sellTable",refInFor:!0,staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{border:"","highlight-current-row":"",data:t.list,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),e._v(" "),i("el-table-column",{attrs:{prop:"service_name",align:"center",label:"服务名称",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"chargeunit",align:"center",label:"单位",width:"60"}}),e._v(" "),i("el-table-column",{attrs:{prop:"sell_price",align:"center",label:"服务价格","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[[i("el-input",{staticClass:"edit-input",staticStyle:{width:"80px"},attrs:{size:"mini"},on:{blur:function(t){return e.confirmEdit(a)}},model:{value:a.sell_price,callback:function(t){e.$set(a,"sell_price",t)},expression:"row.sell_price"}}),e._v(" "),i("el-input-number",{attrs:{min:1,max:100,label:"",size:"mini"},on:{change:function(t){return e.handleChange(a)}},model:{value:a.amount,callback:function(t){e.$set(a,"amount",t)},expression:"row.amount"}})]]}}],null,!0)}),e._v(" "),i("el-table-column",{attrs:{prop:"vcnote",align:"center",label:"备注",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("el-input",{staticClass:"edit-input",staticStyle:{width:"130px"},attrs:{size:"mini"},model:{value:a.vcnote,callback:function(t){e.$set(a,"vcnote",t)},expression:"row.vcnote"}})]}}],null,!0)})],1),e._v(" "),i("div",{staticClass:"el-divider el-divider--horizontal"},[i("div",{staticClass:"el-divider__text is-left"},[e._v("已选项目")])])],1)})),e._v(" "),i("el-table",{attrs:{"show-header":!1,"show-summary":"",data:e.sell}},[i("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),i("el-table-column",{attrs:{prop:"service_name",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{prop:"sell_price",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"amount",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"totalprice"}})],1)],2)],1)},v=[],f=(i("7514"),i("ac6a"),i("ac0d")),b={mixins:[f["b"],f["a"]],data:function(){return{dataForm:{service_name:"",totalprice:"",sort:"",id:""},service:[],sell:[],list:null,clear:0,row:null,num:1,tab:[],index:0,sum_price:0,active:""}},watch:{sell:{handler:function(){this.changeSell()},immediate:!0}},created:function(){},methods:{getList:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.init(),this.$nextTick(Object(r["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.tab.length)){e.next=15;break}if(0!=t.clear){e.next=8;break}t.$refs.sellTable[i].clearSelection(),t.rest(),t.init(),e.next=12;break;case 8:return e.next=10,t.edit(i);case 10:return e.next=12,t.edit(0);case 12:i++,e.next=1;break;case 15:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleChange:function(e){e.totalprice=e.amount*e.sell_price,this.changeSell()},handleClick:function(e,t){this.index=e.index},init:function(){var e=this,t=[];this.active=this.list[0].title||"",this.list.map((function(i){i.services.map((function(t){e.$set(t,"amount",1),e.$set(t,"totalprice",t.sell_price)})),t.push({label:i.title,list:i.services,sells:[]})})),this.tab=t},edit:function(e){var t=this;this.index=e,this.$nextTick((function(){t.$refs.sellTable[e].clearSelection(),t.service.forEach((function(i,a){var n=[];n=i.services,n.forEach((function(i){t.$refs.sellTable[e].data.forEach((function(e){for(var t in e)e.id==i.sid&&(e.sell_price=i.sell_price,e.totalprice=i.totalprice,e.amount=i.amount)})),t.$refs.sellTable[e].toggleRowSelection(t.$refs.sellTable[e].data.find((function(e){return e.id===i.sid})),!0)}))}))}))},showService:function(e){this.clear=e.type,this.list=e.server,this.getList()},editService:function(e){this.rest(),this.dataForm={service_name:e.service_name,totalprice:e.sell_price,id:e.id,sort:e.sort},this.service=e.services,this.getList()},rest:function(){this.dataForm={service_name:"",totalprice:"",sort:"",id:""}},confirmEdit:function(e){this.changeSell(),this.handleChange(e),this.$refs.sellTable[this.index].toggleRowSelection(e,!0)},changetime:function(){this.changeSell()},changeSell:function(){var e=0;this.sell&&this.sell.forEach((function(t,i){e+=parseInt(t.totalprice)})),this.sum_price=e;var t={services_totalprice:this.sum_price,totalprice:this.dataForm.totalprice,service_name:this.dataForm.service_name,sort:this.dataForm.sort,id:this.dataForm.id,services:this.sell};this.$emit("service_data",t)},handleSelectionChange:function(e){var t=this;this.tab[this.index].sells=e.filter((function(e){return void 0!=e}));var i=[];this.tab.forEach((function(e,a){i.push(t.tab[a].sells)})),i=[].concat.apply([],i),this.sell=i}}},g=b,_=i("2877"),w=Object(_["a"])(g,h,v,!1,null,null,null),y=w.exports,x={name:"VueCombo",components:{Pagination:p["a"],Service:y},data:function(){return{list:null,total:0,listLoading:!0,getservice:null,listQuery:{page:1,limit:20,keyword:void 0,sort:"add_time",order:"desc"},dataForm:{service_name:"",id:"",sell_price:"",unit_price:"",vcnote:"",server:null,services:[],sort:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{tao_name:[{required:!0,message:"套餐名称不能为空",trigger:"blur"}]}}},computed:{},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,o(this.listQuery).then((function(t){e.list=t.data.data,e.total=t.data.total||0,e.listLoading=!1})).catch((function(){e.list=[],e.total=0,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},getCommon:function(e){var t=this,i={type:1};Object(m["g"])(i).then((function(i){t.server=i.data;var a={type:e,server:t.server};t.$refs.server.showService(a)}))},handleCreate:function(){this.dialogStatus="create",this.getCommon(0),this.dialogFormVisible=!0},createData:function(e){var t=this;return""==this.dataForm.service_name?(this.$message({type:"warning",message:"套餐名称不能为空"}),!1):(console.log(this.dataForm),""==this.dataForm.sell_price?(this.$message({type:"warning",message:"套餐价格不能为空"}),!1):void l(this.dataForm).then((function(e){t.getList(),t.dialogFormVisible=!1,t.$message({type:"success",message:"添加套餐成功"})})).catch((function(e){t.$message({type:"warning",message:e})})))},handleUpdate:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var i,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,e.next=5,this.getCommon(1);case 5:return i={id:t.id},e.next=8,d(i).then((function(e){a.$refs.server.editService(e.data)}));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),updateData:function(){var e=this;return""==this.dataForm.service_name?(this.$message({type:"warning",message:"套餐名称不能为空"}),!1):""==this.dataForm.sell_price?(this.$message({type:"warning",message:"套餐价格不能为空"}),!1):void c(this.dataForm).then((function(){e.getList(),e.dialogFormVisible=!1,e.$message({type:"success",message:"更新套餐成功"})})).catch((function(t){e.$message({type:"warning",message:t})}))},service_data:function(e){this.dataForm={service_name:e.service_name,sell_price:e.totalprice,unit_price:e.services_totalprice,sort:e.sort,id:e.id,services:e.services}},handleDelete:function(e){var t=this;u(e).then((function(i){t.$message({type:"success",message:"删除套餐成功"});var a=t.list.indexOf(e);t.list.splice(a,1)})).catch((function(e){t.$message({type:"warning",message:e})}))}}},F=x,k=(i("d62d"),Object(_["a"])(F,a,n,!1,null,null,null));t["default"]=k.exports},c271:function(e,t,i){},d62d:function(e,t,i){"use strict";var a=i("c271"),n=i.n(a);n.a}}]);