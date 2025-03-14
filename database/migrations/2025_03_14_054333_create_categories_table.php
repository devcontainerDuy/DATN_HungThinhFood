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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->integer('position');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        if (Schema::hasTable('categories') && Schema::hasTable('products')) {
            Schema::create('categories_has_products', function (Blueprint $table) {
                $table->foreignId('category_id')->constrained()->restrictOnDelete();
                $table->foreignId('product_id')->constrained()->restrictOnDelete();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
        if (Schema::hasTable('categories_has_products')) {
            Schema::dropIfExists('categories_has_products');
        }
    }
};
