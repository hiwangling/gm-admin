<?php
namespace app\api\validate;


class Cemetery extends BaseValidate
{
    // 验证规则
    protected $rule =   [
        
        'classify_id'              => 'require|isPositiveInteger',
        'type_id'              => 'require|isPositiveInteger',
        'sellprice'              => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'classify_id.require'              => '墓区不能为空',
        'classify_id.isPositiveInteger'              => '墓区ID只能是整数',
        'type_id.require'              => '墓穴类型不能为空',
        'type_id.isPositiveInteger'              => '墓穴类型只能是整数',
        'sellprice.require'              => '墓穴价格不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['classify_id','type_id','sellprice'],
	'add' =>  ['classify_id','type_id','sellprice']
    ];
    
}