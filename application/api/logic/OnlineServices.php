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
 * 手机版服务管理
 */
class OnlineServices extends BaseLogic
{
    
    /**
     * 获取服务列表
     */
    public function getOnlineServicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
        $where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME]) ? $where['a.'.DATA_STATUS_NAME] : ['neq', DATA_DELETE];
		
		$this->modelOnlineServices->alias('a');
		
        $join = [
            [SYS_DB_PREFIX . 'online_shoptype o', 'a.shoptype = o.id', 'left'],
        ];

        return $this->modelOnlineServices->getList($where, $field , $order, $paginate,$join);
    }
	
    /**
     * 服务添加
     */
    public function servicesAdd($data = [])
    {
        
        $validate_result = $this->validateOnlineServices->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOnlineServices->getError(),'',1);
        }

        $result = $this->modelOnlineServices->setInfo($data);
        
        $result && action_log('新增', '新增服务信息，title:'.$data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
    /**
     * 服务编辑
     */
    public function servicesEdit($data = [])
    {
        
        $validate_result = $this->validateOnlineServices->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateOnlineServices->getError(),'',1);
        }
        $result = $this->modelOnlineServices->setInfo($data);
        
        $result && action_log('编辑', '编辑服务信息，name：'. $data['title'].',id:'.$data['id'] );
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
    /**
     * 服务删除
     */
    public function servicesDel($id)
    {
		$where['id'] = $id;
		
		 $result = $this->modelOnlineServices->deleteInfo($where);

		 $result && action_log('删除', '服务删除' . '，where：' . http_build_query($where));

		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
    /**
     * 获取服务查询条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['type_name']) && $where['a.title'] = ['like', '%'.$data['type_name'].'%'];
        
        return $where;
    }
	
   
    
}
