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
 * 部门验证器
 */
class Branch extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'branch_name'              => 'require|unique:branch',
    ];

    // 验证提示
    protected $message  =   [
        
        'branch_name.require'              => '名称不能为空',
        'branch_name.unique'               => '名称已存在',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['branch_name'],
		'add' =>  ['branch_name'],
    ];
    
}
