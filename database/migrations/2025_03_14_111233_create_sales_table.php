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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->boolean('sale_type'); // 0: giá trị tiền giảm, 1: phần trăm giảm
            $table->text('describe')->nullable(); // Mô tả
            $table->integer('quantity')->default(0);
            $table->boolean('status')->default(1); // 0: ẩn, 1: hiện
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->timestamps();
        });

        if (Schema::hasColumn('orders','sale_id')) {
            Schema::table('orders', function (Blueprint $table) {
                $table->foreign('sale_id')->references('id')->on('sales')->onDelete('set null');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
