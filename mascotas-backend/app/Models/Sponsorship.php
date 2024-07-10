<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sponsorship extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['pet_id', 'user_id', 'amount', 'observations', 'status', 'date_start', 'date_end'];
}
