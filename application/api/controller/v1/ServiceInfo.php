<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class ServiceInfo extends BaseController
{
    /**
     * 服务信息列表查询
     * @return type
     */
    public function serviceInfoList()
    {
        $where = $this->logicServiceInfo->getWhere($this->param);
		
        //$where['service_type'] = array('neq',10);
		
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicServiceInfo->getServiceInfoList($where,true,'id desc',$limit);
		
        return setRetrunData('success', $list->toArray());
    }

    /**
     * 根据服务类型查询服务信息
     */
    public function  getServiceInfo($typeid)
    {
        $servicelist = $this->logicServiceInfo->getServiceInfoList(['service_type'=>$typeid],true,'id asc',false);
	return setRetrunData('success', $servicelist);
    }
    
    public function serviceInfoAdd()
    {
		return $this->logicServiceInfo->serviceInfoAdd($this->param);
    }

    public function serviceInfoDel($id=0)
    {
        return $this->logicServiceInfo->serviceInfoDel(['id'=>$id]);
    }

    public function serviceInfoEdit()
    {
        return $this->logicServiceInfo->serviceInfoEdit($this->param);
    }
    
     /**
     * 获取所有服务
     */
    public function getServicesAll()
    {
        return $this->logicServiceInfo->getServicesList($this->param);
    }
    
     /**
     * 获取所有套餐的详细服务
     */
    public function getComboServicesAll()
    {
        return $this->logicServiceInfo->getComboServicesAll($this->param);
    }
    
    /**
     * 获取所有服务和套餐服务的详细服务
     */
    public function getComboServicesList()
    {
        return $this->logicServiceInfo->getComboServicesList($this->param);
    }
    
    /**
     * 点灯价格信息查询
     * @return type
     */
    public function lightupInfoList()
    {
        $where['service_type'] = 10;

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicServiceInfo->getServiceInfoList($where,true,'id desc',$limit);
		
        return setRetrunData('success', $list->toArray());

    }
    
    /**
     * 点灯价格信息编辑
     * @return type
     */
    public function lightupInfoEdit()
    {
        return $this->logicServiceInfo->lightupInfoEdit($this->param);
    }
}