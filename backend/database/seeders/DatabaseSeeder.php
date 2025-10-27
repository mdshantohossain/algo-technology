<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
           JobSeeder::class,
           PlanSeeder::class,
           ProjectSeeder::class,
           ServiceSeeder::class,
           TechnologySeeder::class,
        ]);

        User::firstOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Test User',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ]
        );
    }
}
