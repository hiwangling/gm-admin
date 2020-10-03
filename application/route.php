<?php
use think\Route;
Route::post('api/:version/upload/upload', 'api/:version.Upload/upload');
Route::post('wx/:version/upload/upload', 'wx/:version.Upload/upload');
Route::post('api/:version/token/app', 'api/:version.Token/getAppToken');
Route::get('api/:version/manager/info', 'api/:version.Manager/managerInfo');
//员工管理
Route::get('api/:version/manager/list', 'api/:version.Manager/ManagerList');
Route::post('api/:version/manager/add', 'api/:version.Manager/ManagerAdd');
Route::post('api/:version/manager/edit', 'api/:version.Manager/ManagerEdit');
Route::post('api/:version/manager/edit_pwd', 'api/:version.Manager/editPwd');
Route::post('api/:version/manager/del', 'api/:version.Manager/managerDel');
Route::post('api/:version/manager/resetpass', 'api/:version.Manager/resetpass');

//权限管理
Route::post('api/:version/auth_rule/list', 'api/:version.AuthRule/authRuleList');
Route::post('api/:version/auth_rule/add', 'api/:version.AuthRule/authRuleAdd');
Route::post('api/:version/auth_rule/edit', 'api/:version.AuthRule/authRuleEdit');
//部门管理
Route::post('api/:version/dept/list', 'api/:version.Dept/DeptList');
Route::post('api/:version/dept/add', 'api/:version.Dept/DeptAdd');
Route::get('api/:version/dept/del', 'api/:version.Dept/DeptDel');
Route::post('api/:version/dept/edit', 'api/:version.Dept/DeptEdit');
Route::post('api/:version/dept/all_name', 'api/:version.Dept/DeptAllName');
//权限列表
Route::get('api/:version/auth_rule/all','api/:version.AuthRule/authRuleAll');
//角色管理
Route::post('api/:version/branch/list', 'api/:version.Branch/branchList');
Route::post('api/:version/branch/add', 'api/:version.Branch/branchAdd');
Route::post('api/:version/branch/edit', 'api/:version.Branch/branchEdit');
Route::post('api/:version/branch/all_name', 'api/:version.Branch/branchAllName');
Route::get('api/:version/branch/del', 'api/:version.Branch/branchDel');

//配置管理
Route::post('api/:version/config/list', 'api/:version.Config/configList');
Route::post('api/:version/config/add', 'api/:version.Config/configAdd');
Route::post('api/:version/config/edit', 'api/:version.Config/configEdit');
Route::get('api/:version/config/del', 'api/:version.Config/configDel');
Route::get('api/:version/config/common', 'api/:version.Config/getConfigCommonData');

//部门授权
Route::post('api/:version/branch/auth', 'api/:version.Branch/branchAuth');

//墓位类型
Route::get('api/:version/cemetery_type/list','api/:version.CemeteryType/cemeteryTypeList');
Route::post('api/:version/cemetery_type/add','api/:version.CemeteryType/cemeteryTypeAdd');
Route::post('api/:version/cemetery_type/edit','api/:version.CemeteryType/cemeteryTypeEdit');
Route::get('api/:version/cemetery_type/del','api/:version.CemeteryType/cemeteryTypeDel');

//墓位样式
Route::get('api/:version/cemetery_style/all','api/:version.CemeteryStyle/getCemeteryStyles');
Route::get('api/:version/cemetery_style/list','api/:version.CemeteryStyle/cemeteryStyleList');
Route::post('api/:version/cemetery_style/add','api/:version.CemeteryStyle/cemeteryStyleAdd');
Route::post('api/:version/cemetery_style/edit','api/:version.CemeteryStyle/cemeteryStyleEdit');
Route::get('api/:version/cemetery_style/del','api/:version.CemeteryStyle/cemeteryStyleDel');

//墓园
Route::get('api/:version/cemetery_classify/g_list','api/:version.CemeteryClassify/cemeteryGardenList');
Route::post('api/:version/cemetery_classify/g_add','api/:version.CemeteryClassify/cemeteryGardenAdd');
Route::post('api/:version/cemetery_classify/g_edit','api/:version.CemeteryClassify/cemeteryGardenEdit');
Route::get('api/:version/cemetery_classify/g_del','api/:version.CemeteryClassify/cemeteryGardenDel');


//墓区
Route::get('api/:version/cemetery_classify/a_list','api/:version.CemeteryClassify/cemeteryAreaList');
Route::post('api/:version/cemetery_classify/a_add','api/:version.CemeteryClassify/cemeteryAreaAdd');
Route::post('api/:version/cemetery_classify/a_edit','api/:version.CemeteryClassify/cemeteryAreaEdit');
Route::get('api/:version/cemetery_classify/a_del','api/:version.CemeteryClassify/cemeteryAreaDel');

Route::get('api/:version/cemetery_classify/get_gardens','api/:version.CemeteryClassify/getCemeteryGardens');
Route::get('api/:version/cemetery_classify/get_areas','api/:version.CemeteryClassify/getCemeteryAreas');
Route::get('api/:version/cemetery_classify/classifyList','api/:version.CemeteryClassify/cemeteryClassifyList');

//墓位
Route::get('api/:version/cemetery/list','api/:version.Cemetery/cemeteryList');
Route::get('api/:version/cemetery/tralist','api/:version.Cemetery/cemeteryTraList');
Route::post('api/:version/cemetery/add','api/:version.Cemetery/cemeteryAdd');
Route::post('api/:version/cemetery/edit','api/:version.Cemetery/cemeteryEdit');
Route::get('api/:version/cemetery/del','api/:version.Cemetery/cemeteryDel');
Route::get('api/:version/cemetery/update_cemetery_usestatus','api/:version.Cemetery/updateCemeteryUsestatus');
Route::post('api/:version/cemetery/tablet','api/:version.Cemetery/cemeteryTablet');
Route::get('api/:version/cemetery/getTablet','api/:version.Cemetery/getCemeteryTablet');
Route::get('api/:version/cemetery/record','api/:version.Cemetery/cemeteryRecord');


//服务信息
Route::get('api/:version/service_info/list','api/:version.ServiceInfo/serviceInfoList');
Route::post('api/:version/service_info/add','api/:version.ServiceInfo/serviceInfoAdd');
Route::post('api/:version/service_info/edit','api/:version.ServiceInfo/serviceInfoEdit');
Route::get('api/:version/service_info/del','api/:version.ServiceInfo/serviceInfoDel');
Route::get('api/:version/service_info/getInfo','api/:version.ServiceInfo/getServiceInfo');

//点灯计划信息
Route::get('api/:version/lampplan/list','api/:version.Lampplan/lampplanList');
Route::post('api/:version/lampplan/add','api/:version.Lampplan/lampplanAdd');
Route::post('api/:version/lampplan/edit','api/:version.Lampplan/lampplanEdit');
Route::get('api/:version/lampplan/del','api/:version.Lampplan/lampplanDel');

//大屏陵园风景
Route::get('api/:version/dplyfjtp/list','api/:version.Dplyfjtp/dplyfjtpList');
Route::post('api/:version/dplyfjtp/add','api/:version.Dplyfjtp/dplyfjtpAdd');
Route::post('api/:version/dplyfjtp/edit','api/:version.Dplyfjtp/dplyfjtpEdit');
Route::get('api/:version/dplyfjtp/del','api/:version.Dplyfjtp/dplyfjtpDel');

//手机版图片管理
Route::post('api/:version/onlineImages/list','api/:version.OnlineImages/imagesList');
Route::post('api/:version/onlineImages/add','api/:version.OnlineImages/imagesAdd');
Route::post('api/:version/onlineImages/edit','api/:version.OnlineImages/imagesEdit');
Route::get('api/:version/onlineImages/del','api/:version.OnlineImages/imagesDel');

//手机版服务管理
Route::post('api/:version/onlineServices/list','api/:version.OnlineServices/servicesList');
Route::post('api/:version/onlineServices/add','api/:version.OnlineServices/servicesAdd');
Route::post('api/:version/onlineServices/edit','api/:version.OnlineServices/servicesEdit');
Route::get('api/:version/onlineServices/del','api/:version.OnlineServices/servicesDel');

//手机版服务分类管理
Route::post('api/:version/onlineShoptype/list','api/:version.OnlineShoptype/shoptypeList');
Route::post('api/:version/onlineShoptype/add','api/:version.OnlineShoptype/shoptypeAdd');
Route::post('api/:version/onlineShoptype/edit','api/:version.OnlineShoptype/shoptypeEdit');
Route::get('api/:version/onlineShoptype/del','api/:version.OnlineShoptype/shoptypeDel');


//微信接口
Route::get('wx/:version/onlineImages/list','wx/:version.OnlineImages/imagesList');//图片管理接口
Route::get('wx/:version/onlineServices/list','wx/:version.OnlineServices/servicesList');
Route::get('wx/:version/onlineServices/info','wx/:version.OnlineServices/servicesInfo');
Route::post('wx/:version/onlineServices/listsearch','wx/:version.OnlineServices/servicesListSearch');
Route::get('wx/:version/cemetery/info','wx/:version.Cemetery/cemeteryInfo');//墓穴查询
Route::post('wx/:version/onlineBindcemetery/add','wx/:version.OnlineBindcemetery/bindcemeteryAdd');//墓穴绑定
Route::get('wx/:version/onlineBindcemetery/list','wx/:version.OnlineBindcemetery/bindcemeteryList');//绑定墓穴列表
Route::get('wx/:version/onlineBindcemetery/info','wx/:version.OnlineBindcemetery/bindcemeteryInfo');//绑定墓穴详情
Route::post('wx/:version/onlineBindcemetery/editstate','wx/:version.OnlineBindcemetery/bindcemeteryEditState');//设置默认墓穴
Route::get('wx/:version/onlineBindcemetery/del','wx/:version.OnlineBindcemetery/bindcemeteryDel');//绑定墓穴删除
//手机版订单添加
Route::post('wx/:version/onlineOrder/add','wx/:version.OnlineOrder/orderAdd');
Route::post('wx/:version/wxjspay/orderpay','wx/:version.Wxjspay/orderPay');//微信jsapi支付
Route::post('wx/:version/wxjspay/notify','wx/:version.Wxjspay/notify');//微信jsapi回调
Route::get('wx/:version/onlineOrder/list','wx/:version.OnlineOrder/orderList');//微信订单列表
Route::get('wx/:version/onlineOrder/info','wx/:version.OnlineOrder/orderInfo');//微信订单详情
Route::post('wx/:version/onlineMember/edit','wx/:version.OnlineMember/memberEdit');//微信修改用户信息

//后台
Route::get('api/:version/onlineOrder/list','api/:version.OnlineOrder/orderList');//微信订单列表
Route::get('api/:version/onlineOrder/info','api/:version.OnlineOrder/orderInfo');//微信订单详情
Route::post('api/:version/onlineOrder/state','api/:version.OnlineOrder/orderState');//微信订单详情
Route::get('api/:version/onlineFeedback/info','api/:version.OnlineFeedback/feedbackInfo');//微信订单反馈详情
Route::post('api/:version/onlineFeedback/edit','api/:version.OnlineFeedback/feedbackEdit');//微信订单反馈添加
Route::get('wx/:version/onlineFeedback/info','wx/:version.OnlineFeedback/feedbackInfo');//微信订单反馈详情

//纪念馆微信接口
Route::get('wx/:version/onlineDeploy/list','wx/:version.OnlineDeploy/deployList');//纪念馆配置列表
Route::get('wx/:version/onlineDeploy/typelist','wx/:version.OnlineDeploy/deployTypeList');//纪念馆配置分类列表
Route::post('wx/:version/onlineMemorial/add','wx/:version.OnlineMemorial/memorialAdd');//纪念馆添加
Route::post('wx/:version/onlineMemorial/redact','wx/:version.OnlineMemorial/memorialRedact');//纪念馆修改
Route::get('wx/:version/onlineMemorial/del','wx/:version.onlineMemorial/memorialDel');//纪念馆配置列表
Route::post('wx/:version/onlineLeaveword/add','wx/:version.OnlineLeaveword/leavewordAdd');//留言添加
Route::get('wx/:version/onlineLeaveword/list','wx/:version.OnlineLeaveword/leavewordlist');//留言列表
Route::get('wx/:version/onlineLeaveword/del','wx/:version.OnlineLeaveword/leavewordDel');//留言列表
Route::get('wx/:version/onlineMemorial/list','wx/:version.OnlineMemorial/memorialList');//纪念馆列表
Route::get('wx/:version/onlineMemorial/info','wx/:version.OnlineMemorial/memorialInfo');//纪念馆详情
Route::get('wx/:version/onlineMemorial/mylist','wx/:version.OnlineMemorial/memorialMyList');//我的纪念馆列表
Route::post('wx/:version/onlineMemorial/collect','wx/:version.OnlineMemorial/memorialCollect');//纪念馆收藏
Route::get('wx/:version/onlineMemorial/pelieve','wx/:version.OnlineMemorial/memorialPelieve');//纪念馆解除收藏

//微信内部绑定
Route::post('wx/:version/bindingUser/bindUser','wx/:version.BindingUser/bindUser');//内部员工绑定
Route::get('wx/:version/bindingUser/setRoleUser','wx/:version.BindingUser/setRoleUser');//内部员工解绑

//套餐管理
Route::get('api/:version/combo/list','api/:version.Combo/comboList');
Route::post('api/:version/combo/add','api/:version.Combo/comboAdd');
Route::post('api/:version/combo/edit','api/:version.Combo/comboEdit');
Route::get('api/:version/combo/del','api/:version.Combo/comboDel');
Route::get('api/:version/combo/servicesinfo','api/:version.Combo/comboServiceInfo');

//获取所有服务信息
Route::get('api/:version/service_info/get_services_all','api/:version.ServiceInfo/getServicesAll');
//获取套餐下服务信息
Route::get('api/:version/service_info/get_comboservices_all','api/:version.ServiceInfo/getComboServicesAll');

//获取销售状态的总数量
Route::get('api/:version/cemetery/tong_ji_xiao_by_qu','api/:version.Cemetery/tongJiXiaoByQu');

//联系人管理
Route::get('api/:version/linkman/list','api/:version.Linkman/linkmanList');
Route::post('api/:version/linkman/add','api/:version.Linkman/linkmanAdd');
Route::post('api/:version/linkman/edit','api/:version.Linkman/linkmanEdit');
Route::get('api/:version/linkman/del','api/:version.Linkman/linkmanDel');

//逝者信息管理
Route::get('api/:version/bury/list','api/:version.Bury/buryList');
Route::post('api/:version/bury/add','api/:version.Bury/buryAdd');
Route::post('api/:version/bury/edit','api/:version.Bury/buryEdit');
Route::post('api/:version/bury/del','api/:version.Bury/buryDel');
Route::post('api/:version/bury/an_zhang','api/:version.Bury/anZhang');
Route::post('api/:version/bury/an_zhangtz','api/:version.Bury/anZhangtz');
//进入首页自动排查修改当前园区中所有安葬信息的安葬状态
Route::get('api/:version/bury/update_bury_status', 'api/:version.Bury/updateBurystatus');

//订单状态
//Route::get('api/:version/order/get_order_status','api/:version.Order/getOrderStatus');

//根据cid获取墓穴详细信息
Route::get('api/:version/cemetery/get_cemetery_Info','api/:version.Cemetery/getCemeteryInfo');

//预定
Route::get('api/:version/reserve/list','api/:version.Order/reserveList');
Route::get('api/:version/reserve/all_list','api/:version.Order/reserveList');
//Route::post('api/:version/reserve/add','api/:version.Reserve/reserveAdd');
//Route::post('api/:version/reserve/edit','api/:version.Reserve/reserveEdit');
Route::get('api/:version/reserve/del','api/:version.Order/orderDel');
//预定信息自动清理
//Route::get('api/:version/reserve/update_reserve_state', 'api/:version.Reserve/updateReserveState');
//订单退款
Route::post('api/:version/order/refund','api/:version.Order/orderRefund');
//购墓
Route::post('api/:version/order/dispose','api/:version.Order/orderDispose');
Route::post('api/:version/order/buy_cemetery','api/:version.Order/buyCemetery');
Route::post('api/:version/order/buy_cemetery_edit','api/:version.Order/orderEdit');
Route::get('api/:version/order/buy_cemetery_del','api/:version.Order/orderDel');
Route::post('api/:version/order/pay','api/:version.Order/cemeteryPay');
Route::post('api/:version/order/orderPay','api/:version.Order/orderPay');
Route::get('api/:version/order/get_buy_cemetery','api/:version.Order/getBuyCemetery');

// 获取所有服务和套餐服务
Route::get('api/:version/service_info/get_comboservices_list','api/:version.Service_info/getComboServicesList');

//查询单条墓穴信息
//Route::get('api/:version/cemetery/get_cemetery_info_one','api/:version.Cemetery/getCemeteryInfoOne');

//购买服务列表
Route::get('api/:version/order/get_services_order_list','api/:version.Order/getServicesOrderList');
//购买服务
Route::post('api/:version/order/buy_services','api/:version.Order/buyServices');
//编辑服务
Route::post('api/:version/order/buy_services_edit','api/:version.Order/buyServicesEdit');

//服务结算
Route::post('api/:version/order/buy_services_pay','api/:version.Order/buyServicesPay');
//获取服务订单服务列表
Route::get('api/:version/order/buy_services_order_info','api/:version.Order/getServicesOrderInfo');
//获取所有服务和套餐服务
//Route::get('api/:version/order/get_comboservicesList_gx','api/:version.order/getComboServicesListGx');

//微信
Route::get('wx/:version/accesstoken/baseauth','wx/:version.Accesstoken/baseAuth');
Route::get('wx/:version/accesstoken/unsetCache','wx/:version.Accesstoken/unsetCache');
Route::post('api/:version/order/ceshi','api/:version.order/ceshi');
//换墓
Route::post('api/:version/order/change_cemetery','api/:version.order/changeCemetery');
//退墓
Route::post('api/:version/order/move_cemetery','api/:version.Order/moveCemetery');
//迁出
Route::post('api/:version/order/move_cemetery_qian','api/:version.Order/moveCemeteryQian');

//迁出操作撤销恢复
Route::get('api/:version/order/move_cemetery_qian_revoke','api/:version.Order/moveCemeteryQianRevoke');
//撤销退墓操作
Route::get('api/:version/order/move_cemetery_revoke','api/:version.Order/moveCemeteryRevoke');

//换墓，退迁的历史记录
Route::post('api/:version/historyinfo/get_historyinfo','api/:version.HistoryInfo/getHistoryInfoByCid');
Route::post('api/:version/historyinfo/historyInfoadd','api/:version.HistoryInfo/historyInfoAdd');
Route::get('api/:version/historyinfo/get_historylist','api/:version.HistoryInfo/getHistoryList');
Route::get('api/:version/historyinfo/get_historyList_bymove','api/:version.HistoryInfo/getHistoryListByMove');

Route::get('api/:version/order/emigrationList','api/:version.order/emigrationList');

//获取迁出信息下的所有图片资料
Route::get('api/:version/images/get_images_byzid','api/:version.Images/getImagesByzid');

Route::get('api/:version/images/list','api/:version.Images/getImagesList');
Route::get('api/:version/images/del','api/:version.Images/imagesDel');
Route::post('api/:version/images/dispose','api/:version.Images/imagesDispose');

//编辑迁出信息下的图片
Route::post('api/:version/images/update_images','api/:version.Images/updateImages');

//全部墓位对应的服务
Route::get('api/:version/servicebill/service_infos_by_cemetery','api/:version.Servicebill/serviceInfosByCemetery');
//每个墓位的服务工单列表
Route::get('api/:version/servicebill/get_service_bill_by_cid','api/:version.Servicebill/getServicebillByCid');

//部门下的人员对应全部墓位的待办服务
Route::get('api/:version/servicebill/service_infos_by_cemetery_dept','api/:version.Servicebill/serviceInfosByCemeteryDept');

//所有待处理的任务统计
Route::get('api/:version/servicebill/get_service_dai_count','api/:version.Servicebill/getServiceDaiChuliCount');

//执行服务
Route::post('api/:version/servicebill/execute','api/:version.Servicebill/ServicebillExecute');
Route::get('api/:version/servicebill/get_one','api/:version.Servicebill/getServicebillOne');

//寄存阁管理
Route::get('api/:version/locker/list','api/:version.Locker/lockerList');
Route::post('api/:version/locker/add','api/:version.Locker/lockerAdd');
Route::get('api/:version/locker/del','api/:version.Locker/lockerDel');
Route::post('api/:version/locker/edit','api/:version.Locker/lockerEdit');


//寄存
Route::get('api/:version/save/list','api/:version.Save/saveList');
Route::post('api/:version/save/add','api/:version.Save/saveAdd');
Route::post('api/:version/save/edit','api/:version.Save/saveEdit');
Route::get('api/:version/save/del','api/:version.Save/saveDel');
Route::get('api/:version/save/info','api/:version.Save/saveInfo');
Route::post('api/:version/save/out','api/:version.Save/saveOut');
Route::post('api/:version/save/renewAdd','api/:version.Save/renewAdd');
Route::get('api/:version/save/renewList','api/:version.Save/renewList');

//修缮列表
//修缮统计
Route::get('api/:version/repair/repair_order_list', 'api/:version.Repair/repairOrderList');
//修缮的提交
Route::post('api/:version/repair/repair_add', 'api/:version.Repair/repairAdd');
//修缮的修改
Route::post('api/:version/repair/repair_edit', 'api/:version.Repair/repairEdit');
//修缮的查询根据CID查询
Route::get('api/:version/repair/get_repair_info_by_cid', 'api/:version.Repair/getRepairInfoByCid');
//修缮的查询根据ID查询
Route::get('api/:version/repair/get_repair_info_by_id', 'api/:version.Repair/getRepairInfoById');
//修缮删除
Route::get('api/:version/repair/repair_del', 'api/:version.Repair/repairDel');
//修缮的修改上传修缮后的照片
Route::post('api/:version/repair/repair_edit_after', 'api/:version.Repair/repairEditAfter');

//修缮图片的删出
Route::get('api/:version/repair/repair_del_pic', 'api/:version.Repair/repairDelPic');
//第二次编辑修缮图片
Route::post('api/:version/repair/repair_edit_pic', 'api/:version.Repair/repairEditPic');

//工程
//工程统计
Route::get('api/:version/engineering/engineering_order_list', 'api/:version.Engineering/engineeringOrderList');
//工程的添加
Route::post('api/:version/engineering/engineering_add', 'api/:version.Engineering/engineeringAdd');
//工程的修改
Route::post('api/:version/engineering/engineering_edit', 'api/:version.Engineering/engineeringEdit');
//根据ID获取工程详细信息
Route::get('api/:version/engineering/get_engineering_info_by_id', 'api/:version.Engineering/getEngineeringInfoById');
//工程的图片删除
Route::get('api/:version/engineering/engineering_del_pic', 'api/:version.Engineering/engineeringDelPic');
//工程删除
Route::post('api/:version/engineering/engineering_del', 'api/:version.Engineering/engineeringDel');

//点灯服务
Route::get('api/:version/service_info/lightup_info_list','api/:version.ServiceInfo/lightupInfoList');
Route::post('api/:version/service_info/lightup_info_edit','api/:version.ServiceInfo/lightupInfoEdit');

//新增点灯
Route::post('api/:version/order/lightup_add','api/:version.Order/lightupAdd');
Route::get('api/:version/order/lightup_list_byid','api/:version.Order/lightupListByID');
Route::get('api/:version/order/get_buy_lightup','api/:version.Order/getBuyLightup');
Route::post('api/:version/order/lightup_pay','api/:version.Order/lightupPay');
Route::post('api/:version/order/lightup_edit','api/:version.Order/lightupEdit');
Route::post('api/:version/order/lightup_isvoice','api/:version.Order/lightupIsvoice');

//大屏展示信息
Route::get('dp/:version/index/getWeather','dp/:version.Index/getWeather_Ajax');
Route::get('dp/:version/index/a_list','dp/:version.Index/cemeteryAreaList');
Route::get('dp/:version/index/list','dp/:version.Index/cemeteryList');
Route::get('dp/:version/index/lyfj','dp/:version.Index/Lyfj');
Route::get('dp/:version/index/mxzs','dp/:version.Index/Mxzs');
Route::get('dp/:version/index/info','dp/:version.Index/Info');
Route::get('dp/:version/index/searchcemeterybyname','dp/:version.Index/searchCemeteryByName');
Route::get('dp/:version/index/tong_ji_xiao_by_qu','dp/:version.Index/tongJiXiaoByQu');


//打印服务
Route::get('api/:version/order/dy_services_byfw', 'api/:version.Order/dyServicesByfw');
Route::get('api/:version/order/dy_services_bylb', 'api/:version.Order/dyServicesBylb');

//打印墓穴信息
Route::get('api/:version/cemetery/cemetery_print','api/:version.Cemetery/cemeteryPrint');

//公墓证套打所需的墓穴信息以及持证人墓主信息查询
Route::get('api/:version/cemetery/cemeterybury_print','api/:version.Cemetery/cemeteryburyPrint');

//公墓预约接口微信端
Route::get('wx/:version/OnlineAppointment/timeList','wx/:version.OnlineAppointment/appointmenttimeList');
Route::post('wx/:version/OnlineAppointment/add','wx/:version.OnlineAppointment/appointmentAdd');
Route::get('wx/:version/OnlineAppointment/info','wx/:version.OnlineAppointment/appointmentInfo');
Route::get('wx/:version/OnlineAppointment/list','wx/:version.OnlineAppointment/appointmentList');
Route::get('wx/:version/OnlineAppointment/del','wx/:version.OnlineAppointment/appointmentDel');


Route::get('api/:version/OnlineAppointment/timeList','api/:version.OnlineAppointment/appointmenttimeList');
Route::get('api/:version/OnlineAppointment/info','api/:version.OnlineAppointment/appointmentInfo');
Route::get('api/:version/OnlineAppointment/list','api/:version.OnlineAppointment/appointmentList');
Route::get('api/:version/OnlineAppointment/del','api/:version.OnlineAppointment/appointmentDel');
//短信验证
Route::get('wx/:version/share/send', 'wx/:version.Share/securityCode');
Route::post('wx/:version/share/verify', 'wx/:version.OnlineMember/memberVerify');

//统计分析

Route::post('api/:version/stat/quit', 'api/:version.Stat/quitOrder');
Route::post('api/:version/stat/trade', 'api/:version.Stat/tradeOrder');
Route::get('api/:version/stat/years', 'api/:version.Stat/getYears');
Route::get('api/:version/stat/monthCartogram', 'api/:version.Stat/quitOrderMonthCartogram');
Route::get('api/:version/stat/classifyCartogram', 'api/:version.Stat/quitOrderClassifyCartogram');
Route::get('api/:version/stat/buyYears', 'api/:version.Stat/buyOrderYears');
Route::get('api/:version/stat/buyMonth', 'api/:version.Stat/buyOrderMonth');
Route::get('api/:version/stat/buyMonthList', 'api/:version.Stat/buyOrderMonthList');
Route::get('api/:version/stat/buyClassify', 'api/:version.Stat/buyOrderClassify');
Route::get('api/:version/stat/buyPrice', 'api/:version.Stat/buyOrderPrice');
Route::post('api/:version/stat/detailStat', 'api/:version.Stat/OrderDetailStat');
Route::get('api/:version/stat/buryList', 'api/:version.Stat/buryStatList');
Route::get('api/:version/stat/buryMonth', 'api/:version.Stat/buryMonthStat');
Route::get('api/:version/stat/buryType', 'api/:version.Stat/buryTypeStat');
Route::get('api/:version/stat/buyDays', 'api/:version.Stat/orderDateStat');
Route::get('api/:version/stat/orderListPage', 'api/:version.Stat/orderListPage');

Route::get('api/:version/stat/todayOrder', 'api/:version.Stat/orderTodayStat');

//墓位微信端
Route::get('wx/:version/cemetery/list','wx/:version.Cemetery/cemeteryList');
Route::get('wx/:version/cemetery/tralist','wx/:version.Cemetery/cemeteryTraList');
Route::get('wx/:version/cemetery_classify/classifyList','wx/:version.CemeteryClassify/cemeteryClassifyList');
Route::get('wx/:version/cemetery/tong_ji_xiao_by_qu','wx/:version.Cemetery/tongJiXiaoByQu');

Route::post('wx/:version/order/dispose','wx/:version.Order/orderDispose');
Route::post('wx/:version/order/buy_cemetery_edit','wx/:version.Order/orderEdit');
Route::get('wx/:version/reserve/del','wx/:version.Order/orderDel');
Route::post('wx/:version/order/refund','wx/:version.Order/orderRefund');
Route::get('wx/:version/reserve/list','wx/:version.Order/reserveList');
Route::get('wx/:version/reserve/all_list','wx/:version.Order/reserveList');

Route::get('api/:version/onlineMember/list','api/:version.onlineMember/memberList');
Route::get('api/:version/onlineMember/del','api/:version.onlineMember/memberDel');

Route::get('api/:version/onlineMemorial/list','api/:version.OnlineMemorial/memorialList');//纪念馆列表
Route::get('api/:version/onlineMemorial/info','api/:version.OnlineMemorial/memorialInfo');//纪念馆详情
Route::post('api/:version/onlineMemorial/state','api/:version.OnlineMemorial/memorialState');//纪念馆详情
Route::get('api/:version/onlineMemorial/memorial_del','api/:version.onlineMemorial/memorialDel');//纪念馆删除
Route::get('api/:version/onlineLeaveword/leaveword_list','api/:version.OnlineLeaveword/leavewordlist');//留言列表
Route::get('api/:version/onlineLeaveword/del','api/:version.OnlineLeaveword/leavewordDel');//留言删除
