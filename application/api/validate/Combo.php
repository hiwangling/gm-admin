<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\api\validate;

/**
 * Description of Dept
 *
 * @author Administrator
 */
class Combo extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'service_name'             => 'require|unique:combo',
		'services'           => 'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'service_name.require'              => '服務名称不能为空',
        'service_name.unique'               => '服務名称已存在',
		'services.unique'               => '套餐服务不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['services'],
		'add' =>  ['service_name','services'],
    ];
    
}