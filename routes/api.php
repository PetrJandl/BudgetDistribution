<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    return \DB::table('items')->get();
    //return view('welcome');
});

Route::middleware('api')->get('/librarys.json', function () {
    return \DB::table('librarys')->get();
    //return view('welcome');
});
