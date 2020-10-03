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
class Engineering extends BaseController{
    
    /**
     * 获取工程信息列表
     * @return type
     */
    public function engineeringOrderList()
    {
        $where = $this->logicEngineering->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicEngineering->getEngineeringList($where,true,'id desc',$limit);
        if ($list->isEmpty()) {
            $dataArray['engineeringlist']=$list;
        }
        else
        {
            $list = $list->toArray();
            $dataArray['engineeringlist']=$list;
        }
        return setRetrunData('success', $dataArray);
    }
    
    /**
     * 新增工程信息
     * @return type
     */
    public function engineeringAdd()
    {
        if(empty($this->param["operator_id"]))
        {
            $this->param['operator_id']=$this->mid;
        }
        if(empty($this->param["operator_name"]))
        {
            $this->param['operator_name']=$this->getSellname();
        }
	return $this->logicEngineering->engineeringAdd($this->param);
    }

    /**
     * 编辑工程信息
     * @param type $id
     * @return type
     */
    public function engineeringEdit()
    {
        if(empty($this->param["editor_id"]))
        {
            $this->param['editor_id']=$this->mid;
        }
        if(empty($this->param["editor_name"]))
        {
            $this->param['editor_name']=$this->getSellname();
        }
        return $this->logicEngineering->engineeringEdit($this->param);
    }

    /**
     * 删除工程信息
     * @return type
     */
    public function engineeringDel($id=0)
    {
	return $this->logicEngineering->engineeringDel($id);
    }
    
    /**
     * 根据ID获取单条工程信息
     * @return type
     */
    public function getEngineeringInfoById($id=0)
    {
        return $this->logicEngineering->getEngineeringInfoById($id);
    }
    
    /**
     * 删除工程图片信息
     * @return type
     */
    public function engineeringDelPic()
    {
        return $this->logicEngineering->engineeringDelPic($this->param);
    }
}