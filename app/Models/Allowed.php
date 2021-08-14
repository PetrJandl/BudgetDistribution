<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Allowed extends Model
{
    public static function adminIP($ip)
    {
        if (
            $ip == "::1" //localhost ipv6 - jandl
            or
            $ip == "192.168.133.80" //jandl pc work
            or
            $ip == "192.168.20.250" //jandl mobile home
            or
            $ip == "192.168.20.250" //jandl pc home
            or
            $ip == "192.168.99.218" //jandl mobile work
            or
            $ip == "192.168.132.9" // cizinska
            or
            $ip == "192.168.132.36" // rychtrmocova
            or
            $ip == "192.168.132.43" // hubertova
        ) {
            return true;
        } else {
            return false;
        }
    }
}
