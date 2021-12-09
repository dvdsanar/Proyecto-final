let canales = [];

function abrirCanal() {
  var nombrecanal = prompt("Introduce el nombre del canal");
  if (nombrecanal != null && nombrecanal != "") {
    canales.push(nombrecanal);
    canales.forEach((element) => console.log(element));
    var lista = document.getElementById("listaCanales");
    var celda = document.createElement("li");
    celda.setAttribute("id", nombrecanal);
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
let mensajes = [];
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

window.onload = recorrerArray();
