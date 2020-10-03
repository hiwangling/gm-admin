<?php

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 手机版商品分类管理控制层
 *
 */
class OnlineShoptype extends BaseController{
    
    /**
     * 商品分类列表
     */
    public function shoptypeList()
    {
        $where = $this->logicOnlineShoptype->getWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicOnlineShoptype->getShoptypeList($where,'*','id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
	/**
     * 商品分类添加
     */
    public function shoptypeAdd()
    {
		
		return $this->logicOnlineShoptype->shoptypeAdd($this->param);
		
    }
	
	/**
     * 商品分类删除
     */
    public function shoptypeDel($id=0)
    {
       return $this->logicOnlineShoptype->shoptypeDel($id);
    }
	
	/**
     * 商品分类编辑
     */
    public function shoptypeEdit()
    {
       return $this->logicOnlineShoptype->shoptypeEdit($this->param);
    }
}