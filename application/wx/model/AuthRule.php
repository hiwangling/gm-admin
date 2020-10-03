<?php
namespace app\wx\model;


class AuthRule extends BaseModel
{
    protected $hidden = ['pid','status','ismenu'];
    //取导航菜单
    public static function getNavMenu($ids=''){
        $where = [];
        if($ids)
        $where['id'] = array('in', $ids);
        $where['status'] = 1;
        $where['ismenu'] = 1;

        //取导航菜单
        $menus = self::where($where)->where('pid','=',0)->order('ordernum desc')->select();
        if($menus){
            foreach ($menus as $k=>$v){
                $menus[$k]['son'] = self::where($where)->where('pid','=',$v['id'])->order('ordernum desc')->select();
            }
        }
        return $menus;
    }

    public static function getAuthRules(){
        $where = [];
        $where['status'] = 1;

        $menus = self::field('code,webui_url',true)->where($where)->where('pid','=',0)->order('ordernum desc')->select();

        if($menus){
            $menus = collection($menus)->toArray();
            foreach ($menus as $k=>$v){
                 $menus[$k]['children'] = self::field('code,webui_url',true)->where($where)->where('pid','=',$v['id'])->order('ordernum desc')->select();

                  unset($menus[$k]['url']);

                 if($menus[$k]['children']){
                     $menus[$k]['children'] = collection($menus[$k]['children'])->toArray();

                    foreach ($menus[$k]['children'] as $k2=>$v2){
                        $menus[$k]['children'][$k2]['children'] = self::field('code,webui_url',true)->where($where)->where('pid','=',$v2['id'])->order('ordernum desc')->select();

                        //$menus[$k]['children'][$k2]['ids'] = substr(str_replace('/',':',$menus[$k]['children'][$k2]['url']),1);
                        //$menus[$k]['children'][$k2]['url'] =   $menus[$k]['children'][$k2]['type'].' '.$menus[$k]['children'][$k2]['url'];
                         unset($menus[$k]['children'][$k2]['url']);

                        if($menus[$k]['children'][$k2]['children']){
                            $menus[$k]['children'][$k2]['children'] = collection($menus[$k]['children'][$k2]['children'])->toArray();
                            foreach ($menus[$k]['children'][$k2]['children'] as $k3=>$v3){
                                $menus[$k]['children'][$k2]['children'][$k3]['ids'] = substr(str_replace('/',':',$menus[$k]['children'][$k2]['children'][$k3]['url']),1);
                                $menus[$k]['children'][$k2]['children'][$k3]['url'] =  $menus[$k]['children'][$k2]['children'][$k3]['type'].' '.$menus[$k]['children'][$k2]['children'][$k3]['url'];
                            }
                        }
                    }
                }
            }
        }
        return $menus;
    }

    public static function getAuthRulesById($ids=''){
        $where = [];
        if($ids)
            $where['id'] = array('in', $ids);
        $where['status'] = 1;
        $menus = self::field('url')->where($where)->where('pid','<>',0)->order('ordernum desc')->select();
        $datas = [];
        if($menus){
            foreach ($menus as $k=>$v){
                $datas[] =  substr(str_replace('/',':',$v['url']),1);
            }
        }
        return $datas;
    }

}