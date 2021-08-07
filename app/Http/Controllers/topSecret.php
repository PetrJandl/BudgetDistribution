<?php

namespace App\Http\Controllers;

use App\Models\Allowed as ModelsAllowed;
use Illuminate\Http\Request;

class topSecret extends Controller
{
    public function index(Request $request)
    {
        if (ModelsAllowed::adminIP($request->ip())) {
            return view('admin/admin');
        } else {
            return "NOPE";
        }
    }
}
