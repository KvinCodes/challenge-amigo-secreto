let amigos = [];

// ---------------- FUNCIONES DE POPUP ----------------
function mostrarPopup(mensaje) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");

    popupMessage.textContent = mensaje;
    popup.classList.remove("hidden");
}

function cerrarPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}

// ---------------- AGREGAR AMIGO ----------------
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        mostrarPopup("⚠️ Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// ---------------- SORTEAR AMIGO ----------------
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarPopup("⚠️ No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

// ---------------- LIMPIAR LISTA ----------------
function limpiarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    mostrarPopup("🧹 Se ha limpiado la lista de amigos.");
}
