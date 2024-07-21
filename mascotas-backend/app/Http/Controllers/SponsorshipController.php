<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Models\Sponsorship;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class SponsorshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json(['message' => 'Error en privilegio', 'error' => 'No tienes permisos para realizar esta acción'], Response::HTTP_UNAUTHORIZED);
            }
            $data = Sponsorship::paginate(10);
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

    public function MySponsorships()
    {
        try {
            $authUser = auth()->user();
            $data = Sponsorship::where('user_id', $authUser->id)->paginate(10);
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
                'amount' => 'required|numeric|between:0,999999.99',
                'observations' => 'nullable|string',
                'status' => 'required|string|in:en proceso,completado',
                'date_start' => 'required|date',
                'date_end' => 'required|date|after_or_equal:date_start',
            ];
            $pet = Pet::findOrFail($id);
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            $validatedData = $validator->validated();
            $authUser = auth()->user();
            $validatedData['user_id'] = $authUser->id;
            $validatedData['pet_id'] = $pet->id;
            $existingSponsorship = Sponsorship::where('pet_id', $pet->id)
                ->where('user_id', $authUser->id)
                ->where('status', 'en proceso')
                ->first();

            if ($existingSponsorship) {
                return response()->json([
                    'message' => 'Ya tienes un patrocinio en proceso para esta mascota. Por favor, edita tu patrocinio existente.'
                ], Response::HTTP_CONFLICT);
            }

            $sponsorship = Sponsorship::create($validatedData);
            return response()->json([
                'message' => 'Recurso creado exitosamente',
                'data' => $sponsorship
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
            $data = Sponsorship::findOrFail($id);
            $authUser = auth()->user();
            if ($authUser->id != $data->user_id && !Gate::allows('validate-role', $authUser)) {
                return response()->json([
                    'message' => 'Autorizacion fallida',
                    'error' => 'No tiene permiso para realizar esta accion'
                ]);
            }
            return response()->json($data, Response::HTTP_OK);
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
                'amount' => 'sometimes|numeric|between:0,999999.99',
                'observations' => 'sometimes|string',
                'status' => 'sometimes|string|in:en proceso,completado',
                'date_start' => 'sometimes|date',
                'date_end' => 'sometimes|date|after_or_equal:date_start',
            ];
            $sponsorship = Sponsorship::findOrFail($id);
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            $validatedData = $validator->validated();
            $authUser = auth()->user();
            // return $authUser;
            if ($authUser->id != $sponsorship->user_id) {
                return response()->json([
                    'message' => 'Autorizacion fallida',
                    'error' => 'No tiene permiso para realizar esta accion'
                ]);
            }
            $sponsorship->update($validatedData);
            return response()->json([
                'message' => 'Recurso actualizado exitosamente',
                'data' => $sponsorship
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
            $data = Sponsorship::findOrFail($id);
            $authUser = auth()->user();
            if ($authUser->id !== $data->user_id) {
                return response()->json(['message' => 'No tienes permisos para realizar esta acción'], Response::HTTP_FORBIDDEN);
            }
            $data->delete();
            return response()->json(["message" => "El patrocinio de la mascota eliminada de forma exitosa"], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => "Error", 'error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
