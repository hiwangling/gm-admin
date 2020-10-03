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
use app\api\controller\BaseController as BaseController;

/**
 * 行为日志逻辑
 */
class Log extends BaseLogic
{
    
    /**
     * 获取日志列表
     */
    public function getLogList()
    {
        
        $sub_member_ids = $this->logicMember->getSubMemberIds(MEMBER_ID);
        
        $where = [];
        
        $sub_member_ids[] = MEMBER_ID;
        
        !IS_ROOT && $where['member_id'] = ['in', $sub_member_ids];
        
        return $this->modelActionLog->getList($where, true, 'create_time desc');
    }
  
    /**
     * 日志删除
     */
    public function logDel($where = [])
    {
        
        return $this->modelActionLog->deleteInfo($where) ? [RESULT_SUCCESS, '日志删除成功'] : [RESULT_ERROR, $this->modelActionLog->getError()];
    }
    
    /**
     * 日志添加
     */
    public function logAdd($name = '', $describe = '',$manager='',$logtype=1,$oid=0)
    {
       
		if(!empty($manager)){
			$member_info =$manager; 
		}else{
			$member_info = BaseController::getManagerValue('');//session('member_info');
		}

        $request = request();
        
        $data['member_id'] = $member_info['id'];
        $data['username']  = $member_info['username'];
        $data['ip']        = $request->ip();
        $data['url']       = $request->url();
        $data['status']    = DATA_NORMAL;
        $data['name']      = $name;
        $data['describe']  = $describe;
	$data[TIME_CT_NAME]  = TIME_NOW;
       $data['logtype']      = $logtype;
        $data['oid']  = $oid;
        $url = url('logList');
        
        return $this->modelActionLog->addInfo($data) ? [RESULT_SUCCESS, '日志添加成功', $url] : [RESULT_ERROR, $this->modelActionLog->getError()];
    }

}
