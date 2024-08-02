<?php

namespace App\Http\Controllers;

use App\Models\Race;
use App\Models\Specie;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Response;

class RaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $specie_id = $request->input('specie_id');
        $query = Race::whereNull('deleted_at');
        if ($specie_id) {
            $query->where('specie_id', $specie_id);
        }
        $data = $query->get();
        return response()->json($data, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'name' => 'required|string|unique:races,name',
                'description' => 'required|string',
                'specie_id' => 'required|integer|exists:species,id',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json([
                    'message' => 'Error en privilegio',
                    'error' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_UNAUTHORIZED);
            }

            $specieExists = Specie::where('id', $request->input('specie_id'))->exists();
            if (!$specieExists) {
                return response()->json([
                    'message' => 'El ID de especie proporcionado no existe.',
                ], Response::HTTP_NOT_FOUND);
            }
            $dataToCreate = $request->only(['name', 'description', 'specie_id']);

            $race = Race::create($dataToCreate);
            return response()->json([
                'message' => 'Raza creada exitosamente',
                'data' => $race
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error',
                'error' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $data = Race::findOrFail($id);
            return response()->json($data, Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            $modelName = class_basename($e->getModel());
            return response()->json([
                'message' => "No query results for id $id of model {$modelName} "
            ], Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' =>  $e->getMessage()
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
                'name' => 'sometimes|required|string|unique:races,name,' . $id,
                'description' => 'sometimes|required|string',
                'specie_id' => 'sometimes|integer|exists:species,id',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json([
                    'message' => 'Error en privilegio',
                    'error' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_UNAUTHORIZED);
            }
            $data = Race::findOrFail($id);
            $specieExists = Specie::where('id', $request->input('specie_id'))->exists();
            if (!$specieExists) {
                return response()->json([
                    'message' => 'El ID de especie proporcionado no existe.',
                ], Response::HTTP_NOT_FOUND);
            }

            $dataToUpdate = $request->only(['name', 'description', 'specie_id']);
            $data->update($dataToUpdate);

            return response()->json([
                'message' => 'Raza actualizada exitosamente',
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
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json(['message' => 'Error en privilegio', 'error' => 'No tienes permisos para realizar esta acción'], Response::HTTP_UNAUTHORIZED);
            }
            $data = Race::findOrFail($id);
            $data->delete();
            return response()->json(["message" => "Raza eliminada de forma exitosa"], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => "Error", 'error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
