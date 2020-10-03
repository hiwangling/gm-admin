<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\api\controller\v1;
use app\api\controller\BaseController;

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
	
	public function ceshi(){
		
		return $this->logicOrder->ceshi($this->param);
	}
	
	/**
     * 根据cid获取墓穴购买单信息
     * @version v2;@editor Divider
     */
    public function getBuyCemetery()
    {
        $where = $this->logicOrder->getWhere($this->param);
		
		$where['a.financetype'] =2;
		
		$where['a.status'] =1;
		
        $list= $this->logicOrder->getOrderInfo($where,'a.*,b.sell_price,b.real_price');
		$data = [];
		if(!empty($list)){
			$data[] = $list;
		}

        return setRetrunData('success', $data);
    }
	
	/**
     * 获取购买服务订单列表
     * @version v2;@editor Divider
     */
     public function getServicesOrderList()
    {
        $where = $this->logicOrder->getWhere($this->param);

		$where['a.financetype'] =3;
		 
		$where['a.status'] =1;

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicOrder->getOrderList($where,'a.*','a.order_begin desc',false,'a.id');
		 
		foreach($list as $k=>$v){
			
			$v['service_title'] = $this->logicOrder->serviceTitle(['id'=>$v['id'],'cid'=>$v['cid']]);
		}
		 
		return setRetrunData('success', $list);
    }
	
	/**
     * 迁出列表
     * @version v2;@editor Divider
     */
     public function  emigrationList()
    {
        $where = $this->logicOrder->getWhere($this->param);
		 
		$where['a.status'] =1;

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicOrder->getOrderList($where,'a.*','a.order_begin desc',false,'a.id');
		
		return setRetrunData('success', $list);
    }
	
	
	/**
     * 购买服务
     * @version v2;@editor Divider
     */
    public function buyServices()
    {
     	
		return $this->logicOrder->buyServices($this->param);
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
     * 获取服务订单服务列表
     * @version v2;@editor Divider
     */
    public function getServicesOrderInfo()
    {
        return $this->logicOrder->getServicesOrderInfo($this->param);
    }

	/**
     * 墓穴购买付款
     * @version v2;@editor Divider
     */
    public function cemeteryPay($cid)
    {
        return $this->logicOrder->cemeteryPay($cid);
    }

    /**
     * 订单付款
     * @version v2;@editor Divider
     */
    public function orderPay()
    {
        return $this->logicOrder->orderUpdate(['id'=>$this->param['id']],['order_status'=>2,'paytime'=>time()]);
    }

	/**
     * 换墓
     * @version v2;@editor Divider
     */
    public function changeCemetery()
    {
       
        return $this->logicOrder->changeCemetery($this->param);
    }
	
	
	
	
	
	
    /**
     * 服务付款
     * @param type $id
     * @return type
     */
    public function buyServicesPay($id)
    {
        return $this->logicOrder->buyServicesPay($id);
    }
    
    
    
    
    
    /**
     * 退墓
     * @return type
     */
    public function moveCemetery()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        return $this->logicOrder->moveCemetery($this->param);
    }
    
    /**
     * 迁出
     * @return type
     */
    public function moveCemeteryQian()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        return $this->logicOrder->moveCemeteryQian($this->param);
    }
    
    /**
     * 撤销退墓操作
     * @return type
     */
    public function moveCemeteryRevoke()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        return $this->logicOrder->moveCemeteryRevoke($this->param);
    }
    
    /**
     * 迁出操作撤销恢复
     * @return type
     */
    public function moveCemeteryQianRevoke()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        return $this->logicOrder->moveCemeteryQianRevoke($this->param);
    }
    
    /**
     * 点灯查询列表
     * @return type
     */
    public function lightupListByID($cid =0)
    {
        return $this->logicOrder->lightupListByID($cid);
    }

    /**
     * 新增点灯信息 一年只能点一次灯
     * @return type
     */
    public function lightupAdd()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        return $this->logicOrder->lightupAdd($this->param);
    }
    
    /**
     * 获取当前点灯记录
     * @param type $orderid
     * @return type
     */
    public function getBuyLightup($id)
    {
        return $this->logicOrder->getBuyLightup($id);
    }
    
    /**
     * 修改点灯记录
     */
    public function lightupEdit()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        return $this->logicOrder->lightupEdit($this->param);
    }
    
    /**
     * 点灯付款
     * @return type
     */
    public function lightupPay($id)
    {
        return $this->logicOrder->lightupPay($id);
    }
    
    /**
     * 修改点灯服务订单的开票状态
     * @return type
     */
    public function lightupIsvoice($id)
    {
        return $this->logicOrder->lightupIsvoice($id);
    }
    
    /**
     * 上传碑文图片跟订单挂钩，只能上传一张
     */
    public function uploadTabletPhoto()
    {
        return $this->logicOrder->uploadTabletPhoto($this->param);
    }
    
    /**
     * 打印殡葬服务信息
     * @return type
     */
    public function dyServicesByfw($id)
    {
        $orderDetail = $this->logicOrderDetail->getOrderDetailList(['order_id' => $id,'service_type' => 3],'*','id asc',false);
        if (empty($orderDetail))
        {
            return setRetrunData('success', []);
        }
        else
        {
            $datas = [];
            $buryname="";
            $service_time="";
            $sell_title ="";
            foreach ($orderDetail as $k => $v) {
                $buryname = $v['buryname'];
                $service_time = $v['service_time'];
                $sell_title .= $v['sell_title'] .$v['amount'].$v['chargeunit'].',';
            }
            $datas['buryname'] = $buryname;
            $datas['service_time'] = $service_time;
            $datas['sell_title'] = $sell_title;
            return setRetrunData('success', $datas);
        }
    }
    
    /**
     * 打印立碑服务信息
     * @return type
     */
    public function dyServicesBylb($id)
    {
        $id = intval($id);
        $type [0]=8;
        $type [1]=9;
        $orderDetail = $this->logicOrderDetail->getOrderDetailList(['order_id' => $id,'service_type' => array('in',$type)],'*','id asc',false);
        if (empty($orderDetail))
        {
            return setRetrunData('success', []);
        }
        else
        {
            $datas = [];
            $buryname="";
            $service_time="";
            $sell_title ="";
            foreach ($orderDetail as $k => $v) {
                $buryname = $v['buryname'];
                $service_time = $v['service_time'];
                $sell_title .= $v['sell_title'] .$v['amount'].$v['chargeunit'].',';
            }
            $datas['buryname'] = $buryname;
            $datas['service_time'] = $service_time;
            $datas['sell_title'] = $sell_title;
            return setRetrunData('success', $datas);
        }
    }
}