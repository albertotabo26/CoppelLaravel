<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Departamentos;
use App\Http\Controllers\Controller;

class DepartamentoController extends Controller
{
    function get()
    {
        $datos = Departamentos::select('*')->where('estatus', '!=', 0)->get();
        return response()->json($datos);
        //$farmacia = Bitacoras::select('*')->where('estatus', '!=', 0)->get();
        //return response()->json($farmacia);
    }
}
