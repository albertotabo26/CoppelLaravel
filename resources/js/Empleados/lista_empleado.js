
import empleadoService from "../services/Empleados";
import departamentoService from "../services/Departamentos";
import swal from 'sweetalert2';
import $ from 'jquery';

var alertify = require('alertify.js');

let empleados = [];

async function get() {
    empleados = await empleadoService.get();

    var c = 0;
    let html = empleados
        .map(empleado => {
            c++;
            return `
            <tr>
                <td>${c}</td>
                <td>${empleado.Nombre +' ' + empleado.ApPaterno + ' ' + empleado.ApMaterno}</td>
                <td>${empleado.FecNac}</td>
                <td>${empleado.Departamento}</td>
                <td>${empleado.Sueldo}</td>
                <td><button class="btn btn-primary" onclick="editar(${empleado.Clave_Emp})">Editar</button>
                <button class="btn btn-danger" onclick="eliminar(${empleado.Clave_Emp})">Eliminar</button></td>
            </tr>
        `;
        })
        .join(" ");
    $("#tablaEmpleados").html(html);
}

function editar(Clave_Emp) {
    let url = "/empleados/editar";
    window.localStorage.setItem("Clave_Emp", Clave_Emp);
    document.location.href = url;
}

function eliminar(Clave_Emp) {

    if (confirm("¿Seguro que deseas elminiar el Empleado")){
        const data = {
            Clave_Emp: Clave_Emp
        };
        console.log(empleadoService.delete(data));
        empleadoService.delete(data);
        get();
        alertify.success('Borrado');
    }else{
        alertify.success('No se elimina');
    }
    // alertify
    //     .confirm(
    //         "¿Seguro que desea eliminar la informacion?",
    //         function(e) {
    //             if(e){

    //                 empleadoService.delete(Clave_Emp);
    //                 get();
    //                 alertify.success('Borrado');
    //             }
    //             else{
    //                 alertify.success('Okay');
    //             }

    //             //
    //         },
    //         function() {}
    //     )
    //     .set({ modal: true });

}
function nuevo(){
    let url = "/empleados/agregar";
    document.location.href = url;
}
$(document).ready(function() {
    get();

});
window.nuevo = nuevo;
window.eliminar = eliminar;
window.editar = editar;
