<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChampionshipQuestionsSeeder extends Seeder
{
    public function run()
    {
        if (DB::table('questions')->whereNull('match_id')->count() > 0) {
            $this->command->info('Championship questions already seeded. Skipping.');
            return;
        }

        $questions = [
            ['Which team will win the FIFA World Cup 2026? 🏆',                        10, 1],
            ['Which team will be the Runner-up? 🥈',                                    8, 2],
            ['Who will win the Golden Ball as the Best Player of the Tournament? ⭐',    6, 3],
            ['Who will win the Golden Boot as the Top Scorer? ⚽',                       6, 4],
            ['Who will win the Golden Glove as the Best Goalkeeper? 🧤',                6, 5],
            ['Who will win the Best Young Player Award? 🌟',                             6, 6],
        ];

        foreach ($questions as [$text, $points, $order]) {
            DB::table('questions')->insert([
                'match_id'       => null,
                'question_text'  => $text,
                'type'           => 'text',
                'points'         => $points,
                'options'        => null,
                'correct_answer' => null,
                'is_active'      => true,
                'sort_order'     => $order,
                'created_at'     => now(),
                'updated_at'     => now(),
            ]);
        }

        $this->command->info('6 championship questions seeded.');
    }
}
