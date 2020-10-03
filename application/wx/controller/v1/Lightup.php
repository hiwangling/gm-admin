<?php

namespace app\weixin\controller\v1;
use app\weixin\model\Order as OrderModel;
use app\weixin\model\OrderDetail as OrderDetailModel;
use think\Db;
use think\Controller;

class Lightup extends Controller{
   
    /**
     * 根据使用人名称查询墓穴信息
     * @return type
     */
   public function cemeteryList()
    {
        $name = input('name');

        $where = [];
        if ($name) {
            $where['e.vcname'] = $name;
        }
        $where['a.status'] = 1;
        $where['a.delete_time'] =NULL;
        $cemeterys = Db::name('cemetery')->alias('a')
                    ->field('a.id,b.type_name as garden_name,c.type_name as area_name,a.cname,a.muzhu_name,e.vcname,e.link_name,e.bury_status')
                    ->join('ky_cemetery_classify b','b.id=a.garden_id','left')
                    ->join('ky_cemetery_classify c','c.id=a.classify_id','left')
                    ->join('(select id,cid,vcname,link_name,bury,bury_status from ky_bury where `status`=1 and delete_time is NULL) e','e.cid=a.id','left')
                    ->where($where)->select();
        if (empty($cemeterys)) {
            return setRetrunData('success', []);
        }
        
        return setRetrunData('success', $cemeterys);
    }
    
    
    /**
     * 新增点灯
     */
    public function lightupAdd()
    {
        $data =input('post.');
        if ( empty($data['cid']) || empty($data['buyname']) || empty($data['phone']) 
               || empty($data['real_price']) || empty($data['openid'])) {
            return setRetrunData('所有参数不能为空！', '', 1);
        }
        vendor('wxpay/WxPayJsApiPay');
        $tools = new \JsApiPay();
        $numbers= $tools->GetMCHID().time().rand(1111,9999);
        $data["numbers"]=$numbers;
        
        $year = date('Y');
        $result =false;
        $order_datas = OrderModel::all(['cid' => $data['cid'], 'financetype' => 7,'order_status'=>2,'status' => 1,'lamp_nd' => $year,'delete_time' => NULL]);
        if (!empty($order_datas))
        {
            return setRetrunData('本年度已经有点灯记录，一年只能点灯一次', '', 1);
        }
        else
        {
            $order_data = [
                'order_no' => getOrderNo(),
                'cid' => $data['cid'],
                'buyer_name' => $data['buyname'],
                'phone' => $data['phone'],
                //'card_no' => $data['card_no'],
                'order_begin' => date('Y-m-d',time()),
                'order_status' =>1,
                'financetype' => 7,
                'sellname' => $data['openid'],
                //实收金额
                'sum_price' => $data['real_price'],
                'create_time' => time(),
                'lamp_nd' => $year,
                'numbers' => $numbers
                //'vcnote'=> $data['vcnote'] ? $data['vcnote'] : ''
            ];
            $order = OrderModel::create($order_data);
            if (!$order)
            {
                $result =false;
            }
            else
            {
                //$cemetery = CemeteryModel::get($buy['cid']);
                $order_data_detail = [
                    'order_id' => $order->id,
                    'financetype' => 7,
                    'payer_name' => $data['buyname'],
                    'pay_phone' => $data['phone'],
                    //单价
                    'unit_price' => $data['real_price'],
                    //应付金额
                    'sell_price' => $data['real_price'],
                    //实收金额
                    'real_price' => $data['real_price'],
                    'sell_title' => '点灯服务',
                    'pay_type' => 1,
                    'pay_status' => 1,
                    //优惠价格
                    //'offer_price' => $cemetery->sellprice - $buy['real_price'],
                    'offertype' => 3,
                    'operate_name' => $data['openid'],
                    'create_time' => time()
                ];
                $order_detail = OrderDetailModel::create($order_data_detail);
                if (!$order_detail)
                {
                    $result =false;
                }
                else
                {
                    $result=true;
                }
            }
        }
        if($result)
        {
            //return setRetrunData('操作成功', '', 0);
            $ss = [ 'openid'=> $data['openid'],'order_id'=>$order->id];
            
            return $this->weixinpay($ss);
        }
        else
        {
            return setRetrunData('操作失败', '', 1);
        }
        
    }
    
    
    /**
     * 微信支付
     */
    public function weixinpay($data)
    {
        vendor('wxpay/WxPayJsApiPay');
        $tools = new \JsApiPay();
        
        $openId = $data['openid'];
        
        if(empty($openId))
        {
            return setRetrunData('参数有误', '', 1); 
        }
        
        $orders = OrderModel::get(['id' => $data['order_id'], 'financetype' => 7,'status' => 1]);
        
        if(!empty($orders))
        {
            $trade_no=$orders->numbers;
            $price = intval($orders->sum_price);
        }
        else
        {
            $trade_no="";
            $price=0;
        }
        
        $notify ="http://admin.ycxygm.com/weixin/v1/notifys/notify";
        //$trade_no =$tools->GetMCHID().date("YmdHis");
        // $notify ="http://admin.ycxygm.com/weixin/v1/lightup/notify";
        //②、统一下单
        $input = new \WxPayUnifiedOrder();
        $input->SetBody("点灯支付");
        $input->SetAttach("test");
        $input->SetOut_trade_no($trade_no);
        $input->SetTotal_fee("1");
        //$input->SetTotal_fee($price*100);
        $input->SetTime_start(date("YmdHis"));
        $input->SetTime_expire(date("YmdHis", time() + 600));
        $input->SetGoods_tag("test");
        $input->SetNotify_url($notify);
        $input->SetTrade_type("JSAPI");
        $input->SetOpenid($openId);
        $config = new \WxPayConfig();
        //var_dump($config);
        $order = \WxPayApi::unifiedOrder($config, $input);
        //echo '<font color="#f00"><b>统一下单支付单信息</b></font><br/>';
        //printf_info($order);
        
        $jsApiParameters = $tools->GetJsApiParameters($order);
        $list['data'] =json_decode($jsApiParameters);
        $list['trade_no'] =$trade_no;
        return json_encode($list);
        //var_dump(json_encode(array($order)));
        //获取共享收货地址js函数参数
        //$editAddress = $tools->GetEditAddressParameters();
        //$this->assign('jsApiParameters',$jsApiParameters);
        //$this->assign('editAddress',$editAddress);
        //return $jsApiParameters;

    }
    
    /**
     * 微信支付回调
     */
    public function Notify()
    {
        $trade_no = input("trade_no");
        if(!empty($trade_no))
         {
             $where2["numbers"] = $trade_no;
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
                    return setRetrunData('成功', $trade_no, 0); 
                }
                else
                {
                    return setRetrunData('参数有错误', '', 1); 
                }
             }
         }
         else
         {
             return setRetrunData('失败', $trade_no, 1); 
         }
    }
    
}
