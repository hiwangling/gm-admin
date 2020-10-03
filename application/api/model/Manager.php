<?php
namespace app\api\model;


class Manager extends BaseModel
{
    protected $autoWriteTimestamp = true;
    protected $hidden = ['password','update_time','create_time'];

    public static function checkManager($username,$password){
        $manager = self::where('username','=',$username)->where('password','=',md5(md5($password)))
            ->find();
        return $manager;
    }


}