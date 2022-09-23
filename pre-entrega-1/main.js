class Persona {
    constructor(nombre, dni, sexo, celular, peso, altura, edad, tmb){
        this.nombre = nombre,
        this.dni = dni;
        this.sexo = sexo;
        this.celular = celular;
        this.peso = peso,
        this.altura = altura,
        this.edad = edad,
        this.tmb = tmb
    }
}

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

let nombre = '';
let dni = 0;
let celular = 0;
let peso = 0;
let altura = 0;
let edad = 0;
let tmb = 0;
let confirmacion = false;
const personas = [];
const usuarioRegistrado = (dni) => personas.some((el) => el.dni === dni)
let sexo = prompt('Ingrese su sexo (M para masculino o F para femenino)').toUpperCase();

while(sexo != 'ESC'){
    if(sexo == 'M' || sexo == 'F'){
        do{
            peso = Number(prompt('Ingrese su peso en KG'));
        }while(!peso);
        do{
            altura = Number(prompt('Ingrese su altura en CM'));
        }while(!altura);
        do{
            edad = Number(prompt('Ingrese su edad en AÑOS'));
        }while(!edad);
        tmb = Math.round(calcularTmb(sexo, peso, altura, edad));
        alert('Su tasa metabólica basal es: ' + tmb);
        confirmacion = confirm('Quisiera quedar registrado en nuestra base de datos para que nuestros profesionales puedan contactarlo?');
        if(confirmacion){
            // do{
                do{
                    dni = Number(prompt('Ingrese su DNI sin puntos'));
                }while(!dni);
                if(usuarioRegistrado(dni)){
                    alert('Usted ya está registrado');
                }
            // }while(usuarioRegistrado);
            if(!usuarioRegistrado(dni)){
                nombre = prompt('Ingrese su nombre completo');
                celular = Number(prompt('Ingrese su numero de teléfono'));
                personas.push({nombre, dni, sexo, celular, peso, altura, edad, tmb});
                alert('Listo! En breve lo contactaremos');
            }
        }
        sexo = prompt('Ingrese su sexo (M para masculino o F para femenino) o ingrese ESC para salir').toUpperCase();
    }
    else{
        sexo = prompt('Error, ingrese su sexo nuevamente (M para masculino o F para femenino) o ingrese ESC para salir').toUpperCase();
    }
}
console.log(personas); //Para corroborar que se hayan ingresado todas las personas al array