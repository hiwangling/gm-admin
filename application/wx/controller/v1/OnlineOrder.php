<?php
namespace app\wx\controller\v1;

use app\wx\controller\BaseController;

class OnlineOrder extends BaseController
{
	
  /*
  *订单添加
  *
  */
  public function orderAdd()
    {
	  
		return $this->logicOnlineOrder->getOrderAdd($this->param);
	  
    }
  /*
  *订单列表
  *
  */
  public function orderList(){
	  
	  $where = $this->logicOnlineOrder->getWhere($this->param);
	  
	  if(empty($where)){
		  
		  return setRetrunData('条件不能为空','',1);
		  
	  }
	  
	  $list = $this->logicOnlineOrder->getOrderList($where,'a.*,p.out_trade_no,p.paysource','a.id desc',false);
	  
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
	 
	  $services = $this->logicOnlineOrderservices->getOrderservicesList(['a.rid'=>$list['id']],'a.*,b.thumb','a.id asc',false);
		
	  foreach($services as $k=>$v){
		  $v['thumb'] = get_url().DS.$v['thumb'];
	  }
	  $list['services'] = $services;
	  return setRetrunData('success', $list);
	}

}