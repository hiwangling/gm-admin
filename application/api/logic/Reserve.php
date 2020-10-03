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
 * 墓穴预定逻辑
 */
class Reserve extends BaseLogic
{
    
    /**
     * 墓穴预定列表
     */
    public function getReserveList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelReserve->alias('a');
        $join = [
            [SYS_DB_PREFIX . 'cemetery b', 'b.id = a.cid', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'c.id = b.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type d', 'd.id = b.type_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style e', 'e.id = b.style_id', 'left']
        ];

        return $this->modelReserve->getList($where, $field , $order, $paginate, $join);
    }
	
    /**
     * 墓穴预定信息添加
     */
    public function reserveAdd($data = [])
    {
        
        $validate_result = $this->validateReserve->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateReserve->getError(),'',1);
        }
        
        $cemetery = $this->logicCemetery->getCemeteryInfo(['a.id' => $data['cid']],'a.*');
        if($cemetery['usestatus']!= '1')
            return setRetrunData('该墓位已不能预定了', '', 1);

        $reserve_one = $this->modelReserve->getInfo(['cid'=>$data['cid']], true);
        if(!empty($reserve_one))
            return setRetrunData('已经预定过,请不要重复预定！', '', 1);
        
         //预定日期
         $data['ordainbegin'] = strtotime($data['ordainbegin']);
         //到期日期
         $data['ordainend'] = strtotime($data['ordainend']);
	 $result = $this->modelReserve->addInfo($data);
         $result = $this->logicCemetery->updateCemeteryUsestatus(['id'=> $data['cid']],['usestatus' => 2]);
         $result && action_log('新增', '新增墓穴预定信息，name：' . $data['cid'].'-'. $data['buyer_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 墓穴预定信息编辑
     */
    public function reserveEdit($data = [])
    {
        
        $validate_result = $this->validateReserve->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateReserve->getError(),'',1);
        }
        //预定日期
         $data['ordainbegin'] = strtotime($data['ordainbegin']);
         //到期日期
         $data['ordainend'] = strtotime($data['ordainend']);
         
        $result = $this->modelReserve->updateInfo(['id'=>$data['id']],$data);
        
        $result && action_log('编辑', '编辑墓穴预定信息，name：'. $data['cid'].'-'. $data['buyer_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 墓穴预定信息删除
     */
    public function reserveDel($id,$cid)
    {
         $cemetery = $this->logicCemetery->getCemeteryInfo(['a.id' => $cid],'a.*');
	 $result = $this->modelReserve->deleteInfo(["id"=>$id],true);
         if(!empty($cemetery))
         {
             if($cemetery['usestatus']==2)
             {
                 $result = $this->logicCemetery->updateCemeteryUsestatus(['id'=> $cid],['usestatus' => 1]);
             }
         }
         $result && action_log('删除', '预定信息删除' . '，where：' . http_build_query(["id"=>$id]));
         return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
    
    /**
     * 预定到期时间过了之后自动修改墓穴状态以及删除预定信息
     */
    public function updateReserveState()
    {
        $reserve = $this->getReserveList(['ordainend'=> array('lt',time()-86400)],'a.*','a.id asc',false);
        $ids = [];
        $cids = [];
        $cemeteryupd ="";
        $reservedel ="";
        if(!empty($reserve))
        {
            foreach ($reserve as $k => $v)
            {
                $ids [] = $v['id'];
                $cids [] = $v['cid'];
            }
            if(!empty($cids) )
            {
                $cemeteryupd = $this->logicCemetery->updateCemeteryUsestatus(['id'=> array('in',$cids)],['usestatus' => 1]);
            }
            if(!empty($ids))
            {
                $reservedel = $this->modelReserve->deleteInfo(['id'=> array('in',$ids)],true);
            }
        }
        
        if($cemeteryupd !==FALSE && $reservedel !==FALSE)
        {
            return setRetrunData('删除成功',$reserve);
        }
        else
        {
             return setRetrunData('删除失败',$reserve, 1);
        }
    }
	
    /**
     * 获取部门列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['buyer_name'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
