const nombre = document.querySelector('.nombre');
const número = document.querySelector('.número');
const dirección = document.querySelector('.dirección');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');

const listadoTareas = document.querySelector('.listado-tareas');
const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        número: número.value,
        dirección: dirección.value,
    }
    console.log(contacto)
    guardarContacto(db, contacto)
}

cargarContactos(db, listadoTareas)