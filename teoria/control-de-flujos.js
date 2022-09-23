/* CONTROL DE FLUJOS
Condicionales: es una estructura sintáctica que sirve para tomar
una decisión a partir de una condición. */

//Valores booleanos
let verdad = true;
let falso = false;

/* Estructura IF: Si la condición se cumple, se ejecutan todas las instrucciones
que se encuentran dentro de {}, si no se cumple, el programa continuará
ejecutando el resto de instrucciones del script. */

if(true){
    console.log('Esto es verdadero');
}

/* Estructura IF ELSE: Si se cumple esta condición, hazlo; si no se cumple, haz esto otro. */
if(false){
    console.log('Este mensaje no lo vas a ver');
}else{
    console.log('Vas a ver este mensaje');
}

/* Estructura IF ELSE IF: Si se cumple esta condición, hazlo; si no se cumple, haz esto otro
si no se cumple, haz esto otro, etc. */

if(false){
    console.log('Este mensaje no lo vas a ver');
}else if(false){
    console.log('Este tampoco');
}else if(false){
    console.log('Este tampoco');
}else if(true){
    console.log('Vas a ver este mensaje');
}

/*Operadores en JS
==             Es igual a
===            Es esctrictamente igual a
!=             Es distinto a
!==            Es esctrictamente distinto a
<, <=, >, >=   Menor, menor o igual, mayor, mayor o igual
&&             Operador and (y)
||             Operador or (o)
!              Operador not (no)
*/

//Condiciones compuestas
    // &&: Todas las comparaciones deben ser verdaderas para que la condición compuesta lo sea
    if((5 > 1) && (10 < 20)){ //TRUE
        console.log('Esto es correcto');
    }

    // ||: Una de las comparaciones debe ser verdadera para que la condición compuesta lo sea
    if((5 > 1) && (10 < 6)){ //TRUE
        console.log('Esto es correcto');
    }


