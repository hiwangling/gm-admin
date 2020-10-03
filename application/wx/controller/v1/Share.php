<?php

namespace app\wx\controller\v1;

use app\wx\controller\BaseController;
/*
*微信JSAPI支付公共函数
*/

class Share extends BaseController {
	
	public function signPackage(){
		//file_put_contents('logtwo.txt', 111,FILE_APPEND);
		Vendor('Jssdk/jssdk');
		$config = $this->logicOnlineWxconfig->configInfo(['id'=>1],'*');
		$jssdk = new \jssdk($config['appid'],$config['appsecert']);
		$signPackage = $jssdk->getSignPackage();
		return setRetrunData('', $signPackage);

	}
	
	//验证码发送
	public function securityCode(){
		
		if(empty($this->param['tel'])){
			
			return setRetrunData('电话不能为空','',1);
		}
		
		$random = rand(111111,999999);//随机码
		
		$content='【快云科技】您好，您的验证码:'.$random;  //要发送的短信内容，特别注意：签名必须设置，网页验证码应用需要加添加【图形识别码】。
		
		$result = $this->logicOnlineRandom->sendSMS($content,$this->param['tel']);

		if(strpos($result,"success")>-1) {
			
			$randomInfo = $this->logicOnlineRandom->randomInfo(['a.uid'=>$this->param['id'],'state'=>0],'a.*');
			
			if(!empty($randomInfo)){
				
				$randomInfo['random'] = $random;
				
				$this->logicOnlineRandom->randomEdit($randomInfo);
				
			}else{
				$add_date = array(
					'uid'=>$this->param['id'],
					'random'=>$random
				);
				$this->logicOnlineRandom->randomEdit($add_date);
			}
			return setRetrunData(RESULT_SUCCESS,$result);
		} else {
			return setRetrunData(RESULT_ERROR,'',1);
		}
	}
	
	
 
}

    
    