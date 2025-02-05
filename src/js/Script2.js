//Asugncion de variable
let numero = 56;
//expression aritmeticas
let multiplicacion = 5*32;
let x   = 5;
let y = 3;
let expresion =5(x)-3(x)+1;
// llamada a funcion
sumar(x,y);
calcularPromedio();
// estructura de una funcion   
function sumar(){
    let suma = 3+5;
    console.log(suma);
}
// estructura de una funcion con retorno
function calcularPromedio(){
    let promedio = (x+y)/2;
    return promedio,x,y;
}

function getMessage(){
    return "Hola mundo";
}

// estructura de una funcion con parametros
function sumar(x,y){
    let suma = x+y;
    console.log(suma);
}
// estructura simple de una funcion
if (condicion){

}
// estructura selectiva doble
if (condicion){

}else{   

}   
// estructura selectiva multiple
if (condicion){

}else if(condicion){

}else{

}
// estructura de bucles
for (let index = 0; index <=10; index++) {
    
}
// estructura de una clase
class Persona {
    nombre="Juan";
    edad=25;
    constructor(apellidP, apellidoM, genero) {
      this.apellidoP = apellidP;
      this.apellidoM = apellidoM;
      this.genero ="F";
    }
  }
// metodo de objetos y propiedades
Persona.numControl= "123456";

//creacion de objetos forma comun y sencilla
const objVehiculo={
color: "Rojo",
modelo: "Vento",   
marca: "Ferrari",
kilometraje: 345,
mostrarDatos: function(){
    //console.log(`Color: ${this.color} Modelo: ${this.modelo} Marca: ${this.marca} Kilometraje: ${this.kilometraje}`);
    console.log("Yo muestro los datos")
}
};

console.log(objVehiculo.modelo);
