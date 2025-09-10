<?php

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\StudentController;

Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('/user', function (Request $request) {
        return UserResource::make($request->user());
    });

    Route::apiResource('students',StudentController::class);
    Route::get('classes',[ClassController::class,'index']);
});