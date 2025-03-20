<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Traits\GeneratesUniqueId;

class DatabaseSeeder extends Seeder
{
    use GeneratesUniqueId;
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $role = Role::create(['name' => 'Super Admin']);
        Role::create(['name' => 'Manager']);
        Role::create(['name' => 'Staff']);
        Role::create(['name' => 'Support']);

        $permission = Permission::create(['name' => 'show_product']);
        Permission::create(['name' => 'create_product'])->assignRole($role);
        Permission::create(['name' => 'update_product'])->assignRole($role);
        Permission::create(['name' => 'delete_product'])->assignRole($role);

        Permission::create(['name' => 'show_category'])->assignRole($role);
        Permission::create(['name' => 'create_category'])->assignRole($role);
        Permission::create(['name' => 'update_category'])->assignRole($role);
        Permission::create(['name' => 'delete_category'])->assignRole($role);

        Permission::create(['name' => 'show_brand'])->assignRole($role);
        Permission::create(['name' => 'create_brand'])->assignRole($role);
        Permission::create(['name' => 'update_brand'])->assignRole($role);
        Permission::create(['name' => 'delete_brand'])->assignRole($role);

        $role->givePermissionTo($permission);

        User::create([
            'uid' => $this->createCodeUser(),
            'username' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345678'),
        ])->assignRole($role);

        User::create([
            'uid' => $this->createCodeUser(),
            'username' => 'Manager',
            'email' => 'manager@gmail.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'uid' => $this->createCodeUser(),
            'username' => 'Staff',
            'email' => 'staff@gmail.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'uid' => $this->createCodeUser(),
            'username' => 'Support',
            'email' => 'support@gmail.com',
            'password' => Hash::make('12345678'),
        ]);
    }
}
