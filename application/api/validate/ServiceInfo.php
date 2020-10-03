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
 * 服务信息验证器
 */
class ServiceInfo extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'service_name'              => 'require',

    ];

    // 验证提示
    protected $message  =   [
        
        'service_name.require'              => '服务名称不能为空',

    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['service_name'],
		'add' =>  ['service_name'],
    ];
    
}
