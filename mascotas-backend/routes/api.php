<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EducationAndResourceController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\NeedPetController;
use App\Http\Controllers\PetImgController;
use App\Http\Controllers\RaceController;
use App\Http\Controllers\SpecieController;
use App\Http\Controllers\SponsorshipController;
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

    //category
    Route::post('/category', [CategoryController::class, 'store'])->name('category.store');
    Route::put('/category/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');

    // Pets
    Route::post('/pets', [PetController::class, 'store'])->name('pets.store');
    Route::post('/pets/{id}', [PetController::class, 'update'])->name('pets.update');
    Route::delete('/pets/{id}', [PetController::class, 'destroy'])->name('pets.destroy');
    // Necesidades de mascotas
    Route::post('/pets/{id}/needs', [NeedPetController::class, 'store'])->name('pets.needs.store');
    Route::put('/pets-need/{id}', [NeedPetController::class, 'update'])->name('pets-neet.update');
    Route::delete('/pets-need/{id}', [NeedPetController::class, 'destroy'])->name('pets-neet.destroy');
    // Blogs
    Route::post('/category/{id}/blogs', [BlogController::class, 'store'])->name('blogs.store');
    Route::put('/category-blogs/{id}', [BlogController::class, 'update'])->name('blogs.update');
    Route::delete('/category-blogs/{id}', [BlogController::class, 'destroy'])->name('blogs.destroy');

    //Specie
    Route::post('/specie', [SpecieController::class, 'store'])->name('specie.store');
    Route::put('/specie/{id}', [SpecieController::class, 'update'])->name('specie.update');
    Route::delete('/specie/{id}', [SpecieController::class, 'destroy'])->name('specie.destroy');

    // hostories
    Route::post('/pets/{id}/histories', [HistoryController::class, 'store'])->name('histories.store');
    Route::post('/pets-histories/{id}', [HistoryController::class, 'update'])->name('histories.update');
    Route::delete('/pets-histories/{id}', [HistoryController::class, 'destroy'])->name('histories.destroy');

    // sponsorships
    Route::post('/pets/{id}/sponsorships', [SponsorshipController::class, 'store'])->name('sponsorships.store');
    Route::put('/pets-sponsorships/{id}', [SponsorshipController::class, 'update'])->name('sponsorships.update');
    Route::delete('/pets-sponsorships/{id}', [SponsorshipController::class, 'destroy'])->name('sponsorships.destroy');
    Route::get('/my-sponsorships', [SponsorshipController::class, 'MySponsorships'])->name('sponsorships.mysponsorships');
    Route::get('/pets-sponsorships', [SponsorshipController::class, 'index'])->name('pets.sponsorships.index');
    // Route::get('/pets/{id}/sponsorships', [SponsorshipController::class, 'index'])->name('pets.sponsorships.index');
    Route::get('/pets-sponsorships/{id}', [SponsorshipController::class, 'show'])->name('sponsorships.show');
    // PET IMG
    Route::post('/pets-images', [PetImgController::class, 'store'])->name('pets.images.store');
    Route::delete('/pets-images/{id}', [PetImgController::class, 'destroy'])->name('pets.images.destroy');
   
});
Route::get('/pets-images', [PetImgController::class, 'index'])->name('pets.images.index');
// pets routes
Route::get('/pets', [PetController::class, 'index'])->name('pets.index');
Route::get('/pets-all', [PetController::class, 'indexAll'])->name('pets.indexAll');
Route::get('/pets/{id}', [PetController::class, 'show'])->name('pets.show');
// Needs of pets
Route::get('/pets/{id}/needs', [NeedPetController::class, 'index'])->name('pets.needs.index');
Route::get('/pets-need/{id}', [NeedPetController::class, 'show'])->name('pets-needs.show');

// blogs
Route::get('/category/{id}/blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{id}', [BlogController::class, 'show'])->name('blogs.show');

// specie
Route::get('/specie', [SpecieController::class, 'index'])->name('specie.index');
Route::get('/specie/{id}', [SpecieController::class, 'show'])->name('specie.show');

//Contact
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
// race routes
Route::get('/races', [RaceController::class, 'index'])->name('races.index');
Route::get('/races/{id}', [RaceController::class, 'show'])->name('races.show');
// category
Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
Route::get('/category/{id}', [CategoryController::class, 'show'])->name('category.show');

// Histories
Route::get('/pets/{id}/histories', [HistoryController::class, 'index'])->name('pets.histories.index');
Route::get('/pets-histories/{id}', [HistoryController::class, 'show'])->name('histories.show');
