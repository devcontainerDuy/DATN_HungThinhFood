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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id'); // mã đơn hàng
            $table->string('transaction_id')->nullable(); // mã giao dịch ( Momo, ...)
            $table->string('payment_method'); // phương thức thanh toán (COD, Momo, ...)
            $table->tinyInteger('payment_status')->default(0); // trạng thái thanh toán (0: chưa thanh toán, 1: đã thanh toán)
            $table->decimal('amount', 10, 2)->default(0); // số tiền thanh toán
            $table->timestamps();
        });

        if (Schema::hasTable('payments') && Schema::hasTable('orders')) {
            Schema::table('payments', function (Blueprint $table) {
                $table->foreign('order_id')->references('id')->on('orders')->cascadeOnDelete();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
