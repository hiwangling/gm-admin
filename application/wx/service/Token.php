<?php
namespace app\wx\service;
use app\lib\exception\TokenException;
use think\Cache;
use think\Exception;
use think\Request;

class Token
{

    public static function getCurrentToken(){
        $token = Request::instance()
            ->header('token');
        $vars = Cache::get($token);
        if (!$vars)
        {
           //throw new Exception('无法获取的Token变量');
			 throw new TokenException();
        }else{
           return $vars;
        }

    }

    public static function getOpenid(){
		
        $mid = self::getCurrentToken();
		
        return $mid;
    }

    public static function verifyToken($token){
        $exist = Cache::get($token);
        if($exist){
            return true;
        }
        else{
            return false;
        }
    }


}