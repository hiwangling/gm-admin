<?php
namespace app\api\validate;


class OnlineShoptype extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'title'              => 'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'title.require'              => '服务分类名称不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['title'],
	 	'add' =>   ['title'],
    ];
    
}