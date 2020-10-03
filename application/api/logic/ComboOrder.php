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
 * 套餐记录表逻辑
 */
class ComboOrder extends BaseLogic
{
    
    /**
     * 获取套餐记录表列表
	 * @version v2;@editor Divider
     */
    public function getComboOrderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelComboOrder->getList($where, $field , $order, $paginate);
    }
	
	
	/**
     * 套餐订单添加
     * @version v2;@editor Divider
     */
	public function comboOrderAdd($data=[],$rid){
		
		$comboOrder = $this->getComboOrderData($data,$rid);
		
		$result = $this->modelComboOrder->addInfo($comboOrder);
		
		$result && action_log('新增套餐订单', '新增套餐订单，cid：' . $data['cid']);
        
        return $result ? $result:falsee;
		
	}
	
	/**
     * 套餐订单数据处理
     * @version v2;@editor Divider
     */
	public function getComboOrderData($data=[],$rid){
		
		$comboOrder = array(
			'order_id'=>$rid,
			'cid'=>$data['cid'],
			'sid'=>$data['id'],
			'title'=>$data['service_name'],
			'sell_price'=>$data['sell_price'],
			'number'=>$data['amount'],
			'totalprice'=>$data['totalprice']
		);
		
		return $comboOrder;
	}
	
	/**
     * 删除套餐明细表
     * @version v2;@editor Divider
     */
	public function ComboOrderDel($where=[]){
		
		$result = $this->modelComboOrder->deleteInfo($where);
        
        $result && action_log('删除套餐明细', '删除套餐明细' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}

}
