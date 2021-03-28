/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
 */
var x1= 'Bienvenidos';
x1=x1.toUpperCase();
console.log("Punto 2.a)",x1);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var x2='Presentación';
var y2=x2.substr(0,5);
console.log("Punto 2.b)",y2);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
 */
var x3='Cartuchera';
var y3= x3.substring(7);
console.log("Punto 2.c)",y3);


/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/ 
var x4='computADora';
var y4= x4.substring(0,1);
var y4=y4.toUpperCase();
var y5=x4.substring(1);
var y5=y5.toLowerCase(y5);
var y6= y4 + y5;
console.log("Punto 2.d)",y6);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/ 
var x5='Hola Mundo';
var x5=x5.indexOf(" ");
console.log("Punto 2.e)",x5);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
var x6= 'hola muNdo';
var y7= x6.substring(0,1);
var y7=y7.toUpperCase();
var y8=x6.indexOf("m");
var y9=x6.substring(y8,y8+1);
var y9=y9.toUpperCase();
var y10=x6.substring(y8+1);
var y10=y10.toLowerCase();
var y11=x6.substring(1,y8);
var palabra=y7+y11+" " +y9+y10;
console.log("Punto 2.f)",palabra);
