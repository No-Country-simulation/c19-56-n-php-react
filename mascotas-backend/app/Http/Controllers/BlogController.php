<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        try {
            $category = Category::findOrFail($id);
            $data = Blog::where('pet_id', $category->id)->paginate(10);
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
                'title' => 'required|string',
                'description' => 'required|string|max:255',
                'image' => 'required|image|max:5048',
                'status' => 'required|string|in:publicado,borrado,archivado',
                'slug' => 'nullable|string|unique:blogs,slug',
                'meta_title' => 'nullable|string|max:255',
                'meta_description' => 'nullable|string|max:255',
                'meta_keywords' => 'nullable|string',

            ];
            $authUser = auth()->user();
            $category = Category::findOrFail($id);
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }

            $file = $request->file('image');
            $path = Storage::disk('s3')->putFile('uploads', $file, 'public');
            $url = Storage::disk('s3')->url($path);

            $dataToCreate = $validator->validated();
            $dataToCreate['user_id'] = $authUser->id;
            $dataToCreate['category_id'] = $category->id;
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
            return response()->json(
                ['message' => 'Recurso obtenido exitosamente',
                'data' => $data
            ], Response::HTTP_OK);
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
            'title' => 'required|string',
            'description' => 'required|string|max:255',
            'image' => 'required|image|max:5048',
            'status' => 'required|string|in:publicado,borrado,archivado',
            'slug' => 'required|string|unique:blogs,slug',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'meta_keywords' => 'required|string',
            ];

            $blog = Blog::findOrFail($id);
            $authUser = auth()->user();
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }

            if ($authUser->id !== $blog->user_id) {
                return response()->json([
                    'message' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_FORBIDDEN);
            }

            if ($request->hasFile('image')) {
                $this->updateFileInS3($request, $blog);
            } else {
                Log::info('No se ha enviado ningún archivo de imagen.');
            }

            if ($request->input('title') !== $blog->title){
                $validatedData['slug'] = Str::slug($request->input('title'));
            }

            $validatedData = $validator->validated();
            $blog->update($validatedData);

            return response()->json([
                'message' => 'Blog actualizado exitosamente',
                'data' => $blog
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
            $authUser = auth()->user();
            $data = Blog::findOrFail($id);
            $authUser = auth()->user();
            if ($authUser->id !== $data->user_id) {
                return response()->json(
                    ['message' => 'No tienes permisos para realizar esta acción'
                ], Response::HTTP_FORBIDDEN);
            }
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
