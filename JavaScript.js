'use strict';

//Paralelismo del café
function hacerCafe(nombreDelCafe){
    return `Aqui tiene su ${nombreDelCafe}, que lo disfrute`;
}
console.log(hacerCafe('Capuccino'));

// Comillas francesas para ecma ``

function saludo (){
    return 'Hola'
}

console.log(saludo());

/*
let numero1= 0;
let numero2= 0;

numero1= parseInt(prompt('Ingrese el número uno'));
numero2=parseInt(prompt('Ingrese el número dos'));

// Funciones con más de un parametro

function sumar(numero1,numero2){
    return numero1 + numero2
}

console.log(sumar(numero1,numero2));

*/

//Función Anónima 

const sum = function (a,b) {
    return a+ b ;
}

console.log(sum(4,7));

//Argumentos son los que estan en sum(5,8)

console.log(sum(5,8));

//Parametros Argumentos Y Valor de Retorno 

function suma(c,d){

    const result = c+d;
    return result    
}
//console.log(suma(1,3));

const sumResult= suma(4,8);
console.log(sumResult);
//Constante no definida
// console.log(result);

/*
// Importante Utilizar la palabra reservada return; sino tendremos un valor no definido 
function multiplicacion(f,h){
    f*h
}

console.log(multiplicacion(8,9));
*/
/*
//despues del return no se toma nada en la siguiente linea 
function multiplicacion(f,h){
    return f*h;
    h+f;
}

console.log(multiplicacion(8,9));
*/

// AMBITOS DE LAS VARIABLES 
/*
1>0 //True
0<1 //True
2 === 2;  // True
'2' === 2; //False // se utiliza para saber el tipo de valor y tipo de dato 
2 == 2  // Se utiliza unicamente para saber el tipo de valor 
*/

const variableGlobal = 'Soy Global' ; 
console.log(variableGlobal);

/*
//No se podria hacer 
const variableGlobal = 'Realmente no soy global';+
console.log(variableGlobal);
*/


// Bloque 
/*
if (2 === 2){
    const variableGlobal = 'Realmente no soy global';
    const variableNoGlobal = 'No soy global'; 
    console.log(variableGlobal);
    console.log(variableNoGlobal);
}
*/
//Como llavar variables de un bloque 

let globalVar = 'Ey, I am global'; 

if (2 === 2){
    globalVar = 'Ey, I am  still global';
    console.log(globalVar)
}

console.log(globalVar);

//Crear variable en funciones sin generar conflicto 

function f1(){
    const item = 1;
    return item;
}

function f2(){
    const item =2;
    return item;
}

console.log(f1());

console.log(f2());

//Falta Funciones Flecha