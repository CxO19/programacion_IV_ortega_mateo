// Constantes 
const RATIO_APRENDIZAJE: number = 3.1435;
const META_DIARIA: number = 15;
const SERVICIO_IDIOMA: string= "vocabService";
const CURSO_ACTIVO: boolean = true;
console.log("RATIO: ", RATIO_APRENDIZAJE)
console.log("META DIARIA: ", META_DIARIA)
console.log("NOMBRE DEL SERVICIO: ", SERVICIO_IDIOMA)
console.log("CURSO ACTIVO: ", CURSO_ACTIVO)


// Variables
// let

let rachaDias: number =0;
console.log(rachaDias);
rachaDias= 5;
console.log(rachaDias);
rachaDias++;
console.log(rachaDias);
rachaDias+= 5;
console.log(rachaDias);
rachaDias=rachaDias+3;
console.log(rachaDias);
rachaDias= 5

let estudiante: string= "Mateo Ortega";
let certificadoVencido: boolean= true;

console.log(estudiante)
console.log(certificadoVencido)

let idiomas: string[] = ["Inglés", "Francés", "Japonés"];
console.log(idiomas);

let palabraDominada: string | null = null;
let idiomaNativo: string | undefined;

let puntosExperiencia: bigint = 9869869849456534n;
//tipo symbol

let idioma1: symbol = Symbol("Inglés");
    console.log(idioma1.description);
let idioma2: symbol = Symbol("Inglés");
    console.log(idioma2.description);
console.log(idioma1 === idioma2);