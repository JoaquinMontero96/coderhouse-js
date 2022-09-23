/*6. ARRAYS
Un Array es un tipo de dato que sirve para almacenar valores en forma de lista.
Los elementos del array tienen un índice, que va desde el 0 (el primer elemento del array)
hasta el último elemento.
*/

/*Declaración del array: Para declarar una variable y asignar un array empleamos
los corchetes ([ ]) y dentro de ellos definimos todos los valores separados por coma */
const arrayUno = [1, false, 'Hola'];

/*Acceso al array: Es posible acceder a los elementos dentro de un array
a través de su índice o posición*/
console.log(arrayUno[2]); // --> Hola

/*Recorrido del array: empleamos un bucle para acceder a cada elemento por separado*/
for(let index = 0; index < 3; index++){
    console.log(arrayUno[index]);
}

/*-----------------------------Métodos y propiedades del array--------------------------

LENGTH: identificar cuántos elementos tiene, es común utilizarlo para definir
el límite de una iteración sobre un array
*/
console.log(arrayUno.length); // --> 3

for(let index = 0; index < arrayUno.length; index++){
    console.log(arrayUno[index]);
}

/*PUSH: se utiliza este método para sumar un elemento al final
de un Array ya existente, pasando como parámetro el valor (o variable) a agregar */
arrayUno.push('Chau');
console.log(arrayUno); // --> [1, false, 'Hola', 'Chau']

/*UNSHIFT: se utiliza igual que push, pero agrega el nuevo elemento
al comienzo del array*/
arrayUno.unshift(72);
console.log(arrayUno); // --> [72, 1, false, 'Hola', 'Chau']

/*POP: elemina el último elemento del array*/
arrayUno.pop();
console.log(arrayUno); // --> [72, 1, false, 'Hola']

/*SHIFT: elemina el primer elemento del array*/
arrayUno.shift();
console.log(arrayUno); // --> [1, false, 'Hola']

/*SPLICE: permite eliminar uno o varios elementos de un array en cualquier posición.
Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar,
y el segundo es la cantidad de elementos a eliminar desde esa posición.*/
const arrayDos = ['Joaquin', 'Gabriel', 'Ayelen', 'Nadir', 'Giuliano', 'Nicolas']
arrayDos.splice(1, 2);
console.log(arrayDos); // --> ['Joaquin', 'Nadir', 'Giuliano', 'Nicolas']

/*JOIN: genera un string con todos los elementos del array separados por el valor
que le pasamos como parámetro*/
console.log(arrayDos.join(' | ')); // --> Joaquin | Nadir | Giuliano | Nicolas

/*CONCAT: combina dos arrays en un único array*/
const arrayTres = arrayUno.concat(arrayDos);
console.log(arrayTres); // --> [1, false, 'Hola', 'Joaquin', 'Nadir', 'Giuliano', 'Nicolas']

/*SLICE: devuelve una copia de una parte del Array dentro de un nuevo Array,
indicando inicio y fin. El array original no se modificará*/
const arrayCuatro = arrayTres.slice(2, 5);
console.log(arrayCuatro);

/*INDEXOF: nos permite obtener el índice de un elemento en un array. Recibe por parámetro
el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice.
Si el elemento no existe nos retornará como valor: -1*/
console.log(arrayTres.indexOf('Joaquin')); // --> 3
console.log(arrayTres.indexOf('Nicolas')); // --> 6
console.log(arrayTres.indexOf('Roberto')); // --> -1

/*INCLUDES: permite saber si un elemento que recibo por parámetro existe o no dentro de un array,
retornando un valor booleano en caso afirmativo o negativo*/
console.log(arrayTres.includes('Giuliano')); // --> true
console.log(arrayTres.includes('Angelina')); // --> false

/*REVERSE: invierte el orden de los elementos dentro de un array*/
arrayTres.reverse();
console.log(arrayTres); // --> ['Nicolas', 'Giuliano', 'Nadir', 'Joaquin', 'Hola', false, 1]




/*Array de objetos: Los array pueden usarse para almacenar objetos personalizados.
Podemos asignar objetos literales o previamente instanciados en la declaración del
array o agregar nuevos objetos usando el método push y el constructor.
*/
const objeto1 = {id: 1, producto: 'Arroz'};
const array = [objeto1, {id: 2, producto: 'Fideos'}];
array.push({id: 3, producto: 'Leche'});
console.log(array);

/*Sentencia FOR OF: permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.*/
for(const producto of array){
    console.log(producto.id);
    console.log(producto.producto);
}
