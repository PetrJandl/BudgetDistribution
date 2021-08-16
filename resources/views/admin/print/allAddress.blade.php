@extends('admin/print/layout')
  
  
@section('content')
  @foreach ($orders as $order)
    @include('admin/print/address', ['order' => $order]) 
  @endforeach

@endsection