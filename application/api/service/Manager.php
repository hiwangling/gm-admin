<?php
namespace app\api\service;

use app\api\model\AuthRule as AuthRuleModel;

use app\api\model\Branch as BranchModel;

class Manager extends Token
{

   public static function getManagerInfo($manager){
        $manager_info = $manager->visible([
			'id',
            'userno',
            'nickname',
            'realname',
            'username',
            'email',
            'mobile',
            'sex',
            'status',
            'grade_name',
            'garden_id',
            'deptid'
        ]);
        return $manager_info;
    }

    public static function getManagerMenu($manager){
         $aule = [];
         $manager_menus = [];
         $manager_auth_url = [];
         $manager_auth_url2 = [];

         $branch = BranchModel::get($manager->branch);
         $roles[]= $branch->branch_name;

         $allaule = [];
         $allurl = [];
         $allurl2 = [];

         $list = AuthRuleModel::where('status','=',1)->where('pid','<>',0)->select();
         foreach ($list as $k => $v){
             $allaule[strtolower($v->url)] = $v->id;
             $allurl[] = $v->url;
             $allurl2[] = $v['type'].' '.$v->url;
         }

         //取导航菜单
         $menus = AuthRuleModel::getNavMenu();

         if($manager->isadmin==1){
             $aule = $allaule;
             $manager_menus = $menus;
             $manager_auth_url = $allurl;
             $manager_auth_url2[] = '*';

         }else{
             $rules_arr = explode(",", $branch->rules);
             $where = [];
             $where['id'] = array('in', $rules_arr);
             $where['status'] = 1;
             $where['pid'] = array('<>',0);
             $auth_rules = AuthRuleModel::all($where);
             foreach ($auth_rules as $k => $v) {
                 $aule[strtolower($v->url)] = $v->id;
                 $manager_auth_url[] = $v->url;
                 $manager_auth_url2[] = $v['type'].' '.$v->url;
             }
             $manager_menus = AuthRuleModel::getNavMenu($rules_arr);
         }

         return [
             'allaule'=>$allaule,
             'aule'=>$aule,
             'manager_auth_url'=>$manager_auth_url,
             'manager_auth_url2'=>$manager_auth_url2,
             'manager_menus'=>$manager_menus,
             'roles'=>$roles
         ];

     }
}