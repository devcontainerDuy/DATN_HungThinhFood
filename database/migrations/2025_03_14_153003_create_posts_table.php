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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('title');
            $table->string('slug');
            $table->string('image_path');
            $table->text('content');
            $table->boolean('status')->default(0);
            $table->timestamps();
        });

        if (Schema::hasTable('categore_posts')) {
            Schema::table('posts', function (Blueprint $table) {
                $table->foreign('category_id')->references('id')->on('categore_posts')->onDelete('restrict');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
