import api = require("typescript/unstable/sync");

abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("El boxeador duerme rico")
    }
};

class Rocky extends Boxeador{
    atacar(): void {
        console.log("Rocky tira un quinio")
    }
}

class Apollo extends Boxeador{
    atacar(): void {
        console.log("Apollo se come una naranja")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]

console.log(boxeadores);
boxeadores.forEach(boxeador=>boxeador.atacar());

// Ejercicio
abstract class Saiyajin {
    abstract transformarse(): void;
    detectarKi(): void {
        console.log("Detectando el nivel de Energia del Enemigo")
    }
};

class Goku extends Saiyajin{
    transformarse(): void {
        console.log("Goku se transforma en super saiyajin blue")
    }
}

class Vegeta extends Saiyajin { 
    transformarse(): void {
        console.log("Vegeta alcanzo el ultra ego")
    }
};