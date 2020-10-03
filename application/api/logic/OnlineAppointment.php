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

class OnlineAppointment extends BaseLogic
{


	/**
     *  预约人数统计
     */
	public function getAppointmentStat($where = [], $stat_type = 'count', $field = 'id'){
		
		return $this->modelOnlineAppointment->stat($where, $stat_type,$field);
		
	}
	/**
     * 获取预约列表
     */
    public function getAppointmentList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='')
    {

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelOnlineAppointment->alias('a');
		
		$join = [
            [SYS_DB_PREFIX . "online_appointmenttime b", "b.id = a.tid", "left"],
        ];
		
		return $this->modelOnlineAppointment->getList($where, $field , $order, $paginate,$join,$group);
    }
	
	/**
     * 获取预约详情
     */
	public function appointmentInfo($where = [], $field = true){
		
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelOnlineAppointment->alias('a');
		
		$join = [
            [SYS_DB_PREFIX . "online_appointmenttime b", "b.id = a.tid", "left"],
        ];
		
		return $this->modelOnlineAppointment->getInfo($where, $field,$join);
		
	}
	/**
     * 取消预约
     */
	public function appointmentDel($where=[]){
		
		if(empty($where)){
			
			return setRetrunData('条件不能为空','',1);
		}

		$result = $this->modelOnlineAppointment->deleteInfo($where);//删除纪念馆
 
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
	/**
     * 获取预约时间区间列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
		
		!empty($data['phone']) && $where['a.phone'] = $data['phone'];
		
		!empty($data['uid']) && $where['a.uid'] = $data['uid'];
		
		!empty($data['id']) && $where['a.id'] = $data['id'];
		
		!empty($data['maketime']) && $where['a.maketime'] = $data['maketime'];
		
		!empty($data['tid']) && $where['a.tid'] = $data['tid'];
        
        return $where;
    }
   
    
}
