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
class Dplyfjtp extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'title'              => 'require',
        'image_url'              => 'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'title.require'              => '标题不能为空',
        'image_url.require'               => '图片地址不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['title','image_url'],
	 'add' =>  ['title','image_url'],
    ];
    
}