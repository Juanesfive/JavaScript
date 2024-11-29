// const juan = function jeff(nombre) {
//     console.log(nombre);
    
    
// }
// juan("juan");



// const anonima = (...a) => {
//     console.log(a);
    
// }
// console.log(anonima);

class Persona {
    constructor(nombreA, apellidoA, edadA) {
        this.nombre = nombreA;
        this.apellido = apellidoA;
        this.edad = edadA;
        
    }    
    comer() {
        console.log(`${this.nombre} esta comiendo`);
}

}
const juan = new Persona("Juan", "Vasquez", 19);
console.log(juan.comer());


