<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PetImg extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'pet_id', // ID de la mascota.
        'image', // Ruta de la imagen de la mascota.
    ];
}
