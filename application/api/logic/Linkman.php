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
 * 联系人信息逻辑
 */
class Linkman extends BaseLogic
{
    /**
     * 联系人信息添加
	 * @version v2;@editor Divider
     */
    public function linkmanAdd($data = [])
    {
		$validate_result = $this->validateLinkman->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateLinkman->getError(),'',1);
        }
		
   		$linkman = $this->getLinkmanData($data);
		
        $result = $this->modelLinkman->addInfo($linkman);
        
		$this->linkmanImageDispose($result,$data);
		
        $result && action_log('新增联系人', '新增联系人信息，cid：'. $data['cid'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        
    }
	
	/**
     * 联系人信息编辑
	 * @version v2;@editor Divider
     */
	public function linkmanEdit($data=[]){
		
		$validate_result = $this->validateLinkman->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateLinkman->getError(),'',1);
        }
		
   		$linkman = $this->getLinkmanData($data);
		
		if(!empty($data['id'])){
			$where['id'] = $data['id'];
			if($data['c_sure']==1){
				//更改订单中购墓人信息
				$orderLinkman = array(
					'buyer_name'=>$data['link_name'],
					'relation'=>!empty($data['relation'])?$data['relation']:'',
					'phone'=>$data['phone'],
					'address'=>!empty($data['address'])?$data['address']:'',
					'card_no'=>!empty($data['card_no'])?$data['card_no']:''
				);
				$this->logicOrder->orderUpdate(['cid'=>$data['cid'],'status'=>1,'financetype'=>2],$orderLinkman);
			}
			$this->logicImages->imagesDel(['cid'=>$data['cid'],'tid'=>$data['id'],'imgtype'=>2]);//删除联系人图片
			$this->linkmanImageDispose($data['id'],$data);
		}else{
			$where['cid'] = $data['cid'];
			$where['c_sure'] = 1;
			$where['status'] = 1;
			//$id = $this->getLinkmanValue($where,'id');
			//
			//
		}
		
		$result = $this->linkmanUpdate($where,$linkman);

		$result && action_log('编辑联系人', '编辑联系人信息，cid：'. $data['cid'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	/**
     * 联系人信息修改
	 * @version v2;@editor Divider
     */
	public function linkmanUpdate($where=[],$data=[]){
		
		$result = $this->modelLinkman->updateInfo($where,$data);
		
		return $result;
	}
	
	/**
     * 联系人数据统一处理
	 * @version v2;@editor Divider
     */
	public function getLinkmanData($data=[]){
		
		$linkman = array(
			'cid'=>$data['cid'],
			'link_name'=>$data['link_name'],
			'relation'=>!empty($data['relation'])?$data['relation']:'',
			'phone'=>$data['phone'],
			'address'=>!empty($data['address'])?$data['address']:'',
			'card_no'=>!empty($data['card_no'])?$data['card_no']:'',
			'c_sure'=>!empty($data['c_sure'])?$data['c_sure']:0,
			'state'=>!empty($data['state'])?$data['state']:0,
			'pym'=>strtoupper(getShortPinyin($data['link_name'])),
		);
		
		return $linkman;
		
	}
	
	/**
     * 联系人图片处理
	 * @version v2;@editor Divider
     */
	public function linkmanImageDispose($tid,$data){
		
		/*添加档案图片*/
		$images = array(
			'tid'=>$tid,
			'cid'=>$data['cid'],
			'type'=>!empty($data['photo_type'])?$data['photo_type']:2,
			'imgtype'=>2,
		);
		if(!empty($data['card_photo_z'])){
			$images['images_name']= '身份证(正)';
			$images['photo'] = $data['card_photo_z'];
			$images['step'] = 1;
			$this->logicImages->imagesAdd($images);
		}
		if(!empty($data['card_photo_f'])){
			$images['images_name']= '身份证(反)';
			$images['photo'] = $data['card_photo_f'];
			$images['step'] = 2;
			$this->logicImages->imagesAdd($images);
		}
		/*END添加档案图片*/
		
	}
	
	/**
     * 联系人信息删除
	 * @version v2;@editor Divider
     */
    public function linkmanDel($where)
    {
		 $result = $this->modelLinkman->deleteInfo($where);
		
		 $imagesWhere['cid'] = $where['cid'];
		
		 $imagesWhere['imgtype'] = 2;
		
		 !empty($where['id']) && $imagesWhere['tid'] = $where['cid'];
		
		 $this->logicImages->imagesDel($imagesWhere);//删除联系人图片
		
		 $result && action_log('删除联系人', '联系人信息删除' . '，where：' . http_build_query($where));
		
		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
	
	 /**
     * 获取联系人信息列表
     */
    public function getLinkmanList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[ DATA_STATUS_NAME]) ? $where[ DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        return $this->modelLinkman->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 获取联系人单条信息
     */
    public function getLinkmanInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[ DATA_STATUS_NAME]) ? $where[ DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        return $this->modelLinkman->getInfo($where, $field);
    }
	
	/**
     * 获取联系人单个字段
	 * @version v2;@editor Divider
     */
	public function getLinkmanValue($where=[],$field = true){
		
		return $this->modelLinkman->getValue($where, $field);
		
	}
	
    
    
    /**
     * 获取联系人信息查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['vno|cname|muzhu_name|pym'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
