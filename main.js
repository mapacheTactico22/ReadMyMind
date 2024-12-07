const botonEnviar = document.getElementById("sendNumber")
const inputNumero = document.getElementById("inputNumero")
const seccionMensajes = document.getElementById("mensajes")
const seccionInicio = document.getElementById("inicio")
const barraCarga = document.getElementById("barraDeCarga")
const pMensajes = document.getElementById("messages")
const MensajeFinal = document.getElementById("numeroPensado")
const seccionFinal = document.getElementById("final")

let numeroPensado
let i = 0//contador de iteración de la animación

seccionMensajes.style.display = "none"
seccionFinal.style.display = "none"
botonEnviar.addEventListener("click", adivinar)
barraCarga.addEventListener("animationiteration", cambiarMensaje)
barraCarga.addEventListener("animationend", numeroAdivinado)


function cargarMensaje() {
    if(numeroPensado < 1 || numeroPensado > 10) {
        MensajeFinal.innerHTML = "Masticas agua o te haces, te pedi un numero del 1 al 10"
    } else {  
        MensajeFinal.innerHTML = "Pensaste en el número " + numeroPensado
    }
}

function numeroAdivinado() {
    cargarMensaje()
    seccionFinal.style.display = "block"
    seccionFinal.style.animationPlayState = "running"
}

function cambiarMensaje() {
    i++

    switch (i) {
        case 1:
            pMensajes.innerHTML = "procesando la memoria..."
            break;
        case 2:
            pMensajes.innerHTML = "Renderizando conexión cognitiva..."
            break;
        case 3:
            pMensajes.innerHTML = "Proyección cerebral casi completa..."
            break;
        default:
            break;
    }
}

function adivinar() {
    seccionInicio.style.display = "none"
    seccionMensajes.style.display = "block"
    barraCarga.style.animationPlayState = "running"
    numeroPensado = inputNumero.value
}