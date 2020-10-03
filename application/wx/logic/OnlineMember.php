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

class OnlineMember extends BaseLogic
{
    
    /**
     * 获取用户信息
     */
    public function getUserInfo($where,$field = true){
		
		return $this->modelOnlineMember->getInfo($where,$field);
		
	}
	
	/**
     * 获取用户信息及内部员工信息
     */
    public function getMemberInfo($where,$field = true){
		
		$where['a.' . DATA_STATUS_NAME] = !empty($where['a.' . DATA_STATUS_NAME]) ? $where['a.' . DATA_STATUS_NAME] : ['neq', DATA_DELETE];
        
        $this->modelOnlineMember->alias('a');
		
        $join = [
			
            [SYS_DB_PREFIX . 'manager b', 'b.id = a.mid', 'left'],
			
        ];

        return $this->modelOnlineMember->getInfo($where, $field , $join);
		
	}
	
	/**
     * 处理微信来源数据
     */
	public function getMemberData($data=[]){
		
		if(empty($data)){
			return setRetrunData('服务器异常未获取用户信息','',1);
		}
		
		$member = array(
			'nickname'=>$data['nickname'],
			'source'=>'微信',
			'openid'=>$data['openid'],
			'city'=>$data['city'],
			'province'=>$data['province'],
			'country'=>$data['country'],
			'headimgurl'=>$data['headimgurl'],
			'sex'=>$data['sex'],
			'access_token'=>!empty($data['access_token'])?$data['access_token']:''
		);
		
		return $member;
	}
	
   /**
     * 处理微信来源用户信息
     */
	public function disposeMemberAdd($data=[]){
		
		$add_data = $this->getMemberData($data);
		
		return $this->memberAdd($add_data);	
	}
	
	public function disposeMemberEdit($data=[]){
		
		$edit_data = $this->getMemberData($data);
		
		$result = $this->modelOnlineMember->updateInfo(['openid'=>$data['openid']],$edit_data);
		
		return $result;
		
	}
	/**
     * 添加用户信息
     */
	
	public function memberAdd($data=[]){
		
		if(!empty($data))
			$add_data = $data;
		else
			return setRetrunData('添加数据不能为空','',1);
		
		$result = $this->modelOnlineMember->addInfo($add_data);
		
		return $result;
	}
	
	/**
     * 编辑用户信息
     */

	public function memberEdit($where,$data=[]){
		
		if(!empty($data)){
			$edit_data = array(
				'id'=>$data['id'],
				'nickname'=>$data['nickname'],
				'realname'=>$data['realname'],
				'mobile'=>$data['mobile'],
				'sex'=>$data['sex']
			);
			$edit_data['password'] = !empty($data['password'])?md5(md5($data['password'])):'';
		}else{
			return setRetrunData('编辑数据不能为空','',1);
		}
      
		$result = $this->modelOnlineMember->updateInfo($where,$edit_data);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	/**
     * 会员表统一修改方法
     */
	public function onlineMemberUpdate($where=[],$data=[]){
		
		$result = $this->modelOnlineMember->updateInfo($where,$data);
		
		return $result ? $result:false;
	}
	
	/**
     * 内部员工绑定
     */
	public function bindUser($data=[]){
		
		 if (empty($data['openid']))
		 {
		  	return setRetrunData('用户openid失败','',1);  
		 }
		
		 $info = $this->logicManager->managerInfo(['username'=>$data['username'],'password'=>md5(md5($data['password']))],'id,username');
		
		 if(!empty($info)){
			 
			 $bindInfo = $this->getUserInfo(['mid'=>$info['id'],'status'=>1],'id,nickname');
			 
			 if(!empty($bindInfo)){
				 return setRetrunData('该账号已被'.$info['username'].'绑定','',1);  
			 }
                    
			$result=$this->onlineMemberUpdate(['openid'=>$data['openid']],['bind'=>1,'mid'=>$info['id']]);
			 
			if ($result!==false)
			{
				
			   $userInfo = $this->getMemberInfo(['a.openid'=>$data['openid']],'a.*,b.username as m_username,b.realname as m_realname');
				
			   return setRetrunData('绑定成功',$userInfo);  
			}
			else
			{
			  return setRetrunData('发送异常，请联系管理员','',1);  
			}
			 
		}else{
			return setRetrunData('账户不存在','',1);
		}
	}
	
	/**
     * 解除绑定
     */
	
	public function setRoleUser($data=[]){
		
		$info = $this->getUserInfo(['id'=>$data['id']],'*');
		
		if(empty($info)){
			return setRetrunData('账户不存在','',1);
		}
		
		$result=$this->onlineMemberUpdate(['id'=>$data['id']],['bind'=>0,'mid'=>'']);
		
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	public function memberVerify($data=[]){
		
		$randomInfo = $this->logicOnlineRandom->randomInfo(['a.uid'=>$data['id'],'state'=>0],'a.*');
		
		if($data['verify']==$randomInfo['random']){
			$edit_data = array(
				'realname'=>$data['name'],
				'mobile'=>$data['tel'],
				'verify'=>1
			);
			$result = $this->modelOnlineMember->updateInfo(['id'=>$data['id']],$edit_data);
			$this->modelOnlineRandom->updateInfo(['id'=>$randomInfo['id']],['state'=>1]);
			$info = $this->getMemberInfo(['a.id'=>$data['id']],'a.*,b.username as m_username,b.realname as m_realname');
			return $result ? setRetrunData(RESULT_SUCCESS,$info):setRetrunData(RESULT_ERROR,'',1);
		}else{
			return setRetrunData('验证码错误','',1);
		}
		
		
	}
	
	/**
     * 获取会员单数据
     */
	public function onlineMemberValues($where=[],$field=true){
		
		return $this->modelOnlineMember->getValue($where,$field);
	}
	
}
