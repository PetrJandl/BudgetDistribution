@extends('eshop/layout')
  
  
@section('content')
<div id="eshop">
    <div v-show="vueNotLoad" class="centerLoader">
      <strong>Načítání ...</strong>
      <div v-show="vueNotLoad" class="loader"></div>
    </div>
  </div>
@endsection