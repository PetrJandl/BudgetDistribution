<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
//use App\Models\Order;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order['order'];
        $this->basked = $order['basked'];
        $this->total['pieceInBasket'] = 0;
        $this->total['price'] = 0;
        $this->total['sum'] = 0;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        foreach ($this->basked as $key => $value) {
            $this->total['pieceInBasket'] += $value->pieceInBasket;
            $this->total['price'] += $value->price;
            $this->total['sum'] += $value->pieceInBasket * $value->price;
        }
        if (env('APP_DEBUG')) {
            return $this->subject('DEBUG MODE - Objednávka přijata ke zpracování')->markdown('emails.orders.shipped', ['order' => $this->order, 'basked' => $this->basked, 'total' => $this->total]);
        } else {
            return $this->subject('Objednávka přijata ke zpracování')->markdown('emails.orders.shipped', ['order' => $this->order, 'basked' => $this->basked, 'total' => $this->total]);
        }
    }
}
