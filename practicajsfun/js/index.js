//rectangulo 

function rectangulo (altura, ancho ){
    let area= altura* ancho
    return area
}

console.log(rectangulo(10,12));


//triangulo

function triangulo (base, altura){
    let area= (base* altura) / 2
    return area
}

console.log(triangulo(10, 30));


//largoDelArray

function largoDelArray (array) {
    return array.length
}

let largo= largoDelArray ([1,2,3,4,5])

console.log(largo);


//cantidadDeLetras

function cantidadDeLetras (palabra){
    return palabra.length
}

console.log(cantidadDeLetras("chau"));


//dolarHoy

function dolarHoy (precio){
    let precioendolares= precio/1000
    return precioendolares
}

console.log(dolarHoy("50000"));


//precioFinal

function precioFinal (precio){
    let final= precio + (precio * 0.21)
    return final
}

console.log(precioFinal(10));


//mitad

function mitad (numero){
    let devolver= numero/2
    return devolver
}

console.log(mitad(10));

//desafio extra 
function diaSegunNumero (day, number){
    let funct= day [number];
    return funct
}

let day= ['monday', 'tuesday', 'wensday', 'thursay', 'friday']
console.log(diaSegunNumero (day, 2));


//ejecutando funciones

function siguiente(numero) {
    return numero + 1;
  }

 console.log(siguiente(2)); 
  
  function doble(numero) {
    return 2 * numero;
  }

 console.log(doble(3)); 
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }
  
 console.log(siguienteDelDoble(3)); 


 function anterior (number){
    return number - 1;
 }

 console.log(anterior (3));


 function triple (number){
    return number * 3 
 }

 console.log(triple (3));
  

 function anteriordeltripe (number){
    return (number *3) -1
 }

 console.log(anteriordeltripe (3));