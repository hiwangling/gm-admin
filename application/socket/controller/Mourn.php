<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\socket\controller;
use app\socket\controller\IndexBase;
/**
 * Description of Mourn
 *
 * @author Administrator
 */
class Mourn extends IndexBase {
     function index() {
        
       $list["Mourn"]=getMournList_socket();
       $list["cremation"]=getcremation_socket();
       $result = array("code" => 0, "msg" => "", "data" => $list);
        exit(json_encode($result));
    }
  
   /* function test() {
        $list =getColdList_socket(); //$this->logicCold->getColdList([], "a.title,a.state,o.name,s.startime,s.endtime", 'a.create_time asc', 100);
        $info= sendmessae("1113",json_encode($list));
        var_dump($info);
        exit;
    }*/
}
