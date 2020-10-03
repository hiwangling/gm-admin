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
class Linkman extends BaseController{
    
    /**
     * 根据墓穴ID查询联系人列表
     * @return type
     */
    public function linkmanList($cid)
    {
        $where['cid'] = $cid;
        $list = $this->logicLinkman->getLinkmanList($where,'*','id asc',FALSE);
		foreach($list as $k=>$v){
			$images = $this->logicImages->getImagesList(['tid'=>$v['id'],'cid'=>$v['cid'],'status'=>1,'imgtype'=>2],'*','',false);
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
     * 联系人添加
     * @return type
     */
    public function linkmanAdd()
    {

		$linkData = $this->logicLinkman->linkmanAdd($this->param);
		return $linkData;
    }

    public function linkmanDel()
    {
       return $this->logicLinkman->linkmanDel(['id'=>$this->param['id'],'cid'=>$this->param['cid']]);
    }
	
	
	/**
     * 根据墓穴ID查询联系人列表
     * @version v2;@editor Divider
     */
    public function linkmanEdit()
    {
       return $this->logicLinkman->linkmanEdit($this->param);
    }
}