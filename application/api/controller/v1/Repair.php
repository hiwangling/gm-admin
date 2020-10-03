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
class Repair extends BaseController{
    
    public function repairOrderList()
    {
        $dataArray;
        $where = $this->logicRepair->getWhere($this->param);
        $y_id = !empty($this->param['y_id'])?$this->param['y_id']:null;
        
        if (!empty($this->param['q_id'])) {
            $where['b.classify_id'] = $this->param['q_id'];
        }
        if (!empty($y_id)) {
            $where['b.garden_id'] = $this->param['y_id'];
        }
        if (!empty($this->param['begindate']) && !empty($this->param['enddate'])) {
            $where['a.create_time'] = [['egt',$this->param['begindate']],['elt',$this->param['enddate']],"AND"];
        }
        if (!empty($this->param['type_id'])) {
            $where['b.type_id'] = $this->param['type_id'];
        }
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $repairlist = $this->logicRepair->getRepairOrderList($where,'a.id,a.repair_status,a.status,a.cid,c.type_name as area_name,b.cname cem_name,'
                    . 'e.type_name as stylename,a.sname,a.sub_time,a.desc,a.rname,a.start_time,'
                . 'a.end_time,a.task_hour,a.pre_price,a.total_price,a.repair_type','a.id desc',$limit);
                   
        if ($repairlist->isEmpty()) {
            $dataArray['repairlist']=$repairlist;
        }
        else
        {
            $repairlist = $repairlist->toArray();
            $dataArray['repairlist']=$repairlist;
        }
        return setRetrunData('success', $dataArray);  
    }
   

    public function repairAdd()
    {
        if(empty($this->param["sid"]))
        {
            $this->param['sid']=$this->mid;
        }
        if(empty($this->param["sname"]))
        {
            $this->param['sname']=$this->getSellname();
        }
        
	return $this->logicRepair->repairAdd($this->param);

    }

    public function repairEdit()
    {
        if(empty($this->param["sid"]))
        {
            $this->param['sid']=$this->mid;
        }
        if(empty($this->param["sname"]))
        {
            $this->param['sname']=$this->getSellname();
        }
        
	return $this->logicRepair->repairEdit($this->param);
    }


    public function getRepairInfoByCid($cid)
    {
        $where = [];
        $where['cid'] = input('cid');

        $data = $this->logicRepair->getRepairList($where,'*','id desc',false);
        
        if($data){
            return setRetrunData('success', $data);
        }else{
            return setRetrunData('success', []);
        }   
                
    }

    public function getRepairInfoById(){
        $id = $this->param["id"];
        $where = [];
        $where['id'] = $id;

        $data = $this->logicRepair->getRepairInfo($where,'*');

        //如果上传了修缮前的图片
        if($data['b_img']){
            $b_img=$data['b_img'];
            $result=$this->logicImages->getImagesList(['id' => array('in',$b_img)],'*','id asc',false);
           
            $b_res=array();
            foreach ($result as $key => $value) {
                array_push($b_res,array('url'=>$value['url'],'id'=>$value['id']));
            }  
            $data['b_urls']=$b_res;

        }

        //如果上传了修缮后的图片
        if($data['a_img']){
            $a_img=$data['a_img'];
            $result=$this->logicImages->getImagesList(['id' => array('in',$a_img)],'*','id asc',false);
            
            $a_res=array();
            foreach ($result as $key => $value) {
                array_push($a_res,array('url'=>$value['url'],'id'=>$value['id']));
            }
            $data['a_urls']=$a_res;    
        }

        if($data){
            return setRetrunData('success', $data);
        }else{
            return setRetrunData('success', []);
        } 

    }
    public function repairEditAfter(){
        
        if(empty($this->param["rid"]))
        {
            $this->param['rid']=$this->mid;
        }
        if(empty($this->param["rname"]))
        {
            $this->param['rname']=$this->getSellname();
        }
        
	return $this->logicRepair->repairEditAfter($this->param);

    }

    public function repairEditPic(){
        
	return $this->logicRepair->repairEditPic($this->param);
    }


    public function repairDel($id =0){
       return $this->logicRepair->repairDel($id);
    }

    public function repairDelPic(){
        return $this->logicRepair->repairDelPic($this->param);
    }

}