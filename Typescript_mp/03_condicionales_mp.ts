// condicionales
let leccion: number=5;
if (leccion < 5) {
    console.log ("el estudiante puede avanzar al módulo intermedio");
}



// condiciones dobles o dos caminos
if (leccion >= 16) {
    console.log("El estudiante puede avanzar al módulo avanzado");
} else {
    console.log("no puede")
}


if (leccion >= 16) {
    console.log("El estudiante puede avanzar al módulo avanzado");
} else if (leccion >=8){
    console.log("no puede")
} else {"El estudiante no puede avanzar al módulo intermedio ni al avanzado"}


if (leccion >= 16) {
    console.log("El estudiante puede avanzar al módulo avanzado");
} else {
    if (leccion >= 8) {
        console.log("El estudiante puede avanzar al módulo avanzado");
    } else {
        console.log("El estudiante no puede avanzar al módulo intermedio ni al avanzado")
    }
}

leccion = 20
let puntaje: number = 25
if (leccion >= 8 && leccion <16 && puntaje >16 ) {
    console.log("El estudiante puede avanzar al módulo intermedio")
} else if (leccion >= 16){
    console.log("El estudiante puede avanzar al módulo avanzado")
} else {
    console.log("El estudiante no puede avanzar al módulo intermedio ni al avanzado")
}


// condicional if con operadores logicos or
leccion = 5;
puntaje = 56
if (leccion > 8 || puntaje >=20){
    console.log ("El estudiante puede avanzar al módulo intermedio")
} else if (leccion >= 16) {
    console.log("El estudiante puede avanzar al módulo avanzado")
} else {
    console.log("El estudiante no puede avanzar al módulo intermedio ni al avanzado")
}



interface Profesor {
  nombre: string;
  edad: number;
  certificados: number;
  suspendido: boolean;
}


interface Estudiante {
  nombre: string;
  idioma: TipoIdioma;
  leccion: number;
  progreso: number;
  fluidez: number;
  vocabulario: number;
}


const profesor: Profesor = {
  nombre: "Ash",
  edad: 15,
  certificados: 8,
  suspendido: false
};


const alumnoEstudio: Estudiante = {
  nombre: "Charizard",
  idioma: "Inglés",
  leccion: 85,
  progreso: 120,
  fluidez: 95,
  vocabulario: 78
};


// Primer IF: Validar profesor
if (
  profesor.certificados >= 8 &&
  profesor.edad >= 12 &&
  !profesor.suspendido
) {
  console.log("Profesor autorizado");


  // Segundo IF: Validar Estudiante
  if (
    alumnoEstudio.leccion >= 40 &&
    alumnoEstudio.progreso > 0 &&
    (
      alumnoEstudio.idioma === "Inglés" ||
      alumnoEstudio.idioma === "Francés" ||
      alumnoEstudio.idioma === "Alemán"
    )
  ) {
    console.log("Estudiante autorizado");
    if (
      alumnoEstudio.leccion >= 80 &&
      alumnoEstudio.fluidez >= 90 &&
      alumnoEstudio.progreso >= 100
    ) {
      console.log("Categoría Maestro");


    } else if (
      alumnoEstudio.leccion >= 60 &&
      (
        alumnoEstudio.fluidez >= 75 ||
        alumnoEstudio.vocabulario >= 80
      )
    ) {
      console.log("Categoría Élite");
    } else if (
      alumnoEstudio.leccion >= 40 &&
      alumnoEstudio.fluidez >= 50 &&
      alumnoEstudio.progreso > 0
    ) {
      console.log("Categoría Avanzado");
    } else {
      console.log("Sin categoría asignada");
    }
  } else {
    console.log("El estudiante no cumple los requisitos");
  }
} else {
  console.log("Profesor no autorizado");
}