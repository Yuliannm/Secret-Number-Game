let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute( "disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número es menor");
        } else {
            asignarTextoElemento("p", "El número es mayor");
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function parametrosIniciales() {
    asignarTextoElemento("h1", "Bievenido al desafio");
    asignarTextoElemento("p", `Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    parametrosIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

parametrosIniciales();

