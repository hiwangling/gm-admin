<?php
namespace app\api\controller\v1;

use app\api\controller\BaseController;

class Upload  extends BaseController
{
    public function upload(){
        $paths = uploadfiles('cemetery');
        return setRetrunData('success', $paths);
    }
}