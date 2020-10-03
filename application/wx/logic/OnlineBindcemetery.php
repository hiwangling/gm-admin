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

namespace app\wx\logic;

class OnlineBindcemetery extends BaseLogic
{
    
	/**
     * 获取墓穴绑定列表
     */
    public function bindcemeteryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineBindcemetery->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'cemetery c', 'a.cid = c.id', 'left'],
            [SYS_DB_PREFIX . 'online_member o', 'a.uid = o.id', 'left'],
			[SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = c.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type f', 'f.id = c.type_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = c.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = c.garden_id', 'left'],
			[SYS_DB_PREFIX . 'cemetery_auxiliary h', 'h.cid = a.cid AND h.status=1', 'left'],
			[SYS_DB_PREFIX . 'order g', 'g.cid = a.cid AND g.status=1 AND g.financetype=2', 'left']
        ];
		
		return $this->modelOnlineBindcemetery->getList($where, $field , $order, $paginate, $join);
		
	}
	/**
     * 获取墓穴绑定信息
     */
    public function bindcemeteryInfo($where,$field = true){
		
		$this->modelOnlineBindcemetery->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'cemetery c', 'a.cid = c.id', 'left'],
            [SYS_DB_PREFIX . 'online_member o', 'a.uid = o.id', 'left'],
			[SYS_DB_PREFIX . 'cemetery_classify b', 'b.id = c.classify_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_type f', 'f.id = c.type_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_style d', 'd.id = c.style_id', 'left'],
            [SYS_DB_PREFIX . 'cemetery_classify e', 'e.id = c.garden_id', 'left'],
			[SYS_DB_PREFIX . 'cemetery_auxiliary h', 'h.cid = a.cid AND h.status=1', 'left'],
			[SYS_DB_PREFIX . 'order g', 'g.cid = a.cid AND g.status=1 AND g.financetype=2', 'left']
			
        ];
		
		return $this->modelOnlineBindcemetery->getInfo($where,$field,$join);
		
	}
	
	/**
     * 添加墓穴绑定信息
     */
	
	public function bindcemeteryAdd($data=[]){
		
		if(!empty($data))
			$add_data = $data;
		else
			return setRetrunData('添加数据不能为空','',1);
		
		$info = $this->bindcemeteryValues(['uid'=>$add_data['uid'],'cid'=>$add_data['cid'],'status'=>1],'id');
		
		if(!empty($info)){
			
			return setRetrunData('您已绑定过该墓穴，请勿重复绑定','',1);
		}
		//认定为默认绑定墓穴
		if(empty($add_data['state']) || $add_data['state']==1){
			
			$this->bindcemeteryEdit(['uid'=>$add_data['uid']],['state'=>0]);
			
		}
		
		$result = $this->modelOnlineBindcemetery->addInfo($add_data);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	/**
     * 修改墓穴绑定信息
     */
	public function bindcemeteryEdit($where,$data){
		
		if(empty($where)){
			
			return setRetrunData('修改条件不能为空','',1);
		}
		
		if(empty($data)){
			
			return setRetrunData('修改数据不能为空','',1);
		}
			
		$result = $this->modelOnlineBindcemetery->updateInfo($where,$data);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	/**
     * 修改墓穴绑定删除
     */
	public function bindcemeteryDel($where){
		
		$result = $this->modelOnlineBindcemetery->deleteInfo($where);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	/**
     * 墓穴绑定查询条件
     */
    public function getWhere($data=[]){
		
		$where = [];
        
        !empty($data['uid']) && $where['a.uid'] = $data['uid'];
		
		!empty($data['state']) && $where['a.state'] = $data['state'];
        
        return $where;
	}
	
	/**
     * 获取绑定数据单数据
     */
	public function bindcemeteryValues($where=[],$field=true){
		
		return $this->modelOnlineBindcemetery->getValue($where,$field);
	}
}
