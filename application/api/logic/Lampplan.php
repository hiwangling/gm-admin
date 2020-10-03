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
 * 点灯计划信息逻辑
 */
class Lampplan extends BaseLogic
{
    
    /**
     * 获取点灯计划信息列表
     */
    public function getLampplanList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
	
	return $this->modelLampplan->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 获取点灯计划单条信息
     */
    public function getLampplanInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
	
	return $this->modelLampplan->getInfo($where, $field);
    }
	
    /**
     * 点灯计划信息添加
     */
    public function lampplanAdd($data = [])
    {
        
        $validate_result = $this->validateLampplan->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateLampplan->getError(),'',1);
        }
        $result = $this->modelLampplan->setInfo($data);
        $result && action_log('新增', '新增点灯计划信息，name：'. $data['year']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 点灯计划信息编辑
     */
    public function lampplanEdit($data = [])
    {
        
        $validate_result = $this->validateLampplan->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateLampplan->getError(),'',1);
        }
        $result = $this->modelLampplan->setInfo($data);
        
        $result && action_log('编辑', '编辑点灯计划信息，name：'. $data['year'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 点灯计划信息删除
     */
    public function lampplanDel($id)
    {
	 $result = $this->modelLampplan->deleteInfo(["id"=>$id]);
         $result && action_log('删除', '点灯计划删除' . '，where：' . http_build_query(["id"=>$id]));
          return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
    /**
     * 获取点灯计划信息查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['year'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
