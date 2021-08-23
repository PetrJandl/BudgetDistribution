<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Allowed as ModelsAllowed;

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

Route::middleware('api')->get('/items.json', function () {
    if (request()->ajax()) {
        return \DB::table('items')->where('visible', '=', 1)->get();
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
            ModelsAllowed::adminIP($request->ip())
        ) {
            return json_encode("ok");
        } else {
            return "NOPE";
        }
    } else {
        return "NOPE";
    }
});

/* Administration links */
// orders.json 
Route::middleware('api')->get('/orders.json', function (Request $request) {
    if (request()->ajax() &&  ModelsAllowed::adminIP($request->ip())) {
        return \DB::select('
        SELECT
        orders.idorder AS idorder,
        orders.created_at,
        librarys.libName AS knihovna,
        SUM(IF(items.item_type_idtype=1,1,0)) AS knih,
        SUM(IF(items.item_type_idtype=2,1,0)) AS pomucek,
        /*
        SUM(IF(items.item_type_idtype=1,items.price,0)) AS knih_kc,
        SUM(IF(items.item_type_idtype=2,items.price,0)) AS pomucek_kc,
        count(*) AS celkem,
        */
        sum(items.price) AS celkem_kc
        FROM `orders` 
        JOIN library_has_order ON orders.idorder=library_has_order.order_idorder
        JOIN librarys ON library_has_order.library_idlibrary=librarys.idlibrary
        JOIN order_has_item ON orders.idorder=order_has_item.order_idorder
        JOIN items ON order_has_item.item_iditem=items.iditem
        GROUP BY idorder
        ORDER BY orders.idorder, items.item_type_idtype
        ');
    } else {
        return "NOPE";
    }
});

// DELETE order by ID
Route::middleware('api')->get('/orderDelete/{id}', function (Request $request, $id) {
    if (request()->ajax() &&  ModelsAllowed::adminIP($request->ip())) {
        DB::transaction(function () use ($id) {
            DB::delete('delete from order_has_item where 	order_idorder=' . $id);
            DB::delete('delete from library_has_order where order_idorder=' . $id);
            DB::delete('delete from orders where idorder=' . $id);
        });
    } else {
        return "NOPE";
    }
});

// sumaryitems.json 
Route::middleware('api')->get('/sumaryitems.json', function (Request $request) {
    if (request()->ajax() &&  ModelsAllowed::adminIP($request->ip())) {
        return \DB::select('
        SELECT
        items.*,
        count(*) AS pieces,
        SUM(items.price) AS priceSum
        FROM `items` 
        JOIN order_has_item ON order_has_item.item_iditem=items.iditem
        GROUP BY  items.iditem
        ');
    } else {
        return "NOPE";
    }
});

// itemsinorders.json
Route::middleware('api')->get('/itemsinorders.json', function (Request $request) {
    if (request()->ajax() &&  ModelsAllowed::adminIP($request->ip())) {
        return \DB::select('
        SELECT
        orders.idorder,
        items.iditem,
        items.item_type_idtype,
        items.isbn,
        items.item_name,
        items.item_autor,
        items.price
        FROM `orders` 
        JOIN order_has_item ON orders.idorder=order_has_item.order_idorder
        JOIN items ON order_has_item.item_iditem=items.iditem
        ');
    } else {
        return "NOPE";
    }
});
