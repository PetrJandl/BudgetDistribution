<!DOCTYPE html>
<html lang="cs_CZ">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="recapcha-site-key" content="{{ config('services.recaptcha.sitekey')}}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" >
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('ico/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('ico/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('ico/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('ico/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('ico/safari-pinned-tab.svg') }}" color="#000000">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    
    <title>{{ config('app.name', "Laravel") }}</title>

    <meta property="og:site_name" content="BShop.KmHK.cz">
    <meta property="og:author"    content="KnihovnaHK.cz">
    <meta property="og:title"     content="Nákup knih a pomůcek z dotace Královéhradeckého kraje">
    <meta property="og:description"      content="Eshop pro knihovny které se účastní projektu bookstart na výběr knih a pomůcek, které chtějí nakoupit v rámci dotace.">
    <meta property="og:image"     content="{{ asset('images/bshop.png') }}">
    <meta property="og:image:type" content="image/png" />
    <meta property="og:type"      content="article">
    
    
    <style>
        .v-cloak {
          display: none;
        }
    
        .loader {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #F6C883;
          width: 120px;
          height: 120px;
          -webkit-animation: spin 2s linear infinite;
          /* Safari */
          animation: spin 2s linear infinite;
          margin: 0 auto;
        }
    
        .centerLoader {
          width: 100%;
        }
    
        .centerLoader strong {
          width: 121px;
          font-family: arial;
          margin: 50pt auto;
          display: block;
          font-size: larger;
        }
    
        /* Safari */
        @-webkit-keyframes spin {
          0% {
            -webkit-transform: rotate(0deg);
          }
    
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
    
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
    
          100% {
            transform: rotate(360deg);
          }
        }
      </style>


</head>
<body>
  <noscript>
    <strong>Omlouvame se ale tento web, neumí pracovat bez JavaScriptu.Prosim zapnete jej.</strong>
  </noscript>
  @yield('content')
    
</body>
</html>