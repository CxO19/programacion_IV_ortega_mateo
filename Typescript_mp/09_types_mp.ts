type IDMatricula = string | number;
type ApellidoEstudiante = string;
type CoordenadasUbicacion = [number, number];
type PuntoAvance = { 
    x: number;
    y: number;
} 


const origenAvance: PuntoAvance = { x: 0, y: 0 };
const matriculaId: IDMatricula = 42;
const matriculaId2: IDMatricula = "usr-001";


type EvaluacionModulo = PuntoAvance & {
    z: number;
}

interface Estudiante {
    readonly id: number;
    nombre: string;
    email: string;
    avatar?: string;
}

interface TutorIdioma extends Estudiante {
    especialidad: string;
}

const estudiante1: Estudiante = {
    id: 1,
    nombre: "Ana", 
    email: "ana@gmail.com"
};

const estudiante2: Estudiante = {
    id: 2,
    nombre: "Luis",
    email: "luis@gmail.com",
    avatar: "avatar.png"
};

console.log(estudiante1);
console.log(estudiante2);

const tutor: TutorIdioma = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@gmail.com",
    especialidad: "Docente de Inglés"
};