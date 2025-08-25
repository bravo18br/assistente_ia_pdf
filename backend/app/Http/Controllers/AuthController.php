<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

use LdapRecord\Models\ActiveDirectory\User as LdapUser;
use LdapRecord\Container;




class AuthController extends Controller
{    
    public function showLogin(){
        return view('auth.login');
    }

    public function login(Request $request){
        $connection = Container::getConnection('default');

        $credentials = [
            'samaccountname' => $request->username,
            'password' => $request->password,
        ];

        if (Auth::guard('web')->attempt($credentials)) {
            $user = Auth::user();
            // $ldapUser = LdapUser::findByGuid($user->guid);
            dd($user);
            
        } elseif(Auth::guard('local')->attempt(['samaccountname' => $request->username,'password' => $request->password,])) {
            $user = Auth::guard('local')->user();
            dd($user);
        }
        
        return response()->json(['erro' => 'Usuário ou senha inválidos'], 401);
    }

    public function showRegister(){
        return view('auth.register');
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        // return redirect()->route('dashboard');
        return response()->json($user);
    }

    // Logout
    public function logout(){
        Auth::logout();
        return response()->json(['message' => 'Logout realizado']);
        // return redirect()->route('login');
    }

    public function user(Request $request) {
        return $request->user();
    }
}
