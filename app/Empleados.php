<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleados extends Model
{
    protected $table = 'Empleados';

    protected $primaryKey = 'Clave_Emp';
}
