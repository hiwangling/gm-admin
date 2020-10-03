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
class Dept extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'vcname'              => 'require|unique:dept',
    ];

    // 验证提示
    protected $message  =   [
        
        'vcname.require'              => '名称不能为空',
        'vcname.unique'               => '部门已经已存在',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['vcname'],
	 'add' =>  ['vcname'],
    ];
    
}