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
 * 车辆证器
 */
class CemeteryClassify extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'type_name'              => 'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'type_name.require'              => '墓区名称不能为空',
    
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['type_name'],
	'add' =>  ['type_name'],
    ];
    
}
