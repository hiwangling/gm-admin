<?php

function setRetrunData($msg, $data = '', $errorCode = 0)
{
    $request = \think\Request::instance();
    $result = [
        'msg' => $msg,
        'code' => $errorCode,
        'request_url' => $request->baseUrl(),
        'data' => $data
    ];
    return $result;
}