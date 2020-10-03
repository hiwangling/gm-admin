<?php
namespace app\wx\controller\v1;
use app\wx\controller\BaseController;
class OnlineMemorial extends BaseController
{
	
  public function memorialList()
    {
	  
		$where = $this->logicOnlineMemorial->getWhere($this->param);
	  
	  	$where['a.state'] =3;
	    $where['a.privacy'] =1;
	  
	    $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$list = $this->logicOnlineMemorial->getMemorialList($where,'a.*,m.realname as member_realname,m.mobile as member_mobile','a.id asc',$limit);
	   $list = $list->toArray();
	   foreach($list['data'] as $k=>$v){
			if(!empty($v['vitrotype'])){
				$v['small_vitrotype'] = explode('/',$v['vitrotype']);
				$v['small_vitrotype'][3] = 'small_'.$v['small_vitrotype'][3];
				$v['small_vitrotype'] = get_url().DS.implode('/',$v['small_vitrotype']);
		   }
			$list['data'][$k] = $v;
		}
        return setRetrunData('success', $list);
	  
    }
	
	public function memorialMyList(){
		
		$where = $this->logicOnlineBindmemorial->getWhere($this->param);
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
		
		$list = $this->logicOnlineBindmemorial->getMemorialList($where,'a.type as bind_type,b.*,m.realname as member_realname,m.mobile as member_mobile','a.id asc',false);
		$list = json_decode(json_encode($list),true);
	   foreach($list as $k=>$v){
			if(!empty($v['vitrotype'])){
				$v['small_vitrotype'] = explode('/',$v['vitrotype']);
				$v['small_vitrotype'][3] = 'small_'.$v['small_vitrotype'][3];
				$v['small_vitrotype'] = get_url().DS.implode('/',$v['small_vitrotype']);
		   }
			$list[$k] = $v;
		}
		$mylist = array(1=>'创建',2=>'收藏');
		$data = array();
	  	foreach($mylist as $key=>$val){
			$data[$key]['title'] = $val;
			$data[$key]['type'] = $key;
			foreach($list as $k=>$v){
				if($v['bind_type']==$key){
					$data[$key]['memorial'][]=$v;
				}
			}
		}
	  
       return setRetrunData('success', array_values($data));	
		
	}
	
	public function memorialInfo(){
		
		$where = $this->logicOnlineMemorial->getWhere($this->param);
		
		if(empty($where)){
			return setRetrunData('条件不能为空','',1);
		}
		
		$info = $this->logicOnlineMemorial->memorialInfo($where,'a.*,m.realname as member_realname,m.mobile as member_mobile,cs.thumb as cs_thumb,cm.thumb as cm_thumb,cm.title as cm_title');

		$info = $info->toArray();
		
		if(!empty($info)){
			if(!empty($info['vitrotype'])){
				$info['small_vitrotype'] = explode('/',$info['vitrotype']);
				$info['small_vitrotype'][3] = 'small_'.$info['small_vitrotype'][3];
				$info['small_vitrotype'] = get_url().DS.implode('/',$info['small_vitrotype']);
			}
			if($info['cs_thumb']){
				$info['cs_thumb'] = get_url().DS.$info['cs_thumb'];
			}
			if($info['cm_thumb']){
				$info['cm_thumb'] = get_url().DS.$info['cm_thumb'];
			}
			$collect = $this->logicOnlineBindmemorial->bindmemorialInfo(['a.mid'=>$info['id'],'a.uid'=>$this->param['uid']],'a.id,a.type');
			
			$this->logicOnlineVisitors->visitorsAdd($this->param['uid'],$info['id']);
		
			$info['collect'] = !empty($collect['type'])?$collect['type']:0;
			
			$info['leavewordCount'] = $this->logicOnlineLeaveword->leavewordStat(['mid'=>$info['id']],'count','id');
			
			$info['visitorsCount'] = $this->logicOnlineVisitors->visitorsStat(['mid'=>$info['id']],'count','id');
			
			$info['people'] = $this->logicOnlineMemorypeople->getMemorypeopleList(['mid'=>$info['id']],'*','',false);
		}
		
		return setRetrunData('success', $info);	
	}
	
	public function memorialAdd(){
		
		return $this->logicOnlineMemorial->memorialAdd($this->param);
	}
	
	public function memorialRedact(){
		
		return $this->logicOnlineMemorial->memorialRedact($this->param);
	}
	
	public function memorialCollect(){
		
		return $this->logicOnlineBindmemorial->bindmemorialAdd($this->param['uid'],$this->param['id'],2);
	}
	
	public function memorialPelieve(){
		
		return $this->logicOnlineBindmemorial->bindmemorialDel(['mid'=>$this->param['id'],'uid'=>$this->param['uid']]);
	}
	
	public function memorialDel(){
		
		return $this->logicOnlineMemorial->memorialDel(['id'=>$this->param['id']]);
	}
	
}