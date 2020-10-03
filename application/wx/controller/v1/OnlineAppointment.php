<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;
class OnlineAppointment extends BaseController
{
  /***
   * 获取预约时间区间列表
   * maketime   选择日期（必填）
   ***/
  public function appointmenttimeList()
    {
	  
		$where = $this->logicOnlineAppointmenttime->getWhere($this->param);
	  
	  	if(empty($this->param['maketime'])){
			return setRetrunData('请填写预约时间', '',1);
		}

		$list = $this->logicOnlineAppointmenttime->getAppointmenttimeCountList($where,'a.*,sum(b.people_count) as countPeople,sum(b.car_count) as countCar','a.id asc',false,'a.id',$this->param['maketime']);
	  
	    foreach($list as $k=>$v){
			$time = $this->param['maketime'].' '.$v['endtime'];
			if(time()>strtotime($time)){
				$v['surplusPeople'] = 0;
				$v['surplusCar'] = 0;
			}else{
				$v['surplusPeople'] = $v['people_count']-$v['countPeople'];
				$v['surplusCar'] = $v['car_count']-$v['countCar'];
			}
		}
	  
        return setRetrunData('success', $list);
	  
    }
	
  /***
   * 添加预约订单
   * $this->param   传输数据数据
   ***/
	public function appointmentAdd(){
		
		//验证人数车辆是否超额；
		$verifyPeople = $this->logicOnlineAppointment->verifyPeople($this->param);
		
		if(!$verifyPeople){
			return setRetrunData('抱歉，您所预约的时间已经超标，请换个时间区间！','',1);
		}
		//验证短信验证码；
		$verifySms = $this->logicOnlineRandom->sendSmsVerify($this->param['uid'],$this->param['verify']);
		
		if(!$verifySms){
			return setRetrunData('验证码错误','',1);
		}
		
		$data = $this->param;
		
		unset($data['verify']);
		
		return $this->logicOnlineAppointment->appointmentAdd($data);

	}
	
  /***
   * 预约详情
   * $this->param   传输数据数据
   ***/
	public function appointmentInfo(){
		
		$where = $this->logicOnlineAppointment->getWhere($this->param);
		
		$list = $this->logicOnlineAppointment->appointmentInfo($where,'a.*,b.starttime,b.endtime');
		
		return setRetrunData('success', $list);
	}
	
	/***
   * 我的预约列表
   * $this->param   传输数据数据
   ***/
	public function appointmentList(){
		
		$where = $this->logicOnlineAppointment->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicOnlineAppointment->getAppointmentList($where,'a.*,b.starttime,b.endtime','a.id desc',$limit);
		
		return setRetrunData('success', $list);
	}
	
	/***
   * 取消预约
   * $this->param   传输数据数据
   ***/
	public function appointmentDel(){
		
		return $this->logicOnlineAppointment->appointmentDel(['id'=>$this->param['id']]);
	}
	

}