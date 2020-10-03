<?php

namespace app\wx\controller\v1;
use app\wx\model\OnlineWxconfig as OnlineWxconfig;
use app\wx\logic\OnlineMember as OnlineMember;
use think\Cache;

/*use think\Controller;
use think\Db;*/

class Accesstoken{

    /**
     * 获取用户的openid
     * @param  string $openid [description]
     * @return [type]         [description]
     */
    public function baseAuth(){
       
            //静默授权,获取code
            //页面跳转至redirect_uri/?code=CODE&state=STATE
            $code = input('code');
            if(!empty($code))
            {

				$access_token = $this->getAccessToken($code);

				$userInfoUrl = userInfourl($access_token['access_token'],$access_token['openid']);
				
				$OnlineMember = new OnlineMember();
				
				//$userinfo = $OnlineMember->getUserInfo(['openid'=>$access_token['openid'],'status'=>1],'*');
				
				$userinfo = $OnlineMember->getMemberInfo(['a.openid'=>$access_token['openid'],'a.status'=>1],'a.*,b.username as m_username,b.realname as m_realname');
				
				$userData = $userInfoUrl;
				
				$userData['access_token'] = $access_token['access_token'];
				
				if(empty($userinfo)){
					
					$uid = $OnlineMember->disposeMemberAdd($userData);
					
					$userinfo = $OnlineMember->getUserInfo(['id'=>$uid,'status'=>1],'*');
					
				}else{

					$OnlineMember->disposeMemberEdit($userData);

				}
				
				 $list = array(
					"token" => $access_token,
					"user" => $userInfoUrl,
					"userinfo" => $userinfo
				);
				
				return setRetrunData(RESULT_SUCCESS, $list);
            }
            else
            {
                return setRetrunData('code为空', "",1);
            }
    }

	/**
     * 获取用户的AccessToken
     */
	public function getAccessToken($code){
		
		$config = OnlineWxconfig::get(1);//$this->logicOnlineWxconfig->configInfo(['id'=>1],'*');
		
		$access_token = accessTokenCome($config['appid'],$config['appsecert'],$code);
		
		//加入缓存
		/*$result = cache($access_token['access_token'],$access_token['openid'],$access_token['expires_in']);//$access_token['expires_in']
		
		if(!$result){
			 return setRetrunData('服务器缓存异常', "",1);
		}*/
		
		return $access_token;
	}
	
	public function unsetCache(){
		
		$cache = new Cache();

		$cache::clear();
	}

}

    
    