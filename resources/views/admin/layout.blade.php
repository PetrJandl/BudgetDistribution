<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="recapcha-site-key" content="{{ config('services.recaptcha.sitekey')}}">
    
    <script src="{{ asset('js/admin/app.js') }}" defer></script>
    
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
        .v-cloak {
          display: none;
        }
    
        .loader {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #680204;
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
        body {
          background: gray;
        }
        #app{
          background: #f3f3f3;
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
    <strong>Omlouvame se ale tento web, neumí pracovat bez JavaScriptu. Prosím zapňete jej.</strong>
  </noscript>
  @yield('content')
    
</body>
</html>