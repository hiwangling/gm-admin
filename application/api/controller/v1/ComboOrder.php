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
class ComboOrder extends BaseController{
    //put your code here	
    public function comboOrderList()
    {
        $where = $this->logicComboOrder->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicComboOrder->getComboOrderList($where,true,'id desc',$limit);
	
        return setRetrunData('success', $list);
    }
   
    public function comboOrderAdd()
    {
	return $this->logicComboOrder->comboOrderAdd($this->param);
    }
    
}