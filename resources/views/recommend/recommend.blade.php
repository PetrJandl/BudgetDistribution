@extends('recommend/layout')
  
  
@section('content')
<div id="recommend">
    <div v-show="vueNotLoad" class="centerLoader">
      <strong>Načítání ...</strong>
      <div v-show="vueNotLoad" class="loader"></div>
    </div>
  </div>
@endsection
