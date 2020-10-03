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

class OnlineAppointmenttime extends BaseLogic
{
    
    /**
     * 获取预约时间区间列表
     */
    public function getAppointmenttimeList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelOnlineAppointmenttime->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 获取订单下预约时间区间列表
     */
    public function getAppointmenttimeCountList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='',$maketime='')
    {

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelOnlineAppointmenttime->alias('a');
		
		$join = [
            [SYS_DB_PREFIX . "online_appointment b", "b.tid = a.id AND b.maketime='".$maketime."'", "left"],
        ];
		
		return $this->modelOnlineAppointmenttime->getList($where, $field , $order, $paginate,$join,$group);
    }
	
	/**
     * 获取订单下预约时间区间单条数据
     */
	public function getAppointmenttimeValue($where=[],$field = true){
		
		return $this->modelOnlineAppointmenttime->getValue($where,$field);
		
	}
	/**
     * 获取订单下预约时间区间详情
     */
	public function getAppointmenttimeInfo($where=[],$field = true){
		
		return $this->modelOnlineAppointmenttime->getInfo($where,$field);
		
	}
	/**
     * 获取预约时间区间列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        return $where;
    }
   
    
}
