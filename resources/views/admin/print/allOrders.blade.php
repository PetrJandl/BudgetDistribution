@extends('admin/print/layout')
  
  
@section('content')
  @foreach ($orders as $order)
    @include('admin/print/order', ['order' => $order, 'ordersSum' => $ordersSum]) 
  @endforeach

@endsection