interface ParticipanteTorneo {
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
}

class Goku implements ParticipanteTorneo {
    nombre = "Goku";
    nivelPoder = 9000;
    presentarTecnica(): void {
        console.log("Goku utiliza el Kamehameha")
    }
}

class Vegeta implements ParticipanteTorneo {
    nombre = "Vegeta";
    nivelPoder = 8500;
    presentarTecnica(): void {
        console.log("Vegeta utiliza el Resplandor Final")
    }
}


const goku = new Goku();
const vegeta = new Vegeta();

goku.presentarTecnica();
vegeta.presentarTecnica()