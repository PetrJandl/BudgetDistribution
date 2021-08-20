
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
@foreach ($order['items'] as $item)
<tr style="border-top: 1px @if ($last!=$item['item_type_idtype']) solid @else dotted @endif gray; height: 18pt;">
    {{--
    <td style="width: 15pt; font-size: 8pt;">
        @if ( $item['item_type_idtype']==1 )
        <small>K</small>
        @else
        <small>P</small>
        @endif
    </td>
    --}}
    <td style="width: 70%;" @if(is_null($item['item_autor']))colspan="2"@endif >
        @if(is_null($item['item_autor']))
        {{ $item['item_name'] }}
        @else
        {{  Illuminate\Support\Str::limit($item['item_name'], 70, $end='...') }}
        @endif
    </td>
    
    @if ( !is_null($item['item_autor']) )<td style="">
        {{  Illuminate\Support\Str::limit($item['item_autor'], 19, $end='...') }}
    </td>@endif
    <td style="text-align: right; padding-right: 10pt;">{{ $item['item_count'] }} <small>ks</small></td>
    <td style="width: 18pt; border: 1px dotted gray;"></td>
</tr>
@php ($last = $item['item_type_idtype'])
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

