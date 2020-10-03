<?php

namespace app\lib\exception;


class AuthException extends BaseException
{
    public $code = 200;
    public $errorCode = 10006;
    public $msg = "权限不够";
}