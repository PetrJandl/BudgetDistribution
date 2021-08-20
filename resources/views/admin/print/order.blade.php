
<div style="width: 200mm; padding-bottom: 50pt; margin: 0 auto; border-bottom: 1px gray solid; page-break-inside: avoid; page-break-after: always;">

<div style="border: 1px dotted gray; margin: 5pt; padding: 5pt;">
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
<table style="width: 100%; margin: 5pt; padding: 5pt; border-collapse: collapse; ">
@foreach ($order['items'] as $item)
<tr style="border-bottom: 1px dotted gray; height: 18pt;">
    <td style="width: 18pt; border: 1px dotted gray;"></td>
    <td style="text-align: right; width: 30pt; padding-right: 10pt;">{{ $item['item_count'] }} <small>ks</small></td>
    <td>{{ $item['item_name'] }}
@if ( !is_null($item['item_autor']) )
        - {{ $item['item_autor'] }}
@endif
        </td>
</tr>
@endforeach
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
window.print();
//-->
</script>

