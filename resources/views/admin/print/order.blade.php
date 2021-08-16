
<div style="width: 200mm; padding-bottom: 50pt; margin: 0 auto; border-bottom: 1px gray dotted; page-break-inside: avoid;">

<div style="border: 1px solid gray; width: 50%; margin: 5pt; padding: 5pt;">
@if (is_null($order['deliveryName']))
{{ $order['libName'] }}<br>
{{ $order['libStreet'] }}<br>
{{ substr($order['libPSC'],0,3) }}&nbsp;{{ substr($order['libPSC'],3,2)  }}&nbsp;{{ $order['libCity'] }}<br>
@else
{{ $order['deliveryName'] }}<br>
{{ $order['deliveryStreet'] }}<br>
{{ substr($order['deliveryPSC'],0,3) }}&nbsp;{{ substr($order['deliveryPSC'],3,2)  }}&nbsp;{{ $order['deliveryCity'] }}<br>
@endif
</div>
Položky:
<table style="width: 100%; margin: 5pt; padding: 5pt;">
@foreach ($order['items'] as $item)
<tr style="border-bottom: 1px solid gray">
    <td style="width: 10pt; padding-right: 20pt; border: 1px solid gray;"></td>
    <td style="text-align: right; width: 30pt; padding-right: 10pt;">{{ $item['item_count'] }}</td>
    <td>{{ $item['item_name'] }}
@if ( !is_null($item['item_autor']) )
        - {{ $item['item_autor'] }}
@endif
        </td>
</tr>
@endforeach
</table>

<div style="margin:10pt;">
    Objednatel : {{ $order['libName'] }} : {{ $order['libEmail'] }}<br>
    Kontakt : {{ $order['contactPerson'] }}, {{ $order['contactPersonTele'] }}, {{ $order['contactPersonEmail'] }}
</div>
    
</div>

<script type="text/javascript">
<!--
window.print();
//-->
</script>
