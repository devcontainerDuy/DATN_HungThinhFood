<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard/Index', [
        "login" => true,
        "user_name" => "John Doe",
    ]);
});

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
