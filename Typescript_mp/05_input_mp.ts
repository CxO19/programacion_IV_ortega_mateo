import promptSync from 'prompt-sync';
const prompt = promptSync();

let estudiante = prompt("Ingrese estudiante (Mateo, Sofia, Carlos, Ana, Lucia):");
let edad = Number(prompt("Ingrese edad del estudiante:"));
let nivelVocabulario = Number(prompt("Ingrese nivel de vocabulario del estudiante (0-100):"));

if (estudiante === "Mateo" || estudiante === "Sofia" || estudiante === "Carlos" || estudiante === "Ana" || estudiante === "Lucia") {
    if (edad >= 0 && edad <= 100) {
        if (nivelVocabulario >= 0 && nivelVocabulario <= 100) {
            console.log(`Estudiante: ${estudiante}, Edad: ${edad}, Vocabulario: ${nivelVocabulario}`);
        } else {
            console.log("Nivel de vocabulario inválido. Debe estar entre 0 y 100.");
        }
    } else {
        console.log("Edad inválida. Debe estar entre 0 y 100.");
    }
} else {
    console.log("Estudiante desconocido. Ingrese un estudiante válido.");
}