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
 * 修缮信息逻辑
 */
class Repair extends BaseLogic
{
    
    /**
     * 获取修缮信息列表
     */
    public function getRepairList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelRepair->getList($where, $field , $order, $paginate);
    }
    
    /**
     * 获取修缮信息列表
     */
    public function getRepairOrderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelRepair->alias('a');
        $join = [
            [SYS_DB_PREFIX . 'cemetery b', 'a.cid=b.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify c', 'b.classify_id = c.id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type e', 'b.type_id =e.id', 'left']
        ];
        return $this->modelRepair->getList($where, $field , $order, $paginate, $join);
    }
    
    /**
     * 获取修缮单条信息列表
     */
    public function getRepairInfo($where = [], $field = true)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

        return $this->modelRepair->getInfo($where, $field);
    }
    
    public function repairAdd($data =[])
    {   
        $validate_result = $this->validateRepair->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateRepair->getError(),'',1);
        }
        //需要修缮的图片
        if(isset($data['b_img_urls'])){
            $imgUrls=$data['b_img_urls'];
            unset($data['b_img_urls']);

            $result = $this->modelImages->saveAll($imgUrls);
            
            $b_img = "";
            foreach ($result as $k=>$v){
                $b_img .= $v['id'] . ',' ;   
            }
            $data['b_img'] = trim($b_img,',') ;

        }
          
        $data['sub_time']=date("Y-m-d H:i:s");
        if ($this->modelRepair->addInfo($data)) {
            //获取联系人的openid

            $msg="您有一项工程待施工！";
            $where["branch"]=8;
            $where["status"]=1;

            $memberlist= $this->logicManager->getManagerList($where,'*','id asc',false);
            if(!empty($memberlist)){
                foreach($memberlist as $k=>$v)
                {
                    if(!empty($v['roleopenid']))
                    {
                       // send_weixin_msg($v['roleopenid'],"",$msg);
                    }
                }
            }
            
            $result && action_log('新增', '新增修缮信息，name：新增修缮信息');
            return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        } else {
            return setRetrunData('保存失败', '', 1);
        }

    }

    public function repairEdit($data =[])
    {
        $validate_result = $this->validateRepair->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateRepair->getError(),'',1);
        }
        
        $repair=$this->getRepairInfo(['id' =>$data['id']],'*');
        $b_img='';
        if($repair['b_img']){
            $b_img=$repair['b_img'];
        }
        
        //修缮后的图片
        
        if(isset($data['b_img_urls'])){
            $imgUrls=$data['b_img_urls'];
            unset($data['b_img_urls']);
            foreach ($imgUrls as $key => $value) {
               if(isset($value['id']))
                 unset($imgUrls[$key]);
            }
            if(!empty($imgUrls)){
                $result = $this->modelImages->saveAll($imgUrls);
                
                foreach ($result as $k=>$v){
                    $b_img .=','. $v['id'] . ',' ;   
                }
                $data['b_img'] = trim($b_img,',') ;
            }
                        
        }
        $result= $this->modelRepair->updateInfo(['id'=>$data['id']],$data);
        $result && action_log('编辑', '编辑修缮信息，name：'. $data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }

    public function repairEditAfter($data =[]){
        $validate_result = $this->validateRepair->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateRepair->getError(),'',1);
        }
        //如果上传了修缮后的图片
        
        if(isset($data['a_img_urls'])){
            $imgUrls=$data['a_img_urls'];
            unset($data['a_img_urls']);
            
            if(!empty($imgUrls)){
                $result = $this->modelImages->saveAll($imgUrls);

                $a_img = "";
                foreach ($result as $k=>$v){
                    $a_img .= $v['id'] . ',' ;   
                }
                $repairdata['a_img'] = trim($a_img,',') ;
            }
                        
        }
        $repairdata['cid'] = $data['cid'];
        $repairdata['desc'] = $data['desc'];
        $repairdata['start_time'] = $data['start_time'];
        $repairdata['end_time'] = $data['end_time'];
        $repairdata['repair_status'] = $data['repair_status'];
        
        $result= $this->modelRepair->updateInfo(['id'=>$data['id']],$repairdata);
        $result && action_log('编辑', '编辑修缮信息，name：'. $data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }

    public function repairEditPic($data =[]){
        
        $data['repair_status'] = 2 ;

        $result = $this->modelRepair->updateInfo(['id'=>$data['id']],$data);
        
        $result && action_log('编辑', '归档修缮信息，name：'. $data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        
    }

    public function repairDel($id){
        $result = $this->modelRepair->deleteInfo(["id"=>$id]);
        $result && action_log('删除', '修缮信息删除' . '，where：' . http_build_query(["id"=>$id]));
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }

    public function repairDelPic($data =[]){
        
        if(isset($data['id']) == false){
             return setRetrunData('删除图片成功',[]);
        }
        $rid = $data['rid'];
        $flag = $data['flag'];
        
        $imageInfo = $this->logicImages->getImagesInfo(['id' => $data['id']],'*');
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
        $this->modelImages->deleteInfo(['id'=>$data['id']],true);
        $repair = $this->getRepairInfo(['id'=>$rid],'*');
        if($flag=='before'){
          $bImgStr=','.$repair['b_img'].',';
          $str=trim(str_replace(','.$data['id'].',', ',', $bImgStr),',');
          //dump($str);
          $result = $this->modelRepair->updateInfo(['id'=>$rid],array('b_img'=>$str));
          $result && action_log('删除', '删除图片信息，id：'. $data['id'] );
          return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
          
        }else if($flag=='after'){
          $aImgStr=','.$repair['a_img'].',';
          $str=trim(str_replace(','.$data['id'].',', ',', $aImgStr),',');
          
          $result = $this->modelRepair->updateInfo(['id'=>$rid],array('a_img'=>$str));
          $result && action_log('删除', '删除图片信息，id：'. $data['id'] );
          return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
        }

    }

    /**
     * 获取墓穴样式列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['keyword']) && $where['b.vno|b.cname'] = ['like', '%'.$data['keyword'].'%'];
        
        return $where;
    }
}
