<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Models\Race;
use App\Models\Specie;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Pet::paginate(10);
        $response = [
            'lastPage' => $data->lastPage(),
            'currentPage' => $data->currentPage(),
            'total' => $data->total(),
            'data' => $data->items()
        ];
        return response()->json($response, Response::HTTP_OK);
    }
    public function indexAll()
    {
        $data = Pet::with(['histories', 'race', 'specie', 'imgenes'])->get();
        return response()->json($data, Response::HTTP_OK);
    }

    public function maxAge()
    {
        $data = Pet::max('age');
        return response()->json($data, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->merge(['race' => strtolower($request->race)]);
            $request->merge(['specie' => strtolower($request->specie)]);
            $rules = [
                'name' => 'required|string|max:255',
                'race' => 'required|string',
                'specie' => 'required|string',
                'size' => 'required|string|in:pequeño,mediano,grande',
                'weight' => 'required|numeric|min:0',
                'age' => 'required|integer|min:0',
                'personality' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'image' => 'required|image|max:5048',
                'status' => 'required|string|in:disponible,adoptado',
                'specie' => 'required|string',
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
            $specie = Specie::firstOrCreate(['name' => $request->specie]);
            $race = Race::firstOrCreate(['name' => $request->race, 'specie_id' => $specie->id]);
            $file = $request->file('image');
            $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
            $url = Storage::disk('s3')->url($path);
            $dataToCreate = $request->only(['name', 'size', 'weight', 'age', 'personality', 'status', 'description']);
            $dataToCreate['image'] = $url;
            $dataToCreate['race_id'] = $race->id;
            $dataToCreate['specie_id'] = $specie->id;
            $data = Pet::create($dataToCreate);
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
            $data = Pet::with(['histories', 'race', 'specie', 'imgenes'])->findOrFail($id);
            return response()->json($data, Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            $modelName = class_basename($e->getModel());
            return response()->json(['message' => "No query results for id $id of model {$modelName} "], Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error interno', 'error' =>  $e->getMessage()], Response::HTTP_BAD_REQUEST);
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
                'race_id' => 'sometimes|integer|exists:races,id',
                'size' => 'sometimes|string|in:pequeño,mediano,grande',
                'weight' => 'sometimes|numeric|min:0',
                'age' => 'sometimes|integer|min:0',
                'personality' => 'sometimes|string|max:255',
                'image' => 'sometimes|image|max:5048',
                'status' => 'sometimes|string|in:disponible,adoptado',
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
            $data = Pet::findOrFail($id);
            if ($request->hasFile('image')) {
                $this->updateFileInS3($request, $data);
            } else {
                Log::info('No se ha enviado ningún archivo de imagen.');
            }
            $specieExists = Specie::where('id', $request->input('specie_id'))->exists();
            if (!$specieExists) {
                return response()->json([
                    'message' => 'El ID de especie proporcionado no existe.',
                ], Response::HTTP_NOT_FOUND);
            }
            $validatedData = $request->only(['name', 'race_id', 'size', 'weight', 'age', 'personality', 'status', 'specie_id']);
            $data->update($validatedData);

            return response()->json([
                'message' => 'Mascota actualizada exitosamente',
                'data' => $data
            ], Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            $modelName = class_basename($e->getModel());
            return response()->json(['message' => "No query results for model {$modelName} {$id}"], Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error', 'error' =>  $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    private function updateFileInS3($request, $data)
    {
        if ($data->image) {
            $existingFileUrl = $data->image;
            $existingFileName = basename($existingFileUrl);
            Storage::disk('s3')->delete('uploads/' . $existingFileName);
        }

        // Subir la nueva imagen a S3
        $file = $request->file('image');
        $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
        $newImageUrl = Storage::disk('s3')->url($path);
        $data->image = $newImageUrl;
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
            $data = Pet::findOrFail($id);
            $data->delete();
            return response()->json(["message" => "Mascota eliminada de forma exitosa"], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => "Error", 'error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
