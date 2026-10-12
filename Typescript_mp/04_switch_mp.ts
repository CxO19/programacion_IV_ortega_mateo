type EstudianteIdioma = 
"Mateo Ortega";




let estudianteActual: EstudianteIdioma = "Mateo Ortega";

switch (estudianteActual) {
    case 'Mateo Ortega':
        console.log("Mateo estudia Idiomas y practica su vocabulario diariamente.")
    break;
    case '':
        console.log("Estudiante no registrado en la plataforma de idiomas.")

}



type IdiomasNativos = "Inglés" | "Francés" | "Japonés";

let idiomaSeleccionado: IdiomasNativos = "Inglés";
let nivelFluidez: number = 100;
let tieneCertificado: boolean = true;

switch (idiomaSeleccionado) {
    case 'Inglés':
        if (nivelFluidez > 80 && tieneCertificado) {
            console.log("Inglés avanzado dominado con certificación oficial.");
        } else {
            console.log("Inglés avanzado no dominado completamente.");
        }
        break;
    case 'Francés':
        if (nivelFluidez > 70 && tieneCertificado) {
            console.log("Francés avanzado dominado con certificación oficial.");
        } else {
            console.log("Francés avanzado no dominado completamente.");
        }
        break;
    case 'Japonés':
        if (nivelFluidez > 90 && tieneCertificado) {
            console.log("Japonés avanzado dominado con certificación oficial.");
        } else {
            console.log("Japonés avanzado no dominado completamente.");
        }
        break;
    default:
        console.log("Idioma desconocido en el plan de estudios.");
}