<?php
//use app\api\model\Order as OrderModel;
//use app\api\model\Cemetery as CemeteryModel;
//use app\api\model\CemeteryClassify as CemeteryClassifyModel;
//use app\api\model\Bury as BuryModel;
//use app\api\model\Servicebill as ServicebillModel;
//use app\api\model\Images as ImagesModel;
use app\wx\logic\Log as LogicLog;
use app\wx\model\OnlineWxconfig as OnlineWxconfig;
use think\Image;

function checkisPositiveInteger($value)
{
    if (is_numeric($value) && is_int($value + 0) && ($value + 0) > 0) {
        return true;
    }
    return false;
}

function getRandChar($length)
{
    $str = null;
    $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    $max = strlen($strPol) - 1;

    for ($i = 0;
         $i < $length;
         $i++) {
        $str .= $strPol[rand(0, $max)];
    }

    return $str;
}

function setRetrunData($msg, $data = '', $errorCode = 0)
{
    $request = \think\Request::instance();
    $result = [
        'msg' => $msg,
        'code' => $errorCode,
        'request_url' => $request->baseUrl(),
        'data' => $data
    ];
    return $result;
}


/**
 * 记录行为日志
 */
function action_log($name = '', $describe = '',$manager = '')
{

    //$logLogic = get_sington_object('logLogic', LogicLog::class);
    
    //$logLogic->logAdd($name, $describe,$manager);
}

/**
 * 获取code
 */
function codeGet($appid,$state){
	$url = urlencode("http://hbhq.1169168.cn/index.php/Login/enter");
	header("location:https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$appid."&redirect_uri=$url&response_type=code&scope=snsapi_base&state=".$state."#wechat_redirect");
}

/**
 * 获取access_token，静默授权
 */
function accessTokenCome($appid,$appsecert,$code){
	
	 $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$appsecert.'&code='.$code.'&grant_type=authorization_code';
	
	//return https_request($url);
	return curlGet($url,'','get');
}

/**
 * 获取用户信息，静默授权
 */
function userInfourl($access_token,$openid){
	
	$url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN ';
	//$userInfourl = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=".$access_token."&openid=".$openid."&lang=zh_CN";
	return curlGet($url,'','get');
}


function https_request($url)
{
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$data = curl_exec($curl);
	if (curl_errno($curl)){
		return 'ERROR'.curl_error($curl);
	}
	curl_close($curl);
	return $data;
}

function uploadfiles($f)
{
	$thumb_config = ['small' => 300, 'medium' => 500, 'big' => 1000];
	
	$img = '';
    if (!$_FILES) {
        return '';
    }
    $temp_files_arr = array_keys($_FILES);
    $file = request()->file($temp_files_arr[0]);
    $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads' . DS . $f);
	
        if(!$info) {
            return '';
        } else {
			$save_name = $info->getSaveName();
			$filename = $info->getFilename();
			$picture_dir_name = substr($save_name, 0, strrpos($save_name, DS));
			$thumb_dir_path = 'uploads' . DS .$f. DS . $picture_dir_name;
            $img = 'uploads' . DS . $f . DS . $save_name;
			Image::open($img)->thumb($thumb_config['small']   , $thumb_config['small'])->save($thumb_dir_path. DS . 'small_'.$filename,null,100);
			//删除图片
			//unlink($img);
			//thum($img,$thumb_config['small'],$thumb_config['small'],'small');
        }
    return $img;
}




//订单消息推送
function orderBuyWord($jump,$keyword1,$keyword2,$openid){
	
	$token = getAccessToken();
		 
	$url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='.$token;
	$jump = !empty($jump)?$jump:'http://www.baidu.com';
	$content = array(
		'first'=>'尊敬的客户，您购买了新的商品，请及时查看：',
		'keyword1'=>$keyword1,
		'keyword2'=>$keyword2,
		'keyword3'=>date('Y-m-d H:i',time()),
		'keyword4'=>'快云科技',
		'keyword5'=>'0717-6529595',
		'remark'=>'感谢您的使用'
	);
	
	$data = '{
				"touser":"'.$openid.'",
				"template_id":"kZhQNy__yeP3tLc4_ilM4v8c00ksNQAtNeupS_LY--k",
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
				   "keyword4": {
                       "value":"'.$content['keyword4'].'",
                       "color":"#173177"
                   },
				   "keyword5": {
                       "value":"'.$content['keyword5'].'",
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