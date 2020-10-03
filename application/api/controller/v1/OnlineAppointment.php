<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;
class OnlineAppointment extends BaseController
{
  /***
   * 获取预约时间区间列表
   * maketime   选择日期（必填）
   ***/
  public function appointmenttimeList()
    {
	  
		$where = $this->logicOnlineAppointmenttime->getWhere($this->param);

		$list = $this->logicOnlineAppointmenttime->getAppointmenttimeList($where,'*','id asc',false);
	  
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
   * 预约列表
   * $this->param   传输数据数据
   ***/
	public function appointmentList(){
		
		$where = $this->logicOnlineAppointment->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicOnlineAppointment->getAppointmentList($where,'a.*,b.starttime,b.endtime','a.id desc',$limit);
		
		$countList = $this->logicOnlineAppointment->appointmentInfo($where,'sum(a.people_count) as countPeople,sum(a.car_count) as countCar');
		
		$data['countList'] = $countList;
		
		$data['list'] = $list;
		
		return setRetrunData('success', $data);
	}
	
	/***
   * 取消预约
   * $this->param   传输数据数据
   ***/
	public function appointmentDel(){
		
		return $this->logicOnlineAppointment->appointmentDel(['id'=>$this->param['id']]);
	}
	

}