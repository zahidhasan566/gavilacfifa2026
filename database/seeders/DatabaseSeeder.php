<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Default admin user
        if (!DB::table('users')->where('unique_code', 'ADMIN001')->exists()) {
            DB::table('users')->insert([
                'name'          => 'Admin',
                'unique_code'   => 'ADMIN001',
                'email'         => 'admin@fifa2026.com',
                'mobile'        => '01700000000',
                'password'      => Hash::make('admin123'),
                'role'     => 'admin',
                'status'        => 1,
                'created_at'    => now(),
                'updated_at'    => now(),
            ]);
        }

        // FIFA 2026 teams and group-stage matches
        $this->call(Fifa2026DataSeeder::class);

        // Default prediction questions (2 per the first upcoming match)
        if (DB::table('questions')->count() === 0) {
            $firstMatch = DB::table('match_games')->orderBy('match_date')->orderBy('id')->first();
            if ($firstMatch) {
                DB::table('questions')->insert([
                    [
                        'match_id'       => $firstMatch->id,
                        'question_text'  => 'Who will win the match today?',
                        'type'           => 'team_choice',
                        'points'         => 20,
                        'options'        => null,
                        'correct_answer' => null,
                        'is_active'      => 1,
                        'sort_order'     => 1,
                        'created_at'     => now(),
                        'updated_at'     => now(),
                    ],
                    [
                        'match_id'       => $firstMatch->id,
                        'question_text'  => 'Your team is leading 1−0 in the 88th minute. What is the smartest strategy?',
                        'type'           => 'dropdown',
                        'points'         => 10,
                        'options'        => json_encode(['Keep possession', 'Defend deep', 'Counter attack', 'Press high']),
                        'correct_answer' => null,
                        'is_active'      => 1,
                        'sort_order'     => 2,
                        'created_at'     => now(),
                        'updated_at'     => now(),
                    ],
                ]);
            }
        }

        // App settings defaults
        $settings = [
            ['key' => 'app_name',          'value' => 'FIFA World Cup 2026', 'description' => 'Application name'],
            ['key' => 'prediction_open',   'value' => '1',                   'description' => '1 = predictions open, 0 = closed'],
            ['key' => 'raffle_min_points', 'value' => '0',                   'description' => 'Minimum points to be eligible for raffle'],
        ];

        foreach ($settings as $s) {
            DB::table('app_settings')->updateOrInsert(
                ['key' => $s['key']],
                array_merge($s, ['created_at' => now(), 'updated_at' => now()])
            );
        }
    }
}
