<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;

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