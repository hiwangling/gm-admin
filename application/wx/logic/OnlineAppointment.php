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

namespace app\wx\logic;

class OnlineAppointment extends BaseLogic
{

    
    /**
     * 获取预约数据添加
     */
    public function appointmentAdd($data=[])
    {
        $result = $this->modelOnlineAppointment->addInfo($data);
        
        if ($result) {
            //二维码生成
            $url = get_url().'/yy?tid='.$result;
            $imgPath = qrcode($url, time());
            $this->modelOnlineAppointment->updateInfo(['id'=>$result], ['ermthumb'=>$imgPath]);
            //发送短信消息
            $timeInfo = $this->logicOnlineAppointmenttime->getAppointmenttimeInfo(['id'=>$data['tid']], 'id,starttime,endtime');
            /*$content='【黄陂长乐园】尊敬的家属，您的预约预约已成功,预约的日期为['.$data['maketime'].'],时间定为:'.$timeInfo['starttime'].'-'.$timeInfo['endtime'].',人数:'.$data['people_count'].'人,车辆:'.$data['car_count'].'台。请您根据预约的时间到园区祭扫,谢谢您的合作与支持。';
            $result = $this->logicOnlineRandom->sendSMS($content,$data['phone']);*/
            //微信消息推送
            $userInfo = $this->logicOnlineMember->getUserInfo(['id'=>$data['uid']], 'id,openid');
            $content = array(
                'first'=>'尊敬的家属，您的预约已受理，请注意查看',
                'keyword1'=>'入园人数:'.$data['people_count'].'人,入园车辆:'.$data['car_count'].'台',
                'keyword2'=>"预约成功",
                'keyword3'=>$data['maketime'].' '.$timeInfo['starttime'].'-'.$timeInfo['endtime'],
                'remark'=>'请您根据预约的时间到园区祭扫,谢谢您的合作与支持'
            );
            orderOverWord($url, $content, $userInfo['openid']);
        }
        
        return $result ? setRetrunData(RESULT_SUCCESS, $result):setRetrunData(RESULT_ERROR, '', 1);
    }
    /**
     *  验证预约人数是否超额
     */
    public function verifyPeople($data=[])
    {
        //时间段限制人数
        $people_count = $this->logicOnlineAppointmenttime->getAppointmenttimeValue(['id'=>$data['tid']], 'people_count');
        //实际预约人数
        $countPeople = $this->getAppointmentStat(['maketime'=>$data['maketime'],'tid'=>$data['tid'],'status'=>1], 'SUM', 'people_count');
        
        $sumPeople = $countPeople+intval($data['people_count']);
        
        if ($people_count>=$sumPeople) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
     *  预约人数统计
     */
    public function getAppointmentStat($where = [], $stat_type = 'count', $field = 'id')
    {
        return $this->modelOnlineAppointment->stat($where, $stat_type, $field);
    }
    /**
     * 获取预约列表
     */
    public function getAppointmentList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS, $group='')
    {
        $where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        $this->modelOnlineAppointment->alias('a');
        
        $join = [
            [SYS_DB_PREFIX . "online_appointmenttime b", "b.id = a.tid", "left"],
        ];
        
        return $this->modelOnlineAppointment->getList($where, $field, $order, $paginate, $join, $group);
    }
    
    /**
     * 获取预约详情
     */
    public function appointmentInfo($where = [], $field = true)
    {
        $where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        $this->modelOnlineAppointment->alias('a');
        
        $join = [
            [SYS_DB_PREFIX . "online_appointmenttime b", "b.id = a.tid", "left"],
        ];
        
        return $this->modelOnlineAppointment->getInfo($where, $field, $join);
    }
    /**
     * 取消预约
     */
    public function appointmentDel($where=[])
    {
        if (empty($where)) {
            return setRetrunData('条件不能为空', '', 1);
        }

        $result = $this->modelOnlineAppointment->deleteInfo($where);//删除纪念馆
 
        return $result ? setRetrunData(RESULT_SUCCESS, $result):setRetrunData(RESULT_ERROR, '', 1);
    }
    
    /**
     * 获取预约时间区间列表搜索条件
     */
    public function getWhere($data = [])
    {
        $where = [];
        
        !empty($data['phone']) && $where['a.phone'] = $data['phone'];
        
        !empty($data['uid']) && $where['a.uid'] = $data['uid'];
        
        !empty($data['id']) && $where['a.id'] = $data['id'];
        
        return $where;
    }
}
