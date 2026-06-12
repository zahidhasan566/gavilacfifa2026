<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class FixTeamChoiceZeroPoints extends Migration
{
    public function up()
    {
        // Fix team_choice questions accidentally saved with 0 points
        DB::statement("UPDATE questions SET points = 10 WHERE type = 'team_choice' AND points = 0");

        // Re-score correct predictions that got 0 points due to the above bug
        DB::statement("
            UPDATE predictions p
            JOIN questions q ON p.question_id = q.id
            SET p.points_earned = 10
            WHERE q.type = 'team_choice'
              AND p.is_correct = 1
              AND p.points_earned = 0
        ");
    }

    public function down()
    {
        //
    }
}
