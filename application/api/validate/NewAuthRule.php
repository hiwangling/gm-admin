<?php
namespace app\api\validate;


class NewAuthRule extends BaseValidate
{
   protected $rule = [
       'pid' => 'require|number',
       'type' => 'require|isNotEmpty',
       'url' => 'require|isNotEmpty',
       'title' => 'require|isNotEmpty',
       'status'=>'require|number',
       'ismenu'=>'require|number',
       'ordernum'=>'number'
   ];
}