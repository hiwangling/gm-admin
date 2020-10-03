<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;
class OnlineDeploy extends BaseController
{
	
  public function deployList()
    {
	  
		$where = $this->logicOnlineDeploy->getWhere($this->param);

		$list = $this->logicOnlineDeploy->getDeployList($where,'*','id asc',false);
	  
	    $list = json_decode(json_encode($list),true);
	    foreach($list as $k=>$v){
			if($v['thumb']){
				$v['thumb'] = get_url().DS.$v['thumb'];
			}
			$list[$k] = $v;
		}
	  
        return setRetrunData('success', $list);
	  
    }
	
	public function deployTypeList(){
		
		$where = $this->logicOnlineDeploy->getWhere($this->param);
		
		$list = $this->logicOnlineDeploy->getDeployList($where,'*','id asc',false);
		
		$list = json_decode(json_encode($list),true);
	    foreach($list as $k=>$v){
			if($v['thumb']){
				$v['thumb'] = get_url().DS.$v['thumb'];
			}
			$list[$k] = $v;
		}
	  
	  	$deployList = parse_config_array('memorial_deploy');
	    
	  	$data = array();
	  	foreach($deployList as $key=>$val){
			$data[$key]['title'] = $val;
			$data[$key]['type'] = $key;
			foreach($list as $k=>$v){
				if($v['type']==$key){
					$data[$key]['deploy'][]=$v;
				}
			}
		}
	  
        return setRetrunData('success', array_values($data));	
	}

}