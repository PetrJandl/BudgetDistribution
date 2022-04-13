<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Allowed extends Model
{
    public static function adminIP($ip)
    {
        if (
            $ip == "::1" //localhost ipv6 - jandl
            or
            $ip == "127.0.0.1" //localhost - jandl
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
    public static function shoping($showStopDate = false)
    {
        //$start = Carbon::createMidnightDate(2021, 8, 15, 'Europe/Prague');

        $dateStopShopping = DB::select("SELECT DATE_FORMAT(value, '%Y-%m-%d') AS value FROM `settings` WHERE `pointer` = 'dateStopShopping'");
        //print_r($dateStopShopping[0]->value);
        if (isset($dateStopShopping[0])) {
            $dS = explode("-", trim($dateStopShopping[0]->value));
        } else {
            $dS = array(0 => "0001", 1 => "01", 2 => "01");
            DB::insert('insert into settings (pointer, value) values (?, ?)', ['dateStartShopping', '2020-01-02']);
            DB::insert('insert into settings (pointer, value) values (?, ?)', ['dateStopShopping', '2020-01-01']);
        }
        //print_r($dS);
        //die();

        $stop = Carbon::create($dS[0], $dS[1], $dS[2], 23, 59, 59, 'Europe/Prague');
        if ($showStopDate) {
            return trim($dateStopShopping[0]->value);
        } else {
            if ($stop->diffInMinutes(Carbon::now('Europe/Prague'), false) < 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    public static function shopingDates($pointer = "dateStartShopping")
    {
        $query = \DB::select("SELECT DATE_FORMAT(value, '%Y-%m-%d') AS value FROM `settings` WHERE `pointer` = 'dateStartShopping'");
        //print_r($query);
        return trim($query[0]->value);
    }
}
