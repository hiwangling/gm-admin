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
 * 寄存信息逻辑
 */
class Save extends BaseLogic
{
 
    /**
     * 获取寄存信息列表
     */
    public function getSaveList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelSave->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'locker c', 'c.id = a.loid', 'left'],
        ];

        return $this->modelSave->getList($where, $field , $order, $paginate,$join);
    }
    
    /**
     * 获取单条寄存信息列表
     */
    public function getSaveInfo($where = [], $field = true)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        $this->modelSave->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'order b', 'b.cid = a.id AND b.status=1 AND b.financetype=8', 'left'],
			
            [SYS_DB_PREFIX . 'locker c', 'c.id = a.loid', 'left'],
        ];

        return $this->modelSave->getInfo($where, $field,$join);
    }
    
	
	/**
     * 寄存添加
	 * @version v2;@editor Divider
     */
    public function saveAdd($data =[])
    {
        $validate_result = $this->validateSave->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateSave->getError(),'',1);
        }
		
        Db::startTrans();
        try{
                
				$savaData = $this->getSaveData($data);
			
			    $sid = $this->modelSave->addInfo($savaData);
			
				$this->logicLocker->LockerUpdate(['id'=>$data['loid']],['state'=>1]);
					
				//订单数据
				$orderData = array(
					'cid'=>$sid,
					'buyer_name'=>$data['buyer_name'],
					'phone'=>$data['phone'],
					'financetype'=>8,
					'seller_id'=>$data['seller_id'],
					'sellname'=>$data['sellname'],
					'real_price'=>$data['real_price']
				);
				$this->logicOrder->orderDispose($orderData);
			   //end订单数据
			    $this->saveImageDispose($sid,$data);//处理图片数据
                //提交事务
                $result= Db::commit();
                if($result !==false)
                {
                    action_log('新增寄存', '新增寄存信息，name：'.$data['name']);
                    return setRetrunData(RESULT_SUCCESS, '', 0);
                }
                else
                {
                    return setRetrunData('操作失败', '', 1);
                }
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
				return setRetrunData('提交失败', '', 1);
            }
    }
	
	/**
     * 续存添加
	 * @version v2;@editor Divider
     */
    public function renewAdd($data =[])
    {
        $validate_result = $this->validateSave->scene('renew')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateSave->getError(),'',1);
        }
		
        Db::startTrans();
        try{
			
				//$renew = array('saveenddate'=>$data['saveenddate']);
				//$this->modelSave->updateInfo(['id'=>$data['cid']],['saveenddate'=>$data['saveenddate']]);
				//订单数据
				$orderData = array(
					'cid'=>$data['cid'],
					'buyer_name'=>$data['buyer_name'],
					'phone'=>$data['phone'],
					'financetype'=>9,
					'order_begin'=>$data['savebegindate'],
					'order_end'=>$data['order_end'],
					'seller_id'=>$data['seller_id'],
					'sellname'=>$data['sellname'],
					'real_price'=>$data['real_price']
				);
				$this->logicOrder->orderDispose($orderData);
			   //end订单数据
			    //$this->saveImageDispose($sid,$data);//处理图片数据
                //提交事务
                $result= Db::commit();
                if($result !==false)
                {
                    action_log('新增续存', '新增续存，name：'.$data['name']);
                    return setRetrunData(RESULT_SUCCESS, '', 0);
                }
                else
                {
                    return setRetrunData('操作失败', '', 1);
                }
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
				return setRetrunData('提交失败', '', 1);
            }
    }
	
	
	/**
     * 图片处理
	 * @version v2;@editor Divider
     */
	public function saveImageDispose($tid,$data){
		
		/*添加档案图片*/
		$images = array(
			'tid'=>$tid,
			'cid'=>0,
			'type'=>!empty($data['photo_type'])?$data['photo_type']:2,
		);
		if(!empty($data['link_card_photo_z'])){
			$images['images_name']= '身份证(正)';
			$images['photo'] = $data['link_card_photo_z'];
			$images['step'] = 1;
			$images['imgtype']=3;
			$this->logicImages->imagesAdd($images);
		}
		if(!empty($data['bury_card_photo_z'])){
			$images['images_name']= '身份证(反)';
			$images['photo'] = $data['bury_card_photo_z'];
			$images['step'] = 1;
			$images['imgtype']=4;
			$this->logicImages->imagesAdd($images);
		}
		/*END添加档案图片*/
		
	}
	
	/**
     * 统一处理寄存数据
	 * @version v2;@editor Divider
     */
	public function getSaveData($data=[]){
		
		$saveData = array(
			'loid'=>$data['loid'],
			'buyer_name'=>$data['buyer_name'],
			'phone'=>$data['phone'],
			'name'=>$data['name'],
			'savebegindate'=>$data['savebegindate'],
			'saveenddate'=>$data['saveenddate'],
			'vcnote'=>!empty($data['vcnote'])?$data['vcnote']:''
		);
		
		return $saveData;
	}
	
	/**
     * 寄存表编辑统一方法
	 * @version v2;@editor Divider
     */
	public function saveUpdate($where=[],$data=[]){
		
		$result = $this->modelSave->updateInfo($where,$data);
		
		$result && action_log('编辑寄存', '编辑寄存信息，name：'.$data['name']);
		
		return $result?true:false;
	}
	
	/**
     * 骨灰寄存编辑
	 * @version v2;@editor Divider
     */
    public function saveEdit($data =[])
    {
        $validate_result = $this->validateSave->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateSave->getError(),'',1);
        }
        Db::startTrans();
        try{
                
                $savaData = $this->getSaveData($data);
			
			    $this->saveUpdate(['id'=>$data['id']],$savaData);

				//订单数据
				$orderData = array(
					'id'=>$data['order_id'],
					'cid'=>$data['id'],
					'order_no'=>$data['order_no'],
					'order_begin'=>$data['order_begin'],
					'buyer_name'=>$data['buyer_name'],
					'phone'=>$data['phone'],
					'financetype'=>8,
					'seller_id'=>$data['seller_id'],
					'sellname'=>$data['sellname'],
					'real_price'=>$data['real_price']
				);
				$this->logicOrder->orderEdit($orderData);
			   //end订单数据
			    $this->saveImageDispose($data['id'],$data);//处理图片数据
                $result= Db::commit();
                if($result !==false)
                {
                    return setRetrunData('操作成功', '', 0);
                }
                else
                {
                    return setRetrunData('操作失败', '', 1);
                }
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
				return setRetrunData('提交失败', '', 1);
            }
    }


    public function saveDel($data)
    {
        
		$save = $this->getSaveInfo(['a.id' =>$data['id']],'a.id,b.order_status'); 
		
        if ($save['order_status'] == 1) {
            Db::startTrans();
            try{
                    $this->modelSave->deleteInfo(['id' =>$data['id']]);
				
					$this->logicLocker->LockerUpdate(['id'=>$data['loid']],['state'=>2]);
				
					$this->logicOrder->orderDel(['id'=>$data['order_id'],'cid'=>$data['id'],'financetype'=>8]);
  
                    $result= Db::commit();
                    if($result !==false)
                    {
                        action_log('删除寄存信息', '寄存信息删除' . '，where：' . $data['id']);
						
                        return setRetrunData('删除成功', '', 0);
                    }
                    else
                    {
                        return setRetrunData('删除失败', '', 1);
                    }
                } catch (\Exception $e) {
                    // 回滚事务
                    Db::rollback();
                }
        } else {
            return setRetrunData('已缴费,不能删除', '', 1);
        }
    }
	
	
	/**
     * 寄存取出
	 * @version v2;@editor Divider
     */
	public function saveOut($data=[]){
		
		$saveData = array(
			'name'=>$data['name'],
			'operater_id'=>$data['operater_id'],
			'operater_name'=>$data['operater_name'],
			'canceldate'=>date('Y-m-d',time()),
			'save_status'=>2
		);
		
		$result = $this->saveUpdate(['id'=>$data['id']],$saveData);
			
		$this->logicLocker->LockerUpdate(['id'=>$data['loid']],['state'=>2]);
		
		$result && action_log('寄存取出', '寄存取出' . '，where：' . $data['id']);
		
		return $result?setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}

    /**
     * 获取墓穴信息查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['a.buyer_name|a.name|c.title'] = ['like', '%'.$data['keyword'].'%'];
		
		if(!empty($data['startime']) && !empty($data['endtime'])){
			
			$where['a.canceldate'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];
		}
        
        return $where;
    }
    
}
