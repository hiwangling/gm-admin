<?php

namespace app\dp\controller\v1;

use think\Db;
use app\dp\controller\BaseController;

/**
 * 前端首页控制器
 */
class Index extends BaseController
{
    //首页天气预报方法
    public function getWeather_Ajax(){
            $url = "http://t.weather.sojson.com/api/weather/city/101200909";
            $data = file_get_contents($url);
            $list = array(
                "code" => 0,
                "data" => json_decode($data),
            );
            return json_encode($list);
    }
  
    // 首页
    public function index()
    {
        return $this->fetch('index');
    }
    
    //墓位展示
     public function cemeteryAreaList()
    {
        $where = [];

        $y_id = !empty($this->param['y_id'])?$this->param['y_id']:null;

        if (!empty($this->param['q_id'])) {
            $where['id'] = $this->param['q_id'];
        }
        if (!empty($y_id)) {
            $where['parent_id'] = $this->param['y_id'];
        }
        else
        {
            $where['parent_id'] = array('neq',0);
        }
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

        $list = $this->logicIndex->getCemeteryClassifyList($where,true,'id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
    
    /**
     * 墓穴查询列表
     * @return type
     */
    public function cemeteryList()
    {
        $where = $this->logicIndex->getWhere($this->param);
        $y_id = !empty($this->param['y_id'])?$this->param['y_id']:null;
        
        if (!empty($this->param['q_id'])) {
            $where['a.classify_id'] = $this->param['q_id'];
        }
        if (!empty($y_id)) {
            $where['a.garden_id'] = $this->param['y_id'];
        }
        if (!empty($this->param['type_id'])) {
            $where['a.type_id'] = $this->param['type_id'];
        }
        if (!empty($this->param['style_id'])) {
            $where['a.style_id'] = $this->param['style_id'];
        }
        if (!empty($this->param['usestatus'])) {
            $where['a.usestatus'] = $this->param['usestatus'];
        }
        
        $limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
        
        $list = $this->logicIndex->getCemeteryList($where,'a.*,b.type_name classifyname,c.type_name typename,d.type_name stylename,e.type_name gardenname','a.garden_id,a.classify_id,a.ix,a.iy,a.id asc',$limit);

        return setRetrunData('success', $list->toArray());
    }
    
    
    /**
     * 获取销售中数据
     * @param type $q_id
     * @return type
     */
    public function tongJiXiaoByQu($q_id = 0)
    {
        if ($q_id) {
            $res = [
                1 => $this->logicIndex->xiaoshouCount($q_id,1),
                2 => $this->logicIndex->xiaoshouCount($q_id,2),
                3 => $this->logicIndex->xiaoshouCount($q_id,3),
                4 => $this->logicIndex->xiaoshouCount($q_id,4),
                5 => $this->logicIndex->xiaoshouCount($q_id,5),
                6 => $this->logicIndex->xiaoshouCount($q_id,6),
                7 => $this->logicIndex->getBuryCount()
            ];
        } else {
            $res = [
                1 => $this->logicIndex->xiaoshouCount(null,1),
                2 => $this->logicIndex->xiaoshouCount(null,2),
                3 => $this->logicIndex->xiaoshouCount(null,3),
                4 => $this->logicIndex->xiaoshouCount(null,4),
                5 => $this->logicIndex->xiaoshouCount(null,5),
                6 => $this->logicIndex->xiaoshouCount(null,6),
                7 => $this->logicIndex->getBuryCount()
            ];
        }
        return setRetrunData('success', $res);
    }
    
    /**
     * 陵园风景
     * @return type
     */
    public function Lyfj()
    {
        $list = $this->logicIndex->getDplyfjtpList(['type' => 1],'*','id asc',false);
        
        return setRetrunData('success', $list);
    }
    
    /**
     * 墓型展示
     * @return type
     */
    public function Mxzs()
    {
        $list = $this->logicIndex->getDplyfjtpList(['type' => 2],'*','id asc',false);
        
        return setRetrunData('success', $list);
    }
        
     /**
     * 陵墓简介 index/details?id=41&cid=9
     * @return type
     */
    public function Info()
    {
        $list = $this->logicIndex->getDplyfjtpList($where =[],'*','id asc',false);
        return setRetrunData('success', $list);
    }
    
    /**
     * 墓位查询页面
     * @return type
     */
    public function Search()
    {        
        return $this->fetch('index-search');
    }
    
    //通过人姓查找幕穴和排位
    public function searchCemeteryByName()
    {
        $name = input('name');
        $buryList =  Array();
        if (isset($name)) {
            $buryList = Db::query("select a.id,b.type_name as garden_name,c.type_name as area_name,a.cname,
                a.muzhu_name,d.link_name from ky_cemetery a left join ky_cemetery_classify b on b.id = a.garden_id 
                left join ky_cemetery_classify c on c.id = a.classify_id
                left join ky_linkman d on d.cid = a.id where a.`status`=1 
                and (a.muzhu_name like '%".$name."%'  or d.link_name like '".$name."%') 
                order by a.id asc");
        }
        return setRetrunData('success', $buryList);
    }

    //通过购买人和逝者查询骨灰
    public function searchDustByName($name = '')
    {
        $buryList =  Array();
        if (isset($name)) {
            $buryList = DB::table("ky_save s")->field("s.buyer,s.phone,s.address,s.vcname,s.saveenddate,s.saveaddress,s.vcnote,"
                    . "FROM_UNIXTIME(saveenddate, '%Y年%m月%d日') as saveenddate")->whereLike("s.vcname|s.buyer", "%".trim($name)."%")->select();
        }
        return json_encode($buryList, 320);
    }

}
