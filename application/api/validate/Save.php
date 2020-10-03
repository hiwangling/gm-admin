<?php
namespace app\api\validate;


class Save extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'buyer_name'        => 'require',
		'loid'        => 'require',
		'savebegindate'        => 'require',
		'order_end'        => 'require',
		'name'        => 'require',
        'phone'            => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'buyer_name.require'        => '联系人不能为空',
		 'loid.require'        => '柜号不能为空',
		'savebegindate.require'        => '寄存时间不能为空',
		'order_end.require'        => '结束时间不能为空',
		'name.require'        => '逝者名字不能为空',
        'phone.require'            => '联系电话不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['buyer_name','phone','savebegindate','name','loid'],
		'add'  =>  ['buyer_name','phone','savebegindate','name','loid'],
		'renew'=>  ['buyer_name','phone','saveenddate'],
    ];
    
}