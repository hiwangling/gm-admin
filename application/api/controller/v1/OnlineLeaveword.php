<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;
class OnlineLeaveword extends BaseController
{
	
    public function leavewordList()
    {
	  
		$where = $this->logicOnlineLeaveword->getWhere($this->param);
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
	  
	    $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$list = $this->logicOnlineLeaveword->getLeavewordList($where,'a.*,s.thumb as services_thumb,s.title as services_title,m.headimgurl,m.nickname,m.realname','a.id desc',$limit);
		
		foreach($list as $k=>$v){
			if(!empty($v['services_thumb'])){
				$v['services_thumb'] = get_url().DS.$v['services_thumb'];
		   }
		}
	  
        return setRetrunData('success', $list);
	  
    }

	
	public function leavewordDel(){
		
		return $this->logicOnlineLeaveword->leavewordDel(['id'=>$this->param['id']]);
	}

}