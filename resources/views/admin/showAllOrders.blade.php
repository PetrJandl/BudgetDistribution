@extends('admin/layout')
  
  
@section('content')
  @foreach ($orders as $order)
    @include('admin/order', ['order' => $order]) 
  @endforeach

@endsection