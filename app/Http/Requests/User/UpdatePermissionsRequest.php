<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePermissionsRequest extends FormRequest
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
            "username" => "nullable|string|max:255",
            "email" => "nullable|email|max:255",
            "phone" => "nullable|numeric|min:10",
            'address' => "nullable|string|max:255",
            "gender" => "nullable|in:0,1,2",
            "password" => "nullable|min:8",
            "roles" => "nullable|array",
            "roles.*" => "exists:roles,name",
        ];
    }
}
