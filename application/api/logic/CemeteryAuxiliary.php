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
 * 
 */
class CemeteryAuxiliary extends BaseLogic
{

	/**
     * 墓穴分表添加
	 * @version v2;@editor Divider
     */
	public function auxiliaryAdd($data=[]){
		
		$auxiliary = $this->getAuxiliaryData($data);
		
		$result = $this->modelCemeteryAuxiliary->addInfo($auxiliary);
		
		return $result ? $result:false;
		
	}
	
	/**
     * 墓穴分表编辑
	 * @version v2;@editor Divider
     */
	public function auxiliaryEdit($data=[]){
		
		$auxiliary = $this->getAuxiliaryData($data);
		
		$result = $this->auxiliaryUpdate(['cid'=>$data['cid'],'status'=>1],$auxiliary);
		
		return $result ? true:false;
		
	}
	
	/**
     * 墓穴分表修改
	 * @version v2;@editor Divider
     */
	public function auxiliaryUpdate($where=[],$data=[]){
		
		$result = $this->modelCemeteryAuxiliary->updateInfo($where,$data);
		
		return $result;
	}
	
	/**
     * 墓穴分表数据统一处理
	 * @version v2;@editor Divider
     */
	public function getAuxiliaryData($data=[]){
		
		$auxiliary = array(
			'cid'=>$data['cid'],
			'begin_date'=>!empty($data['order_begin'])?$data['order_begin']:'',
			'end_data'=>!empty($data['order_end'])?$data['order_end']:'',
		);
		
		return $auxiliary;
	}
	
	/**
     * 墓穴分表删除
	 * @version v2;@editor Divider
     */
    public function auxiliaryDel($where)
    {
		 $result = $this->modelCemeteryAuxiliary->deleteInfo($where);
		
		 return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 墓穴分表详情
	 * @version v2;@editor Divider
     */
	public function auxiliaryInfo($where,$field = true){
		
		return $this->modelCemeteryAuxiliary->getInfo($where,$field);
	}

}
