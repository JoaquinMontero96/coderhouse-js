const listaCiudades = document.getElementById('listaCiudades')

ciudades.forEach(ciudad => {
    const ul = document.createElement('ul');
    ul.innerHTML = `
        <li>Nombre: ${ciudad.nombre}</li>
        <li>Pais: ${ciudad.pais}</li>
        <li>Habitantes: ${ciudad.habitantes}</li>
        <li>Superficie: ${ciudad.superficie}</li>
    `;
    listaCiudades.appendChild(ul);
});