let canales = [];
let mensajes = [];
let historial = [];

function abrirCanal() {
  var nombrecanal = prompt("Introduce el nombre del canal");
  if (nombrecanal != null && nombrecanal != "") {
    canales.push(nombrecanal);
    canales.forEach((element) => console.log(element));
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
}
function teclaPulsada(e) {
  if (typeof e == "undefined" && window.event) {
    e = window.event;
  }
  var barrTexto = document.getElementById("inputchat").value;
  if (e.keyCode == 13) {
    historial.push(barrTexto);
    historial.forEach((element) => console.log(element));
    var lista = document.getElementById("historico");
    var celda = document.createElement("li");
    var texto = document.createTextNode(historial[historial.length - 1]);
    lista.appendChild(celda);
    celda.appendChild(texto);
    document.getElementById("inputchat").value = "";
  }
}
window.onload = recorrerArray();
