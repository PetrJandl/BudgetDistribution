<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class AdminIP extends Model
{
    public static function allow($ip)
    {
        if ($ip == "::1" or $ip == "192.168.133.80") {
            return true;
        } else {
            return false;
        }
    }
}
