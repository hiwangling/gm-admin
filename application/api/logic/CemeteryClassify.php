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
 

/**
 * 
 */
class CemeteryClassify extends BaseLogic
{

    
	
	public function cemeteryClassifyEdit($data = []){
        $validate_result = $this->validateCemeteryClassify->scene('edit')->check($data);

        if (!$validate_result) {
            
            return setRetrunData($this->validateCemeteryClassify->getError(),'',1);
        }
		
		unset($data['originalTitle']);
        unset($data['edit']);
        unset($data['parent_name']);
        /*if(isset($data['y_id'])){
           unset($data['y_id']);
        }
        if(isset($data['y_name'])){
            unset($data['y_name']);
        }*/
        
        $result = $this->modelCemeteryClassify->setInfo($data);

        $result && action_log('编辑墓区', '编辑墓区，name：' . $data['type_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

    public function cemeteryClassifyDel($where = [])
    {

        $result = $this->modelCemeteryClassify->deleteInfo($where);
        
        $result && action_log('墓区删除', '墓区删除' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
    
    public function cemeteryClassifyAdd($data = []){

        $validate_result = $this->validateCemeteryClassify->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCemeteryClassify->getError(),'',1);
        }
        
        $data[TIME_CT_NAME] = TIME_NOW;

        $result = $this->modelCemeteryClassify->setInfo($data);
        
        $result && action_log('新增墓区', '新增墓区，name：' . $data['type_name']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }
	 
	/**
     * 获取墓园分类列表
	 *
     */
    public function getCemeteryClassifyList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
        
        
        return $this->modelCemeteryClassify->getList($where, $field , $order, $paginate);
    }

	/**
     * 获取墓园分类详情
	 *
     */
    public function getCemeteryClassifyInfo($where=[],$field=true){

         return $this->modelCemeteryClassify->getInfo($where, $field);

    }
    
	/**
     * 获取墓园父类列表
	 *
     */
	public function getParentList(){
		
		$list = $this->getCemeteryClassifyList(['parent_id'=>0,'status'=>1],'id,type_name','',false);
		
		$data = array();
		
		foreach($list as $k=>$v){
			
			$data[$v['id']] = $v['type_name'];
		}
		
		return $data;
	}
	
	/**
     * 获取墓园类型搜索条件
	 *
     */
    public function getWhereGarden($data = [])
    {
        
        $where = [];
      
        !empty($data['keyword']) && $where['type_name'] = ['like', '%'.$data['keyword'].'%'];
		
		//!empty($data['parent_id']) && $where['parent_id'] = ['like', '%'.$data['keyword'].'%'];

        $where['parent_id']=!empty($data['parent_id'])?empty($data['parent_id']):0;  

        return $where;
    }

	
    public function getWhereArea($data = [])
    {
        
        $where = [];

        !empty($data['keyword']) && $where['type_name'] = ['like', '%'.$data['keyword'].'%'];

         if(!empty($data['pid']))
        {
           $where['parent_id'] =$data['pid'];
        }else{
            $where['parent_id']=['<>',0];
        }

            
        return $where;
    }
	
   
    
}
