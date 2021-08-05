<?php

namespace App\Http\Controllers;

use App\Models\AdminIP as ModelsAdminIP;
use Illuminate\Http\Request;

class topSecret extends Controller
{
    public function index(Request $request)
    {
        if (ModelsAdminIP::allow($request->ip())) {
            return view('admin');
        } else {
            return "NOPE";
        }
    }
}
