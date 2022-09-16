// Documento para el control de la pagina de registro de Clientes

// Creacion del objeto para formar el JSON
const jsonClientes = {};
// Creacion de arreglo para meter los datos de los clientes
var listaPrincipal = [];
var datosCliente = {};

document.getElementById("Registrar").addEventListener("click", RegClient);

function RegClient(evt){
    evt.preventDefault(); // Previene la recarga de la pagina
    datosCliente = {};

    const uName = document.querySelector("#usrName").value;
    const uTel = document.querySelector("#usrTelef").value;
    const uCedula = document.querySelector("#usrCed").value;
    const uMail = document.querySelector("#usrMail").value;
    const uDir = document.querySelector("#usrDir").value;
    const uUsr = document.querySelector("#usrUsuario").value;
    const tabla = document.querySelector(".tabla");

    //Creacion de fila para guardar todos los datos del cliente
    const fila = document.createElement("TR"); 
    // Creacion de casilla 
    const cName = document.createElement("TD");
    cName.innerText = uName;
    fila.appendChild(cName);
    const cTel = document.createElement("TD");
    cTel.innerText = uTel;
    fila.appendChild(cTel);
    const cCed = document.createElement("TD");
    cCed.innerText = uCedula;
    fila.appendChild(cCed);
    const cMail = document.createElement("TD");
    cMail.innerText = uMail;
    console.log(cMail);
    fila.appendChild(cMail);
    const cDir = document.createElement("TD");
    cDir.innerText = uDir;
    fila.appendChild(cDir);
    const cUsr = document.createElement("TD");
    cUsr.innerText = uUsr;
    fila.appendChild(cUsr);
    // Se agregan los datos del cliente a la tabla
    tabla.appendChild(fila);

    // Se agregan los datos de cada cliente a un json
    datosCliente.nombre = uName;
    datosCliente.telefono = uTel;
    datosCliente.cedula = uCedula;
    datosCliente.email = uMail;
    datosCliente.direccion = uDir;
    datosCliente. usuario = uUsr;

    //agregar datosCliente a la lista principal y actualizar el json con la clave y la lista principal
    listaPrincipal.push(datosCliente);
    jsonClientes.clientes = listaPrincipal;
    var jsonRes = JSON.stringify(jsonClientes);
    console.log(jsonRes);
    // Se limpia el formulario para volverlo a utilizar
    formRegistro.reset();
}