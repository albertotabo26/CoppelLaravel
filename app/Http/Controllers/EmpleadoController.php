<?php

namespace App\Http\Controllers;

use App\Empleados;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EmpleadoController extends Controller
{
    function create(Request $req) {
        try {
            $empleado = new Empleados();
            $empleado->Clave_Emp = 0;
            $empleado->nombre = $req->nombre;
            $empleado->ApPaterno = $req->apPaterno;
            $empleado->ApMaterno = $req->apMaterno;
            $empleado->FecNac = $req->fecNac;
            $empleado->Departamento = $req->departamento;
            $empleado->Sueldo = $req->sueldo;
            $empleado->estatus = 1;
            if(!$empleado->save()){
                return response()->json('mensaje', 'Error al guardar el Empleado');
            }
          return response()->json(['mensaje' => 'Empleado guardado correctamente']);

      } catch (\Exception $err) {
          return response()->json(['mensaje' => $err->getMessage()]);
      }
  }

    function get(){
        $empleados = Empleados::select('Empleados.Clave_Emp','Empleados.Nombre','Empleados.ApPaterno','Empleados.ApMaterno','Empleados.FecNac','Departamentos.Descripcion as Departamento','Empleados.Sueldo')->where('Empleados.estatus', '!=', 0)->join('Departamentos', 'Departamentos.Puesto','=','Empleados.Departamento')->get();
        return response()->json($empleados);
    }


    function delete(Request $req){
        try {
            $empleado = Empleados::find($req->Clave_Emp);
            $empleado->delete();
            return response()->json($empleado);
        } catch (\Exception $err) {
            return response()->json(["MSJ" => $err->getMessage()], 500);
        }
    }
    function getOne($Clave_Emp){
        try {
            $empleado = Empleados::find($Clave_Emp);
            return response()->json($empleado);
        } catch (\Exception $err) {
            return response()->json(["MSJ" => $err->getMessage()], 500);
        }
    }
    function update(Request $req){
        try {
            $empleado = Empleados::find($req->Clave_Emp);
            $empleado->nombre = $req->nombre;
            $empleado->ApPaterno = $req->apPaterno;
            $empleado->ApMaterno = $req->apMaterno;
            $empleado->FecNac = $req->fecNac;
            $empleado->Departamento = $req->departamento;
            $empleado->Sueldo = $req->sueldo;
            $empleado->estatus = 1;
            $empleado->save();
            return response()->json($empleado);
        } catch (\Exception $err) {
            return response()->json(["MSJ" => $err->getMessage()], 500);
        }
    }

    function findByName(Request $req){
        $name = $req->name;
        $empleados = Empleados::select('*')->where('estatus', '!=', 0)->where('nombre', 'LIKE', '%'.$name.'%')->get();
        return response()->json($empleados);
    }
}
