var cantidad = "";
var sumatoria = 0;
var multiplicar = false;
var sumar = false;
var restar = false;
var dividir = false;
var porcentar = false;
var raizcuadrada = false;
var borrarunoo = false;

function resultado(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
}

function multiplicacion() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
}

function division() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir = true;
}

function borrar() {
    sumatoria = (cantidad - cantidad);
    location.reload("display").value = sumatoria;
    cantidad = "";
    borrado = true;
}

function porcentaje() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcentar = true;
}


function raizcua() {
    sumatoria = Math.sqrt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    raizcuadrada = true;
}



function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (porcentar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad) / 100;
    }
    if (raizcuadrada) {
        document.getElementById("display").value = Math.sqrt(cantidad);
    }
}

if (borrado) {
    document.getElementById("display").value = "C" + parseInt(cantidad);
}