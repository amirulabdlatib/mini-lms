<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Response;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        return StudentResource::collection($students);
    }

    public function store(StoreStudentRequest $request)
    {
        Student::create($request->validated());

        return response()->json([
            'message' => 'Student created successfully.',
        ],Response::HTTP_CREATED);
    }

    public function show(Student $student)
    {
        return StudentResource::make($student);
    }
}
