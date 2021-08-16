<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('ico/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('ico/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('ico/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('ico/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('ico/safari-pinned-tab.svg') }}" color="#000000">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    
    <title>{{ config('app.name', "Laravel") }}</title>

    
    <style>
     
        body {
          background: white;
        }
      
      </style>


</head>
<body>
  <noscript>
    <strong>Omlouvame se ale tento web, neumí pracovat bez JavaScriptu. Prosím zapňete jej.</strong>
  </noscript>
  @yield('content')
    
</body>
</html>