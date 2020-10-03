<?php

namespace app\wx\controller\v1;

use app\wx\controller\BaseController;
/*
*微信JSAPI支付公共函数
*/

class Wxjspay extends BaseController {
	
	public function orderPay(){
		
		$data = $this->param;
		
		if(empty($data['openid']))
        {
            return setRetrunData('参数有误', '', 1); 
        }
		return $this->wxapiPay($data);

	}
	
	public function wxapiPay($data=[]){
		
		vendor('wxpay/WxPayJsApiPay');
		
		$tools = new \JsApiPay();
		
		$config = new \WxPayConfig();
		
		$openId = $data['openid'];//$tools->GetOpenid();
		
		$out_trade_no=substr($config->GetMerchantId(),5).$data['uid'].date("YmdHis");
		
		$notify_url = get_url()."/wx/v1/wxjspay/notify";
		
		//②、统一下单
		$input = new \WxPayUnifiedOrder();
		$input->SetBody('商品支付');
		$input->SetAttach('test');
		$input->SetOut_trade_no($out_trade_no);
		$input->SetTotal_fee("1");//$data['totalprice']*100
		$input->SetTime_start(date("YmdHis"));
		$input->SetTime_expire(date("YmdHis", time() + 600));
		$input->SetGoods_tag("商品支付");
		$input->SetNotify_url($notify_url);
		$input->SetTrade_type("JSAPI");
		$input->SetOpenid($openId);
		$order = \WxPayApi::unifiedOrder($config, $input);
		$jsApiParameters = $tools->GetJsApiParameters($order);
		$list['data'] =json_decode($jsApiParameters);
        $list['out_trade_no'] =$out_trade_no;
        return setRetrunData('success', $list);
	}
	
	public function notify(){

		 header('Access-Control-Allow-Origin:*');
		
		 $testxml  = file_get_contents("php://input");

		 $data = $this->xmlToArray($testxml);
		//file_put_contents('logtwo.txt', print_r($result, true),FILE_APPEND);
		
		 // 判断签名是否正确 判断支付状态 
		 if ($data['return_code']=='SUCCESS' && $data['result_code']=='SUCCESS' ) { 
			 $result = $data;
			 $this->returnRecord($result);
		 }else{ 
		  	$result = false; 
		 } 
		if ($result) { 
		  	$str='<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>'; 
		 }else{ 
			$str='<xml><return_code><![CDATA[FAIL]]></return_code><return_msg><![CDATA[签名失败]]></return_msg></xml>'; 
		 } 
		 echo $str; 
		 return $result;
	}
	/*
	*支付返回数据给后端记录存储
	*/
	public function returnRecord($result){
		
		$recordInfo = $this->logicOnlinePayrecord->recordInfo(['out_trade_no'=>$result['out_trade_no']],'id');
		
		if(empty($recordInfo)){
			
			$result['paysource'] = '微信';
			
			$this->logicOnlinePayrecord->recordAdd($result);
		}
	}
	/*
	*支付返回数据给前端处理
	*/
	public function returnHtml($result){
		
		$info = array(
			 'openid' =>$result['openid'],
			 'out_trade_no'=>$result['out_trade_no'],
			 'time_end'=>$result['time_end'],
			 'total_fee'=>$result['total_fee'],
			 'transaction_id'=>$result['transaction_id']
		 );

		$push_api_url = "http://kykjgm.hbkykj.cn:2121/";
		$post_data = array(
		"type" => "publish",
		"content" => json_encode($info),
		"to" => 9, 
		);
		$ch = curl_init ();
		curl_setopt ( $ch, CURLOPT_URL, $push_api_url );
		curl_setopt ( $ch, CURLOPT_POST, 1 );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post_data );
		curl_setopt ($ch, CURLOPT_HTTPHEADER, array("Expect:"));
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		var_export($return);
	}
	/** 
	* 处理XML
	* @return 数组
	*/
	public function xmlToArray($xml){ 
		libxml_disable_entity_loader(true); 
		$xmlstring = simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA); 
		$val = json_decode(json_encode($xmlstring),true); 
		return $val;  
	} 
	
	/** 
	* 生成签名 
	* @return 签名，本函数不覆盖sign成员变量 
	*/
	protected function makeSign($data){ 
		 //获取微信支付秘钥 
		 vendor('wxpay/WxPayJsApiPay');
		 $config = new \WxPayConfig();
		 $key = $config->GetKey(); 
		 // 去空 
		 $data=array_filter($data); 
		 //签名步骤一：按字典序排序参数 
		 ksort($data); 
		 $string_a=http_build_query($data); 
		 $string_a=urldecode($string_a); 
		 //签名步骤二：在string后加入KEY 
		 //$config=$this->config; 
		 $string_sign_temp=$string_a."&key=".$key; 
		 //签名步骤三：MD5加密 
		 $sign = md5($string_sign_temp); 
		 // 签名步骤四：所有字符转为大写 
		 $result=strtoupper($sign); 
		 return $result; 
	}
 
}

    
    