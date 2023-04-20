<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\City;
use Illuminate\View\View;

class CityController extends Controller
{
    public function index()
    {
    
        
         $cities= City::select('cities.name as city_name', 'states.name as state_name', 'countries.name as country_name') 
        ->join('states', 'cities.state_id', '=', 'states.id')
        ->join('countries', 'cities.country_id', '=', 'countries.id')
        ->get();


        return $cities;


        // On retourne les informations des villes en JSON
        // return $cities;
    }
    

   

}

