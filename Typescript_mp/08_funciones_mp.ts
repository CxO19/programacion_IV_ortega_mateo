// Funciones Simples
function sumarHorasEstudio(horas1: number, horas2: number): number {
    return horas1 + horas2;
}

const totalHorasEstudio: number = sumarHorasEstudio(10, 20);
console.log(`Total de horas de estudio: ${totalHorasEstudio}`);

// Sin devolver un valor

function mostrarAcademiaDeIdiomas(nombre: string): void {
    console.log(`Academia de idiomas: ${nombre}`);
    const cursos: string[] = ["Inglés", "Francés", "Japonés"];
    for (const curso of cursos) {
        console.log(`Curso disponible: ${curso}`);
    }
}

mostrarAcademiaDeIdiomas("Academia Lingüística");

// Funciones con parámetros opcionales
function estudiarIdioma(estudiante: string, nivel?: number): void {
    if (nivel) {
        console.log(`El estudiante ${estudiante} está estudiando en el nivel ${nivel}`);
    } else {
        console.log(`El estudiante ${estudiante} está estudiando`);
        nivel = 1;
        console.log(`Nivel de estudio por defecto ${nivel}`);
    }
}

estudiarIdioma("Mateo Ortega", 5);
estudiarIdioma("Sofia");


function estudiarIdioma2(estudiante: string, nivel: number = 1): void {
    console.log(`El estudiante ${estudiante} está estudiando en el nivel ${nivel}`);
}

estudiarIdioma2("Lucia", 5);
estudiarIdioma2("Carlos");

// Funciones flecha

function potenciarVocabulario(palabras: number): number {
    return palabras * 2;
}
const potenciarVocabularioFlecha = (palabras: number): number => palabras * 2;

const palabrasBase: number = 50;
const vocabularioPotenciado: number = potenciarVocabulario(palabrasBase);
console.log(`Vocabulario Base: ${palabrasBase}, Vocabulario potenciado: ${vocabularioPotenciado}`);

const vocabularioPotenciadoFlecha: number = potenciarVocabularioFlecha(palabrasBase);
console.log(`Vocabulario Base: ${palabrasBase}, Vocabulario potenciado: ${vocabularioPotenciadoFlecha}`);


// FUNCIONES OVERLOADS

function formatearRespuesta(valor: number): string;
function formatearRespuesta(valor: string): string;
function formatearRespuesta(valor: boolean): string;

function formatearRespuesta(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es.MX", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "si" : "no";
    } 
    return `"${valor}"`;
}

console.log(formatearRespuesta(1233434.5));
console.log(formatearRespuesta(true));
console.log(formatearRespuesta("activo"));


// Closures 
function crearContadorProgreso(inicio: number = 0) {
    let leccionesCompletadas = inicio;
    return {
        incrementar: () => ++leccionesCompletadas,
        decrementar: () => --leccionesCompletadas,
        valor: () => leccionesCompletadas,
        resetear: () => { leccionesCompletadas = inicio; }
    };
}

const contador1 = crearContadorProgreso();
const contador2 = crearContadorProgreso(10);

contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador2.incrementar();

console.log(contador1.valor());
console.log(contador2.valor());

contador1.resetear();
console.log(contador1.valor());