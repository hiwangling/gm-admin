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
class Dplyfjtp extends BaseController{
    //put your code here	
    public function dplyfjtpList()
    {
        $where = $this->logicDplyfjtp->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicDplyfjtp->getDplyfjtpList($where,true,'id desc',$limit);
		
        return setRetrunData('success', $list->toArray());
    }
    
    public function dplyfjtpAdd()
    {
	return $this->logicDplyfjtp->dplyfjtpAdd($this->param);
    }

    public function dplyfjtpDel($id=0)
    {
        return $this->logicDplyfjtp->dplyfjtpDel($id);
    }

    public function dplyfjtpEdit()
    {
         return $this->logicDplyfjtp->dplyfjtpEdit($this->param);

    }
}