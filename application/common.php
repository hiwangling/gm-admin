<?php
/**
 * 分析数组及枚举类型配置值 格式 a:名称1,b:名称2
 * @return array
 */
use think\Db;
use app\wx\model\OnlineWxconfig as OnlineWxconfig;
/**
 * 检测用户是否登录
 * @return integer 0-未登录，大于0-当前登录用户ID
 */
function is_login()
{
    
    $member = session('member_auth');
    
    if (empty($member)) {
        
        return 0;
    } else {
        
        return session('member_auth_sign') == data_auth_sign($member) ? $member['member_id'] : 0;
    }
}

function parse_config_attr($string)
{

    $array = preg_split('/[,;\r\n]+/', trim($string, ",;\r\n"));

    if (strpos($string, ':')) {

        $value = [];

        foreach ($array as $val) {

            list($k, $v) = explode(':', $val);

            $value[$k] = $v;
        }

    } else {

        $value = $array;
    }

    return $value;
}

/**
 * 解析数组配置
 */
function parse_config_array($name = '')
{

    return parse_config_attr(config($name));
}

/**
 * 字符串前缀验证
 */
function str_prefix($str, $prefix)
{
    
    return strpos($str, $prefix) === DATA_DISABLE ? true : false;
}

/**
 * 字符串替换
 */
function sr($str = '', $target = '', $content = '')
{
    
    return str_replace($target, $content, $str);
}

/**
 * 写入执行信息记录
 */
function write_exe_log($begin = 'app_begin', $end = 'app_end', $type = 0)
{
    
    if (empty(config('is_write_exe_log'))) { return false; }
    
    $source_url = empty($_SERVER["HTTP_REFERER"]) ? '未知来源' : $_SERVER["HTTP_REFERER"];
    
    $exe_log['ip']              = request()->ip();
    $exe_log['exe_url']         = request()->url();
    $exe_log['exe_time']        = debug($begin, $end);
    $exe_log['exe_memory']      = debug($begin, $end, 'm');
    $exe_log['exe_os']          = get_os();
    $exe_log['source_url']      = $source_url;
    $exe_log['session_id']      = session_id();
    $exe_log['browser']         = browser_info();
    $exe_log['status']          = DATA_NORMAL;
    $exe_log['create_time']     = TIME_NOW;
    $exe_log['update_time']     = TIME_NOW;
    $exe_log['type']            = $type;
    $exe_log['login_id']        = is_login();
    
    $exe_log_path = "../log/exe_log.php";
    
    file_exists($exe_log_path) && $now_contents = file_get_contents($exe_log_path);
    
    $arr = var_export($exe_log, true);
    
    empty($now_contents) ? $contents = "<?php\nreturn array (".$arr.");\n" : $contents = str_replace(');', ','. $arr . ');', $now_contents);
    
    file_put_contents($exe_log_path, $contents);
}

/**
 * 通过闭包控制缓存
 */
function auto_cache($key = '', $func = null, $time = 3)
{
    
    $result = cache($key);
    
    if (empty($result)) {
        
        $result = $func();
        
        !empty($result) && cache($key, $result, $time);
    }
    
    return $result;
}

/**
 * 通过类创建逻辑闭包
 */
function create_closure($object = null, $method_name = '', $parameter = [])
{
    
    $func = function() use($object, $method_name, $parameter) {
        
                return call_user_func_array([$object, $method_name], $parameter);
            };
            
    return $func;
}


/**
 * 拥有父子类的数据分离数据（一维分二维）
 */
function get_slect($datelist)
{
	$list = array();
	foreach ($datelist as $key => $value) 
	{
	   if ($value['parent_id']==0)
	   {
		   $list[$value['id']] = $value;
	   }else{
		   $list[$value['parent_id']]['children'][] = $value;
	   }
	}

	return array_values($list);  

}


/**
 * 获取单例对象
 */
function get_sington_object($object_name = '', $class = null)
{

    $request = request();
    
    $request->__isset($object_name) ?: $request->bind($object_name, new $class());
    
    return $request->__get($object_name);
}


////大屏的监控，包括厅和火化记录
function dp_mount_all()
{
       // $list["Mourn"]=getMournList_socket();
        //$list["cremation"]=getcremation_socket();
         //$this->logicCold->getColdList([], "a.title,a.state,o.name,s.startime,s.endtime", 'a.create_time asc', 100);
        $info= sendmessae("946121","ok");
      // return $info;
      return true;
        //var_dump($info);
        //exit;
}
////大屏的监控，包括厅和火化记录
function dp_service_all()
{
       //$list =getColdList_socket(); //$this->logicCold->getColdList([], "a.title,a.state,o.name,s.startime,s.endtime", 'a.create_time asc', 100);
      //  $info= sendmessae("1113",json_encode($list));
          $info= sendmessae("946122","s");
           
    return true;
}

///通过服务类型获取部门ID
function get_deptid_by_servicetype($service)
{
    $deptid=0;
    switch ($service) {
           case 10://鲜花
               $deptid=12;
             break;
            case 12://礼仪服务
                 $deptid=15;
             break;
           case 11://乐队服务
               $deptid=16;
              break;
           case 13://伴灵灯服务
               $deptid=13;
             break;
          }
          return $deptid;
}
function get_servicetype_by_dept($deptid)
{
    $servicetype=0;
    switch ($deptid) {
           case 12://鲜花
               $servicetype=10; 
               break;
            case 15://礼仪服务
               $servicetype=12; 
               break;
           case 16://乐队服务
               $servicetype=11; 
               break;
           case 13://伴灵灯服务
               $servicetype=13; 
               break;
           default:
                $servicetype=0; 
               break;
         }
         return $servicetype;
}


function sendmessae($to_uid,$message ="") {
       $push_api_url = "http://139.9.67.237:2121/";
       //  $push_api_url = "http://127.0.0.1:2121/";
       
        $post_data = array(
            "type" => "publish",
            "content" =>$message,
            "to" => $to_uid,
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $push_api_url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        $headers = [
            "Content-Type: application/json;charset=UTF-8",
        ];
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $return = curl_exec($ch);
        curl_close($ch);
        return $return;
        
    }

 
//请求微信API
/*function curlGet($url,$datas,$post="post"){
	   //初始化
	   $curl = curl_init();
	   //设置抓取的url
	   curl_setopt($curl, CURLOPT_URL, ''.$url.'');
	   //curl_setopt($curl, CURLOPT_URL, 'http://www.baidu.com');
	   //设置头文件的信息作为数据流输出
	   curl_setopt($curl, CURLOPT_HEADER, 1);
	   //设置获取的信息以文件流的形式返回，而不是直接输出。
	   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	   //设置post方式提交
	   curl_setopt($curl, CURLOPT_POST, 1);
	   //设置post数据
	   $post_data = $datas;
	   curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
	   //执行命令
	   $data = curl_exec($curl);
	   //关闭URL请求
	   curl_close($curl);
	   //显示获得的数据
	   return $data;
}*/

//推送API
function wxplus($data=[]){
	
	 $token = tokenUrl();
		 
	 $url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='.$token.''; 

	 return $url;
	
}

/**
* 获取汉字名称所有字的首字母拼音小写
* @param type $string
* @return type
*/
function getShortPinyin($string)
{
   vendor('pinyin/Pinyin');
   $pinyin = new \Pinyin();
   return $pinyin->getShortPinyin($string);
}


function getOrderNo($financetype=1)
{
    $danhao = "";
    $currno = Db::table('ky_order')->where("status>=1 AND financetype=".$financetype)->max('order_no');
    if (!empty($currno)) {
        $ddate = date("Ym");
        $str1 = substr($currno, 0, 6); //截取日期，年-月
        $str2 = substr($currno, 6); //六个以后的数据
        if ($ddate != $str1) {
            $danhao = date("Ym") . "00001";
        } else {
            $bianhao = preg_replace('/^0+/', '', $str2);
            $hao = $bianhao + 1;
            $danhao = $str1 . sprintf("%05d", $hao);
        }
    } else {
        $danhao = date("Ym") . "00001";
    }
    return $danhao;
}

function getServicebillOrderNo()
{
    $danhao = "";
    $currno = Db::table('ky_servicebill')->where("status=1")->max('order_no');
    if (!empty($currno)) {
        $ddate = date("Ym");
        $str1 = substr($currno, 0, 6); //截取日期，年-月
        $str2 = substr($currno, 6); //六个以后的数据
        if ($ddate != $str1) {
            $danhao = date("Ym") . "00001";
        } else {
            $bianhao = preg_replace('/^0+/', '', $str2);
            $hao = $bianhao + 1;
            $danhao = $str1 . sprintf("%05d", $hao);
        }
    } else {
        $danhao = date("Ym") . "00001";
    }
    return $danhao;
}


function sendSMS($username,$password_md5,$apikey,$mobile,$contentUrlEncode,$encode)
{
    //发送链接（用户名，密码，apikey，手机号，内容）
    $url = "http://115.28.23.78/api/send/index.php?";  //如连接超时，可能是您服务器不支持域名解析，请将下面连接中的：【m.5c.com.cn】修改为IP：【115.28.23.78】
    $data=array
    (
        'username'=>$username,
        'password_md5'=>$password_md5,
        'apikey'=>$apikey,
        'mobile'=>$mobile,
        'content'=>$contentUrlEncode,
        'encode'=>$encode,
    );
    $result = curlSMS($url,$data);
    return $result;
}
function curlSMS($url,$post_fields=array())
{
    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);//用PHP取回的URL地址（值将被作为字符串）
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);//使用curl_setopt获取页面内容或提交数据，有时候希望返回的内容作为变量存储，而不是直接输出，这时候希望返回的内容作为变量
    curl_setopt($ch,CURLOPT_TIMEOUT,30);//30秒超时限制
    curl_setopt($ch,CURLOPT_HEADER,1);//将文件头输出直接可见。
    curl_setopt($ch,CURLOPT_POST,1);//设置这个选项为一个零非值，这个post是普通的application/x-www-from-urlencoded类型，多数被HTTP表调用。
    curl_setopt($ch,CURLOPT_POSTFIELDS,$post_fields);//post操作的所有数据的字符串。
    $data = curl_exec($ch);//抓取URL并把他传递给浏览器
    curl_close($ch);//释放资源
    $res = explode("\r\n\r\n",$data);//explode把他打散成为数组
    return $res[1]; //然后在这里返回数组。
	//return $data;
}

function qrcode($url,$number,$level=3,$size=4){
		Vendor('phpqrcode.phpqrcode');        
		$errorCorrectionLevel =intval($level) ;//容错级别        
		$matrixPointSize = intval($size);//生成图片大小         //生成二维码图片         
		$object = new \QRcode();
		$path = "uploads/ewm/".date('Ymd',time())."/";
		//$path = "public/".$son_path;
		
		$dir = iconv("UTF-8", "GBK", $path);
      	if(!file_exists($dir)){
            mkdir ($dir,0777,true);
           
         }
		// 生成的文件名
		$fileName = $path.$number.'.png';      
		$object->png($url, $fileName, $errorCorrectionLevel, $matrixPointSize, 2);
		$imgPath =  $path.$number.".png";
		return $imgPath;
}
//获取url
function get_url() {
	$sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
	$php_self = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
	$path_info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
	$relate_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : $php_self.(isset($_SERVER['QUERY_STRING']) ? '?'.$_SERVER['QUERY_STRING'] : $path_info);
	return $sys_protocal.(isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '');
}

//消息推送
function wordPush($jump,$content,$openid){
	
	$token = getAccessToken();	 
	$url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='.$token;
    $jump = !empty($jump)?$jump:'http://www.baidu.com';
	
   /*$content = array(
		'first'=>'您好，您的订单已受理，请注意查看',
		'keyword1'=>$title,
		'keyword2'=>"发送成功",
		'keyword3'=>date('Y-m-d H:i',time()),
		'remark'=>'您好，您有新的通知，请注意查收'
	);*/
	$data = '{
				"touser":"'.$openid.'",
				"template_id":"050SkhVWMuFD4YLIBJk2Q5cehkLZihIJGdBzqgSRC8A",
				"url":"'.$jump.'",
				"topcolor":"#FF0000",
				"data":{
                   "first": {
                       "value":"'.$content['first'].'",
                       "color":"#173177"
                   },
                   "keyword1":{
                       "value":"'.$content['keyword1'].'",
                       "color":"#173177"
                   },
                   "keyword2": {
                       "value":"'.$content['keyword2'].'",
                       "color":"#173177"
                   },
                   "keyword3": {
                       "value":"'.$content['keyword3'].'",
                       "color":"#173177"
                   },
                   "remark":{
                       "value":"'.$content['remark'].'",
                       "color":"#173177"
                   }
				}
			}';
				
	return curlGet($url,$data);
}

//获取TOKEN
function getAccessToken(){
	
	$info = OnlineWxconfig::get(1);
	
	$time_now= date('Y-m-d H:i:s',time());
	
	if(strtotime($info['expires_end'])<strtotime($time_now))
	{			
		$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$info['appid']."&secret=".$info['appsecert'];
		 
		$html = file_get_contents($url);
		
		$data=json_decode($html,true);
                
		$add_config=array(
		   'access_token'=>$data['access_token'],
		   'expires_in'=>$data['expires_in'],
		   'expires_statr'=>date('Y-m-d H:i:s',time()),
		   'expires_end'=>date("Y-m-d H:i:s",time()+ $data['expires_in'])
		); 

		OnlineWxconfig::where(['id'=>1])->update($add_config);

		$token=$data['access_token'];
	}
	else
	{   
		$token=$info['access_token'];

	}
	return $token;

}


/**
 * curl远程传输
 */
function curlGet($url,$data,$post="post"){
	$ch = curl_init();
	$header = "Accept-Charset: utf-8";
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $post);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	//curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
	//curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$temp = curl_exec($ch);
	curl_close($ch);
	return json_decode($temp,true);
}
