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

const mateoEstudiante=new Mateo();
mateoEstudiante.estudiar();
mateoEstudiante.practicaAvanzada();
const sofiaEstudiante=new Sofia();
sofiaEstudiante.estudiar();
sofiaEstudiante.practicaRapida();


class Poliglota {
    practicar(): void{
        console.log("El poliglota realiza una práctica básica")
    }
}

class Carlos extends Poliglota {
    inmersionTotal(): void{
        console.log("Carlos realiza una inmersión total en el idioma")
    }
}

class Ana extends Poliglota {
    traduccionFluida(): void {
        console.log("Ana realiza una traducción fluida y precisa")
    }
}


const carlosPoliglota= new Carlos();
carlosPoliglota.inmersionTotal();
carlosPoliglota.practicar();
const anaPoliglota = new Ana();
anaPoliglota.practicar();
anaPoliglota.traduccionFluida();