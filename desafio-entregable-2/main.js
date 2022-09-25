const formulario = document.getElementById('form');
const sexo = document.getElementById('sexo');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const edad = document.getElementById('edad');
const tasa = document.getElementById('tasa');

formulario.onsubmit = (e) => {
    e.preventDefault();

    const tmb = Math.round(calcularTmb(sexo.value, peso.value, altura.value, edad.value));
    tasa.innerText = `Tu tasa metabólica basal es ${tmb} kcal`;
}

function calcularTmb (sexo, peso, altura, edad){
    switch(sexo){
        case 'M':
            return (10*peso + 6.25*altura - 5*edad + 5);
        case 'F':
            return (10*peso + 6.25*altura - 5*edad - 161);
    }
}