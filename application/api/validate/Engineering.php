<?php
namespace app\api\validate;


class Engineering extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'builder'            => 'require',
        'leader'             => 'require',
        'phone'              => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'builder.require'              => '建设方名称不能为空',
        'leader.require'              => '负责人姓名不能为空',
        'phone.require'              => '负责人电话不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['builder','leader','phone'],
	'add' =>  ['builder','leader','phone']
    ];
    
}