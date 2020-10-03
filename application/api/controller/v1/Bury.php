<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * Description of Dept
 *
 * @author Administrator
 */
class Bury extends BaseController{
    
    /**
     * 逝者删除
     * @version v2;@editor Divider
     */
	public function buryDel()
    {
       return $this->logicBury->buryDel(['id'=>$this->param['id'],'cid'=>$this->param['cid']]);
    }
	
	/**
     * 逝者编辑
     * @version v2;@editor Divider
     */
    public function buryEdit()
    {
       return $this->logicBury->buryEdit($this->param);
    }
	
	/**
     * 安葬
     * @version v2;@editor Divider
     */
    public function anZhang()
    {
        return $this->logicBury->anZhang($this->param);
    }
	
	/**
     * 添加逝者信息
     * @version v2;@editor Divider
     */
    public function buryAdd()
    {
        
		return $this->logicBury->buryAdd($this->param);
    }

	/**
     * 根据安葬日期自动修改安葬状态 这个方法目前是针对所有园区的
	 * @version v2;@editor Divider
     */
    public function updateBurystatus()
    {
        return $this->logicBury->updateBurystatus();
    }
	
	
	
	
	
	
	
	
	
	/**
     * 根据墓穴ID查询逝者信息查询列表
     * @return type
     */
    public function buryList($cid)
    {
        $where['cid'] = $cid;
        $list = $this->logicBury->getBuryList($where,'*','id asc',false);
		foreach($list as $k=>$v){
			$images = $this->logicImages->getImagesList(['tid'=>$v['id'],'cid'=>$v['cid'],'status'=>1,'imgtype'=>1],'*','',false);
			//$v['images'] = $images;
			foreach($images as $key=>$val){
				if($val['step']==1){
					$v['card_photo_z'] = $val['photo'];
				}else{
					$v['card_photo_f'] = $val['photo'];
				}
			}
		}
        return setRetrunData('success', $list);
    }

    /**
     * 修改老数据中安葬状态有问题的操作
     * @return type
     */
    public function anZhangtz()
    {
        return $this->logicBury->anZhangtz($this->param);
    }
    
    
}