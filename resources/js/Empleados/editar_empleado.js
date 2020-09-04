
import empleadoService from "../services/Empleados";
import departamentoService from "../services/Departamentos";
import swal from 'sweetalert2';
import $ from 'jquery';

var alertify = require('alertify.js');

var Clave_Emp;


async function getData() {
    Clave_Emp = window.localStorage.getItem("Clave_Emp");
    console.log(Clave_Emp);

    const data = {
        Clave_Emp: Clave_Emp
    }
    const empleado = await empleadoService.getOne(data)
    console.log(empleado);
    await putValues(empleado);
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

async function putValues(emp) {

    $('#nombre').val(emp.Nombre);
    $('#apPaterno').val(emp.ApPaterno);
    $('#apMaterno').val(emp.ApMaterno);
    $('#fecha').val(emp.FecNac);
    $('#salario').val(emp.Sueldo);
}

async function send() {
    let nombre= $('#nombre').val();
    let apMaterno =$('#apMaterno').val();
    let apPaterno= $('#apPaterno').val();
    let fecNac =$('#fecha').val();
    let departamento =parseInt($('#depa').val());
    let sueldo = Number((Math.round(parseFloat($('#salario').val())*100 / 100)).toFixed(2));

    if (nombre == '' || apPaterno == '' || apMaterno == '' || fecNac == '' || departamento === -1 || salario == 0) {
        alertify.alert('Campos vacios.');
        return
    }else {
        const empleado = {
            Clave_Emp: Clave_Emp,
            nombre: nombre,
            apPaterno: apPaterno,
            apMaterno: apMaterno,
            fecNac: fecNac,
            departamento: departamento,
            sueldo: sueldo
        }
        console.log(empleado);
        let mensaje = await empleadoService.put(empleado);
        alertify.alert(mensaje.mensaje);
        window.location = '/empleados'
    }
}
async function regresar(){
    let url = "/empleados";
    document.location.href = url;
}

$(document).ready(function () {
    getData();
})
window.regresar = regresar;
window.send = send;
