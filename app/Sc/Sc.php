<?php

namespace App\Sc;

class Sc
{

    protected $course = 27;

    public function __construct($course)
    {
        $this->course = $course;
    }

    public function change($value)
    {
        return $value * $this->course;
    }

}