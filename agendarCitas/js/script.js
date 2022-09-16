// Documento para el control de la pagina de registro de Clientes

// Creacion del objeto para formar el JSON
const jsonCitas = {};
// Creacion de arreglo para meter los datos de los clientes
var listaPrincipal = [];
var datosCita = {};


//const fs = require("fs");

document.getElementById("Registrar").addEventListener("click", RegClient);

function RegClient(evt){
    evt.preventDefault(); // Previene la recarga de la pagina
    datosCliente = {};

    const uName = document.querySelector("#nombre").value;
    const uPlaca = document.querySelector("#placa").value;
    const uSuc = document.querySelector("#sucursal").value;
    const uServ = document.querySelector("#servicio").value;
    const uFecha = document.querySelector("#fecha").value;

    // Se agregan los datos de cada cliente a un json
    datosCita.nombre = uName;
    datosCita.placa = uPlaca;
    datosCita.sucursal = uSuc;
    datosCita.servicio = uServ;
    datosCita.fecha = uFecha;

    //agregar datosCliente a la lista principal y actualizar el json con la clave y la lista principal
    listaPrincipal.push(datosCita);
    jsonCitas.citas = listaPrincipal;
    var jsonRes = JSON.stringify(jsonCitas); // variable que se envia a la base de datos
    console.log(jsonRes);
    // Se limpia el formulario para volverlo a utilizar
    formRegistro.reset();

    // si el usuario y la contrasenha coinciden, redireccionar a la pagina de citas
}

//falta la parte de enviar los datos de la cita al correo
