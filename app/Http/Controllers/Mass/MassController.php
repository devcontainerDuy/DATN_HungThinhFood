<?php

namespace App\Http\Controllers\Mass;

use App\Http\Controllers\Controller;
use App\Models\Mass;
use App\Http\Requests\Mass\StoreMassRequest;
use App\Http\Requests\Mass\UpdateMassRequest;

class MassController extends Controller
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
    public function store(StoreMassRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Mass $mass)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mass $mass)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMassRequest $request, Mass $mass)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mass $mass)
    {
        //
    }
}
