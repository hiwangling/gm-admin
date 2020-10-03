<?php

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 手机版图片管理控制层
 *
 */
class OnlineMember extends BaseController{
    
    /**
     * 微信会员列表
     */
    public function memberList()
    {
        $where = $this->logicOnlineMember->getWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicOnlineMember->memberList($where,'*','id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
	
	/**
     * 会员删除
     */
    public function memberDel($id=0)
    {
       return $this->logicOnlineMember->memberDel($id);
    }
	
}