<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDeletedAtToPetImgsTable extends Migration
{
    public function up()
    {
        Schema::table('pet_imgs', function (Blueprint $table) {
            $table->softDeletes(); // Agrega la columna deleted_at
        });
    }

    public function down()
    {
        Schema::table('pet_imgs', function (Blueprint $table) {
            $table->dropSoftDeletes(); // Elimina la columna deleted_at
        });
    }
}