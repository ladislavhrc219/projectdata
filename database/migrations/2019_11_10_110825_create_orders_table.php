<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->dateTime('order_date');
            $table->boolean('confirmed');
            $table->decimal('quantity', 8, 2);
            $table->float('price_per_item', 8, 2);
            $table->timestamps();
        });

        // still missing from table though, added with VOyager
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('item_id');

            $table->foreign('item_id')->references('id')->on('items');
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('customer_id');

            $table->foreign('customer_id')->references('id')->on('customers');
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('charity_id');

            $table->foreign('charity_id')->references('id')->on('charities');
        });





    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
