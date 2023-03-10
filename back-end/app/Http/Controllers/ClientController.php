<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Client;


class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    
    function register(Request $request){
        $data = $request->validate([
            'firstName' => 'required|max:255',
            'lastName' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',

        ]);

        $data['password'] = bcrypt($request->password);

        $user = Client::create($data);

        $token = $user->createToken('API Token')->accessToken;

        return response(['user' => $user, 'token' => $token], 201);

    }
    function user(){

        $clients = Client::all();
        // On retourne les informations des villes en JSON
        return response()->json($clients);
    

    }
}
    
