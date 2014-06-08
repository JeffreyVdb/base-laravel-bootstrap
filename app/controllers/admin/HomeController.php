<?php

namespace Project\Admin\Controllers;

use View;

class HomeController extends \BaseController 
{
	public function showIndex()
	{
		return View::make('admin.home');
	}
}