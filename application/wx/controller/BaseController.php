<?php
namespace app\wx\controller;
use app\common\controller\ControllerBase;
use app\wx\model\Manager as ManagerModel;
use app\wx\model\OnlineMember as OnlineMemberModel;
use app\wx\service\Token;

class BaseController extends ControllerBase
{
	protected $openid = null ;
	protected $manager = null ;
    
	public function _initialize()
    {
        parent::_initialize();
		
		if(!empty($this->param['tolopenid'])){
			
			$this->openid = $this->param['tolopenid'];
		
			unset($this->param['tolopenid']);
		}
		
		//$this->openid = Token::getOpenid();
		
		//$mid = OnlineMemberModel::where('openid',$this->openid)->value('mid');
		
		//$this->manager = ManagerModel::get($mid);
		//echo $this->openid;
		//print_r($this->openid);
    }
	
	public static function getManagerValue($type){
		switch($type){
			case 'openid':
				return (new self())->openid;
				break;
			default:
				return (new self())->manager;	
		}
		
	}
	
}