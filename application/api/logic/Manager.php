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
use app\api\controller\BaseController as BaseController;

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
	 public function managerDel($id){
		
		 $result = $this->modelManager->deleteInfo(["id"=>$id]);
            $result && action_log('删除', '部门删除' . '，where：' . http_build_query(["id"=>$id]));
          return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	/**
     * 人员信息添加
     */
	public function ManagerAdd($data=[]){
		
		$validate_result = $this->validateManager->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateManager->getError(),'',1);
        }
        
	    $data['password'] = !empty($data['password'])?md5(md5($data['password'])):md5(md5('123456'));
		
        $result = $this->modelManager->setInfo($data);
		
		$result && action_log('新增', '新增员工，name：' . $data['username']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
        
     public function resetpass($id){
		
        $update['password'] = md5(md5("lxy123456"));
        $result = $this->modelManager->updateInfo(["id"=>$id],$update);
	  	return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	/**
     * 人员信息编辑
     */
	public function ManagerEdit($data=[]){
		
		$validate_result = $this->validateManager->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateManager->getError(),'',1);
        }
		
		if($data['password']){
			$data['password'] = md5(md5($data['password']));
		}else{
			unset($data['password']);
		}
         $result = $this->modelManager->setInfo($data);
		
		$result && action_log('编辑', '编辑员工，name：' . $data['username']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
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
        
         if(!empty($data['deptid']))
        {
           $where['deptid'] =$data['deptid'];
        }
        if(!empty($data['branch']))
        {
           $where['branch'] =$data['branch'];
        }
        
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
