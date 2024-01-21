# Changelog

Todas las modificaciones significativas en este proyecto serán documentadas en este archivo.





## [0.0.6] - 2024-01-25

### Añadido
- Selector de sonido de alarma con múltiples opciones.
- Espacio aumentado entre el botón de siguiente turno y los selectores de tiempo y audio.

### Cambiado
- Ajuste en la carga del sonido de alarma para que corresponda a la selección del usuario.
- Mejoras en la disposición de los elementos para adaptarse mejor a la visualización en dispositivos móviles.


## [0.0.5] - 2024-01-24

### Añadido
- Funcionalidad para detener el sonido de alarma al iniciar el siguiente turno.
- Opción de seleccionar más intervalos de tiempo (1 a 10 minutos).

### Cambiado
- El archivo de sonido de alarma ahora se ubica en la carpeta `audio`.
- Aumentada significativamente la altura de la barra de progreso.
- Botones de 'Play/Pause' y 'Siguiente Turno' ahora se muestran uno sobre el otro.
- El botón 'Siguiente Turno' se ha hecho más grande para facilitar su uso en dispositivos móviles.
- Título de la página actualizado a "Temporizador de Juegos de Mesa y tal".
- Selector de tiempo y versión movidos al footer para una mejor disposición en la página.


## [0.0.4] - 2024-01-23

### Añadido
- Opciones extendidas de tiempo en el selector (1 a 10 minutos).

### Cambiado
- Barra de progreso y números de cuenta atrás aumentados de tamaño.
- Números de cuenta atrás muestran solo un decimal en los milisegundos.
- Botón de "Siguiente Turno" aumentado de tamaño y movido a una línea separada.
- Automatización para mostrar la versión actual del proyecto en el footer, extrayendo información del archivo `changelog.md` en GitHub.

### Corregido
- Pequeños ajustes de diseño para mejorar la usabilidad en dispositivos móviles.


## [0.0.3] - 2024-01-22

### Añadido
- Favicon en la carpeta `img`.
- Footer con versión actual y enlace al historial de cambios.
- Mejoras en la interfaz de selección de tiempo.

### Cambiado
- `style.css`, `script.js` movidos a sus respectivas carpetas `css` y `js`.
- Botón de Siguiente Turno aumentado de tamaño.
- Temporizador y barra de progreso ahora cambian de color según el tiempo restante.
- Funcionalidad de Play/Pause mejorada para reanudar desde donde se pausó.

### Corregido
- Ajustes en la disposición y tamaño de elementos para mejorar la usabilidad en dispositivos móviles.


## [0.0.2] - 2024-01-21

### Añadido
- Temporizador ahora muestra minutos, segundos y milisegundos.
- Opción de seleccionar el tiempo mediante un menú desplegable.
- Barra de progreso animada que disminuye a medida que avanza el tiempo.

### Cambiado
- Tamaño del temporizador aumentado para mejor visibilidad en dispositivos móviles.
- Fondo de la página cambiado a color negro para mejorar el contraste.
- Botón de "Siguiente Turno" ahora es más grande y de color rojo para una mayor visibilidad y accesibilidad.
- Ajustes en el código JavaScript para soportar el formato de tiempo extendido y la barra de progreso.

### Corregido
- Problemas de visualización en dispositivos móviles debido a tamaño de fuente y botones.


## [0.0.1] - 2024-01-20

### Añadido
- Versión inicial del temporizador de juegos de mesa.
- Funcionalidades básicas: iniciar, pausar y reiniciar el temporizador.
- Sonido de alarma cuando el tiempo se agota.
- Botón para seleccionar el tiempo de cuenta atrás.


El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
