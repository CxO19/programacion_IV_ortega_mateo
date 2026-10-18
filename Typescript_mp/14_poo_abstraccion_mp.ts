import api = require("typescript/unstable/sync");

abstract class Estudiante {
    abstract estudiar(): void;
    descansar(): void{
        console.log("El estudiante duerme rico")
    }
};

class Mateo extends Estudiante{
    estudiar(): void {
        console.log("Mateo repasa un vocabulario")
    }
}

class Sofia extends Estudiante{
    estudiar(): void {
        console.log("Sofia se come una naranja")
    }
}

const estudiantes: Estudiante[]=[
    new Mateo(),
    new Sofia()
]

console.log(estudiantes);
estudiantes.forEach(estudiante=>estudiante.estudiar());

// Ejercicio
abstract class Poliglota {
    abstract certificarse(): void;
    evaluarNivel(): void {
        console.log("Detectando el nivel de Fluidez del Estudiante")
    }
};

class Carlos extends Poliglota{
    certificarse(): void {
        console.log("Carlos obtiene la certificación C2 en Inglés")
    }
}

class Ana extends Poliglota { 
    certificarse(): void {
        console.log("Ana alcanzó la certificación C2 en Francés")
    }
};