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
 * 工程信息逻辑
 */
class Engineering extends BaseLogic
{
    
    /**
     * 获取工程信息列表
     */
    public function getEngineeringList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelEngineering->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 获取工程单条信息
     * @return type
     */
    public function getEngineeringInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelEngineering->getInfo($where, $field);
    }
    
    public function engineeringAdd($data =[])
    {
        $validate_result = $this->validateEngineering->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateEngineering->getError(),'',1);
        }
        Db::startTrans();
        try{
                //需要修缮的图片
               if(isset($data['img_urls'])){
                   $imgUrls=$data['img_urls'];
                   unset($data['img_urls']);
                   
                   foreach ($imgUrls as $key => $value) {
                       //type=3 工程图片
                       $imgUrls[$key]['type']=3;
                   }
                   $result= $this->modelImages->saveAll($imgUrls);
                   
                   $img_ids = "";
                   foreach ($result as $k=>$v){
                       $img_ids .= $v['id'] . ',' ;   
                   }
                   $data['img_ids'] = trim($img_ids,',') ;
               }
                
                $this->modelEngineering->addInfo($data);
                // 提交事务
                $result= Db::commit();
                if($result !==false)
                {
                    action_log('新增工程信息', '新增工程信息' . '，name：' .$data['leader']);
                    return setRetrunData('添加成功', 0);
                }
                else
                {
                    return setRetrunData('添加失败', '', 1);
                } 
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
            }
    }

    public function engineeringEdit($data =[])
    {
        $validate_result = $this->validateEngineering->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateEngineering->getError(),'',1);
        }
        
        $engineering= $this->getEngineeringInfo(['id' => $data['id']],'*');
        $img_ids='';
        if($engineering['img_ids']){
            $img_ids=$engineering['img_ids'];
        }
        //修缮后的图片
        Db::startTrans();
        try{
                if(isset($data['img_urls'])){
                    $imgUrls=$data['img_urls'];
                    unset($data['img_urls']);
                    foreach ($imgUrls as $key => $value) {
                       if(isset($value['id']))
                         unset($imgUrls[$key]);
                    }
                    if(!empty($imgUrls))
                    {
                        foreach ($imgUrls as $key => $value) {
                            $imgUrls[$key]['type']=3;
                        }
                        $result =$this->modelImages->saveAll($imgUrls);

                        foreach ($result as $k=>$v){
                            $img_ids .=','. $v['id']  ;   
                        }
                        $data['img_ids'] = trim($img_ids,',') ;
                    }

                }
                $this->modelEngineering->updateInfo(['id'=>$data['id']],$data); 
                
                // 提交事务
                $result= Db::commit();
                if($result !==false)
                {
                    action_log('编辑工程信息', '编辑工程信息' . '，name：' .$data['leader']);
                    return setRetrunData('编辑成功', 0);
                }
                else
                {
                    return setRetrunData('编辑失败', '', 1);
                } 
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
            }
    }
 
    public function getEngineeringInfoById($id)
    {
        $where = [];
        $where['id'] = $id;
        $data = $this->getEngineeringInfo($where,'*');
        //如果上传了图片
        if($data['img_ids']){
            $img_ids=$data['img_ids'];
            $result= $this->logicImages->getImagesList(['id' => array('in',$img_ids)],'*','id asc',false);
            
            $img_arr=array();
            foreach ($result as $key => $value) {
                array_push($img_arr,array('url'=>$value['url'],'id'=>$value['id']));
            }  
            $data['img_arr']=$img_arr;

        }else{ 
            $data['img_arr']=[]; 
        } 
        if($data){
            return setRetrunData('success', $data);
        }else{
            return setRetrunData('success', []);
        }
    }

    public function engineeringDel($id){
        
       $result = $this->modelEngineering->deleteInfo(['id'=>$id]);
       $result && action_log('删除', '工程信息删除' . '，where：' . $id);
       return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
       
    }

    public function engineeringDelPic($data =[]){
        if(isset($data['id']) == false){
             return setRetrunData('删除图片成功',[]);
        }
        $rid = $data['rid'];
        $imageInfo= $this->logicImages->getImagesInfo(['id' => $data['id']],'*');
        //获取图片url
        $url=$imageInfo['url'];

        if($url){
            $str = substr($url, 20);
            if($str){
                $filename = './'.$str;
                if(file_exists($filename)){
                    unlink($filename);
                }
            }
        }
        
        Db::startTrans();
        try{
            $this->modelImages->deleteInfo(['id' => $data['id']],true);
            $engineering = $this->getEngineeringInfo(['id' => $rid],'*');
            $ImgStr=','.$engineering['img_ids'].',';
            $str=trim(str_replace(','.$data['id'].',', ',', $ImgStr),',');
            $this->modelEngineering->updateInfo(['id'=>$rid],array('img_ids'=>$str));
        // 提交事务
            $result= Db::commit();
            if($result !==false)
            {
                action_log('删除工程图片', '删除工程图片信息' . '，id：' .$data['id']);
                return setRetrunData('删除图片成功', 0);
            }
            else
            {
                return setRetrunData('删除图片失败', '', 1);
            } 
        } catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
        }
    }

    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['builder'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
}
