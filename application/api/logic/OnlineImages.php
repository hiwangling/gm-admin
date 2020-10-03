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
 * 手机版图片管理
 */
class OnlineImages extends BaseLogic
{
    
    /**
     * 获取图片列表
     */
    public function getImagesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME]) ? $where[DATA_STATUS_NAME] : ['neq', DATA_DELETE];

        return $this->modelOnlineImages->getList($where, $field , $order, $paginate);
    }
	
    /**
     * 图片添加
     */
    public function imagesAdd($data = [])
    {
        
        $validate_result = $this->validateOnlineImages->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOnlineImages->getError(),'',1);
        }

        $result = $this->modelOnlineImages->setInfo($data);
        
        $result && action_log('新增', '新增图片信息，title:'.$data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 图片信息编辑
     */
    public function imagesEdit($data = [])
    {
        
        $validate_result = $this->validateOnlineImages->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOnlineImages->getError(),'',1);
        }
        $result = $this->modelOnlineImages->setInfo($data);
        
        $result && action_log('编辑', '编辑图片信息，name：'. $data['title'].',id:'.$data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 图片信息删除
     */
    public function imagesDel($id)
    {
		$where['id'] = $id;
		
		 $result = $this->modelOnlineImages->deleteInfo($where);

		 $result && action_log('删除', '图片删除' . '，where：' . http_build_query($where));

		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
    /**
     * 获取图片查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['type_name']) && $where['title'] = ['like', '%'.$data['type_name'].'%'];
        
        return $where;
    }
	
   
    
}
