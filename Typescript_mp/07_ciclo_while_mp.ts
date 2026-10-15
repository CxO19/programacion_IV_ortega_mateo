let palabrasAprendidas = 1024;
let palabrasMeta = 2048;
while (palabrasAprendidas < palabrasMeta) {
    console.log("Palabras aprendidas: ", palabrasAprendidas);
    palabrasAprendidas += 256;
}

let nivelIdioma = 1;
while (nivelIdioma <= 10) {
    console.log("Nivel del estudiante: ", nivelIdioma);
    nivelIdioma++;
};

let ejerciciosRealizados = 0;
let aciertosVocabulario = 0;
while (ejerciciosRealizados < 10) {
    ejerciciosRealizados++
    let acierto = Math.random() < 0.5;
    if (acierto) {
        aciertosVocabulario++;
        console.log(`Ejercicio ${ejerciciosRealizados}: Acierto. Total de aciertos: ${aciertosVocabulario}`);
    } else {
        console.log(`Ejercicio ${ejerciciosRealizados}: Fallo. Total de aciertos: ${aciertosVocabulario}`);
    }
}


let sesionesEstudio = 0;
do {
    sesionesEstudio++;
    console.log(`Sesión número: ${sesionesEstudio}`)
} while (sesionesEstudio < 5);

interface CursoIdioma {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const cursosEscaneados: CursoIdioma[] = [
    { nombre: "Inglés", tipo: "Gramática", velocidad: 1000 },
    { nombre: "Francés", tipo: "Gramática", velocidad: 1200 },
    { nombre: "Japonés", tipo: "Conversación", velocidad: 900 },
    { nombre: "Alemán", tipo: "Lectura", velocidad: 800 }
];

let indiceCurso = 0;
while (indiceCurso < cursosEscaneados.length) {
    const curso = cursosEscaneados[indiceCurso];
    if (curso.tipo === "Gramática") {
        console.log(`Curso: ${curso.nombre}, Tipo: ${curso.tipo}, Velocidad: ${curso.velocidad}`);
        indiceCurso++;
        continue;
    }
    if (curso?.velocidad < 1000) {
        console.log(`Curso: ${curso.nombre}, Tipo: ${curso.tipo}, Velocidad: ${curso.velocidad}`);
        break;
    }
    indiceCurso++;
}

const cursosEscaneados2: CursoIdioma[] = [
    { nombre: "Inglés", tipo: "Gramática", velocidad: 1000 },
    { nombre: "Francés", tipo: "Gramática", velocidad: 1200 },
    { nombre: "Japonés", tipo: "Conversación", velocidad: 900 },
    { nombre: "Alemán", tipo: "Lectura", velocidad: 800 }
];

let indiceCurso2 = 0;
while (indiceCurso2 < cursosEscaneados2.length) {
    const curso = cursosEscaneados2[indiceCurso2];
    if (curso?.tipo === "Gramática") {
        indiceCurso2++;
        continue;
    }
    if (curso?.velocidad < 1000) {
        break;
    }
    console.log(`Curso: ${curso.nombre}, Tipo: ${curso.tipo}, Velocidad: ${curso.velocidad}`);
    indiceCurso2++;
}