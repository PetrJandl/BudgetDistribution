@component('mail::message')
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

<b>Objednal/a:</b><br>{{ $order->libName }}, {{ $order->libStreet }}, {{ $order->libPSC }} {{ $order->libCity }}<br> (IČ: {{ $order->ic }} - {{ $order->oName }}),<br>
<b>s doručučením 
@if (!$order->deliveryAddress)
do sdídla knihovny</b> ({{ $order->libName }}, {{ $order->libStreet }} {{ $order->libCity }})
@else
na adresu:</b> {{ $order->deliveryName }}, {{ $order->deliveryStreet }}, {{ $order->deliveryPSC }} {{ $order->deliveryCity }} 
@endif
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
