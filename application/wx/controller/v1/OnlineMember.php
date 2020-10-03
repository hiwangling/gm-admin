<?php
namespace app\wx\controller\v1;

use app\wx\controller\BaseController;

class OnlineMember extends BaseController
{
	
  /*
  *个人资料编辑
  *
  */
  public function memberEdit()
    {
	  
		return $this->logicOnlineMember->memberEdit(['id'=>$this->param['id']],$this->param);
	  
    }
	
	public function memberVerify(){
	  //echo 1;
	  return $this->logicOnlineMember->memberVerify($this->param);
  	}
	
}