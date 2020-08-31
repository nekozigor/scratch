<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/user/{user}', function (App\User $user) {
    return $user;
})->middleware('test');

Route::get('/sc', 'TestController@sc');
Route::get('/view', 'TestController@view');

Route::fallback(function () {
    return 'big error';
})->middleware('test');

Route::get('/test', function (){
    return 'test';
})->middleware('auth');

Route::get('/admin', 'Admin\TestController@index');

Route::get('/', function(){
    return view('index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
