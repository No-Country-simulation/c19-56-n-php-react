<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Volunteering extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [ 'user_id', 'name', 'description', 'status', 'date_start', 'date_end', 'observations'];
}
