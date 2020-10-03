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
class HistoryInfo extends BaseController{
    
    /**
     * 根据cid查询历史信息记录 
     * @version v2;@editor Divider
     */	
    public function getHistoryInfoByCid()
    {
		$where = $this->logicHistoryInfo->getWhere($this->param);

        $list = $this->logicHistoryInfo->getHistoryInfoList($where,'a.*,b.buyer_name,b.sellname,b.sum_price as real_price,b.order_status','a.id asc',false);
		
        return setRetrunData('success', $list);
    }
   

    /**
     * 获取迁出的历史信息
     * @return type
     */
    public function getHistoryList($keyword)
    {
        $where = [];
        if ($keyword) {
            $where['old_name'] = array('like', '%' . $keyword . '%');
        }
        $where['typeid'] = ['eq',3];
        $where['status'] = ['eq',1];
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        $list = $this->logicHistoryInfo->getHistoryInfoList($where,true,'id desc',$limit);
		
        return setRetrunData('success', $list->toArray());
    }
    
    /**
     * 获取退墓的历史信息
     * @return type
     */ 
    public function getHistoryListByMove($keyword)
    {
       $where = [];
        if ($keyword) {
            $where['old_name'] = array('like', '%' . $keyword . '%');
        }
        $where['typeid'] = ['eq',2];
        $where['status'] = ['eq',1];
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        $list = $this->logicHistoryInfo->getHistoryInfoList($where,true,'id desc',$limit);
	
        return setRetrunData('success', $list->toArray());
    }

}