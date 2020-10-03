<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\wx\controller\v1;
use think\Db;
use think\Loader;

 Loader::import("wxpay.WxPayJsApiPay",VENDOR_PATH,".php");
/**
 * Description of Notify
 *
 * @author Administrator
 */
class Notify extends \WxPayNotify {
    public function NotifyProcess($objData, $config,&$msg)
    {
       
        $objData = json_decode($objData->GetValues(),true);
		
		file_put_contents('logs.txt', print_r($objData, true),FILE_APPEND);
        /*if($objData["return_code"]=="SUCCESS")
         {
             $numbers= $objData["out_trade_no"];
             $where2["numbers"] = $numbers;
             $orderinfo = Db::name('order')->where($where2)->find();
             if(!empty($orderinfo))
             {
                $where['id'] = $orderinfo["id"];
                $where1['order_id'] = $orderinfo["id"];
                $res = Db::name('order')->where($where)->update(['order_status'=>2]);
                $res1 = Db::name('order_detail')->where($where1)->update(['pay_status'=>2]);
                $where3["branch"]=5;
                $where3["status"]=1;
                $memberlist = Db::name('manager')->where($where3)->select();
                $msg="您有一项微信购买的点灯服务待开票！";
                
                //增加一个消息推送
                if($res>0 && $res1>0)
                {
                    if(!empty($memberlist))
                    {
                        foreach($memberlist as $k=>$v)
                        {
                            if(!empty($v['roleopenid']))
                            {
                                //send_weixin_msg($v['roleopenid'],"",$msg);
                            }
                        }
                    }
                    return TRUE;
                }
                else
                {
                    return FALSE;
                }
             }
         }
         else
         {
             return FALSE;
         }*/
    }
    
}
