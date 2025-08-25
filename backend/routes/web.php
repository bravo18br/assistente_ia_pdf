<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\PdfController;

use Cloudstudio\Ollama\Facades\Ollama;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/teste', function () {
    return view('teste2');
});

Route::get('/testeAutocompletar', function () {
    return view('testeAutocompletar');
});

Route::post('/chat-stream', [ChatController::class, 'streamChat']);

Route::post('/autocomplete', [ChatController::class, 'autocomplete']);

Route::get('/gerarpdf', [PdfController::class, 'gerarPDF']);

//--------------------------------------------------------------------------------------------------------------------------------------------------

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Rota protegida
Route::get('/dashboard', function () {
    return view('auth.dashboard');
})->middleware('auth')->name('dashboard');