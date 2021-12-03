let canales = [];
function abrirCanal() {
  var nombrecanal = prompt("Introduce el nombre del canal");
  if (nombrecanal != null && nombrecanal != "") {
    canales.push(nombrecanal);
    canales.forEach((element) => console.log(element));
    var lista = document.getElementById("listaCanales");
    var celda = document.createElement("li");
    var texto = document.createTextNode(canales[canales.length - 1]);
    lista.appendChild(celda);
    celda.appendChild(texto);
  }
}
function recorrerArray() {
  for (i = 0; i < canales.length; i++) {
    var lista = document.getElementById("listaCanales");
    var celda = document.createElement("li");
    var texto = document.createTextNode(canales[i]);
    lista.appendChild(celda);
    celda.appendChild(texto);
  }
  /* canales.forEach(
    (element) => (document.getElementById("prueba").innerHTML = element)
  );*/
}
window.onload = recorrerArray();
