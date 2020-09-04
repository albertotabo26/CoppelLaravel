import empleadoService from "../services/Empleados"
import departamentoService from "../services/Departamentos";

import $ from 'jquery';
import alertify from "alertify.js";
// import alertify from "alertify.js";


async function getDepartamentos() {
    const departamentos = await departamentoService.get();
     let html = departamentos
         .map(depa => {
            console.log(depa.Puesto);
             return `
       <option name="Departamento" id="${depa.Puesto}" value="${depa.Puesto}">
           ${depa.Descripcion}
       </option>
       `;
         })
         .join(" ");
     $("#depa").append(html);
 }


async function send() {
    let nombre = $('#nombre').val();
    let apPaterno = $('#apPaterno').val();
    let apMaterno = $('#apMaterno').val();
    let fecNac = $('#fecha').val();
    let departamento = parseInt($('#depa').val());
    let sueldo = Number((Math.round(parseFloat($('#salario').val())*100 / 100)).toFixed(2));


    if (nombre == '' || apPaterno == '' || apMaterno == '' || fecNac == '' || departamento === -1 || salario == 0) {
        alertify.alert('Campos vacios.');
        return
    }else {
        const empleado = {
            nombre: nombre,
            apPaterno: apPaterno,
            apMaterno: apMaterno,
            fecNac: fecNac,
            departamento: departamento,
            sueldo: sueldo
        }
        console.log(empleado.salario);
        if (confirm("¿Estos son los datos del Empleado?")){
            let mensaje = await empleadoService.create(empleado)
            alertify.alert(mensaje.mensaje)
            console.log(mensaje);
            let url = "/empleados/agregar";
            document.location.href = url;
        }else{
            alertify.success('No se guardo');
        }

        // window.location = '/empleados';
    }
}

async function regresar(){
    let url = "/empleados";
    document.location.href = url;
}
$(document).ready(function() {

    getDepartamentos();
});

window.regresar = regresar;
window.send = send;
