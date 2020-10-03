<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;
class OnlineServices extends BaseController
{
	
  public function servicesList()
    {
	  
		$where = [];//$this->logicOnlineServices->getWhere($this->param);

		$list = $this->logicOnlineServices->servicesAllList($where,'a.*,o.title as shoptype_name,o.thumb as shoptype_thumb,o.id as shoptype_id','a.sort asc,a.id desc',false);
	  
	   
        return setRetrunData('success', $list);
	  
    }
	
 /*
 *分类查询商品
 */
  public function servicesListSearch(){
	  
	  $where = $this->logicOnlineServices->getWhere($this->param);
	  
	  $list = $this->logicOnlineServices->getServicesList($where,'a.*,o.title as shoptype_name','a.sort asc,a.id desc',false);
	  
	   foreach($list as $k=>$v){
			$v['thumb'] = get_url().DS.$v['thumb'];
		}
	  
	  
	  return setRetrunData('success', $list);
	  
  }

  /*
 *   商品详情
 */
 public function servicesInfo(){
	 
	 $where['a.id'] = $this->param['id'];
	 
	 $info = $this->logicOnlineServices->getServicesInfo($where,'a.*,o.title as shoptype_name');
	 
	 $info['thumb'] = get_url().DS.$info['thumb'];
	 
	 return setRetrunData('success', $info);
 }
	

}