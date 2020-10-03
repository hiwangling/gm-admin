<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;
use app\api\validate\NewAuthRule;
use app\api\model\AuthRule as AuthRuleModel;
use app\api\model\Branch as BranchModel;
use app\lib\exception\ParameterException;

class AuthRule extends BaseController
{
    public function authRuleList()
    {
        $list = AuthRuleModel::all();
        return setRetrunData('success', $list);
    }

    public function authRuleAll($id)
    {
        $id = (int)$id;
        $branch = BranchModel::get($id);
        $menus = AuthRuleModel::getAuthRules();
        if ($branch->rules)
            $my_menus = AuthRuleModel::getAuthRulesById($branch->rules);
        else
            $my_menus = [];
        $datas = [
            'systemPermissions' => $menus,
            'assignedPermissions' => $my_menus
        ];
        return setRetrunData('success', $datas);
    }

    public function authRuleAdd()
    {
        $validate = new NewAuthRule();
        $validate->goCheck();
        $data = $validate->getDataByRule(input('post.'));

        $auth_rule = AuthRuleModel::get(['url' => $data['url']]);
        if ($auth_rule) {
            throw new ParameterException([
                'msg' => '重复url',
                'errorCode' => 10007
            ]);
        }

        if (AuthRuleModel::create($data)) {
            return setRetrunData('保存成功');
        } else {
            return setRetrunData('保存失败', '', 1);
        }
    }

    public function authRuleEdit()
    {

    }

}