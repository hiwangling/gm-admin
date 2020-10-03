<?php
namespace app\api\validate;


class Linkman extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'cid'              => 'require|isPositiveInteger',
        'link_name'              => 'require',
		'phone'              => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'cid.require'              => '墓穴ID不能为空',
        'cid.isPositiveInteger'    => '墓穴ID只能是整数',
        'link_name.require'        => '联系人姓名不能为空',
		'phone.require'        => '联系人电话不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['cid','link_name'],
		'add' =>  ['cid','link_name','phone']
    ];
    
}