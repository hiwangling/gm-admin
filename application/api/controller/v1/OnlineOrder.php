<?php

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 支付订单管理
 *
 */
class OnlineOrder extends BaseController{
    
    /**
     * 订单列表
     */
    public function orderList()
    {
        $where = $this->logicOnlineOrder->getWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicOnlineOrder->getOrderList($where,'a.*,p.out_trade_no,p.paysource','a.id asc',$limit);
	  
		foreach($list as $k=>$v){
			
			  $list[$k]['pay_time'] = date('Y-m-d H:i:s',$v['paytime']);
			
		 }
	  
	    return setRetrunData('success', $list);
    }
    
	/*
  *订单详情
  *
  */
	public function orderInfo(){
		
	  $where = $this->logicOnlineOrder->getWhere($this->param);
		
	  if(empty($where)){
		  
		  return setRetrunData('条件不能为空','',1);
		  
	  }
	  
	  $list = $this->logicOnlineOrder->getOrderInfo($where,'a.*,p.out_trade_no,p.paysource');
		
	  if($list['state']<2){
		  $this->logicOnlineOrder->orderState(['id'=>$list['id']],['state'=>2]);
	  }
	 
	  $list['services'] = $this->logicOnlineOrderservices->getOrderservicesList(['a.rid'=>$list['id']],'a.*,b.thumb','a.id asc',false);
	  
	  return setRetrunData('success', $list);
	}
	
	 /*
	  *订单状态修改
	  *
	  */
	public function orderState(){
		
		$this->logicOnlineFeedback->feedbackUpdate(['rid'=>$this->param['id']],['execdate'=>time()]);
		
		if($this->param['state']==3){
			$orderInfo = $this->logicOnlineOrder->getOrderInfo(['a.id'=>$this->param['id']],'a.id,a.uid,a.out_trade_no');
		
			$openid = $this->logicOnlineMember->onlineMemberValues(['id'=>$orderInfo['uid']],'openid');
			$jump= get_url().'/mall/?sid='.$this->param['id'];
			$content = array(
				'first'=>'您好，您的订单已经完成',
				'keyword1'=>$orderInfo['out_trade_no'],
				'keyword2'=>"发送成功",
				'keyword3'=>date('Y-m-d H:i',time()),
				'remark'=>'您好，您有新的通知，请注意查收'
			);
			wordPush($jump,$content,$openid);
		}
		
		return $this->logicOnlineOrder->orderState(['id'=>$this->param['id']],['state'=>$this->param['state']]);
	}
	
}