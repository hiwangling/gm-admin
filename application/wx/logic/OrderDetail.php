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
 * 订单详情表信息逻辑
 */
class OrderDetail extends BaseLogic
{
   /**
     * 获取订单详情列表
     */
    public function getOrderDetailList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['eq', DATA_NORMAL];

        return $this->modelOrderDetail->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 获取订单详情关联列表
     */
    public function getOrderDetailJoinList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelOrderDetail->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'service_info b', 'b.id = a.sid AND b.status=1', 'left'],
        ];

        return $this->modelOrderDetail->getList($where, $field , $order, $paginate,$join);
    }
    
    /**
     * 获取订单详情单条信息
     */
    public function getOrderDetailInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['eq', DATA_NORMAL];

        return $this->modelOrderDetail->getInfo($where, $field);
    }
	
	
	/**
     * 订单明细表添加
     * @version v2;@editor Divider
     */
	public function OrderDetailAdd($data=[],$rid,$financetype){
		
		$OrderDetail = $this->getOrderDetailData($data,$rid,$financetype);
		
		switch($financetype){
			case 3:
				$OrderDetail['sell_title'] = $data['service_name'];
				$OrderDetail['chargeunit']=!empty($data['chargeunit'])?$data['chargeunit']:'';
				$OrderDetail['combo_id']=!empty($data['combo_id'])?$data['combo_id']:0;
				$OrderDetail['service_type'] = $data['service_type'];
				$OrderDetail['sid'] = $data['id'];
				$OrderDetail['combo_type'] = $data['combo_type'];
				$OrderDetail['service_time'] = $data['service_time'];
				return $this->modelOrderDetail->addInfo($OrderDetail);
				break;
			default:
				if(!empty($data['real_price'])){
					$OrderDetail['chargeunit']='座';
					return $this->modelOrderDetail->addInfo($OrderDetail);
				}else{
					return false;
				}
		}
		
	}
	
	/**
     * 订单明细表编辑
     * @version v2;@editor Divider
     */
	public function OrderDetailEdit($data=[],$rid,$financetype){
		
		$OrderDetail = $this->getOrderDetailData($data,$rid,$financetype);
		
		$result = $this->OrderDetailUpdate(['cid'=>$data['cid'],'order_id'=>$rid,'sell_title_id'=>$financetype],$OrderDetail);
		
		return $result ? true:false;
	}
	
	/**
     * 订单明细表修改
	 * @version v2;@editor Divider
     */
	public function OrderDetailUpdate($where=[],$data=[]){
		
		$result = $this->modelOrderDetail->updateInfo($where,$data);
		
		return $result;
	}
	
	/**
     * 订单明细表数据处理
     * @version v2;@editor Divider
     */
	public function getOrderDetailData($data=[],$rid,$financetype){
		
		$sellname = parse_config_array('sellname');
		
		$OrderDetail = array(
			'cid'=>$data['cid'],
			'order_id'=>$rid,
			'sell_title'=>$sellname[$financetype],
			'sell_title_id'=>$financetype,
			'amount'=>!empty($data['amount'])?$data['amount']:1,
			'unit_price'=>!empty($data['unit_price'])?$data['unit_price']:$data['real_price'],
			'sell_price'=>!empty($data['sell_price'])?$data['sell_price']:$data['real_price'],
			'real_price'=>$data['real_price'],
			'vcnote'=>!empty($data['vcnote'])?$data['vcnote']:''
		);
		
		return $OrderDetail;
	}
	
	/**
     * 删除订单明细表
     * @version v2;@editor Divider
     */
	public function OrderDetailDel($where=[]){
		
		$result = $this->modelOrderDetail->deleteInfo($where);
        
        $result && action_log('删除订单明细', '删除订单明细' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
}
