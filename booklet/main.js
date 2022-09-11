// Actividad 1
/* let nombre = 'Homero';
let apellido = 'Simpson';
let edad = '42';
console.log(nombre);
console.log(apellido);
console.log(edad); */

// Actividad 2
/* const ciudad1 = 'Santa Lucia';
const ciudad2 = 'Rivadavia';
const ciudad3 = 'Rawson';
const ciudad4 = 'Capital';
const ciudad5 = 'Chimbas';
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

// Actividad 3
/* let nombre = "Joaquin";
let apellido = "Montero";
let dni = 40007042;
let pais = "Argentina";
let carnet = 'Nombre: ' + nombre + ' ' + 'Apellido: ' + apellido + ' ' + 'DNI: ' + dni;
console.log(carnet); */

// Actividad 4
/* let nombre1 = prompt('Ingrese un nombre:');
let nombre2 = prompt('Ingrese otro nombre:');
let nombre3 = prompt('Ingrese otro nombre:');
let nombre4 = prompt('Ingrese otro nombre:');
let nombre5 = prompt('Ingrese otro nombre:');
let familia = nombre1 + ' ' + nombre2 + ' ' + nombre3 + ' ' + nombre4 + ' ' + nombre5;

alert(familia);*/

// Actividad 5
/* let precio = parseFloat(prompt('Ingrese un precio'));
let descuento20 = precio - (precio * 0.2);
let descuento30 = precio - (precio * 0.3);
console.log(descuento20);
console.log(descuento30); */

// Actividad 6
/* let nombrePredeterminado = "Joaquin";
let nombreIngresado = prompt('Ingrese un nombre:');

if(nombreIngresado == nombrePredeterminado){
    alert("Fui yo");
}else{
    alert("Yo no fui");
} */

//Actividad 7
/* let teclaIngresada = prompt('Ingrese una tecla:');

if((teclaIngresada == 'y') || (teclaIngresada == 'Y')){
    alert('Correcto');
}else{
    alert('Incorrecto')
} */

//Actividad 8
/* let numeroIngresado = prompt('Ingrese un numero del 1 al 4');

if(numeroIngresado == 1){
    alert("Elegiste a Homero");
}else if(numeroIngresado == 2){
    alert("Elegiste a Marge");
}else if(numeroIngresado == 3){
    alert('Elegiste a Bart');
}else if(numeroIngresado == 4){
    alert('Elegiste a Lisa');
}else{
    alert('Error');
} */

//Actividad 9
/* let presupuesto = prompt('Ingresar un numero');

if((presupuesto >= 0) && (presupuesto <= 1000)){
    alert('Presupuesto bajo');
}else if((presupuesto >= 1001) && (presupuesto <= 3000)){
    alert('Presupuesto medio');
}else if(presupuesto > 3000){
    alert('Presupuesto alto');
}else{
    alert('Error');
} */

//Actividad 10
/* let producto1 = prompt('Ingrese un producto');
let producto2 = prompt('Ingrese otro producto');
let producto3 = prompt('Ingrese otro producto');
let producto4 = prompt('Ingrese otro producto');

if((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')){
    alert('Lista de productos: ' + producto1 + ', ' + producto2 + ', ' + producto3 + ', ' + producto4 + '.');
}else{
    alert('Error: es necesario cargar todos los productos');
} */

//Actividad 11
/* let numero = Number(prompt('Ingrese un numero de repeticiones'));
let texto = prompt('Ingrese un texto a repetir');

for(let i = 0; i < numero; i++){
    alert(texto);
} */

//Actividad 12
/* let numero = Number(prompt('Ingrese un número'));

for(let i = 1; i <= numero; i++){
    alert('Lado ' + i);
    if(i === 4){
        break;
    }
} */

//Actividad 13
/* let listado = '';

for(let i = 0; i < 10; i++){
    let nombreIngresado = prompt('Ingrese un nombre');
    listado += nombreIngresado + '\n';
}

alert(listado); */