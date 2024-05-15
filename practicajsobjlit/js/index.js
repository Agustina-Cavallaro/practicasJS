let misDatos = {
    nombre: `Tati`,
    apellido: ` Cavallaro`,
    dni: `47031883`,
    comidasFavoritas: [`sushi`, `hamburguesa`,  `tarta`],
    age: 18,
    saludar: function () {
        return `Hola mi nombre es `+ this.nombre + this.apellido + ` y tengo` + this.age + ` años . Mi primer comida favorita es ` + this.comidasFavoritas[0]
    }
}

console.log(misDatos.saludar());


//auto
class Car {
    brand = "toyota";
    model = "yaris";
    year = "2024";
    color = "white";
    position = 0;
    

    goForward(meters) {
        this.position = this.position + meters;
        //this.position += meters;
    }

    goBackwards(meters) {
        this.position = this.position - meters;
        //this.position -= meters;
    }
}

car= new Car()
car.goBackwards(2)
console.log(car.position); 





//autonuevo
class autoNuevo {
    brand = "toyota";
    model = "yaris";
    year = "2024";
    color = "white";
    position = 0;

    move(meters) {
        this.position += meters; 
    }
}   

autoNuevo = new autoNuevo()
autoNuevo.move(10)
autoNuevo.move(-5)
console.log(autoNuevo.position);



///batalla de superheroes///////

let ironMan = {
    nombre: "Iron Man", 
    equipo: "Avengers", 
    poderes: ["Volar", "Lanzar misiles", "Disparar laser"], 
    energia: 100, 
    getPoder: function (n3){
        let energiarestante= this.energia - 10;
        return `Poder elegido de`+ this.nombre + `:`+  this.poderes [n3]+ `. energiarestante:` + this.energia;
            // el numero entero  esta entre 0 y 2 ya que hay 3 poderes en el array, lo que significa que los numeros correspondientes son 0,1 y 2//
    }
}


let Hulk = { 
    nombre: "Hulk", 
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"], 
    energia: 100, 
    getPoder: function (n3){
        let energiarestante= this.energia - 10;
        return `Poder elegido de`+ this.nombre + `:`+  this.poderes [n3]+ `. energiarestante:` + this.energia;
    }
}


// for (let i=0; i<10; i++){
//     console.log(Hulk.getPoder(i));  
// }


// for (let i=0; i<8; i++){
//     console.log(ironMan.getPoder(i));
// }

console.log(ironMan.energia);
console.log(ironMan.getPoder(1))
console.log(Hulk.energia);
console.log(Hulk.getPoder(1));