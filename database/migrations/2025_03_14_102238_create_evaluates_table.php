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
        Schema::create('evaluates', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('variant_id');
            $table->text('content');
            $table->tinyInteger('star')->default(0); // 1-5
            $table->boolean('status')->default(0);
            $table->timestamps();
        });

        if (Schema::hasTable('users') && (Schema::hasTable('products') || Schema::hasTable('variants'))) {
            Schema::table('evaluates', function (Blueprint $table) {
                $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
                $table->foreign('variant_id')->references('id')->on('variants')->cascadeOnDelete();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evaluates');
    }
};
