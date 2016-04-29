/*
* Script que permite simular la escritura en tiempo real para un elemento
* Creado en 29/04/2016
* @author: kamarena
*/

window.onload = iniciarWriter();

function iniciarWriter() {
  var elemento = document.getElementsByClassName('writer');

  for (var i = 0; i < elemento.length; i++) {
    var pause = elemento[i].getAttribute('pause');
    if (pause == null) pause = 100;
    escribir(elemento[i], pause)
  }
}

function escribir(elemento, pause) {
  var texto = elemento.innerHTML;
  elemento.innerHTML = ''; // se borra al iniciarWriter
  var posicion = 0;
  var escritura = setInterval(function() {
    if (posicion == texto.length) {
      elemento.innerHTML = texto;
      clearInterval(escritura);
    } else {
      elemento.innerHTML = texto.substring(0, posicion) + '|';
      posicion++;
    }
  }, pause);
}
