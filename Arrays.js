/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
*/ 
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var x1=[meses[4],meses[10]];
console.log("Punto 3.a)",x1);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
x2=meses.sort();
console.log("Punto 3.b)",x2);

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.unshift('Inicio');
meses.push('Fin')
console.log("Punto 3.c)",meses);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.shift();
meses.pop();
console.log("Punto 3.d)",meses);

/*Invertir el orden del array (utilizar reverse)
*/
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.reverse();
console.log("Punto 3.e)",meses);

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
x3=meses.join(" - ");
console.log("Punto 3.f)",x3); 

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
x4=meses.slice(4);
console.log("Punto 3.g)",meses,x4);




