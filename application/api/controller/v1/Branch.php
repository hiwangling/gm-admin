<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class Branch extends BaseController
{
    public function branchList()
    {
		$where = $this->logicBranch->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$branchs = $this->logicBranch->getBranchList($where,true,'id desc',$limit);
		
        return setRetrunData('success', json_decode(json_encode($branchs))->data);
    }

    public function branchAllName()
    {
      
		$branchs = $this->logicBranch->getBranchList([DATA_STATUS_NAME=>1],'id,branch_name','id desc',false);
		
        return setRetrunData('success', $branchs);
    }

    public function branchAdd()
    {
		return $this->logicBranch->BranchAdd($this->param);
		
    }

    public function branchDel($id=0)
    {
        return $this->logicBranch->BranchDel(['id'=>$id]);
    }

    public function branchEdit()
    {
        
		return $this->logicBranch->BranchEdit($this->param);

    }

    public function branchAuth()
    {
      //  (new IDMustBePositiveInt())->goCheck();
       $id = $this->param['id'];

        $permissions = $this->param['permissions'];

        $rules = '';

		$rules = implode(',',$permissions);
		
		return $this->logicBranch->branchUpdate(['id'=>$id],['rules'=>$rules]);
    }

}