<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;

class CemeteryClassify extends BaseController
{

    /**
	  *获取墓穴全部分类
	  *
	**/
	public function cemeteryClassifyList(){
		
		$where['status'] = ['neq',-1]; 
		
		$list = $this->logicCemeteryClassify->getCemeteryClassifyList($where,'id,parent_id,type_name as text,sort,image_url','sort asc,id asc',false);
		
		$data = get_slect(json_decode(json_encode($list),true));
		
		return setRetrunData('success', $data);
		
	}


}