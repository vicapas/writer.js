# writer.js
####Funcionalidad para darle un efecto de escritura en tiempo real al cargar la página.

Para darle el efecto necesario a un texto simplemente se necesita añadirle la clase *writer* al contenedor. Existe la posibilidad de variar la velocidad de escritura mediante el atributo *pause*, el cual se refiere a la pausa entre una pulsación y la siguiente. Si no se especifica el atributo *pause* tendrá por defecto el valor de 100ms.

**Ejemplo**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aplicando WriterJS</title>
  </head>
  <body>
    <h1>Así funciona WriterJS</h1>
    <div class="writer" pause="50">Este texto se escribirá con pausas entre carácteres de 50ms.</div>
    <div class="writer">Por defecto el intervalo será de 100ms.</div>

    <script src="writer.js"></script>
  </body>
</html>
```
