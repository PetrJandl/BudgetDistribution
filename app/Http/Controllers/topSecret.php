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
    public function showAllOrders(Request $request)
    {
        if (ModelsAllowed::adminIP($request->ip())) {
            $orders = \DB::select('
        SELECT
        *

        FROM `orders` 
        JOIN library_has_order ON orders.idorder=library_has_order.order_idorder
        JOIN librarys ON library_has_order.library_idlibrary=librarys.idlibrary
        JOIN order_has_item ON orders.idorder=order_has_item.order_idorder
        JOIN items ON order_has_item.item_iditem=items.iditem

        ');
            $lastValID = 0;
            foreach ($orders as $key => $value) {
                if ($value->idorder != $lastValID) {
                    $orderTree[$value->idorder]['idlibrary'] = $value->idlibrary;
                    $orderTree[$value->idorder]['idorder'] = $value->idorder;
                    $orderTree[$value->idorder]["oName"] = $value->oName;
                    $orderTree[$value->idorder]["libName"] = $value->libName;
                    $orderTree[$value->idorder]["libStreet"] = $value->libStreet;
                    $orderTree[$value->idorder]["libCity"] = $value->libCity;
                    $orderTree[$value->idorder]["libPSC"] = $value->libPSC;
                    $orderTree[$value->idorder]["libEmail"] = $value->libEmail;
                    $orderTree[$value->idorder]["contactPerson"] = $value->contactPerson;
                    $orderTree[$value->idorder]["contactPersonEmail"] = $value->contactPersonEmail;
                    $orderTree[$value->idorder]["contactPersonTele"] = $value->contactPersonTele;
                    $orderTree[$value->idorder]["deliveryName"] = $value->deliveryName;
                    $orderTree[$value->idorder]["deliveryStreet"] = $value->deliveryStreet;
                    $orderTree[$value->idorder]["deliveryCity"] = $value->deliveryCity;
                    $orderTree[$value->idorder]["deliveryPSC"] = $value->deliveryPSC;
                } else {
                    $orderTree[$value->idorder]['items'][$value->item_iditem]['item_iditem'] = $value->item_iditem;
                    $orderTree[$value->idorder]['items'][$value->item_iditem]['item_count'] = $value->item_count;
                    $orderTree[$value->idorder]['items'][$value->item_iditem]['price'] = $value->price;
                    $orderTree[$value->idorder]['items'][$value->item_iditem]['item_count'] = $value->item_count;
                    $orderTree[$value->idorder]['items'][$value->item_iditem]['item_name'] = $value->item_name;
                    $orderTree[$value->idorder]['items'][$value->item_iditem]['item_autor'] = $value->item_autor;
                }
                $lastValID = $value->idorder;
            }
            //dd($orderTree);
            return view('admin/showAllOrders', ['orders' => $orderTree]);
        } else {
            return "NOPE";
        }
    }
}
