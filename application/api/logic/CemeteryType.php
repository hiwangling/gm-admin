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
 * 墓穴类型逻辑
 */
class CemeteryType extends BaseLogic
{
    
    /**
     * 获取车辆列表
     */
    public function getCemeteryTypeList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelCemeteryType->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 车辆信息添加
     */
    public function cemeteryTypeAdd($data = [])
    {
        
        $validate_result = $this->validateCemeteryType->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemeteryType->getError(),'',1);
        }
		
		$data[TIME_CT_NAME] = TIME_NOW;
		
        $result = $this->modelCemeteryType->setInfo($data);
		
		$result && action_log('新增', '新增墓穴类型，name：' . $data['type_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	/**
     * 车辆信息编辑
     */
    public function cemeteryTypeEdit($data = [])
    {
        
        $validate_result = $this->validateCemeteryType->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemeteryType->getError(),'',1);
        }
        $result = $this->modelCemeteryType->setInfo($data);
        
        $result && action_log('编辑', '编辑墓穴类型，name：' . $data['type_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
	/**
     * 类型删除
     */
    public function cemeteryTypeDel($where = [])
    {
        
		$result = $this->modelcemeteryType->deleteInfo($where);
        
        $result && action_log('删除', '墓穴类型删除' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 获取车辆列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['type_name'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
