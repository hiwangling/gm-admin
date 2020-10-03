<?php

namespace app\lib\exception;

use think\exception\Handle;
use think\Log;
use think\Request;
use Exception;


class ExceptionHandler extends Handle
{
    private $code;
    private $msg;
    private $errorCode;


    public function render(Exception $e)
    {
        if ($e instanceof BaseException)
        {
            $this->code = $e->code;
            $this->msg = $e->msg;
            $this->errorCode = $e->errorCode;
        }
        else{

            if(config('app_debug')){
                return parent::render($e);
            }

            $this->code = 500;
            $this->msg = 'sorry，we make a mistake. (^o^)Y';
            $this->errorCode = 999;
            $this->recordErrorLog($e);
        }

        $request = Request::instance();
        $result = [
            'msg'  => $this->msg,
            'code' => $this->errorCode,
            'request_url' => $request = $request->baseUrl()
        ];
        return json($result, $this->code);
    }

    private function recordErrorLog(Exception $e)
    {
        Log::init([
            'type'  =>  'File',
            'path'  =>  LOG_PATH,
            'level' => ['error']
        ]);
//        Log::record($e->getTraceAsString());
        Log::record($e->getMessage(),'error');
    }
}