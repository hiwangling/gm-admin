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
class Stat extends BaseController
{
    
   /**
     * 退/迁 记录
     * @version v2;@editor Divider
     */
    public function quitOrder()
    {
        $where = $this->logicStat->getOrderWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        if ($this->param['financetype']==5) {
            $status=2;
        } elseif ($this->param['financetype']==6) {
            $status=3;
        } else {
            $status=1;
        }
        
        $list = $this->logicStat->getOrderList($where, 'a.*,f.type_name as classify_name,e.type_name as garden_name,h.type_name as style_name,c.cname,d.bury_name', 'a.order_begin desc', $limit, '', $status);
        
        return setRetrunData('success', $list);
    }
    
    
    /**
     * 换墓记录
     * @version v2;@editor Divider
     */
    public function tradeOrder()
    {
        $where = $this->logicStat->getHistoryWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicStat->getHistoryInfoList($where, 'a.*,b.buyer_name,b.sellname,b.sum_price,c.bury_name', 'b.order_begin desc', $limit);
        
        return setRetrunData('success', $list);
    }
    
    /**
     * 退/迁 月统计图
     * @version v2;@editor Divider
     */
    public function quitOrderMonthCartogram()
    {
        $years = date('Y');
        
        !empty($this->param['contrast_years'])&&$contrast_years = $this->param['contrast_years'];
        
        $list = $this->logicStat->quitOrderMonthCartogram($this->param['financetype'], $years);
        
        $data['month'] = array_values($this->logicStat->getMonth());
        
        $data['price'] = array_values($this->logicStat->getMonthData($list, 'price'));
        
        if (!empty($contrast_years)) {
            $contrast_list = $this->logicStat->quitOrderMonthCartogram($this->param['financetype'], $contrast_years);
            
            $data['contrast_price'] = array_values($this->logicStat->getMonthData($contrast_list, 'price'));
        }
        
        return setRetrunData('success', $data);
    }
    
    /**
     * 退/迁 区统计图
     * @version v2;@editor Divider
     */
    public function quitOrderClassifyCartogram()
    {
        $list = $this->logicStat->quitOrderClassifyCartogram($this->param);
        
        return setRetrunData('success', $list);
    }
    
    /**
     * 退/迁 获取年份
     * @version v2;@editor Divider
     */
    public function getYears()
    {
        $years = $this->logicStat->getYears();
        
        return setRetrunData('success', $years);
    }
    
    /**
     * 购墓订单年统计
     * @version v2;@editor Divider
     */
    public function buyOrderYears()
    {
        $buyOrder = $this->logicStat->getBuryYearsOrder();

        return setRetrunData('success', $buyOrder);
    }
    
    /**
     * 购墓订单月统计
     * @version v2;@editor Divider
     */
    public function buyOrderMonth()
    {
        !empty($this->param['contrast_years'])&&$contrast_years = $this->param['contrast_years'];
        
        $where = $this->param;
        
        $where['contrast_years'] = !empty($this->param['years'])?$this->param['years']:date('Y');
        
        $buyOrder = $this->logicStat->getBuryMonthOrder($where);
  
        $data['month'] = array_values($this->logicStat->getMonth());
        
        $data['price'] = array_values($this->logicStat->getMonthData($buyOrder, 'price'));
        
        $data['number'] = array_values($this->logicStat->getMonthData($buyOrder, 'number'));
        
        $data['list'] = array_values($this->logicStat->getMonthData($buyOrder, 'all'));
        
        if (!empty($contrast_years)) {
            $contrast_list = $this->logicStat->getBuryMonthOrder($this->param);
            
            $data['contrast_price'] = array_values($this->logicStat->getMonthData($contrast_list, 'price'));
        }

        return setRetrunData('success', $data);
    }
    
    /**
     * 购墓订单区统计
     * @version v2;@editor Divider
     */
    
    public function buyOrderClassify()
    {
        $where = $this->param;
        
        $where['contrast_years'] = !empty($this->param['years'])?$this->param['years']:date('Y');

        $buyOrder = $this->logicStat->getBuryClassifyOrder($where, 'c.id');

        return setRetrunData('success', $buyOrder);
    }
    
    /**
     * 购墓订单金额统计
     * @version v2;@editor Divider
     */
    public function buyOrderPrice()
    {
        $where = $this->param;
        
        $where['contrast_years'] = !empty($this->param['years'])?$this->param['years']:date('Y');

        $buyOrder = $this->logicStat->getOrderStat($this->param, 'count(a.id) as number,sum(a.sum_price) as price,a.sum_price', 'a.sum_price');
    
        return setRetrunData('success', $buyOrder);
    }
    
    /**
     * 购墓服务统计
     * @version v2;@editor Divider
     */
    public function OrderDetailStat()
    {
        $buyOrder = $this->logicStat->getOrderDetailStat($this->param);
    
        return setRetrunData('success', $buyOrder);
    }
    
    /**
     * 安葬统计记录
     * @version v2;@editor Divider
     */
    public function buryStatList()
    {
        $where = $this->logicStat->getBuryWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicStat->getBuryList($where, 'a.*,f.type_name as classify_name,e.type_name as garden_name,h.type_name as style_name,c.cname', 'a.bury desc', $limit);
        
        return setRetrunData('success', $list);
    }
    
    /**
     * 安葬月份统计
     * @version v2;@editor Divider
     */
    public function buryMonthStat()
    {
        $list = $this->logicStat->getBuryStat($this->param, "count(a.id) as number,DATE_FORMAT(a.bury, '%m') as months", "DATE_FORMAT(a.bury, '%Y-%m')");
        
        $data['month'] = array_values($this->logicStat->getMonth());
        
        $data['number'] = array_values($this->logicStat->getMonthData($list, 'number'));
        
        return setRetrunData('success', $data);
    }
    
    /**
     * 安葬饼状统计
     * @version v2;@editor Divider
     */
    public function buryTypeStat()
    {
        $list['sex'] = $this->logicStat->getBuryStat($this->param, "count(a.id) as number,a.sex as title", "a.sex");
        
        $ageList = $this->logicStat->getBuryStat($this->param, "count(a.id) as number,a.age", "a.age", 'a.age asc');
        
        $ageStat = array();
        
        $ageWhere = array('0-10','11-20','21-30','31-40','41-50','51-60','70-100','100-200');
        
        
            
        foreach ($ageWhere as $key=>$val) {
            $section = explode('-', $val);
    
            $ageStat[$key]['number'] = 0;
            $ageStat[$key]['title'] = $val;
            foreach ($ageList as $k=>$v) {
                if ($section[0]<=$v['age'] && $v['age']<=$section[1]) {
                    $ageStat[$key]['number'] +=$v['number'];
                }
            }
        }
        
        $list['age'] = $ageStat;
        return setRetrunData('success', $list);
    }
    
    /**
     * 获取日数据统计数据
     * @version v2;@editor Divider
     */
    public function orderDateStat()
    {
        $list = $this->logicStat->orderDateStat($this->param);
        
        $data['days'] = $this->logicStat->getDays();
        
        $data['number'] = $this->logicStat->getMonthData($list, 'number', 'days', 2);
        
        return setRetrunData('success', $data);
    }
    
    /**
     * 获取订单数据详情列表
     * @version v2;@editor Divider
     */
    public function orderListPage()
    {
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicStat->getOrderListPage($this->param, 'a.id,f.bury_name,a.cid,a.buyer_name,a.relation,a.phone,a.paytime,a.sum_price,a.sellname,b.cname,c.type_name as garden_name,d.type_name as classify_name,e.type_name as style_name', 'a.paytime desc', $limit);
        
        $count = $this->logicStat->getOrderListCount($this->param);
        
        $data = array(
            'total'=>$count[0]['number'],
            'per_page'=>$limit,
            'current_page'=>$this->param['page'],
            'last_page'=>ceil($count[0]['number']/$limit),
            'data'=>$list
        );
        
        return setRetrunData('success', $data);
    }
    
    /**
     * 获取今日订单数据
     * @version v2;@editor Divider
     */
    public function orderTodayStat()
    {
        $where = $this->logicStat->getOrderWhere($this->param);
        
        if (empty($where['a.paytime'])) {
            $start_time=strtotime(date("Y-m-d", time()));
            $end_time=$start_time+60*60*24;
            $where['a.paytime'] = [['egt',$start_time],['elt',$end_time],"AND"];
        }
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicStat->getOrderAllList($where, 'a.*,f.type_name as classify_name,e.type_name as garden_name,h.type_name as style_name,c.cname', 'a.paytime desc', $limit, '');
        
        $financetype = parse_config_array('financetype');
        
        foreach ($list as $k=>$v) {
            $v['financetype_name'] = $financetype[$v['financetype']];
        }
        
        return setRetrunData('success', $list);
    }
}
