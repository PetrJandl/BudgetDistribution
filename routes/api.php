<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Allowed as ModelsAllowed;
use Illuminate\Support\Facades\DB;

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
    if (request()->ajax() && ModelsAllowed::shoping()) {
        return \DB::table('items')->where('visible', '=', 1)->get();
    } else {
        return "NOPE";
    }
});

Route::middleware('api')->get('/librarys.json', function () {
    if (request()->ajax() && ModelsAllowed::shoping()) {
        //vytahne registrovane na bookstartu
        $newLibrarys = \DB::connection('mysql2')->select('SELECT * FROM librarys');
        print_r($newLibrarys);
        //natahnout vlastni seznam (cely vcetne jiz objednanych)
        $uploadedLibrarys = \DB::table('librarys')
            /*->leftJoin('library_has_order', 'librarys.idlibrary', '=', 'library_has_order.library_idlibrary')*/
            ->select('librarys.*')
            /*->whereNull('library_has_order.order_idorder')*/
            ->orderby('librarys.libCity')
            ->get();

        // pokud jsou nejake registrovane na bookstartu
        if (count($newLibrarys) > 0) {
            // projit cely seznam mistnich
            foreach ($uploadedLibrarys as $li => $l) {
                foreach ($newLibrarys as $bsi => $bs) {
                    if ($l->idlibrary == $bs->idlibrary) {
                        /*
                        echo $l->idlibrary . " - " . $x->idlibrary . "
";*/
                        unset($newLibrarys[$bsi]);
                        //continue;
                        break;
                    }
                }
            }
            //print_r($newLibrarys);
            //die();
            $insert = array();
            foreach ($newLibrarys as $i => $l) {
                $insert[$i]['idlibrary'] = $l->idlibrary;
                $insert[$i]['ic'] = $l->ic;
                $insert[$i]['dic'] = $l->dic;
                $insert[$i]['oName'] = $l->oName;
                $insert[$i]['libName'] = $l->libName;
                $insert[$i]['libStreet'] = $l->libStreet;
                $insert[$i]['libCity'] = $l->libCity;
                $insert[$i]['libPSC'] = $l->libPSC;
                $insert[$i]['deliveryName'] = $l->deliveryName;
                $insert[$i]['deliveryStreet'] = $l->deliveryStreet;
                $insert[$i]['deliveryCity'] = $l->deliveryCity;
                $insert[$i]['deliveryPSC'] = $l->deliveryPSC;
                $insert[$i]['libEmail'] = $l->libEmail;
                $insert[$i]['contactPerson'] = $l->contactPerson;
                $insert[$i]['contactPersonEmail'] = $l->contactPersonEmail;
                $insert[$i]['contactPersonTele'] = $l->contactPersonTele;
            }
            //print_r($insert);
            die();
            if (isset($insert[0])) {
                if ($insert[0]['libName'] != "TEST") {
                    //\DB::table('librarys')->insert($insert);
                }
            }
            return \DB::table('librarys')
                ->leftJoin('library_has_order', 'librarys.idlibrary', '=', 'library_has_order.library_idlibrary')
                ->select('librarys.*')
                ->whereNull('library_has_order.order_idorder')
                ->orderby('librarys.libCity')
                ->get();
        } else {
            return "[]";
        }
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

Route::middleware('api')->get('/allowShoping.json', function (Request $request) {
    if (request()->ajax()) {
        if (
            ModelsAllowed::shoping()
        ) {
            return json_encode("ok");
        } else {
            return "NOPE";
        }
    } else {
        return "NOPE";
    }
});

Route::middleware('api')->get('/allowShopingStart.json', function (Request $request) {
    if (request()->ajax()) {
        return json_encode(ModelsAllowed::shopingDates(true));
    }
});

Route::post('/setStartShopDate', function (Request $request) {
    if (ModelsAllowed::adminIP($request->ip())) {
        \DB::table('settings')
            ->select('value')
            ->where('pointer', 'dateStartShopping')
            ->update(array('value' => $request->post()['shopingStartDate']));
        return json_encode(array("message" => "ok"));
    }
});


Route::middleware('api')->get('/allowShopingStop.json', function (Request $request) {
    if (request()->ajax()) {
        return json_encode(ModelsAllowed::shoping(true));
    }
});

Route::post('/setStopShopDate', function (Request $request) {
    if (ModelsAllowed::adminIP($request->ip())) {
        \DB::table('settings')
            ->where('pointer', 'dateStopShopping')
            ->update(array('value' => $request->post()['shopingStopDate']));
        return json_encode(array("message" => "ok"));
        //return json_encode("ok");
    }
});

Route::middleware('api')->get('/loadFromBookstart.json', function (Request $request) {
    $loadFromBookstart = \DB::table('settings')
        ->where('pointer', 'loadFromBookstart')
        ->get();
    return trim($loadFromBookstart[0]->value);
});

Route::post('/setLoadToDate', function (Request $request) {
    if (ModelsAllowed::adminIP($request->ip())) {
        \DB::table('settings')
            ->where('pointer', 'loadFromBookstart')
            ->update(array('value' => $request->post()['loadFromBookstart']));
        return json_encode(array("message" => "ok"));
        //return json_encode("ok");
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
        SUM(IF(items.item_type_idtype=1,order_has_item.item_count,0)) AS knih,
        SUM(IF(items.item_type_idtype=2,order_has_item.item_count,0)) AS pomucek,
        
        SUM(IF(items.item_type_idtype=1,order_has_item.item_count*items.price,0)) AS knih_kc,
        SUM(IF(items.item_type_idtype=2,order_has_item.item_count*items.price,0)) AS pomucek_kc,
        count(*) AS celkem,
        
        sum(items.price * order_has_item.item_count ) AS celkem_kc
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


// DELETE allTables
Route::middleware('api')->get('/deleteAllTables/', function (Request $request) {
    if (request()->ajax() &&  ModelsAllowed::adminIP($request->ip())) {
        DB::transaction(function () {
            DB::table('order_has_item')->delete();
            DB::table('library_has_order')->delete();
            DB::table('orders')->delete();
            DB::table('librarys')->delete();
        });
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
        sum(item_count) AS pieces,
        (sum(item_count) * items.price) AS priceSum
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
