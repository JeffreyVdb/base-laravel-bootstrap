@extends('layouts.master')

@section('title', 'homepage')
@section('content')
	<h1>this is the homepage</h1>
	<div class="table-responsive">
		<table class="table">
	   		<tr>
	   			<th>Bootstrap</th>
	   			<th>Responsive</th>
	   			<th>Table</th>
	   		</tr>
	   		<tr>
	   			<td>Some data</td>
	   			<td>some data</td>
	   			<td>some other data</td>
	   		</tr>
	   		<tr>
	   			<td>some data again</td>
	   			<td>some data again</td>
	   			<td>some other data</td>
	   		</tr>
	   		<tr>
	   			<td>Pretty</td>
	   			<td>Cool</td>
	   			<td>Right?</td>
	   		</tr>
	  	</table>
	</div>
@endsection