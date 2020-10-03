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
use think\Db;

/**
 *订单信息逻辑
 */
class Order extends BaseLogic
{
    
	/**
     * 业务提交统一处理方法
     * @version v2;@editor Divider
     */
	public function orderDispose($data=[]){
		
		$validate_result = $this->validateOrder->scene('dispose')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOrder->getError(),'',1);
        }
		
		$orderData = $this->orderDataDispose($data);
		
		Db::startTrans();
		try{
			if($data['financetype']==1){ //提交则直接支付成功
				$orderData['order_status']=2;
				$orderData['paytime']=time();
				$usestatus = 2;
			}elseif($data['financetype']==2){
				$axid = $this->logicCemeteryAuxiliary->auxiliaryAdd($data);//添加订单附表
				$orderData['axid'] = $axid;
				$linkData = $data;
				$linkData['link_name'] = $data['buyer_name'];
				$linkData['c_sure'] = 1;
				$linkData['state'] = 1;
				$linkResult = $this->logicLinkman->linkmanAdd($linkData);//添加联系人信息
				$orderData['lid'] = intval($linkResult['data']);
				if(!empty($data['dead'])){
					foreach($data['dead'] as $k=>$v){
						$this->logicBury->buryAdd($v);//添加墓主信息
					}
				}
			}elseif($data['financetype']==7){
				$orderData['order_status']=2;
				$orderData['paytime']=time();
			}else{
				$orderData['order_status']=1;
			}
			
			$rid = $this->modelOrder->addInfo($orderData);
			
			$this->logicOrderDetail->OrderDetailAdd($data,$rid,$data['financetype']);//添加订单明细表

			if(!empty($usestatus) && $usestatus>1){
				
				$this->logicCemetery->updateCemeteryUsestatus(['id'=>$data['cid']],['usestatus'=>$usestatus]);//修改墓穴状态
				
			}
				
			$result = Db::commit();

		} catch (\Exception $e) {
			// 回滚事务
			Db::rollback(); 
			
			return setRetrunData('提交失败','',1);
		}
		
		$financetype = parse_config_array('financetype');
		
		action_log('新增'.$financetype[$data['financetype']], '新增' .$financetype[$data['financetype']]. '，order_no：'.$orderData['order_no']);

		return setRetrunData(RESULT_SUCCESS,$result);
	}
	
	/**
     * 订单修改
     * @version v2;@editor Divider
     */
	public function orderEdit($data=[]){
		
		$validate_result = $this->validateOrder->scene('dispose')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOrder->getError(),'',1);
        }
		
		$orderData = $this->orderDataDispose($data);
		$order_no = $orderData['order_no'];
		unset($orderData['order_no']);
		Db::startTrans();
		try{
			/*if($data['financetype']==1){ //提交则直接支付成功
				$orderData['order_status']=2;
				$usestatus = 2;
			}else*/
			if($data['financetype']==2){
				$this->logicCemeteryAuxiliary->auxiliaryEdit($data);//修改订单附表
				$linkData = $data;
				unset($linkData['id']);
				$linkData['link_name'] = $data['buyer_name'];
				$linkData['c_sure'] = 1;
				$linkData['state'] = 1;
				$this->logicLinkman->linkmanEdit($linkData);//添加联系人信息
			}/*else{
				$orderData['order_status']=1;
			}*/
			$rid = $this->modelOrder->updateInfo(['id'=>$data['id'],'cid'=>$data['cid']],$orderData);
		
			$this->logicOrderDetail->OrderDetailEdit($data,$data['id'],$data['financetype']);//添加订单明细表

			$result = Db::commit();

		} catch (\Exception $e) {
			// 回滚事务
			Db::rollback(); 
			
			return setRetrunData('提交失败','',1);
		}
		
		$financetype = parse_config_array('financetype');
		
		action_log('编辑'.$financetype[$data['financetype']], '编辑' .$financetype[$data['financetype']]. '，order_no：'.$order_no);

		return setRetrunData(RESULT_SUCCESS,$result);
		
	}
	
	/**
     * 订单表数据统一处理
     * @version v2;@editor Divider
     */
	
	public function orderDataDispose($data=[]){
		
		$orderData = array(
			'order_no'=>!empty($data['order_no'])?$data['order_no']:getOrderNo($data['financetype']),
			'cid'=>$data['cid'],
			'lid'=>!empty($data['lid'])?$data['lid']:'',
			'buyer_name'=>$data['buyer_name'],
			'relation'=>!empty($data['relation'])?$data['relation']:'',
			'phone'=>!empty($data['phone'])?$data['phone']:'',
			'address'=>!empty($data['address'])?$data['address']:'',
			'card_no'=>!empty($data['card_no'])?$data['card_no']:'',
			'order_begin'=>!empty($data['order_begin'])?$data['order_begin']:date('Y-m-d',time()),
			'order_end'=>!empty($data['order_end'])?$data['order_end']:'',
			'vcdesc'=>!empty($data['vcdesc'])?$data['vcdesc']:'',
			'financetype'=>$data['financetype'],
			'seller_id'=>$data['seller_id'],
			'sellname'=>$data['sellname'],
			'payxj'=>!empty($data['payxj'])?$data['payxj']:'',
			'paypos'=>!empty($data['paypos'])?$data['paypos']:'',
			'payzfb'=>!empty($data['payzfb'])?$data['payzfb']:'',
			'paypayweixin'=>!empty($data['paypayweixin'])?$data['paypayweixin']:'',
			'sum_price'=>$data['real_price'],
			'isvoice'=>!empty($data['isvoice'])?$data['isvoice']:0,
			'fph'=>!empty($data['fph'])?$data['fph']:'',
			'dabh'=>!empty($data['dabh'])?$data['dabh']:''
		);
		
		return $orderData;
	}
	
	/**
     * 删除订单详情
     * @version v2;@editor Divider
     */
	public function orderDel($data=[]){
		
		
		$order_data = $this->getOrderInfo(['a.id' =>$data['id'],'a.cid'=>$data['cid'],'a.status'=>1],'a.order_no');
		if(empty($order_data)){
			return setRetrunData('参数有误','',1);
		}
		Db::startTrans();
		try{
			
			$this->modelOrder->deleteInfo(['id' => $data['id']]);//删除订单表
			
			$this->logicOrderDetail->OrderDetailDel(['order_id' => $data['id']]);//删除明细表
			
			if($data['financetype']==1){
				$usestatus =1;	
			}elseif($data['financetype']==2){
				$this->logicLinkman->linkmanDel(['cid'=>$data['cid']]);//删除联系人
				$this->logicBury->buryDel(['cid'=>$data['cid']]);//删除安葬人
				$this->logicCemeteryAuxiliary->auxiliaryDel(['cid'=>$data['cid']]);//删除墓穴分表 
			}elseif($data['financetype']==3){
				$this->logicComboOrder->ComboOrderDel(['order_id'=>$data['id'],'cid'=>$data['cid']]);//删除套餐
			}
			
			if(!empty($usestatus)){
				$this->logicCemetery->updateCemeteryUsestatus(['id'=>$data['cid']],['usestatus'=>$usestatus]);//修改墓穴状态
			}
			
			$result = Db::commit();
			
			action_log('删除订单详情', '删除订单详情' . '，where：' . http_build_query($data));
			
			return setRetrunData(RESULT_SUCCESS,$result);

		} catch (\Exception $e) {
			// 回滚事务
			Db::rollback(); 
			
			return setRetrunData('提交失败','',1);
		}
	}
	
	/**
     * 订单退款
     * @version v2;@editor Divider
     */
    public function reserveRefund($data=[]){
		
		$reserve = $this->getOrderInfo(['a.id'=>$data['id'],'a.cid'=>$data['cid']],'a.*');
		
		$reserveData= array(
			'buyer_name'=>$reserve['buyer_name'],
			'cid'=>$reserve['cid'],
			'financetype'=>7,
			'order_begin'=>date('Y-m-d',time()),
			'phone'=>$reserve['phone'],
			'real_price'=>$reserve['sum_price'],
			'seller_id'=>$reserve['seller_id'],
			'sellname'=>$reserve['sellname']
		);
		
		$this->orderDispose($reserveData);
		
		$this->orderUpdate(['id'=>$data['id']],['status'=>3]);
		
		$this->logicOrderDetail->OrderDetailUpdate(['cid'=>$data['cid'],'order_id'=>$data['id'],'status'=>1],['status'=>3]);//所有订单详情
		
		$new_usestatus= $this->logicCemetery->getCemeteryValues(['id'=>$data['cid']],'usestatus');
		if($new_usestatus<=2){
			$this->logicCemetery->updateCemeteryUsestatus(['id'=>$data['cid']],['usestatus'=>1]);//修改墓穴状态
		}
		return setRetrunData(RESULT_SUCCESS,'');
	}
	
	/**
     * 获取订单详情
     * @version v2;@editor Divider
     */
	public function getOrderInfo($where =[],$field=true)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelOrder->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'order_detail b', 'b.order_id = a.id AND b.status=1', 'left'],
			
            [SYS_DB_PREFIX . 'cemetery c', 'c.id = a.cid', 'left'],
			
			[SYS_DB_PREFIX . 'cemetery_auxiliary d', 'd.cid = a.cid', 'left']
        ];
		
        return $this->modelOrder->getInfo($where, $field,$join);
    }
	
	/**
     * 订单表单条数据修改统一方法
     * @version v2;@editor Divider
     */
	public function orderUpdate($where=[],$data=[]){
		
		if(empty($data)){
			return setRetrunData('数据不能为空','',1);
		}
		
		$result = $this->modelOrder->updateInfo($where,$data);
		
		$result && action_log('修改订单记录', '修改订单记录' . '，where：' . http_build_query($where));
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
	/**
     * 获取订单列表
     * @version v2;@editor Divider
     */
    public function getOrderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='')
    {
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOrder->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'order_detail b', 'b.order_id = a.id AND b.status=1', 'left'],
			
            [SYS_DB_PREFIX . 'cemetery c', 'c.id = a.cid', 'left'],
			
			[SYS_DB_PREFIX . 'cemetery_auxiliary d', 'd.cid = a.cid AND d.status=1', 'left']
        ];

        return $this->modelOrder->getList($where,$field,$order,$paginate,$join,$group);
    }
	
	/**
     * 获取订单搜索条件
     * @version v2;@editor Divider
     */
	public function getWhere($data=[]){
		
		$where=[];
		
		!empty($data['cid']) && $where['a.cid'] = $data['cid'];
		
		!empty($data['financetype']) && $where['a.financetype'] = $data['financetype'];
		
		!empty($data['keyword']) && $where['a.buyer_name|c.cname|d.bury_name|d.pym'] = ['like', '%'.$data['keyword'].'%'];
		
		return $where;
		
	}

	
}
