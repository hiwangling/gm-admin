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
 *历史信息逻辑
 */
class HistoryInfo extends BaseLogic
{
    
    /**
     * 获取历史信息列表
     */
    public function getHistoryInfoList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='')
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelHistoryInfo->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'order b', 'b.id = a.order_id AND b.status=1 AND b.financetype=4', 'left'],

        ];
		
		return $this->modelHistoryInfo->getList($where, $field , $order, $paginate,$join,$group);
    }
    
    /**
     * 获取历史单条信息
     */
    public function getHistoryInfoOne($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
	return $this->modelHistoryInfo->getInfo($where,$field);
    }
    
    /**
     * 历史信息添加
	 * @version v2;@editor Divider
     */
    public function historyInfoAdd($data = [],$rid)
    {	
		
		$history = $this->getHistoryData($data,$rid);
		
		$result = $this->modelHistoryInfo->addInfo($history);
		
        return $result?$result:false;
    }
	/**
     * 数据处理
	 * @version v2;@editor Divider
     */
	public function getHistoryData($data=[],$rid){
		
		$history = array(
			'order_id'=>$rid,
			'old_cid'=>$data['cid'],
			'old_cname'=>$data['old_name'],
			'new_cname'=>$data['new_name'],
			'new_cid'=>$data['new_cid'],
			'typeid'=>$data['typeid'],
			'begin_time'=>!empty($data['begin_time'])?$data['begin_time']:date('Y-m-d',time()),
			'end_time'=>!empty($data['end_time'])?$data['end_time']:'',
		);
		
		return $history;
		
	}
	
	/**
     * 获取墓穴记录搜索条件
     * @version v2;@editor Divider
     */
	public function getWhere($data=[]){
		
		$where=[];
		
		!empty($data['cid']) && $where['a.old_cid'] = $data['cid'];
		
		!empty($data['typeid']) && $where['a.typeid'] = $data['typeid'];
		
		//!empty($data['keyword']) && $where['a.buyer_name|c.cname|d.bury_name|d.pym'] = ['like', '%'.$data['keyword'].'%'];
		
		return $where;
		
	}
    
}
