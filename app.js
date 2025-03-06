let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    nombre = nombre.value.trim();

    if (nombre === "") {
        alert("ERROR - Debe ingresar un nombre")
    }
}