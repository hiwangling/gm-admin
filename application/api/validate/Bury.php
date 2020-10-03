<?php
namespace app\api\validate;


class Bury extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'cid'              => 'require|isPositiveInteger',
        'vcname'              => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'cid.require'              => '墓穴ID不能为空',
        'cid.isPositiveInteger'        => '墓穴ID只能是整数',
        'vcname.require'              => '逝者姓名不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['cid','vcname'],
	'add' =>  ['cid','vcname']
    ];
    
}