let identificadorTiempoDeEspera

temporizadorDeRetraso();

function temporizadorDeRetraso () {
    identificadorTiempoDeEspera = setTimeout(mostrar, 3000);
    identificadorTiempoDeEspera = setTimeout(ocultar, 3000);
}

function mostrar(){
    document.getElementById('aparecer').style.display = "inline-block";
}

function ocultar() {
    document.getElementById('saludo').style.display = "none";
}

function nombre(){
    var nombre = document.getElementById('nombreUsuario').value; 
    return nombre;
}


document.getElementById('contenedor').innerHTML='!Hola!';