<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::post('/chat-stream', [ChatController::class, 'streamChat']);
Route::post('/autocomplete', [ChatController::class, 'autocomplete']);
Route::get('/mensagem', function () {
    return response()->json(['mensagem' => 'Olá do Laravel!']);
});