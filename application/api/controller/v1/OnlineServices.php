<?php

namespace app\api\controller\v1;
use app\api\controller\BaseController;

class OnlineServices extends BaseController{
    
    /**
     * 服务列表
     * 
     */
    public function servicesList()
    {
		
        $where = $this->logicOnlineServices->getWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicOnlineServices->getOnlineServicesList($where,'a.*,o.title as shoptype_name','a.id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
	
	/**
     * 服务添加
     * 
     */
    public function servicesAdd()
    {
		
	return $this->logicOnlineServices->servicesAdd($this->param);
		
    }
	
	/**
     * 服务删除
     * 
     */
    public function servicesDel($id=0)
    {
		
       return $this->logicOnlineServices->servicesDel($id);
		
    }
	
	
	/**
     * 服务编辑
     * 
     */
    public function servicesEdit()
    {
		
       return $this->logicOnlineServices->servicesEdit($this->param);
		
    }
}