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
 

/**
 * 
 */
class CemeteryClassify extends BaseLogic
{

	/**
     * 获取墓园分类列表
	 *
     */
    public function getCemeteryClassifyList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        
        return $this->modelCemeteryClassify->getList($where, $field , $order, $paginate);
    }

}
