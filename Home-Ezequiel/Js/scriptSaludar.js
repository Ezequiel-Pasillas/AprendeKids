function leerTexto(texto) {
        //sacar valor de un texto
        //var texto = document.getElementById("titulo_texto").textContent;
        var mensaje = new SpeechSynthesisUtterance(texto);
        var sintesisDeVoz = window.speechSynthesis;
        sintesisDeVoz.speak(mensaje);
        }