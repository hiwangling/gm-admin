<?php

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 手机版图片管理控制层
 *
 */
class OnlineImages extends BaseController{
    
    /**
     * 图片列表
     */
    public function imagesList()
    {
        $where = $this->logicOnlineImages->getWhere($this->param);
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicOnlineImages->getImagesList($where,'*','id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
	/**
     * 图片添加
     */
    public function imagesAdd()
    {
		
		return $this->logicOnlineImages->imagesAdd($this->param);
		
    }
	
	/**
     * 图片删除
     */
    public function imagesDel($id=0)
    {
       return $this->logicOnlineImages->imagesDel($id);
    }
	
	/**
     * 图片编辑
     */
    public function imagesEdit()
    {
       return $this->logicOnlineImages->imagesEdit($this->param);
    }
}