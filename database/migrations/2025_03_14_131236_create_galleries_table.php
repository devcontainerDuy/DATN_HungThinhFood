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
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->string('image_path');
            $table->bigInteger('id_parent')->nullable()->unsigned()->index();
            $table->boolean('status')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });

        if (Schema::hasColumn('galleries', 'id_parent')) {
            Schema::table('galleries', function (Blueprint $table) {
                $table->foreign('id_parent')->references('id')->on('variants')->onDelete('restrict');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galleries');
    }
};
