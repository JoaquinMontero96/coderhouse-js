/* 5. OBJETOS
Son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
Un objeto literal se define directamente entre llaves { }
Los valores que almacenan se listan separados por coma, bajo la forma propiedad: valor
*/

const persona1 = {
    nombre: 'Joaquin',
    edad: 25,
    ciudad: 'Rawson'
}

/*Obtener valor de un objeto*/
console.log(persona1.nombre);

/*Asignar valores a las propiedades*/
persona1.ciudad = 'Santa Lucía';

/*Constructores: es una función que usamos para crear un nuevo objeto cada vez que sea necesario.
*/
function Persona(nombre, edad, ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}

const persona2 = new Persona('Ayelen', 30, 'Rawson');
const persona3 = new Persona('Giuliano', 30, 'Santa Lucía');

/*Métodos: Los métodos de los objetos también son técnicamente funciones, sólo que
se limitan a poder ser ejecutados solo desde el mismo objeto.

Podemos crear nuestros propios métodos para objetos personalizados, referenciando funciones por
su nombre o definiendo funciones anónimas asociadas a una propiedad de la función constructora.
*/

function Direccion(calle, altura){
    this.calle = calle;
    this.altura = altura;
    this.donde = function() {console.log('Estas en ' + this.calle + ' al ' + this.altura)}
}

const direccion1 = new Direccion('Libertador', 3260);

direccion1.donde();

/*Operador IN y FOR IN: operador IN devuelve true si la propiedad especificada existe en el objeto
Mientras que el bucle FOR IN permite acceder a todas las propiedades del objeto,
obteniendo una propiedad por cada iteración*/

console.log('calle' in direccion1); // --> True

for(const propiedad in direccion1){
    console.log(direccion1[propiedad]); // --> Libertador, 3260
}

/*Clases: proveen una sintaxis mucho más clara y simple para crear objetos personalizados.
Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. */

class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    hablar(){
        console.log('HOLA SOY ' + this.nombre);
    }
}
