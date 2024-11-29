import {esPrimo,llenado} from './exportar.js'

let numero = parseInt(prompt("ingrese un numero"));

let respuesta = esPrimo(numero);
let respuestaLlenado = llenado();

alert(respuesta);
alert(respuestaLlenado);