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

class OnlineServices extends BaseLogic
{
    
    /**
     * 获取服务列表列表列表
     */
    public function getServicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME]) ? $where['a.'.DATA_STATUS_NAME] : ['neq', DATA_DELETE];
		
		$this->modelOnlineServices->alias('a');
		
        $join = [
            [SYS_DB_PREFIX . 'online_shoptype o', 'a.shoptype = o.id', 'left'],
        ];

        return $this->modelOnlineServices->getList($where, $field , $order, $paginate,$join);
    }
	
	
	/**
     * 服务分类
     */
	public function servicesAllList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$list = $this->getServicesList($where, $field, $order, $paginate);
		
		$services_category = parse_config_array('online_services_category');
		
		$services = array();
		
		foreach($services_category as $k=>$v){
			
			$services[$k]['title'] = $v;
			
			foreach($list as $a=>$b){
				
				if($k==$b['category']){
					
					$services[$k]['services'][] = $b;
				}
			}
		}
		
		$services[2]['services'] = $this->shoptypeList($services[2]['services']);
		
		$services = array_values($services);
		
		return $services;
	}
	
	/**
     * 商品分类分类
     */
	public function shoptypeList($list=array()){
		
		$result = array();
		
		foreach($list as $k=>$v){
			$result[$v['shoptype']]['title'] = $v['shoptype_name'];
			$result[$v['shoptype']]['thumb'] = !empty($v['shoptype_thumb'])?get_url().DS.$v['shoptype_thumb']:'';
			$result[$v['shoptype']]['id'] = $v['shoptype_id'];
			$v['thumb'] = !empty($v['thumb'])?get_url().DS.$v['thumb']:'';
			$result[$v['shoptype']]['shop'][] = $v;
		}
		
		return array_values($result);
	}
	
	/**
     * 获取服务列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['category']) && $where['category'] = $data['category'];
		
		!empty($data['shoptype']) && $where['shoptype'] = $data['shoptype'];
        
        return $where;
    }
	
	/**
     * 获取服务详情
     */
	public function getServicesInfo($where,$field = true){
		
		$this->modelOnlineServices->alias('a');
		
        $join = [
            [SYS_DB_PREFIX . 'online_shoptype o', 'a.shoptype = o.id', 'left'],
        ];
		
		return $this->modelOnlineServices->getInfo($where, $field,$join);
		
	}
   
    
}
