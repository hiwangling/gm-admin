<?php
// +---------------------------------------------------------------------+
// | OneBase    | [ WE CAN DO IT JUST THINK ]                            |
// +---------------------------------------------------------------------+
// | Licensed   | http://www.apache.org/licenses/LICENSE-2.0 )           |
// +---------------------------------------------------------------------+
// | Author     | Bigotry <3162875@qq.com>                               |
// +---------------------------------------------------------------------+
// | Repository | https://gitee.com/Bigotry/OneBase                      |
// +---------------------------------------------------------------------+

namespace app\wx\logic;
/**
 * 反馈管理
 */
class OnlineStorage extends BaseLogic
{
   /**
    * 反馈添加
   **/ 
   public function storageAdd($data=[]){
	   
	   if(!empty($data['video_thumb'])){
		   $video_data = array(
		   	   'rid'=>$data['rid'],
			   'fid'=>$data['id'],
			   'thumb'=>$data['video_thumb'],
			   'type'=>2,
			   'class'=>1
		   ); 
		   $this->modelOnlineStorage->addInfo($video_data);
	   }
	   
	   if(!empty($data['images'])){
		   foreach($data['images'] as $k=>$v){
			   $images_data = array(
				   'rid'=>$data['rid'],
				   'fid'=>$data['id'],
				   'thumb'=>$v['url'],
				   'type'=>1,
				   'class'=>!empty($data['class'])?$data['class']:1
			   );
			   $this->modelOnlineStorage->addInfo($images_data);
		   }
	   }
   }
	
   /**
    * 反馈列表
   **/
   public function storageList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
	   
	   $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME]) ? $where[DATA_STATUS_NAME] : ['neq', DATA_DELETE];
	   
	   return $this->modelOnlineStorage->getList($where, $field , $order, $paginate);
	   
   }
	/**
    * 反馈删除
   **/
	public function storageDel($where){
		
		$result = $this->modelOnlineStorage->deleteInfo($where);
		
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
    
}
