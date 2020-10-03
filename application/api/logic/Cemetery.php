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
 * 墓穴信息逻辑
 */
class Cemetery extends BaseLogic
{
    
    /**
     * 获取墓穴信息列表
	 * @version v2;@editor Divider
     */
    public function getCemeteryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelCemetery->alias('a');
		
        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = a.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type c', 'c.id = a.type_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = a.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = a.garden_id', 'left'],
			[SYS_DB_PREFIX . 'cemetery_auxiliary f', 'f.cid = a.id AND f.status=1', 'left']
        ];

        return $this->modelCemetery->getList($where, $field , $order, $paginate, $join);
    }
	
    /**
     * 墓穴信息添加
	 * @version v2;@editor Divider
     */
    public function cemeteryAdd($data = [])
    {
        
        $validate_result = $this->validateCemetery->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemetery->getError(),'',1);
        }
        
        if(empty($data['iy']))
        {
            if(!empty($data['star']) && !empty($data['end']))
            {
                for($i=$data['star'];$i<=$data['end'];$i++)
                {
                    $condition = array(
                          'vno' => $data['ix'].'-'.$i,
                          'cname' => $data['ix'].'排'.$i.'号',
                          'garden_id' => $data['garden_id'],
                          'classify_id' => $data['classify_id'],
                          'type_id' => $data['type_id'],
                          'style_id' => $data['style_id'],
                          'ix' => $data['ix'],
                          'iy' => $i,
						  'orientation' => $data['orientation'],
						  'area' => $data['area'],
                          'sellprice' => $data['sellprice'],
                          'costprice'=> !empty($data['costprice'])?$data['costprice']:'',
                          'create_time'=> TIME_NOW
                    );
                   $result= $this->modelCemetery->addInfo($condition);
                }
            }
            $result && action_log('新增墓穴信息', '新增墓穴信息，name：新增墓穴');
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }
        else
        {
            if(empty($data['star']) && empty($data['end']))
            {
                unset($data['star']);
                unset($data['end']);
                $data['vno']= $data['ix'].'-'.$data['iy'];
                $data['cname']= $data['ix'].'排'.$data['iy'].'号';
                $result = $this->modelCemetery->addInfo($data);
            }
            $result && action_log('新增墓穴信息', '新增墓穴信息，name：新增墓穴');
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }
        	
    }
	
    /**
     * 墓穴信息编辑
	 * @version v2;@editor Divider
     */
    public function cemeteryEdit($data = [])
    {
        
        $validate_result = $this->validateCemetery->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemetery->getError(),'',1);
        }
        
        $condition = array(
            'vno' => $data['ix'].'-'.$data['iy'],
            'cname' => $data['ix'].'排'.$data['iy'].'号',
			'garden_id' => $data['garden_id'],
            'classify_id' => $data['classify_id'],
            'type_id' => $data['type_id'],
            'style_id' => $data['style_id'] ? $data['style_id'] : null,
            'ix' => $data['ix'],
            'iy' => $data['iy'],
			'orientation' => $data['orientation'],
			'area' => $data['area'],
            'sellprice' => $data['sellprice'],
            'costprice'=> $data['costprice']
        );
        
        $result = $this->modelCemetery->updateInfo(['id'=>$data['id']],$condition);
        
        $result && action_log('编辑墓穴信息', '编辑墓穴信息，name：'. $data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 墓穴信息删除
	 * @version v2;@editor Divider
     */
    public function cemeteryDel($id )
    {

	 $result = $this->modelCemetery->deleteInfo(["id"=>$id]);
	 $result && action_log('删除', '墓穴删除' . '，where：' . http_build_query(["id"=>$id]));
	  return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
    
    /**
     * 销售状态数量
     * @param type $q_id 园区
     * @param type $state 销售状态
     * @return type
	 * @version v2;@editor Divider
     */
    public function xiaoshouCount($q_id,$state)
    {
        $where = [];
		if($state){
			$where ['usestatus'] = $state;
		}
        if ($q_id) {
          $where ['classify_id'] = $q_id;
        }
        return $this->modelCemetery->stat($where,'count','id');
    }

	/**
     * 墓穴信息单条详情
	 * @version v2;@editor Divider
     */
    public function getCemeteryInfo($where = [], $field = true)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        $this->modelCemetery->alias('a');

        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = a.garden_id AND b.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'c.id = a.classify_id AND c.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = a.style_id AND d.status=1', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type e', 'e.id = a.type_id AND e.status=1', 'left'],
			[SYS_DB_PREFIX . 'cemetery_auxiliary f', 'f.cid = a.id AND f.status=1', 'left']
        ];

        return $this->modelCemetery->getInfo($where, $field, $join);
    }
	
	/**
     * 墓穴信息单条数据
	 * @version v2;@editor Divider
     */
    public function getCemeteryValues($where = [], $field = true){
		
		return $this->modelCemetery->getValue($where, $field);
		
	}
    /**
     * 根据条件修改墓穴状态
	 * @version v2;@editor Divider
     */
    public function updateCemeteryUsestatus($where = [],$data =[])
    {
       return $this->modelCemetery->updateInfo($where,$data);
    }
    
    
    /**
     * 打印墓穴信息
     */
    public function cemeteryPrint($cid)
    {
        $dataList =array();
        if(!empty($cid))
        {
            $where['a.id'] = $cid;
        }
        
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $field="a.id,b.type_name as gardenname,c.type_name as areaname,a.cname,f.sum_price,f.order_begin,
            f.order_end,f.buyer_name,f.relation,f.card_no,f.phone,f.address";
        $this->modelCemetery->alias('a');
        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'a.garden_id =b.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'a.classify_id = c.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'a.style_id = d.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type e', 'a.type_id = e.id', 'left'],
            [SYS_DB_PREFIX . 'order f', 'a.id = f.cid and f.`status`=1 and f.financetype =1', 'left']
        ];
        $cemeteryData = $this->modelCemetery->getInfo($where, $field, $join);
        
        $dataList['cemeteryData']=$cemeteryData;
        
        $buryData = $this->logicBury->getBuryList(['cid' => $cid],'*','id asc',false);
        
        $dataList['buryData'] =$buryData;
        
        $field1 ="a.id,a.order_id,a.sell_title,a.unit_price,a.amount,a.sell_price,"
                . "a.real_price,a.buryname";
        $this->modelOrderDetail->alias('a');
        $join1 = [
            [SYS_DB_PREFIX . 'order b', 'b.id =a.order_id and b.`status`=1', 'left']
        ];
        $serviceData = $this->modelOrderDetail->getList(['a.status' => 1], $field1 , 'a.id asc', $join1);
        
        $dataList['serviceData'] =$serviceData;
        return setRetrunData('success', $dataList);
    }

    /**
     * 公墓证套打获取墓穴信息以及持证人墓主信息
     */
    public function cemeteryburyPrint($cid)
    {
        $dataList =array();
        if(!empty($cid))
        {
            $where['a.id'] = $cid;
        }
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $field="a.id,b.type_name as gardenname,c.type_name as areaname,a.cname,f.sum_price,f.order_begin,
            f.order_end,f.buyer_name,f.relation,f.card_no,f.phone,f.address,f.sellname,a.ix,a.iy,
            d.texture,d.colour,d.area,e.type_name as mxlx,f.fph";
        $this->modelCemetery->alias('a');
        $join = [
            [SYS_DB_PREFIX . 'cemetery_classify b', 'a.garden_id =b.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'a.classify_id = c.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'a.style_id = d.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type e', 'a.type_id = e.id', 'left'],
            [SYS_DB_PREFIX . 'order f', 'a.id = f.cid and f.`status`=1 and f.financetype =1', 'left']
        ];
        $cemeteryData = $this->modelCemetery->getInfo($where, $field, $join);
        $dataList['cemeteryData']=$cemeteryData;
        
        $buryData = $this->logicBury->getBuryList(['cid' => $cid],'*','id asc',false);
        $dataList['buryData'] =$buryData;
        return setRetrunData('success', $dataList);
    }

    /**
     * 获取墓穴信息查询条件
	 * @version v2;@editor Divider
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['a.vno|a.cname|f.bury_name'] = ['like', '%'.$data['keyword'].'%'];
		
		!empty($data['y_id']) && $where['a.garden_id'] = $data['y_id'];
		
		!empty($data['type_id']) && $where['a.type_id'] = $data['type_id'];
		
		!empty($data['style_id']) && $where['a.style_id'] = $data['style_id'];
		
		!empty($data['usestatus']) && $where['a.usestatus'] = $data['usestatus'];
		
		!empty($data['q_id']) && $where['a.classify_id'] = $data['q_id'];
        
        return $where;
    }
	
   
    
}
