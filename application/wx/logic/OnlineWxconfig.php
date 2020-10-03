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

class OnlineWxconfig extends BaseLogic
{
    
	/**
     * 获取基础配置信息
     */
    public function configInfo($where,$field = true){
		
		$this->modelOnlineWxconfig->alias('a');
		
        $join = [
			
        ];
		
		return $this->modelOnlineWxconfig->getInfo($where,$field,$join);
		
	}

}
