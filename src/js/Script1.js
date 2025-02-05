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
    //console.log(objVehiculo.modelo);

    const electroico = new Object();
    electroico.marca = "Sony";
    electroico.modelo = "Xperia";
    electroico.precio = 10000;
    electroico.ram=12;
    electroico.almacenamiento=256;
    electroico.getModelo = function(){
        //return this.modelo;
        console.log("El modelo del celular es es: "+this.modelo);
    }
    electroico.getPrecio = function(){
        //return this.precio;
        console.log("El precio del celular es: "+this.precio);
    }
    //console.log("El precio del celular es: "+electroico.precio)

//creacio de objetos usando clase E56

class Proyecto{
    constructor(nombre,duracion, responsable,costo,tipoProyecto){
        this.nombre=nombre;
        this.duracion=duracion;
        this.responsable=responsable;
        this.costo=costo;
        this.tipoProyecto=tipoProyecto;       
    }
    getNombre(){
        return `El nombre del Proyecto es ${this.nombre}`
        // return this.nombre;
    }
}
const Proyecto1= new Proyecto();
console.log(Proyecto1)
const Proyecto2= new Proyecto("Casa",8,"Keyla");
console.log(Proyecto2);
console.log(Proyecto2.getNombre());