<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/departamentos', "DepartamentoController@get");


Route::post('/empleados', "EmpleadoController@create");
Route::get('/empleados', "EmpleadoController@get");
Route::get('/empleados/{Clave_Emp}/edit', "EmpleadoController@getOne");
Route::put('/empleados', "EmpleadoController@update");
Route::delete('/empleados',"EmpleadoController@delete");
Route::post('/empleados/findByName', "EmpleadoController@findByName");
