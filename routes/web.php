<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\eshopData;
use App\Http\Controllers\topSecret;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// all from root to /eshop
Route::redirect('/', '/eshop/');

// send form make order
Route::post('/eshopNewOrder', [eshopData::class, 'send']);

// all sub pages /eshop/ is vue
Route::get('/eshop/{any?}', function () {
  return view('eshop/eshop');
})->where('any', '.*');

Route::get('/admin/vsechyObjednavky', [topSecret::class, 'showAllOrders']);
// all sub pages /admin/ is vue
Route::get('/admin/zobrazitObjednavku/{num?}', [topSecret::class, 'index']);
// all sub pages /admin/ is vue
Route::get('/admin/{any?}', [topSecret::class, 'index']);
