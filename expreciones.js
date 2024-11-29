let palabra =
  "Lorem ipsum dolor sit amet 9 consectetur culpa adipisicing elit. culpa Quae,  eaque.";

palabra = "1238        vaca";

// let regex = /Culpa/i;

// let numero = /[0-9]/d;
// let letras = /[A-Z]/;
// let regex = /[0-9]{2,6}/g;
let regex = /^([0-9]{4,6}).+([a-z]{4,6})$/g;

// console.log(regex.test(palabra));
// console.log(numero.test(palabra));
console.log(regex.test(palabra));

// console.log(regex.exec(palabra));
// console.log(palabra.match(regex));
// console.log(palabra.match(numero));
console.log(palabra.match(regex));

// function buscar(regex, palabra) {
//   if (palabra.includes(regex)) {
//     return true;
//   }

//   {
//     return false;
//   }
// }

// console.log(buscar(regex, palabra));
