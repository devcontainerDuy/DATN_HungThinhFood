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
