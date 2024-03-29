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
    public function printAllOrders(Request $request)
    {
        if (ModelsAllowed::adminIP($request->ip())) {

            $orders = \DB::select('
        SELECT
        *, orders.description AS ordersDescription
        FROM `orders` 
        JOIN library_has_order ON orders.idorder=library_has_order.order_idorder
        JOIN librarys ON library_has_order.library_idlibrary=librarys.idlibrary
        JOIN order_has_item ON orders.idorder=order_has_item.order_idorder
        JOIN items ON order_has_item.item_iditem=items.iditem
        ORDER BY orders.idorder, items.item_type_idtype

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
                    $orderTree[$value->idorder]["ordersDescription"] = $value->ordersDescription;
                }
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_iditem'] = $value->item_iditem;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_count'] = $value->item_count;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['price'] = $value->price;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_count'] = $value->item_count;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_name'] = $value->item_name;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_autor'] = $value->item_autor;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_type_idtype'] = $value->item_type_idtype;

                $lastValID = $value->idorder;
            }
            $ordersSum = \DB::select('
            SELECT
            orders.idorder AS idorder,
            orders.created_at,
            librarys.libName AS knihovna,
            SUM(IF(items.item_type_idtype=1,1,0)) AS knih,
            SUM(IF(items.item_type_idtype=2,1,0)) AS pomucek,
            
            SUM(IF(items.item_type_idtype=1, order_has_item.item_count * items.price,0)) AS knih_kc,
            SUM(IF(items.item_type_idtype=2, order_has_item.item_count * items.price,0)) AS pomucek_kc,
            /*
            count(*) AS celkem,
            */
            sum(order_has_item.item_count * items.price) AS celkem_kc
            FROM `orders` 
            JOIN library_has_order ON orders.idorder=library_has_order.order_idorder
            JOIN librarys ON library_has_order.library_idlibrary=librarys.idlibrary
            JOIN order_has_item ON orders.idorder=order_has_item.order_idorder
            JOIN items ON order_has_item.item_iditem=items.iditem
            GROUP BY idorder
            ORDER BY orders.idorder, items.item_type_idtype
            ');
            foreach ($ordersSum as $key => $value) {
                $sum[$value->idorder] = $value;
            }

            //dd($orderTree);
            if (isset($orderTree)) {
                return view('admin/print/allOrders', ['orders' => $orderTree, 'ordersSum' => $sum]);
            } else {
                echo "Nejsou objednávky není co zobrazovat.";
            }
        } else {
            return "NOPE";
        }
    }
    public function printAllAddress($showLogo = NULL, Request $request)
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
                }
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_iditem'] = $value->item_iditem;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_count'] = $value->item_count;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['price'] = $value->price;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_count'] = $value->item_count;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_name'] = $value->item_name;
                $orderTree[$value->idorder]['items'][$value->item_iditem]['item_autor'] = $value->item_autor;

                $lastValID = $value->idorder;
            }
            //dd($showLogo);
            if (isset($orderTree)) {
                return view('admin/print/allAddress', ['orders' => $orderTree, 'showLogo' => $showLogo]);
            } else {
                echo "Nejsou objednávky není co zobrazovat.";
            }
        } else {
            return "NOPE";
        }
    }
}
