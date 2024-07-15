<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Validator;
use Illuminate\http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ContactController extends Controller
{

    public function index($id)
    {
        try {
            // Verifica si el usuario tiene el rol adecuado
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json([
                    'message' => 'Error en privilegio',
                    'error' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_UNAUTHORIZED);
            }

            $data = Contact::paginate(10);
            $response = [
                'lastPage' => $data->lastPage(),
                'currentPage' => $data->currentPage(),
                'total' => $data->total(),
                'data' => $data->items()
            ];
            return response()->json($response, Response::HTTP_OK);
        }catch (\Exception $e) {
            return response()->json([
                'message' => "Error",
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            // Definición de reglas de validación para los datos recibidos
            $rules = [
                'name' => 'required|string',
                'email' => 'required|string',
                'phone' => 'required|string',
                'message' => 'required|string',
                'direccion' => 'required|string',
                'status' => 'required|string|in:nuevo,enproceso,inactivo'
            ];
            // Crear un validador con los datos de la solicitud y las reglas
            $validator = Validator::make($request->all(), $rules);
            // Verificar si la validación ha fallado
            if ($validator->fails()){
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            // Crear un nuevo contacto en la base de datos con los datos recibidos
            $data = Contact::create($request->all());
            // Retornar una respuesta exitosa con el contacto creado
            return response()->json([
                'message' => 'Contacto creado exitosamente',
                'data' => $data
            ], Response::HTTP_CREATED);
        } catch (\Exception $e){
            // Manejar cualquier excepción que pueda ocurrir
            return response()->json([
                'message' => 'Error interno',
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
            // Verifica si el usuario tiene el rol adecuado
            if (!Gate::allows('validate-role', auth()->user())) {
                return response()->json([
                    'message' => 'Error en privilegio',
                    'error' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_UNAUTHORIZED);
            }
            // Busca el contacto por ID
            $data = Contact::findOrFail($id);
            // Retorna el contacto encontrado
            return response()->json($data, Response::HTTP_OK);
        }catch (ModelNotFoundException $e) {
            // Manejo de error si no se encuentra el modelo
            $modelName = class_basename($e->getModel());
            return response()->json([
                'message' => "No hay resultados de consulta por el id $id del modelo {$modelName} "
            ], Response::HTTP_NOT_FOUND);
            // Manejo de cualquier otro error
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            // Verifica si el usuario tiene el rol adecuado
            if(!Gate::allows('validate-role', auth()->user())) {
                return response()->json([
                    'message' => 'Error en privilegio',
                    'error' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_UNAUTHORIZED);
            }
            // Busca el contacto por ID
            $data = Contact::findOrFail($id);
            // Elimina el contacto
            $data->delete();

            return response()->json([
                'message' => 'Alergia eliminada de forma exitosa'
            ], Response::HTTP_OK);
        }catch (ModelNotFoundException $e) {
            // Manejo de error si no se encuentra el modelo
            $modelName = class_basename($e->getModel());
            return response()->json([
                'message' => "No hay resultados de consulta por el id $id del modelo {$modelName} "
            ], Response::HTTP_NOT_FOUND);
        }catch (\Exception $e){
            // Manejo de cualquier otro error
            return response()->json([
                'message' => "Error",
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }

    }
}
