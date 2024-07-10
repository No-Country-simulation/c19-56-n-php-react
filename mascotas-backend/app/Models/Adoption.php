<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Adoption extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['pet_id', 'user_id', 'status', 'description', 'date_adoption', 'date_return', 'date_delivered', 'date_received', 'observations'];
}
