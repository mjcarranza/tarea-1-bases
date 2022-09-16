document.getElementById("btn__iniciar-sesion").addEventListener("click", entrar);
window.addEventListener("resize", anchoPagina);

// Creacion del objeto para formar el JSON
const jsonClientes = {};
// Creacion de arreglo para meter los datos de los clientes
var listaPrincipal = [];
var datosCliente = {};


// Declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja__trasera_register = document.querySelector(".caja__trasera-register");
var caja__trasera_login = document.querySelector(".caja__trasera-login");


function anchoPagina(){
    if(window.innerWidth>850){
        caja__trasera_login.style.display = "block";
        caja__trasera_register.style.display = "block";
    }else{
        caja__trasera_register.style.display = "block";
        caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

function entrar(e){
    /**Se abre el archivo y se verifica si el ususario y correo ya existen
     * Si existe al menos uno, enviar mensaje de error (puede ser mostrando un mensaje de error en letras rojas)
     * Si ninguno existe ninguno, escribir en el archivo de registro.json los datos insertados
     */
    e.preventDefault();

    const user = document.querySelector("#usuarioLog").value;
    const pass = document.querySelector("#contraLog").value;

    // Se agregan los datos de cada cliente a un json
    datosCliente.nombre = user;
    datosCliente.telefono = pass;

    //agregar datosCliente a la lista principal y actualizar el json con la clave y la lista principal
    listaPrincipal.push(datosCliente);
    jsonClientes.clientes = listaPrincipal;
    var jsonRes = JSON.stringify(jsonClientes); // variable que se envia a la base de datos
    console.log(jsonRes);
    // Se limpia el formulario para volverlo a utilizar
    formRegistro.reset();
}