<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['title', 'description', 'image', 'status', 'user_id', 'category_id', 'slug', 'meta_title', 'meta_description', 'meta_keywords'];
}
