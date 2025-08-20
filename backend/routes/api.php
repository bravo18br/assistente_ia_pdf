<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\PdfController;


Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::post('/chat-stream', [ChatController::class, 'streamChat']);
Route::post('/autocomplete', [ChatController::class, 'autocomplete']);
Route::get('/mensagem', function () {
    return response()->json(['mensagem' => 'Olá do Laravel!']);
});

Route::post('/gerarpdf', [PdfController::class, 'gerarPDF']);