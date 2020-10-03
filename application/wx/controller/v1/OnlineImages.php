<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;
class OnlineImages extends BaseController
{
	
  public function imagesList()
    {
	  
		$where = $this->logicOnlineImages->getWhere($this->param);

		$list = $this->logicOnlineImages->getImagesList($where,'*','sort asc,id desc',false);
	  
	  	foreach($list as $k=>$v){
			$v['thumb'] = get_url().DS.$v['thumb'];
		}
	  
        return setRetrunData('success', $list);
	  
    }

}