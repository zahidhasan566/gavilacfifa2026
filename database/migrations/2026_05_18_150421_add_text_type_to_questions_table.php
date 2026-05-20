<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddTextTypeToQuestionsTable extends Migration
{
    public function up()
    {
        DB::statement("ALTER TABLE questions MODIFY type ENUM('team_choice','dropdown','mcq','text') NOT NULL DEFAULT 'team_choice'");
    }

    public function down()
    {
        DB::statement("ALTER TABLE questions MODIFY type ENUM('team_choice','dropdown','mcq') NOT NULL DEFAULT 'team_choice'");
    }
}
