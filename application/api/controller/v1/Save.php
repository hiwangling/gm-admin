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
class Save extends BaseController{
    
    
	
	/**
     * 寄存记录
	 * @version v2;@editor Divider
     */
	public function saveList(){
		
		$where = $this->logicSave->getWhere($this->param);
		
		$where['a.save_status'] =2;
		
		$locker_classly = parse_config_array('locker_classly');
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicSave->getSaveList($where,'a.*,c.title as locker_title,c.classly','a.canceldate desc',$limit,'');
		
		foreach($list as $k=>$v){
			$v['classly_name'] = $locker_classly[$v['classly']];
		}
		
		return setRetrunData('success', $list);
	}
	
	/**
     * 寄存详情
	 * @version v2;@editor Divider
     */
	public function saveInfo(){
		
		$info = $this->logicSave->getSaveInfo(['a.id'=>$this->param['id']],'a.*,b.id as order_id,b.order_begin,b.order_no,b.seller_id,b.sellname,b.sum_price as real_price');
		
		$max_end_time = $this->logicOrder->getOrderInfo(['a.cid'=>$this->param['id'],'a.financetype'=>9,'a.status'=>1],'a.id,max(a.order_end) as order_end');
		
		if(!empty($max_end_time['order_end'])){
			$order_end = $max_end_time['order_end'];
		}else{
			$order_end = $info['saveenddate'];
		}
		if ($info['save_status'] == 1) {
			
			$time_cha = strtotime(date('Y-m-d')) - strtotime($order_end);
			if ($time_cha > 0) {
				$days = $time_cha / (3600 * 24);
				$info['guoqi_days'] = "已过期{$days}天";
				$info['guoqi_status'] = 1;
			} else {
				$time_cha2 = strtotime($order_end) - strtotime(date('Y-m-d'));
				$days2 = $time_cha2 / (3600 * 24);
				$info['guoqi_days'] = "{$days2}天后过期";
				$info['guoqi_status'] = 0;
			}
		}
		$info['order_end'] = $order_end;
		
		$images = $this->logicImages->getImagesList(['tid'=>$info['id'],'cid'=>0,'status'=>1,'imgtype'=>[['eq',3],['eq',4],'OR']],'*','',false);
		
		if(!empty($images)){
			
			foreach($images as $k=>$v){
			
				if($v['imgtype']==3){

					$info['link_card_photo_z'] =$v['photo'];
				}elseif($v['imgtype']==4){
					$info['bury_card_photo_z'] =$v['photo'];
				}
			}
		}
		
		$info['renewList'] = $this->logicOrder->getOrderList(['a.cid'=>$info['id'],'financetype'=>9],'a.*','a.order_end desc',false);
		
		return setRetrunData('success', $info);
	}
	
	public function getImages($data=[]){
		
	
	}
	
	/**
     * 寄存添加
	 * @version v2;@editor Divider
     */
    public function saveAdd()
    {
        
        return $this->logicSave->saveAdd($this->param);
    }
	
	/**
     * 续存记录
	 * @version v2;@editor Divider
     */
	 public function renewList(){
		 
		 $where = $this->logicOrder->getWhere($this->param);
		 
		 $list = $this->logicOrder->getOrderList($where,'a.*','a.order_end desc',false);
		 
		 return setRetrunData('success', $list);
	 }
	
	/**
     * 续存添加
	 * @version v2;@editor Divider
     */
	 public function renewAdd(){
		 
		 return $this->logicSave->renewAdd($this->param);
	 }
	
	
	/**
     * 寄存编辑
	 * @version v2;@editor Divider
     */
    public function saveEdit()
    {
        
        return $this->logicSave->saveEdit($this->param);
    }
	
	/**
     * 寄存删除
	 * @version v2;@editor Divider
     */
    public function saveDel()
    {
		
        return $this->logicSave->saveDel($this->param);
    }
	
	/**
     * 寄存取出
	 * @version v2;@editor Divider
     */
	public function saveOut(){
		return $this->logicSave->saveOut($this->param);
	}
    
}