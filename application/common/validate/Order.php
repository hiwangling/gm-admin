<?php
namespace app\common\validate;


class Order extends ValidateBase
{
    // 验证规则
    protected $rule =   [
        
        'cid'              => 'require|isPositiveInteger',
        'buyer_name'       => 'require',
        'sum_price'        => 'require',
		'financetype'      => 'require|gt:0',
		'seller_id'        => 'require',
		'sellname'        => 'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'cid.require'              => '墓穴ID不能为空',
        'cid.isPositiveInteger'    => '墓穴ID只能是整数',
        'buyer_name.require'       => '购买者姓名不能为空',
        'sum_price.require'        => '订单价格不能为空',
		'financetype.require'	   => '订单类型不能为空',
		'financetype'	   		   => '订单类型不能为空',
		'seller_id.require'        => '操作人不能为空',
		'sellname.require'         => '操作人姓名不能为空',
    ];

    // 应用场景
    protected $scene = [
        
    	'edit' =>  ['cid','buyer_name','sum_price'],
		'add' =>  ['cid','buyer_name','sum_price'],
		'dispose' =>  ['cid','buyer_name','financetype','seller_id','sellname'],
    ];
    
}