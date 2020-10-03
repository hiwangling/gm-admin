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

class OnlineRandom extends BaseLogic
{
    
	/**
     * 获取基础配置信息
     */
    public function randomInfo($where,$field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
		
		$this->modelOnlineRandom->alias('a');
		
        $join = [
			
        ];
		
		return $this->modelOnlineRandom->getInfo($where,$field,$join);
		
	}
	
	public function randomAdd($data = [])
    {

        $result = $this->modelOnlineRandom->setInfo($data);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	public function randomEdit($data = [])
    {
        $result = $this->modelOnlineRandom->setInfo($data);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	public function sendSmsVerify($uid,$verify){
		
		$randomInfo = $this->logicOnlineRandom->randomInfo(['a.uid'=>$uid,'state'=>0],'a.*');
		
		if($verify==$randomInfo['random']){
			
			$this->modelOnlineRandom->updateInfo(['id'=>$randomInfo['id']],['state'=>1]);
			return true;
		}else{
			return false;
		}
		
		
	}
	
	//短信发送API
	public function sendSMS($content,$mobile){
		
		$config = $this->logicOnlineWxconfig->configInfo(['a.id'=>2],'*');
		
		$encode='UTF-8';  //页面编码和短信内容编码为GBK。重要说明：如提交短信后收到乱码，请将GBK改为UTF-8测试。如本程序页面为编码格式为：ASCII/GB2312/GBK则该处为GBK。如本页面编码为UTF-8或需要支持繁体，阿拉伯文等Unicode，请将此处写为：UTF-8

		$username=$config['appid'];  //用户名

		$password_md5=md5($config['appsecert']);  //32位MD5密码加密，不区分大小写

		$apikey=$config['key'];  //apikey秘钥（请登录 http://m.5c.com.cn 短信平台-->账号管理-->我的信息 中复制apikey）

		//$mobile=$this->param['tel'];  //手机号,只发一个号码：13800000001。发多个号码：13800000001,13800000002,...N 。使用半角逗号分隔。

		//$content = iconv("GBK","UTF-8",$content);
		//$content = mb_convert_encoding($content,"GBK","UTF-8");

		$contentUrlEncode = urlencode($content);//执行URLencode编码  ，$content = urldecode($content);解码

		return sendSMS($username,$password_md5,$apikey,$mobile,$contentUrlEncode,$encode);  //进行发送
		//print_r($result);

	}

}
