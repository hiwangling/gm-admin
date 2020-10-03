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

namespace app\dp\logic;
 

/**
 * 墓穴信息逻辑
 */
class Index extends BaseLogic
{
    
    /**
     * 获取墓穴信息列表
     */
    public function getCemeteryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelCemetery->alias('a');
        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = a.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type c', 'c.id = a.type_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = a.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = a.garden_id', 'left']
        ];

        return $this->modelCemetery->getList($where, $field , $order, $paginate, $join);
    }
    
    /**
     * 获取
     */
    public function getCemeteryClassifyList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        return $this->modelCemeteryClassify->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 获取大屏图片列表
     */
    public function getDplyfjtpList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
	
        return $this->modelDplyfjtp->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 销售状态数量
     * @param type $q_id 园区
     * @param type $state 销售状态
     * @return type
     */
    public function xiaoshouCount($q_id,$state)
    {
        $where = [];
        $where ['usestatus'] = $state;
        if ($q_id) {
          $where ['classify_id'] = $q_id;
        }
        return $this->modelCemetery->stat($where,'count','id');
    }
    
    /**
     * 安葬总人数
     * @return int
     */
    public function getBuryCount()
    {
        /*$where['b.usestatus'] = 3;
        $where['b.delete_time'] = NULL;
        $where['b.status'] = 1;
        $where['a.bury_status'] = 0;
        $where['a.status'] = 1;
        $where['a.delete_time'] = NULL;
        $where['a.bury'] = array('eq',date('y-m-d',time()));
        $burycount = Db::name('bury')->alias('a')
                    ->field('a.id')
                    ->join('ky_cemetery b','a.cid =b.id','left')
                    ->where($where)->count();
        return $burycount;*/
        return 0;
    }
    
    public function getCemeteryInfo($where = [], $field = true)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        $this->modelCemetery->alias('a');

        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = a.garden_id AND b.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'c.id = a.classify_id AND c.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = a.style_id AND d.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type e', 'e.id = a.type_id AND e.status=1', 'left'],
        ];

        return $this->modelCemetery->getInfo($where, $field, $join);
    }
    
    /**
     * 墓穴名称集合
     * @param type $cid
     * @return string
     */
    public function getCemeteryFullName($cid=0,$yuan=true)
    {
        $data = $this->getCemeteryInfo(['a.id' =>$cid], 'a.*,b.type_name gardenname,'
                . 'c.type_name classifyname,d.type_name stylename,e.type_name typename');
        if(empty($data))
        {
            return '';
        }
        else 
        {
            if($yuan)
            {
                return $cname =$data['gardenname'].$data['classifyname'].$data['cname'];
            }
            else
            {
                return $cname =$data['classifyname'].$data['cname'];
            }
        }
        
    }
    
    /**
     * 获取墓穴信息查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['a.vno|a.cname|a.muzhu_name|a.pym'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
    
    
}
