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


console.clear();
let tres = 3.50;
let flotante = 7.1542;
console.log(flotante.toFixed(1));
let nuevo = parseFloat(tres);
if (typeof tres === "number") {
    console.log(tres * nuevo);
}else{
    console.log("No");
}
console.log(typeof tres === "number");


{

 
    // function esPrimo(primo) {
    //     if(primo %= 2 || primo != 1 || primo != 0){
    //         console.log("es primo");
    //     }else{
    //         console.log("no es primo");
            
    //     }
    // }
    // esPrimo(1)
    console.clear();
    
    function esPrimo(numero) {
        let contador = 0;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                contador++;
            }
        }if (contador === 2){
            return true;
        }else{
            return false;
        }
    }
    console.log(esPrimo(9));
}

console.clear();
// FUncion anonima automatica

// {
//     (function(){
//         alert("llamame")
//     })()
// }


// Objetos literales
// Un objeto literal es un conjunto de propiedades que estan entre {}

{
    let carro = {
        color: 'rojo',
        marca: 'suzuki',
        modelo: 'no se',
        año: 2006,
        acelerar() {
            console.log('El carro acelera');
        }
    };
    console.log(carro);
}

// parámetros REST y Operador Spread

{//paramtros rest
    
    function datos(nombre, id, ...rest) {
    return rest;
    }
// solo imprimira el resto de parametros ya que eso es lo que retorna
}
console.log(datos('julian', 103886812, 'araque', 'masculino', 2006));

// arrow function es una funcion que ocupa una linea de codigo
// se declara la funcion => se declaran parametros y el codigo a retornar 

{
    let saludo = nombre => `hola ${nombre}`;
    console.log(saludo('julian'));
//con varios parametros

    let suma =(a, b) => a + b;
    console.log(suma(5, 5));
    
}
console.clear();

{
    const a = [1, 'letras', true, false, [1, 'John']];
    a.push('julian');//agregar en la ultima posicion del array
    a.pop();// elimina el ultimo elemento del array
    console.log(a.pop());
    
}

console.clear();

{
    let carro = {
        color: 'rojo',
        marca: 'suzuki',
        modelo: 'no se',
        año: 2006,
        arrancar : function() {
            return `El carro ${this.color}  acelera y es un ${this.marca} del año ${this.año}`;  //this es para llamar la propiedad de un objeto
            
        },
        sistema: 'hidraulico'
    };
    console.log(carro.arrancar());
    carro.pais = 'colombia',
    carro.despedida = function() {
        return `chao me voy para ${this.pais}`;   
    } 
    console.log(carro.despedida());
    console.clear();

    // De aqui para abajo son metodos para validar si la propiedad del objeto existe
    console.log(Object.keys(carro).indexOf("aqui va el nombre de la propiedad")); //retorna -1 si no existe la propiedad
    if (Object.keys(carro).indexOf('año')=== -1){                                 //y si existe retorna el numero de la posicion
        console.log('el atributo no fue definido');
    }
    console.clear();
    
    console.log(Object.keys(carro).includes("color")) // retorna true o false si existe la propiedad en el objeto
    //Hasta aca la validacion de la propiedad de un objeto
}

console.clear();

// Operadores
{
    let a = 10;
    let b = '10';
    let c = 7;

    let resultado = a + (b + (b - a)* a) / c;
    console.log(resultado);
    console.clear();
    
    // if (typeof a === 'number' && typeof b === 'number'){    //typeof detecta el tipo de un valor
    //     console.log('si es un numero ', a % b);
    // }else{
    //     console.log('no es un numero');
        
    // }

    // Operadores logicos
    // (<) menor que
    // (>) mayor que
    // (<=) menor o igual que
    // (>=) mayor o igual que
    // (==) igual
    // (===) valor y tipo de dato
    // (!=) negacion
     console.log(a < b); 
     console.log(a > b);
     console.log(a >= b);
     console.log(a <= b);
     console.log(a == b);
     console.log(a === b);
     console.log(a !== b);

}

console.clear();
{
    let i = 0;
    console.log(i--);// muestra y luego resta
    console.log(i); //muestra
    console.log(i++); // muestra y luego suma
    console.log(++i); // suma  y muestra
    console.log(i++); // muestra y luego suma
    console.log(i); //muestra
}

// Operador de asignacion
console.clear();

{
    let i = 0;

    console.log (i = + 4); //se le asigana a la variable i un valor
}

console.clear();

// Operadores logicos
{
    let a = 5;
    let b = 7;
    // El operador or o o returna true o false, si hay una expresion verdadera devuelve true, si no devuelve false
    // osea basta con una condicion verdadera para obtener un true
    console.log(a > b || true); 
    // El operador y "&&" compara ambas condiciones  y siempre va a ser negativa excepto si ambas condiciones
    // se cumple
    console.log (false && a < b); 

    // console.log (!false && !true);
    if (!false && !true)  {
        console.log("?");
    } else {
        console.log("??");
    }
        
    let respuesta = (false) ? "si" : "no";
    console.log(respuesta);
}

// Switch case

{
    let dia = 2;
    switch (dia) {
        case 1:
            console.log('lunes');
            break;             
        case 2:
            console.log('martes');
            break;
        case 3: 
            console.log('miercoles');
            break;
        case 4:
            console.log('jueves');
            break;
        case 5:
            console.log('viernes');
            break;
        case 6:
            console.log('sabado');
            break;
        case 7:
            console.log('domingo');
            break;
        default:
            console.log('ese dia no existe');
            break;      
    }         
}

console.clear();

// Ciclos

// while && do while
{
    // let n = 8;
    // let cont = 1;
    // while (cont <= n) {
    //     console.log(cont);
    //     cont++;
    // }

    // do{
    //     console.log('hola');
    // }while(false);


    // Imprimir los primero 20 numeros pares, para esto se hace el ciclo y se le
    // asigan una condicion que divida el numero del ciclo y segun el residuo de la division
    // se imprime o no el numero
    
    // for (let i = 1;i < 40;i++){        
    //     let contador = 0;
    //     for (let divi = 1; divi <= i; divi++){
    //         if (i % divi === 0){
    //             contador++;
    //         }
    //     }if (contador === 2){
    //         console.log(i);
    //     }
    // }

    // let numero = parseFloat(prompt("ingrese la cantidad de numeros: "));
    // const esPrimo = a =>{
    //     let primo = true;
    //     try {
    //         if (a < 0){
    //             throw new ("El numero debe ser positivo");
    //         }            
    //         for(let i = 2; i < a / 2; i++){
    //         if(a % i === 0) primo = false;
    //    }
    //    return primo;
    //     }catch(error){
    //         console.log(error);
    //         return false;
    //     }
        
    // }
    // const llenado = function(numero){
    //     let contador = 1;
    //     let arreglo = [];
    //     while(contador <= numero){
    //         if(esPrimo(contador)){
    //             arreglo.push(contador);
    //         }
    //         contador++;
    //     }
    //     console.log(arreglo);
    // }
    // llenado(numero);
}

//Destructuracion
console.clear();

{
    //En esta destructuracion se le asigna a cada elemento del array 
    //como una variable, al ser llamada la variable se muestra el elemento del array
    const equipos = ["bucaramanga", "america", "cucuta"];
    const [mejor, malo, malisimo] = equipos;
    console.log(mejor, malo, malisimo);
    
}
console.clear();
{
    let persona ={
        nombre: "julian",
        apellido: "araque",
        edad: 18
    }

    let {nombre:name, apellido:lastname, edad:years, username ='LilJulian'} = persona;

    console.log(name, lastname, years, username);

}

console.clear();

{
    //Numeros amigos
    function amigos(a, b) {
        let sumaA = 0;
        let sumaB = 0;
        for (let i = 0; i<= a/2 ; i++) {
            if (a % i === 0 ){
                // console.log(i);                
                console.log(i);   
                sumaA += i;          
            }
        }
        console.log("segundo");
        for (let e = 0; e <= b/2 ; e++) {
            if (b % e === 0 ){
                // console.log(e);                
                console.log(e);     
                sumaB += e;         
            }                                
        }
        if (sumaA === b && sumaB === a){
            console.log("son amigos")

        }else{
            console.log("no son amigos"); 
        }
    }
    amigos(220,284);
}
console.clear();

//Ejercicio numero perfecto
{
    function perfecto(a) {
        let sumaA = 0;
        for (let i = 0; i<= a/2 ; i++) {
            if (a % i === 0 ){                                          
                console.log(i);
                sumaA += i; 
            }
        }if (sumaA === a){
            console.log("es perfecto");  
        } 
        else{
            console.log("no perfecto");
        }   
    }
    perfecto(6);
}
console.clear();
//Parametro rest
{
    // function suma(a, b, ...c) {
    //     let suma = 0;
    //     for (let i = 0; i< c.length; i++){
    //         if(typeof(c[i])=== 'number'){
    //         suma += c[i];
    //         console.log(suma);
    //     }
    //     if (typeof(a)=== 'number') suma += a;
    //     if (typeof(b)=== 'number') suma += b;
    //     return suma;
            
    //     }
    //     return a + b + c;
    // }
    // let resultado = suma(9, "dos", 21, 1, 5, "cuatro", 6);
    // console.log(resultado);
    
}
{
    const arrayA = [1, 2, 3];
    const arrayB = ['a', 'b', 'c'];

    // const arrayC = arrayA + arrayB;
    // const arrayC = arrayA.concat(arrayB);
    const arrayC = [...arrayA, ...arrayB];
    console.log(arrayC);
    
}
console.clear();
{
    // const flecha = julian => {
    //     console.log(julian);
    // }
    // console.log(julian);

    const anonima = (...a) => {
        console.log(a);
        
    }
    console.log(anonima());
    
}

console.clear();

// P.O.O
{
    class Persona{
        constructor(nombreA, apellidoA, edadA){
            this.nombre = nombreA
            this.apellido = apellidoA
            this.edad = edadA
        }
        //Metodos
        comer(){
            console.log(`${this.nombre} esta comiendo empanada`);
        }
    }

    const julian = new Persona('Julian', 'Araque' , 18);
    const johan = new Persona('Johan', 'Bautista' , 18);
    julian.comer();
    johan.comer();   
}

console.clear();

// Expresiones regulares

{
    let palabra = "123 Hola 2 es mi 1 hola 234567 culpa";
    palabra = "1234       vaca";
    let regex = /^([\d]{3,6}).+([a-z]{4,6})$/g;

    // if (palabra.includes(regex)) console.log("si tiene");
    // else{
    //     console.log("no tiene");
    // }

   console.log(regex.test(palabra));
    // console.log(regex.exec(palabra));
    console.log(palabra.match(regex));
}

console.clear();
// Import y export 
{
    const PI = 3.1416;

    console.log(PI);
    
}