<?php


namespace app\api\validate;


class EditPwd extends BaseValidate
{
    protected $rule =[
        'password'=>'require|isNotEmpty',
        'new_pwd'=>'require|isNotEmpty',
        're_pwd'=>'require|isNotEmpty|confirm:new_pwd',
    ];
}