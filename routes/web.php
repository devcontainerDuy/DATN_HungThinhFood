<?php

use Illuminate\Support\Facades\Route;

/** Filemanager */
Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

Route::middleware('web')->prefix('cms')->as('cms.')->group(function () {
    Route::resource('users', App\Http\Controllers\User\UserController::class)->names('users');
    Route::resource('roles', App\Http\Controllers\User\RoleController::class)->names('roles');
    Route::resource('permissions', App\Http\Controllers\User\PermissionsController::class)->names('permissions');
});
