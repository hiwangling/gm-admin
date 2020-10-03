<?php
namespace app\lib\exception;


class ManagerException extends BaseException
{
    public $code = 404;
    public $msg = '用户不存在';
    public $errorCode = 60000;
}