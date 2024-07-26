@component('mail::message', ['color' => 'success'])
# Vaše objednávka byla přijata ke zpracování

Dobrý den,<br>
přijali jsme objednávku dotovaných pomůcek a knih :

@component('mail::table')
| Položka       |        ks | cena 1 ks  | celkem bez DPH |
| ------------- | --------: |   --------:|       --------:|
@foreach ($basked as $item)
| {{ $item->item_name }} | {{ $item->pieceInBasket }} | {{ $item->price }} | {{ $item->pieceInBasket * $item->price }} |
@endforeach
| Celkem        | {{ $total['pieceInBasket'] }} | {{ $total['price'] }} | {{ $total['sum'] }} |
@endcomponent

<b>Objednal/a:</b><br>{{ $order->libName }}<br> {{ $order->libStreet }}<br> {{ $order->libPSC }} {{ $order->libCity }}<br> (IČ: {{ $order->ic }} - {{ $order->oName }}),<br>
<b>s doručením 
@if (!$order->deliveryAddress)
do sdídla knihovny</b><br>
{{ $order->libName }}<br> {{ $order->libStreet }}<br> {{ $order->libPSC }} {{ $order->libCity }})
@else
na adresu:</b><br> {{ $order->deliveryName }}<br> {{ $order->deliveryStreet }}<br> {{ $order->deliveryPSC }} {{ $order->deliveryCity }} 
@endif
<br>
<br>
<b>Kontaktní osoba :</b><br> {{ $order->contactPerson }}<br> email: {{ $order->contactPersonEmail }}<br> tel.: {{ $order->contactPersonTele }}
<br>

@if($order->description!="" && $order->description!=null)
<b>S poznámkou :</b>
{{ $order->description }}
<br>
@endif
<br>
S pozdravem<br>
Knihovna města Hradce Králové
@endcomponent

