/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/ 
var x1=['acero','cobre','latón','aluminio','plata'];
for(let index=0; index<x1.length;index++){
    alert(x1[index]);
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
*/
var z1=[];
var z2=[];
var metals=[];

for(let i=0; i<x1.length;i++){
    z1[i]= x1[i].charAt(0).toUpperCase();
    z2[i]=x1[i].slice(1).toLowerCase();
   metals[i]=z1[i]+z2[i]

   alert(metals[i]);
}

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
*/
for(let i=0;i<x1.length;i++){
    sentence=x1.join(" ");
   
}
alert(sentence)


/*Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/
var contador=[];
for (let i=0;i < 10 ;i++) {
  contador[i]=i;
}
console.log(contador)
