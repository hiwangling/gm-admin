<?php
namespace app\api\service;
//use app\lib\exception\TokenException;
use app\api\model\Manager as ManagerModel;
use app\api\model\AuthRule as AuthRuleModel;

class AppToken extends Token
{
   public function get($username, $password){
       $manager = ManagerModel::checkManager($username,$password);
       if(!$manager){
          return setRetrunData('用户名密码错误，授权失败！', "",10004);
        /**throw new TokenException([
              'msg' => '授权失败',
              'errorCode' => 10004
          ]); **/
       }else{
           $mid = $manager->id;
           $values = [
               'mid' => $mid
           ];
		   $mid && action_log('登录', '登录成功',$manager);
           $token = $this->saveToCache($values);
           return $token;
       }

   }

   private function saveToCache($values){
       $token = self::generateToken();
       $expire_in = config('setting.token_expire_in');
       $result = cache($token, json_encode($values), $expire_in);
       if(!$result){
            return setRetrunData('服务器缓存异常', "",10005);
        /**throw new TokenException([
               'msg' => '服务器缓存异常',
               'errorCode' => 10005
           ]);**/
       }
       return $token;
   }
}