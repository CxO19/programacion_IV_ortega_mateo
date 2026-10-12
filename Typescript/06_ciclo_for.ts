// Ciclo for
for (let i = 2; i < 50; i+=5){
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-=5){
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i < 0; i-=5){
    if (i === 20){
        console.log("El entranamiento jedi ha terminado");
        break;
    }
    if (i === 30){
        console.log("El entranamiento jedi ha sido interrumpido");
        continue;
    }
    console.log(`Entrenamiento jedi: ${i}`);
}

const personajes: string[] = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo"]
for (let i = 0; i < personajes.length; i++){
    console.log(`Personaje: ${personajes[i]}`);
}

for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}

const jedis: jedi[] = [
    { nombre: "Luke Skywalker"}
]