<?php
namespace app\api\controller\v1;
use app\api\service\AppToken;
use app\api\validate\AppTokenGet;
use app\api\service\Token as TokenService;

class Token
{
    public function getAppToken($username='', $password=''){
        (new AppTokenGet())->goCheck();
         $app = new AppToken();
         $token = $app->get($username,$password);
         if(isset($token['code']) && $token['code'] == 10004){
             return $token;
         }
         $data = [
             'token' => $token
         ];
         return setRetrunData('success',$data);
    }

   public function verifyToken($token=''){
       if(!$token){
           throw new ParameterException([
               'token不允许为空'
           ]);
       }
       $valid = TokenService::verifyToken($token);
       return [
           'isValid' => $valid
       ];
   }

}