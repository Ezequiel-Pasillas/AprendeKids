//Variable 
let identificadorTiempoDeEspera

//Se manda a llamar a la funcion
temporizadorDeRetraso();

function temporizadorDeRetraso () {
    //Esta linea de codigo manda a llamar la funcion mostrar despues de que pasen 3 segundos
    identificadorTiempoDeEspera = setTimeout(mostrar, 3000);
    //Esta linea de codigo manda a llamar la funcion ocultar despues de que pasen 3 segundos
    identificadorTiempoDeEspera = setTimeout(ocultar, 3000);
}

function mostrar(){
    //Esta linea muestra el elemento con el ID 'aparecer' con el estilo inline block
    document.getElementById('aparecer').style.display = "inline-block";
}

function ocultar() {
    //Esta otra parte lo que hace es ocultar el elemento 'saludo'
    document.getElementById('saludo').style.display = "none";
}

function nombre(){
    var nombre = document.getElementById('nombreUsuario').value;   
    module.exports.nombreGuardado = nombre;


    console.log("El valor del nombre es: " + nombreGuardado);
    return nombreGuardado;
}