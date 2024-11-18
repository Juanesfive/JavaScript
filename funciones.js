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

const flecha = (a, b) => (a > 20) ? a*b : b;

let respuesta = flecha(4 ,5);

console.log(respuesta);
