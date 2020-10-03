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
class Dept extends BaseController{
    //put your code here	
	public function DeptList()
    {
		$where = $this->logicdept->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicDept->getDeptList($where,true,'id desc',$limit);
		
        return setRetrunData('success', $list);
    }
   public function DeptAllName()
    {
          $deptlist = $this->logicdept->getDeptList([DATA_STATUS_NAME=>1],'id,vcname','id desc',false);
	  return setRetrunData('success', $deptlist);
    }

 
    public function DeptAdd()
    {
		return $this->logicDept->DeptAdd($this->param);
		
    }

    public function DeptDel($id=0)
    {
        return $this->logicDept->DeptDel($id);
    }

    public function DeptEdit()
    {
         return $this->logicDept->DeptEdit($this->param);

    }
}