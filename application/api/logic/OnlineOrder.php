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
 * 线上订单表
 */
class OnlineOrder extends BaseLogic
{
    
    /*
     *订单列表
     * 
     */
	public function getOrderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineOrder->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'cemetery c', 'a.cid = c.id', 'left'],
            [SYS_DB_PREFIX . 'online_member o', 'a.uid = o.id', 'left'],
			[SYS_DB_PREFIX . 'online_payrecord p', 'a.out_trade_no = p.out_trade_no', 'left'],
        ];
		
		return $this->modelOnlineOrder->getList($where, $field , $order, $paginate, $join);
	}
	
	public function getOrderInfo($where = [], $field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineOrder->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'cemetery c', 'a.cid = c.id', 'left'],
            [SYS_DB_PREFIX . 'online_member o', 'a.uid = o.id', 'left'],
			[SYS_DB_PREFIX . 'online_payrecord p', 'a.out_trade_no = p.out_trade_no', 'left'],
        ];
		
		return $this->modelOnlineOrder->getInfo($where, $field, $join);
	}
	
    /**
     * 获取图片查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
		
		!empty($data['id']) && $where['a.id'] = $data['id'];
        
        !empty($data['uid']) && $where['a.uid'] = $data['uid'];
		
		//!empty($data['state'])?$where['a.state'] = ['neq',3];
		
		if(!empty($data['state'])){
			
			$where['a.state'] = $data['state'];
		}else{
			$where['a.state'] = ['neq',3];
		}
		
		if(!empty($data['startime']) && !empty($data['endtime'])){
			
			$where['a.paytime'] = [['egt',strtotime($data['startime'])],['elt',strtotime($data['endtime'])],"AND"];
		}
        
        !empty($data['keyword']) && $where['a.payname|a.payphone'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	/**
     * 订单单数据修改
     */
	public function orderState($where,$update=[]){
		
		if(empty($update)){
			return setRetrunData('修改数据不能为空','',1);
		}
		
		$result = $this->modelOnlineOrder->updateInfo($where,$update);
		
		$result && action_log('编辑', '订单编辑，' .http_build_query($where).',内容'.http_build_query($update));
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
	/**
     * 获取订单单数据
     */
	public function orderValues($where=[],$field=true){
		
		return $this->modelOnlineOrder->getValue($where,$field);
	}
   
    
}
