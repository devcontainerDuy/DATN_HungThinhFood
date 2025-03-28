<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRoleRequest;
use App\Http\Requests\User\UpdateRoleRequest;
use App\Models\Permissions;
use App\Models\Role;
use Inertia\Inertia;

class RoleController extends Controller
{
    protected $permissions;
    public function __construct()
    {
        $this->model = Role::class;
        $this->permissions = Permissions::class;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Roles/Index', [
            'roles' => $this->model::with('permissions')->cursorPaginate(20)->withQueryString(),
            'crumbs' => [
                ['name' => 'Tài khoản', 'url' => route('cms.users.index')],
                ['name' => 'Danh sách vai trò', 'url' => route('cms.roles.index')]
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Roles/Create', [
            'permissions' => $this->permissions::with('roles')->select('id', 'name')->get(),
            'crumbs' => [
                ['name' => 'Tài khoản', 'url' => route('cms.users.index')],
                ['name' => 'Danh sách vai trò', 'url' => route('cms.roles.index')],
                ['name' => 'Thêm vai trò', 'url' => route('cms.roles.create')]
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        $this->data = $request->validated();
        $this->instance = $this->model::create(['name' => $this->data['name'], 'guard_name' => $this->data['guard_name']]);
        if (
            $this->givePermissionTo($this->instance, $this->data['permissions'])
        ) {
            return response()->json(['check' => true, 'message' => 'Thêm vai trò thành công!'], 201);
        }
        return response()->json(['check' => false, 'message' => 'Thêm vai trò thất bại!'], 401);
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
        $this->instance = $this->model::find($id)->load('permissions');
        return Inertia::render('Roles/Edit', [
            'roles' => $this->instance,
            'permissions' => $this->permissions::with('roles')->select('id', 'name')->get(),
            'crumbs' => [
                ['name' => 'Tài khoản', 'url' => route('cms.users.index')],
                ['name' => 'Danh sách vai trò', 'url' => route('cms.roles.index')],
                ['name' => 'Chỉnh sửa vai trò', 'url' => route('cms.roles.edit', $id)]
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, string $id)
    {
        $this->data = $request->validated();
        $this->instance = $this->model::find($id);
        try {
            if (!empty($this->data['permissions'])) {
                $this->givePermissionTo($this->instance, $this->data['permissions']);
            } else
                unset($this->data['permissions']);

            $this->instance->update($this->data);
            return response()->json(['check' => true, 'message' => 'Cập nhật vai trò thành công!', 'data' => $this->instance], 200);
        } catch (\Throwable $e) {
            return response()->json(['check' => false, 'message' => $e->getMessage()], 401);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $this->model::find($id)->delete();
            return response()->json(['check' => true, 'message' => 'Xóa vai trò thành công!'], 200);
        } catch (\Throwable $e) {
            return response()->json(['check' => false, 'message' => $e->getMessage()], 401);
        }
    }


    /**
     * Give permission to role
     *
     * @param $roleId
     * @param $permissions
     * @return bool
     */
    private function givePermissionTo($roleId, $permissions)
    {
        if (isset($permissions)) {
            $roleId->syncPermissions($permissions);
            return true;
        }
        return false;
    }
}
