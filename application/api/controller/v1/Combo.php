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
class Combo extends BaseController{
    
	/**
     * 获取套餐列表
	 * @version v2;@editor Divider
     */
    public function comboList()
    {
        $where = $this->logicCombo->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicCombo->getComboList($where,true,'sort,id desc',$limit);
		
        return setRetrunData('success', $list->toArray());
    }
   
	
	/**
     * 套餐添加
	 * @version v2;@editor Divider
     */
    public function comboAdd()
    {
		return $this->logicCombo->comboAdd($this->param);
    }
	
	/**
     * 套餐删除
	 * @version v2;@editor Divider
     */
    public function comboDel($id=0)
    {
        return $this->logicCombo->comboDel($id);
    }
	
	/**
     * 套餐编辑
	 * @version v2;@editor Divider
     */
    public function comboEdit()
    {
         return $this->logicCombo->comboEdit($this->param);
    }
	
	/**
     * 获取套餐服务详情
	 * @version v2;@editor Divider
     */
    public function comboServiceInfo(){
		
		return $this->logicCombo->comboServiceInfo($this->param);
	}
    
}