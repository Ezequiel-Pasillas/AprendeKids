var play = document.getElementById("play");
const inputValor = document.getElementById('volumen');
const btnVelocidad = document.getElementById('velocidad');
var valor = 0.5; // variable que tomará el valor del input
var valor_vel = 0.5;
var pausar = document.getElementById("pausa");
var revisar = false;
function leerTexto(texto) {
    play.textContent = "Repetir";
    window.speechSynthesis.cancel();
    var partes = texto.split(".");
    var parteActual = 0;
    var parteTotal = partes.length;
    var mensaje = new SpeechSynthesisUtterance();
    
    mensaje.onend = function() {
      // Esperar a que termine la síntesis de voz antes de continuar con la siguiente parte
      parteActual++;
      if (parteActual < parteTotal) {
        mensaje.text = partes[parteActual].trim() + ".";
        window.speechSynthesis.speak(mensaje);
        inputValor.addEventListener('input', (event) => {
          valor = event.target.value;
          mensaje.volume = valor;
          window.speechSynthesis.cancel(); // Cancelar la síntesis de voz actual para actualizar la velocidad
          window.speechSynthesis.speak(mensaje);
        });
        
        btnVelocidad.addEventListener('input', (event) => {
          valor_vel = event.target.value;
          mensaje.rate = valor_vel;
          window.speechSynthesis.cancel(); // Cancelar la síntesis de voz actual para actualizar la velocidad
         window.speechSynthesis.speak(mensaje);
        });
      }
    }
    
    

    mensaje.text = partes[parteActual].trim() + ".";
    window.speechSynthesis.speak(mensaje);
  }


  //cerrar todo cuando salga
  window.addEventListener("beforeunload", function(event) {
  // Aquí puedes colocar el código que deseas ejecutar al cerrar la pestaña o cambiar de página
  window.speechSynthesis.cancel();
});


    //boton para pausar
    function pausa(){
      if(pausar.textContent == "Pausa"){
      window.speechSynthesis.pause();
      pausar.textContent = "Seguir";
      }
      else if(pausar.textContent == "Seguir"){
          window.speechSynthesis.resume();
          pausar.textContent = "Pausa";
          }
  }