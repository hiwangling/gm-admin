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

class OnlineMemorypeople extends BaseLogic
{
    
    /**
     * 获取纪念人列表
     */
    public function getMemorypeopleList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelOnlineMemorypeople->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 纪念人添加
     */
	public function memorypeopleAdd($data=[],$mid=0){
		
		if(!empty($data['people'])){
			
			$add_data = array();
			
			$bury_array = array();
			
			foreach($data['people'] as $k=>$v){
				
				$add_data = array(
					'mid'=>$mid,
					'username'=>$v['username'],
					'sex'=>$v['sex'],
					'birthday'=>$v['birthday'],
					'dieday'=>$v['dieday'],
					'introduction'=>$v['introduction']
				);
				
				$bury_array[$k] = $v['username'];

				$result = $this->modelOnlineMemorypeople->addInfo($add_data);
			}
			
			$this->logicOnlineMemorial->updateMemorial(['id'=>$mid],['buryname'=>implode(',',$bury_array)]);
			
			return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		}

		
	}
	
	/**
     * 纪念人删除
     */
	public function memorypeopleDel($where=[]){
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
		
		$result = $this->modelOnlineMemorypeople->deleteInfo($where);
 
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
    
}
