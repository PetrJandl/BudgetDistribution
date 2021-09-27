<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\eshopData;
use App\Http\Controllers\topSecret;
use App\Models\Allowed as ModelsAllowed;

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


// all sub pages /eshop/ is vue
if (ModelsAllowed::shoping()) {
  // send form make order
  Route::post('/eshopNewOrder', [eshopData::class, 'send']);
  // open shop subpage
  Route::get('/eshop/{any?}', function () {
    return view('eshop/eshop');
  })->where('any', '.*');
} else {
  Route::redirect('/eshop/knihy/', '/eshop/');
  Route::redirect('/eshop/pomucky/', '/eshop/');
  Route::redirect('/eshop/nakupniKosik/', '/eshop/');
  Route::redirect('/eshop/objednavka/', '/eshop/');
  Route::redirect('/eshop/rekapitulace/', '/eshop/');
  Route::get('/eshop/', function () {
    return view('eshop/eshop');
  });
}

/* Administration links */
Route::get('/admin/vsechyObjednavky', [topSecret::class, 'printAllOrders']);
Route::get('/admin/vsechyAdresy/', [topSecret::class, 'printAllAddress']);
Route::get('/admin/vsechyAdresy/{showLogo}', ['as' => 'vsechyAdresy', topSecret::class, 'printAllAddress']);
// all sub pages /admin/ is vue
Route::get('/admin/zobrazitObjednavku/', [topSecret::class, 'index']);

// all sub pages /admin/ is vue
Route::get('/admin/{any?}', [topSecret::class, 'index']);
