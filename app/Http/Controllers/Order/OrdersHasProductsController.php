<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\OrdersHasProducts;
use App\Http\Requests\Order\StoreOrdersHasProductsRequest;
use App\Http\Requests\Order\UpdateOrdersHasProductsRequest;

class OrdersHasProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrdersHasProductsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(OrdersHasProducts $ordersHasProducts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrdersHasProducts $ordersHasProducts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrdersHasProductsRequest $request, OrdersHasProducts $ordersHasProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrdersHasProducts $ordersHasProducts)
    {
        //
    }
}
