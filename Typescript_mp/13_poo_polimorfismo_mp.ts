class Estudiante {
    estudiar(): void{
        console.log("Estudio Básico")
    }
}

class Mateo extends Estudiante {
    practicaAvanzada(): void{
        console.log("Mateo practica conversación avanzada")
    }
}

class Sofia extends Estudiante {
    practicaRapida(): void{
        console.log("Sofia repasa vocabulario veloz")
    }
}

const estudiantes: Estudiante[] = [
    new Mateo(),
    new Sofia()
]
estudiantes.forEach(estudiante=>estudiante.estudiar)