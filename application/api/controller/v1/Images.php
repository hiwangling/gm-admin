<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class Images extends BaseController
{
    
	/**
     * 获取图片资料
	 * @version v2;@editor Divider
     */
	public function getImagesList(){
		
		$where = $this->logicImages->getWhere($this->param);

		$list = $this->logicImages->getImagesList($where,'*','id asc',false);

		return setRetrunData(RESULT_SUCCESS,$list);
	}
	
	/**
     * 图片操作
	 * @version v2;@editor Divider
     */
	public function imagesDispose(){
		
		return $this->logicImages->imagesDispose($this->param);
	}
	
	/**
     * 图片删除
	 * @version v2;@editor Divider
     */
	public function imagesDel(){
		
		return $this->logicImages->imagesDel(['id'=>$this->param['id']]);
	}
	
	
	/**
     * 获取该迁出信息下的所有图片资料
     */
    public function getImagesByzid()
    {
		
        return $this->logicImages->getImagesByzid($this->param);
    }
    
    /**
     * 编辑图片直接删除图片在添加
     * @return type
     */
    public function updateImages()
    {
        return $this->logicImages->updateImages($this->param);
    }
    
}