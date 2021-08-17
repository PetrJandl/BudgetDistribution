
<div style="width: 280mm; padding-bottom: 50pt; margin: 0 auto; page-break-inside: avoid; font-family: Arial, Helvetica, sans-serif; font-size: 16pt; line-height: 26pt; clear: both;">
<div style=" width: 35%; padding:20pt;">
{!! ($showLogo=="slogem"?'<img src="http://bshop.localhost/images/logo.svg" style="width: 80mm;">':'<br>')  !!}
{!! ($showLogo=="srazitkem"?'<img src="http://bshop.localhost/images/logoRazitko.jpg"  style="width: 80mm;" /><br>':'<br>')  !!}
{!! ($showLogo!="nope"?'
Knihovna města Hradce Králové<br> 
Wonkova 1262/1a<br>
500 02   Hradec Králové
':'<br><br><br>')  !!}
</div>

<div style=" border-top: 1px dotted gray;  border-left: 1px dotted gray; width: 45%; height: 80mm; margin-left: 50%; margin-top: 40mm; float: right;">
    <div style="margin:20pt;">
@if (is_null($order['deliveryName']))
{{ $order['libName'] }}<br>
{{ $order['contactPerson'] }}<br>
{{ $order['libStreet'] }}<br>
{{ substr($order['libPSC'],0,3) }}&nbsp;{{ substr($order['libPSC'],3,2)  }}&nbsp;&nbsp;{{ $order['libCity'] }}<br>
@else
{{ $order['deliveryName'] }}<br>
{{ $order['contactPerson'] }}<br>
{{ $order['deliveryStreet'] }}<br>
{{ substr($order['deliveryPSC'],0,3) }}&nbsp;{{ substr($order['deliveryPSC'],3,2)  }}&nbsp;&nbsp;{{ $order['deliveryCity'] }}<br>
@endif
</div>
</div>


    
</div>

<script type="text/javascript">
<!--
window.print();
//-->
</script>
