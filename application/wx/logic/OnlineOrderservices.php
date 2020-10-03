<?php
// +---------------------------------------------------------------------+
// | OneBase    | [ WE CAN DO IT JUST THINK ]                            |
// +---------------------------------------------------------------------+
// | Licensed   | http://www.apache.org/licenses/LICENSE-2.0 )           |
// +---------------------------------------------------------------------+
// | Author     | Bigotry <3162875@qq.com>                               |
// +---------------------------------------------------------------------+
// | Repository | https://gitee.com/Bigotry/OneBase                      |
// +---------------------------------------------------------------------+

namespace app\wx\logic;

class OnlineOrderservices extends BaseLogic
{
    
    /*
  *订单详情表添加
  * data 提交数组
  */
	public function onlineOrderservicesAdd($data=[],$rid=0){
		
		if(!empty($data['services'])){
			foreach($data['services'] as $k=>$v){
				
				$services_data = array(
					'rid'=>$rid,
					'sid'=>$v['sid'],
					'title'=>$v['name'],
					'type'=>2,
					'category'=>$v['category'],
					'price'=>$v['price'],
					'number'=>$v['num'],
					'totalprice'=>$v['totalprice'],
					'begindate'=>!empty($v['begindate'])?$v['begindate']:'',
					'enddate'=>!empty($v['enddate'])?$v['enddate']:'',
					'state'=>1,
					'vcnote'=>$v['vcnote']
				);
				
				$this->modelOnlineOrderservices->addInfo($services_data);
			}
		}
	}
	/*
     *订单服务列表
     * 
     */
	public function getOrderservicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineOrderservices->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'online_services b', 'a.sid = b.id', 'left'],

        ];
		
		return $this->modelOnlineOrderservices->getList($where, $field , $order, $paginate, $join);
	}
    
}
