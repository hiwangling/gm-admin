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

class OnlineVisitors extends BaseLogic
{
    
	/**
     * 访客添加
     */
	public function visitorsAdd($uid,$mid){
		
		$memorial = $this->logicOnlineMemorial->memorialInfo(['a.uid'=>$uid,'a.id'=>$mid],'a.id,a.title');
		
		if(empty($memorial)){
			
			$add_date = array(
				'uid'=>$uid,
				'mid'=>$mid
			);

			$result = $this->modelOnlineVisitors->addInfo($add_date);

			return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		}
	}
	
	/**
     * 访客统计统计
     */
	public function visitorsStat($where = [], $stat_type = 'count', $field = 'id'){
		
		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME]) ? $where[DATA_STATUS_NAME] : ['neq', DATA_DELETE];
		
		return $this->modelOnlineVisitors->stat($where,$stat_type,$field);
	}
   
    
}
