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

/**
 * 部门逻辑
 */
class Branch extends BaseLogic
{
    
    /**
     * 获取部门列表
     */
    public function getBranchList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelBranch->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 获取部门单个字段
     */
	public function getBranchValue($where = [], $field = ''){
		
		$where[DATA_STATUS_NAME] = ['neq', DATA_DELETE];
		
		return $this->modelBranch->getValue($where, $field);
		
	}
	
	/**
     * 部门信息添加
     */
    public function BranchAdd($data = [])
    {
        
        $validate_result = $this->validateBranch->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateBranch->getError(),'',1);
        }
		
        $data[TIME_CT_NAME] = TIME_NOW;
		
        $result = $this->modelBranch->setInfo($data);
		
		$result && action_log('新增', '新增部门，name：' . $data['branch_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	/**
     * 部门信息编辑
     */
    public function BranchEdit($data = [])
    {
        
        $validate_result = $this->validateBranch->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateBranch->getError(),'',1);
        }
        $result = $this->modelBranch->setInfo($data);
        
        $result && action_log('编辑', '编辑部门，name：' . $data['branch_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
	/**
     * 部门删除
     */
    public function BranchDel($where = [])
    {
        
        $managerCount = $this->logicManager->getStat(['branch'=>$where['id']]);
		
		if($managerCount>0){
			
			return setRetrunData('该部门下还存在人员','',1);
			
		}
		
		$result = $this->modelBranch->deleteInfo($where);
        
        $result && action_log('删除', '部门删除' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 获取部门信息
     */
    public function getBranchInfo($where = [], $field = true)
    {
        
        return $this->modelBranch->getInfo($where, $field);
    }
	
	/**
     * 获取部门列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['rolename']) && $where['branch_name'] = ['like', '%'.$data['rolename'].'%'];
        
        return $where;
    }
   
    
}
