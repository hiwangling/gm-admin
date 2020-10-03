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
 * 手机版商品分类管理
 */
class OnlineShoptype extends BaseLogic
{
    
    /**
     * 获取商品分类列表
     */
    public function getShoptypeList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME]) ? $where[DATA_STATUS_NAME] : ['neq', DATA_DELETE];

        return $this->modelOnlineShoptype->getList($where, $field , $order, $paginate);
    }
	
    /**
     * 商品分类添加
     */
    public function shoptypeAdd($data = [])
    {
        
        $validate_result = $this->validateOnlineShoptype->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOnlineShoptype->getError(),'',1);
        }

        $result = $this->modelOnlineShoptype->setInfo($data);
        
        $result && action_log('新增', '新增商品分类信息，title:'.$data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 商品分类信息编辑
     */
    public function shoptypeEdit($data = [])
    {
        
        $validate_result = $this->validateOnlineShoptype->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOnlineShoptype->getError(),'',1);
        }
        $result = $this->modelOnlineShoptype->setInfo($data);
        
        $result && action_log('编辑', '编辑商品分类信息，name：'. $data['title'].',id:'.$data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 商品分类信息删除
     */
    public function shoptypeDel($id)
    {
		 $where['id'] = $id;
		
		 $result = $this->modelOnlineShoptype->deleteInfo($where);

		 $result && action_log('删除', '商品分类删除' . '，where：' . http_build_query($where));

		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
    /**
     * 获取商品分类查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['type_name']) && $where['title'] = ['like', '%'.$data['type_name'].'%'];
        
        return $where;
    }
	
   
    
}
