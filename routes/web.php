<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Event/Index', [
        "login" => true,
        "user_name" => "John Doe",
    ]);
});
