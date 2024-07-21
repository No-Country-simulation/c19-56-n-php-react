<?php

namespace App\Http\Controllers;

use App\Models\Lanco;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class LancoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'file' => 'required|file|max:10240',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
           
            $file = $request->file('file');
            $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
            $url = Storage::disk('s3')->url($path);
            // $dataToCreate = $request->only(['name', 'description', 'status']);
            $dataToCreate['file'] = $url;
            $data = Model::create($dataToCreate);
            return response()->json([
                'message' => 'Recurso creado exitosamente',
                'data' => $data
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Lanco $lanco)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lanco $lanco)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lanco $lanco)
    {
        //
    }
}
