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
 * 墓穴样式逻辑
 */
class Images extends BaseLogic
{
   
	/**
     * 添加档案图片
	 * @version v2;@editor Divider
     */
	public function imagesAdd($data=[]){
		
		$result = $this->modelImages->addInfo($data);
		
		$result && action_log('添加图片', '添加图片' . '，cid：' . $data['cid']);
		
		return $result ? $result:false;
	}
	
	/**
     * 修改档案图片
	 * @version v2;@editor Divider
     */
	public function imagesUpdate($where=[],$data=[]){
		
		$result = $this->modelImages->updateInfo($where,$data);
		
		$result && action_log('修改图片', '修改图片' . '，where：' .http_build_query($where));
		
		return $result ? true:false;
	}
	
	/**
     * 删除档案图片
	 * @version v2;@editor Divider
     */
	public function imagesDel($where){
		
		$result = $this->modelImages->deleteInfo($where);
		
		$result && action_log('删除图片', '删除图片' . '，where：' . http_build_query($where));
		
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	
	/**
     * 获取图片列表
	 * @version v2;@editor Divider
     */
    public function getImagesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        
        return $this->modelImages->getList($where, $field , $order, $paginate);
    }
    
	/**
     * 获取图片列表搜索条件
	 * @version v2;@editor Divider
     */
	
	public function getWhere($data=[]){
		
		$where=[];
		
		!empty($data['cid']) && $where['cid'] = $data['cid'];
		
		!empty($data['imgtype']) && $where['imgtype'] = $data['imgtype'];
		
		!empty($data['tid']) && $where['tid'] = $data['tid'];
		
		return $where;
	}
    /**
     * 获取图片单条信息
	 * @version v2;@editor Divider
     */
    public function getImagesInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        return $this->modelImages->getInfo($where, $field);
    }
    
	
	/**
     * 图片操作
	 * @version v2;@editor Divider
     */
    public function imagesDispose($data=[]){
		
		if(empty($data['tid']) || empty($data['cid']) || empty($data['imgtype']) || empty($data['card_photo'])){
			
			return setRetrunData('提交失败','',1);
			
		}
	     
		$imagesData = array(
			'tid' =>$data['tid'],
			'cid' =>$data['cid'],
			'images_name'=>$data['images_name'],
			'type'=>$data['type'],
			'imgtype'=>$data['imgtype'],
			'step'=>$data['step'],
		);
		
		if($data['type']==1){
			$imagesData['url'] = $data['card_photo'];
		}elseif($data['type']==2){
			$imagesData['photo'] = $data['card_photo'];
		}
		if(!empty($data['id'])){
			$result = $this->imagesUpdate(['id'=>$data['id']],$imagesData);
			$id = $data['id'];
		}else{
			$result = $this->imagesAdd($imagesData);
			$id = $result;
		}

		return $result ? setRetrunData(RESULT_SUCCESS,$id):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	
	
	
	
	
	
	/**
     * 获取该迁出信息下的所有图片资料
     */
    public function getImagesByzid($data =[])
    {
        $fjids =$data['fjids'];
        if(!empty($fjids))
        {
            $Images= $this->getImagesList(['id'=> array('in',$fjids)],'*','id asc',false);
            return setRetrunData('success', $Images);
        }
        else
        {
            return setRetrunData('ID为空','', 1);
        }
    }
    
    /**
     * 编辑图片直接删除图片在添加
     * @return type
     */
    public function updateImages($data =[])
    {
        $zid =input('id');  //历史记录表主id
        $fjids =$data['fjids']; //附件表的所有id
        $photo = $data['photo']; //图片
        if(!empty($photo))
        {
            Db::startTrans();
            try{
                
                if(!empty($fjids))
                {
                    $result= $this->modelImages->deleteInfo(['id'=> array('in',$fjids)],true);
                    if($result !== false)
                    {
                        $this->addImages($photo, $zid);
                    }
                }
                else
                {
                    $this->addImages($photo, $zid);
                }
                
                // 提交事务
                $result= Db::commit();
                if($result !==false)
                {
                    return setRetrunData('操作成功','', 0);
                }
                else
                {
                    return setRetrunData('操作失败','', 1);
                }  
                
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
            }
        }
        else
        {
            return setRetrunData('主要参数为空，请检查！！','', 1);
        }
    }
    
    public function addImages($photo,$zid)
    {

		if(!empty($photo))
        {
            $xfjids ="";
            $images=[];
            for($i=0;$i<count($photo);$i++){
               $images['photo'] = $photo[$i];
               $images['type'] = 1; //迁出的图片资料

              $imagesModel = $this->modelImages->addInfo($images);
              $xfjids.=",".$imagesModel;
            }

            if(!empty($xfjids))
            {
                $xfjids=substr($xfjids,1);

                $this->modelHistoryInfo->updateInfo(['id'=> $zid],['fjids'=> $xfjids]);
            }
        }
    }
    
    
}
