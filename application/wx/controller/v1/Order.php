<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\wx\controller\v1;
use app\wx\controller\BaseController;

/**
 * Description of Dept
 *
 * @author Administrator
 */
class Order extends BaseController{
    
    /**
     * 业务提交统一处理方法
     * @version v2;@editor Divider
     */
	public function orderDispose(){
		
		return $this->logicOrder->orderDispose($this->param);
	}
	
	/**
     * 购买墓穴编辑
     * @version v2;@editor Divider
     */
    public function orderEdit()
    {
        
		return $this->logicOrder->orderEdit($this->param);
    }
	
	/**
     * 删除订单单条
     * @version v2;@editor Divider
     */
	public function orderDel(){
		
		return $this->logicOrder->orderDel($this->param);
	}
	
	/**
     * 订单退款
     * @version v2;@editor Divider
     */
	public function orderRefund(){
		
		/*if($this->param['financetype']==1){
			$usestatus =1;	
		}
		
		if(!empty($usestatus)){
			$this->logicCemetery->updateCemeteryUsestatus(['id'=>$this->param['cid']],['usestatus'=>$usestatus]);//修改墓穴状态
		}*/
		
		return $this->logicOrder->reserveRefund($this->param);
		
	}
	
	/**
     * 预定墓穴列表
     * @version v2;@editor Divider
     */
	public function reserveList(){
		
		$where = $this->logicOrder->getWhere($this->param);
		
		//print_r($where);
		$where['a.financetype'] =1;
		//if(!empty($this->param['cid'])){
		//$where['c.usestatus'] =['elt',2];
		
		$where['a.order_status'] =2;
		//}
		
		$where['a.status'] =1;
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicOrder->getOrderList($where,'a.*,c.cname,c.usestatus','a.order_begin asc',$limit);
		
		foreach($list as $k=>$v){
			
			$time_cha = strtotime(date('Y-m-d')) - strtotime($v['order_end']);
			
			if($v['usestatus']>2){
				$list[$k]['guoqi_days'] = "已完结";
				$list[$k]['guoqi_status'] = 2;
			}else{
				if ($time_cha > 0) {
					$days = $time_cha / (3600 * 24);
					$list[$k]['guoqi_days'] = "已过期{$days}天";
					$list[$k]['guoqi_status'] = 1;
				}else{
					$time_cha2 = strtotime($v['order_end']) - strtotime(date('Y-m-d'));
					$days2 = $time_cha2 / (3600 * 24);
					$list[$k]['guoqi_days'] = "{$days2}天后过期";
					$list[$k]['guoqi_status'] = 0;
				}
			}

			$list[$k]['real_price'] = $v['sum_price'];
		}
		
		return setRetrunData('success', $list);
	}
	

}