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
 * 大屏图片信息逻辑
 */
class Dplyfjtp extends BaseLogic
{
    
    /**
     * 获取大屏图片列表
     */
    public function getDplyfjtpList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
	
        return $this->modelDplyfjtp->getList($where, $field , $order, $paginate);
    }
	
    /**
     * 大屏图片添加
     */
    public function dplyfjtpAdd($data = [])
    {
        
        $validate_result = $this->validateDplyfjtp->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateDplyfjtp->getError(),'',1);
        }
        $data[TIME_CT_NAME] = TIME_NOW;
	$result = $this->modelDplyfjtp->setInfo($data);
        $result && action_log('新增', '新增大屏图片，name：' . $data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 大屏图片编辑
     */
    public function dplyfjtpEdit($data = [])
    {
        
        $validate_result = $this->validateDplyfjtp->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateDplyfjtp->getError(),'',1);
        }
        $result = $this->modelDplyfjtp->setInfo($data);
        
        $result && action_log('编辑', '编辑大屏图片信息，name：'. $data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 大屏图片删除
     */
    public function dplyfjtpDel($id)
    {
        
	 $result = $this->modelDplyfjtp->deleteInfo(["id"=>$id],true);
         $result && action_log('删除', '大屏图片删除' . '，where：' . http_build_query(["id"=>$id]));
          return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
    /**
     * 获取查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['title'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
