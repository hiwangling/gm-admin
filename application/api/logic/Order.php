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
     * 购买服务
     * @version v2;@editor Divider
     */
	 public function buyServices($data =[])
    {
        $validate_result = $this->validateOrder->scene('dispose')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOrder->getError(),'',1);
        }
		
		$orderData = $this->orderDataDispose($data);
        
        Db::startTrans();
        try{
            if(!empty($data['id'])){
				$rid = $data['id'];
				$this->modelOrder->updateInfo(['id'=>$data['id'],'cid'=>$data['cid']],$orderData);
				$this->logicOrderDetail->OrderDetailDel(['order_id'=>$data['id'],'cid'=>$data['cid']]);//删除所有服务
				$this->logicComboOrder->ComboOrderDel(['order_id'=>$data['id'],'cid'=>$data['cid']]);//删除套餐
			}else{
				$rid = $this->modelOrder->addInfo($orderData);
			}

			foreach($data['services'] as $k=>$v){
				$v['cid'] = $data['cid'];
				if(!empty($v['service_classify'])){//单项服务添加
					$v['unit_price'] = $v['sell_price'];
					$v['sell_price'] = $v['totalprice'];
					$v['real_price'] = $v['totalprice'];
					$v['combo_type'] = 1;
					$v['service_time'] = !empty($data['service_time'])?$data['service_time']:'';
					$this->logicOrderDetail->OrderDetailAdd($v,$rid,$data['financetype']);//添加订单明细表
					
				}else{//套餐添加
					$combo_id = $this->logicComboOrder->comboOrderAdd($v,$rid);//添加套餐订单
					$combo_services = $this->logicComboServices->getComboServicesList(['a.cid'=>$v['id'],'a.status'=>1],'s.*,a.number as amount,a.price as unit_price,a.totalprice as real_price','',false);
					foreach($combo_services as $key=>$val){
						$val['cid'] = $data['cid'];
						$val['combo_id'] = $combo_id;
						//$val['unit_price'] = $val['sell_price'];
						$val['sell_price'] = $val['real_price'];
						$val['combo_type'] = 2;
						$val['service_time'] = !empty($data['service_time'])?$data['service_time']:'';
						$this->logicOrderDetail->OrderDetailAdd($val,$rid,$data['financetype']);//添加订单明细表
					}
				}
			}
			
			// 提交事务
			$result= Db::commit();
                
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
     * 获取单条服务信息
     * @version v2;@editor Divider
     */
    public function getServicesOrderInfo($data=[])
    {
        if(empty($data['cid']) || empty($data['id']))
        {
            return setRetrunData('条件不足','',1);
        }
		
        $order = $this->getOrderInfo(['a.id' => $data['id'],'a.cid'=>$data['cid'],'a.financetype' => 3],'a.id,a.cid,a.buyer_name,a.lid,a.phone,a.financetype,a.seller_id,a.sellname,a.sum_price as real_price');
		
        $Orderdetail = $this->modelOrderDetail->getInfo(['order_id' => $data['id'],'status' =>1],true);

		$order['service_time'] = $Orderdetail['service_time'];
		
        $order['services'] = $this->getComboServicesListGx($data);

		
        return setRetrunData('success', $order);
    }
	
	
	/**
     * 获取所有已经选择的服务
	 * @version v2;@editor Divider
     */
    public function getComboServicesListGx($data=[])
    {
        $serlsit =[];
		
        $services =[];
		
        $service_classify = parse_config_array('service_classify');
        //普通单项服务
        $service_order_list= $this->logicOrderDetail->getOrderDetailJoinList(['a.order_id'=>$data['id'],'a.combo_type' => 1,'a.status'=>1,'a.cid'=>$data['cid']],'a.*,b.service_classify','id asc',false);
        //选中的套餐服务
        $combo_order_list= $this->logicComboOrder->getComboOrderList(['order_id'=>$data['id'],'cid'=>$data['cid'],'status'=>1], '*' ,'id asc',false);
        
        if(!empty($service_order_list) && !empty($service_classify))
        {
            foreach($service_classify as $key => $value)
            {
				foreach($service_order_list as $key1 => $value1)
                {
                    
					$value1['totalprice'] = $value1['real_price'];
					
					if($key==$value1['service_classify'])
                    {
                        $services [] =$value1;
                    }
                }
				if(!empty($services)){
					$serlsit[$key]['title']= $value;
					$serlsit[$key]['key']= $key;
					$serlsit[$key]['services']=$services;
				}
                
                $services = [];
            }
        }
		$combolist = [];
		
		foreach($combo_order_list as $k=>$v){
			$v['amount'] = $v['number'];
			$v['chargeunit'] = '套';
		}
		
        if(!empty($combo_order_list)){
			$combolist[0]['title'] = '套餐服务';
			$combolist[0]['key'] = 20;
			$combolist[0]['services'] = $combo_order_list;
		}
        return array_merge(array_values($serlsit),$combolist);
    }
	
	/**
     * 获取单项服务订单服务字符串
	 * @version v2;@editor Divider
     */
	public function serviceTitle($data=[]){
		
		$title ='' ;
		
		$service_sql = 'select b.service_title,c.combo_title from ky_order a
left JOIN(
select  GROUP_CONCAT(sell_title) as service_title,order_id,cid from ky_order_detail where order_id='.$data['id'].' AND cid='.$data['cid'].' AND combo_type=1 AND status=1
) b on a.id=b.order_id AND a.cid=b.cid
left JOIN(
select  GROUP_CONCAT(title) as combo_title,order_id,cid from ky_combo_order where order_id='.$data['id'].' AND cid='.$data['cid'].' AND status=1
) c on a.id=c.order_id AND a.cid=c.cid
where a.id='.$data['id'].' AND a.cid='.$data['cid'];
		
		$serviceTitle = $this->modelOrder->query($service_sql);
		
		$combo_sql = 'select a.id,a.title,b.service_title from ky_combo_order a
left join (
	select  GROUP_CONCAT(sell_title) as service_title,order_id,cid,combo_id from ky_order_detail where order_id='.$data['id'].' AND cid='.$data['cid'].' AND combo_type=2 AND status=1 GROUP BY combo_id
) b on a.order_id = b.order_id AND a.cid =b.cid AND a.id=b.combo_id
where a.order_id='.$data['id'].' AND a.cid='.$data['cid'].' AND a.status=1';
		
		$comboTitle = $this->modelOrder->query($combo_sql);
		
		$combo_title=array();
		
		foreach($comboTitle as $k=>$v){
			
			$combo_title[$k] = $v['title'].'('.$v['service_title'].')';
		}
		
		$title = $serviceTitle[0]['service_title'].','.implode(',',$combo_title);//详细
		//$title = $serviceTitle[0]['service_title'].','.$serviceTitle[0]['combo_title'];//详细
		//$data = $
		return $title;
		
	}
	
    /**
     * 墓穴付款
     * @version v2;@editor Divider
     */
    public function cemeteryPay($cid)
    {
        
		$order_data = $this->getOrderInfo(['a.cid' => $cid,'a.financetype' =>2,'a.status'=>1],'a.*');
		
		//print_r(json_decode(json_encode($order_data),true));
		
        if ($order_data['order_status'] == 1) {
			
            $orderresult = $this->modelOrder->updateInfo(['id' => $order_data['id']],['order_status'=>2,'paytime'=>time()]);
			
            if ($orderresult != false) {
				
                $result = $this->modelCemetery->updateInfo(['id'=> $cid],['usestatus' => 3]);
				
                $result && action_log('付款', '墓穴购买单付款，id：'.$cid);
				
                return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
            }else{
				return setRetrunData(RESULT_ERROR,'',1);
			}
        }else{
			return setRetrunData(RESULT_ERROR,'',1);
		}
    }
    
    
	/**
     * 墓穴换墓
     * @version v2;@editor Divider
     */
	public function changeCemetery($data=[]){
		
		$validate_result = $this->validateOrder->scene('dispose')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOrder->getError(),'',1);
        }
		$orderIndent  = $this->getOrderInfo(['a.cid'=>$data['cid'],'a.financetype'=>2,'a.status'=>1],'a.id');
		if(empty($orderIndent)){
			return setRetrunData('参数错误','',1);
		}
		$orderData = $this->orderDataDispose($data);
		
		Db::startTrans();
		try{

			$orderData['order_status']=2;
			
			$orderData['paytime']=time();
			
			$rid = $this->modelOrder->addInfo($orderData);
			
			$this->logicOrderDetail->OrderDetailAdd($data,$rid,$data['financetype']);//添加订单明细表
			
			$orderWhere['cid']= $detailWhere['cid'] =$data['cid'];
		
			$orderWhere['financetype'] = $detailWhere['sell_title_id'] =['in',[1,2,3,7]];
		
			$orderWhere['status'] = $detailWhere['status'] =1;
			
			if($data['financetype']==4){
				
				$data['typeid']=1;
				
				$this->logicHistoryInfo->historyInfoAdd($data,$rid);
				
				$usestatus = 1;
				
				$this->logicCemeteryAuxiliary->auxiliaryUpdate(['cid'=>$data['cid'],'status'=>1],['cid'=>$data['new_cid']]);//移动墓穴附表
				
				$this->orderUpdate($orderWhere,['cid'=>$data['new_cid']]);//移动墓穴所有订单
				
				$this->logicOrderDetail->OrderDetailUpdate($detailWhere,['cid'=>$data['new_cid']]);//所有订单详情
				
				$this->modelBury->updateInfo(['cid'=>$data['cid'],'status'=>1],['cid'=>$data['new_cid']]);//移动逝者信息
				
				$this->logicLinkman->linkmanUpdate(['cid'=>$data['cid'],'status'=>1],['cid'=>$data['new_cid']]);//移动联系人
				
				$this->logicImages->imagesUpdate(['cid'=>$data['cid'],'status'=>1],['cid'=>$data['new_cid']]);//移动所有图片
				
				$this->modelComboOrder->updateInfo(['cid'=>$data['cid'],'status'=>1],['cid'=>$data['new_cid']]);//移动所有套餐
				
				$new_usestatus= $this->logicCemetery->getCemeteryValues(['id'=>$data['cid']],'usestatus');
				
				$this->logicCemetery->updateCemeteryUsestatus(['id'=>$data['new_cid']],['usestatus'=>$new_usestatus]);//修改墓穴状态
				
			}elseif($data['financetype']==5){
				
				$usestatus = 6;
				
				$this->logicCemeteryAuxiliary->auxiliaryUpdate(['cid'=>$data['cid'],'status'=>1],['status'=>2]);//移动墓穴附表
				
				$this->orderUpdate($orderWhere,['status'=>2]);//移动墓穴所有订单
				
				$this->logicOrderDetail->OrderDetailUpdate($detailWhere,['status'=>2]);//所有订单详情
				
				$this->modelBury->updateInfo(['cid'=>$data['cid'],'status'=>1],['status'=>2]);//移动逝者信息
				
				$this->logicLinkman->linkmanUpdate(['cid'=>$data['cid'],'status'=>1],['status'=>2]);//移动联系人
				
				$this->logicImages->imagesUpdate(['cid'=>$data['cid'],'status'=>1],['status'=>2]);//移动所有图片
				
				$this->modelComboOrder->updateInfo(['cid'=>$data['cid'],'status'=>1],['status'=>2]);//移动所有套餐
				
			}elseif($data['financetype']==6){
				
				$usestatus = 1;
				
				$this->logicCemeteryAuxiliary->auxiliaryUpdate(['cid'=>$data['cid'],'status'=>1],['status'=>3]);//移动墓穴附表
				
				$this->orderUpdate($orderWhere,['status'=>3]);//移动墓穴所有订单
				
				$this->logicOrderDetail->OrderDetailUpdate($detailWhere,['status'=>3]);//所有订单详情
				
				$this->modelBury->updateInfo(['cid'=>$data['cid'],'status'=>1],['status'=>3]);//移动逝者信息
				
				$this->logicLinkman->linkmanUpdate(['cid'=>$data['cid'],'status'=>1],['status'=>3]);//移动联系人
				
				$this->logicImages->imagesUpdate(['cid'=>$data['cid'],'status'=>1],['status'=>3]);//移动所有图片
				
				$this->modelComboOrder->updateInfo(['cid'=>$data['cid'],'status'=>1],['status'=>3]);//移动所有套餐
				
			}
			$this->logicCemetery->updateCemeteryUsestatus(['id'=>$data['cid']],['usestatus'=>$usestatus]);//修改墓穴状态

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

    
	public function ceshi($data=[]){
		
		/*$orderWhere['cid']= $detailWhere['cid'] =$data['cid'];
		
		$orderWhere['financetype'] = $detailWhere['sell_title_id'] =['in',[4,5,6]];
		
		$orderWhere['status'] = $detailWhere['status'] =1;
		
		$this->orderUpdate($orderWhere,['status'=>3]);//移动墓穴所有订单
				
		$this->logicOrderDetail->OrderDetailUpdate($detailWhere,['status'=>3]);//所有订单详情*/
	}
	

    /**
     * 添加服务工单
     * @param type $data
     * @param type $order_detail_id
     */
    private function addServicebills($data,$order_detail_id)
    {
        $service_bill_data = [
            'order_no' => getServicebillOrderNo(),
            'order_id' => $data['order_id'],
            'order_detail_id' => $order_detail_id,
            'service_id' => $data['sell_title_id'],
            'service_name' => $data['sell_title'],
            'cid' => $data['cid'],
            'serviceamount' => $data['amount'],
            'begindate' => time(),
            'operater_id' => $data['operater_id'],
            'operater_name' => $data['operater_name'],
            'buryname' => $data['buryname'],
            'service_time' => $data['service_time']
        ];
        return $order_detail = $this->modelServicebill->addInfo($service_bill_data);
    }
    
  

    /**
     * 服务付款
     * @param type $id
     * @return type
     */
    public function buyServicesPay($id)
    {
        $id = intval($id);
        if(!empty($id))
        {
            $order_data = $this->getOrderbuyInfo(['id' => $id,'financetype' => 3],true);
            if(!empty($order_data))
            {
                if ($order_data ['order_status'] == 1) {
                    $result =$this->modelOrder->updateInfo(['id'=> $id],['order_status' => 2]);
                    $result && action_log('服务付款', '服务付款，id：'.$id);
                    return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
                }
            }
            else
            {
                return setRetrunData('参数错误！', '', 1);
            }
        }
        else
        {
            return setRetrunData('参数错误！', '', 1);
        }
        
    }
    
    /**
     * 获取订单统计
     */
	public function getOrderStat($where = [],$stat_type='count',$field = 'id'){
		
		//$where[DATA_STATUS_NAME] = ['neq', DATA_DELETE];
		
		return $this->modelOrder->stat($where,$stat_type,$field);
		
	}

    
    
    
    
   
    
   
    
    
    
    
    /**
     * 点灯查询列表
     * @return type
     */
    public function lightupListByID($cid)
    {
        $res_cname = $this->logicCemetery->getCemeteryFullName($cid);
        $res_buryname = $this->logicBury->getBuryNames($cid);
        $orders = $this->getOrderList(['cid'=>$cid,'financetype' => 7],'*','id asc',false);
        if (!$orders)
            return setRetrunData('success', []);
        $datas = [];

        foreach ($orders as $k => $v) {
            $datas[$k]['id'] = $v['id'];
            $datas[$k]['order_no'] = $v['order_no'];
            $datas[$k]['buyname'] = $v['buyer_name'];
            $datas[$k]['phone'] = $v['phone'];
            $datas[$k]['card_no'] = $v['card_no'];
            $datas[$k]['sell_title'] = '点灯服务';
            $datas[$k]['create_time'] = $v['create_time'];
            $datas[$k]['real_price'] = $v['sum_price'];
            $datas[$k]['lamp_nd'] = $v['lamp_nd'];
            $datas[$k]['order_status'] = $v['order_status'];
            $datas[$k]['cname'] = $res_cname;
            $datas[$k]['buryname'] = $res_buryname;
            if(!empty($v['lamp_nd']))
            {
                $plan= $this->logicLampplan->getLampplanInfo(['year'=>$v['lamp_nd']],'*');
                if(!empty($plan))
                {
                    $datas[$k]['daycount'] = $plan['daycount'];
                    $datas[$k]['vcnote'] = $plan['vcnote'];
                }
                else
                {
                    $datas[$k]['daycount'] = '';
                    $datas[$k]['vcnote'] =  '';
                }
            }
        }
        return setRetrunData('success', $datas);
        
    }

    /**
     * 新增点灯信息 一年只能点一次灯
     * @return type
     */
    public function lightupAdd($data=[])
    {
        if ( empty($data['cid']) || empty($data['buyname']) || empty($data['buydate']) 
            || empty($data['phone']) || empty($data['card_no']) || empty($data['real_price'])) {
            return setRetrunData('所有参数不能为空！', '', 1);
        }
        $buydate = intval($data['buydate']);
        
        $plan=$this->logicLampplan->getLampplanInfo(['year'=>$buydate],'*');
         
        if(empty($plan)){
            return setRetrunData('请先创建点灯计划！', '', 1);
        }else{
            if(empty($plan['begindate'])){
                return setRetrunData('请先添加点灯开始时间！', '', 1);
            }else if(strtotime($plan['begindate'])>time()){
                return setRetrunData('点灯时间还没开始！', '', 1);
            }
            if(empty($plan['enddate'])){
                return setRetrunData('请先添加点灯结束时间！', '', 1);
            }else if(strtotime($plan['enddate'])<time()){
                return setRetrunData('点灯时间已经结束！', '', 1);
            }
        }
        
        $order_datas = $this->getOrderList(['cid'=>$data['cid'],'financetype' => 7,'lamp_nd' => $buydate],'*','id asc',false);
        
        if ($order_datas)
        {
            return setRetrunData('该年度已经点过灯了！', '', 1);
        }
        else
        {
            Db::startTrans();
            try{
                    $order_data = [
                        'order_no' => getOrderNo(),
                        'cid' => $data['cid'],
                        'buyer_name' => $data['buyname'],
                        'phone' => $data['phone'],
                        'card_no' => $data['card_no'],
                        'order_begin' => date('Y-m-d',time()),
                        'financetype' => 7,
                        'seller_id' => $data['userid'],
                        'sellname' =>  $data['username'],
                        //实收金额
                        'sum_price' => $data['real_price'],
                        'lamp_nd' => $buydate 
                    ];
                    
                    $order = $this->modelOrder->addInfo($order_data);
                    
                    $order_data_detail = [
                        'order_id' => $order,
                        'cid' => $data['cid'],
                        //单价
                        'unit_price' => $data['real_price'],
                        //应付金额
                        'sell_price' => $data['real_price'],
                        //实收金额
                        'real_price' => $data['real_price'],
                        'sell_title' => '点灯服务',
                        'amount' => 1,
                        'chargeunit' => '次',
                        'service_type' => 10,
                        'combo_type' => 1,
                        'operater_id' => $data['userid'],
                        'operater_name' => $data['username']
                    ];
                    
                    $order_detail = $this->modelOrderDetail->addInfo($order_data_detail);
                    // 提交事务
                    $result= Db::commit();
                    if($result !==false)
                    {
                        action_log('新增', '点灯服务购买，id：'.$order);
                        return setRetrunData('操作成功','', 0);
                    }
                    else
                    {
                        return setRetrunData('操作失败','', 1);
                    }
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
            }
        }
    }
    
    /**
     * 获取当前点灯记录
     * @param type $orderid
     * @return type
     */
    public function getBuyLightup($id)
    {
        $order = $this->getOrderbuyInfo(['id' => $id]);
        if (!empty($order)) {
            $order_detail = $this->logicOrderDetail->getOrderDetailInfo(['order_id' => $order['id']]);
            $data = [
                'id' => $order['id'],
                'did' => $order_detail['id'],
                'buyer_name' => $order['buyer_name'],
                'phone' => $order['phone'],
                'card_no' => $order['card_no'],
                'lamp_nd' => $order['lamp_nd'],
                'order_status' => $order['order_status']
            ];
            $res_datas = [$data];
            return setRetrunData('success', $res_datas);
        } else {
            return setRetrunData('success', []);
        }
    }
    
    /**
     * 修改点灯记录
     */
    public function lightupEdit($data =[])
    {
        if ( empty($data['id']) || empty($data['buyname']) || empty($data['phone']) 
                || empty($data['card_no']) || empty($data['real_price'])) {
            return setRetrunData('所有参数不能为空！', '', 1);
        }
        
        $order_datas = $this->getOrderbuyInfo(['id' => $data['id']],'*'); 
        if(!empty($order_datas))
        {
            $order_details = $this->logicOrderDetail->getOrderDetailInfo(['order_id' => $order_datas['id']],'*');
            Db::startTrans();
            try{
                    $order_data = [
                        'buyer_name' => $data['buyname'],
                        'phone' => $data['phone'],
                        'card_no' => $data['card_no'],
                        'order_begin' => date('Y-m-d',time()),
                        'seller_id' => $data['userid'],
                        'sellname' => $data['username'],
                        //实收金额
                        'sum_price' => $data['real_price']
                    ];
                    $this->modelOrder->updateInfo(['id' => $data['id']],$order_data);

                    $order_data_detail = [
                        //单价
                        'unit_price' => $data['real_price'],
                        //应付金额
                        'sell_price' => $data['real_price'],
                        //实收金额
                        'real_price' => $data['real_price'],
                        'operater_id' => $data['userid'],
                        'operater_name' => $data['username']

                    ];
                    $this->modelOrderDetail->updateInfo(['id' => $order_details['id']],$order_data_detail);
                    
                    // 提交事务
                    $result= Db::commit();
                    if($result !==false)
                    {
                        action_log('编辑', '点灯服务编辑，id：'.$data['id']);
                        return setRetrunData('操作成功','', 0);
                    }
                    else
                    {
                        return setRetrunData('操作失败','', 1);
                    }
                } catch (\Exception $e) {
                    // 回滚事务
                    Db::rollback();
                }
        }
        else
        {
            return setRetrunData('修改失败！', '', 1);
        }
    }
    
    /**
     * 点灯付款
     * @return type
     */
    public function lightupPay($id)
    {
        $order_data = $this->getOrderbuyInfo(['id' => $id, 'financetype' => 7]);
        if ($order_data['order_status'] == 1) {
            $result = $this->modelOrder->updateInfo(['id' => $id],['order_status'=>2]);
            $result && action_log('编辑', '点灯服务单付款，id：'.$id);
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }
        return setRetrunData('结算失败', '', 1);
    }
    
    /**
     * 修改点灯服务订单的开票状态
     * @return type
     */
    public function lightupIsvoice($id)
    {
        $order_data = $this->getOrderbuyInfo(['id' => $id, 'financetype' => 7]);
        if ($order_data['isvoice'] == 0) {
            $result = $this->modelOrder->updateInfo(['id' => $id],['isvoice'=>1]);
            $result && action_log('编辑', '点灯服务单开票，id：'.$id);
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }
        return setRetrunData('开票失败', '', 1);
    }
    
    /**
     * 上传碑文图片跟订单挂钩，只能上传一张
     */
    public function uploadTabletPhoto($data=[])
    {
        if(!empty($data=['id']) && !empty($data=['tabletphoto']))
        {
            $result = $this->modelOrder->updateInfo(['id' => $data=['id']],['tabletphoto'=> $data=['tabletphoto']]);
            $result && action_log('编辑', '上传碑文排版照片，id：'.$id);
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }
        else
        {
            return setRetrunData('上传失败', '', 1);
        }
        
    }
    
    /**
     * 新增订单
     */
    public function addOrder($data = [])
    {
        $validate_result = $this->validateOrder->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOrder->getError(),'',1);
        }
        
        return $result = $this->modelOrder->addInfo($data);
    }

}
