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
    {{ HTML::style('css/project.min.css') }}
    {{ HTML::script('js/modernizr.min.js') }}
</head>
<body>
	<div class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          	<div class="navbar-header">
            	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              		<span class="sr-only">Toggle navigation</span>
              		<span class="icon-bar"></span>
              		<span class="icon-bar"></span>
              		<span class="icon-bar"></span>
            	</button>
            	<a class="navbar-brand" href="#">Project name</a>
          	</div>
          	<div class="navbar-collapse collapse">
            	<ul class="nav navbar-nav">
              		<li class="active"><a href="#">Link</a></li>
              		<li><a href="#">Link</a></li>
              		<li><a href="#">Link</a></li>
              		<li class="dropdown">
		                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
		                <ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li class="dropdown-header">Nav header</li>
							<li><a href="#">Separated link</a></li>
							<li><a href="#">One more separated link</a></li>
		                </ul>
              		</li>
            	</ul>
            	<ul class="nav navbar-nav navbar-right">
              		<li class="active"><a href="#">Navbar fixed top</a></li>
            	</ul>
          	</div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </div>

    <div class="container">
        @yield('content')
    </div>

    <div id="footer">
	    <div class="container">
	    	<p class="text-muted">Place sticky footer content here.</p>
	    </div>
    </div>

    {{ HTML::script('js/vendor.min.js') }}
    @yield('scripts')
</body>
</html>