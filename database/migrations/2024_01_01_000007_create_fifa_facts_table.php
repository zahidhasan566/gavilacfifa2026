<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFifaFactsTable extends Migration
{
    public function up()
    {
        Schema::create('fifa_facts', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['player', 'news'])->default('news');
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->string('link')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('fifa_facts');
    }
}
