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

namespace app\api\logic;

/**
 * 骨灰阁管理
 */
class Locker extends BaseLogic
{
    
    /**
     * 获取骨灰阁列表
     */
    public function getLockerList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelLocker->alias('a');
        
        $join = [
            
            [SYS_DB_PREFIX . 'save b', 'b.loid = a.id AND b.status=1 AND b.save_status=1', 'left'],
            
            [SYS_DB_PREFIX . 'order c', 'c.cid = b.id AND c.status=1 AND c.financetype=8', 'left'],
        ];
        
        return $this->modelLocker->getList($where, $field, $order, $paginate, $join);
    }
    
    /**
     * 获取骨灰阁单个字段
     */
    public function getLockerValue($where = [], $field = '')
    {
        
        //$where[DATA_STATUS_NAME] = ['neq', DATA_DELETE];
        
        return $this->modelLocker->getValue($where, $field);
    }
    
    /**
     * 骨灰阁信息添加
     * @version v2;@editor Divider
     */
    public function LockerAdd($data = [])
    {
        $validate_result = $this->validateLocker->scene('add')->check($data);
        
        if (!$validate_result) {
            return setRetrunData($this->validateLocker->getError(), '', 1);
        }
        
        //$data[TIME_CT_NAME] = TIME_NOW;
        $locker = array(
            'ix'=>$data['ix'],
            'classly'=>$data['classly']
        );
        if (!empty($data['end'])) {
            for ($i=$data['start'];$i<=$data['end'];$i++) {
                $locker['title'] = $data['ix'].'排'.$i.'号';
                $locker['iy'] = $i;
                $result = $this->modelLocker->addInfo($locker);
            }
        } else {
            $locker['title'] = $data['ix'].'排'.$data['start'].'号';
            $locker['iy'] = $data['start'];
            $result = $this->modelLocker->addInfo($locker);
        }

        $result && action_log('新增骨灰阁', '新增骨灰阁，ix：' . $locker['ix']);
        
        return $result ? setRetrunData(RESULT_SUCCESS, $result):setRetrunData(RESULT_ERROR, '', 1);
    }
    
    /**
     * 骨灰阁信息编辑
     * @version v2;@editor Divider
     */
    public function LockerEdit($data = [])
    {
        $validate_result = $this->validateLocker->scene('edit')->check($data);
        
        if (!$validate_result) {
            return setRetrunData($this->validateLocker->getError(), '', 1);
        }
        $data['title'] = $data['ix'].'排'.$data['start'].'号';
        $locker = array(
            'ix'=>$data['ix'],
            'iy'=>$data['start'],
            'title'=>$data['title'],
            'id'=>$data['id']
        );
        $result = $this->modelLocker->setInfo($locker);
        
        $result && action_log('编辑骨灰阁', '编辑骨灰阁，title：' . $data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS, $result):setRetrunData(RESULT_ERROR, '', 1);
    }
    
    
    /**
     * 骨灰阁删除
     * @version v2;@editor Divider
     */
    public function LockerDel($where = [])
    {
        $state = $this->getLockerValue($where, 'state');
        
        if ($state==1) {
            return setRetrunData('请先移除该柜中的骨灰', '', 1);
        }
        
        $result = $this->modelLocker->deleteInfo($where);
        
        $result && action_log('删除骨灰阁', '删除骨灰阁' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS, $result):setRetrunData(RESULT_ERROR, '', 1);
    }
    
    /**
     * 获取骨灰阁详情
     * @version v2;@editor Divider
     */
    public function getLockerInfo($where = [], $field = true)
    {
        return $this->modelLocker->getInfo($where, $field);
    }
    
    /**
     * 获取骨灰阁列表搜索条件
     * @version v2;@editor Divider
     */
    public function getWhere($data = [])
    {
        $where = [];
        
        !empty($data['keyword']) && $where['a.title|b.buyer_name|b.phone|b.name'] = ['like', '%'.$data['keyword'].'%'];
        
        !empty($data['state']) && $where['a.state'] = $data['state'];
        
        !empty($data['classly']) && $where['a.classly'] = $data['classly'];
        
        if (!empty($data['startime']) && !empty($data['endtime'])) {
            $where['b.savebegindate'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];
        }
        
        return $where;
    }
    
    /**
     * 获取骨灰阁修改方法
     * @version v2;@editor Divider
     */
    public function LockerUpdate($where=[], $data=[])
    {
        $result = $this->modelLocker->updateInfo($where, $data);
        
        return $result ? setRetrunData(RESULT_SUCCESS, $result):setRetrunData(RESULT_ERROR, '', 1);
    }
    
    /**
     * 获取骨灰阁统计
     */
    public function getLockerStat($where = [], $stat_type='count', $field = 'id')
    {
        
        //$where[DATA_STATUS_NAME] = ['neq', DATA_DELETE];
        
        return $this->modelLocker->stat($where, $stat_type, $field);
    }
}
