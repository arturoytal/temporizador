let tiempoRestante;
let intervalo;
let duracion;

document.getElementById('playPause').addEventListener('click', toggleTemporizador);
document.getElementById('siguienteTurno').addEventListener('click', siguienteTurno);

function iniciarTemporizador(duracionEnMinutos) {
    duracion = duracionEnMinutos * 60;
    tiempoRestante = duracion;
    intervalo = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
    let minutos = parseInt(tiempoRestante / 60, 10);
    let segundos = parseInt(tiempoRestante % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById('cuentaAtras').textContent = minutos + ":" + segundos;
    actualizarBarraProgreso((tiempoRestante / duracion) * 100);
    
    if (--tiempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById('sonidoFinal').play();
    }
}

function toggleTemporizador() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    } else {
        iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
    }
}

function siguienteTurno() {
    clearInterval(intervalo);
    iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
}

function actualizarBarraProgreso(porcentaje) {
    document.getElementById('barraProgreso').style.width = porcentaje + '%';
}

// Iniciar con tiempo predeterminado
iniciarTemporizador(5);
