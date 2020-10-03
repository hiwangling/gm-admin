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
 * 逝者信息逻辑
 */
class Bury extends BaseLogic
{

    /**
     * 逝者信息添加
	 * @version v2;@editor Divider
     */
    public function buryAdd($data = [])
    {
        
        $validate_result = $this->validateBury->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateBury->getError(),'',1);
        }
		
		$bury = $this->getBuryData($data);
		
        $result = $this->modelBury->addInfo($bury);
		
		$this->buryImageDispose($result,$data);
		
        if($result>0)
        {
             Db::execute('update ky_cemetery_auxiliary c ,(select  GROUP_CONCAT(vcname) as mu,GROUP_CONCAT(pym) as pym ,cid from ky_bury where cid='.$data['cid']
                            .' and `status`=1 GROUP BY cid) as b set c.bury_name=b.mu,c.pym=b.pym where c.status=1 and c.cid=b.cid and c.cid='.$data['cid']);
        }
        
	    $result && action_log('新增逝者信息', '新增逝者信息，cid：' . $data['cid']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        	
    }
	
	 /**
     * 逝者信息编辑
     */
    public function buryEdit($data = [])
    {
        $validate_result = $this->validateBury->scene('edit')->check($data);
        
        if (!$validate_result) 
        {
            return setRetrunData($this->validateBury->getError(),'',1);
        }
        
        $bury = $this->getBuryData($data);
        
        $result = $this->modelBury->updateInfo(['id'=>$data['id']],$bury);
		
		$this->logicImages->imagesDel(['cid'=>$data['cid'],'tid'=>$data['id'],'imgtype'=>1]);//删除联系人图片
		
		$this->buryImageDispose($data['id'],$data);
	
        if($result>0)
        {
             Db::execute('update ky_cemetery_auxiliary c ,(select  GROUP_CONCAT(vcname) as mu,GROUP_CONCAT(pym) as pym ,cid from ky_bury where cid='.$data['cid']
                            .' and `status`=1 GROUP BY cid) as b set c.bury_name=b.mu,c.pym=b.pym where c.status=1 and c.cid=b.cid and c.cid='.$data['cid']);
                   
        }
        $result && action_log('编辑', '编辑逝者信息，name：'. $data['vcname'] );
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 联系人图片处理
	 * @version v2;@editor Divider
     */
	public function buryImageDispose($tid,$data){
		
		/*添加档案图片*/
		$images = array(
			'tid'=>$tid,
			'cid'=>$data['cid'],
			'type'=>!empty($data['photo_type'])?$data['photo_type']:2,
			'imgtype'=>1,
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
     * 逝者信息数据统一处理
	 * @version v2;@editor Divider
     */
	public function getBuryData($data=[]){
		
		 $bury = array(
			   'cid'=>$data['cid'],
			   'vcname'=>$data['vcname'],
			   'sex'=>$data['sex'],
			   'age'=>!empty($data['age'])?$data['age']:'',
			   'nativeplace'=>$data['nativeplace'],
			   'nation'=>!empty($data['nation'])?$data['nation']:'',
			   'birth'=>$data['birth'],
			   'death'=>$data['death'],
			   'bury'=>$data['bury'],
			   'bury_status'=>!empty($data['bury_status'])?$data['bury_status']:0,
			   'sort'=>!empty($data['sort'])?$data['sort']:0,
			   'card_no'=>$data['card_no'],
			   'pym'=>strtoupper(getShortPinyin($data['vcname']))
		   );
		
		return $bury;
		
	}
	
	/**
     * 逝者信息删除
	 * @version v2;@editor Divider
     */
    public function buryDel($where)
    {
        
        $result = $this->modelBury->deleteInfo($where);
		
		$imagesWhere['cid'] = $where['cid'];
		
		$imagesWhere['imgtype'] = 1;
		
		!empty($where['id']) && $imagesWhere['tid'] = $where['cid'];
		
		$this->logicImages->imagesDel($imagesWhere);//删除逝者信息图片
		
        if($result>0)
        {
            
			Db::execute('update ky_cemetery_auxiliary c ,(select  GROUP_CONCAT(vcname) as mu,GROUP_CONCAT(pym) as pym ,cid from ky_bury where cid='.$where['cid']
                            .' and `status`=1 GROUP BY cid) as b set c.bury_name=b.mu,c.pym=b.pym where c.status=1 and c.cid=b.cid and c.cid='.$where['cid']);
                    
        }
        
        $result && action_log('删除逝者信息', '逝者信息删除' . '，where：' . http_build_query($where));
		
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 逝者信息安葬修改
	 * @version v2;@editor Divider
     */
	public function anZhang($data =[])
    {
        if (!$data['id']) {
            return setRetrunData('不能为空', '', 1);
        }
        if (isset($data['bury'])==false || empty($data['bury'])) {
            return setRetrunData('安葬日期不能为空', '', 1);
        }
        $bury = $data['bury'];
        
        $buryModel = $this->getBuryInfo(['id' => $data['id']]);
		
        $cemetery = $this->logicCemetery->getCemeteryInfo(['a.id' => $buryModel['cid']],'a.*');
		
        if ($cemetery['usestatus'] == 3 || $cemetery['usestatus'] == 4) {
			
            $this->modelBury->updateInfo(['id'=>$data['id']],['bury_status' =>1,'bury' => $bury]);
			
            $result= $this->modelCemetery->updateInfo(['id'=>$buryModel['cid']],['usestatus' =>4]);
			
            $result && action_log('逝者安葬', '逝者安葬' . '，name：' . $buryModel['vcname']);
			
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }else{
            return setRetrunData('该墓位状态下不能安葬', '', 1);
        }
    }
	
	
	/**
     * 获取逝者信息详情
	 * @version v2;@editor Divider
     */
    public function getBuryInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[ DATA_STATUS_NAME]) ? $where[ DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        return $this->modelBury->getInfo($where, $field);
    }

	/**
     * 获取逝者信息列表
	 * @version v2;@editor Divider
     */
    public function getBuryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[ DATA_STATUS_NAME]) ? $where[ DATA_STATUS_NAME] : ['eq', DATA_NORMAL];
        
        return $this->modelBury->getList($where, $field , $order, $paginate);
    }
    
     /**
     * 根据安葬日期自动修改安葬状态 这个方法目前是针对所有园区的
	 * @version v2;@editor Divider
     */
    public function updateBurystatus()
    {
        $where['b.usestatus'] =  [['=',3], ['=',4] ,'or'];
        $where['a.bury_status'] = 0;
        $where['a.bury'] = [['neq',''],['lt',date('y-m-d',time())]];//array('lt',date('y-m-d',time()));
        $where['a.' . DATA_STATUS_NAME] = ['eq', DATA_NORMAL];
        $where['b.' . DATA_STATUS_NAME] = ['eq', DATA_NORMAL];
        $this->modelBury->alias('a');

        $join = [
            [SYS_DB_PREFIX . 'cemetery b', 'a.cid =b.id', 'left']
        ];

        $bury_all= $this->modelBury->getList($where, 'a.*' , 'a.id asc',false,$join);
		
        if(!empty($bury_all))
        {
            Db::startTrans();
            try{
                    foreach ($bury_all as $k => $v)
                    {
                        $cemetery = $this->logicCemetery->getCemeteryInfo(['a.id' => $v['cid']],'a.*');
						
                        if ($cemetery['usestatus'] == 3 || $cemetery['usestatus'] == 4)
                        {
                            $this->modelBury->updateInfo(['id'=>$v['id']],['bury_status' => 1]);
							
                            $this->modelCemetery->updateInfo(['id'=> $v['cid']],['usestatus' =>4]);
                        }
                    }
                // 提交事务
                $result= Db::commit();
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
            }  
        }
    }
	
   
	
	
    

    public function getBuryNames($cid)
    {
        $burys = $this->getBuryList(['cid' => $cid],'*','id asc',FALSE);
        $names = '';
        if (!empty($burys)) {
            foreach ($burys as $k => $v) {
                $names .= $v['vcname'] . ',';
            }
        }
        return $names;
    }
    
    

    /**
     * 修改老数据中安葬状态有问题的操作
     * @return type
     */
    public function anZhangtz($data =[])
    {
        if (empty($data['id'])) {
            return setRetrunData('id不能为空', '', 1);
        }
        if (empty($data['cid'])) {
            return setRetrunData('cid不能为空', '', 1);
        }
        if (empty($data['bury_status'])) {
            return setRetrunData('安葬状态不能为空', '', 1);
        }
        if (empty($data['vcname'])) {
            return setRetrunData('墓主姓名不能为空', '', 1);
        }
        
        Db::startTrans();
        try{
                $this->modelBury->updateInfo(['id'=>$data['id']],$data);
                $cemetery = $this->logicCemetery->getCemeteryInfo(['a.id' => $data['cid']],'a.*');
                if ($cemetery['usestatus'] == 3 || $cemetery['usestatus'] == 4) 
                {
                    $buryall = $this->getBuryList(['cid'=> $data['cid']],'*','id asc',false);
                    if(!empty($buryall))
                    {
                        foreach ($buryall as $k => $v)
                        {
                            if($v['bury_status']==1)
                            {
                                $usestatus=4;
                                break;
                            }
                            else
                            {
                                $usestatus=3;
                            }
                        }
                    }
                    $this->modelCemetery->updateInfo(['id'=> $data['cid']],['usestatus' =>$usestatus]);
                    
                     Db::execute('update ky_cemetery c ,(select GROUP_CONCAT(vcname) as mu,GROUP_CONCAT(pym) as pym,cid from ky_bury where cid='.$data['cid']. 
                         ' and `status`=1 GROUP BY cid) as b set c.muzhu_name=b.mu,c.pym=b.pym where c.id=b.cid and c.id='.$data['cid']);
                }
            
                // 提交事务
                $result= Db::commit();
                if($result !==false)
                {
                    action_log('修改', '逝者安葬状态修改' . '，cid：' .$data['cid']);
                    return setRetrunData('修改成功', 0);
                }
                else
                {
                    return setRetrunData('修改失败', '', 1);
                } 
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
            }  
    }
    
   
    
    /**
     * 获取逝者信息查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['vno|cname|muzhu_name|pym'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
	
   
    
}
