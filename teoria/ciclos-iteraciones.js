/* 3. CICLOS E ITERACIONES
Ciclos, bucles o iteraciones: son un medio rápido y sencillo para hacer algo repetidamente.


Tipos de bucles:
/Ciclos por conteo: Repiten un bloque de código un número de veces específico. (ESTRUCTURA FOR)
Ciclos condicionales: Repiten un bloque de código mientras la condición evaluada
es verdadera (ESTRUCTURAS WHILE Y DO WHILE) */

//ESTRUCTURA FOR: for(desde; hasta; actualización)
for(let contador = 0; contador < 10; contador++){
    alert(contador);
}

    //Sentencia break: Bajo cierta condición, interrumpe el ciclo
    for(i = 0; i < 10; i++){
        if(i == 5){
            break;
        }
        alert(i);
    }

    //Sentencia continue: Bajo cierta condición, saltea esa repetición y sigue con la próxima
    for(i = 0; i < 10; i++){
        if(i == 5){
            continue;
        }
        alert(i);
    }

/* ESTRUCTURA WHILE: permite crear bucles que se ejecutan cero o más veces,
dependiendo de la condición indicada */

let entrada = prompt('Ingrese un dato');

while(entrada != 'ESC'){
    alert('El usuario ingresó ' + entrada);
    entrada = prompt('Ingrese otro dato');
}

/* ESTRUCTURA DO WHILE: permite crear bucles que se ejecutan una o más veces,
dependiendo de la condición indicada */

let numero = 0;

do{
    numero = prompt('Ingrese un número');
    console.log(numero);
}while(parseInt(numero));

/* ESTRUCTURA SWITCH: está especialmente diseñada para manejar de forma
sencilla múltiples condiciones sobre la misma variable */

let nombreIngresado = prompt('Ingrese su nombre');

switch(nombreIngresado){
    case 'ANA':
        alert('HOLA ANA');
        break;
    case 'JUAN':
        alert('HOLA JUAN');
        break;
    default:
        alert('¿QUIÉN SOS?');
        break;
}
