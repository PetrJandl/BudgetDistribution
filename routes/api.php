<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\AdminIP as ModelsAdminIP;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::middleware('api')->get('/data.json', function () {
    if (request()->ajax()) {
        return \DB::table('items')->get();
    } else {
        return "NOPE";
    }
});

Route::middleware('api')->get('/librarys.json', function () {
    if (request()->ajax()) {
        return \DB::table('librarys')
            ->leftJoin('library_has_order', 'librarys.idlibrary', '=', 'library_has_order.library_idlibrary')
            ->select('librarys.*')
            ->whereNull('library_has_order.order_idorder')
            ->orderby('librarys.libCity')
            ->get();
    } else {
        return "NOPE";
    }
    //return view('welcome');
});

Route::middleware('api')->get('/allowAdmin.json', function (Request $request) {
    if (request()->ajax()) {
        if (
            ModelsAdminIP::allow($request->ip())
        ) {
            return json_encode("ok");
        } else {
            return "NOPE";
        }
    } else {
        return "NOPE";
    }
});
