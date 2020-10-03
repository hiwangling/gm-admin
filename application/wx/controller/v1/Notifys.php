<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\wx\controller\v1;

use think\Controller;
use app\wx\controller\v1\Notify;

/**
 * Description of Notifys
 *
 * @author Administrator
 */
class Notifys extends Controller{
    //put your code here
     public function  notify()
     {
         $notify= new Notify();
         $config = new \WxPayConfig();
         $notify->Handle($config);
     }
}
