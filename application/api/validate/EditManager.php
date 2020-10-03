<?php
namespace app\api\validate;


class EditManager extends BaseValidate
{
    protected $rule = [
        'realname' => 'require|isNotEmpty',
        'username' => 'require|isNotEmpty',
        'mobile'=>'require|isNotEmpty|isMobile',
        'branch'=>'require|isNotEmpty|isPositiveInteger'
    ];
}