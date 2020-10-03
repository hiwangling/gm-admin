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
 * 套餐逻辑
 */
class Combo extends BaseLogic
{
    
    /**
     * 获取套餐列表
	 * @version v2;@editor Divider
     */
    public function getComboList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelCombo->getList($where, $field , $order, $paginate);
    }
	
    /**
     * 套餐信息添加
	 * @version v2;@editor Divider
     */
    public function comboAdd($data = [])
    {
        $validate_result = $this->validateCombo->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCombo->getError(),'',1);
        }
		$add_array = array(
				'service_name' => $data['service_name'],
				'sell_price' => $data['sell_price'],
				'unit_price' => $data['unit_price'],
				'sort'=>$data['sort'],
				//'vcnote' => $data['vcnote']
			);
		$result = $this->modelCombo->addInfo($add_array);
        
        $this->logicComboServices->comboServicesAdd($data['services'],$result);//服务添加
        
		$result && action_log('新增套餐', '新增套餐，name：' . $data['service_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	
    /**
     * 套餐信息编辑
	 * @version v2;@editor Divider
     */
    public function comboEdit($data = [])
    {
        
        $validate_result = $this->validateCombo->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCombo->getError(),'',1);
        }
        
        $add_array = array(
            	'service_name' => $data['service_name'],
				'sell_price' => $data['sell_price'],
				'unit_price' => $data['unit_price'],
				'sort'=>$data['sort'],
        );
		
        $result = $this->modelCombo->updateInfo(['id'=>$data['id']],$add_array);
		
        //删除套餐服务详情
        $this->modelComboServices->deleteInfo(['cid'=>$data['id']],true);

        $this->logicComboServices->comboServicesAdd($data['services'],$data['id']);
        
        $result && action_log('编辑', '编辑套餐，name：' . $data['service_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 套餐删除
	 * @version v2;@editor Divider
     */
    public function comboDel($id)
    {
	 	$result = $this->modelCombo->deleteInfo(["id"=>$id],true);
         //删除套餐服务详情
         $result = $this->modelComboServices->deleteInfo(['cid'=>$id],true);
		
         $result && action_log('删除', '套餐删除' . '，where：' . http_build_query(["id"=>$id]));
		
         return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 获取套餐详情
	 * @version v2;@editor Divider
     */
	public function comboInfo($where=[], $field=true ){
		
		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelCombo->getInfo($where, $field);
	}
	
	/**
     * 获取套餐详情并附带套餐服务
	 * @version v2;@editor Divider
     */
	public function comboServiceInfo($data=[]){
		
		$combo = $this->comboInfo(['id'=>$data['id']]);
		
		$comboService = $this->logicComboServices->getComboServicesList(['a.cid'=>$data['id'],'a.status'=>1],'a.id,a.sid,a.number as amount,a.price as sell_price,a.totalprice,s.service_name,s.service_classify,s.chargeunit,s.vcnote','',false);
		
		$service_classify = $this->logicServiceInfo->getServiceClassify($comboService);
		
		$combo['services'] = $service_classify;
		
		return setRetrunData(RESULT_SUCCESS,$combo);
	}
    /**
     * 获取套餐列表搜索条件
	 * @version v2;@editor Divider
     */
    public function getWhere($data = [])
    {
        $where = [];
        
        !empty($data['keyword']) && $where['title'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
