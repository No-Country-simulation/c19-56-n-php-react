<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Adoption extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'pet_id', // ID de la mascota que está siendo adoptada.
        'user_id', // ID del usuario que adopta la mascota.
        'status', // Estado de la adopción (por ejemplo, pendiente, completada, cancelada).
        'description', // Descripción adicional sobre la adopción.
        'date_adoption', // Fecha en la que se realiza o se completa la adopción.
        'date_return', // Fecha en la que la mascota es devuelta, si aplica.
        'date_delivered', // Fecha en la que la mascota es entregada al adoptante.
        'date_received', // Fecha en la que la mascota es recibida de vuelta, si es devuelta.
        'observations' // Observaciones adicionales sobre la adopción.
    ];
}
