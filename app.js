let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    nombre = nombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre")
    } else {
        amigos.push(nombre);
        actualizarLista();
        nombre.value = "";
    }

}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}