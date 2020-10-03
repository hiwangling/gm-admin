<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;
class OnlineMemorial extends BaseController
{
	
  public function memorialList()
    {
	  
		$where = $this->logicOnlineMemorial->getWhere($this->param);
	  
	    $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$list = $this->logicOnlineMemorial->getMemorialList($where,'a.id,a.buryname,a.title,a.sendword,a.vitrotype,a.privacy,a.vcnote,a.state,a.sid,a.mid,a.bind,a.create_time,m.realname as member_realname,m.mobile as member_mobile','a.id desc',$limit);
	    $list = $list->toArray();
	   foreach($list['data'] as $k=>$v){
			if(!empty($v['vitrotype'])){
				$v['small_vitrotype'] = explode('/',$v['vitrotype']);
				$v['small_vitrotype'][3] = 'small_'.$v['small_vitrotype'][3];
				$v['small_vitrotype'] = get_url().DS.implode('/',$v['small_vitrotype']);
				$v['big_vitrotype'] = get_url().DS.$v['vitrotype'];
		   }
			//$list[$k]['vitrotype'] = get_url().DS.'uploads' . DS . 'small' . DS . $v['vitrotype'];
			$list['data'][$k] = $v;
		}
	  
        return setRetrunData('success', $list);
	  
    }
	
	
	
	public function memorialInfo(){
		
		$where = $this->logicOnlineMemorial->getWhere($this->param);
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
		
		$info = $this->logicOnlineMemorial->memorialInfo($where,'a.*,m.realname as member_realname,m.mobile as member_mobile,cs.thumb as cs_thumb,cm.thumb as cm_thumb');

		$info = $info->toArray();
		if(!empty($info)){
			
			//print_r($info);
			if(!empty($info['vitrotype'])){
				$info['small_vitrotype'] = explode('/',$info['vitrotype']);
				$info['small_vitrotype'][3] = 'small_'.$info['small_vitrotype'][3];
				$info['small_vitrotype'] = get_url().DS.implode('/',$info['small_vitrotype']);
				$info['big_vitrotype'] = get_url().DS.$info['vitrotype'];
			}
			
			$info['leavewordCount'] = $this->logicOnlineLeaveword->leavewordStat(['mid'=>$info['id']],'count','id');
			
			$info['visitorsCount'] = $this->logicOnlineVisitors->visitorsStat(['mid'=>$info['id']],'count','id');
			
			$info['people'] = $this->logicOnlineMemorypeople->getMemorypeopleList(['mid'=>$info['id']],'*','',false);
		}
		
		return setRetrunData('success', $info);	
	}
	
	public function memorialState(){
		
		$update = array(
			'state'=>$this->param['state'],
			'reason'=>!empty($this->param['reason'])?$this->param['reason']:'',
		);
		
		$memorialInfo = $this->logicOnlineMemorial->memorialInfo(['a.id'=>$this->param['id']],'a.id,a.uid,a.title');
		$content = array(
			'keyword1'=>$memorialInfo['title'],
			'keyword2'=>"发送成功",
			'keyword3'=>date('Y-m-d H:i',time()),
			'remark'=>'您好，您有新的通知，请注意查收'
		);
		if($this->param['state']==2){
			$content['first'] = '您好，您的纪念馆审核不通过，请修改后再提交';
		}else{
			$content['first'] = '您好，您的纪念馆审核已通过，请祭奠';
		}
		
		$jump= get_url().'/memorial/?sid='.$this->param['id'];
		$openid = $this->logicOnlineMember->onlineMemberValues(['id'=>$memorialInfo['uid']],'openid');
		wordPush($jump,$content,$openid);
		
		return $this->logicOnlineMemorial->updateMemorial(['id'=>$this->param['id']],$update);
	}
	
	
	public function memorialDel(){
		
		return $this->logicOnlineMemorial->memorialDel(['id'=>$this->param['id']]);
	}
	
}