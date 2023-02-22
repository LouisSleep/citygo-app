<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\City::factory(40)->create();
        // \App\Models\City::factory()->create([
        //     'cityName' => 'Paris',
        //     'country' => 'France',
        // ]);
    }
}
