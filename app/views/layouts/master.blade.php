<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Project | @yield('title', 'My Project')</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{ HTML::style('css/vendor.min.css') }}
    {{ HTML::script('js/modernizr.min.js') }}
</head>
<body>
    <div class="container">
        @yield('content')
    </div>

    {{ HTML::script('js/vendor.min.js') }}
    @yield('scripts')
</body>
</html>