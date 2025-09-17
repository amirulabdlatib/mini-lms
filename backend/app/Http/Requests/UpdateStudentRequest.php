<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class UpdateStudentRequest extends StoreStudentRequest
{
    public function rules(): array
    {
        $rules = parent::rules();

        $rules['email'] = [
            'required',
            'string',
            'email',
            Rule::unique('students')->ignore($this->student),
        ];

        return $rules;
    }
}
