let tiempoRestante;
let intervalo;
let duracion;
const sonidoFinal = document.getElementById('sonidoFinal');

// Intentar desbloquear la reproducción de audio en dispositivos con restricciones
document.body.addEventListener('touchstart', function inicializarAudio() {
    sonidoFinal.play().then(() => {
        sonidoFinal.pause();
        sonidoFinal.currentTime = 0;
    }).catch(error => console.error('Error al inicializar el audio:', error));

    // Eliminar este manejador después de la primera ejecución
    document.body.removeEventListener('touchstart', inicializarAudio);
});

document.getElementById('playPause').addEventListener('click', toggleTemporizador);
document.getElementById('siguienteTurno').addEventListener('click', siguienteTurno);
document.getElementById('tiempoSeleccionado').addEventListener('change', cambiarDuracion);

function iniciarTemporizador(duracionEnMinutos) {
    duracion = duracionEnMinutos * 60 * 1000;
    tiempoRestante = duracion;
    intervalo = setInterval(actualizarTemporizador, 100);
}

function actualizarTemporizador() {
    let porcentaje = (tiempoRestante / duracion) * 100;
    let minutos = parseInt((tiempoRestante / (1000 * 60)) % 60, 10);
    let segundos = parseInt((tiempoRestante / 1000) % 60, 10);
    let milisegundos = parseInt((tiempoRestante / 100) % 10, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById('cuentaAtras').textContent = minutos + ":" + segundos + ":" + milisegundos;

    actualizarBarraProgreso(porcentaje);

    if ((tiempoRestante -= 100) < 0) {
        clearInterval(intervalo);
        sonidoFinal.play();
    }
}

function actualizarBarraProgreso(porcentaje) {
    let barra = document.getElementById('barraProgreso');
    barra.style.width = porcentaje + '%';

    if (porcentaje > 50) {
        barra.style.backgroundColor = '#4CAF50';
        document.getElementById('cuentaAtras').style.color = '#4CAF50';
    } else if (porcentaje > 25) {
        barra.style.backgroundColor = 'orange';
        document.getElementById('cuentaAtras').style.color = 'orange';
    } else {
        barra.style.backgroundColor = 'red';
        document.getElementById('cuentaAtras').style.color = 'red';
    }
}

function toggleTemporizador() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    } else if (tiempoRestante > 0) {
        intervalo = setInterval(actualizarTemporizador, 100);
    } else {
        iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
    }
}

function siguienteTurno() {
    clearInterval(intervalo);
    sonidoFinal.pause();
    sonidoFinal.currentTime = 0;
    iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
}

function cambiarDuracion() {
    clearInterval(intervalo);
    iniciarTemporizador(parseInt(document.getElementById('tiempoSeleccionado').value));
}
