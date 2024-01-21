let tiempoRestante;
let intervalo;
let duracion;

document.getElementById('playPause').addEventListener('click', toggleTemporizador);
document.getElementById('siguienteTurno').addEventListener('click', siguienteTurno);
document.getElementById('tiempoSeleccionado').addEventListener('change', cambiarDuracion);

function iniciarTemporizador(duracionEnMinutos) {
    duracion = duracionEnMinutos * 60 * 1000;
    tiempoRestante = duracion;
    intervalo = setInterval(actualizarTemporizador, 10);
}

function actualizarTemporizador() {
    let porcentaje = (tiempoRestante / duracion) * 100;
    let minutos = parseInt((tiempoRestante / (1000 * 60)) % 60, 10);
    let segundos = parseInt((tiempoRestante / 1000) % 60, 10);
    let milisegundos = parseInt(tiempoRestante % 1000, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    milisegundos = milisegundos < 100 ? "0" + (milisegundos < 10 ? "0" + milisegundos : milisegundos) : milisegundos;

    document.getElementById('cuentaAtras').textContent = minutos + ":" + segundos + ":" + milisegundos;
    actualizarBarraProgreso(porcentaje);

    if ((tiempoRestante -= 10) < 0) {
        clearInterval(intervalo);
        document.getElementById('sonidoFinal').play();
    }
}

function actualizarBarraProgreso(porcentaje) {
    let barra = document.getElementById('barraProgreso');
    barra.style.width = porcentaje + '%';

    if (porcentaje > 50) {
        barra.style.backgroundColor = '#4CAF50'; // Verde
    } else if (porcentaje > 25) {
        barra.style.backgroundColor = 'orange'; // Naranja
    } else {
        barra.style.backgroundColor = 'red'; // Rojo
    }
}

function toggleTemporizador() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    } else if (tiempoRestante > 0) {
        intervalo = setInterval(actualizarTemporizador, 10);
    } else {
        iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
    }
}

function siguienteTurno() {
    clearInterval(intervalo);
    iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
}

function cambiarDuracion() {
    clearInterval(intervalo);
    iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
}
