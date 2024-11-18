var name = "Juan";
// En una forma de declarar una variable
// pero ya es antigua ya casi no se usa
// actualmente, esta forma de declarar
// tiene un alcance de funcion,
// esto hace que solo este disponible
// dentro de la funcion en la que se declara.

let edad = 19;

// Esta es una nueva forma de declarar una variable,
// las variables declaradas con let tiene un alcance
// de bloque que similar con var tambien solo esta
// disponible dentro del bloque en el que se declara.

const cedula = 1065869471;

/*
con const se usa para declarar una variable 
que no pueda ser cambiada y igual que let 
const tambien tiene un alcance de bloque.
Pero si la variable es un objeto o una matriz,
sus propiedades y metodos aun se pueden modificar.
*/

let string = "Aprobado";
let string2 = "3135670199";
let string3 = `@gmail.com`;
/*
    las cadenas de texto son un tipo de dato 
    que se declara con comillas simples o dobles
    aparte de letras tambien acepta numeros y simbolos.
 */

let nombre = "Juan";
let apellido = "Vasquez";
let nombreCompleto = `hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
// console.log(nombreCompleto);

/*
    las cadenas de plantilla son las que 
    permite expresiones dentro de las cadenas
    con esto se puede usar cadenas de varias 
    lineas y funciones dentro de ellas.
    y esto se hace con comillas invertidas "``"
*/

let uno = 5;
let dos = new Number(2);
let tres = "3.5";
console.log(dos);

let flotante = 7.1542;
console.log(flotante.toFixed(1));
console.log(tres * uno);
console.log(typeof tres === "number");




// var saludo = "Muchachos";
// let adso = "2894667"
// console.log(`Hola ${saludo} ${adso}`);


