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

class OnlineMemorial extends BaseLogic
{
    
    /**
     * 获取纪念馆列表
     */
    public function getMemorialList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineMemorial->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'online_deploy cs', 'a.sid = cs.id AND cs.type=1', 'left'],
			[SYS_DB_PREFIX . 'online_deploy cm', 'a.mid = cm.id AND cm.type=2', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'a.uid = m.id', 'left'],
        ];
		
		return $this->modelOnlineMemorial->getList($where, $field , $order, $paginate,$join);
    }
	
	public function memorialInfo($where = [], $field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineMemorial->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'online_deploy cs', 'a.sid = cs.id AND cs.type=1', 'left'],
			[SYS_DB_PREFIX . 'online_deploy cm', 'a.mid = cm.id AND cm.type=2', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'a.uid = m.id', 'left'],
        ];
		
		return $this->modelOnlineMemorial->getInfo($where, $field,$join);
		
	}
	
	/**
     * 修改纪念馆信息
     */
	public function updateMemorial($where,$update){
		
		if(empty($update)){
			return setRetrunData('修改数据不能为空','',1);
		}
		
		$result = $this->modelOnlineMemorial->updateInfo($where,$update);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
	/**
     * 修改纪念馆信息
     */
	public function memorialDel($where=[]){
		
		if(empty($where)){
			
			return setRetrunData('条件不能为空','',1);
		}
		
		$this->logicOnlineMemorypeople->memorypeopleDel(['mid'=>$where['id']]);//删除纪念馆下面的逝者信息
		
		$this->logicOnlineBindmemorial->bindmemorialDel(['mid'=>$where['id']]);//删除纪念馆下面的关联人员
		
		$result = $this->modelOnlineMemorial->deleteInfo($where);//删除纪念馆
 
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	/**
     * 获取纪念馆列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['buryname']) && $where['a.buryname'] =  ['like', '%'.$data['buryname'].'%'];
		
		!empty($data['id']) && $where['a.id'] =  $data['id'];
        
        return $where;
    }
   
    
}
