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

class OnlinePayrecord extends BaseLogic
{
	/*
     *支付记录添加
     * data 提交数组
     */
	public function recordAdd($data=[]){

		$result = $this->modelOnlinePayrecord->setInfo($data);
		
		return $result;
	}
	/*
     *支付记录查询
     * 
     */
	public function recordInfo($where,$field=true){
		
		return $this->modelOnlinePayrecord->getInfo($where,$field);
	}
    
}
