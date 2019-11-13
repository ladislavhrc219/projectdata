<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    public function charity () {
        return $this->belongsTo(Charity::class);
    }

    public function order () {
        return $this->belongsToMany(Orders::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }



}
