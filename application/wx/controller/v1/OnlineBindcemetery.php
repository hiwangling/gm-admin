<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;
class OnlineBindcemetery extends BaseController
{
	
	/**
     * 墓穴绑定信息列表
     */
  public function bindcemeteryList()
    {
	  
	  $where = $this->logicOnlineBindcemetery->getWhere($this->param);
	  
	  if(empty($where)){
		  
		  return setRetrunData('条件不能为空','',1);
	  }
	  
	  $list = $this->logicOnlineBindcemetery->bindcemeteryList($where,'a.*,c.cname,b.type_name classifyname,f.type_name typename,d.type_name stylename,e.type_name gardenname,h.bury_name,g.buyer_name as linkman,g.phone as linkphone','a.id asc',false);
	  
	  foreach($list as $k=>$v){
		  
		  $v['cemetery_name'] = $v['classifyname'].$v['cname'];
	  }
	  
	  return setRetrunData('success', $list);
	  
    }
	/**
     * 墓穴绑定信息
     */
	public function bindcemeteryInfo(){
		
		$where = $this->logicOnlineBindcemetery->getWhere($this->param);
		
		if(empty($where)){
		  
		  return setRetrunData('条件不能为空','',1);
	  }
		
		$info = $this->logicOnlineBindcemetery->bindcemeteryInfo($where,'a.*,c.cname,b.type_name classifyname,f.type_name typename,d.type_name stylename,e.type_name gardenname,h.bury_name,g.buyer_name as linkman,g.phone as linkphone');
		
		$info['cemetery_name'] = $info['classifyname'].$info['cname'];
		
		return setRetrunData('success', $info);
	}

	/**
     * 添加墓穴绑定信息
     */
  public function bindcemeteryAdd()
    {
	  
	  return $this->logicOnlineBindcemetery->bindcemeteryAdd($this->param);
	  
    }
	
	/**
     * 墓穴绑定信息修改为默认
     */
	public function bindcemeteryEditState(){
		
		$this->logicOnlineBindcemetery->bindcemeteryEdit(['uid'=>$this->param['uid']],['state'=>0]);//全部清0
		
		return $this->logicOnlineBindcemetery->bindcemeteryEdit(['id'=>$this->param['id']],['state'=>1]);
	}
	/**
     * 墓穴绑定删除
     */
  public function bindcemeteryDel($id=0)
    {
	  
	  return $this->logicOnlineBindcemetery->bindcemeteryDel(['id'=>$id]);
	  
    }
	

}