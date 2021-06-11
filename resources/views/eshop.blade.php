@extends('layout')
  
  
@section('content')
<div id="app">
    <div v-show="vueNotLoad" class="centerLoader">
      <strong>Načítání ...</strong>
      <div v-show="vueNotLoad" class="loader"></div>
    </div>
  </div>
@endsection