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
class Manager extends BaseLogic
{
    
	/**
     * 人员统计查询
     */
    public function getStat($where = [], $stat_type = 'count', $field = 'id'){
		
		return $this->modelManager->stat($where,$stat_type,$field);
		
	}
	
	  
	
	/**
     * 人员信息列表
     */
	public function getManagerList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelManager->getList($where, $field , $order, $paginate);
		
	}
	
	/**
     * 获取人员列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['username']) && $where['userno|nickname|realname|username|mobile'] = ['like', '%'.$data['username'].'%'];
        
        return $where;
    }
	
	/**
     * 获取人员列表详情
     */
	public function managerInfo($where=[],$field=true){
		
		return $this->modelManager->getInfo($where,$field);
	}
	
	/**
     * 获取人员列表详情
     */
	public function managerValue($where=[],$field=true){
		
		return $this->modelManager->getValue($where,$field);
	}
 
}
