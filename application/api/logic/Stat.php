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

use think\Db;

/**
 * 统计信息逻辑
 */
class Stat extends BaseLogic
{
    
    /**
     * 获取订单列表
     * @version v2;@editor Divider
     */
    public function getOrderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS, $group='', $status=1)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOrder->alias('a');
        
        $join = [
            
            [SYS_DB_PREFIX . 'order_detail b', 'b.order_id = a.id AND b.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery c', 'c.id = a.cid', 'left'],
            [SYS_DB_PREFIX . 'cemetery_auxiliary d', 'd.cid = a.cid AND d.status='.$status, 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify f', 'f.id = c.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style h', 'h.id = c.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = c.garden_id', 'left'],
        ];

        return $this->modelOrder->getList($where, $field, $order, $paginate, $join, $group);
    }
    
    /**
     * 获取订单列表
     * @version v2;@editor Divider
     */
    public function getOrderAllList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS, $group='')
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOrder->alias('a');
        
        $join = [
            
            [SYS_DB_PREFIX . 'order_detail b', 'b.order_id = a.id AND b.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery c', 'c.id = a.cid', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify f', 'f.id = c.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style h', 'h.id = c.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = c.garden_id', 'left'],
        ];

        return $this->modelOrder->getList($where, $field, $order, $paginate, $join, $group);
    }
    
    /**
     * 获取订单搜索条件
     * @version v2;@editor Divider
     */
    public function getOrderWhere($data=[])
    {
        $where=[];
        
        !empty($data['cid']) && $where['a.cid'] = $data['cid'];
        
        !empty($data['garden_id']) && $where['c.garden_id'] = $data['garden_id'];
        
        !empty($data['classify_id']) && $where['c.classify_id'] = $data['classify_id'];
        
        !empty($data['style_id']) && $where['c.style_id'] = $data['style_id'];
        
        !empty($data['financetype']) && $where['a.financetype'] = $data['financetype'];
        
        !empty($data['keyword']) && $where['a.buyer_name|c.cname|d.bury_name|d.pym'] = ['like', '%'.$data['keyword'].'%'];
        
        !empty($data['search_data']) && $where['a.buyer_name|c.cname'] = ['like', '%'.$data['search_data'].'%'];
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where['a.order_begin'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];
        }
        
        if (!empty($data['paystartime']) && !empty($data['payendtime'])) {
            $where['a.paytime'] = [['egt',strtotime($data['paystartime'])],['elt',strtotime($data['payendtime'])],"AND"];
        }
        
        return $where;
    }
    
    /**
     * 获取换墓列表
     * @version v2;@editor Divider
     */
    public function getHistoryInfoList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS, $group='')
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelHistoryInfo->alias('a');
        
        $join = [
            
            [SYS_DB_PREFIX . 'order b', 'b.id = a.order_id AND b.status=1 AND b.financetype=4', 'left'],
            
            [SYS_DB_PREFIX . 'cemetery_auxiliary c', 'c.cid = a.new_cid AND c.status=1', 'left'],

        ];
        
        return $this->modelHistoryInfo->getList($where, $field, $order, $paginate, $join, $group);
    }
    
    /**
     * 获取换墓列表搜索条件
     * @version v2;@editor Divider
     */
    public function getHistoryWhere($data=[])
    {
        $where=[];
        
        !empty($data['keyword']) && $where['a.old_cname|a.new_cname|c.bury_name|c.pym|b.buyer_name'] = ['like', '%'.$data['keyword'].'%'];
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where['b.order_begin'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];
        }
        
        return $where;
    }
    
    /**
     * 获取业务年份
     * @version v2;@editor Divider
     */
    public function getYears()
    {
        $sql = "SELECT DATE_FORMAT(order_begin, '%Y') as years FROM `ky_order` where status!=-1 GROUP BY DATE_FORMAT(order_begin, '%Y')";
        
        $list = $this->modelOrder->query($sql);
        
        $years = array();
        
        foreach ($list as $k=>$v) {
            $years[$k] = $v['years'];
        }
        
        return $years;
    }
    
    /**
     * 获取业务月份
     * @version v2;@editor Divider
     */
    public function getMonth()
    {
        $month = array(
            1=>'一月',
            2=>'二月',
            3=>'三月',
            4=>'四月',
            5=>'五月',
            6=>'六月',
            7=>'七月',
            8=>'八月',
            9=>'九月',
            10=>'十月',
            11=>'十一月',
            12=>'十二月'
        );
        
        return $month;
    }
    
    /**
     * 获取业务日期
     * @version v2;@editor Divider
     */
    public function getDays()
    {
        $BeginDate=date('Y-m-01', strtotime(date("Y-m-d")));
        $endDay = date('d', strtotime("$BeginDate +1 month -1 day"));
        $days = array();
        for ($i=1;$i<=intval($endDay);$i++) {
            $days[] = $i;
        }
        return $days;
    }
    
    /**
     * 获取退/迁 月数据统计数据
     * @version v2;@editor Divider
     */
    public function quitOrderMonthCartogram($financetype, $years)
    {
        $sql = "SELECT count(id) as number,sum(sum_price) as price,FROM_UNIXTIME(paytime, '%m') as months FROM `ky_order` where status!=-1 AND financetype =".$financetype." AND FROM_UNIXTIME(paytime, '%Y')=".$years." GROUP BY FROM_UNIXTIME(paytime, '%Y-%m')";
        $list = $this->modelOrder->query($sql);
        return $list;
    }
    
    /**
     * 获取日期数据统计数据
     * @version v2;@editor Divider
     */
    
    /**
     * 获取日期数据统计数据
     * @version v2;@editor Divider
     */
    public function orderDateStat($data=[])
    {
        $where = '';
        
        if (!empty($data['financetype'])) {
            $where .= ' AND a.financetype='.$data['financetype'];
        }
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.paytime>='.strtotime($data['startime']).' AND a.paytime<='.strtotime($data['endtime']);
        } elseif (!empty($data['days'])) {
            $where .= " AND FROM_UNIXTIME(a.paytime,'%Y-%m')='".$data['days']."'";
        } else {
            $where .= " AND FROM_UNIXTIME(a.paytime,'%Y-%m')='".date('Y-m')."'";
        }
        
        $sql = "SELECT count(a.id) as number,sum(a.sum_price) as price,FROM_UNIXTIME(a.paytime, '%d') as days FROM `ky_order` a
left join ky_cemetery b on a.cid=b.id
where a.status!=-1".$where." GROUP BY FROM_UNIXTIME(a.paytime, '%Y-%m-%d')";
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    /**
     * 获取退/迁 区数据统计数据
     * @version v2;@editor Divider
     */
    public function quitOrderClassifyCartogram($data=[])
    {
        $where = '';
        if (!empty($data['financetype'])) {
            $where .= ' AND a.financetype='.$data['financetype'];
        } else {
            $where .= ' AND a.financetype=2';
        }
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.order_begin>='.$data['startime'].' AND a.order_begin<='.$data['endtime'];
        } elseif (!empty($data['contrast_years'])) {
            $where .= ' AND year(a.order_begin)='.$data['contrast_years'];
        } else {
            $where .= ' AND year(a.order_begin)='.date('Y');
        }
        
        $sql = "select count(a.id) as number,sum(a.sum_price) as price,b.classify_id,c.type_name from ky_order a 
left join ky_cemetery b on a.cid = b.id
left join ky_cemetery_classify c on c.id = b.classify_id
where a.status!=-1".$where." GROUP BY c.id";
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }

    /**
     * 根据月份获取相应月份数据
     * @version v2;@editor Divider
     */
    public function getMonthData($list=[], $type='price', $keys='months', $step=1)
    {
        if ($step==1) {
            $month = $this->getMonth();
        } else {
            $month = $this->getDays();
        }
        
        
        $dataPrice = array();
        
        $dataNumber = array();
        
        $dataAll = array();
    
        foreach ($month as $k=>$v) {
            foreach ($list as $key=>$val) {
                if (intval($val[$keys])==$k) {
                    $dataPrice[$k] = $dataAll[$k]['price'] =!empty($val['price'])?$val['price']:0;
                    $dataNumber[$k] = $dataAll[$k]['number'] =!empty($val['number'])?$val['number']:0;
                }
            }
            
            $dataPrice[$k] = !empty($dataPrice[$k])?$dataPrice[$k]:0;
            $dataNumber[$k] = !empty($dataNumber[$k])?$dataNumber[$k]:0;
            $dataAll[$k]['number'] = !empty($dataAll[$k]['number'])?$dataAll[$k]['number']:0;
            $dataAll[$k]['price'] = !empty($dataAll[$k]['price'])?$dataAll[$k]['price']:0;
        }
        
        if ($type=='price') {
            return $dataPrice;
        } elseif ($type=='number') {
            return $dataNumber;
        } elseif ($type=="all") {
            return $dataAll;
        }
    }
    
    /**
     * 查询年度墓穴销售额
     * @version v2;@editor Divider
     */
    public function getBuryYearsOrder()
    {
        $sql = "select (IFNULL(a.number,0)-IFNULL(b.number,0)) as buy_number,(IFNULL(a.price,0)-IFNULL(b.price,0)) as buy_price,a.number as number,a.price as price,b.number as quit_number,b.price as quit_price,a.years from (
SELECT count(id) as number,sum(sum_price) as price,FROM_UNIXTIME(paytime, '%Y') as years  FROM `ky_order` where status!=-1 AND financetype =2 AND ISNULL(paytime)=0 and LENGTH(trim(paytime))>0 GROUP BY FROM_UNIXTIME(paytime, '%Y')
) a left join (
SELECT count(id) as number,sum(sum_price) as price,FROM_UNIXTIME(paytime, '%Y') as years FROM `ky_order` where status!=-1 AND financetype =6 AND ISNULL(paytime)=0 and LENGTH(trim(paytime))>0 GROUP BY FROM_UNIXTIME(paytime, '%Y')
) b on a.years=b.years order by years asc limit 5";
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    /**
     * 查询月度墓穴销售额
     * @version v2;@editor Divider
     */
    public function getBuryMonthOrder($data=[])
    {
        $where = '';
        if (!empty($data['contrast_years'])) {
            $where .= " AND FROM_UNIXTIME(a.paytime, '%Y')=".$data['contrast_years'];
        }
        
        if (!empty($data['classify_id'])) {
            $where .= " AND b.classify_id=".$data['classify_id'];
        }
        
        $sql ="SELECT (IFNULL(a.number,0)-IFNULL(b.number,0)) as buy_number,(IFNULL(a.price,0)-IFNULL(b.price,0)) as buy_price,a.number as number,a.price as price,b.number as quit_number,b.price as quit_price,a.months FROM (
SELECT count(a.id) as number,sum(a.sum_price) as price,FROM_UNIXTIME(a.paytime, '%m') as months FROM `ky_order` a
left JOIN ky_cemetery b on a.cid=b.id
where a.status!=-1 AND a.financetype =2".$where." GROUP BY FROM_UNIXTIME(paytime, '%Y-%m')
) a left JOIN (
SELECT count(a.id) as number,sum(a.sum_price) as price,FROM_UNIXTIME(a.paytime, '%m') as months FROM `ky_order` a
left JOIN ky_cemetery b on a.cid=b.id
where a.status!=-1 AND a.financetype =6".$where." GROUP BY FROM_UNIXTIME(paytime, '%Y-%m')
) b on a.months=b.months order by months asc";
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    /**
     * 查询区墓穴销售额
     * @version v2;@editor Divider
     */
    public function getBuryClassifyOrder($data=[], $group='')
    {
        $where = '';
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.paytime>='.strtotime($data['startime']).' AND a.paytime<='.strtotime($data['endtime']);
        } elseif (!empty($data['contrast_years'])) {
            $where .= " AND FROM_UNIXTIME(a.paytime, '%Y')=".$data['contrast_years'];
        }
        
        $sql = "select (IFNULL(a.number,0)-IFNULL(b.number,0)) as buy_number,(IFNULL(a.price,0)-IFNULL(b.price,0)) as buy_price,a.number as number,a.price as price,b.number as quit_number,b.price as quit_price,a.classify_id,a.type_name,a.sort from (
select count(a.id) as number,sum(a.sum_price) as price,b.classify_id,c.type_name,c.sort from ky_order a 
left join ky_cemetery b on a.cid = b.id
left join ky_cemetery_classify c on c.id = b.classify_id
where a.status!=-1 AND a.financetype=2".$where." GROUP BY ".$group."
) a left join (
select count(a.id) as number,sum(a.sum_price) as price,b.classify_id,c.type_name,c.sort from ky_order a 
left join ky_cemetery b on a.cid = b.id
left join ky_cemetery_classify c on c.id = b.classify_id
where a.status!=-1 AND a.financetype=6".$where." GROUP BY ".$group."
) b on a.classify_id=b.classify_id order by sort asc";
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    /**
     * 查询墓穴销售额通用统计
     * @version v2;@editor Divider
     */
    public function getOrderStat($data=[], $field='', $group='')
    {
        $where = '';
        
        if (!empty($data['financetype'])) {
            $where .= ' AND a.financetype='.$data['financetype'];
        }
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.paytime>='.strtotime($data['startime']).' AND a.paytime<='.strtotime($data['endtime']);
        } elseif (!empty($data['contrast_years'])) {
            $where .= " AND FROM_UNIXTIME(a.paytime, '%Y')=".$data['contrast_years'];
        } else {
            $where .= " AND FROM_UNIXTIME(a.paytime, '%Y')=".date('Y');
        }
        
        if (!empty($data['classify_id'])) {
            $where .= " AND b.classify_id=".$data['classify_id'];
        }
    
        
        $sql = "select ".$field." from ky_order a 
left join ky_cemetery b on a.cid = b.id
left join ky_cemetery_classify c on c.id = b.classify_id
where a.status!=-1".$where." GROUP BY ".$group;
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    /**
     * 查询服务销售统计
     * @version v2;@editor Divider
     */
    public function getOrderDetailStat($data=[])
    {
        $where='';
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND b.paytime>='.strtotime($data['startime']).' AND b.paytime<='.strtotime($data['endtime']);
        } elseif (!empty($data['contrast_years'])) {
            $where .= " AND FROM_UNIXTIME(b.paytime, '%Y')=".$data['contrast_years'];
        } else {
            $where .= " AND FROM_UNIXTIME(b.paytime, '%Y')=".date('Y');
        }
        
        if (!empty($data['sid'])) {
            $where .= ' AND a.sid in('.implode(',', $data['sid']).')';
        }
        
        $sql = "select a.id,a.order_id,a.sid,a.sell_title,sum(a.amount) as number,a.chargeunit,sum(a.real_price) as price from ky_order_detail a 
left join ky_order b on a.order_id=b.id
where a.status in(1,2) AND a.sell_title_id=3".$where." GROUP BY a.sid order by a.sid asc";
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    
    /**
     * 获取逝者信息列表
     * @version v2;@editor Divider
     */
    public function getBuryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS, $group='')
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelBury->alias('a');
        
        $join = [
            
            [SYS_DB_PREFIX . 'cemetery c', 'c.id = a.cid', 'left'],
            [SYS_DB_PREFIX . 'cemetery_auxiliary d', 'd.cid = a.cid AND d.status=a.status', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify f', 'f.id = c.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style h', 'h.id = c.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = c.garden_id', 'left'],

        ];
        
        return $this->modelBury->getList($where, $field, $order, $paginate, $join, $group);
    }
    
    public function getBuryWhere($data=[])
    {
        $where=[];
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where['a.bury'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];
        }
        
        !empty($data['keyword']) && $where['a.vcname'] = ['like', '%'.$data['keyword'].'%'];
        
        !empty($data['garden_id']) && $where['c.garden_id'] = $data['garden_id'];
        
        !empty($data['classify_id']) && $where['c.classify_id'] = $data['classify_id'];
        
        !empty($data['style_id']) && $where['c.style_id'] = $data['style_id'];
        
        return $where;
    }
    
    public function getBuryStat($data=[], $field, $group, $order='a.bury desc')
    {
        $where='';
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.bury>='.$data['startime'].' AND b.bury<='.$data['endtime'];
        } elseif (!empty($data['years'])) {
            $where .= " AND DATE_FORMAT(a.bury, '%Y')=".$data['years'];
        } else {
            $where .= " AND DATE_FORMAT(a.bury, '%Y')=".date('Y');
        }
        
        $sql="select ".$field." from ky_bury a 
left join ky_cemetery b on a.cid=b.id
where a.status!=-1".$where." GROUP BY ".$group." order by ".$order;
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    public function getOrderListPage($data=[], $field, $order, $limit)
    {
        if ($data['page']==1) {
            $startLimit = 0;
        } else {
            $startLimit = (intval($data['page'])-1)*$limit;
        }
        
        $where = '';
        
        if (!empty($data['financetype'])) {
            $where .= ' AND a.financetype='.$data['financetype'];
        }
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.paytime>='.strtotime($data['startime']).' AND a.paytime<='.strtotime($data['endtime']);
        } elseif (!empty($data['days'])) {
            $where .= " AND FROM_UNIXTIME(a.paytime,'%Y-%m')='".$data['days']."'";
        } else {
            $where .= " AND FROM_UNIXTIME(a.paytime,'%Y-%m')='".date('Y-m')."'";
        }
        
        $sql="SELECT ".$field." FROM ky_order a
left join ky_cemetery b on a.cid=b.id
left JOIN ky_cemetery_classify c on b.garden_id=c.id
left JOIN ky_cemetery_classify d on b.classify_id=d.id
left join ky_cemetery_style e on b.style_id = e.id
left join ky_cemetery_auxiliary f on a.cid=f.cid AND a.status=f.status AND a.axid=f.id
where a.status!=-1".$where." order by ".$order." limit ".$startLimit.",".$limit;
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
    
    public function getOrderListCount($data=[])
    {
        $where = '';
        
        if (!empty($data['financetype'])) {
            $where .= ' AND a.financetype='.$data['financetype'];
        }
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where .= ' AND a.paytime>='.strtotime($data['startime']).' AND a.paytime<='.strtotime($data['endtime']);
        } elseif (!empty($data['days'])) {
            $where .= " AND FROM_UNIXTIME(a.paytime,'%Y-%m')='".$data['days']."'";
        } else {
            $where .= " AND FROM_UNIXTIME(a.paytime,'%Y-%m')='".date('Y-m')."'";
        }
        
        $sql = "SELECT count(a.id) as number FROM ky_order a
		left join ky_cemetery b on a.cid=b.id where a.status!=-1".$where;
        
        $list = $this->modelOrder->query($sql);
        
        return $list;
    }
}
