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

namespace app\wx\validate;

/**
 * 员工验证器
 */
class Manager extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'username'  => 'require|unique:manager',
        'password'  => 'require|length:6,20',
		'branch'		=> 'gt:0',
    ];

    // 验证提示
    protected $message  =   [
        
        'username.require'    => '用户名不能为空',
        'username.unique'     => '用户名已存在',
        'password.require'    => '密码不能为空',
        'password.length'     => '密码长度为6-20字符',
		'branch'       		=> '部门不能为空'
    ];

    // 应用场景
    protected $scene = [
        
        'add'   =>  ['username','password','branch'],
        'edit'  =>  ['username','branch'],
    ];
    
}
