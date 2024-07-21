<?php

namespace App\Http\Controllers;

use App\Models\NeedPet;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class NeedPetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {

        try {
            $pet = Pet::findOrFail($id);
            $data = NeedPet::paginate(10);
            $data = NeedPet::where('pet_id', $pet->id)->paginate(10);
            $response = [
                'lastPage' => $data->lastPage(),
                'currentPage' => $data->currentPage(),
                'total' => $data->total(),
                'data' => $data->items()
            ];
            return response()->json($response, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
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
                'status' => 'required|string|in:pendiente,resuelta',
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
            $validatedData['user_id'] = $authUser->id;
            $validatedData['pet_id'] = $pet->id;
            $data = NeedPet::create($validatedData);
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
    public function show($id)
    {
        try {
            $data = NeedPet::findOrFail($id);
            return response()->json([
                'message' => 'Recurso obtenido exitosamente',
                'data' => $data
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $rules = [
                'name' => 'sometimes|string|max:255',
                'description' => 'sometimes|string|max:255',
                'status' => 'sometimes|string|in:pendiente,resuelta',
            ];
            $needPet = NeedPet::findOrFail($id);
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }

            $authUser = auth()->user();
            if ($authUser->id !== $needPet->user_id) {
                return response()->json([
                    'message' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_FORBIDDEN);
            }
            $validatedData = $validator->validated();
            $needPet->update($validatedData);
            return response()->json([
                'message' => 'Recurso actualizado exitosamente',
                'data' => $needPet
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        try {
            $data = NeedPet::findOrFail($id);
            $authUser = auth()->user();
            if ($authUser->id !== $data->user_id) {
                return response()->json(['message' => 'No tienes permisos para realizar esta acción'], Response::HTTP_FORBIDDEN);
            }
            $data->delete();
            return response()->json(["message" => "Necesidad de la mascota eliminada de forma exitosa"], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => "Error", 'error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
