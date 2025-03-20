<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\Role;
use App\Models\User;
use App\Traits\GeneratesUniqueId;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserController extends Controller
{
    /** @use \App\Traits\GeneratesUniqueId */
    use GeneratesUniqueId;
    protected $role;

    public function __construct()
    {
        // $this->middleware("auth");
        $this->model = User::class;
        $this->role = Role::class;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => $this->model::with('roles')->paginate(20),
            'trashs' => $this->model::with('roles')->onlyTrashed()->get(),
            'role' => $this->role::select('id', 'name')->get(),
            'crumbs' => [
                ['name' => 'Tài khoản', 'url' => route('cms.users.index')]
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Users/Create', [
            'roles' => $this->role::select('id', 'name')->get(),
            'crumbs' => [
                ['name' => 'Tài khoản', 'url' => route('cms.users.index')],
                ['name' => 'Thêm mới', 'url' => route('cms.users.create')]
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $this->data = $request->validated();
        // dd($this->data);
        $this->data['uid'] = $this->createCodeUser();
        $this->data['password'] = Hash::make($this->data['password']);
        $this->instance = $this->model::create($this->data);
        $this->instance->syncRoles(['name' => $this->data['roles']]);

        if ($this->instance) {
            // $dataMail = [
            //     'name' => $request->input('name'),
            //     'email' => $request->input('email'),
            //     'password' => $password,
            // ];
            // Mail::to($request->input('email'))->send(new createUser($dataMail));
            return response()->json(['check' => true, 'message' => 'Tạo tài khoản thành công!'], 201);
        }
        return response()->json(['check' => false, 'message' => 'Tạo tài khoản thất bại!'], 400);
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
        // dd($this->model::with('roles')->where("uid", $id));
        return Inertia::render('Users/Edit', [
            'users' => $this->model::with('roles')->where("uid", $id)->first(),
            'roles' => $this->role::select('id', 'name')->get(),
            'crumbs' => [
                ['name' => 'Tài khoản', 'url' => route('cms.users.index')],
                ['name' => 'Chỉnh sửa', 'url' => route('cms.users.edit', $id)]
            ]

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        $this->data = $request->validated();
        $this->instance = $this->model::find($id);
        try {
            if (!empty($this->data['roles'])) {
                $this->instance->syncRoles($this->data['roles']);
            } else unset($this->data['roles']);

            if (!empty($this->data['password'])) {
                $this->data['password'] = Hash::make($this->data['password']);
            } else unset($this->data['password']);
            
            $this->instance->update($this->data);
            return response()->json(['check' => true, 'message' => 'Cập nhật tài khoản thành công!'], 201);
        } catch (\Throwable $e) {
            return response()->json(['check' => false, 'message' => $e->getMessage()], 400);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $this->model::find($id)->delete();
            return response()->json(['check' => true, 'message' => 'Xóa tài khoản thành công!'], 201);
        } catch (\Throwable $e) {
            return response()->json(['check' => false, 'message' => $e->getMessage()], 400);
        }
    }
}
