<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class Servicebill extends BaseController
{
    
    /**
     * 执行服务
     * @return type
     */
    public function ServicebillExecute()
    {
        if(empty($this->param["userid"]))
        {
            $this->param['userid']=$this->mid;
        }
        if(empty($this->param["username"]))
        {
            $this->param['username']=$this->getSellname();
        }
        
	return $this->logicServicebill->ServicebillExecute($this->param);
    }
    
    /**
     * 获取单个服务工单信息
     * @param type $id
     * @return type
     */
    public function getServicebillOne($id)
    {
        $one_service = $this->logicServicebill->getServicebillInfo(['id' => $id],'*');
        if ($one_service) {
            $one_service['execdate'] = date('Y-m-d', $one_service['execdate']);
            return setRetrunData('success', $one_service);
        }
        else
        {
            return setRetrunData('无数据', [],1);
        }
    }
    
    /**
     * 根据墓穴ID获取服务工单
     * @param type $cid
     * @return type
     */
    public function getServicebillByCid($cid)
    {
        $service_bills = $this->logicServicebill->getServicebillList(['cid' => $cid],'id,service_name,serviceamount,begindate,enddate,resutlstatus','begindate asc',false);
        if ($service_bills) {
            foreach ($service_bills as $k => $v) {
                $service_bills[$k]['begindate'] = date('Y-m-d', $v['begindate']);
                $service_bills[$k]['enddate'] = date('Y-m-d', $v['enddate']);
            }
        }
        return setRetrunData('success', $service_bills);
    }
    
    /**
     * 服务订单列表
     * @return type
     */
    public function serviceInfosByCemetery()
    {
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        $cids = [];
        $where = [];
        if (!empty($this->param['keyword'])) {
            $where2['a.vno|a.cname'] = array('like', '%' . $keyword . '%');
            $cemetery = $this->logicCemetery->getCemeteryList($where2,'a.*','a.id asc',false);
            if ($cemetery) {
                foreach ($cemetery as $k => $v) {
                    $cids[] = $v['id'];
                }
            }
        }
        if ($cids) {
            $where['cid'] = array('in', $cids);
        }
        if (!$this->manager->isadmin) {
            $m_branch = $this->manager->deptid;
            $serviceinfos = $this->logicServiceInfo->getServiceInfoList(['deptid'=> $m_branch],'*','id asc',false);
            if (!$serviceinfos)
                return setRetrunData('success', []);
            $service_ids = [];
            foreach ($serviceinfos as $k => $v) {
                $service_ids[] = $v['id'];
            }
            $where['service_id'] = array('in', $service_ids);
        }
        
        $orders = $this->logicServicebill->getServicebillListGroup($where,'cid','id asc',$limit,'cid');
        if ($orders->isEmpty()) {
            return setRetrunData('success', []);
        }
        $datas = $orders->toArray();

        foreach ($datas['data'] as $k => $v) {
            $datas['data'][$k]['cname'] = $this->logicCemetery->getCemeteryFullName($v['cid']);
            $datas['data'][$k]['vcname'] = $this->logicBury->getBuryNames($v['cid']);
            $datas['data'][$k]['finish_num'] = $this->logicServicebill->getServiceNum(['cid' => $v['cid'],'resutlstatus' =>2]);
            $datas['data'][$k]['to_be_com_num'] = $this->logicServicebill->getServiceNum(['cid' => $v['cid'],'resutlstatus' =>1]);
            $datas['data'][$k]['wancheng_status'] = $datas['data'][$k]['to_be_com_num'] > 0 ? '1' : '2';
        }
        return setRetrunData('success', $datas);
    }
    
    /**
     * 根据部门查询服务列表
     * @return type
     */
    public function serviceInfosByCemeteryDept()
    {
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        $where = [];
        $cids = [];
        if (!empty($this->param['keyword'])) {
            $where2['a.vno|a.cname'] = array('like', '%' . $keyword . '%');
            $cemetery = $this->logicCemetery->getCemeteryList($where2,'a.*','a.id asc',false);
            if ($cemetery) {
                foreach ($cemetery as $k => $v) {
                    $cids[] = $v['id'];
                }
            }
        }
        if ($cids) {
            $where['cid'] = array('in', $cids);
        }
        $m_branch = $this->manager->deptid;
        $serviceinfos = $this->logicServiceInfo->getServiceInfoList(['deptid'=> $m_branch],'*','id asc',false);
        if (!$serviceinfos)
            return setRetrunData('success', []);
        $service_ids = [];
        foreach ($serviceinfos as $k => $v) {
            $service_ids[] = $v['id'];
        }
        $where['service_id'] = array('in', $service_ids);
        $orders = $this->logicServicebill->getServicebillListGroup($where,'cid','id asc',$limit,'cid');
        if ($orders->isEmpty()) {
            return setRetrunData('success', []);
        }
        $datas = $orders->toArray();
        foreach ($datas['data'] as $k => $v) {
            $datas['data'][$k]['cname'] = $this->logicCemetery->getCemeteryFullName($v['cid']);
            $datas['data'][$k]['vcname'] = $this->logicBury->getBuryNames($v['cid']);
            $datas['data'][$k]['finish_num'] = $this->logicServicebill->getServiceNum(['cid' => $v['cid'],'resutlstatus' =>2]);
            $datas['data'][$k]['to_be_com_num'] = $this->logicServicebill->getServiceNum(['cid' => $v['cid'],'resutlstatus' =>1]);
            $datas['data'][$k]['wancheng_status'] = $datas['data'][$k]['to_be_com_num'] > 0 ? '1' : '2';
        }
        return setRetrunData('success', $datas);

    }
    
    /**
     * 待处理任务数量
     * @return type
     */
    public function getServiceDaiChuliCount()
    {
        $count = $this->logicServicebill->getServiceNum(['resutlstatus' =>1]);
        return setRetrunData('success', ['count' => $count]);
    }
    
}