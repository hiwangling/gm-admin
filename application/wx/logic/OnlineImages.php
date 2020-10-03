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

class OnlineImages extends BaseLogic
{
    
    /**
     * 获取图片列表列表
     */
    public function getImagesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelOnlineImages->getList($where, $field , $order, $paginate);
    }
	
	
	/**
     * 获取图片列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['type']) && $where['type'] = ['like', '%'.$data['type'].'%'];
        
        return $where;
    }
   
    
}
