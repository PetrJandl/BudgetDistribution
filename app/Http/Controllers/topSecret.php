<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;

class topSecret extends Controller
{
    public function index(Request $request)
    {
        $ip = $request->ip();

        if (!($ip == "::1" and
            $ip == "192.168.133.80")) {
            return view('admin');
        } else {
            return "NOPE";
        }
    }
}
