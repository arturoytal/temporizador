let tiempoRestante;
let intervalo;
let duracion;
const sonidoFinal = document.getElementById('sonidoFinal');

document.getElementById('playPause').addEventListener('click', toggleTemporizador);
document.getElementById('siguienteTurno').addEventListener('click', siguienteTurno);
document.getElementById('tiempoSeleccionado').addEventListener('change', cambiarDuracion);
document.getElementById('audioSeleccionado').addEventListener('change', function() {
    sonidoFinal.src = this.value;
    sonidoFinal.load();
    console.log("Nuevo audio cargado:", sonidoFinal.src); // Depuración
});

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

function obtenerVersion() {
    fetch('https://api.github.com/repos/arturoytal/temporizador/contents/changelog.md')
        .then(response => response.json())
        .then(data => {
            if (data.content) {
                const textoCodificado = atob(data.content);
                const version = textoCodificado.match(/## \[(.*?)\]/);
                if (version && version[1]) {
                    document.getElementById('version').textContent = version[1];
                } else {
                    console.error("Formato de versión no encontrado en changelog.md");
                }
            } else {
                console.error("Contenido de changelog.md no encontrado");
            }
        })
        .catch(error => {
            console.error("Error al obtener la versión:", error);
        });
}

obtenerVersion();
