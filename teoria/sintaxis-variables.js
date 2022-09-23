/* 1. SINTAXIS Y VARIABLES
Variables: Es un espacio de reservado en la memoria que puede cambiar de contenido
a lo largo de la ejecución de un programa. */

// Declaración
var numeroUno;
let numeroDos;

//Asignación
numeroUno = 1;
numeroDos = 2;

//Inicialización
var numeroTres = 3;
let nombre = 'Joaquin';
const apellido = 'Montero';

//Operaciones básicas
    //Valores numéricos
    let suma = numeroUno + numeroDos;
    let resta = numeroDos - numeroUno;
    let multiplicacion = numeroDos * numeroUno;
    let division = numeroDos / numeroUno;

    //Valores string (texto)
    let concatenacion = nombre + apellido;

/* Prompt: muestra un cuadro de díalogo para que el usuario ingrese un dato.
El valor que devuelve es un string que representa lo que el usuario ingresó. */

let nombreIngresado = prompt('Ingrese su nombre');

let edadIngresada = Number(prompt('Ingrese su edad'));

/* Consola: muestra el mensaje que pasemos como parámetro a la llamada
en la consola JS del navegador web */

console.log('Nombre: ' + nombreIngresado + '\n' + 'Edad: ' + edadIngresada);

/* Alert: muestra una ventana sobre la página web mostrando el mensaje
que se pase como parámetro */

alert('Nombre: ' + nombreIngresado + '\n' + 'Edad: ' + edadIngresada);

