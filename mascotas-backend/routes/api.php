<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EducationAndResourceController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RaceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
// Education and resources
Route::get('/education-and-resource', [EducationAndResourceController::class, 'index'])->name('education-and-resource.index');
Route::get('/education-and-resource/{id}', [EducationAndResourceController::class, 'show'])->name('education-and-resource.show');
// rutas privadas
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    // Education and resources
    Route::post('/education-and-resource', [EducationAndResourceController::class, 'store'])->name('education-and-resource.store');
    Route::put('/education-and-resource/{id}', [EducationAndResourceController::class, 'update'])->name('education-and-resource.update');
    Route::delete('/education-and-resource/{id}', [EducationAndResourceController::class, 'destroy'])->name('education-and-resource.destroy');
    //Contact
    Route::delete('/contact/{id}', [ContactController::class, 'destroy'])->name('contact.destroy');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
    Route::get('/contact/{id}', [ContactController::class, 'show'])->name('contact.show');
    //races
    Route::post('/races', [RaceController::class, 'store'])->name('races.store');
    Route::put('/races/{id}', [RaceController::class, 'update'])->name('races.update');
    Route::delete('/races/{id}', [RaceController::class, 'destroy'])->name('races.destroy');
    //races
    Route::post('/category', [CategoryController::class, 'store'])->name('category.store');
    Route::put('/category/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');
});

//Contact
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
// race routes
Route::get('/races', [RaceController::class, 'index'])->name('races.index');
Route::get('/races/{id}', [RaceController::class, 'show'])->name('races.show');
// category routes
Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
Route::get('/category/{id}', [CategoryController::class, 'show'])->name('category.show');
