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
class Cemetery extends BaseController{
    
    /**
     * 墓穴查询列表
	 * @version v2;@editor Divider
     */
    public function cemeteryList()
    {
        $where = $this->logicCemetery->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicCemetery->getCemeteryList($where,'a.*,b.type_name classifyname,c.type_name typename,d.type_name stylename,e.type_name gardenname,f.bury_name','a.garden_id,b.sort,a.ix,a.iy,a.id asc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
	/**
     * 墓穴列表梯形结构
	 * @version v2;@editor Divider
     */
	public function cemeteryTraList(){
		
		$where = $this->logicCemetery->getWhere($this->param);
		
		$list = $this->logicCemetery->getCemeteryList($where,'a.*','a.ix,a.iy,a.id asc',false);
		
		$trapezoid = array();
		
		foreach($list as $k=>$v){
			$trapezoid[$v['ix']]['title'] = $v['ix'].'排';
			$trapezoid[$v['ix']]['cemetery'][] = $v;
		}
		
		return setRetrunData('success', array_values($trapezoid));
		//print_r(array_values(json_decode(json_encode($trapezoid),true)));
		//print_r($trapezoid);
		
	}
	
    public function cemeteryAdd()
    {
		return $this->logicCemetery->cemeteryAdd($this->param);
    }

    public function cemeteryDel($id=0)
    {
       return $this->logicCemetery->cemeteryDel($id);
    }

    public function cemeteryEdit()
    {
       return $this->logicCemetery->cemeteryEdit($this->param);
    }
    
    /**
     * 获取销售中数据
     * @param type $q_id
     * @return type
	 * @version v2;@editor Divider
     */
    public function tongJiXiaoByQu($q_id = 0)
    {
        if ($q_id) {
            $res = [
				0 => $this->logicCemetery->xiaoshouCount($q_id,0),
                1 => $this->logicCemetery->xiaoshouCount($q_id,1),
                2 => $this->logicCemetery->xiaoshouCount($q_id,2),
                3 => $this->logicCemetery->xiaoshouCount($q_id,3),
                4 => $this->logicCemetery->xiaoshouCount($q_id,4),
				5 => $this->logicCemetery->xiaoshouCount($q_id,5),
				6 => $this->logicCemetery->xiaoshouCount($q_id,6),
            ];
        } else {
            $res = [
				0 => $this->logicCemetery->xiaoshouCount(null,0),
                1 => $this->logicCemetery->xiaoshouCount(null,1),
                2 => $this->logicCemetery->xiaoshouCount(null,3),
                3 => $this->logicCemetery->xiaoshouCount(null,2),
                4 => $this->logicCemetery->xiaoshouCount(null,4),
            ];
        }
        return setRetrunData('success', $res);
    }
    
    /**
     * 根据cid获取当前墓穴基本信息
     * @param type $cid
	 * @version v2;@editor Divider
     */
    public function getCemeteryInfo($cid)
    {
        $data=[];
        $where ['a.id'] =$cid;
        $list = $this->logicCemetery->getCemeteryInfo($where,'a.id,b.type_name gardenname,'
                . 'c.type_name classifyname,d.type_name stylename,e.type_name typename,'
                . 'a.vno,a.cname,a.type_id,a.style_id,a.usestatus');
        /*if(!empty($list))
        {
            $name =$list['gardenname'].$list['classifyname'].$list['cname'];
            $data['name']= $name;
            $data['usestatus']= $list['usestatus'];
            $data['type_id']= $list['type_id'];
        }*/
		$reserve = $this->logicOrder->getOrderInfo(['a.cid'=>$cid,'a.financetype'=>1,'a.status'=>1],'a.id,a.sum_price');
		
		$reserveTui = $this->logicOrder->getOrderInfo(['a.cid'=>$cid,'a.financetype'=>7,'a.status'=>1],'a.id,a.sum_price');
		
		$reserve_price = !empty($reserve['sum_price'])?$reserve['sum_price']:0;
		
		$reserveTui_price = !empty($reserveTui['sum_price'])?$reserveTui['sum_price']:0;
		
		$list['reserve_price'] = $reserve_price-$reserveTui_price;
		
		$list['name'] =  $list['gardenname'].$list['classifyname'].$list['cname'];
		
        return setRetrunData('success', $list);
    }
    
    /**
     * 打印墓穴信息
     */
    public function cemeteryPrint($cid=0)
    {
        return $this->logicCemetery->cemeteryPrint($cid);
    }

    /**
     * 公墓证套打获取墓穴信息以及持证人墓主信息
     */
    public function cemeteryburyPrint($cid=0)
    {
        return $this->logicCemetery->cemeteryburyPrint($cid);
    }
	
	/**
     * 墓穴添加碑文
	 * @version v2;@editor Divider
     */
	public function cemeteryTablet(){
		
		$data= array(
			'mentstatus'=>!empty($this->param['mentstatus'])?$this->param['mentstatus']:0,
			'inscription_erect'=>!empty($this->param['inscription_erect'])?json_encode($this->param['inscription_erect']):'',
			'inscription_across'=>!empty($this->param['inscription_across'])?json_encode($this->param['inscription_across']):'',
			'inscription_remark'=>!empty($this->param['inscription_remark'])?$this->param['inscription_remark']:''
		);
		
		 $result = $this->logicCemeteryAuxiliary->auxiliaryUpdate(['cid'=>$this->param['cid'],'status'=>1],$data);
		
		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData("此墓还未购买，请购买后填写",'',1);
	}
	
	/**
     * 墓穴获取碑文
	 * @version v2;@editor Divider
     */
	public function getCemeteryTablet(){
		
		$info = $this->logicCemeteryAuxiliary->auxiliaryInfo(['cid'=>$this->param['cid'],'status'=>1],'id,mentstatus,inscription_erect,inscription_across,inscription_remark');
		
		$info['inscription_erect'] = !empty($info['inscription_erect'])?json_decode($info['inscription_erect']):'';
		$info['inscription_across'] = !empty($info['inscription_across'])?json_decode($info['inscription_across']):'';
		
		return setRetrunData(RESULT_SUCCESS,$info);
	}
	
	/**
     * 墓穴获取档案
	 * @version v2;@editor Divider
     */
	public function cemeteryRecord(){
		
		$where = $this->logicImages->getWhere($this->param);
		
		$where['status'] =1;
		
		$list = $this->logicImages->getImagesList($where,'*','id asc',false);
		
		$imageType = parse_config_array('imageType');
		
		foreach($list as $k=>$v){
			$v['imagetype_name'] = $imageType[$v['imgtype']];
		}
		
		return setRetrunData(RESULT_SUCCESS,$list);
	}
}