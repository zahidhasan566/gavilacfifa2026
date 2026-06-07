<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddExternalIdToMatchGames extends Migration
{
    public function up()
    {
        Schema::table('match_games', function (Blueprint $table) {
            $table->unsignedBigInteger('external_id')->nullable()->unique()->after('id');
        });
    }

    public function down()
    {
        Schema::table('match_games', function (Blueprint $table) {
            $table->dropColumn('external_id');
        });
    }
}
