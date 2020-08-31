<?php

namespace App\Http\Controllers;
use App\Sc\Sc;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;


class TestController extends BaseController
{
    protected $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function index(){
        return 'test';
    }

    public function sc(Sc $sc)
    {
        return $sc->change(10);
    }

    public function view(Redirect $request)
    {
        //dd($this->name);
        return view('test');
    }

}