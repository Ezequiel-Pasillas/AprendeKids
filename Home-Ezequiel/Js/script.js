//Variable 
let identificadorTiempoDeEspera


//Se manda a llamar a la funcion
temporizadorDeRetraso();

function temporizadorDeRetraso () {
    //Esta linea de codigo manda a llamar la funcion mostrar despues de que pasen 3 segundos
    identificadorTiempoDeEspera = setTimeout(mostrar, 3000);

    //Esta linea de codigo manda a llamar la funcion ocultar despues de que pasen 3 segundos
    identificadorTiempoDeEspera = setTimeout(ocultar, 3000);

    //Esta linea de codigo manda a llamar la funcion brillar despues de que pasen 3 segundos
    identificadorTiempoDeEspera = setTimeout(brillar, 3000);
}

function mostrar(){
    //Esta linea muestra el elemento con el ID 'aparecer' con el estilo inline block
    document.getElementById('aparecer').style.display = "inline-block";
}

function ocultar() {
    //Esta otra parte lo que hace es ocultar el elemento 'saludo'
    document.getElementById('saludo').style.display = "none";
}

function brillar(){
    document.getElementById('boton-home').style.backgroundColor = "rgba(230, 184, 20, 255)";
    identificadorTiempoDeEspera = setTimeout(apagarHome, 3000);
}

function apagarHome(){
    document.getElementById('boton-home').style.backgroundColor = "rgba(254,205,26,255)";
    identificadorTiempoDeEspera = setTimeout(endencerHistoria, 2000);
    
}

function endencerHistoria(){
    document.getElementById('boton-historia').style.backgroundColor = "rgba(230, 184, 20, 255)";
    identificadorTiempoDeEspera = setTimeout(apagarHistoria, 2000);
}

function apagarHistoria(){
    document.getElementById('boton-historia').style.backgroundColor = "rgba(254,205,26,255)";
    identificadorTiempoDeEspera = setTimeout(endencerCuentos, 2000);
}

function endencerCuentos(){
    document.getElementById('boton-cuentos').style.backgroundColor = "rgba(230, 184, 20, 255)";
    identificadorTiempoDeEspera = setTimeout(apagarCuentos, 2000);
}

function apagarCuentos(){
    document.getElementById('boton-cuentos').style.backgroundColor = "rgba(254,205,26,255)";
    identificadorTiempoDeEspera = setTimeout(endencerJuegos, 1000);
}

function endencerJuegos(){
    document.getElementById('boton-juegos').style.backgroundColor = "rgba(230, 184, 20, 255)";
    identificadorTiempoDeEspera = setTimeout(apagarJuegos, 2000);
}

function apagarJuegos(){
    document.getElementById('boton-juegos').style.backgroundColor = "rgba(254,205,26,255)";
    identificadorTiempoDeEspera = setTimeout(endencerContacto, 1000);
}

function endencerContacto(){
    document.getElementById('boton-contacto').style.backgroundColor = "rgba(230, 184, 20, 255)";
    identificadorTiempoDeEspera = setTimeout(apagarContacto, 2000);
}

function apagarContacto(){
    document.getElementById('boton-contacto').style.backgroundColor = "rgba(254,205,26,255)";
    identificadorTiempoDeEspera = setTimeout(endencerComenzar, 2000);
}

function endencerComenzar(){
    document.getElementById('comenzar').style.backgroundColor = "#85B1B1";
    identificadorTiempoDeEspera = setTimeout(apagarComenzar, 2000);
}

function apagarComenzar(){
    document.getElementById('comenzar').style.backgroundColor = "#40807E";
    
}

function hoverHome(){
    document.getElementById('boton-home').style.backgroundColor = "rgba(230, 184, 20, 255)";
}

function apagarHoverHome(){
    document.getElementById('boton-home').style.backgroundColor = "rgba(254,205,26,255)";
}

function hovercontacto(){
    document.getElementById('boton-contacto').style.backgroundColor = "rgba(230, 184, 20, 255)";
}

function apagarHovercontacto(){
    document.getElementById('boton-contacto').style.backgroundColor = "rgba(254,205,26,255)";
}

function hoverjuegos(){
    document.getElementById('boton-juegos').style.backgroundColor = "rgba(230, 184, 20, 255)";
}

function apagarHoverjuegos(){
    document.getElementById('boton-juegos').style.backgroundColor = "rgba(254,205,26,255)";
}

function hovercuentos(){
    document.getElementById('boton-cuentos').style.backgroundColor = "rgba(230, 184, 20, 255)";
}

function apagarHovercuentos(){
    document.getElementById('boton-cuentos').style.backgroundColor = "rgba(254,205,26,255)";
}

function hoverhistoria(){
    document.getElementById('boton-historia').style.backgroundColor = "rgba(230, 184, 20, 255)";
}

function apagarHoverhistoria(){
    document.getElementById('boton-historia').style.backgroundColor = "rgba(254,205,26,255)";
}

function hovercomenzar(){
    document.getElementById('comenzar').style.backgroundColor = "#85B1B1";
}

function apagarHovercomenzar(){
    document.getElementById('comenzar').style.backgroundColor = "#40807E";
}


/*
function nombre(){
    var nombre = document.getElementById('nombreUsuario').value;   
    module.exports.nombreGuardado = nombre;


    console.log("El valor del nombre es: " + nombreGuardado);
    return nombreGuardado;
}
*/