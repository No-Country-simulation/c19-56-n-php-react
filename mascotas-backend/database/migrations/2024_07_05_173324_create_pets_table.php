<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('race_id');
            $table->unsignedBigInteger('specie_id');
            $table->string('size');
            $table->decimal('weight', 5, 2);
            $table->integer('age');
            $table->text('personality')->nullable();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->string('status');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('race_id')->references('id')->on('races')->onDelete('cascade');
            $table->foreign('specie_id')->references('id')->on('species')->onDelete('cascade');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
