<?php


namespace app\api\validate;


class AppTokenGet extends BaseValidate
{
    protected $rule = [
        'username' => 'require|isNotEmpty',
        'password' => 'require|isNotEmpty'
    ];
}