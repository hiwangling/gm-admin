<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class CemeteryType extends BaseController
{
    
	
    public function cemeteryTypeList()
    {
        $where = $this->logicCemeteryType->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicCemeteryType->getCemeteryTypeList($where,true,'id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }

 
    public function cemeteryTypeAdd()
    {
	return $this->logicCemeteryType->CemeteryTypeAdd($this->param);
    }

    public function cemeteryTypeDel($id=0)
    {
        return $this->logicCemeteryType->CemeteryTypeDel(['id'=>$id]);
    }

    public function cemeteryTypeEdit()
    {
	return $this->logicCemeteryType->CemeteryTypeEdit($this->param);

    }
}