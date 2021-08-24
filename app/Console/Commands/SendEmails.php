<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;

class SendEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'send mails';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $orders = \DB::select('
        SELECT
        *, orders.description AS ordersDescription

        FROM `orders` 
        JOIN library_has_order ON orders.idorder=library_has_order.order_idorder
        JOIN librarys ON library_has_order.library_idlibrary=librarys.idlibrary
        JOIN order_has_item ON orders.idorder=order_has_item.order_idorder
        JOIN items ON order_has_item.item_iditem=items.iditem
        WHERE isSend !=1
        ORDER BY orders.idorder, items.item_type_idtype

        ');
        $lastValID = 0;
        foreach ($orders as $key => $value) {
            //$o[$value->idorder] = $value->idorder;

            $basked['item_iditem'] = $value->item_iditem;
            $basked['pieceInBasket'] = $value->item_count;
            $basked['price'] = $value->price;
            $basked['item_count'] = $value->item_count;
            $basked['item_name'] = $value->item_name;
            $basked['item_autor'] = $value->item_autor;
            $basked['item_type_idtype'] = $value->item_type_idtype;

            $completeOrder[$value->idorder]['basked'][$value->item_iditem] = (object) $basked;
            if ($value->idorder != $lastValID) {
                $completeOrder[$value->idorder] = array();
                $order['ic'] = $value->ic;
                $order['oName'] = $value->oName;
                $order['libName'] = $value->libName;
                $order['libStreet'] = $value->libStreet;
                $order['libCity'] = $value->libCity;
                $order['libPSC'] = $value->libPSC;
                $order['contactPerson'] = $value->contactPerson;
                $order['contactPersonEmail'] = $value->contactPersonEmail;
                $order['contactPersonTele'] = $value->contactPersonTele;
                $order['libEmail'] = $value->libEmail;
                $order['deliveryAddress'] = ($value->deliveryName == null ? 0 : 1);
                $order['deliveryName'] = $value->deliveryName;
                $order['deliveryStreet'] = $value->deliveryStreet;
                $order['deliveryCity'] = $value->deliveryCity;
                $order['deliveryPSC'] = $value->deliveryPSC;
                $order['description'] = $value->ordersDescription;
                $completeOrder[$value->idorder]['order'] = (object) $order;
            }
            $lastValID = $value->idorder;
        }

        foreach ($completeOrder as $key => $value) {
            if ($key != 0 and !env('APP_DEBUG')) {
                DB::table('orders')
                    ->where('idorder', $key)
                    ->update(array('isSend' => 1));
            }
            if (env('APP_DEBUG')) {
                Mail::to("jandl@knihovnahk.cz")->send(new OrderShipped($value));
            } else {
                Mail::to($value['order']->contactPersonEmail)->send(new OrderShipped($value));
                Mail::to($value['order']->libEmail)->send(new OrderShipped($value));
                Mail::to("jandl@knihovnahk.cz")->send(new OrderShipped($value));
            }
        }

        return 0;
    }
}
