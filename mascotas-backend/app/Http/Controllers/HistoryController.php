<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class HistoryController extends Controller
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
    public function store(Request $request, $id)
    {
        try {
            $rules = [
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'url' => 'required|file|mimes:png,jpg,jpeg',
                'status' => 'required|string|in:activo,inactivo',
            ];
            $pet = Pet::findOrFail($id);
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            $authUser = auth()->user();
            $validatedData = $validator->validated();
            $file = $request->file('url');
            $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
            $url = Storage::disk('s3')->url($path);
            $validatedData['user_id'] = $authUser->id;
            $validatedData['url'] = $url;
            $validatedData['pet_id'] = $pet->id;
            $history = History::create($validatedData);
            return response()->json($history, Response::HTTP_CREATED);
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
    public function show(History $history)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        try {
            $rules = [
                'name' => 'sometimes|string|max:255',
                'description' => 'sometimes|string|max:255',
                'url' => 'sometimes|file|mimes:png,jpg,jpeg',
                'status' => 'sometimes|string|in:activo,inactivo',
            ];
            $validator = Validator::make($request->all(), $rules);
            $authUser = auth()->user();
            $validatedData = $validator->validated();
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            $history = History::findOrFail($id);
            if ($request->hasFile('url')) {
                $this->updateFileInS3($request, $history);
            } else {
                Log::info('No se ha enviado ningún archivo de imagen.');
            }
            $validatedData['user_id'] = $authUser->id;
            $validatedData = $request->only(['name', 'description', 'status', 'user_id']);
            $history->update($validatedData);
            return response()->json($history, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
        }
    }

    private function updateFileInS3($request, $data)
    {
        if ($data->url) {
            $existingFileUrl = $data->url;
            $existingFileName = basename($existingFileUrl);
            Storage::disk('s3')->delete('uploads/' . $existingFileName);
        }
        // Subir la nueva imagen a S3
        $file = $request->file('url');
        $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
        $newImageUrl = Storage::disk('s3')->url($path);
        $data->url = $newImageUrl;
        $data->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        
        try {
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json(['message' => 'Error en privilegio', 'error' => 'No tienes permisos para realizar esta acción'], Response::HTTP_UNAUTHORIZED);
            }
            $history = History::findOrFail($id);

            $history->delete();
            return response()->json([
                'message' => 'Historia eliminada exitosamente',
                'data' => $history
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
