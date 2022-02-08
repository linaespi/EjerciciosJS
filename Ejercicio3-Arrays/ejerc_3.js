const data = ['hola', 2, 5, 'adios'];

const mayorQue= data[1]>data[2];

if (mayorQue===true) {

    console.log('El valor ' +data[1]+' es mayor que '+data[2]);
} else{

    console.log('El valor ' +data[2]+' es mayor que '+data[1]);
}

//El resultado de las 5 operaciones matematicas 

const suma= data[1]+data[2];
const resta= data[2]-data[1];
const multiplicacion=data[1]*data[2];
const division=data[2]/data[1];

console.log('La suma entre ' +data[2]+' y '+data[1]+' es '+ suma);
console.log('La resta entre ' +data[2]+' y '+data[1]+' es '+ resta);
console.log('La multiplicación entre ' +data[2]+' y '+data[1]+' es '+ multiplicacion);
console.log('La division entre ' +data[2]+' y '+data[1]+' es '+ division);




