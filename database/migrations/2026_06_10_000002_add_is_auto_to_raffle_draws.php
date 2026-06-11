<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('raffle_draws', function (Blueprint $table) {
            $table->boolean('is_auto')->default(false)->after('prize_points');
        });
    }

    public function down(): void
    {
        Schema::table('raffle_draws', function (Blueprint $table) {
            $table->dropColumn('is_auto');
        });
    }
};
