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

namespace app\api\logic;
 

/**
 * 服务逻辑
 */
class ServiceInfo extends BaseLogic
{
    
    /**
     * 获取服务列表
     */
    public function getServiceInfoList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
        return $this->modelServiceInfo->getList($where, $field , $order, $paginate);
    }
	
    /**
     * 服务信息添加
     */
    public function ServiceInfoAdd($data = [])
    {
        
        $validate_result = $this->validateServiceInfo->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateServiceInfo->getError(),'',1);
        }
	
		$data[TIME_CT_NAME] = TIME_NOW;
		
        $result = $this->modelServiceInfo->setInfo($data);
		
		$result && action_log('新增服务', '新增服务信息，name：' . $data['service_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$data):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 套餐信息编辑
     */
    public function serviceInfoEdit($data = [])
    {
        
        $validate_result = $this->validateServiceInfo->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateServiceInfo->getError(),'',1);
        }
        $result = $this->modelServiceInfo->setInfo($data);
        
        $result && action_log('编辑服务', '编辑服务信息，name：' . $data['service_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 服务信息删除
     */
    public function serviceInfoDel($where = [])
    {
		$result = $this->modelServiceInfo->deleteInfo($where);
		
        $result && action_log('删除', '服务信息删除' . '，where：' . http_build_query($where));
		
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
    
    /**
     * 获取所有服务
	 * @version v2;@editor Divider
     */
    public function getServicesAll()
    {
        $serlsit =[];
        $services =[];
        $data =[];
        $servicetype = parse_config_array('service_classify');
       
        $list= $this->getServiceInfoList(['status'=>1],'*','id asc',false);
		
		$classify = $this->getServiceClassify($list);
		
		return $classify;
        
        /*if(!empty($list) && !empty($servicetype))
        {
            foreach($servicetype as $key => $value)
            {
                foreach($list as $key1 => $value1)
                {
                    if($key==$value1['service_classify'])
                    {
                        $services [] =$value1;
                    }
                }
                $serlsit[$key]['title']= $value;
                $serlsit[$key]['key']= $key;
                $serlsit[$key]['services']=$services;
                $services = [];
            }
        }
        return array_values($serlsit);*/
    }
    
	/**
     * 根据服务分类处理服务
	 * @version v2;@editor Divider
     */
	public function getServiceClassify($list=[]){
		
		$servicetype = parse_config_array('service_classify');
		
		if(!empty($list) && !empty($servicetype))
        {
            foreach($servicetype as $key => $value)
            {
                foreach($list as $key1 => $value1)
                {
                    if($key==$value1['service_classify'])
                    {
                        $services [] =$value1;
                    }
                }
                $serlsit[$key]['title']= $value;
                $serlsit[$key]['key']= $key;
                $serlsit[$key]['services']=$services;
                $services = [];
            }
        }
        return array_values($serlsit);
		
	}
	/**
     * 根据条件获取不同组合服务
	 * @version v2;@editor Divider
     */
	public function getServicesList($data=[]){
		
		$type = !empty($data['type'])?$data['type']:1;
		
		if($type==1){
			$data = $this->getServicesAll();
		}elseif($type==2){
			$service = $this->getServicesAll();
			$combo[0]['title'] = '套餐服务';
			$combo[0]['key'] = 20;
			$combo[0]['services'] = $this->logicCombo->getComboList(['status'=>1],'*','id asc',false);
			
			foreach($combo[0]['services'] as $k=>$v){
				$v['chargeunit'] = '套';
			}
			$data = array_merge($service,$combo);
		}
		
		return setRetrunData(RESULT_SUCCESS,$data);
	}
	
    /**
     * 获取服务信息搜索条件
	 * @version v2;@editor Divider
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['type_name']) && $where['service_name'] = ['like', '%'.$data['type_name'].'%'];
		
		!empty($data['service_classify']) && $where['service_classify'] = $data['service_classify'];
        
        return $where;
    }
		
	
    /**
     * 点灯价格信息编辑
     * @return type
     */
    public function lightupInfoEdit($data =[])
    {
        $validate_result = $this->validateServiceInfo->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateServiceInfo->getError(),'',1);
        }
        
        if(empty($data['id']) || empty($data['sellprice']) || empty($data['vcnote']))
        {
            return setRetrunData('价格和年限全都是必填项', '', 1);
        }
        
        $result = $this->modelServiceInfo->updateInfo(['id'=>$data['id']],$data);
        
        $result && action_log('编辑', '编辑服务信息，name：' . $data['service_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
    
    
    
}
