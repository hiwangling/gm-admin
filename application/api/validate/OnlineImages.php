<?php
namespace app\api\validate;


class OnlineImages extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'title'              => 'require',
        'thumb'              => 'require',
        'type'              => 'gt:0'
    ];

    // 验证提示
    protected $message  =   [
        
        'title.require'              => '图片名称不能为空',
        'thumb.require'              => '图片路径不能为空',
        'type.require'               => '图片分类不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['title','thumb','type'],
	 	'add' =>   ['title','thumb','type']
    ];
    
}