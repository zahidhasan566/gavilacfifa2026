<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('raffle_draws', function (Blueprint $table) {
            $table->unique(['match_id', 'user_id'], 'raffle_draws_match_user_unique');
        });
    }

    public function down(): void
    {
        Schema::table('raffle_draws', function (Blueprint $table) {
            $table->dropUnique('raffle_draws_match_user_unique');
        });
    }
};
