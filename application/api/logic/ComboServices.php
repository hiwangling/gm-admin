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
 * 套餐服务表逻辑
 */
class ComboServices extends BaseLogic
{
    
    /**
     * 获取套餐详细服务列表
	 * @version v2;@editor Divider
     */
    public function getComboServicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelComboServices->alias('a');

			$join = [
				
				[SYS_DB_PREFIX . 'service_info s', 's.id = a.sid','left'],	
				
			];
		return $this->modelComboServices->getList($where,$field,$order,$paginate,$join);
    }
	
    /**
     * 套餐子服务信息添加
	 * @version v2;@editor Divider
     */
    public function comboServicesAdd($data=[],$cid)
    {
        foreach($data as $k=>$v){
            $add_data = array(
                'cid'=>$cid,
                'sid'=>$v['id'],
                'number'=>$v['amount'],
                'price'=>$v['sell_price'],
				'totalprice'=>$v['totalprice']
            );
            $this->modelComboServices->addInfo($add_data);
        }
    }
    
    /**
    * 套餐服务详情
	* @version v2;@editor Divider
    */
   public function comboServicesInfo($where=[],$field=true){

        $this->modelComboServices->alias('a');

        $join = [
             [SYS_DB_PREFIX . 'service_info s', 's.id = a.sid','left'],	
        ];

        return $this->modelComboServices->getInfo($where,$field,$join);

   }
    
}
