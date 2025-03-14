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
        Schema::create('masses', function (Blueprint $table) {
            $table->id();
            $table->decimal('mass_value', 3, 2);
            $table->timestamps();
        });

        if (Schema::hasTable('variants') && Schema::hasTable('products')) {
            Schema::table('variants', function (Blueprint $table) {
                $table->foreignId('mass_id')->constrained()->onDelete('restrict');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masses');
    }
};
