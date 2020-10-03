<?php
namespace app\api\validate;


class Repair extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'cid'              => 'require',
        'desc'              => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'cid.require'              => '墓穴ID不能为空',
        'desc.require'              => '问题描述不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['cid','desc'],
	'add'  =>  ['cid','desc']
    ];
    
}