<?php
namespace app\lib\exception;


/**
 * Class ParameterException
 */
class ParameterException extends BaseException
{
    public $code = 200;
    public $errorCode = 10000;
    public $msg = "invalid parameters";
}