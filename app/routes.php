<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Main site
Route::group(array('namespace' => 'Project\Controllers'), function()
{
	Route::get('/', 'HomeController@showIndex');
});

// Backend
Route::group(array('prefix' => 'admin', 'namespace' => 'Project\Admin\Controllers'), function()
{
	Route::get('/', 'HomeController@showIndex');
});