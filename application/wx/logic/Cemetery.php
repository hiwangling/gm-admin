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

class Cemetery extends BaseLogic
{
    
   /**
     * 获取墓穴信息列表
	 * @version v2;@editor Divider
     */
    public function getCemeteryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelCemetery->alias('a');
		
        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = a.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type c', 'c.id = a.type_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = a.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = a.garden_id', 'left'],
			[SYS_DB_PREFIX . 'cemetery_auxiliary f', 'f.cid = a.id AND f.status=1', 'left']
        ];

        return $this->modelCemetery->getList($where, $field , $order, $paginate, $join);
    }
	
	
	/**
     * 墓穴信息单条详情
	 * @version v2;@editor Divider
     */
    public function getCemeteryInfo($where = [], $field = true)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        $this->modelCemetery->alias('a');

        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = a.garden_id AND b.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'c.id = a.classify_id AND c.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = a.style_id AND d.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type e', 'e.id = a.type_id AND e.status=1', 'left'],
			[SYS_DB_PREFIX . 'cemetery_auxiliary f', 'f.cid = a.id AND f.status=1', 'left']
        ];

        return $this->modelCemetery->getInfo($where, $field, $join);
    }
	
	/**
     * 获取墓穴信息查询条件
	 * @version v2;@editor Divider
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['a.vno|a.cname|f.bury_name'] = ['like', '%'.$data['keyword'].'%'];
		
		!empty($data['y_id']) && $where['a.garden_id'] = $data['y_id'];
		
		!empty($data['type_id']) && $where['a.type_id'] = $data['type_id'];
		
		!empty($data['style_id']) && $where['a.style_id'] = $data['style_id'];
		
		!empty($data['usestatus']) && $where['a.usestatus'] = $data['usestatus'];
		
		!empty($data['q_id']) && $where['a.classify_id'] = $data['q_id'];
        
        return $where;
    }
	
	/**
     * 销售状态数量
     * @param type $q_id 园区
     * @param type $state 销售状态
     * @return type
	 * @version v2;@editor Divider
     */
    public function xiaoshouCount($q_id,$state)
    {
        $where = [];
		if($state){
			$where ['usestatus'] = $state;
		}
        if ($q_id) {
          $where ['classify_id'] = $q_id;
        }
        return $this->modelCemetery->stat($where,'count','id');
    }
	
	/**
     * 根据条件修改墓穴状态
	 * @version v2;@editor Divider
     */
    public function updateCemeteryUsestatus($where = [],$data =[])
    {
       return $this->modelCemetery->updateInfo($where,$data);
    }
	
	/**
     * 墓穴信息单条数据
	 * @version v2;@editor Divider
     */
    public function getCemeteryValues($where = [], $field = true){
		
		return $this->modelCemetery->getValue($where, $field);
		
	}
    
}
