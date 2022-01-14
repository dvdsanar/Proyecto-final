let canales = [];
let mensajes = [];
let historial = [];
let usuario = "David Sánchez Ariza";
let hora = new Date();
let registroHora =
  " " +
  hora.getDate() +
  "/" +
  hora.getMonth() +
  " " +
  hora.getHours() +
  ":" +
  hora.getMinutes();

document.getElementById("usuario").innerHTML = usuario;
document.getElementById("registroHora").innerHTML = registroHora;
/*Función para crear Strings dentro del array de canales
function abrirCanal() {
  var nombrecanal = prompt("Introduce el nombre del canal");
  if (nombrecanal != null && nombrecanal != "") {
    canales.push(nombrecanal);
    canales.forEach((element) => console.log(element)); //solo para que se muestre en consola
    var lista = document.getElementById("listaCanales");
    var celda = document.createElement("li");
    celda.setAttribute("id", nombrecanal);
    celda.setAttribute("style", "cursor: pointer");
    celda.onclick = function () {
      cargarCabecera(celda.id);
    };
    var texto = document.createTextNode(canales[canales.length - 1]);
    lista.appendChild(celda);
    celda.appendChild(texto);
  }
}*/
/*Función para crear objetos dentro del array de canales*/
function abrirCanal() {
  var nombrecanal = prompt("Introduce el nombre del canal");
  if (nombrecanal != null && nombrecanal != "") {
    var canal = {
      titulo: nombrecanal,
      date: registroHora,
      mensajes: [],
    };
    canales.push(canal);
    canales.forEach((element) => console.log(element));
    var lista = document.getElementById("listaCanales");
    var celda = document.createElement("li");
    celda.setAttribute("id", canal.titulo);
    celda.setAttribute("style", "cursor: pointer");
    celda.onclick = function () {
      cargarCabecera(celda.id);
      canales.map(mostrarMensaje);
    };
    var texto = document.createTextNode(canal.titulo);
    lista.appendChild(celda);
    celda.appendChild(texto);
  }
}

function cargarCabecera(parametro1) {
  document.getElementById("cabeceraGrupo").innerHTML = parametro1;
}
function abrirMensaje() {
  var dMensaje = prompt("Introduce al usuario que quieres escribir");
  if (dMensaje != null && dMensaje != "") {
    mensajes.push(dMensaje);
    mensajes.forEach((element) => console.log(element));
    var lista = document.getElementById("mensajesDirectos");
    var celda = document.createElement("li");
    var texto = document.createTextNode(mensajes[mensajes.length - 1]);
    lista.appendChild(celda);
    celda.appendChild(texto);
  }
}

//Funcion para cargar datos iniciales
function recorrerArray() {
  for (i = 0; i < canales.length; i++) {
    var lista = document.getElementById("listaCanales");
    var celda = document.createElement("li");
    var texto = document.createTextNode(canales[i]);
    lista.appendChild(celda);
    celda.appendChild(texto);
    cargarCabecera();
  }

  /* canales.forEach(
    (element) => (document.getElementById("prueba").innerHTML = element)
  );*/
} //Histórico de mensajes
function teclaPulsada(e) {
  if (typeof e == "undefined" && window.event) {
    e = window.event;
  }

  if (
    e.keyCode == 13 &&
    document.getElementById("cabeceraGrupo").innerHTML != "Selecciona un canal"
  ) {
    canales.map(guardarUltimoMensaje);
  }
}
function guardarMensaje(value) {
  var barrTexto =
    usuario +
    " : " +
    document.getElementById("inputchat").value +
    ". " +
    registroHora;
  if (value.titulo == document.getElementById("cabeceraGrupo").innerHTML) {
    value.mensajes.push(barrTexto);
    value.mensajes.forEach((element) => console.log(element));
    canales.forEach((element) => console.log(element));
    document.getElementById("inputchat").value = "";
    mostrarMensaje(value);
  }
}
function mostrarMensaje(value) {
  if (value.titulo == document.getElementById("cabeceraGrupo").innerHTML) {
    var lista = document.getElementById("historico");
    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }
    value.mensajes.map(rellenarArrayMensajes);
  }
}
function rellenarArrayMensajes(value) {
  var lista = document.getElementById("historico");
  var celda = document.createElement("li");
  var texto = document.createTextNode(value);
  lista.appendChild(celda);
  celda.appendChild(texto);
}
function guardarUltimoMensaje(value) {
  var barrTexto =
    usuario +
    " : " +
    document.getElementById("inputchat").value +
    ". " +
    registroHora;
  if (value.titulo == document.getElementById("cabeceraGrupo").innerHTML) {
    value.mensajes.push(barrTexto);
    value.mensajes.forEach((element) => console.log(element));
    canales.forEach((element) => console.log(element));
    document.getElementById("inputchat").value = "";
    if (value.titulo == document.getElementById("cabeceraGrupo").innerHTML) {
      var lista = document.getElementById("historico");
      var celda = document.createElement("li");
      var texto = document.createTextNode(
        value.mensajes[value.mensajes.length - 1]
      );
      lista.appendChild(celda);
      celda.appendChild(texto);
    }
  }
}
window.onload = recorrerArray();
