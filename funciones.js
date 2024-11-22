// const esPrimo = function (num) {
//   let contador = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       contador++;
//     }
//   }
//   if (contador === 2) {
//     console.log("es primo");
//   } else {
//     console.log("no es primo");
//   }
// };
// let numero = parseInt(prompt("ingrese un numero"));
// let respuesta = esPrimo(numero);

// console.log(respuesta);

// let nueva = respuesta ? "si":"no";
// alert(nueva);

// const esPrimo = function (num)

// const anonima = function nombre(valor) {
//     console.log(valor);
// }

// let respuesta = anonima(25);
// console.log(respuesta);

// const generadora = function nombre(){
//     yield 1;
//     yield 2;
// }

// console.log(generadora.next());

// let parametro = 25;

// (function () {
//   alert("si llamarme");
// })();

// const flecha = (a, b) => (a > 20) ? a*b : b;

// let respuesta = flecha(4 ,5);

// console.log(respuesta);


const persona = {
    nombre: "Juan",
    apellido: "Vasquez",
    edad: 19,
    saludar: function () {
        // console.log(`hola soy ${this.nombre}`);
        return `hola soy ${this.nombre}`
    }
}

persona.pais = 'colombia';
persona.despedir = function () {
    return `me despido soy  ${this.nombre}`
}



console.log(persona.saludar());
console.log(persona.despedir());



// console.log(Object.keys(persona).indexOf("genero") === -1); {
//     console.log("El atributo no existe");
    
// };
// console.log(`hola me llamo ${persona.nombre}`);


console.log(Object.keys(persona).includes("nombre"));


//  $ y luego { } para incrustar una expresión en una cadena.
// Permite funciones de interpolación de cadenas y cadenas multilínea
