<?php

use Illuminate\Http\Request;
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

Route::post('api/chat-stream', [ChatController::class, 'streamChat']);
Route::post('api/autocomplete', [ChatController::class, 'autocomplete']);
Route::get('api/mensagem', function () {
    return response()->json(['mensagem' => 'Olá do Laravel!']);
});