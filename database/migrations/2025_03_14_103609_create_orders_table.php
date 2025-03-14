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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->uuid('uid')->unique();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->string('note')->nullable();
            $table->string('ship_fee')->default(0); // phí vận chuyển
            $table->unsignedBigInteger('sale_id')->nullable(); // mã giảm giá
            $table->decimal('total', 10, 2)->default(0);
            $table->tinyInteger('order_status')->default(0); // trạng thái đơn hàng (0: đang xử lý, 1: đã xác nhận, 2: đang giao hàng, 3: đã giao hàng, 4: đã hủy, 5: trả hàng)
            $table->timestamps();
        });

        if (Schema::hasTable('orders')) {
            Schema::create('orders_has_products', function (Blueprint $table) { 
                $table->id();
                $table->foreignId('order_id')->constrained('orders')->cascadeOnDelete();
                $table->foreignId('variant_id')->constrained('variants')->cascadeOnDelete();
                $table->integer('quantity')->default(0);
                $table->decimal('unit_price', 10, 2)->default(0); // giá lúc đặt hàng
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
