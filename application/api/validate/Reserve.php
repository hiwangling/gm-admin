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
class Reserve extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'buyer_name'              => 'require',
        'phone'              => 'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'buyer_name.require'              => '预订人姓名不能为空！',
        'phone.require'               => '电话号码不能为空！',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['buyer_name'],
	 'add' =>  ['phone'],
    ];
    
}