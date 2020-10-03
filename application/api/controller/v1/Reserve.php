<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 墓穴预定
 *
 * @author Administrator
 */
class Reserve extends BaseController{
    //put your code here	
    /**
     * 查询预定信息列表
     * @return type
     */
    public function reserveAllList()
    {
        $where = $this->logicReserve->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicReserve->getReserveList($where,'a.*,CONCAT(c.type_name,b.cname) cname,'
                . 'd.type_name stylename,e.type_name typename','a.id desc',$limit);
        
        if(!empty($list))
        {
            $list =$list->toArray();
            foreach ($list['data'] as $k => $v) {
            
                $list['data'][$k]['guoqi_days'] = '';
                $list['data'][$k]['guoqi_status'] = 0;

                $time_cha = strtotime(date('Y-m-d')) - $v['ordainend'];
                
                if ($time_cha > 0) {
                    $days = $time_cha / (3600 * 24);
                    $list['data'][$k]['guoqi_days'] = "已过期{$days}天";
                    $list['data'][$k]['guoqi_status'] = 1;
                }else{
                    $time_cha2 = $v['ordainend'] - strtotime(date('Y-m-d'));
                    $days2 = $time_cha2 / (3600 * 24);
                    $list['data'][$k]['guoqi_days'] = "{$days2}天后过期";
                }
                $list['data'][$k]['ordainbegin'] = date('Y-m-d', $v['ordainbegin']);
                $list['data'][$k]['ordainend'] = date('Y-m-d', $v['ordainend']);
            }

        }
         
        return setRetrunData('success', $list);
    }
    
    /**
     * 根据墓穴ID查询预定信息
     * @return type
     */
    public function getReserveList($cid)
    {
        $list = $this->logicReserve->getReserveList(['a.cid'=>$cid],'a.*','id desc',false);
        if(!empty($list))
        {
            foreach ($list as $k => $v) {
            
                $list[$k]['guoqi_days'] = '';
                $list[$k]['guoqi_status'] = 0;

                $time_cha = strtotime(date('Y-m-d')) - $v['ordainend'];
                
                if ($time_cha > 0) {
                    $days = $time_cha / (3600 * 24);
                    $list[$k]['guoqi_days'] = "已过期{$days}天";
                    $list[$k]['guoqi_status'] = 1;
                }else{
                    $time_cha2 = $v['ordainend'] - strtotime(date('Y-m-d'));
                    $days2 = $time_cha2 / (3600 * 24);
                    $list[$k]['guoqi_days'] = "{$days2}天后过期";
                }
                $list[$k]['ordainbegin'] = date('Y-m-d', $v['ordainbegin']);
                $list[$k]['ordainend'] = date('Y-m-d', $v['ordainend']);
            }

        }
	return setRetrunData('success', $list);
    }

 
    public function reserveAdd()
    {
	return $this->logicReserve->reserveAdd($this->param);
    }

    public function reserveDel($id,$cid)
    {
        return $this->logicReserve->reserveDel($id,$cid);
    }

    public function reserveEdit()
    {
         return $this->logicReserve->reserveEdit($this->param);

    }
    
    /**
     * 预定到期时间过了之后自动修改墓穴状态以及删除预定信息
     */
    public function updateReserveState()
    {
         return $this->logicReserve->updateReserveState();
    }
}