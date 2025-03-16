<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\Usert\UpdateUsertRequest;
use App\Models\Role;
use App\Models\User;
use App\Traits\GeneratesUniqueId;
use Inertia\Inertia;

class UserController extends Controller
{
    /** @use \App\Traits\GeneratesUniqueId */
    use GeneratesUniqueId;

    public function __construct()
    {
        // $this->middleware("auth");
        $this->model = User::class;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Role $role)
    {
        $this->crumbs = [
            ['name' => 'Tài khoản', 'url' => route('cms.users.index')]
        ];
        return Inertia::render('Users/Index', [
            'users' => $this->model::with('roles')->paginate(2),
            'trashs' => $this->model::with('roles')->onlyTrashed()->get(),
            'role' => $role::select('id', 'name')->get(),
            'crumbs' => $this->crumbs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->crumbs = [
            ['name' => 'Tài khoản', 'url' => route('cms.users.index')],
            ['name' => 'Thêm mới', 'url' => route('cms.users.create')]
        ];
        return Inertia::render('Users/Create', [
            'roles' => Role::select('id', 'name')->get(),
            'crumbs' => $this->crumbs
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUsertRequest $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
