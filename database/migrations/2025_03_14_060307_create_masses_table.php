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
            $table->decimal('mass_value', 6, 3)->default(0);
            $table->timestamps();
        });

        if (Schema::hasTable('variants') || Schema::hasTable('products')) {
            Schema::table('variants', function (Blueprint $table) {
                $table->foreign('mass_id')->references('id')->on('masses')->restrictOnDelete();
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
