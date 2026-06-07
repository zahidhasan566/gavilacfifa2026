<?php

namespace Database\Seeders;

use App\Models\MatchGame;
use App\Models\Question;
use Illuminate\Database\Seeder;

class MatchWinnerQuestionSeeder extends Seeder
{
    public function run()
    {
        $matches = MatchGame::all();
        $added   = 0;

        foreach ($matches as $match) {
            $exists = Question::where('match_id', $match->id)
                ->where('question_text', 'Who will win the match today?')
                ->exists();

            if (!$exists) {
                Question::create([
                    'match_id'      => $match->id,
                    'question_text' => 'Who will win the match today?',
                    'type'          => 'team_choice',
                    'points'        => 10,
                    'options'       => null,
                    'correct_answer' => null,
                    'is_active'     => true,
                    'sort_order'    => 0,
                ]);
                $added++;
            }
        }

        $this->command->info("Added winner question to {$added} match(es). Skipped " . ($matches->count() - $added) . " (already existed).");
    }
}
