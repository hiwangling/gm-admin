<?php
// +---------------------------------------------------------------------+
// | OneBase    | [ WE CAN DO IT JUST THINK ]                            |
// +---------------------------------------------------------------------+
// | Licensed   | http://www.apache.org/licenses/LICENSE-2.0 )           |
// +---------------------------------------------------------------------+
// | Author     | Bigotry <3162875@qq.com>                               |
// +---------------------------------------------------------------------+
// | Repository | https://gitee.com/Bigotry/OneBase                      |
// +---------------------------------------------------------------------+

namespace app\api\validate;

/**
 * 墓穴样式
 */
class CemeteryStyle extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
                 'type_name'              => 'require',
                 'price'              => 'require',
		
    ];

    // 验证提示
    protected $message  =   [
        
        'type_name.require'              => '样式名称不能为空',
        'price.require'              => '价格不能为空',
         
    ];

    // 应用场景
    protected $scene = [
        
        'edit' => ['type_name','price'],
	 'add' =>  ['type_name','price'],
    ];
    
}
