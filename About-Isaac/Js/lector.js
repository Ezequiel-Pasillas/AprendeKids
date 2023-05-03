var play = document.getElementById("play");
const inputValor = document.getElementById('volumen');
const btnVelocidad = document.getElementById('velocidad');
var valor = 0.5; // variable que tomará el valor del input
var valor_vel = 0.5;
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
        });
        btnVelocidad.addEventListener('input', (event) => {
          valor_vel = event.target.value;
          mensaje.rate = valor_vel;
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
var pausar = document.getElementById("pausa");
var revisar = false;
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

