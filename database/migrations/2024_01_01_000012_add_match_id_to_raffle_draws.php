<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMatchIdToRaffleDraws extends Migration
{
    public function up()
    {
        Schema::table('raffle_draws', function (Blueprint $table) {
            $table->unsignedBigInteger('match_id')->nullable()->after('user_id');
            $table->foreign('match_id')->references('id')->on('match_games')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('raffle_draws', function (Blueprint $table) {
            $table->dropForeign(['match_id']);
            $table->dropColumn('match_id');
        });
    }
}
