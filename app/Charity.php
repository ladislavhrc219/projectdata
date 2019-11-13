<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Charity extends Model
{
    //
    // public function customer () {
    //     return $this->belongsTo(Customer::class);
    // }

    public function user () {
        return $this->belongsTo(User::class);
    }

    public function item()
    {
        return $this->hasMany(Items::class);
    }
}
