/* 4. FUNCIONES
Una función es un conjunto de instrucciones que se agrupan
para realizar una tarea concreta, que luego se puede reutilizar
a lo largo de diferentes instancias del código */

/*Declaración: Se declara a través de la palabra reservada function.
Deben tener un nombre en minúscula y sin espacios seguidos de los
característicos paréntesis (). El contenido de la función se escribe entre las llaves.
El nombre de la función no se puede repetir en otra.
*/
function saludar(){
    console.log('Hola!'); // --> Hola!
}

/*Llamado: Para ejecutar una función sólo hay que escribir su nombre y finalizar la sentencia con ().
*/
saludar();

/*Parametros: Una función simple, puede no necesitar ningun dato para funcionar.
Pero cuando empezamos a codificar funciones más complejas, nos encontramos con
la necesidad de recibir cierta información. Los parámetros son variables que se
declaran dentro de la función, entre sus paréntesis.
Los valores de éstos se definen luego en el llamado.
*/
function nombreCompleto(nombre, apellido){
    console.log(nombre + ' ' + apellido);
}

nombreCompleto('Joaquin', 'Montero'); // --> Joaquin Montero

/*Return: Las funciones pueden generar un valor de retorno usando la palabra return,
obteniendo el valor cuando la función es llamada.*/
function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumar(4, 6);
console.log(resultado); // --> 10

/*Scope: el contexto al que pertenece la misma dentro de un algoritmo, restringiendo su uso y alcance.
JavaScript define dos ámbitos para las variables: global y local.
*/

/*Funciones anónimas: es una función que se define sin nombre y se utiliza para ser pasada
como parámetro o asignada a una variable.*/
const suma = function (a, b) {return a + b};

console.log(suma(15, 32)); // --> 47

/*Funciones flecha: Identificamos a las funciones flechas como funciones anónimas de sintaxis
simplificada, no usan la palabra function pero usa => (flecha) entre los parámetros y el bloque*/
const resta = (a, b) => {return b - a};

console.log(resta(25, 50)); // --> 25