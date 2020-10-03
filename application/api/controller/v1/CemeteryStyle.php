<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class CemeteryStyle extends BaseController
{
    
	public function getCemeteryStyles()
        {
            $where = [];
            $list = $this->logicCemeteryStyle->getCemeteryStyleList($where,true,'id desc',false);
            return setRetrunData('success', $list);

	}

	public function cemeteryStyleList()
        {
            $where = $this->logicCemeteryStyle->getWhere($this->param);
            $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
            $list = $this->logicCemeteryStyle->getCemeteryStyleList($where,true,'id desc',$limit);
            return setRetrunData('success', $list->toArray());
	}

	public function cemeteryStyleAdd(){

		return $this->logicCemeteryStyle->cemeteryStyleAdd($this->param);
	
	}
	public function cemeteryStyleEdit(){

		return $this->logicCemeteryStyle->cemeteryStyleEdit($this->param);
	}

	public function cemeteryStyleDel($id=0){

		return $this->logicCemeteryStyle->cemeteryStyleDel(['id'=>$id]);

	}



	
}