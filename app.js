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

