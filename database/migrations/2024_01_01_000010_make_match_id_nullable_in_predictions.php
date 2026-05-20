<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class MakeMatchIdNullableInPredictions extends Migration
{
    public function up()
    {
        // Drop the old unique constraint
        try {
            DB::statement('ALTER TABLE predictions DROP INDEX predictions_user_id_match_id_question_id_unique');
        } catch (\Exception $e) {}

        // Drop the old foreign key
        try {
            DB::statement('ALTER TABLE predictions DROP FOREIGN KEY predictions_match_id_foreign');
        } catch (\Exception $e) {}

        // Make match_id nullable
        DB::statement('ALTER TABLE predictions MODIFY match_id BIGINT UNSIGNED NULL');

        // Re-add foreign key (nullable)
        try {
            DB::statement('ALTER TABLE predictions ADD CONSTRAINT predictions_match_id_foreign FOREIGN KEY (match_id) REFERENCES match_games(id) ON DELETE CASCADE');
        } catch (\Exception $e) {}

        // Add unique index per user+question (championship) and user+match+question (match)
        DB::statement('ALTER TABLE predictions ADD UNIQUE KEY predictions_user_question_unique (user_id, question_id)');
    }

    public function down()
    {
        try {
            DB::statement('ALTER TABLE predictions DROP INDEX predictions_user_question_unique');
        } catch (\Exception $e) {}

        DB::statement('ALTER TABLE predictions MODIFY match_id BIGINT UNSIGNED NOT NULL');

        try {
            DB::statement('ALTER TABLE predictions ADD UNIQUE KEY predictions_user_id_match_id_question_id_unique (user_id, match_id, question_id)');
        } catch (\Exception $e) {}
    }
}
