<?php
namespace app\api\validate;


class OnlineServices extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'title'              => 'require',
        'category'              => 'gt:0'
    ];

    // 验证提示
    protected $message  =   [
        
        'title.require'              => '服务名称不能为空',
        'category'               => '服务类型不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['title','category'],
	 	'add' =>   ['title','category']
    ];
    
}