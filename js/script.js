let tiempoRestante;
let intervalo;
let duracion;
const sonidoFinal = document.getElementById('sonidoFinal');

document.getElementById('playPause').addEventListener('click', toggleTemporizador);
document.getElementById('siguienteTurno').addEventListener('click', siguienteTurno);
document.getElementById('tiempoSeleccionado').addEventListener('change', cambiarDuracion);

function iniciarTemporizador(duracionEnMinutos) {
    // Código existente...
}

function actualizarTemporizador() {
    // Código existente...
}

function actualizarBarraProgreso(porcentaje) {
    // Código existente...
}

function toggleTemporizador() {
    // Código existente...
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

// Nueva implementación para obtener la versión
function obtenerVersion() {
    fetch('https://raw.githubusercontent.com/arturoytal/temporizador/main/changelog.md')
        .then(response => response.text())
        .then(text => {
            const version = text.match(/## \[(.*?)\]/)[1];
            document.getElementById('version').textContent = version;
        })
        .catch(error => {
            console.error("Error al obtener la versión:", error);
        });
}

obtenerVersion();
