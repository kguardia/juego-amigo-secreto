//Crear un array para almacenar los nombres --> Requisito obligatorio del desafío
let listaAmigos = [];

//Con esta función asignamos texto (HTML) a un elemento del DOM --> Mejora agregada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función para limpiar el campo de texto del input --> Mejora agregada
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

//La siguiente función nos permite validar que el nombre ingresado sea válido (Solo letras y espacios) --> Mejora agregada
function esNombreValido(nombre) {
    // La expresión regular permite letras (mayúsculas y minúsculas), acentos y espacios
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) && nombre.trim() !== "";
}

//Implementar una función para agregar amigos --> Requisito obligatorio del desafío
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    //Validamos que el nombre ingresado sea válido
    if (!esNombreValido(nombre)) {
        //Se muestra un mensaje de error en el área de resultados
        asignarTextoElemento('#resultado',`<li>Por favor, ingrese un nombre válido (solo letras).</li>`);
        return;
    }

    if (listaAmigos.includes(nombre)) {
        asignarTextoElemento('#resultado',`<li>Este nombre ya está en la lista.</li>`);
        return;
    }

    //Lo agregamos a la lista
    listaAmigos.push(nombre);
    //Actualizamos la lista en pantalla
    actualizarlistaAmigos();
    //Limpiamos el campo de entrada
    limpiarCampo();
    //Limpiamos el mensaje de error o resultado previo
    asignarTextoElemento('#resultado','');
}

//Implementar una función para actualizar la lista de amigos --> Requisito obligatorio del desafío
function actualizarlistaAmigos() {
    let listaHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML += `<li>${i + 1}. ${listaAmigos[i]}</li>`;
    }
    asignarTextoElemento('#listaAmigos', listaHTML);
}

//Implementar una función para sortear los amigos --> Requisito obligatorio del desafío
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('#resultado',`<li>No hay nombres para sortear.</li>`);
        return;
    }
    //Seleccionamos un índice aleatorio de la lista
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indice];
    //Mostramos el resultado del sorteo en la lista de resultados
    asignarTextoElemento('#resultado', `<li>Tu amigo secreto es: ${amigoSecreto}!</li>`);
}

//Función para establecer las condiciones iniciales (limpiar listas) --> Mejora agregada
function condicionesIniciales() {
    listaAmigos = [];
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', '');
}

// Inicializar la aplicación
condicionesIniciales();