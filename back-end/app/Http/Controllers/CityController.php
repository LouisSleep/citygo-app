<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;
use Illuminate\View\View;

class CityController extends Controller
{
    public function index()
    {
        $cities = City::all();

        // On retourne les informations des villes en JSON
        return response()->json($cities);
    }
    

   

}

