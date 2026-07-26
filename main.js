

const EDAD_ACTUAL = 2026; 
const EDAD_JUBILACION = 65;

const nombre= prompt("Por favor, ingresa tu nombre:");
const profesion = prompt("¿A qué te dedicas o qué estudias?");
let anioNacimientoTexto = prompt("¿En qué año naciste? (Ej: 1995)");

let anioNacimiento = parseInt(anioNacimientoTexto);
let edadActual = EDAD_ACTUAL - anioNacimiento;
let aniosParaJubilarse = EDAD_JUBILACION - edadActual;

let mensajeConsola = "El usuario " + nombre + " trabaja de " + profesion + " y tiene " + edadActual + " años.";
let mensajeAlerta = "¡Hola, " + nombre + "!\nBasado en tu profesión (" + profesion + "), te quedan aproximadamente " + aniosParaJubilarse + " años para jubilarte a los 65.";

console.log(mensajeConsola);
alert(mensajeAlerta);