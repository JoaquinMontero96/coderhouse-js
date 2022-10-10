const edad = document.getElementById('edad');
const resultado = document.getElementById('resultado');
const formEdad = document.getElementById('formEdad');
const operadorAnd = document.getElementById('operadorAnd');


const puedesVotar = () => {
    const div = document.createElement('div');
    div.innerHTML = '<p>Estas habilitado para votar</p>';
    operadorAnd.appendChild(div);
}

formEdad.onsubmit = (e) => {
    e.preventDefault();
    //Operador ternario
    const mayoriaDeEdad = edad.value >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
    resultado.innerText = mayoriaDeEdad;
    //Operador AND
    edad.value >= 18 && puedesVotar();
}