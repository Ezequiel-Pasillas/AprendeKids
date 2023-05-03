//funcion para ller texto dividiendolo por partes
function leerTexto(texto) {
    play.textContent = "Repetir";
    window.speechSynthesis.cancel();
    var partes = texto.split(".");
    var parteActual = 0;
    var parteTotal = partes.length;
    var mensaje = new SpeechSynthesisUtterance();
    
    mensaje.onend = function() {
      parteActual++;
      if (parteActual < parteTotal) {
        mensaje.text = partes[parteActual].trim() + ".";
        window.speechSynthesis.speak(mensaje);
      }
    }
  
    mensaje.text = partes[parteActual].trim() + ".";
    window.speechSynthesis.speak(mensaje);
  }


  //callarlo cuando salga
  window.addEventListener("beforeunload", function(event) {
  window.speechSynthesis.cancel();
});