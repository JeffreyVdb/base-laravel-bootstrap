<?php

namespace Project\Controllers;

use View;

class HomeController extends \BaseController {

	public function showIndex()
	{
		return View::make('home');
	}

}
