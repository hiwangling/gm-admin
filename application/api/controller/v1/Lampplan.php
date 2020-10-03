<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * Description of Dept
 *
 * @author Administrator
 */
class Lampplan extends BaseController{
    //put your code here	
    public function lampplanList()
    {
        $where = $this->logicLampplan->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicLampplan->getLampplanList($where,true,'id desc',$limit);
		
        return setRetrunData('success', $list->toArray());
    }
   
    public function lampplanAdd()
    {
        return $this->logicLampplan->lampplanAdd($this->param);
		
    }

    public function lampplanDel($id=0)
    {
        return $this->logicLampplan->lampplanDel($id);
    }

    public function lampplanEdit()
    {
         return $this->logicLampplan->lampplanEdit($this->param);

    }
}