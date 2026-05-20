<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchGamesTable extends Migration
{
    public function up()
    {
        Schema::create('match_games', function (Blueprint $table) {
            $table->id();
            $table->string('group_name', 5)->nullable();
            $table->integer('round_number')->default(1);
            $table->unsignedBigInteger('team1_id');
            $table->unsignedBigInteger('team2_id');
            $table->string('venue')->nullable();
            $table->date('match_date');
            $table->time('match_time')->nullable();
            $table->enum('status', ['upcoming', 'live', 'completed'])->default('upcoming');
            $table->integer('team1_score')->nullable();
            $table->integer('team2_score')->nullable();
            $table->integer('team1_half1')->nullable();
            $table->integer('team1_half2')->nullable();
            $table->integer('team2_half1')->nullable();
            $table->integer('team2_half2')->nullable();
            $table->timestamps();

            $table->foreign('team1_id')->references('id')->on('teams');
            $table->foreign('team2_id')->references('id')->on('teams');
        });
    }

    public function down()
    {
        Schema::dropIfExists('match_games');
    }
}
