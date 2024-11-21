// La palabra revservada var es usada para 
// declarar una variable y poder resutilizarla

var nombre
nombre = 'julian'
console.log('Hola: ' + nombre);
nombre = 'dario'
console.log('Hola: ' + nombre);



// La palabra reservada let es usada para declarar variables
// en un bloque por ejemplo (if, while, for) si la variable 
// se usa fuera del bloque no funcionara

let apellido = 'araque';
{
    let apellido = 'cordero';
    console.log('muestra cordero: '+ apellido);
}

console.log('muestra araque: '+ apellido);


// Const es una variable que es constante, osea que
// no va a poder cambiar asi se modifique luego

const color = "rojo";

console.log('deberia ser rojo: ' + color);
// color = "azul"; 
// console.log('deberia ser rojo: ' + color);  //Aqui genera un error

// Un string es una cadena de texto entre "" 
// que puede contener letras, numeros, simbolos etc..

texto = "hola"
texto = "12131321324453"
texto = "!#$%&'()*+,-./"
console.log(texto);


// Este template strings me permite escribir en varias lineas
// de codigo sin tener que abrir y cerrar comillas de nuevo, 
// nos muestra tal cual como lo escribimos en la consola

temp =  `Rapidos y furiosos 1
Rapidos y furiosos 2
    Rapidos y furiosos 3
Rapidos y furiosos 4`
console.log(temp);


// (Numeros) Estos son todos los numeros ya sean 
// decimales, enteros, negativos

numero = 10
numero = -5
numero = 3.1416
numero = 0
console.log(numero);

// Boolean

(Boolean)
const a = false;
const b = true;
const c = 'texto';

console.log(b || a);  //Evalua la primera variable y si es verdadera retorna true o si la otra es verdadera
console.log(c || a);  //O en este caso devuelve el string  
console.log(a && c);  //con el operado and evalua ambas y hay un false arrojara falso
console.log(c && a); 

// Undefined es una variable que se creo pero no se 
// inicializa o no tiene un valor, esto puede ayudar para algunos formularios
// con campos que no requieran ser llenados, esto puede ser un error o aviso, 
// pero tambien puede ser una herramienta

{
    let nombre;
    console.log(nombre);
}

// Null es una variable que representa un objeto vacío, osea cuando necesitemos 
// una variable definida pero que no tenga un valor especfico pdemos asignarle null.

{
    let nombre = null;
    console.log(nombre);
}

//Nan evalua si es un numero o no

nonum = "hola";
if (isNaN(nonum)){
    nonum = NaN
    console.log(nonum);
}
else{
    console.log("Es un numero");
}


// Una funcion es un bloque el cual realiza una tarea o ejecuta en fragmento de codigo
// Para llevar a cabo la funcion necesitara datos de entrada(parametros) y de salida

{

    function julian(edad, genero) {
        edad = 18
        genero = "masculino"
        console.log("Mi edad es: " + edad + ", y mi genero es: " + genero);
    }
    console.log(julian)
}

//La funcion tipo generador nos permite
//ingresar valores en orden y llamarlos en el 
//orden que se escribieron

{
    function* generador() {
        yield "hola";
        yield "adios";
        yield "ok";
    }
    
    const gen = generador();  
    
    console.log(gen.next());  
    console.log(gen.next());  
    console.log(gen.next());  
   
}

// Una arrow function o funcion flecha es la funcion 
// que se guarda en una variable, luego se la asignan parametros
// y luego la accion a realizar 

{
    const sumar = (a, b) => a + b;

    console.log(sumar(3, 5));
}

// Un objeto en js se puede traducir como una variable 
// que contiene varias propiedades 

{
    let estudiante = {
        nombre : 'julian',
        grado : 11
    }
    console.log(estudiante);
}

// TIPOS DE OPERADORES

// Operador aritmetico

operadores_arit = 5 + 5
console.log(operadores_arit);

//Operador de asignacion

op_asignacion = 1
op_asignacion += 1
console.log(op_asignacion);

// Operador de comparacion, retorna true o false

console.log(3<4);

// Operador logico

{
    let verdadero = true
    let falso = false
    console.log(a && b)  //imprime falso ya que una de las variables son falsas
}

// Operador terniario, nos permite evaluar una expresion y retornar un valor

{   
    const edad = 18;
    const mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
    console.log(mensaje);
}

// Operador de concatenacion

{
    let nombre = "julian"
    let edad = "18"
    console.log(nombre + " tiene " + edad)
}

//Condicionales (if, else if)

{
    let nota = 1
    if (nota > 3){ //solo si se cumplio
        console.log("Aprobo la nota");
    }
    else if(nota === 3 ){ // si no se cumplio el anterior entonces el siguiente
        console.log("Tiene que recuperar");
    }
    else{
        console.log("Perdio"); //si finalmente no se cumplio la condicion
    }
}

//CICLOS


{
    // El for crea una variable, luego le da una 
    // condicion y finalmente se incrementa (en este caso)
    for (let i = 0; i < 5; i++) {
        console.log(i);
        
    }

    //A el while le asignamos una condicion y mientras 
    // se cumpla se ejecutara las veces que sea 
    // verdadero hasta que sea false
    let cinco = 0
    while (cinco < 5){
        console.log("se ejecuto 5 veces")
        cinco++;
    }
}

// try, catch o manejo de errores son dos bloques 
// de codigo en el que el primero intenta el codigo a ejecutar: el "try",
// pero en el catch ejecuta un bloque por si da error

{
    try {
        let resultado = y + 2  //no define y asi que no mostrara nada
        console.log(resultado, "si")
    } catch (error) {
        console.log("Ha ocurrido un error", error.message)
    }
}

//BREAK Y CONTINUE

{
    let numero = 0;
    let num =0;

while (numero < 5) {
    numero++;
    if (numero === 3) {
        continue;  // omite el resultado del numero cuando sea exactamente igual a 3
    }
    console.log(numero);
}
console.log("")

while (num < 5) {
    num++;
    if (num === 3) {
        break;  // Detiene el ciclo cuando el num sea exactamente igual a 3
    }
    console.log(num);
}

}

//Destructuracion
console.clear();

{
    //En esta destructuracion se le asigna a cada elemento del array 
    //como una variable, al ser llamada la variable se muestra el elemento del array
    const equipos = ["bucaramanga", "america", "cucuta"];
    const [mejor, malo, malisimo] = equipos;
    console.log(mejor);
    console.log(malo);
    console.log(malisimo);
}


// Objetos literales
// Un objeto literal es un conjunto de propiedades que estan entre {}

{
    let carro = {
        color: 'rojo',
        marca: 'suzuki',
        modelo: 'no se',
        año: 2006
    };
    console.log(carro);
}


// Declarar una variable para almacenar la suma
{let suma = 0;

// Usar un bucle for para recorrer los números del 1 al 10
for (let i = 1; i <= 10; i++) {
  suma += i; // Sumar el valor de i a la variable suma
}

// Imprimir el resultado
console.log("La suma de los números del 1 al 10 es:", suma);
}


