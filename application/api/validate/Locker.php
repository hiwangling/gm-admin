<?php
namespace app\api\validate;


class Locker extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'ix'             => 'require|isPositiveInteger',
		'iy'             => 'require|isPositiveInteger',
        'start'          => 'require|isPositiveInteger'
    ];

    // 验证提示
    protected $message  =   [
        
        'ix.require'              => '排不能为空',
        'ix.isPositiveInteger'    => '排只能为整数',
        'start.require'           => '号码不能为空',
        'start.isPositiveInteger' => '号码只能为整数',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['ix','start'],
		'add' =>  ['ix','start']
    ];
    
}