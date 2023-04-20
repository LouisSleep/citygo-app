<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
 // Définition de la table associée au modèle
 protected $table = 'states';

 // Définition des relations avec les autres tables

 protected $fillable = ['name', 'country_id', 'country_code', 'fips_code', 'iso2', 'type', 'latitude', 'longitude', 'flag', 'wikiDataId'];
 
 public function cities()
 {
     return $this->hasMany(City::class);
 }
}
