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

class OnlineMemorial extends BaseLogic
{
    
    /**
     * 获取纪念馆列表
     */
    public function getMemorialList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineMemorial->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'online_deploy cs', 'a.sid = cs.id AND cs.type=1', 'left'],
			[SYS_DB_PREFIX . 'online_deploy cm', 'a.mid = cm.id AND cm.type=2', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'a.uid = m.id', 'left'],
        ];
		
		return $this->modelOnlineMemorial->getList($where, $field , $order, $paginate,$join);
    }
	
	public function memorialInfo($where = [], $field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineMemorial->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'online_deploy cs', 'a.sid = cs.id AND cs.type=1', 'left'],
			[SYS_DB_PREFIX . 'online_deploy cm', 'a.mid = cm.id AND cm.type=2', 'left'],
            [SYS_DB_PREFIX . 'online_member m', 'a.uid = m.id', 'left'],
        ];
		
		return $this->modelOnlineMemorial->getInfo($where, $field,$join);
		
	}
	
	/**
     * 获取纪念馆添加
     */
	public function memorialAdd($data=[]){
		
		$add_data = array(
			'uid'=>$data['uid'],
			'title'=>$data['title'],
			'sendword'=>$data['sendword'],
			'vcnote'=>!empty($data['vcnote'])?$data['vcnote']:'',
			'vitrotype'=>!empty($data['vitrotype'])?$data['vitrotype']:'',
			'privacy'=>!empty($data['privacy'])?$data['privacy']:1,
			'sid'=>$data['sid'],
			'mid'=>$data['mid'],
			'state'=>3,
			'bind'=>!empty($data['cid'])?1:0
		);
		$result = $this->modelOnlineMemorial->addInfo($add_data);
		
		if($add_data['state']!=3){
			$jump= get_url().'/memorial/?sid='.$result;
			$openid = $this->logicOnlineMember->onlineMemberValues(['id'=>$data['uid']],'openid');
			$content = array(
				'first'=>'您好，您的纪念馆正在审核，请耐心等待',
				'keyword1'=>$data['title'],
				'keyword2'=>"发送成功",
				'keyword3'=>date('Y-m-d H:i',time()),
				'remark'=>'您好，您有新的通知，请注意查收'
			);
			wordPush($jump,$content,$openid);
		}
		
		$this->logicOnlineBindmemorial->bindmemorialAdd($data['uid'],$result,1);//关联添加
		
		$this->logicOnlineMemorypeople->memorypeopleAdd($data,$result);//纪念人添加
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	public function memorialRedact($data=[]){
		
		$edit_data = array(
			'uid'=>$data['uid'],
			'title'=>$data['title'],
			'sendword'=>$data['sendword'],
			'vcnote'=>!empty($data['vcnote'])?$data['vcnote']:'',
			'vitrotype'=>!empty($data['vitrotype'])?$data['vitrotype']:'',
			'privacy'=>!empty($data['privacy'])?$data['privacy']:1,
			'sid'=>$data['sid'],
			'mid'=>$data['mid'],
			'bind'=>!empty($data['cid'])?1:0
		);
		
		$result = $this->modelOnlineMemorial->updateInfo(['id'=>$data['id']],$edit_data);
		
		$this->logicOnlineMemorypeople->memorypeopleDel(['mid'=>$data['id']]);
		
		$this->logicOnlineMemorypeople->memorypeopleAdd($data,$data['id']);//纪念人添加
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	}
	/**
     * 修改纪念馆信息
     */
	public function updateMemorial($where,$update){
		
		if(empty($update)){
			return setRetrunData('修改数据不能为空','',1);
		}
		
		$result = $this->modelOnlineMemorial->updateInfo($where,$update);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	
	/**
     * 修改纪念馆信息
     */
	public function memorialDel($where=[]){
		
		if(empty($where)){
			
			return setRetrunData('条件不能为空','',1);
		}
		
		$this->logicOnlineMemorypeople->memorypeopleDel(['mid'=>$where['id']]);//删除纪念馆下面的逝者信息
		
		$this->logicOnlineBindmemorial->bindmemorialDel(['mid'=>$where['id']]);//删除纪念馆下面的关联人员
		
		$result = $this->modelOnlineMemorial->deleteInfo($where);//删除纪念馆
 
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
	}
	/**
     * 获取纪念馆列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['buryname']) && $where['a.buryname'] =  ['like', '%'.$data['buryname'].'%'];
		
		!empty($data['id']) && $where['a.id'] =  $data['id'];
        
        return $where;
    }
   
    
}
