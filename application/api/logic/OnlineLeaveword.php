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

class OnlineLeaveword extends BaseLogic
{
    
    /**
     * 获取纪念馆留言列表
     */
    public function getLeavewordList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineLeaveword->alias('a');
		
        $join = [
			[SYS_DB_PREFIX . 'online_memorial b', 'a.mid = b.id', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'a.uid = m.id', 'left'],
			[SYS_DB_PREFIX . 'online_deploy s', 'a.sid = s.id AND a.type=2', 'left'],
        ];
		
		return $this->modelOnlineLeaveword->getList($where, $field , $order, $paginate,$join);
    }
	
	
	/**
     * 留言删除
     */
	public function leavewordDel($where=[]){
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
		
		$result = $this->modelOnlineLeaveword->deleteInfo($where);
 
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData('不符合删除条件','',1);
		
	}
	
	/**
     * 留言统计
     */
	public function leavewordStat($where = [], $stat_type = 'count', $field = 'id'){
		
		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME]) ? $where[DATA_STATUS_NAME] : ['neq', DATA_DELETE];
		
		return $this->modelOnlineLeaveword->stat($where,$stat_type,$field);
	}
	
	/**
     * 获取纪念馆留言列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['mid']) && $where['a.mid'] = $data['mid'];
        
        return $where;
    }
   
    
}
