<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use App\Models\CategoriesHasProducts;
use App\Http\Requests\Categories\StoreCategoriesHasProductsRequest;
use App\Http\Requests\Categories\UpdateCategoriesHasProductsRequest;

class CategoriesHasProductsController extends Controller
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
    public function store(StoreCategoriesHasProductsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoriesHasProducts $categoriesHasProducts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategoriesHasProducts $categoriesHasProducts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoriesHasProductsRequest $request, CategoriesHasProducts $categoriesHasProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoriesHasProducts $categoriesHasProducts)
    {
        //
    }
}
