<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class CemeteryClassify extends BaseController
{

	public static $deptSelect   = [];
	/**
	  *墓园列表
	  *
	**/
	public function cemeteryGardenList(){

		$where = $this->logicCemeteryClassify->getWhereGarden($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$list = $this->logicCemeteryClassify->getCemeteryClassifyList($where,'*','sort desc',$limit);

        return setRetrunData('success', $list->toArray());

	}
        
    /**
	  *墓园添加
	  *
	**/
	public function cemeteryGardenAdd(){
		
		$this->param['parent_id']=0;
		
		return $this->logicCemeteryClassify->cemeteryClassifyAdd($this->param);
		
	}

	/**
	  *墓园编辑
	  *
	**/
	public function cemeteryGardenEdit(){
		
		return $this->logicCemeteryClassify->cemeteryClassifyEdit($this->param);

	}
	
	/**
	  *墓园删除
	  *
	**/
	public function cemeteryGardenDel($id=0){
		
		return $this->logicCemeteryClassify->cemeteryClassifyDel(['id'=>$id]);
	}

    
	
	
	public function getCemeteryGardens(){
		
		$where=array('status'=>1,'parent_id'=>0);

		$list = $this->logicCemeteryClassify->getCemeteryClassifyList($where,true,'sort desc',FALSE);

        return setRetrunData('success', $list);
       
	}
    /**
	  *获取墓穴全部分类
	  *
	**/
	public function cemeteryClassifyList(){
		
		$where['status'] = ['neq',-1]; 
		
		$list = $this->logicCemeteryClassify->getCemeteryClassifyList($where,true,'sort asc,id asc',false);
		
		$data = get_slect(json_decode(json_encode($list),true));
		
		return setRetrunData('success', $data);
		
	}

	/**
	  *墓区列表
	  *
	**/
	public function cemeteryAreaList()
        {

            $where = $this->logicCemeteryClassify->getWhereArea($this->param);

           /* $y_id = !empty($this->param['y_id'])?$this->param['y_id']:null;
        
            if (!empty($this->param['q_id'])) {
                $where['id'] = $this->param['q_id'];
            }
            if (!empty($y_id)) {
                $where['parent_id'] = $this->param['y_id'];
            }*/
            $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

            $list = $this->logicCemeteryClassify->getCemeteryClassifyList($where,true,'sort asc,id asc',$limit);
		
			$parentList = $this->logicCemeteryClassify->getParentList();
		
			foreach($list as $k=>$v){
				$v['parent_name'] = $parentList[$v['parent_id']];
			}
            
            return setRetrunData('success', $list->toArray());
	}
     
	/**
	 * 根据墓园ID获取墓区
	 * @param type $pid
	 */
	public function getCemeteryAreas($pid)
	{
		$areaslist = $this->logicCemeteryClassify->getCemeteryClassifyList([DATA_STATUS_NAME=>1,'parent_id'=>$pid],'id,type_name','sort asc',false);
		return setRetrunData('success', $areaslist);
	}
        
	public function cemeteryAreaAdd(){

		return $this->logicCemeteryClassify->cemeteryClassifyAdd($this->param);
	
	}
	public function cemeteryAreaEdit(){

		return $this->logicCemeteryClassify->cemeteryClassifyEdit($this->param);
	}

	public function cemeteryAreaDel($id=0){

		return $this->logicCemeteryClassify->cemeteryClassifyDel(['id'=>$id]);

	}
        
	
}