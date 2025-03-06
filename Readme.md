# Amigo Secreto

Este es un proyecto simple en JavaScript, HTML y CSS para realizar un sorteo de "Amigo Secreto". Permite agregar nombres a una lista y luego seleccionar aleatoriamente un amigo.

## Características
- Agregar nombres a una lista de amigos.
- Visualizar la lista de amigos ingresados.
- Realizar un sorteo aleatorio de un amigo.

## Cómo usar
1. Escribe un nombre en el campo de entrada.
2. Haz clic en el botón "Añadir" para agregarlo a la lista.
3. Repite el proceso hasta ingresar todos los nombres.
4. Presiona el botón "Sortear amigo" para elegir un amigo al azar.


## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript

## Funciones principales

### `agregarAmigo()`
- Captura el nombre ingresado en el campo de texto.
- Valida que no esté vacío.
- Agrega el nombre al array `amigos`.
- Actualiza la lista en la interfaz.
- Limpia el campo de entrada después de agregar un nombre.

### `actualizarLista()`
- Recorre el array `amigos` y muestra los nombres en una lista `<ul>`.
- Limpia la lista antes de agregar nuevos elementos para evitar duplicados.

### `sortearAmigo()`
- Valida que haya nombres en la lista antes de realizar el sorteo.
- Usa `Math.random()` y `Math.floor()` para seleccionar un índice aleatorio.
- Muestra el nombre seleccionado en la interfaz.

## 📄 Licencia
Este proyecto es de código abierto y puedes usarlo libremente.
