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

class OnlineOrder extends BaseLogic
{
    
  /*
  *订单添加
  * data 提交数组
  */
	public function getOrderAdd($data=[]){
		
		$order_id = $this->orderAdd($data);
		
		$jump= get_url().'/mall/?sid='.$order_id;
		
		orderBuyWord($jump,$data['out_trade_no'],$data['totalprice'],$data['openid']);//消息推送
		
		$this->logicOnlineOrderservices->onlineOrderservicesAdd($data,$order_id);//添加详细服务项目
		
		return $order_id ? setRetrunData(RESULT_SUCCESS,$order_id):setRetrunData(RESULT_ERROR,'',1);
		
	}

	/*
     *主订单表添加
     * data 提交数组
     */
	public function orderAdd($data=[]){
		
		
		$order_data = array(
			'uid'=>$data['uid'],
			'cid'=>!empty($data['cid'])?$data['cid']:'',
			'cname'=>!empty($data['cname'])?$data['cname']:'',
			'bury_name'=>!empty($data['bury_name'])?$data['bury_name']:'',
			'totalprice'=>$data['totalprice'],
			'sacrificetime'=>!empty($data['sacrificetime'])?$data['sacrificetime']:'',
			'ordertype'=>$data['ordertype'],
			'vcnote'=>$data['vcnote'],
			'payname'=>$data['payname'],
			'payphone'=>$data['payphone'],
			'out_trade_no'=>$data['out_trade_no'],
			'pay'=>1,
			'paytime'=>time(),
			'picktime'=>$data['picktime'],
			'pick'=>$data['pick']
		);
		
		$result = $this->modelOnlineOrder->addInfo($order_data);
		
		return $result;
	}
	
	/*
     *订单列表
     * 
     */
	public function getOrderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineOrder->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'online_member o', 'a.uid = o.id', 'left'],

			[SYS_DB_PREFIX . 'online_payrecord p', 'a.out_trade_no = p.out_trade_no', 'left'],
        ];
		
		return $this->modelOnlineOrder->getList($where, $field , $order, $paginate, $join);
	}
	
	public function getOrderInfo($where = [], $field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineOrder->alias('a');
		
        $join = [

            [SYS_DB_PREFIX . 'online_member o', 'a.uid = o.id', 'left'],

			[SYS_DB_PREFIX . 'online_payrecord p', 'a.out_trade_no = p.out_trade_no', 'left'],
        ];
		
		return $this->modelOnlineOrder->getInfo($where, $field, $join);
	}
	
	/**
     * 查询条件
     */
    public function getWhere($data=[]){
		
		$where = [];
		
		!empty($data['id']) && $where['a.id'] = $data['id'];
        
        !empty($data['uid']) && $where['a.uid'] = $data['uid'];
		
		!empty($data['state']) && $where['a.state'] = $data['state'];
        
        return $where;
	}
    
}
