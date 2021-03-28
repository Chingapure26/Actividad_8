/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/ 
x1=Math.random();
console.log(x1);
if (x1 < 0.5){
    alert('Lower than 0,5')
}
    else{
        alert('Greater than 0,5')
    } 

/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
*/ 
var age=1;
if (age < 2){
    alert('Bebé');
} else if(age >=2 && age<=12) {
    alert('Niño')
} else if (age>12 &&  age<=19) {
    alert('Adolescente')
} else if (age>19 && age<=30){
    alert('Joven')
} else if (age>30 && age<=60) {
    alert('Adulto')
}else if (age>60 && age<=75){
    alert('Adulto mayor')
 } else {
     alert('Anciano')
}
