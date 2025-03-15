<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard/Index', [
        "login" => true,
        "user_name" => "John Doe",
    ]);
});

Route::get('/baiviet', function () {
    return Inertia::render('AdminBaiviet/Index', [
        "login" => true,
        "user_name" => "John Doe",
    ]);
});

Route::get('/nhaphanphoi', function () {
    return Inertia::render('AdminNCC/Index', [
        "login" => true,
        "user_name" => "John Doe",
    ]);
});
Route::get('/baiviet/create', function () {
    return Inertia::render('AdminBaiviet/Create', [
        "login" => true,
        "user_name" => "John Doe",
    ]);
});
Route::get('/login', function () {
    return Inertia::render('AdminLogin/Index', [
        "login" => true,
        "user_name" => "John Doe",

Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

Route::get('/api/test', function () {
    return response()->json([
        "userId" => 1,
        "id" => 1,
        "title" => "anh tâm bị khùng! haha",
        "completed" => false
    ]);
});
