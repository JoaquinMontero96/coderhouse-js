function calcularTmb (sexo, peso, altura, edad){
    switch(sexo){
        case 'M':
            return (10*peso + 6.25*altura - 5*edad + 5);
        case 'F':
            return (10*peso + 6.25*altura - 5*edad - 161);
        default:
            return 'Error, ingrese M para masculino o F para femenino';
    }
}

let peso = 0;
let altura = 0;
let edad = 0;
let sexo = prompt('Ingrese su sexo (M para masculino o F para femenino)').toUpperCase();

while(sexo != 'ESC'){
    if(sexo == 'M' || sexo == 'F'){
        peso = Number(prompt('Ingrese su peso en KG'));
        altura = Number(prompt('Ingrese su altura en CM'));
        edad = Number(prompt('Ingrese su edad en AÑOS'));
        alert('Su tasa metabólica basal es: ' + calcularTmb(sexo, peso, altura, edad));
        sexo = prompt('Ingrese su sexo (M para masculino o F para femenino) o ingrese ESC para salir').toUpperCase();
    }
    else{
        sexo = prompt('Error, ingrese su sexo nuevamente (M para masculino o F para femenino) o ingrese ESC para salir').toUpperCase();
    }
}
