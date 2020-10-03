<?php


namespace app\api\model;


class Branch extends BaseModel
{
    public function manager(){
        return $this->hasMany('Manager','branch','id');
    }
}