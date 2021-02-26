"use strict"

//alert('Hola desde un archivo externo');
console.log('Hola consola');
//Esto es un comentario de una línea

/* Esto es un comentario
      en
          bloque */


//Para usar variables globales usar var
var nombre = 'Maki';
console.log(nombre)

//Para trabajar con variables locales o de bloque usar let
function saludo() {
    let nombre = 'Nombre2';
    console.log(nombre)

    let edad = 28;
    console.log(edad)
}

saludo();

//Para que una variable tenga un valor constante
const pi = 3.1416;

//variable con valor numérico
var edad = 35;

//pasar la variable numérica a cadena de texto
var edadtxt = String(edad);

//variable con valor de texto
var cantidad = "100";

//convertir la variable con cadena de texto a valor numérico
var cantidadNueva = Number(cantidad);

//para trabajar con fechas
var fecha = new Date ();

/* para probar en la consola:

OBTENER datos:
fecha.getDay()
fecha.getDate()
fecha.getHours()

SETEAR datos, por ejemplo si quiero trabajar con el día 5:
fecha.setDate(5)

*/

var simbolo1 = Symbol();
var simbolo2 = Symbol();
// los simbolos tienen valores UNICOS (aunque tengan la misma sintaxis, como arriba), entonces simbolo1 !=== simbolo2

var ambiente = Symbol('Dev');

//ESTRUCTURAR DATOS CON JSON:
var persona = {nombre: 'Maki', twitter: 'Makisti'};
//si quiero enviar/almacenar estos datos en un servidor los tengo que convertir de objetos a texto utilizando json:
var personaJSON = JSON.stringify(persona);
//para recuperar este dato desde un servidor hay que convertirlo a objeto de nuevo:
var nuevaPersona = JSON.parse(personaJSON)

//OPERADORES ARITMÉTICOS************************************************************************************************************
var datoA = 10;
var datoB = 20;

//Suma +
var suma = datoA + datoB;
console.log(`La suma de ${datoA} + ${datoB} es igual a:`, suma);

//Resta -
var resta = datoA - datoB;
console.log(`La resta de ${datoA} - ${datoB} es igual a:` , resta);

//Multiplicación *
var Multiplicación = datoA * datoB;
console.log(`La multiplicación de ${datoA} * ${datoB} es igual a: `, Multiplicación);

//División /
var División = datoA / datoB;
console.log(`La división de ${datoA} por ${datoB} es igual a: `, División);

//Módulo o Residuo %
var Residuo = datoA % datoB;
console.log(`El residuo de ${datoA} % ${datoB} es igual a: `, Residuo);

//Incremento ++
var Incremento = datoA;
Incremento++;
//lo de arriba es igual a decir Incremento = Incremento+1
console.log(`El incremento de ${datoA} es igual a: `, Incremento);


//Decremento --
var Decremento = datoA;
Decremento--;
console.log(`El decremento de ${datoA} es igual a: `, Decremento);

//OPERADORES RELACIONALES*****************************************************************************************************
//Los operadores relacionales me permiten definir o validar el tipo de relaciones que existen entre dos entidades obteniendo un valor booleano
var datoA = 10;
var datoB = 20;

//Mayor que >
var MayorQue = datoA > datoB;
console.log(`Es ${datoA} mayor que ${datoB}?`, MayorQue);

//Menor que <
var MenorQue = datoA < datoB;
console.log(`Es ${datoA} menor que ${datoB}?`, MenorQue);

//Mayor o igual que >=
var MayorOigualQue = datoA >= datoB;
console.log(`Es ${datoA} mayor o igual que ${datoB}?`, MayorOigualQue);

//Menor o igual que <=
var MenorOigualQue = datoA <= datoB;
console.log(`Es ${datoA} menor o igual que ${datoB}?`, MenorOigualQue);

//Igual que ==
var IgualQue = datoA == datoB;
console.log(`Es ${datoA} igual que ${datoB}?`, IgualQue);

//Es distinto que !==
var DistintoQue = datoA !== datoB;
console.log(`Es ${datoA} distinto que ${datoB}?`, DistintoQue);

//OPERADORES LÓGICOS************************************************************************************************************
var datoA = 10;
var datoB = 20;

//Operador Y o AND: &&
var AND = (datoA > 10 && datoB > 10);
console.log(`Resultado de evaluación AND:`, AND);

//Operador O u OR: ||
var OR = (datoA > 10 || datoB > 10);
console.log(`Resultado de evaluación OR:`, OR);

//Operador NOT: !
var NOT = !(datoA > 10);
console.log(`Resultado de evaluación NOT:`, NOT);

//OPERADORES DE ASIGNACIÓN********************************************************************************************************
//Permiten guardar el resultado de una operación dentro de una variable
var datoA = 10;

//Asignación simple
var igual = datoA;
console.log(`El resultado de la asignación simple es:`, igual);

//Sumar y asignar (es lo mismo que una suma): +=
var MasIgual = 10;

MasIgual += datoA;
//Es lo mismo que poner MasIgual = MasIgual + datoA
console.log(`El resultado de la asignación += es:`, MasIgual);

//Restar y asignar: -=
var MenosIgual = 10;

MenosIgual -= datoA;
console.log(`El resultado de la asignación -= es:`, MenosIgual);

//Multiplicar y asignar: *=
var MultiplicarIgual = 10;

MultiplicarIgual *= datoA;
console.log(`El resultado de la asignación *= es:`, MultiplicarIgual);

//Dividir y asignar: /=
var DividirIgual = 20;

DividirIgual /= datoA;
console.log(`El resultado de la asignación /= es:`, DividirIgual);

//OPERADOR NEGATIVO (cambia el signo del valor que se almacena)*****************************************************************
//Se agrega un signo - antes de la variable
var datoA = 10;

var datoB = -datoA;
console.log(`El valor de datoB es:`, datoB);

//OPERADORES DE CONCATENACIÓN***************************************************************************************************
//unen dos textos o dos valores, realiza operación aritmética si une números (por ejemplo suma)
var datoA = 10;
var datoB = 20;

var Nombre3 = "Pipo";
var Apellido3 = "Gomez";

//Concatenación de números (usa el signo +)
var concatNum = datoA + datoB;
console.log(`La concatenación de los números ${datoA} y ${datoB} es igual a:`, concatNum);

//Concatenación de cadenas de texto
var concaText = Nombre3 + " " + Apellido3;
console.log(`La concatenación de las cadenas de texto forma:`, concaText);

//Concatenación de números como texto
var concatNumComoText = "2" + "8";
console.log(`Los números 2 y 8 se unen como texto para formar:`, concatNumComoText); 

//Concatenación de texto y número (se unen como textos, no suma)
var concaTextyNum = "8" + datoA;
console.log(`El texto "8" y el número ${datoA} se unen para formar:`, concaTextyNum);

//OPERADOR TERNARIO O CONDICIONAL*************************************************************************************************
//Permite hacer dos operaciones en una sola
var datoA = 10;
var datoB = 20;

// Condición ? TRUE : FALSE
var resultado = datoA > datoB ? "Si es mayor" : "No es mayor";
console.log(`El resultado con el operador condicional es:`, resultado);

//OPERADOR DE TIPO DE DATO********************************************************************************************************

var datoA = 10; //Número
var nombre = "Pipo" //Texto
var activo = true //Booleano
var persona = {
    edad: 34,
    deporte: 'Correr'
} //Objeto

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof persona);

//CONDICIÓN IF - ELSE *******************************************************************************************************************
var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La primer condición se cumple";
} else if (datoA == datoB){
    resultado = "La segunda condición se cumple";
} else {
    resultado = "Ninguna condición se cumple";
}

console.log(`El resultado de la evaluación if es:`, resultado);

//Else if se usa para agregar otra condición a evaluar luego de que la anterior no se cumpla
//CONDICIONES ANIDADAS**********************************************************************************************************************

var datoA = 100;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La primer condición se cumple";

    if (datoC < datoB){
        resultado = "Evaluación anidada verdadera";
    } else {
        resultado = "No se cumplió la evaluación anidada";
    }

} else {
    resultado = "Ninguna condición se cumple";
}

console.log(`El resultado de la evaluación if es:`, resultado);

//ESTRUCTURA SWITCH **************************************************************************************************************************
//Evaluación con números (va a evaluar los valores de var edad según el flujo de control establecido en switch)

var edad = 10;
var resultado = "algo que va a cambiar según";

switch (edad) {
    case 10:
        resultado = "La edad es 10 años";         
        break;

    case 20:
        resultado = "La edad es 20 años";         
        break;
        
    case 30:
        resultado = "La edad es 30 años";         
        break;

    case 40:
        resultado = "La edad es 40 años";         
        break;              
   
    default:
        resultado = "Ningún valor coincide";
        break;
}

console.log(`El resultado de la evaluación con números es:`, resultado);

//Evaluación con cadenas de texto

var producto = "Radio";
var resultado = "sfdsfsd";

switch (producto) {
    case "TV":
        resultado = "Tiene TV";
        break;

    case "Radio":
        resultado = "Tiene Radio";
        break;

    case "Pipa":
        resultado = "Tiene Pipa";
        break;

    case "Plato":
        resultado = "Tiene Plato";
        break;

    default:
        resultado = "No tiene nada";
        break;
}

console.log(`El resultado de la evaluación con texto es:`, resultado);

//CICLOS = LOOPS = ITERADORES **********************************************************************************************************************

/* Son estructuras de control. Sirven para repetir acciones
Repetición = iteración

Hay 2 tipos de ciclos:
a) CICLOS DEFINIDOS:  For
b) CICLOS INDEFINIDOS: While y Do While 

Componentes de CICLO FOR:
1°- Contador, es la base de las iteraciones
2°- Condición o evaluación
3°- Paso (incremento o decremento) */

var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log(`Producto #` + contador);   
}

// CICLO WHILE: permite ejecutar un set de instrucciones mientras se cumpla cierta condición (primero evalúa y luego ejecuta)
//debugger sirve para ver detenidamente cada paso en el navegador (watch)

var productos = 5;

while (productos > 0) {
    console.log("Producto vendido");
    productos--    
}

//CICLO DO...WHILE: difiere del ciclo While en "dónde" va a evaluar la condición
//Primero ejecuta las acciones y después pregunta si se pueden seguir ejecutando (en While primero evalúa y después ejecuta acciones)

var objetos = 5;

do {
    console.log("Objeto vendido");
    objetos--;
    
} while (objetos >= 1);

//Control de ciclos:
//Break (rompe con el ciclo, lo termina) | Continue (le indica que continúe a la siguiente iteración del ciclo)

//(Ejemplo) Para contar cuantos números impares existen desde 0 a 20
var contador = 0;
var cuenta = 0 ;

for (contador = 0; contador<=20; contador++) {
   
   if (contador == 5) {
       break;
    }
   
   if (contador % 2 == 0) {
        continue;
    }

    cuenta++;
    //debugger;

}

console.log(`Hay ${cuenta} números impares`);

/* FUNCIONES**************************************************************************************************************************************
Es un conjunto de instrucciones que podemos invocar con un nombre clave, para esto escribimos el nombre de la función seguido de un par de paréntesis
La función debe regresar algo, devolver un resultado, para lo que se usa "return"
Puede recibir implementos con los que trabajar, que son llamados parámetros, puede tener desde 1 hasta n cantidad. Cuando yo invoco a la función 
debo enviarle los valores de los parámetros con que trabaja 
*/

function saludar() {
    var saludo = 'Hola Mundo';
    
    return saludo;
}

//Ahora la invocamos:
saludar();

//////////////////////////////////////////////

function saludo(nombre, edad) {
    console.log(`Hola:`, nombre);
    console.log(`Edad:`, edad);
    var resultado = `${nombre} tiene ${edad} años`;
    return resultado;
}

//Así se debe invocar dándole los valores de sus parámetros:
// saludo("Maki", 28);

//Crear variable cuyo valor es el resultado de la función (se invoca a la función en esta variable):
var mensajeFinal = saludo("Maki", 28);

console.log(mensajeFinal);

/* Hay veces en que al invocar la función no se le dice el valor que tendrá el parámetro que esté usando
Se le puede asignar un valor por defecto al parámetro en la declaración de función y luego al invocarla si no se le pone un valor al parámetro
se vería como resultado el que trae por defecto. Además, si al invocarla se le asigna un valor a su parámetro, éste se actualiza al valor
asignado en la invocación. Por ejemplo:
*/

function contar(cantidad=20) {
    console.log(`En total hay:`, cantidad);
}

//invocando:
contar();

//PARÁMETRO REST: se usa cuando no se cuántos parámetros (con valores) más tengo que enviar a la función
//entonces en su declaración se usa el parámetro rest, que engloba a toda la cantidad de parámetros que envíe cuando invoque la función
//es la opción para recibir n cantidad de parámetros

function cocinar(ingrediente1, ingrediente2, ...masIngredientes) {
    console.log("ingrediente 1:", ingrediente1);
    console.log("ingrediente 2:", ingrediente2);
    console.log("mas ingredientes:", masIngredientes);
}

//invocación:
cocinar("pollo", "arroz", "tomate", "papa", "arvejas");

//PARÁMETRO SPREAD: es la opción para enviar n cantidad de parámetros y que no estén declarados todos directamente
//Se escribe en la invocación de la función, NO en la declaración (como el REST), hace que los valores se dispersen correspondientemente
//según los parámetros declarados en la función.

function aCocinar(ingred1, ingred2, ingred3) {
    console.log("ingrediente1:", ingred1);
    console.log("ingrediente2:", ingred2);
    console.log("ingrediente3:", ingred3);
}

var dosIngredientes = ["pollo", "tomate"];   //esto es un arreglo, esta var contiene 2 parámetros para la función

aCocinar(...dosIngredientes, "papa");


/* FUNCIONES ANÓNIMAS: permite no asignarle un nombre a un conjunto de instrucciones q deseamos ejectuar, sin necesidad de asociarlo.

(
    function() {
        var mensajeX = "Hola de nuevo";
        console.log(mensajeX);
    }
)()


Ahora vamos a escribirlo correctamente según el "use strict" */
//se le puede agregar parámetros y todo:


var saludito = function (nombre){
    var mensajeX = "Hola de nuevo: " + nombre;
    return mensajeX;
}

/* CB = CALLBACK: Una función puede recibir como parámetro otras funciones. Puede ser una función declarada previamente y en ese caso
solo escribo el nombre para asignarla como parámetro, o puedo escribir como parámetro una función anónima directamente
En este ejemplo la función utilizada en sumarCB recibe como parámetro el valor de "suma" */

function calcular (datoA, datoB, sumarCB) {
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarCB(suma);
}

//invoco a la función y le asigno sus parámetros:

calcular (2, 3, function(resultado){
    console.log("Suma es: ", resultado);
})

// Una función puede recibir n cantidad de callbacks (en este caso le ponemos 2)
//Ayudan a controlar procesos asíncronos
function calcula (datoA, datoB, sumanCB, restanCB) {
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumanCB(suma);
    restanCB(resta);
}

calcula (2, 3, function(resultado){
    console.log("Suma es: ", resultado);
}, function(resultado){
    console.log("Resta es: ", resultado);

})

/* FUNCIÓN ARROW = FAT ARRROW = LAMBDA:  es otra forma de escribir funciones anónimas, utilizan el símbolo =>
En este caso la variable saludar es igual a la función arrow, la sintaxis es: parámetro => resultado (lo que retorna) */

var saludar = nombre => "Hola " + nombre;

console.log(saludar("Susana"));

//otros ejemplos:

var sumar = valor => valor+10;

console.log(sumar(10));

var calculo = (datoA, datoB) => datoA+datoB;

console.log(calculo(10, 20));

//si necesito realizar mas operaciones las pongo dentro de una llave:

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC;
}

console.log(generar(5, 4));

//cuando no le ponemos ningún parámetro a usar:

var validar = () => {
    return "Validación correcta";
}

console.log(validar());


//OPERADOR THIS: revisar porke no entendí nada

/* EVENTOS DEL MOUSE******************************************************************************************************************************
Elementos de escucha: permite saber cuando algo sucede (como un click sobre algo). Se pueden agregar en las etiquetas de html o en JavaScript
Para trabajarlo en JS se debe asociar el html al archivo .js
En .js se hace referencia al elemento de html mediante querySelector(nombre del botón, por ej) y se guarda en una constante (botón en este caso)
VER ARCHIVOS DE EJERCICIO, UNIDAD 8-1


DOM: Document Object Model 
Para que JavaScript pueda liberar todo su poder es necesario de un mecanismo que me permita interactuar con HTML e incluso con CSS. 
Este mecanismo se llama "Document Object Model" o lo podemos conocer también como DOM. Esto en español significa: modelo del objeto documento. 
La principal característica del DOM es que nos permite usar los elementos o etiquetas que componen una página web como objetos y así poder manipularlos con JavaScript. 
DOM es el puente entre HTML y JavaScript, pues al poder usar o referirnos a los elementos que componen nuestro sitio o aplicación, 
podremos manipular a nuestro gusto y necesidad todo lo que hayamos creado. 

var boton = document.getElementById("boton");

boton.addEventListener('click', function() {

})

En la línea 578 se hace la referencia al elemento de html y se le asigna la var boton:
El objeto llamado "document" hace referencia a todo el contenido que tenemos en el navegador 
getElementById va a buscar un elemento que tenga de id = botón

Luego podemos trabajar con ese elemento, agregarle mas eventos y manipular el contenido que se muestra.
**************************************************
NAVEGADOR (BOM)

Hay otro jugador en medio y es el navegador. Hemos visto el contenido, pero este contenido es el documento. ¿Quién contiene al documento? El navegador. 
Y para esto contamos con otro objeto llamado BOM. El BOM significa "Browser Object Model", y también, al igual que el DOM, están definidos por la W3C, que es la organización 
que se encarga de dictar los estándares web a nivel mundial. Para evitar confusiones, existen algunos objetos independientes que hacen referencia tanto al BOM como al DOM. 
Y si lo vemos en perspectiva, el BOM es el contenedor o padre principal, y dentro vive el DOM. 
Para el DOM ya tenemos el objeto'document'que habíamos visto, pero para el caso del BOM tenemos otro objeto que se llama 'window' y también tiene sus propios métodos 
y sus propiedades, así que pueden actuar de manera independiente pero podemos coordinar su operación.

var boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    console.log(window.location.href)
})

esto muestra en consola la ubicación del archivo "boton", cuando se le hace click


NODE.JS:
Node es un entorno para poder trabajar en SERVIDOR pero con JavaScript. Sí, JavaScript podemos utilizarlo directamente en el navegador, pero como es un lenguaje muy versátil, 
entonces se genera una opción para poderlo tener del lado del servidor, así entonces podemos ejecutar código de JavaScript como si ejecutaras código de Java o código de PHP o 
código de algún otro tipo de lenguaje.

WEBPACK:
Actualmente tenemos muchos archivos con los cuales vamos a trabajar y Webpack nos permite empaquetar todo en muy pocos archivos o incluso, en ciertas circunstancias, 
en un solo archivo. Entonces, las recomendación es: aprende y conoce sobre este empaquetador para que puedas agilizar tu trabajo. De hecho, algunos "frameworks" como Angular, 
por ejemplo, utilizan este empaquetador para generar sus aplicaciones.

TypeScript:
TypeScript es un transpilador. ¿Qué es eso? Hay muchas características que existen y que se van agregando a JavaScript pero que no todos los navegadores soportan. 
La labor de TypeScript es hacer un transpilado, es decir, convertir este código, con todas las cosas nuevas que casi todos los navegadores no soportan, a un código que 
realmente pueda soportarlo. Esto es posible gracias a TypeScript. 

*/