<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'countries';

    protected $fillable = ['name', 'country_id', 'country_code', 'fips_code', 'iso2', 'type', 'latitude', 'longitude', 'flag', 'wikiDataId'];

    // Définition des relations avec les autres tables
    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
