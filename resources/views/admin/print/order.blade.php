
<div style="width: 200mm; padding-bottom: 50pt; margin: 0 auto; page-break-inside: avoid; page-break-after: always;">

<div style="width: 100%;  margin-bottom: 10pt; padding: 0pt;">
Objednatel : {{ $order['libName'] }}  ( {{ $order['libEmail'] }} )<br>
Kontakt : {{ $order['contactPerson'] }}, {{ $order['contactPersonTele'] }}, {{ $order['contactPersonEmail'] }}<br>
@if (is_null($order['deliveryName']))
Doručení na adresu (objednatele) : <strong>{{ $order['libName'] }}, {{ $order['libStreet'] }}, {{ substr($order['libPSC'],0,3) }}&nbsp;{{ substr($order['libPSC'],3,2)  }}&nbsp;{{ $order['libCity'] }}<br></strong>
@else
Doručení na adresu (doručovací):
<strong>
@if ( trim($order['deliveryName'])==trim($order['contactPerson']) )
    {{ $order['libName'] }}
    @else
    {{ $order['deliveryName'] }}
    @endif, {{ $order['deliveryStreet'] }}, {{ substr($order['deliveryPSC'],0,3) }}&nbsp;{{ substr($order['deliveryPSC'],3,2)  }}&nbsp;{{ $order['deliveryCity'] }}<br>
@endif
</strong>
</div>
Položky:
<table style="width: 100%; margin: 5pt; padding: 5pt; border-collapse: collapse; border-bottom: 1px dotted gray;">
@php ($last = 1)
@php ($subtotalPrice = 0)
@php ($subtotalPieces = 0)
@foreach ($order['items'] as $item)
@if ($last!=$item['item_type_idtype'] && $ordersSum[$order['idorder']]->knih!=0)
<tr style="border-bottom: 1px dotted gray; border-top: 1px solid gray; height: 18pt;">
    <td style="text-align: right;" colspan="3">knih : {{ $ordersSum[$order['idorder']]->knih }} druhů, {{ $subtotalPieces }} kusů</td>
    <th style="text-align: right; padding-right: 10pt;">{{ $ordersSum[$order['idorder']]->knih_kc }}&nbsp;Kč</th>
    @php ($subtotalPieces = 0)
    @php ($subtotalPrice = 0)
</tr>
@endif
<tr style="border-top: 1px dotted gray; height: 18pt;">
    <td @if(is_null($item['item_autor']))style="width: 75%;" colspan="2"@endif >
        @if(is_null($item['item_autor']))
        {{ $item['item_name'] }}
        @else
        {{  Illuminate\Support\Str::limit($item['item_name'], 60, $end='...') }}
        @endif
    </td>
    
    @if ( !is_null($item['item_autor']) )<td style="">
        {{  Illuminate\Support\Str::limit($item['item_autor'], 18, $end='...') }}
    </td>@endif
    <td style="text-align: right;"><small style="color:gray">{{ $item['price'] }}&nbsp;x&nbsp;</small><strong>{{ $item['item_count'] }}</strong><small>&nbsp;=</small></td>
    <td style="text-align: right; padding-right: 10pt;">{{ $item['price']*$item['item_count'] }}&nbsp;Kč</td>
    <td style="width: 18pt; border: 1px dotted gray;"></td>
</tr>
@php ($subtotalPieces += $item['item_count'])
@php ($subtotalPrice += $item['price'])
@php ($last = $item['item_type_idtype'])
@endforeach
@if ($ordersSum[$order['idorder']]->pomucek!=0)
<tr style="border-top: 1px solid gray; height: 18pt;">
    <td style="text-align: right;" colspan="3">pomůcek : {{ $ordersSum[$order['idorder']]->pomucek }} druhů, {{ $subtotalPieces }} kusů</td>
    <th style="text-align: right; padding-right: 10pt;">{{ $ordersSum[$order['idorder']]->pomucek_kc }}&nbsp;Kč</th>
</tr>
@endif
<tr style="border-top: 4px double gray; height: 18pt;">
    <th style="text-align: left;" colspan="3"> Celkem</th>
    <th style="text-align: right; padding-right: 10pt;"> {{ $ordersSum[$order['idorder']]->celkem_kc }}&nbsp;Kč</th>
</tr>
</table>

@if ($order['ordersDescription']!="")
<div style="margin:10pt;">
<h3>Poznámka k objednávce:</h3>
    {{ $order['ordersDescription'] }}
</div>
@endif
    
</div>

<script type="text/javascript">
<!--
//window.print();
//-->
</script>

