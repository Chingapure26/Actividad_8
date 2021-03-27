var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var x1=[meses[4],meses[10]];
console.log("Punto 3.a)",x1);

x2=meses.sort();
console.log("Punto 3.b)",x2);

var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.unshift('Inicio');
meses.push('Fin')
console.log("Punto 3.c)",meses);

var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.shift();
meses.pop();
console.log("Punto 3.d)",meses);

var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.reverse();
console.log("Punto 3.e)",meses);

var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
x3=meses.join(" - ");
console.log("Punto 3.f)",x3); 

var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
x4=meses.slice(4);
console.log("Punto 3.g)",meses,x4);




