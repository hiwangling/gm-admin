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
 * 服务工单信息逻辑
 */
class Servicebill extends BaseLogic
{
    /**
     * 获取服务工单列表
     */
    public function getServicebillList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['eq', DATA_NORMAL];

        return $this->modelServicebill->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 获取服务工单列表分组
     */
    public function getServicebillListGroup($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group ='')
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['eq', DATA_NORMAL];

        return $this->modelServicebill->getList($where, $field , $order, $paginate,[],$group);
    }
    
    /**
     * 获取服务工单单条数据
     */
    public function getServicebillInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['eq', DATA_NORMAL];

        return $this->modelServicebill->getInfo($where, $field);
    }
    
    public function ServicebillExecute($data =[]){
        
        $id = $data['id'];
        //$servicebill = $this->getServicebillInfo(['id' => $id],'*');
        $servicebill['execdate'] = strtotime($data['execdate']);
        $servicebill['execnote'] = $data['execnote'];
        $servicebill['exechrm'] = $data['userid'];
        $servicebill['resutlstatus'] = 2;
        $servicebill['operater_id'] = $data['userid'];
        $servicebill['operater_name'] = $data['username'];
        $servicebill['image_url'] = $data['image_url'] ? $data['image_url']:'';

        $result =$this->modelServicebill->updateInfo(['id'=> $id],$servicebill);
        $result && action_log('执行服务', '执行服务' . '，id：' .$id);
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        
    }

    /**
     * 获取任务完成数量
     * @param array $where
     * @return type
     */
    public function getServiceNum($where =[])
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['eq', DATA_NORMAL];

        return $this->modelServicebill->stat($where);
    }

    /**
     * 获取墓穴信息查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['vno|cname'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
}
