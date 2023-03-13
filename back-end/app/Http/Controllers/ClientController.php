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
        // Validation des données saisies par l'utilisateur
        $data = $request->validate([
            "firstName" => ["required", "string"],
            "lastName" => ["required", "string"],
            "email" => ["required", "email", "unique:clients,email"],
            "password" => ["required", "string"],

        ]);

        // Hachage du mot de passe saisi par l'utilisateur
        $data['password'] = bcrypt($request->password);

        // Création de l'utilisateur en BDD
        $user = Client::create($data);

        // Création du Token de l'utilisateur
        $token = $user->createToken('API Token')->accessToken;

        // Réponse envoyé à l'utilisateur
        return response(['user' => $user, 'token' => $token], 201);

    }

    function login(Request $request){

        $validateUser = $request->validate(
            [
                'email' => ["required", "string"],
                'password' => ["required", "string"]
            ]);


        if (!filter_var($validateUser['email'], FILTER_VALIDATE_EMAIL)) {
           return true;
        }
    }


    function user(){

        $clients = Client::all();
        // On retourne les informations des villes en JSON
        return response()->json($clients);
    

    }
}
    
