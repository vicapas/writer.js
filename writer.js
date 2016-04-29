/*
* Script que permite simular la escritura en tiempo real para un elemento
* Creado en 29/04/2016
* @author: kamarena
*/

window.onload = iniciarWriter(); // inicia js cuando la página está cargada


// se ocupa de los procesos de carga del js
function iniciarWriter() {

  // obtiene los elementos de la página que tienen la clase writer
  var elementos = document.getElementsByClassName('writer');


  // itera los elementos para modificar el comportamiento de cada uno de ellos
  for (var i = 0; i < elementos.length; i++) {
    escribir(elementos[i]); // ejecuta la animación de escritura
  }

}


// se ocupa de darle el efecto al texto de estar escribiendo en tiempo real
function escribir(elemento) {

  var interval = elemento.getAttribute('interval'); // atributo interval
  var delay = elemento.getAttribute('delay'); // atributo delay

  if (interval == null) interval = 100; // por defecto pause vale 100sm
  if (delay == null) delay = 0; // por defecto delay vale 0ms

  var texto = elemento.innerHTML; // obtiene el texto que contiene
  elemento.innerHTML = ''; // se borra al iniciarWriter
  var posicion = 0; // posición inicial del puntero

  // se establece retardo según el atributo
  setTimeout(function() {
    // se inicia el intervalo para ir añadiendo las letras
    var escritura = setInterval(function() {
      if (posicion < texto.length) {
        // se introduce la parte de la cadena que corresponde en cada posición
        elemento.innerHTML = texto.substring(0, posicion) + '|';
        posicion++;
      } else {
        elemento.innerHTML = texto;
        clearInterval(escritura); // se sale del intervalo por haber llegado al fin
      }
    }, interval);
  }, delay);

}