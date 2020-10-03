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

namespace app\api\controller\v1;
use app\api\controller\BaseController;

/**
 * 配置控制器
 */
class Config extends BaseController
{
    
    /**
     * 系统设置
     */
    public function setting()
    {
        
        IS_POST && $this->jump($this->logicConfig->settingSave($this->param));
        
        $where = empty($this->param['group']) ? ['group' => 1] : ['group' => $this->param['group']];
        
        $this->getConfigCommonData();
        
        $this->assign('list', $this->logicConfig->getConfigList($where, true, 'sort', false));
        
        $this->assign('group', $where['group']);
        
        return  $this->fetch('setting');
    }

    /**
     * 配置列表
     */
    public function configList()
    {
        $data = $this->logicConfig->getConfigListFilter($this->param);
		
		$config_group_list = parse_config_array('config_group_list');
		
		$config_type_list = parse_config_array('config_type_list');
		
		
		
		return setRetrunData('success', $data['list']);
    }
    
    /**
     * 获取通用数据
     */
    public function getConfigCommonData()
    {
		
		$data['config_group_list'] = parse_config_array('config_group_list');
		
		$data['config_type_list'] = parse_config_array('config_type_list');
		
		return setRetrunData('success', $data);

    }
    
    /**
     * 配置添加
     */
    public function configAdd()
    {
        
       return $this->logicConfig->configAdd($this->param);

    }
    
    /**
     * 配置编辑
     */
    public function configEdit()
    {
        
        return $this->logicConfig->configEdit($this->param);
        
        //$info = $this->logicConfig->getConfigInfo(['id' => $this->param['id']]);
        
    }
	
	/**
     * 配置添加
     */
    public function configDel($id=0)
    {
        
       return $this->logicConfig->configDel(['id'=>$id]);

    }
    
    /**
     * 数据状态设置
     */
    public function setStatus()
    {
        
        $this->jump($this->logicAdminBase->setStatus('Config', $this->param));
    }
    
    /**
     * 排序
     */
    public function setSort()
    {
        
        $this->jump($this->logicAdminBase->setSort('Config', $this->param));
    }
}
