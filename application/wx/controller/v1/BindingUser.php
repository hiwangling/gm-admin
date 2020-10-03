<?php

namespace app\wx\controller\v1;

use app\wx\controller\BaseController;

class BindingUser extends BaseController{
   
	/**
     * 内部员工绑定
     */
    public function bindUser(){
		
		return $this->logicOnlineMember->bindUser($this->param);
	}
    
    /**
     * 解除绑定
     */
    public function setRoleUser()
    {
		return $this->logicOnlineMember->setRoleUser($this->param);
    }
}
