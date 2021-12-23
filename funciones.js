const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)

    for (claves of claves) {
        let contacto = JSON.parse(db.getItem(claves))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let númeroContacto = document.createElement('p')
    let direcciónContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    númeroContacto.innerHTML = contacto.número
    direcciónContacto.innerHTML = contacto.dirección
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(númeroContacto)
    divContacto.appendChild(direcciónContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}