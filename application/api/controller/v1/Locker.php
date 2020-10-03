<?php
namespace app\api\controller\v1;

use app\api\controller\BaseController;

class Locker extends BaseController
{
    public function lockerList()
    {
        $where = $this->logicLocker->getWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $lockers = $this->logicLocker->getLockerList($where, 'a.*,b.id as cid,c.id as order_id,b.buyer_name,b.phone,b.name,b.savebegindate,b.saveenddate,c.order_status', 'a.ix,a.iy asc', $limit);
        
        $locker_classly = parse_config_array('locker_classly');
        foreach ($lockers as $k=>$v) {
            $v['classly_name'] = !empty($v['classly'])?$locker_classly[$v['classly']]:'';
            
            $max_end_time = $this->logicOrder->getOrderInfo(['a.cid'=>$v['cid'],'a.financetype'=>9,'a.status'=>1], 'a.id,max(a.order_end) as order_end');
        
            if (!empty($max_end_time['order_end'])) {
                $v['order_end'] = $max_end_time['order_end'];
            } else {
                $v['order_end'] = $v['saveenddate'];
            }
        }
        
        //!empty($this->param['classly']) && $classly['a.classly'] = $data['classly'];
        
        $emptyWhere = array(
            'state' =>2,
            DATA_STATUS_NAME=>DATA_NORMAL
        );
        
        $holdWhere = array(
            'state'=>1,
            DATA_STATUS_NAME=>DATA_NORMAL
        );
        
        !empty($this->param['classly']) && $emptyWhere['classly'] = $holdWhere['classly'] = $this->param['classly'];
        
        $data = array(
            'list'=>$lockers,
            'empty'=>$this->logicLocker->getLockerStat($emptyWhere),
            'hold'=>$this->logicLocker->getLockerStat($holdWhere),
        );
        
        
        
        return setRetrunData('success', $data);
    }


    public function lockerAdd()
    {
        return $this->logicLocker->LockerAdd($this->param);
    }

    public function lockerDel($id=0)
    {
        return $this->logicLocker->LockerDel(['id'=>$id]);
    }

    public function lockerEdit()
    {
        return $this->logicLocker->LockerEdit($this->param);
    }
}
