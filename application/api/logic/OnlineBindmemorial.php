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

class OnlineBindmemorial extends BaseLogic
{
    
    /**
     * 获取纪念人列表
     */
    public function getMemorialList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineBindmemorial->alias('a');
		
        $join = [
			[SYS_DB_PREFIX . 'online_memorial b', 'a.mid = b.id', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'b.uid = m.id', 'left'],
        ];
		
		return $this->modelOnlineBindmemorial->getList($where, $field , $order, $paginate,$join);
    }
	
	/**
     * 获取关联记录
     */
	public function bindmemorialInfo($where = [], $field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineBindmemorial->alias('a');
		
        $join = [
			[SYS_DB_PREFIX . 'online_memorial b', 'a.mid = b.id', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'b.uid = m.id', 'left'],
        ];
		
		return $this->modelOnlineBindmemorial->getInfo($where, $field,$join);
		
	}
	
	
	
	/**
     * 关联人员删除
     */
	public function bindmemorialDel($where=[]){
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
		
		$result = $this->modelOnlineBindmemorial->deleteInfo($where);
 
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
	/**
     * 获取纪念馆列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['uid']) && $where['a.uid'] =  $data['uid'];
        
        return $where;
    }
    
}
