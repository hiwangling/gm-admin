<?php
namespace app\weixin\controller\v1;
use app\weixin\validate\IDMustBePositiveInt;
use app\weixin\validate\NewServicebill;
use app\weixin\model\Servicebill as ServicebillModel;
use app\weixin\model\ServiceInfo as ServiceInfoModel;
use think\Controller;

class Servicebill extends Controller
{
    /**
     * 获取部门任务
     * @return type
     */
    public function serviceInfosByCemeteryDept()
    {
        $keyword = input('keyword');
        $where = [];
        $cids = [];
        if ($keyword) {
            $where2['vno|cname|muzhu_name'] = array('like', '%' . $keyword . '%');
            $cemetery = CemeteryModel::where($where2)->select();
            if ($cemetery) {
                foreach ($cemetery as $k => $v) {
                    $cids[] = $v['id'];
                }
            }
        }
        if ($cids) {
            $where['cid'] = array('in', $cids);
        }
        $m_branch = input('branchID');
        $serviceinfos = ServiceInfoModel::where(['deptid' => $m_branch])->select();
        if (!$serviceinfos)
            return setRetrunData('success', []);
        $service_ids = [];
        foreach ($serviceinfos as $k => $v) {
            $service_ids[] = $v['id'];
        }
        $where['service_id'] = array('in', $service_ids);
        $where['status'] = 1;
        $services = ServicebillModel::where($where)->field('cid')->group('cid')->select();
        if (!$services) {
            return setRetrunData('success', []);
        }
        foreach ($services as $k => $v) {
            $services[$k]['cname'] = getCemeteryFullName($v['cid']);
            $services[$k]['vcname'] = getBuryNames($v['cid']);
            $services[$k]['finish_num'] = $this->getServiceFinishNum($v['cid']);
            $services[$k]['to_be_com_num'] = $this->getServiceToBeComNum($v['cid']);
            $services[$k]['wancheng_status'] = $services[$k]['to_be_com_num'] > 0 ? '1' : '2';
            $services[$k]['servicebill'] = $this->getServicebillByCid($v['cid']); 
        }
        return setRetrunData('success', $services);

    }
    
    public function ServicebillExecute(){
        (new IDMustBePositiveInt())->goCheck();
        $id = input('id');

        $validate = new NewServicebill();
        $validate->goCheck();
        $data = input('post.');
        $execdate = $data['execdate'];

        $servicebill = ServicebillModel::get($id);
        $servicebill->execdate = strtotime($data['execdate']);
        $servicebill->execnote = $data['execnote'];
        $servicebill->exechrm = $data['realname'];
        $servicebill->resutlstatus = 2;
        $servicebill->operater_id = $data['mid'];
        $servicebill->operater_name = $data['mid'];
        $servicebill->image_url = input('image_url')?input('image_url'):'';

        if ($servicebill->save()) {
            $servicebill->execdate = $execdate;
            return setRetrunData('保存成功', $servicebill,0);
        } else {
            return setRetrunData('保存失败', '', 1);
        }
    }

    public function getServicebillOne()
    {
        (new IDMustBePositiveInt())->goCheck();
        $id = input('id');
        $one_service = ServicebillModel::get($id);
        if ($one_service) {
            $one_service->execdate = date('Y-m-d', $one_service->execdate);
            return setRetrunData('success', $one_service);
        }
        else
            return setRetrunData('无数据', [],1);
    }
    
    public function getServicebillByCid($cid)
    {
        $service_bills = ServicebillModel::where(['cid' => $cid,'status' => 1])->field('id,service_name,serviceamount,begindate,enddate,resutlstatus')->select();
        if ($service_bills) {
            foreach ($service_bills as $k => $v) {
                $service_bills[$k]['begindate'] = date('Y-m-d', $v->begindate);
                $service_bills[$k]['enddate'] = date('Y-m-d', $v->enddate);
            }
        }
        return $service_bills;
    }
    
    private function getServiceFinishNum($cid)
    {
        return ServicebillModel::where(['cid' => $cid, 'resutlstatus' => 2,'status' => 1])->count();
    }

    private function getServiceToBeComNum($cid)
    {
        return ServicebillModel::where(['cid' => $cid, 'resutlstatus' => 1,'status' => 1])->count();
    }

}