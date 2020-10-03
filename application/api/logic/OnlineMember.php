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
 * 微信会员管理
 */
class OnlineMember extends BaseLogic
{
    
    /**
     * 获取会员列表
     */
    public function memberList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME]) ? $where[DATA_STATUS_NAME] : ['neq', DATA_DELETE];

        return $this->modelOnlineMember->getList($where, $field , $order, $paginate);
    }

    /**
     * 会员信息删除
     */
    public function memberDel($id)
    {
		 $where['id'] = $id;
		
		 $result = $this->modelOnlineMember->deleteInfo($where);

		 $result && action_log('删除', '会员删除' . '，where：' . http_build_query($where));

		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
    /**
     * 获取会员查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['username|realname|mobile|nickname'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
	/**
     * 获取会员单数据
     */
	public function onlineMemberValues($where=[],$field=true){
		
		return $this->modelOnlineMember->getValue($where,$field);
	}
	
   
    
}
