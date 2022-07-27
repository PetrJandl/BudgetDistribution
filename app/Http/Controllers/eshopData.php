<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use App\Models\Allowed as ModelsAllowed;

class eshopData extends Controller
{
    public function send(Request $request)
    {

        if ($request->accepts(['text/html', 'application/json']) && (ModelsAllowed::shoping() || ModelsAllowed::adminIP( $request->ip() ) )) {

            $response = (new \ReCaptcha\ReCaptcha(config('services.recaptcha.secret')))
                ->setExpectedAction('sendOrder')
                ->verify($request->post('_recaptcha'), $request->ip());

            if (!$response->isSuccess()) {
                abort("reCaptcha is wrong!");
            }

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

                    DB::transaction(function () use ($order, $idlibrary, $basked) {
                        //Add order to database
                        $orderId = DB::table('orders')->insertGetId([
                            'description' => $order[0]->description,
                            'isSend' => 1,
                            'created_at' => Carbon::now()
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
                    });

                    $r = response()->json(['message' => "ok"]);
                    $completeOrder['order'] = $order[0];
                    $completeOrder['basked'] = $basked;

                    if (env('APP_DEBUG')) {
                        Mail::to("jandl@knihovnahk.cz")->send(new OrderShipped($completeOrder));
                        //Mail::to($order[0]->contactPersonEmail)->send(new OrderShipped($completeOrder));
                    } else {
                        Mail::to($order[0]->contactPersonEmail)->send(new OrderShipped($completeOrder));
                        if ($order[0]->contactPersonEmail != $order[0]->libEmail) {
                            Mail::to($order[0]->libEmail)->send(new OrderShipped($completeOrder));
                            Mail::to("jandl@knihovnahk.cz")->send(new OrderShipped($completeOrder));
                        }
                    }
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
