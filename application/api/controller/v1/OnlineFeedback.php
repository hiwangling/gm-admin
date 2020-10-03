<?php

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 后台反馈管理
 *
 */
class OnlineFeedback extends BaseController{
    
   /**
	 * 后台反馈详情
	 *
	**/
	public function feedbackInfo(){
		
		$where = $this->logicOnlineFeedback->getWhere($this->param);
		
		if(empty($where)){
		  
		  return setRetrunData('条件不能为空','',1);
		  
	    }
		
		$info = $this->logicOnlineFeedback->feedbackInfo($where,'a.*,s.thumb as video_thumb');
		
		if(!empty($info)){
			
			$info['images'] = $this->logicOnlineStorage->storageList(['fid'=>$info['id'],'rid'=>$info['rid'],'type'=>1],'*','',false);
			if(!empty($info['images'])){
				foreach($info['images'] as $k=>$v){
					$v['url'] = $v['thumb'];
					
				}
			}
			
		}

		return setRetrunData('success', $info);
	}
	
	/**
	 * 后台反馈添加或修改
	 *
	**/
	public function feedbackEdit(){
		
		return $this->logicOnlineFeedback->feedbackEdit($this->param);
	}
}