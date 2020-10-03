<?php
namespace app\lib\exception;

class TokenException extends BaseException
{
    public $code = 200;
    public $msg = 'Token已过期或无效Token';
    public $errorCode = 10001;
}