<?php
namespace app\wx\controller\v1;

use app\wx\controller\BaseController;

class Cemetery extends BaseController
{
	
  /**
     * 墓穴查询列表
	 * @version v2;@editor Divider
     */
    public function cemeteryList()
    {
        $where = $this->logicCemetery->getWhere($this->param);

        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicCemetery->getCemeteryList($where,'a.*,b.type_name classifyname,c.type_name typename,d.type_name stylename,e.type_name gardenname,f.bury_name','a.garden_id,b.sort,a.ix,a.iy,a.id asc',$limit);
		
		foreach($list as $k=>$v){
			$v['cemetery_name'] = $v['classifyname'].$v['cname'];
		}

        return setRetrunData('success', $list->toArray());
		
    }
    
	/**
     * 墓穴列表梯形结构
	 * @version v2;@editor Divider
     */
	public function cemeteryTraList(){
		
		$where = $this->logicCemetery->getWhere($this->param);
		
		$list = $this->logicCemetery->getCemeteryList($where,'a.*','a.ix,a.iy,a.id asc',false);
		
		$trapezoid = array();
		
		foreach($list as $k=>$v){
			$trapezoid[$v['ix']]['title'] = $v['ix'].'排';
			$trapezoid[$v['ix']]['cemetery'][] = $v;
		}
		
		return setRetrunData('success', array_values($trapezoid));
		
	}
	
	/**
     * 墓穴销售统计
	 * @version v2;@editor Divider
     */
	 public function tongJiXiaoByQu($q_id = 0)
    {
        if ($q_id) {
            $res = [
				0 => $this->logicCemetery->xiaoshouCount($q_id,0),
                1 => $this->logicCemetery->xiaoshouCount($q_id,1),
                2 => $this->logicCemetery->xiaoshouCount($q_id,2),
                3 => $this->logicCemetery->xiaoshouCount($q_id,3),
                4 => $this->logicCemetery->xiaoshouCount($q_id,4),
				5 => $this->logicCemetery->xiaoshouCount($q_id,5),
				6 => $this->logicCemetery->xiaoshouCount($q_id,6),
            ];
        } 
        return setRetrunData('success', $res);
    }

}