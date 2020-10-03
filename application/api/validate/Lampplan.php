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
class Lampplan extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'year'              => 'require|unique:lampplan',
        'begindate'         => 'require',
        'enddate'           => 'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'year.require'              => '年份不能为空',
        'year.unique'               => '年份已经已存在',
        'begindate.require'              => '开始时间不能为空',
        'enddate.require'              => '结束时间不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['year','begindate','enddate'],
	'add' =>  ['year','begindate','enddate'],
    ];
    
}