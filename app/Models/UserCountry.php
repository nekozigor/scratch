<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCountry extends Model
{

    public $timestamps = false;

    protected $table = 'users_countries';

    protected $guarded = [];

    public function country()
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }

    public function format()
    {
        return [
            $this->country->short_name => $this->action
        ];
    }

}
