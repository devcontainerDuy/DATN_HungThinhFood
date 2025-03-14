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
        if (Schema::hasTable('products')) {
            if (Schema::hasTable('brands')) {
                Schema::table('products', function (Blueprint $table) {
                    $table->foreignId('brand_id')->constrained('brands')->onDelete('restrict');
                });
            }
            if (Schema::hasTable('variants')) {
                Schema::table('products', function (Blueprint $table) {
                    $table->foreignId('variants_id')->constrained('variants')->onDelete('restrict');
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
