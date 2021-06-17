<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class eshopData extends Controller
{
    public function send(Request $request)
    {

        if ($request->accepts(['text/html', 'application/json'])) {

            //print_r(config('services.recaptcha.secret'));
            //die();

            $response = (new \ReCaptcha\ReCaptcha(config('services.recaptcha.secret')))
                ->setExpectedAction('sendOrder')
                ->verify($request->post('_recaptcha'), $request->ip());

            if (!$response->isSuccess()) {
                abort();
            }
            /*
            if ($response->getScore() < 0.6) {
                return response()->view('challenge');
            }
            */
            //echo "<pre>";
            $order = json_decode($request->post('order'));
            // TODO id knihovny by melo jit pres session a melo by se kontrolvoat jestli uz neni objednavka na tuhle knihovnu

            $idlibrary = $order[0]->idlibrary;

            if ($idlibrary != "" and $idlibrary != null) {


                $orderExist = DB::table('library_has_order')->where('library_idlibrary', $idlibrary)->count();
                if ($orderExist == 0) {
                    $basked = json_decode($request->post('basked'));

                    //Update library in database BEGIN
                    $libUpdate = [
                        'contactPerson' => $order[0]->contactPerson,
                        'contactPersonEmail' => $order[0]->contactPersonEmail,
                        'contactPersonTele' => $order[0]->contactPersonTele,
                        'libName' => $order[0]->libName,
                        'libEmail' => $order[0]->libEmail,
                    ];

                    if ($order[0]->deliveryAddress) {
                        $libUpdate['deliveryName'] = $order[0]->deliveryName;
                        $libUpdate['deliveryStreet'] = $order[0]->deliveryStreet;
                        $libUpdate['deliveryCity'] = $order[0]->deliveryCity;
                        $libUpdate['deliveryPSC'] = $order[0]->deliveryPSC;
                    }

                    DB::table('librarys')
                        ->where('idlibrary', $idlibrary)
                        ->update($libUpdate);
                    //Update library in database OVER

                    //Add order to database
                    $orderId = DB::table('orders')->insertGetId([
                        'description' => $order[0]->description
                    ]);

                    //Add library has order
                    $lho = DB::table('library_has_order')->insertGetId([
                        'library_idlibrary' => $idlibrary,
                        'order_idorder' => $orderId
                    ]);

                    //Add order has items
                    foreach ($basked as $value) {
                        DB::table('order_has_item')->insert([
                            'item_iditem' => $value->iditem,
                            'order_idorder' => $orderId,
                            'item_count' => $value->pieceInBasket
                        ]);
                    }
                    $r = response()->json(['message' => "ok"]);
                } else {
                    $r = response()->json(['message' => "Knihovna již má objednáno!"]);
                }
            } else {
                $r = response()->json(['message' => "Nebyla vybrána knihovna!"]);
            }




            return json_encode($r);
        }
    }
}
