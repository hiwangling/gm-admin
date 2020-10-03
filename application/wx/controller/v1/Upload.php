<?php
namespace app\wx\controller\v1;

use app\wx\controller\BaseController;

class Upload  extends BaseController
{
    public function upload(){
        $paths = uploadfiles('cemetery');
        return setRetrunData('success', $paths);
    }
}