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
 * 墓穴样式逻辑
 */
class CemeteryStyle extends BaseLogic
{
    
    /**
     * 获取墓穴样式列表
     */
    public function getCemeteryStyleList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelCemeteryStyle->getList($where, $field , $order, $paginate);
    }
	
    /**
     * 墓穴样式信息添加
     */
    public function cemeteryStyleAdd($data = [])
    {
        $validate_result = $this->validateCemeteryStyle->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemeteryStyle->getError(),'',1);
        }
        $data[TIME_CT_NAME] = TIME_NOW;
        $result = $this->modelCemeteryStyle->setInfo($data);
        $result && action_log('新增', '新增墓穴样式，name：' . $data['type_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 墓穴样式信息编辑
     */
    public function cemeteryStyleEdit($data = [])
    {
        
        $validate_result = $this->validateCemeteryStyle->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemeteryStyle->getError(),'',1);
        }
        $result = $this->modelCemeteryStyle->setInfo($data);
        
        $result && action_log('编辑', '编辑墓穴样式，name：' . $data['type_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 墓穴样式删除
     */
    public function cemeteryStyleDel($where = [])
    {
        $result = $this->modelCemeteryStyle->deleteInfo($where);
        
        $result && action_log('删除', '墓穴样式删除' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
    /**
     * 获取墓穴样式列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['type_name'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
