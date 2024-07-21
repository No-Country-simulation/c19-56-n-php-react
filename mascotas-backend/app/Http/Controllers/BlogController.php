<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Blog::paginate(10);
        $response = [
            'lastPage' => $data->lastPage(),
            'currentPage' => $data->currentPage(),
            'total' => $data->total(),
            'data' => $data->items()
        ];
        return response()->json($response, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'title' => 'required|string',
                'description' => 'required|string|max:255',
                'image' => 'required|image|max:5048',
                'status' => 'required|string|in:publicado,borrado,archivado',
                'user_id' => 'required|integer|exists:users,id',
                'category_id' => 'required|integer|exists:categories,id',
                'slug' => 'nullable|string|unique:blogs,slug',
                'meta_title' => 'nullable|string|max:255',
                'meta_description' => 'nullable|string|max:255',
                'meta_keywords' => 'nullable|string',

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
            $file = $request->file('image');
            $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
            $url = Storage::disk('s3')->url($path);

            $dataToCreate = $request->only([
                'title', 'description', 'status', 'user_id', 'category_id', 'meta_title', 'meta_description', 'meta_keywords']);
            $dataToCreate['image'] = $url;
            $dataToCreate['slug'] = Str::slug($request->input('title'));
            $data = Blog::create($dataToCreate);

            return response()->json([
                'message' => 'Blogs creado exitosamente',
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
            $data = Blog::findOrFail($id);
            return response()->json($data, Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            $modelName = class_basename($e->getModel());
            return response()->json([
                'message' => "No query results for id $id of model {$modelName} "
            ], Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' =>  $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $rules = [
            'title' => 'required|string',
            'description' => 'required|string|max:255',
            'image' => 'required|image|max:5048',
            'status' => 'required|string|in:publicado,borrado,archivado',
            'user_id' => 'required|integer|exists:users,id',
            'category_id' => 'required|integer|exists:categories,id',
            'slug' => 'nullable|string|unique:blogs,slug',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'meta_keywords' => 'required|string',
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
            $data = Blog::findOrFail($id);
            if ($request->hasFile('image')) {
                $this->updateFileInS3($request, $data);
            } else {
                Log::info('No se ha enviado ningún archivo de imagen.');
            }
            $validatedData = $request->only([
                'title', 'description', 'status', 'user_id', 'category_id', 'meta_title', 'meta_description', 'meta_keywords']);
            if ($request->input('title') !== $data->title){
                $validatedData['slug'] = Str::slug($request->input('title'));
            }
            $data->update($validatedData);

            return response()->json([
                'message' => 'Blog actualizado exitosamente',
                'data' => $data
            ], Response::HTTP_OK);
        } catch (ModelNotFoundException $e) {
            $modelName = class_basename($e->getModel());
            return response()->json([
                'message' => "No query results for model {$modelName} {$id}"
            ], Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error',
                'error' =>  $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
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
                return response()->json([
                    'message' => 'Error en privilegio',
                'error' => 'No tienes permisos para realizar esta acción'
            ], Response::HTTP_UNAUTHORIZED);
            }
            $data = Blog::findOrFail($id);
            $data->delete();
            return response()->json([
                "message" => "Blogs eliminado de forma exitosa"
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Error",
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
