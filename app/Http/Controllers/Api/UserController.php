<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\UserCountry;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function setAction()
    {
        UserCountry::updateOrCreate([
            'user_id' => Auth()->user()->id,
            'country_id' => Country::firstOrCreate(request('country'))->id,
            'action' => request('action')
        ]);
        return response()->json(['message' => 'ok']);
    }

    public function getActions()
    {
        return UserCountry::where('user_id', Auth()->user()->id)->get()->map->format();
    }

}