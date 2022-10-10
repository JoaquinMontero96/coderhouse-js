const paisText = document.getElementById('pais');
const spread = document.getElementById('spread');

const ciudad = {
    nombre: 'Buenos Aires',
    pais: 'Argentina',
    habitantes: 3075646,
    año: 2022,
    superficie: 203 + ' km2'
}


//Desestructuración
const { nombre, pais, habitantes, año, superficie } = ciudad;
paisText.innerText = pais;


//Spread
const ciudad2 = {...ciudad, año: 2014, habitantes: 2954874};
console.log(ciudad);
console.log(ciudad2);

const div1 = document.createElement('div');
div1.innerHTML = `La población de ${nombre} en el año ${año} era de ${habitantes} habitantes, a diferencia del ${ciudad2.año} que era de ${ciudad2.habitantes}.`
spread.appendChild(div1);