<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StorePermissionsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "username" => "required|string|max:255",
            "email" => "required|email|unique:users,email",
            "phone"=> "sometimes|nullable|numeric|min:10",
            'address' => "sometimes|nullable|string|max:255",
            "gender"=> "sometimes|nullable|in:0,1,2",
            "password" => "required|min:8",
            "roles"=> "required|array",
            "roles.*"=> "exists:roles,name",
        ];
    }
}
