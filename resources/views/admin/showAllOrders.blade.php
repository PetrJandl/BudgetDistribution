@extends('admin/layout')
  
  
@section('content')
  @foreach ($orders as $order)
    <p>{{ $order->idorder }}</p>
    @include('../emails/orders/shipped', ['order' => $order, 'basked' =>  $order, 'total' =>  $order]) 
  @endforeach

@endsection