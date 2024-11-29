import { esPrimo } from "./exportar";

let numero = parseInt(prompt("Ingrese el numero a evaluar"));

let respuesta = esPrimo(numero);
let respuestasLenado = llenado(numero);
alert(respuesta);
alert(respuestasLenado);


