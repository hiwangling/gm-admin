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

namespace app\api\logic;
/**
 * 反馈管理
 */
class OnlineFeedback extends BaseLogic
{
   /**
    * 反馈添加
   **/ 
   public function feedbackEdit($data=[]){
	   
	   $edit_data = array(
	   		'rid' => $data['rid'],
		    'operate_id'=>$data['operate_id'],
		    'operate_name'=>$data['operate_name'],
		    'execnote'=>!empty($data['execnote'])?$data['execnote']:''
	   );
	   if(!empty($data['id'])){
		   $result = $this->modelOnlineFeedback->updateInfo(['id'=>$data['id']],$edit_data);
		   $this->logicOnlineStorage->storageDel(['fid'=>$data['id'],'rid'=>$data['rid']]);
	   }else{
		   $result = $this->modelOnlineFeedback->addInfo($edit_data);
		   $data['id'] = $result;
	   }
	   $this->logicOnlineStorage->storageAdd($data);//添加反馈图片
	   $result && action_log('编辑', '反馈信息编辑，' . http_build_query(["id"=>$data['id']]));
	   return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	   
   }
	
	/**
    * 反馈修改单数据
   **/ 
	public function feedbackUpdate($where,$update=[]){
		
		if(empty($update)){
			return setRetrunData('修改数据不能为空','',1);
		}
		
		$result = $this->modelOnlineFeedback->updateInfo($where,$update);
		
		$result && action_log('编辑', '反馈信息编辑，' .http_build_query($where).',内容'.http_build_query($update));
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
   /**
    * 反馈详情
   **/
   public function feedbackInfo($where,$field = true){
	   
	   $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
       $this->modelOnlineFeedback->alias('a');

        $join = [
            [SYS_DB_PREFIX . 'online_order b', 'b.id = a.rid', 'left'],
			[SYS_DB_PREFIX . 'online_storage s', 's.fid = a.id AND s.type=2', 'left'],
        ];
		
		return $this->modelOnlineFeedback->getInfo($where, $field, $join);
	   
   }
	
   public function getWhere($data = []){
	   
	   $where = [];
		
	   !empty($data['id']) && $where['a.rid'] = $data['id'];
       
        
       return $where;
	   
   }
    
}
