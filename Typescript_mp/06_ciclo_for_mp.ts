// Ciclo for
for (let i = 2; i < 50; i+=5){
    console.log(`Práctica de vocabulario: ${i}`);
}

for (let i = 40; i > 0; i-=5){
    console.log(`Práctica de vocabulario: ${i}`);
}

for (let i = 40; i < 0; i-=5){
    if (i === 20){
        console.log("La práctica de vocabulario ha terminado");
        break;
    }
    if (i === 30){
        console.log("La práctica de vocabulario ha sido interrumpida");
        continue;
    }
    console.log(`Práctica de vocabulario: ${i}`);
}